import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import Content from "./Content";
import Search from "./Search";

// prettier-ignore
function RestaurantContainer({restaurants, setRestaurants, search, setSearch}) {
  const [ showReview, setShowReview ] = useState( false );
  const [ reviews, setReviews ] = useState( [] )
  

  
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
          setShowReview={setShowReview}
          search={search}
          reviews={reviews}
          setReviews={setReviews}
          
        />
        <Content showReview={showReview} setShowReview={setShowReview} />
      </div>
    </div>
  );
}

export default RestaurantContainer;
