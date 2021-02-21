import styles from './ReviewCards.module.css';
import ReviewCard from './ReviewCard/ReviewCard';

const ReviewCards = (props) => {
	const reviewData = props.reviews;
	let reviewCards = <p>No Review Available</p>;
	if (reviewData !== undefined) {
		reviewCards = reviewData.map((review) => {
			return <ReviewCard key={review.userName} {...review} />;
		});
	}
	return (
		<div className={styles.reviewCards}>
			<h2 className={styles.reviewCardsHeading}>Reviews</h2>
			{reviewCards}
		</div>
	);
};

export default ReviewCards;
