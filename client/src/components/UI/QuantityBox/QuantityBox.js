import styles from './QuantityBox.module.css';

const QuantityBox = (props) => {
	//  props : {
	//     productQuantity : variable for quantity to be displayed
	//     setProductQuantity() : state method to set product quantity
	//     setShowDialogBox() : state method to show dialog box
	//   }

	const onQuantityChange = (type) => {
		switch (type) {
			case '-':
				if (props.productQuantity > 0) {
					props.setProductQuantity(props.productQuantity - 1);
				} else {
					props.setShowDialogBox(true);
					setTimeout(() => {
						props.setShowDialogBox(false);
					}, 1000);
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
