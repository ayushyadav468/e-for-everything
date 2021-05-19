import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';
import FavCards from './FavouriteCards/FavouriteCards';

const FavouritePage = (props) => {
	return (
		<>
			<Navbar {...props} />
			<FavCards />
			<Footer />
		</>
	);
};

export default FavouritePage;
