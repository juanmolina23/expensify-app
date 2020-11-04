import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import CreateExpense from './components/CreateExpense'
import EditExpense from './components/EditExpense'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path='/' exact>
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
