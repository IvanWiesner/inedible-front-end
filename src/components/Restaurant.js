import RestaurantCardFront from "./RestaurantCardFront";
import RestaurantCardBack from "./RestaurantCardBack";

function Restaurant({ restaurant, reviews, setShowReview }) {
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
      />
      <RestaurantCardBack reviews={reviews} />
    </div>
  );
}

export default Restaurant;
