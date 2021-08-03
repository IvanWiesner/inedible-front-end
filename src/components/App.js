import "../App.css";
import Header from "./Header";
import RestaurantContainer from "./RestaurantContainer";
import Search from "./Search";
import { useEffect, useState } from "react";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then((resp) => resp.json())
      .then((data) => setRestaurants(data));
  }, []);

  // console.log(restaurants);

  return (
    <div className="App">
      {/* Header is going to be title, logo, picture of people eating food */}
      <Header />

      <RestaurantContainer
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
