

import "./Footer.css";

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {

    return (

        <footer>
            <div className="first-col">
                <img src={ require("../../assets/images/logo.png") } height="60" alt="" />
                <h4>Content</h4>
                <p><strong>Adress:</strong> Lorem ipsum dolor sit amet consectetur.</p>
                <p><strong>Opening:</strong> Lorem ipsum dolor sit amet consectetur.</p>
                <p><strong>Number:</strong> Lorem ipsum dolor sit amet consectetur.</p>

                <div className="box">
                    <h4>Follow us</h4>

                    <div className="icons">
                        <a className="icon"> <FaFacebook /> </a>
                        <a className="icon"> <FaInstagram /> </a>
                        <a className="icon"> <FaYoutube /> </a>
                        <a className="icon"> <FaTwitter /> </a>
                    </div>

                </div>
            </div>

            <div className="col-about">
                <h4>About</h4>
                <div>
                    <a href="#">About us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Contact us</a>
                </div>
            </div>

            <div className="third-col">
                <h4>My Acount</h4>
                <a href="#">Sign in</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track my order</a>
                <a href="#">Help</a>
            </div>

            <div className="last-col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>

                <div className="row">
                    <div>
                        <img src={ require("../../assets/images/apple-logo.png") } height="30" alt="" />
                        <span>App Store</span>
                    </div>

                    <div>
                        <img src={ require("../../assets/images/google-play.png") } height="30" alt="" />
                        <span>Googl Play</span>
                    </div>
                </div>

                <h4>Secured Payment Gateways</h4>

                <div className="pay-images">
                    <img src={ require("../../assets/images/visa.png") } alt="" />
                    <img src={ require("../../assets/images/card-1.png") } alt="" />
                    <img src={ require("../../assets/images/shopping.png") } alt="" />
                    <img src={ require("../../assets/images/card.png") } alt="" />
                </div>
            </div>

        </footer>

    )
}

export default Footer;