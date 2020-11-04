import React, { useEffect } from 'react'
import { NavLink, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import CreateExpense from './CreateExpense'

function Header() {
	return (
		<div>
			<h1>Expensify</h1>
			<NavLink to='/' activeClassName='is-active' exact>
				Dashboard
			</NavLink>
			<NavLink to='/create' activeClassName='is-active'>
				Create Expense
			</NavLink>
		</div>
	)
}

export default Header
