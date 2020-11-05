import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'
import { Link } from 'react-router-dom'
function ExpensesSummary() {
	const expensesUnfiltered = useSelector(state => state.expenses)
	const filters = useSelector(state => state.filters)
	const expenses = selectExpenses(expensesUnfiltered, filters)

	return (
		<div className='page-header'>
			<div className='content-container'>
				<h1 className='page-header__title'>
					Viewing <span>{expenses.length}</span> expenses totalling:
					<span>
						{numeral(getExpensesTotal(expenses) / 100).format('$0,0.00')}
					</span>
				</h1>
				<div className='page-header__actions'>
					<Link className='button' to='/create'>
						Add Expense
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ExpensesSummary
