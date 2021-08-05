import React from "react";

//prettier-ignore
function Header() {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-item" style={{ listStyleType: "none" }}>
          <h1 className="header">Inedible</h1>
          <img
            className="logo"
            src="https://i.imgur.com/sLwuqr7.png"
            alt="websiteImage"
          />
          <img
            className="foodPicture"
            src="https://i.imgur.com/WjkIwmH.png"
            alt="food"
          />
          <p className="isIt">Is It Really <br></br> That Bad?</p>
          <p className="you">You Tell Us!</p>
        </li>
      </ul>
    </div>
  );
}
export default Header;
