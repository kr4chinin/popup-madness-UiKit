import './styles/main.scss'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { setupStore } from './store/store'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
