import {
	firebase,
	googleAuthProvider,
	facebookAuthProvider
} from '../firebase/firebase'

const login = uid => ({
	type: 'LOGIN',
	uid
})

const logout = () => ({
	type: 'LOGOUT'
})

const startGoogleLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAuthProvider)
	}
}

const startFacebookLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(facebookAuthProvider)
	}
}

const startLogout = () => {
	return () => {
		return firebase.auth().signOut()
	}
}

export { startGoogleLogin, startFacebookLogin, startLogout, login, logout }
