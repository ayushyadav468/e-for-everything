import styles from './CartPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';
import CartCards from '../../components/CartCards/CartCards';

const CartPage = () => {
	return (
		<>
			<Navbar />
			<CartCards />
			<Footer />
		</>
	);
};

export default CartPage;
