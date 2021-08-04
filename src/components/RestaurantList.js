import Restaurant from "./Restaurant";

// prettier-ignore
function RestaurantList ( { restaurants, setRestaurants, setShowReview, search, reviews, setReviews } ) {
    
  
    const filterRestaurants = () => {
      return restaurants.filter((restaurant) => 
      restaurant.title.toLowerCase().includes(search.toLowerCase())
      || restaurant.style.toLowerCase().includes(search.toLowerCase()))
    }

 

  // console.log('RestaurantList Component', reviews)
  
  const displayRestaurants = filterRestaurants().map( ( restaurant, index ) => {
    return (
      <Restaurant
        key={index}
        restaurant={restaurant}
        setShowReview={setShowReview}
        reviews={reviews.filter( review => restaurant.id === review.restaurant_id )}
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
