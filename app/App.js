import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import CreateExpense from './components/CreateExpense'
import EditExpense from './components/EditExpense'
import LoginPage from './components/LoginPage'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<PublicRoute path='/' component={LoginPage} exact />
					<PrivateRoute path='/dashboard' component={Dashboard} />
					<PrivateRoute path='/create' component={CreateExpense} />
					<PrivateRoute path='/edit/:id' component={EditExpense} />
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App
