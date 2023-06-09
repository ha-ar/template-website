import type { AccessArgs } from 'payload/config'

import type { User } from '../payload-types'
import { checkRole } from '../collections/Users/checkRole'

type isAdmin = (args: AccessArgs<undefined, User>) => boolean

export const admins: isAdmin = ({ req: { user } }) => {
  return checkRole(['admin'], user)
}
