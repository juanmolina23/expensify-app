import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LoadingPage from './components/LoadingPage'
import { Provider } from 'react-redux'
import store from './store/store'
import { startSetExpenses } from './actions/expenses'
import { firebase } from './firebase/firebase'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

let hasRendered = false
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			document.querySelector('#app')
		)
		hasRendered = true
	}
}

ReactDOM.render(<LoadingPage />, document.querySelector('#app'))

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		store.dispatch(startSetExpenses()).then(() => {
			renderApp()
		})
		console.log('Logged in')
	} else {
		console.log('Logged out')
		renderApp()
	}
})

if (module.hot) {
	module.hot.accept()
}
