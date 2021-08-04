import Restaurant from "./Restaurant";

// prettier-ignore
function RestaurantList ( { restaurants, setRestaurants, search, reviews, setReviews, handleNewReview } ) {
    
  
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
        reviews={reviews.filter( review => restaurant.id === review.restaurant_id )}
        handleNewReview={handleNewReview}
      />
      )
    })

  


  // prettier-ignore
  return (
      <ul className="restaurant-list-ul">
        {displayRestaurants}
      </ul>
  );
}

export default RestaurantList;

//  <ul> style={{display: "flex", flexWrap: "wrap",marginTop: "200px"}}
