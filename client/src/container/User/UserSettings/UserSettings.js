import styles from './UserSettings.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/UI/Footer/Footer';
import UserSettingsCard from '../../../components/User/UserSettingsCard/UserSettingsCard';

const UserSettings = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.userSettingsContent}>
				<UserSettingsCard />
			</div>
			<Footer />
		</>
	);
};

export default UserSettings;
