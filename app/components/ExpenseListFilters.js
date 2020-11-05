import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'
import { useDispatch, useSelector } from 'react-redux'
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from '../actions/filters'
import { DateRangePicker } from 'react-dates'

function ExpenseListFilters() {
	const [state, setState] = useImmer({
		calFocused: null
	})
	const filters = useSelector(state => state.filters)
	const dispatch = useDispatch()
	function handleChange(text) {
		dispatch(setTextFilter(text.trim()))
	}

	function handleSortChange(val) {
		if (val === 'date') {
			dispatch(sortByDate())
		} else {
			dispatch(sortByAmount())
		}
	}

	function onDatesChange({ startDate, endDate }) {
		dispatch(setStartDate(startDate))
		dispatch(setEndDate(endDate))
	}

	function onFocusChange(calFocused) {
		setState(draft => {
			draft.calFocused = calFocused
		})
	}

	return (
		<div className='content-container'>
			<div className='input-group'>
				<div className='input-group__item'>
					<input
						className='text-input'
						placeholder='Search expenses'
						value={filters.text}
						type='text'
						onChange={e => handleChange(e.target.value)}
					/>
				</div>
				<div className='input-group__item'>
					<select
						className='select'
						value={filters.sortBy}
						onChange={e => handleSortChange(e.target.value)}
					>
						<option value='date'>Date</option>
						<option value='amount'>Amount</option>
					</select>
				</div>
				<div className='input-group__item'>
					<DateRangePicker
						startDate={filters.startDate}
						startDateId='startDateID'
						endDate={filters.endDate}
						endDateId='endDateID'
						onDatesChange={onDatesChange}
						focusedInput={state.calFocused}
						onFocusChange={onFocusChange}
						showClearDates={true}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
				</div>
			</div>
		</div>
	)
}

export default ExpenseListFilters
