import styles from './QuantityBox.module.css';

const QuantityBox = (props) => {
	//  props : {
	//     productQuantity : variable for quantity to be displayed
	//     setProductQuantity() : state method to set product quantity
	//     setShowDialogBox() : state method to show dialog box
	//		 setMessage() : state method to show dialog message
	//   }

	const onQuantityChange = (type) => {
		switch (type) {
			case '-':
				if (props.productQuantity > 0) {
					props.setProductQuantity(props.productQuantity - 1);
				} else {
					props.dialogBox("Can't reduce below 0");
				}
				break;
			case '+':
				props.setProductQuantity(props.productQuantity + 1);
				break;
			default:
				break;
		}
		return;
	};

	return (
		<div className={styles.productQuantity}>
			<button
				className={styles.productQuantityBtn}
				onClick={() => onQuantityChange('-')}
			>
				<strong>-</strong>
			</button>
			<p className={styles.productQuantityDisplay}>{props.productQuantity}</p>
			<button
				className={styles.productQuantityBtn}
				onClick={() => onQuantityChange('+')}
			>
				<strong>+</strong>
			</button>
		</div>
	);
};

export default QuantityBox;
