import React, { useEffect } from 'react'
import Modal from 'react-modal'

function ModalRemoveExpense(props) {
	const { isOpen, onClickNo, onClickYes } = props

	return (
		<Modal isOpen={isOpen} ariaHideApp={false}>
			<p>Are you sure you want to remove expense?</p>
			<button onClick={onClickYes}>Yes</button>
			<button onClick={onClickNo}>Nevermind</button>
		</Modal>
	)
}

export default ModalRemoveExpense
