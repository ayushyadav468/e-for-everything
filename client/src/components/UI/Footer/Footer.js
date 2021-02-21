import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footerDiv}>
			<p className={styles.footerContent}>
				All Rights Reserved with <strong>e for every need</strong>
			</p>
		</div>
	);
};

export default Footer;
