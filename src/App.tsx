import { useState } from 'react'
import UserPopup from './components/UserPopup/UserPopup'
import { useCreatePortalsDiv } from './hooks/useCreatePortalsDiv'

const App = () => {
	useCreatePortalsDiv()

    const [isOpened, setIsOpened] = useState(false)

    function onClose() {
        setIsOpened(false)
    }

	return (
        <div>
            <button onClick={() => setIsOpened(true)}>
                Open user pop-up
            </button>
            <UserPopup isOpened={isOpened} onClose={onClose} id='1'/>
        </div>
    )
}

export default App
