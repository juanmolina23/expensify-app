import React, { useEffect } from 'react'
import ExpenseForm from './ExpenseForm'
import { useDispatch, useSelector } from 'react-redux'
import { startAddExpense, addExpense } from '../actions/expenses'
import { useHistory } from 'react-router-dom'

function CreateExpense() {
	const dispatch = useDispatch()
	const history = useHistory()
	return (
		<div>
			<p>Add Expense</p>
			<ExpenseForm
				onSubmit={expense => {
					dispatch(startAddExpense(expense))
					history.push('/')
				}}
			/>
		</div>
	)
}

export default CreateExpense
