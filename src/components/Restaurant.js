import RestaurantCardFront from "./RestaurantCardFront";
import RestaurantCardBack from "./RestaurantCardBack";
import { useState } from "react";

function Restaurant({ restaurant, reviews, setShowReview }) {
  const [front, setFront] = useState(false);

  function toggleReviews() {
    setFront(!front);
  }

  // console.log("Restaurant Component", reviews);

  return (
    <div>
      <RestaurantCardFront
        id={restaurant.id}
        title={restaurant.title}
        style={restaurant.style}
        street={restaurant.street}
        city={restaurant.city}
        image_url={restaurant.image_url}
        like={restaurant.like}
        unlike={restaurant.unlike}
        setShowReview={setShowReview}
        toggleReviews={toggleReviews}
      />
      <RestaurantCardBack reviews={reviews} />

      {/* {front ? <RestaurantCardFront /> : <RestaurantCardBack />} */}
    </div>
  );
}

export default Restaurant;
