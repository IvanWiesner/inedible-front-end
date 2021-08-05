import React, { useState } from "react";

// prettier-ignore
function RestaurantCardFront ( { id, title, style, street, city, image_url, like, unlike, toggleReviews} ) {
  const [madeLike, setMadeLike] = useState(like)
  const [ madeUnlike, setMadeUnlike ] = useState( unlike )




  function handleLike() {
    setMadeLike(madeLike + 1)
    fetch(`http://localhost:9292/restaurants/${id}`, {
      method: "PATCH",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
    },
    body: JSON.stringify({
      like: madeLike + 1,
      unlike: madeUnlike
    })
  })
}

function handleUnlike() {
  setMadeUnlike(madeUnlike + 1)
  fetch(`http://localhost:9292/restaurants/${id}`, {
    method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
  },
  body: JSON.stringify({
    like: madeLike,
    unlike: madeUnlike + 1
  })
})
}



  return (
    <div className = "front-card">
      <h3 className="restaurantName" style={{textAlign: "center", fontSize: "32px"}}>{title}</h3>
      <img className='image' src={image_url} alt="pic" style={{borderRadius: "100px"}}/>
      
      <div className="text-area" >
        <h3 className="frontCardInfo">Type Of Cuisine</h3> <p>{style}</p> 
        <h3 className="frontCardInfo">Address</h3> <p>{street}, {city}</p> 
        <button className="btn" onClick={toggleReviews}>Reviews 👁</button>
        <button className="btn" onClick={handleLike}>🤮 {madeLike}</button>
        <button className="btn" onClick={handleUnlike}>😋 {madeUnlike}</button>
      </div>
  </div>
  
  )
}

export default RestaurantCardFront;
