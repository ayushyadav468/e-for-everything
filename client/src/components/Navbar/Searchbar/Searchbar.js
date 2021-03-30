import { connect } from 'react-redux';
import { useState } from 'react';
import styles from './Searchbar.module.css';
import { NavLink, Link } from 'react-router-dom';
import { USER_LOGOUT } from '../../../store/action/actions';
import DialogBox from '../../UI/DialogBox/DialogBox';

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		userLogout: () => dispatch({ type: USER_LOGOUT }),
	};
};

const Searchbar = (props) => {
	const [showDialogBox, setShowDialogBox] = useState(false);

	let user;
	// if user is logged in
	// check if keys are present in props.user
	// and check if constructor is of object type (for edge cases)
	if (
		Object.keys(props.user).length !== 0 &&
		props.user.constructor === Object
	) {
		user = { ...props.user };
	}
	const logoutHandler = () => {
		// dispach LOG_OUT action to redux
		props.userLogout();
		// show dialog box
		setShowDialogBox(true);
		setTimeout(() => {
			setShowDialogBox(false);
		}, 2000);
	};

	const signIn = (
		<div className={styles.signInDiv}>
			{user ? (
				<>
					<p>
						<span style={{ fontWeight: 'bold' }}>Welcome,</span> {user.name}
					</p>
					<div className={styles.signInContent}>
						<Link to='#'>Settings</Link>
						<button onClick={logoutHandler} className={styles.logOutButton}>
							Logout
						</button>
					</div>
				</>
			) : (
				<NavLink to='/login' style={{ display: 'block' }}>
					<p>Sign In/Up</p>
				</NavLink>
			)}
		</div>
	);
	return (
		<ul className={styles.searchBar}>
			<li className={styles.logo}>
				<NavLink to='/'>LOGO</NavLink>
			</li>
			<li className={styles.searchFormContainer}>
				<form className={styles.searchForm}>
					<input
						type='text'
						id='search'
						name='search'
						placeholder='Search...'
					/>
					<button className={styles.searchFormButton}>
						<svg
							className={styles.searchFormSvg}
							width='40'
							height='40'
							viewBox='0 0 40 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M39.5112 37.155L28.1363 25.78C30.3397 23.0584 31.6663 19.6 31.6663 15.8334C31.6663 7.10336 24.563 0 15.8331 0C7.1032 0 0 7.10328 0 15.8333C0 24.5633 7.10328 31.6666 15.8332 31.6666C19.5998 31.6666 23.0581 30.34 25.7797 28.1366L37.1546 39.5116C37.4796 39.8366 37.9062 40 38.3329 40C38.7597 40 39.1863 39.8366 39.5113 39.5116C40.1629 38.86 40.1629 37.8066 39.5112 37.155ZM15.8332 28.3333C8.9399 28.3333 3.33332 22.7266 3.33332 15.8333C3.33332 8.93992 8.9399 3.33328 15.8332 3.33328C22.7265 3.33328 28.333 8.93992 28.333 15.8333C28.333 22.7266 22.7264 28.3333 15.8332 28.3333Z'
								fill='#FFFF00'
							/>
						</svg>
					</button>
				</form>
			</li>
			<li className={styles.signIn}>{signIn}</li>
			<li className={styles.fav}>
				<NavLink to='#'>
					<svg
						width='512'
						height='431'
						viewBox='0 0 512 431'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M469.585 39.7395C413.906 -13.2445 323.279 -13.2445 267.582 39.7275L256.001 50.7275L244.432 39.7325C188.729 -13.2465 98.114 -13.2405 42.411 39.7325C15.061 65.7465 0 100.251 0 136.881C0 173.523 15.061 208.023 42.415 234.048L243.634 425.081C247.095 428.375 251.551 430.014 256 430.014C260.449 430.014 264.899 428.367 268.366 425.074L469.585 234.048C496.933 208.029 512 173.524 512 136.887C512 100.251 496.933 65.7525 469.585 39.7395ZM444.829 207.998L256 387.277L67.177 208.004C47.026 188.842 35.93 163.583 35.93 136.887C35.93 110.191 47.026 84.9325 67.177 65.7705C88.196 45.7695 115.802 35.7755 143.414 35.7755C171.032 35.7755 198.65 45.7815 219.669 65.7825L243.622 88.5325C250.556 95.1255 261.437 95.1255 268.372 88.5325L292.331 65.7705C334.375 25.7745 402.779 25.7745 444.823 65.7705C464.968 84.9335 476.07 110.191 476.07 136.887C476.07 163.583 464.968 188.836 444.829 207.998Z'
							fill='#3A3A3A'
						/>
					</svg>
				</NavLink>
			</li>
			<li className={styles.cart}>
				<NavLink to='#'>
					<svg
						width='491'
						height='471'
						viewBox='0 0 491 471'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M394.667 470.004C424.122 470.004 448 446.126 448 416.671C448 387.216 424.122 363.338 394.667 363.338C365.212 363.338 341.334 387.216 341.334 416.671C341.334 446.126 365.212 470.004 394.667 470.004Z'
							fill='#3A3A3A'
						/>
						<path
							d='M181.333 470.004C210.788 470.004 234.666 446.126 234.666 416.671C234.666 387.216 210.788 363.338 181.333 363.338C151.878 363.338 128 387.216 128 416.671C128 446.126 151.878 470.004 181.333 470.004Z'
							fill='#3A3A3A'
						/>
						<path
							d='M488 68.276C485.974 65.982 483.06 64.669 480 64.671H96C90.109 64.67 85.332 69.444 85.331 75.335C85.331 76.052 85.403 76.768 85.547 77.471L128.214 290.804C129.228 295.771 133.598 299.338 138.667 299.337C139.136 299.368 139.606 299.368 140.075 299.337L460.075 256.67C464.882 256.028 468.651 252.224 469.248 247.411L490.581 76.744C490.989 73.681 490.047 70.592 488 68.276Z'
							fill='#FFC107'
						/>
						<path
							d='M181.333 256.671C176.119 256.669 171.671 252.897 170.816 247.754L149.483 119.754C148.692 113.916 152.783 108.543 158.621 107.752C164.211 106.994 169.425 110.721 170.518 116.256L191.851 244.256C192.814 250.064 188.89 255.554 183.083 256.523C182.505 256.622 181.92 256.672 181.333 256.671Z'
							fill='#FAFAFA'
						/>
						<path
							d='M234.667 246.004C229.131 246.026 224.498 241.811 224 236.297L213.333 118.964C212.781 113.099 217.088 107.897 222.954 107.345C222.983 107.342 223.011 107.34 223.04 107.337C228.907 106.806 234.093 111.133 234.624 117V117.001L245.291 234.334C245.821 240.201 241.495 245.387 235.628 245.918H235.627L234.667 246.004Z'
							fill='#FAFAFA'
						/>
						<path
							d='M288 235.337C282.109 235.337 277.333 230.561 277.333 224.67V118.004C277.333 112.113 282.109 107.337 288 107.337C293.891 107.337 298.667 112.113 298.667 118.004V224.671C298.667 230.562 293.891 235.337 288 235.337Z'
							fill='#FAFAFA'
						/>
						<path
							d='M341.333 224.671H340.138C334.28 224.051 330.034 218.799 330.654 212.94C330.658 212.904 330.662 212.867 330.666 212.831L341.333 116.831C342.025 110.964 347.296 106.738 353.173 107.338C359.028 107.986 363.25 113.257 362.603 119.113V119.114L351.936 215.114C351.368 220.543 346.793 224.667 341.333 224.671Z'
							fill='#FAFAFA'
						/>
						<path
							d='M394.667 214.004C388.776 214.002 384.002 209.225 384.003 203.334C384.003 202.465 384.11 201.599 384.32 200.756L405.653 115.423C406.946 109.676 412.654 106.065 418.401 107.358C424.148 108.651 427.759 114.359 426.466 120.106C426.43 120.267 426.39 120.427 426.346 120.586L405.013 205.919C403.829 210.669 399.562 214.003 394.667 214.004Z'
							fill='#FAFAFA'
						/>
						<path
							d='M437.333 342.004H191.125C155.567 341.922 124.97 316.844 117.909 281.993L65.92 22.004H10.667C4.776 22.004 0 17.228 0 11.337C0 5.44604 4.776 0.670044 10.667 0.670044H74.667C79.737 0.669044 84.106 4.23604 85.12 9.20304L138.837 277.79C143.872 302.686 165.725 320.607 191.125 320.67H437.333C443.224 320.67 448 325.446 448 331.337C448 337.228 443.224 342.004 437.333 342.004Z'
							fill='#3A3A3A'
						/>
					</svg>
				</NavLink>
			</li>
			<DialogBox showBox={showDialogBox}>Logout successful</DialogBox>
		</ul>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
