import { uuid } from 'uuidv4'
import database from '../firebase/firebase'

const addExpense = expense => ({
	type: 'ADD_EXPENSE',
	expense
})

const startAddExpense = expense => {
	return dispatch => {
		database
			.ref('expenses')
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
	return dispatch => {
		return database
			.ref(`expenses/${id}`)
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
	return dispatch => {
		return database
			.ref(`expenses/${id}/`)
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
	return dispatch => {
		return database
			.ref('expenses')
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
