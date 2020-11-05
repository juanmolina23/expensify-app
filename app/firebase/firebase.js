import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyBWPgRGTKJKqOmYcWxUclF6zVYmrO3QEvM',
	authDomain: 'expensify-dbb3e.firebaseapp.com',
	databaseURL: 'https://expensify-dbb3e.firebaseio.com',
	projectId: 'expensify-dbb3e',
	storageBucket: 'expensify-dbb3e.appspot.com',
	messagingSenderId: '653132738482',
	appId: '1:653132738482:web:528ffa4757deab2ed4feab'
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }
