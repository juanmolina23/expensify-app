import 'react-dates/initialize'
import React, { useState } from 'react'
import { useImmer } from 'use-immer'
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'
import { SingleDatePicker } from 'react-dates'

function ExpenseForm(props) {
	const [state, setState] = useImmer({
		description: props.expense ? props.expense.description : '',
		note: props.expense ? props.expense.note : '',
		amount: props.expense ? (props.expense.amount / 100).toString() : '',
		createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
		calFocused: false,
		errorMessage: ''
	})

	function onDescriptionChange(e) {
		const descriptionText = e.target.value
		setState(draft => {
			draft.description = descriptionText
		})
	}

	function onNoteChange(e) {
		const noteText = e.target.value
		setState(draft => {
			draft.note = noteText
		})
	}
	function onAmountChange(e) {
		const amountText = e.target.value
		if (!amountText || amountText.match(/^\d{1,}(\.\d{0,2})?$/)) {
			setState(draft => {
				draft.amount = amountText
			})
		}
	}

	function onDateChange(createdAt) {
		if (createdAt) {
			setState(draft => {
				draft.createdAt = createdAt
			})
		}
	}

	function onFocusChange({ focused }) {
		setState(draft => {
			draft.calFocused = focused
		})
	}

	function onSubmit(e) {
		e.preventDefault()

		if (!state.description || !state.amount) {
			setState(draft => {
				draft.errorMessage = 'Please check your description or amount.'
			})
		} else {
			setState(draft => {
				draft.errorMessage = ''
			})
			props.onSubmit({
				description: state.description,
				amount: parseFloat(state.amount, 10) * 100,
				createdAt: state.createdAt.valueOf(),
				note: state.note
			})
		}
	}

	return (
		<form onSubmit={e => onSubmit(e)}>
			{state.errorMessage && <p>{state.errorMessage}</p>}
			<input
				type='text'
				placeholder='Description'
				autoFocus
				name='description'
				value={state.description}
				onChange={e => onDescriptionChange(e)}
			/>
			<input
				type='text'
				name='amount'
				placeholder='Amount'
				value={state.amount}
				onChange={e => onAmountChange(e)}
			/>
			<SingleDatePicker
				date={state.createdAt}
				onDateChange={onDateChange}
				focused={state.calFocused}
				onFocusChange={onFocusChange}
				numberOfMonths={1}
				isOutsideRange={() => false}
			/>
			<textarea
				placeholder='Add a note for your expense (optional)'
				name='note'
				value={state.note}
				onChange={e => onNoteChange(e)}
			></textarea>
			<button>Save Expense</button>
		</form>
	)
}

export default ExpenseForm
