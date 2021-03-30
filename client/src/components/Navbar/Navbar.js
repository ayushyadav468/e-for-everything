import styles from './Navbar.module.css';
import Searchbar from './Searchbar/Searchbar';
import Menubar from './Menubar/Menubar';

const Navbar = () => {
	return (
		<nav className={styles.navBar}>
			<Searchbar />
			<Menubar />
		</nav>
	);
};

export default Navbar;
