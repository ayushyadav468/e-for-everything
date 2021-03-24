import styles from './Navbar.module.css';
import Searchbar from './Searchbar/Searchbar';
import Menubar from './Menubar/Menubar';

const Navbar = () => {
	// const navBar = document.querySelector('#navBar');
	// const banner = document.querySelector('#banner');
	// console.log(navBar, banner);

	// const options = {};
	// const observer = new IntersectionObserver((entries, observer) => {
	// 	console.log(entries);
	// }, options);

	// observer.observe(banner);

	return (
		<nav className={styles.navBar} id='navBar'>
			<Searchbar />
			<Menubar />
		</nav>
	);
};

export default Navbar;
