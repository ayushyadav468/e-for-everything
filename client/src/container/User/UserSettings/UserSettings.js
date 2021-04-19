import styles from './UserSettings.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/UI/Footer/Footer';

const UserSettings = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.userSettingsContent}>
				<h2 className={styles.heading}>User settings</h2>
				{/* main content */}
			</div>
			<Footer />
		</>
	);
};

export default UserSettings;
