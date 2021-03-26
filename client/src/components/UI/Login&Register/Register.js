import { connect } from 'react-redux';
import { useState } from 'react';
import DialogBox from '../DialogBox/DialogBox';
import axios from '../../../axiosInstance';
import * as actionTypes from '../../../store/action/actions';
import styles from './Register.module.css';

// const mapStateToProps = (state) => {
// 	return {
// 		user: state.userState,
// 	};
// };

const mapDispatchToProps = (dispatch) => {
	return {
		userLogin: (user) =>
			dispatch({ type: actionTypes.USER_LOGIN, payload: user }),
	};
};

const Register = (props) => {
	// Register user
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [seller, setSeller] = useState(false);

	const [error, setError] = useState({
		message: '',
	});
	const [showDialogBox, setShowDialogBox] = useState(false);

	const registerHandler = async (event) => {
		// Prevent default page reload
		event.preventDefault();
		const userData = {
			name: name,
			email: email,
			password: password,
			seller: seller,
		};
		await axios
			.post('/api/user/register', userData)
			.then((response) => {
				if (response.status !== 200) {
					setError({ message: response.data.message });
					// reset form
					setEmail('');
					setPassword('');
					setShowDialogBox(true);
					setTimeout(() => {
						setShowDialogBox(false);
					}, 2000);
				} else {
					const user = {
						...response.data,
					};
					props.userLogin(user);
				}
				// reset form
				setName('');
				setEmail('');
				setPassword('');
				setSeller(false);
				// redirect to main page
				props.history.push('/');
			})
			.catch((err) => {
				setError({ message: err.response.data.error.message });
				// reset form
				setEmail('');
				setPassword('');
				// Show Dialog box for 2 sec
				setShowDialogBox(true);
				setTimeout(() => {
					setShowDialogBox(false);
				}, 2000);
			});
	};

	return (
		<main className={styles.page}>
			<div className={styles.logInCard}>
				<h2 className={styles.logInHeading}>
					Hello, Welcome to <span>e</span>
				</h2>
				<h4 className={styles.RegisterHeading}>Create an account</h4>
				<form
					className={styles.form}
					onSubmit={(event) => registerHandler(event)}
				>
					<label>
						Your Name
						<input
							type='text'
							name='name'
							placeholder='Your Name'
							value={name}
							onChange={(event) => setName(event.target.value)}
							required
						/>
					</label>
					<label>
						Email ID
						<input
							type='email'
							name='emailId'
							placeholder='Email Id'
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							required
						/>
					</label>
					<label>
						Password
						<input
							type='password'
							name='password'
							placeholder='Password'
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							required
						/>
					</label>
					<div className={styles.SellerDiv}>
						<p>Are you a seller</p>
						<div className={styles.SellerInnerDiv}>
							<label>
								<input
									type='radio'
									name='seller'
									value={true}
									onClick={(event) => setSeller(event.target.value)}
								/>
								Yes
							</label>
							<label>
								<input
									type='radio'
									name='seller'
									value={false}
									onClick={(event) => setSeller(event.target.value)}
									defaultChecked
								/>
								No
							</label>
						</div>
					</div>
					<input type='submit' value='Register' />
				</form>
			</div>
			<DialogBox showBox={showDialogBox}>{error.message}</DialogBox>
		</main>
	);
};

export default connect(null, mapDispatchToProps)(Register);
