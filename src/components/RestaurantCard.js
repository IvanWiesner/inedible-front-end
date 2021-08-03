import React from "react";

// prettier-ignore
function RestaurantCard ( { id, title, style, street, city, image_url, like, unlike, restaurants, setShowReview } ) {
  
  const handleLike = () => {
    return (
      <div>

      </div>
    )
  }

  const handleUnlike = () => {
    return <div>
    
  </div>
};




  return (
    <div style={{ display: "block", paddingLeft: "30px", paddingBottom: "35px"}}>
      <h3>{title}</h3>
      <img src={image_url} alt="pic" style={{ boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)", borderRadius: '3px', width: 250, height: 340 }} />
      <div className="TextArea" style={{backgroundColor: 'white'}}>
      <p>Type Of Cuisine: {style}</p>
      <p>Address: {street}, {city}</p>
      <button onClick={handleLike}>🤮{like}</button>
      <button onClick={handleUnlike}>😋{unlike}</button>
      </div>
  </div>
  )
}

export default RestaurantCard;
