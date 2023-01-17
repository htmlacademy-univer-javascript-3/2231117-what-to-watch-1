import { useState, ChangeEvent, FormEvent } from 'react';
import { ReviewData } from '../../types/review-data';
import RatingStar from './star-rating';

const MAX_STARS_COUNT = 10;
const MAX_COMMENT_LEN = 400;
const MIN_COMMENT_LEN = 50;

type Props = {
  disabled: boolean;
  onSubmit: (reviewData: ReviewData) => void;
}
function ReviewForm({disabled, onSubmit}: Props): JSX.Element {
  const [comment, setComment] = useState('');
  const [starsCount, setRating] = useState(0);

  const handleReviewSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({comment: comment, starsCount: starsCount});
  };

  const handleChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleChangeRating = (newRating: number) => {
    setRating(newRating);
  };

  const isSubmitDisabled = comment.length < MIN_COMMENT_LEN || comment.length > MAX_COMMENT_LEN || disabled;

  const ratingStars = [Array(MAX_STARS_COUNT).keys()]
    .map((_, index) =>
      (
        <RatingStar
          rating={index + 1}
          isChosen={starsCount === (index + 1)}
          onChange={handleChangeRating}
          key={index} // eslint-disable-line react/no-array-index-key
        />
      )
    )
    .reverse();

  return (
    <form className="add-review__form" onSubmit={handleReviewSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {ratingStars}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          id="review-text"
          className="add-review__textarea"
          name="review-text"
          value={comment}
          placeholder="ReviewType text"
          onChange={handleChangeComment}
          disabled={disabled}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" disabled={isSubmitDisabled} type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
