

import "./HomeSection2.css";

const HomeSection2 = (props) => {

    return (

            <div className="pro">

                <img src={props.img} alt="" />

                <div className="des">

                    <span> { props.textOne } </span>
                    <h5> { props.textTwo } </h5>

                    <div className="star">
                        <a className="star"> { props.star } </a>
                        <a className="star"> { props.star } </a>
                        <a className="star"> { props.star } </a>
                        <a className="star"> { props.star } </a>
                        <a className="star"> { props.star } </a>
                    </div>

                    <div className="price">
                        <h4> { props.price } </h4>
                        <a href="#"> { props.shopIcon } </a>
                    </div>
                    
                </div>

            </div>

    )
}

export default HomeSection2
