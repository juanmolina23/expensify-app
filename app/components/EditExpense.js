import React, { useEffect } from 'react'
import ExpenseForm from './ExpenseForm'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses'

function EditExpense() {
	const { id } = useParams()
	const history = useHistory()
	const dispatch = useDispatch()
	const expense = useSelector(state =>
		state.expenses.find(expense => expense.id === id)
	)

	function handleRemove() {
		dispatch(removeExpense(expense.id))
		history.push('/')
	}

	return (
		<>
			<ExpenseForm
				expense={expense}
				onSubmit={expense => {
					dispatch(editExpense(id, expense))
					history.push('/')
				}}
			/>
			<button onClick={handleRemove}>Remove</button>
		</>
	)
}

export default EditExpense
