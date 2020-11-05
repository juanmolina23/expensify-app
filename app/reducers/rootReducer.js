import { combineReducers } from 'redux'
import expensesReducer from './expensesReducer'
import filtersReducer from './filtersReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer,
	auth: authReducer
})

export default rootReducer
