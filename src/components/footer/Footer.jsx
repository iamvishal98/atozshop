import React from "react";
import {
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcStripe,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import "./footer.scss";
import logo from "../../assets/logo.png";
import Fourteen from "../../assets/14days.png";
import Original from "../../assets/original.png";
import AppStore from "../../assets/app-store.png";
import PlayStore from "../../assets/play-store.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="wrapper_footer">
      <div className="top">
        <div className="about">
          <h2>About</h2>
          <p>
            If you would like to experience the best of online shopping for men,
            women and kids in India, you are at the right place. atozshops is
            the ultimate destination for fashion and lifestyle, being host to a
            wide array of merchandise including clothing, footwear, accessories,
            jewellery, personal care products and more. It is time to redefine
            your style statement with our treasure-trove of trendy items. Our
            online store brings you the latest in designer products straight out
            of fashion houses. You can shop online at atozshops from the comfort
            of your home and get your favourites delivered right to your
            doorstep.
          </p>
        </div>
      </div>
      <div className="mid">
        <div className="categories">
          <h2>Buy</h2>
          <Link to="/products/watches" className="link">
            <p>Watches</p>
          </Link>
          <Link to="/products/shirts" className="link">
            <p>Shirts</p>
          </Link>
          <Link to="/products/saree" className="link">
            <p>Saree</p>
          </Link>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <div className="contacts_icons">
            <Link to="https://github.com/iamvishal98/" className="link">
              <FaGithubSquare />
            </Link>
            <Link
              to="https://www.linkedin.com/in/vishal-chauhan-0781161b8/"
              className="link"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <div className="mobile_apps">
          <div className="app_store">
            <Link to="https://www.apple.com/in/app-store/">
              <img src={AppStore} alt="pic" />
            </Link>
          </div>
          <div className="play_store">
            <Link to="https://play.google.com/store/games">
              <img src={PlayStore} alt="pic" />
            </Link>
          </div>
        </div>

        <div className="promises">
          <div className="original_products">
            <div className="promises_image">
              <img src={Original} alt="pic" />
            </div>
            <p>
              <span className="bold-text">100% ORIGINAL guarantee</span> for all
              products at atozshops.com
            </p>
          </div>
          <div className="buyback">
            <div className="promises_image">
              <img src={Fourteen} alt="pic" />
            </div>
            <p>
              {" "}
              <span className="bold-text">Return within 14 days</span> of
              receiving your order
            </p>
          </div>
        </div>
      </div>
      <div className="down">
        <FaCcStripe className="payment_icon" />
        <FaCcPaypal className="payment_icon" />
        <FaCcVisa className="payment_icon" />
        <FaCcMastercard className="payment_icon" />
        <FaCcDiscover className="payment_icon" />
      </div>
    </div>
  );
};

export default Footer;
