import styles from './UserSettings.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/UI/Footer/Footer';
import UserSettingsCard from '../../../components/UserSettingsCard/UserSettingsCard';

const UserSettings = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.userSettingsContent}>
				<h2 className={styles.heading}>User settings</h2>
				<UserSettingsCard />
			</div>
			<Footer />
		</>
	);
};

export default UserSettings;
