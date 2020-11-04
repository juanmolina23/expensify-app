import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#app')
)

if (module.hot) {
	module.hot.accept()
}
