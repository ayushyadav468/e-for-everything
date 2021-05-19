import styles from './AboutPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';

const AboutPage = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.aboutPageContent}>
				<div className={styles.aboutPageContainer}>
					<h2 className={styles.heading}>
						Thank you for visiting e for everthing
					</h2>
					<h5 className={styles.subHeading}>
						This is a personal project of Ayush Yadav
					</h5>
					<p className={styles.para}>
						You can connect with me at{' '}
						<a
							className={styles.link}
							href='https://ayushy.dev'
							target='_blank'
							rel='noreferrer'
						>
							ayushy.dev
						</a>
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AboutPage;
