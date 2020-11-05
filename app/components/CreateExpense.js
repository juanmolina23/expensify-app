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
			<div className='page-header'>
				<div className='content-container'>
					<h1 className='page-header__title'>Add Expense</h1>
				</div>
			</div>
			<div className='content-container'>
				<ExpenseForm
					onSubmit={expense => {
						dispatch(startAddExpense(expense))
						history.push('/')
					}}
				/>
			</div>
		</div>
	)
}

export default CreateExpense
