import { useState } from 'react'
import UserPopup from './components/Popups/UserPopup/UserPopup'
import { useCreatePortalsDiv } from './hooks/useCreatePortalsDiv'
import { Status } from './types/Status'
import { User } from './types/User'

const App = () => {
	useCreatePortalsDiv()

	const [isOpened, setIsOpened] = useState(false)

	function onClose() {
		setIsOpened(false)
	}

	const [user, setUser] = useState<User>({
		id: 'user-1',
		avatar: '👤',
		nickname: 'Anonimous2002',
		status: Status.DO_NOT_DISTURB,
		bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis sequi non, id magnam dolore inventore consequatur! A quidem ab assumenda id dolor soluta reiciendis neque, vero blanditiis consectetur sit rerum sapiente voluptas! Eum beatae pariatur sapiente est quae. Sunt, ad fugiat optio similique neque ipsa sit dolorum illo iure, repudiandae eaque doloremque deleniti enim autem, omnis at eligendi qui nihil? Exercitationem, quos tenetur mollitia corporis incidunt ratione tempora, perferendis reiciendis aliquid eaque, similique minus? Perferendis quo aliquam maxime ratione facilis veniam reprehenderit dicta labore repudiandae necessitatibus! Impedit quas magni, id beatae exercitationem quisquam sapiente officiis placeat error! Quisquam unde aspernatur odio doloremque iste, nostrum deserunt magnam quidem aliquid soluta vero perspiciatis ea corrupti sunt praesentium iure. Alias, ipsum omnis. Ipsum laborum excepturi repudiandae eligendi amet aliquam at hic fuga fugit? Excepturi et perferendis voluptatibus sapiente rem assumenda totam culpa mollitia voluptatum eveniet dolores similique fugiat ducimus distinctio, dolorem reprehenderit quo.',
		friends: [
			{
				id: 'user-2',
				avatar: '👨🏻‍🦱',
				nickname: 'Maximus_Robot',
				status: Status.ONLINE,
				bio: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab velit aliquam obcaecati in sequi. Cum, molestiae. Harum repudiandae ipsam id optio debitis iusto iure fugit, et similique possimus, sit veritatis vitae eligendi delectus facere minus facilis voluptas officia. Quos.',
				friends: []
			},
			{
				id: 'user-3',
				avatar: '🧑🏻‍💻',
				nickname: '180-Killer',
				status: Status.OFFLINE,
				bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum aliquam suscipit excepturi nobis impedit nulla.',
				friends: []
			},
			{
				id: 'user-4',
				avatar: '🕵🏼',
				nickname: 'AndrewCoolX',
				status: Status.PLAYING,
				bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit, ipsam corrupti explicabo quod velit distinctio totam suscipit officia? Quod ipsa magni ducimus cupiditate ex delectus, soluta tempora, blanditiis accusantium culpa odio ab neque quibusdam!',
				friends: []
			},
			{
				id: 'user-5',
				avatar: '👨🏻‍🍳',
				nickname: 'XxJohnxX',
				status: Status.WORKING,
				bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil voluptatum aut fuga eligendi tenetur fugiat ab sunt doloremque eveniet cum excepturi esse accusamus culpa, corporis molestias dolor inventore commodi! Velit, nesciunt. Voluptas accusantium dolore vero nemo porro hic rerum, explicabo nam nobis architecto, dicta iusto est repellendus eos. Recusandae ipsa corrupti sapiente eaque nisi est ad mollitia amet inventore!',
				friends: []
			},
			{
				id: 'user-6',
				avatar: '🧓🏼',
				nickname: 'Queen2003',
				status: Status.DO_NOT_DISTURB,
				bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga suscipit distinctio sequi voluptates nostrum, eum, itaque fugiat quae facere earum consectetur nisi modi quo eius qui aliquam iure, sit explicabo pariatur deleniti ut architecto? Doloremque, rem nihil. Quam tempore, sit recusandae laboriosam, non accusamus eligendi mollitia incidunt voluptatibus minima minus. Debitis excepturi vero atque velit corrupti ipsum voluptate perspiciatis expedita sed impedit cum quisquam, alias error harum sapiente provident at inventore. Quibusdam veniam in esse quae maiores rerum error obcaecati cupiditate laudantium totam vitae excepturi enim nostrum officia fuga laborum deleniti eos ipsum officiis, impedit suscipit! Voluptates distinctio porro minus!',
				friends: []
			}
		]
	})

	function handleSetUserStatus(status: Status) {
		let newUser = user
		newUser.status = status
		setUser(newUser)
	}

	function handleChangeFriends(friends: User[]) {
        let newUser = user
        newUser.friends = friends
		setUser(newUser)
	}

	function handleChangeNickname(nickname: string) {
        let newUser = user
        newUser.nickname = nickname
        setUser(newUser)
	}

	return (
		<div>
			<button
				onClick={() => {
					setIsOpened(true)
				}}
			>
				Open user pop-up
			</button>
			<UserPopup
				handleChangeNickname={handleChangeNickname}
				isOpened={isOpened}
				onClose={onClose}
				user={user}
				setUserStatus={handleSetUserStatus}
				handleChangeFriends={handleChangeFriends}
			/>
		</div>
	)
}

export default App
