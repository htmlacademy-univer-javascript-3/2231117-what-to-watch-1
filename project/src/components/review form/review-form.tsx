import React, {Fragment, useState} from 'react';

const STARS_COUNT = 10;

function ReviewForm(): JSX.Element {
  const [comment, setComment] = useState('');
  const [, setRating] = useState('');
  const commentChangeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };
  const ratingChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };
  const handleSubmit = (evt: React.FocusEvent<HTMLFormElement>) => {
    throw new Error('kek');
  };

  const ratingStars = [...Array(STARS_COUNT)].map((_, index) => {
    const currentStar = STARS_COUNT - index;
    return (
      <Fragment key={currentStar}>
        <input
          className="rating__input"
          id={`star-${currentStar}}`}
          type="radio"
          name="rating"
          value={currentStar}
          onChange={ratingChangeHandler}
        />
        <label
          className="rating__label"
          htmlFor={`star-${currentStar}}`}
        >Rating {index}
        </label>
      </Fragment>
    );
  });

  return (
    <form className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {ratingStars}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={commentChangeHandler}
          value={comment}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
