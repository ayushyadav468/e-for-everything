import styles from './ReviewCard.module.css';

const ReviewCard = (props) => {
	const reviewData = props;
	return (
		<div className={styles.reviewCard}>
			<div className={styles.reviewCardImageDiv}>
				<div className={styles.reviewCardImage}>E</div>
				<p className={styles.reviewCardUserName}>{reviewData.userName}</p>
			</div>
			<div className={styles.reviewCardReviewDiv}>
				<p className={styles.reviewCardReview}>{reviewData.review}</p>
				<div className={styles.reviewCardBtnDiv}>
					<button className={styles.reviewCardBtn}>Helpful</button>
					<button className={styles.reviewCardBtn}>Incorrect</button>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
