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
		<div className='content-container'>
			<div className='list-header'>
				<div className='show-for-mobile'>Expenses</div>
				<div className='show-for-desktop'>Expense</div>
				<div className='show-for-desktop'>Amount</div>
			</div>
			<div className='list-body'>
				{expenses.length === 0 ? (
					<div className='list-item list-item--message'>
						<span>No expenses to show</span>
					</div>
				) : (
					expenses.map(expense => (
						<ExpenseListItem key={expense.id} expense={expense} />
					))
				)}
			</div>
		</div>
	)
}

export default ExpenseList
