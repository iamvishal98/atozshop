import React from "react";
import EmptyBag from "../../assets/empty-bag.png";
import "./emptycart.scss";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="empty_cart_conatiner">
        <div className="empty_cart_image">
          <img src={EmptyBag} alt="pic" />
        </div>
        <div className="empty_cart_text">
          <h4>Hey, it feels so light!</h4>
          <p>There is nothing in your cart. Let's add some items</p>
        </div>
        <div className="empty_cart_button">
          <button onClick={onButtonClick}>Browse from collection</button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
