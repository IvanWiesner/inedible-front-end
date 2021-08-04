import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import Search from "./Search";

// prettier-ignore
function RestaurantContainer({restaurants, setRestaurants, search, setSearch}) {
  const [ reviews, setReviews ] = useState( [] )


  function handleNewReview (newReview) {
    setReviews([...reviews, newReview])
  }

  
useEffect(() => {
  fetch("http://localhost:9292/reviews")
    .then((resp) => resp.json())
    .then((data) => setReviews(data));
}, []);


  return (
    <div className="restaurants-container">
      <Search search={search} setSearch={setSearch} />
      <div className="restaurant-list">
        <RestaurantList
          restaurants={restaurants}
          setRestaurants={setRestaurants}
          search={search}
          reviews={reviews}
          setReviews={setReviews}
          handleNewReview={handleNewReview}
        /> 
      </div>
    </div>
  );
}

export default RestaurantContainer;
