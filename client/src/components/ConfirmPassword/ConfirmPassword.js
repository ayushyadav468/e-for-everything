import styles from './ConfirmPassword.module.css';

const Modal = (props) => {
	return (
		<>
			<div
				className={styles.modalDiv}
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0',
				}}
			>
				<label>
					Confirm Password
					<input
						type='password'
						onChange={props.passwordConfirmHandler}
						required
					/>
				</label>
				<div className={styles.responseBtnDiv}>
					<button className={styles.cancelBtn} onClick={props.cancelBtnClicked}>
						Cancel
					</button>
					<button className={styles.saveBtn} onClick={props.saveBtnClicked}>
						Save
					</button>
				</div>
			</div>
		</>
	);
};

export default Modal;
