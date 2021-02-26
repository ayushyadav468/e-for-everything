import { Link } from 'react-router-dom';
import styles from './Menubar.module.css';

const Menubar = () => {
	return (
		<ul className={styles.menuBar}>
			<li>
				<Link to='#'>Feature</Link>
			</li>
			<li>
				<Link to='#'>Shop</Link>
			</li>
			<li>
				<Link to='#'>Category</Link>
			</li>
			<li>
				<Link to='#'>About</Link>
			</li>
		</ul>
	);
};

export default Menubar;
