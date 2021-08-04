// prettier-ignore
function RestaurantCardBack ( { reviews, toggleReviews } ) {
  
  // console.log( 'RestaurantCardBack Component', reviews )
  const handleClick = (e) => {
   console.log("restaurantcardback", e)
   e.stopPropagation()
  }
  
  
  const displayReviews = reviews.map((review, index) => {
    return (
      <div key={index}>
        <span>Comment: {review.comment}</span>
        <p>Created At: {review.created_at}</p>
      </div>
    )
  });



  return (
    <div className="card-back">
      {displayReviews}
      <button onClick={toggleReviews}>Hide Reviews</button>
      <button onClick={handleClick}>Add Review</button>
    </div>
  )
}

export default RestaurantCardBack;
