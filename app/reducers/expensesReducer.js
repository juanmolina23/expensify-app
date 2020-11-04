// Expenses Reducer
import { uuid } from 'uuidv4'

const initialExpensesState = [
	{
		id: uuid(),
		description: 'Gym',
		note: '',
		amount: 640,
		createdAt: 1604500152600
	},
	{
		id: uuid(),
		description: 'Water bill',
		note: '',
		amount: 450,
		createdAt: 1604500152507
	},
	{
		id: uuid(),
		description: 'Phone bill',
		note: '',
		amount: 40,
		createdAt: 1604500152407
	}
]

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
