import styles from './Navbar.module.css';
import Searchbar from './Searchbar/Searchbar';
import Menubar from './Menubar/Menubar';

const Navbar = (props) => {
	return (
		<>
			<nav className={styles.navBar}>
				<Searchbar {...props} />
				<Menubar />
			</nav>
			{props.children}
		</>
	);
};

export default Navbar;
