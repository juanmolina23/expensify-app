import React, { useEffect } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

function Dashboard() {
	return (
		<div>
			<div>
				<ExpensesSummary />
			</div>
			<div>
				<ExpenseListFilters />
			</div>
			<ExpenseList />
		</div>
	)
}

export default Dashboard
