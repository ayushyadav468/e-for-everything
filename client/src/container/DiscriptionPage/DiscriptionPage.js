import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';
import DiscriptionCard from '../../components/DiscriptionCard/DiscriptionCard';

const DiscriptionPage = (props) => {
	return (
		<>
			<Navbar {...props} />
			<DiscriptionCard {...props} />
			<Footer />
		</>
	);
};

export default DiscriptionPage;
