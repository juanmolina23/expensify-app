import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth'
import { useHistory } from 'react-router-dom'

function Header() {
	const dispatch = useDispatch()
	const history = useHistory()
	return (
		<header>
			<h1>Expensify</h1>
			<NavLink to='/dashboard' activeClassName='is-active' exact>
				Dashboard
			</NavLink>
			<NavLink to='/create' activeClassName='is-active'>
				Create Expense
			</NavLink>
			<button
				onClick={() => {
					dispatch(startLogout())
					history.push('/')
				}}
			>
				Logout
			</button>
		</header>
	)
}

export default Header
