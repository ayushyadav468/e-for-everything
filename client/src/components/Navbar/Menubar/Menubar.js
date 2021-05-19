import { NavLink } from 'react-router-dom';
import styles from './Menubar.module.css';

const Menubar = () => {
	return (
		<ul className={styles.menuBar}>
			<NavLink
				exact
				to='/'
				className={styles.menuItem}
				activeClassName={styles.active}
			>
				Feature
			</NavLink>
			<NavLink
				to='/shop'
				className={styles.menuItem}
				activeClassName={styles.active}
			>
				Shop
			</NavLink>
			<NavLink
				to='/about'
				className={styles.menuItem}
				activeClassName={styles.active}
			>
				About
			</NavLink>
		</ul>
	);
};

export default Menubar;
