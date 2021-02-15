import styles from './Spinner.module.css';

const spinner = () => (
	<div className={styles.spinner}>
		<div className={styles.cube1}></div>
		<div className={styles.cube2}></div>
	</div>
);

export default spinner;
