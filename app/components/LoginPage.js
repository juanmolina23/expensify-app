import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startLogin } from '../actions/auth'
import { useHistory, useLocation } from 'react-router-dom'

function LoginPage() {
	const dispatch = useDispatch()
	const history = useHistory()
	function onLogin() {
		dispatch(startLogin()).then(() => {
			//history.push('/dashboard')
			if (history.location.pathname === '/') {
				history.push('/dashboard')
			}
		})
	}
	return (
		<div>
			<button onClick={onLogin}>Login</button>
		</div>
	)
}

export default LoginPage
