// prettier-ignore
import React, { useState } from 'react';

function RestaurantCardBack({
  reviews,
  toggleReviews,
  handleNewReview,
  restaurant_id,
}) {
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    const newReviewObject = {
      comment,
      restaurant_id,
    };
    fetch(`http://localhost:9292/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReviewObject),
    })
      .then((res) => res.json())
      .then((data) => handleNewReview(data));
  }

  // console.log( 'RestaurantCardBack Component', reviews )

  const displayReviews = reviews.map((review, index) => {
    return (
      <article key={index}>
        <p className="comment-text">Comment: {review.comment}</p>
        <p>- {review.created_at}</p>
      </article>
    );
  });

  return (
    <div className="card-back">
      {displayReviews}
      <div className="new-review-form">
        <h3>New Review</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="comment"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Add Review</button>
        </form>
      </div>
      <button onClick={toggleReviews}>Hide Reviews</button>
    </div>
  );
}

export default RestaurantCardBack;
