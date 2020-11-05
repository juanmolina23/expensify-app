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
		<div className='box-layout'>
			<div className='box-layout__box'>
				<h1 className='box-layout__title'>Expensify</h1>
				<p>It's time to get your expenses under control</p>
				<button className='button' onClick={onLogin}>
					Login with Google
				</button>
			</div>
		</div>
	)
}

export default LoginPage
