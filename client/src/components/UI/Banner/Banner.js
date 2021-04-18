import styles from './Banner.module.css';
import { Link } from 'react-router-dom';

const Banner = () => (
	<div className={styles.banner}>
		<h1 className={styles.bannerMainHeading}>
			Welcome to <strong>e</strong> for everything
		</h1>
		<h3 className={styles.bannerSubHeading}>A stop for every need</h3>
		<Link className={styles.bannerBtn} to='/shop'>
			Shop Now
		</Link>
	</div>
);

export default Banner;
