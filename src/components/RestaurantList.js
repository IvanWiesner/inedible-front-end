import Restaurant from "./Restaurant";

// prettier-ignore
function RestaurantList ( { restaurants, setRestaurants, setShowReview, search, reviews, setReviews } ) {


  // const filteredRestaurants = () => {
  //   return (
  //     <div></div>
  //   )
  // }


  
  const displayRestaurants = restaurants.map( ( restaurant, index ) => {
    return (
      <Restaurant
        key={index}
        restaurant={restaurant}
        setShowReview={setShowReview}
        reviews={reviews.filter( review => restaurant.id === review.restaurant_id)}
        />
      )
    })

  


  // prettier-ignore
  return (
    <div className="display-container">
      <ul className="ul-container">
        {displayRestaurants}
      </ul>
    </div>
  );
}

export default RestaurantList;

//  <ul> style={{display: "flex", flexWrap: "wrap",marginTop: "200px"}}
