import React, { useEffect } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

function Dashboard() {
	return (
		<>
			<ExpenseListFilters />
			<ExpenseList />
		</>
	)
}

export default Dashboard
