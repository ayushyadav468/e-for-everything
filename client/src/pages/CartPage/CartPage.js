import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';
import CartCards from './CartCards/CartCards';

const CartPage = (props) => {
	return (
		<>
			<Navbar {...props} />
			<CartCards />
			<Footer />
		</>
	);
};

export default CartPage;
