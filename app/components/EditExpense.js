import React, { useEffect } from 'react'
import ExpenseForm from './ExpenseForm'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	editExpense,
	removeExpense,
	startRemoveExpense,
	startEditExpense
} from '../actions/expenses'

function EditExpense() {
	const { id } = useParams()
	const history = useHistory()
	const dispatch = useDispatch()
	const expense = useSelector(state =>
		state.expenses.find(expense => expense.id === id)
	)

	function handleRemove() {
		dispatch(startRemoveExpense(expense.id))
		history.push('/')
	}

	return (
		<div>
			<div className='page-header'>
				<div className='content-container'>
					<h1 className='page-header__title'>Edit Expense</h1>
				</div>
			</div>
			<div className='content-container'>
				<ExpenseForm
					expense={expense}
					onSubmit={expense => {
						dispatch(startEditExpense(id, expense))
						history.push('/dashboard')
					}}
				/>
				<button className='button button__secondary' onClick={handleRemove}>
					Remove Expense
				</button>
			</div>
		</div>
	)
}

export default EditExpense
