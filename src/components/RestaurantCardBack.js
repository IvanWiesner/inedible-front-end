// prettier-ignore
function RestaurantCardBack ( { reviews } ) {
  
  console.log( 'RestaurantCardBack Component', reviews )
  
  
  
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
        
    </div>
  )
}

export default RestaurantCardBack;
