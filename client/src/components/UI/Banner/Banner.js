import styles from './Banner.module.css';

const Banner = () => (
	<div className={styles.banner}>
		<h1 className={styles.bannerMainHeading}>
			Welcome to <strong>e</strong> for everything
		</h1>
		<h3 className={styles.bannerSubHeading}>A stop for every need</h3>
		<a className={styles.bannerBtn} href='/#'>
			Shop Now
		</a>
	</div>
);

export default Banner;
