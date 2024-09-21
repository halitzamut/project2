

import "./HomeElement.css";

const HomeElement = (props) => {

    return (

            <div class="fe-box">

                <img src= {props.img} alt="" />
                <h6> {props.information} </h6>
                <div className="price-container">
                    <a> {props.iconCart} </a>
                    <span> {props.thePrice} </span>
                </div>

            </div>

    )
}

export default HomeElement
