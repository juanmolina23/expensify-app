import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

function ExpensesSummary() {
	const expensesUnfiltered = useSelector(state => state.expenses)
	const filters = useSelector(state => state.filters)
	const expenses = selectExpenses(expensesUnfiltered, filters)

	return (
		<div>
			<h1>
				Viewing {expenses.length} expenses totalling:{' '}
				{numeral(getExpensesTotal(expenses) / 100).format('$0,0.00')}{' '}
			</h1>
		</div>
	)
}

export default ExpensesSummary
