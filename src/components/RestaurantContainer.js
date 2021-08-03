import { useState } from "react";
import RestaurantList from "./RestaurantList";
import Content from "./Content";
import Search from "./Search";

// prettier-ignore
function RestaurantContainer({restaurants, setRestaurants, search, setSearch}) {
  const [showReview, setShowReview] = useState(false);

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <div>
        <RestaurantList
          restaurants={restaurants}
          setRestaurants={setRestaurants}
          setShowReview={setShowReview}
          search={search}
        />
        <Content showReview={showReview} setShowReview={setShowReview} />
      </div>
    </div>
  );
}

export default RestaurantContainer;
