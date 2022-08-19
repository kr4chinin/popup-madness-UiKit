import { useState } from 'react'
import UserPopup from './components/UserPopup/UserPopup'
import { useCreatePortalsDiv } from './hooks/useCreatePortalsDiv'
import { User } from './types/User'

const App = () => {
	useCreatePortalsDiv()

	const [isOpened, setIsOpened] = useState(false)

	function onClose() {
		setIsOpened(false)
	}

	let user: User = {
		id: '1',
		nickname: 'Anonimous2002',
		status: 'Do not disturb 💤',
		bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis sequi non, id magnam dolore inventore consequatur! A quidem ab assumenda id dolor soluta reiciendis neque, vero blanditiis consectetur sit rerum sapiente voluptas! Eum beatae pariatur sapiente est quae. Sunt, ad fugiat optio similique neque ipsa sit dolorum illo iure, repudiandae eaque doloremque deleniti enim autem, omnis at eligendi qui nihil? Exercitationem, quos tenetur mollitia corporis incidunt ratione tempora, perferendis reiciendis aliquid eaque, similique minus? Perferendis quo aliquam maxime ratione facilis veniam reprehenderit dicta labore repudiandae necessitatibus! Impedit quas magni, id beatae exercitationem quisquam sapiente officiis placeat error! Quisquam unde aspernatur odio doloremque iste, nostrum deserunt magnam quidem aliquid soluta vero perspiciatis ea corrupti sunt praesentium iure. Alias, ipsum omnis. Ipsum laborum excepturi repudiandae eligendi amet aliquam at hic fuga fugit? Excepturi et perferendis voluptatibus sapiente rem assumenda totam culpa mollitia voluptatum eveniet dolores similique fugiat ducimus distinctio, dolorem reprehenderit quo.',
		friends: []
	}

	return (
		<div>
			<button onClick={() => setIsOpened(true)}>Open user pop-up</button>
			<UserPopup isOpened={isOpened} onClose={onClose} user={user} />
		</div>
	)
}

export default App
