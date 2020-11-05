import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function PublicRoute(props) {
	const isAuthenticated = useSelector(state => !!state.auth.uid)
	const { component: Component, ...rest } = props
	return (
		<Route
			{...rest}
			component={() =>
				isAuthenticated ? (
					<Redirect to='/dashboard' />
				) : (
					<Component {...props} />
				)
			}
		/>
	)
}

export default PublicRoute
