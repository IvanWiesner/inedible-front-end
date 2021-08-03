import RestaurantCard from "./RestaurantCard";

// prettier-ignore
function RestaurantList ( { restaurants, setRestaurants, setShowReview, search } ) {


  // const filteredRestaurants = () => {
  //   return (
  //     <div></div>
  //   )
  // }
  
  const displayRestaurants = restaurants.map((restaurant, index) => {
    return (
      <RestaurantCard
        key={index}
        id={restaurant.id}
        title={restaurant.title}
        style={restaurant.style}
        street={restaurant.street}
        city={restaurant.city}
        image_url={restaurant.image_url}
        like={restaurant.like}
        unlike={restaurant.unlike}
        restaurants={restaurants}
        setShowReview={setShowReview}
      />
    )
  })


  return (
    <div>
      <ul
        style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '200px'
        }}
      >
      {displayRestaurants}
      </ul>
    </div>
  );
}

export default RestaurantList;

// function WatchList({ movies, removeMovie, onEditMovie }) {
//   const displayMovies = movies.map((movie, index) => {
//     return (
//       <WatchListCard
//         key={index}
//         id={movie.id}
//         img={movie.img}
//         likeButton={movie.likeButton}
//         dislikeButton={movie.dislikeButton}
//         removeMovie={removeMovie}
//         onEditMovie={onEditMovie}
//       />
//     );
//   });
//   return (
//     <ul
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         marginTop: "200px",
//       }}
//     >
//       {displayMovies}
//     </ul>
//   );
// }
