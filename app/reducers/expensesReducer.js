// Expenses Reducer
import { uuid } from 'uuidv4'

const initialExpensesState = []

const expensesReducer = (state = initialExpensesState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense]
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id)
		case 'EDIT_EXPENSE':
			return state.map(expense => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					}
				} else {
					return expense
				}
			})
		default:
			return state
	}
}

export default expensesReducer
