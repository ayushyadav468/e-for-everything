import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';
import Banner from '../../components/UI/Banner/Banner';
import ProductCards from '../../components/ProductCards/ProductCards';

const RootPage = () => {
	return (
		<>
			<Navbar />
			<Banner />
			<ProductCards />
			<Footer />
		</>
	);
};

export default RootPage;
