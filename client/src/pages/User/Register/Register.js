import { useState } from 'react';
import { connect } from 'react-redux';

import styles from './Register.module.css';
import axios from '../../../axiosInstance';
import { useHistory } from 'react-router-dom';
import { ADD_USER } from '../../../store/action/actions';
import DialogBox from '../../../components/UI/DialogBox/DialogBox';

// To get USER state
// const mapStateToProps = (state) => {
// 	return {
// 		user: state.user,
// 	};
// };

const mapDispatchToProps = (dispatch) => {
	return {
		addUser: (userState) => dispatch({ type: ADD_USER, payload: userState }),
	};
};

const Register = (props) => {
	// Register user
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [password, setPassword] = useState('');
	const [seller, setSeller] = useState(false);

	const [error, setError] = useState({
		message: '',
	});
	const [showDialogBox, setShowDialogBox] = useState(false);

	let history = useHistory();

	const registerHandler = async (event) => {
		// Prevent default page reload
		event.preventDefault();
		const userData = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			seller: seller,
		};
		await axios({
			method: 'POST',
			url: '/api/user/register',
			headers: { 'content-type': 'application/json' },
			data: { ...userData },
		})
			.then((response) => {
				if (response.status !== 200) {
					dialogBox(response.data.message);
					// reset form
					setFirstName('');
					setLastName('');
					setEmail('');
					setPassword('');
					setShowDialogBox(true);
					setTimeout(() => {
						setShowDialogBox(false);
					}, 2000);
				} else {
					const userState = {
						token: response.headers['auth-token'],
						userData: { ...response.data },
					};
					// Dispach LOG_IN action to redux
					props.addUser(userState);
					// redirect to the page user came to register
					history.go(-2);
				}
			})
			.catch((err) => {
				dialogBox(err.response.data.error.message);
				// reset form
				setFirstName('');
				setLastName('');
				setEmail('');
				setPassword('');
				// Show Dialog box for 2 sec
				setShowDialogBox(true);
				setTimeout(() => {
					setShowDialogBox(false);
				}, 2000);
			});
	};

	const dialogBox = (messageToBeDisplayed) => {
		setShowDialogBox(true);
		setError({ message: messageToBeDisplayed });
	};

	const onFirstNameChangeHandler = (event) => {
		setFirstName(event.target.value);
	};

	const onLastNameChangeHandler = (event) => {
		setLastName(event.target.value);
	};

	const onEmailChangeHandler = (event) => {
		setEmail(event.target.value);
	};

	const onPasswordChangeHandler = (event) => {
		setPassword(event.target.value);
	};

	const onSellerChangeHandler = (event) => {
		setSeller(event.target.value);
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
						First Name
						<input
							type='text'
							name='name'
							placeholder='First Name'
							value={firstName}
							onChange={(event) => onFirstNameChangeHandler(event)}
							required
						/>
					</label>
					<label>
						Last Name
						<input
							type='text'
							name='name'
							placeholder='Last Name'
							value={lastName}
							onChange={(event) => onLastNameChangeHandler(event)}
						/>
					</label>
					<label>
						Email ID
						<input
							type='email'
							name='emailId'
							placeholder='Email Id'
							value={email}
							onChange={(event) => onEmailChangeHandler(event)}
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
							onChange={(event) => onPasswordChangeHandler(event)}
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
									onClick={(event) => onSellerChangeHandler(event)}
								/>
								Yes
							</label>
							<label>
								<input
									type='radio'
									name='seller'
									value={false}
									onClick={(event) => onSellerChangeHandler(event)}
									defaultChecked
								/>
								No
							</label>
						</div>
					</div>
					<input type='submit' value='Register' />
				</form>
			</div>
			<DialogBox showBox={showDialogBox} setShowDialogBox={setShowDialogBox}>
				{error.message}
			</DialogBox>
		</main>
	);
};

export default connect(null, mapDispatchToProps)(Register);
