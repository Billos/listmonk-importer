import { Configuration, CoreApi } from "@goauthentik/api"

import { Subscriber, SubscriberQueryRequest, SubscribersService } from "./listmonk"

async function main() {
  // Fetch users from Authentik
  const authentikCfg = new Configuration({
    basePath: process.env.AUTHENTIK_URL + "/api/v3",
    accessToken: process.env.AUTHENTIK_TOKEN,
  })
  const authentikApi = new CoreApi(authentikCfg)

  const excludedUsers = process.env.AUTHENTIK_EXCLUDED_USERS?.split(",") || []

  const { results } = await authentikApi.coreUsersList()
  const users = results.filter((user) => user.email && user.email.length > 0 && !excludedUsers.includes(user.name))
  const {
    data: { results: subscribers },
  } = await SubscribersService.getSubscribers()

  for (const user of users) {
    // Check if user exists in Listmonk
    let subscriber: Subscriber = subscribers.find((item) => item.email === user.email)
    if (!subscriber) {
      console.log(`Creating subscriber for user: ${user.email} (${user.name})`)
      const { data } = await SubscribersService.createSubscriber({ email: user.email, name: user.name })
      subscriber = data
    } else {
      console.log(`Subscriber already exists for user: ${user.email}`)
    }

    // Set user as enable in Listmonk
    if (subscriber.status !== "enabled") {
      console.log(`Enabling subscriber: ${user.email}`)
      await SubscribersService.updateSubscriberById(subscriber.id, { status: "enabled" })
    }

    // Add user to lists
    const listsToAdd: number[] = process.env.LISTMONK_LIST_IDS.split(",").map(Number)
    console.log(`Adding subscriber ${subscriber.email} to lists: ${listsToAdd.join(", ")}`)
    for (const listId of listsToAdd) {
      await SubscribersService.manageSubscriberLists({
        ids: [subscriber.id],
        action: SubscriberQueryRequest.action.ADD,
        target_list_ids: [listId],
        status: SubscriberQueryRequest.status.CONFIRMED,
      })
    }
  }
}

;(async () => {
  await main()
})()
