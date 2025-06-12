import { Configuration, CoreApi } from "@goauthentik/api"

const authentikCfg = new Configuration({
  basePath: process.env.AUTHENTIK_URL + "/api/v3",
  accessToken: process.env.AUTHENTIK_TOKEN,
})
const authentikApi = new CoreApi(authentikCfg)

export async function getAuthentikUsers() {
  const excludedUsers = process.env.AUTHENTIK_EXCLUDED_USERS?.split(",") || []
  const { results } = await authentikApi.coreUsersList()
  return results.filter((user) => user.email && user.email.length > 0 && !excludedUsers.includes(user.name))
}

export async function getGroups() {
  const { results } = await authentikApi.coreGroupsList()
  return results.filter((group) => group.name && group.name.length > 0)
}

export async function getGroup(id: string) {
  const results = await getGroups()
  return results.find((group) => group.pk === id)
}
