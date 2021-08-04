import RestaurantCardFront from "./RestaurantCardFront";
import RestaurantCardBack from "./RestaurantCardBack";
import { useState } from "react";

function Restaurant({ restaurant, reviews, setShowReview }) {
  const [front, setFront] = useState(true);

  function toggleReviews() {
    setFront(!front);
    console.log("toggleReviews")
  }

  // console.log("Restaurant Component", reviews);

  return (
    <>
      {front ?
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
      /> :
      <RestaurantCardBack 
      reviews={reviews}
      toggleReviews={toggleReviews} />
      }

    </>
  );
}

export default Restaurant;
