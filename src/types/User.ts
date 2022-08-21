import { Status } from './Status'

export type User = {
	id: string
	avatar: string
	nickname: string
	status: Status
	bio: string
	friends: User[]
}
