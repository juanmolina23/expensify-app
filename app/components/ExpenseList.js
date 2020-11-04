import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense } from '../actions/expenses'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
function ExpenseList() {
	const expensesUnfiltered = useSelector(state => state.expenses)
	const filters = useSelector(state => state.filters)
	const dispatch = useDispatch()
	const expenses = selectExpenses(expensesUnfiltered, filters)
	return (
		<div>
			<h2>Expense List.</h2>
			{expenses.map(expense => (
				<ExpenseListItem key={expense.id} expense={expense} />
			))}
		</div>
	)
}

export default ExpenseList
