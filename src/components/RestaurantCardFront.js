import React from "react";

// prettier-ignore
function RestaurantCardFront ( { id, title, style, street, city, image_url, like, unlike, restaurants, setShowReview, toggleReviews} ) {
  
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
    <div className = "front-card">
      <h3 style={{textAlign: "center", fontSize: "25px"}}>{title}</h3>
      <img className='image' src={image_url} alt="pic"
        style={{ width: 330, height: 300, padding: "25px", borderRadius: "5px" }} />
      
      <div className="text-area" >
        <h4>Type Of Cuisine: {style}</h4>
        <p>Address: {street}, {city}</p>
        <button className="btn" onClick={toggleReviews}>See Reviews</button>
        <button className="btn" onClick={handleLike}>🤮{like}</button>
        <button className="btn" onClick={handleUnlike}>😋{unlike}</button>
      </div>
      
    </div>
  
  )
}

export default RestaurantCardFront;

// div for text-area style={{backgroundColor: 'white'}}

// image tag style={{ boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)", borderRadius: '3px', width: 250, height: 340 }}

//  line 27 div style={{ display: "block", paddingLeft: "30px", paddingBottom: "35px"}}