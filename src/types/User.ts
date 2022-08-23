import { Avatar } from './Avatar'
import { Status } from './Status'

export type User = {
	id: string
	avatar: Avatar
	nickname: string
	status: Status
	bio: string
	friends: User[]
}
