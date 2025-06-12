import { Configuration, CoreApi } from "@goauthentik/api"

import { getAuthentikUsers, getGroup, getGroups } from "./importers/authentik"
import { ListsService, NewList, Subscriber, SubscriberQueryRequest, SubscribersService } from "./listmonk"

async function importGroupsIntoListmonk() {
  const groups = await getGroups()
  const {
    data: { results: lists },
  } = await ListsService.getLists()

  for (const group of groups) {
    const list = lists.find((item) => item.name === group.name)
    if (!list) {
      console.log(`Creating new list for group: ${group.name}`)
      await ListsService.createList({
        name: group.name,
        description: `Imported from Authentik group: ${group.name}`,
        type: NewList.type.PRIVATE,
      })
    }
  }
}

async function main() {
  const users = await getAuthentikUsers()
  const {
    data: { results: subscribers },
  } = await SubscribersService.getSubscribers()

  await importGroupsIntoListmonk()

  for (const user of users) {
    // Check if user exists in Listmonk
    let subscriber: Subscriber = subscribers.find((item) => item.email === user.email)
    if (!subscriber) {
      console.log(`Creating subscriber for user: ${user.email} (${user.name})`)
      const { data } = await SubscribersService.createSubscriber({ email: user.email, name: user.name })
      subscriber = data
    }

    // Set user as enable in Listmonk
    if (subscriber.status !== "enabled") {
      console.log(`Enabling subscriber: ${user.email}`)
      await SubscribersService.updateSubscriberById(subscriber.id, { status: "enabled" })
    }

    // Add user to lists
    const groups = await getGroups()
    const {
      data: { results: lists },
    } = await ListsService.getLists()
    const groupsIdsOfUser = user.groups || []
    const groupsOfUser = groupsIdsOfUser.map((groupId) => groups.find((group) => group.pk === groupId))
    const listOfUser = subscriber.lists || []

    const groupsToAdd = groupsOfUser.filter((group) => group && !listOfUser.some((list) => list.name === group.name))
    for (const group of groupsToAdd) {
      const list = lists.find((item) => item.name === group.name)
      console.log(`Adding subscriber ${subscriber.email} to list: ${list.name}`)
      await SubscribersService.manageSubscriberLists({
        ids: [subscriber.id],
        action: SubscriberQueryRequest.action.ADD,
        target_list_ids: [list.id],
        status: SubscriberQueryRequest.status.CONFIRMED,
      })
    }
  }
}

;(async () => {
  await main()
})()
