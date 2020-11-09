import React, { useEffect } from 'react'
import Modal from 'react-modal'

function ModalRemoveExpense(props) {
	const { isOpen, onClickNo, onClickYes, setModalIsOpen } = props

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => setModalIsOpen(false)}
			ariaHideApp={false}
			className='modal'
		>
			<h3>Are you sure you want to remove expense?</h3>
			<div className='modal__button-container'>
				<button className='button__secondary' onClick={onClickYes}>
					Remove
				</button>
				<button className='button' onClick={onClickNo}>
					Nevermind
				</button>
			</div>
		</Modal>
	)
}

export default ModalRemoveExpense
