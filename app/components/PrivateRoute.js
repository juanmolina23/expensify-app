import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from './Header'

function PrivateRoute(props) {
	const isAuthenticated = useSelector(state => !!state.auth.uid)
	const { component: Component, ...rest } = props
	return (
		<Route
			{...rest}
			component={() =>
				isAuthenticated ? (
					<div>
						<Header />
						<Component {...props} />
					</div>
				) : (
					<Redirect to='/' />
				)
			}
		/>
	)
}

export default PrivateRoute
