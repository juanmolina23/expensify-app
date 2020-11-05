import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
function ExpenseListItem(props) {
	const expenses = useSelector(state => state.expenses)
	const { expense } = props

	return (
		<div>
			<Link to={`/edit/${expense.id}`}>
				<h3>{expense.description}</h3>
			</Link>
			<p>
				{numeral(expense.amount / 100).format('$0,0.00')} -
				{moment(expense.createdAt).format('MMMM Do, YYYY')}
			</p>
		</div>
	)
}

export default ExpenseListItem
