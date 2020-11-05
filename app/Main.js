import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LoadingPage from './components/LoadingPage'
import { Provider } from 'react-redux'
import store from './store/store'

import { startSetExpenses } from './actions/expenses'
import './firebase/firebase'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<LoadingPage />, document.querySelector('#app'))

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.querySelector('#app')
	)
})

if (module.hot) {
	module.hot.accept()
}
