import database from '../firebase/firebase'

const addExpense = expense => ({
	type: 'ADD_EXPENSE',
	expense
})

const startAddExpense = expense => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid
		database
			.ref(`users/${uid}/expenses`)
			.push(expense)
			.then(ref => {
				dispatch(
					addExpense({
						id: ref.key,
						...expense
					})
				)
			})
	}
}

// REMOVE_EXPENSE
const removeExpense = id => ({
	type: 'REMOVE_EXPENSE',
	id
})

const startRemoveExpense = id => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid
		return database
			.ref(`users/${uid}/expenses/${id}`)
			.remove()
			.then(() => {
				dispatch(removeExpense(id))
			})
	}
}

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})

const startEditExpense = (id, updates) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid
		return database
			.ref(`users/${uid}/expenses/${id}/`)
			.update(updates)
			.then(() => {
				dispatch(editExpense(id, updates))
			})
	}
}

//SET_EXPENSES
const setExpenses = expenses => ({
	type: 'SET_EXPENSES',
	expenses
})

const startSetExpenses = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid
		return database
			.ref(`users/${uid}/expenses`)
			.once('value')
			.then(snapshot => {
				const expenses = []
				snapshot.forEach(child => {
					expenses.push({
						id: child.key,
						...child.val()
					})
				})
				dispatch(setExpenses(expenses))
			})
	}
}

export {
	addExpense,
	removeExpense,
	editExpense,
	startAddExpense,
	startSetExpenses,
	startRemoveExpense,
	startEditExpense
}
