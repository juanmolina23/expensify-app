import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
function ExpenseListItem(props) {
	const expenses = useSelector(state => state.expenses)
	const { expense } = props

	return (
		<Link className='list-item' to={`/edit/${expense.id}`}>
			<div>
				<h3 className='list-item__title'>{expense.description}</h3>
				<span className='list-item__subtitle'>
					{moment(expense.createdAt).format('MMMM Do, YYYY')}
				</span>
			</div>
			<h3 className='list-item__data'>
				{numeral(expense.amount / 100).format('$0,0.00')}
			</h3>
		</Link>
	)
}

export default ExpenseListItem
