import { CoreService } from "../authentik"

export async function getAuthentikUsers() {
  const excludedUsers = process.env.AUTHENTIK_EXCLUDED_USERS?.split(",") || []
  const { results } = await CoreService.coreUsersList()
  return results.filter((user) => user.email && user.email.length > 0 && !excludedUsers.includes(user.name))
}

export async function getGroups() {
  const { results } = await CoreService.coreGroupsList()
  return results.filter((group) => group.name && group.name.length > 0)
}
