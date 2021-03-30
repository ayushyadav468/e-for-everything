import styles from './DialogBox.module.css';

const DialogBox = (props) => (
	<div
		className={styles.dialogBox}
		show={props.showDialogBox}
		clicked={props.clicked}
		style={{
			display: props.showBox ? 'block' : 'none',
			opacity: props.showBox ? '1' : '0',
		}}
	>
		<p className={styles.message}>{props.children}</p>
	</div>
);

export default DialogBox;
