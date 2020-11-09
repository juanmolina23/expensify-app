import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startGoogleLogin, startFacebookLogin } from '../actions/auth'
import { useHistory, useLocation } from 'react-router-dom'

function LoginPage() {
	const dispatch = useDispatch()
	const history = useHistory()
	function onGoogleLogin() {
		dispatch(startGoogleLogin()).then(() => {
			//history.push('/dashboard')
			if (history.location.pathname === '/') {
				history.push('/dashboard')
			}
		})
	}

	function onFacebookLogin() {
		dispatch(startFacebookLogin()).then(() => {
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
				<button className='button box-layout__button' onClick={onGoogleLogin}>
					Login with Google
				</button>
				<button className='button' onClick={onFacebookLogin}>
					Login with Facebook
				</button>
			</div>
		</div>
	)
}

export default LoginPage
