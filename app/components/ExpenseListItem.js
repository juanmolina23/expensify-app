import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ExpenseListItem(props) {
	const expenses = useSelector(state => state.expenses)
	const { expense } = props

	return (
		<div>
			<Link to={`/edit/${expense.id}`}>{expense.description}</Link>
			<p>
				{expense.amount} - {expense.createdAt}
			</p>
		</div>
	)
}

export default ExpenseListItem
