import styles from './ReviewCards.module.css';
import ReviewCard from './ReviewCard/ReviewCard';

const ReviewCards = (props) => {
	let reviewCards = (
		<p className={styles.reviewCardsPara}>No Reviews Available</p>
	);
	const reviewData = props.reviews;
	if (reviewData !== undefined) {
		if (reviewData.length !== 0) {
			reviewCards = reviewData.map((review) => {
				return <ReviewCard key={review.userName} {...review} />;
			});
		}
	}
	return (
		<div className={styles.reviewCards}>
			<h2 className={styles.reviewCardsHeading}>Reviews</h2>
			{reviewCards}
		</div>
	);
};

export default ReviewCards;
