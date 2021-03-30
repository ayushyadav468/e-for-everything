import { Link } from 'react-router-dom';
import styles from './Menubar.module.css';

const Menubar = () => {
	return (
		<ul className={styles.menuBar}>
			<li className={styles.menuItem}>
				<Link to='#'>Feature</Link>
			</li>
			<li className={styles.menuItem}>
				<Link to='#'>Shop</Link>
			</li>
			<li className={styles.menuItem}>
				<Link to='#'>Category</Link>
			</li>
			<li className={styles.menuItem}>
				<Link to='#'>About</Link>
			</li>
		</ul>
	);
};

export default Menubar;
