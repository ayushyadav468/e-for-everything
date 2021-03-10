// import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
	return (
		<main className={styles.page}>
			<div className={styles.logInCard}>
				<h2 className={styles.logInHeading}>
					Hello, Welcome to <span>e</span>
				</h2>
				<h4 className={styles.RegisterHeading}>Create an account</h4>
				<form className={styles.form}>
					<label>
						Your Name
						<input type='text' name='name' placeholder='Your Name' required />
					</label>
					<label>
						Email ID
						<input
							type='email'
							name='emailId'
							placeholder='Email Id'
							required
						/>
					</label>
					<label>
						Password
						<input
							type='password'
							name='password'
							placeholder='Password'
							required
						/>
					</label>
					<div className={styles.SellerDiv}>
						<p>Are you a seller</p>
						<div className={styles.SellerInnerDiv}>
							<label>
								<input type='radio' name='seller' value='Yes' />
								Yes
							</label>
							<label>
								<input type='radio' name='seller' value='No' defaultChecked />
								No
							</label>
						</div>
					</div>
					<input type='submit' value='Register' />
				</form>
			</div>
		</main>
	);
};

export default Register;
