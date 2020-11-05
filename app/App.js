import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import CreateExpense from './components/CreateExpense'
import EditExpense from './components/EditExpense'
import LoginPage from './components/LoginPage'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path='/' exact>
						<LoginPage />
					</Route>
					<Route path='/dashboard'>
						<Dashboard />
					</Route>
					<Route path='/create'>
						<CreateExpense />
					</Route>
					<Route path='/edit/:id'>
						<EditExpense />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App
