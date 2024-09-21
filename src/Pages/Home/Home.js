

import "./Home.css";

import "../../Component/Index";

import { Button  } from "../../Component/Index";
import { HomeSection2, HomeElement } from "../../Sections/index";
import HomeShoppingData from "../../Data/HomeShoppingData";
import HomeSection2Data from "../../Data/HomeSection2";


const Home = () => {

    const ShowDataSection1 = HomeShoppingData.map(ele => {

        return (

            <HomeElement key= {ele.id} img= {ele.image} information= {ele.explain} thePrice={ele.price} iconCart={ele.icon} />
        )
    })

    const ShowDataSection2 = HomeSection2Data.map(item => {

        return (

            <HomeSection2 key= {item.id} img= {item.image} textOne= {item.text1} text2= {item.textTwo} star={item.starIcon} price= {item.price} shopIcon={item.cartIcon} />
        )
    })

    return (

        <>
            <section className="hero" id="hero">
                <div>
                    <h4>trade-in-offer</h4>
                    <h2>Super value deals</h2>
                    <h1>On all products</h1>
                    <p>Save more with copons & up to 70% off! </p>

                    <Button> shop now </Button>

                </div>
                <img src={require("../../assets/images/women/01.jpg")} alt="" />
            </section>


            <section className="feature section-p1" id="feature">
            { ShowDataSection1 }
            </section>


            <section className="product-1 section-p1" id="product-1">

                <h2>Featured Product</h2>
                <p>Summer Collection New Modern Design</p>

                <div className="pro-container">

                    { ShowDataSection2 }

                </div>
            </section>

            <section className="sm-banner section-p1" id="sm-banner">

                <div className="banner-box-1">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>Lorem ipsum dolor sit amet consectetur</span>
                    <button>Learn More</button>
                </div>

                <div className="banner-box-2">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>Lorem ipsum dolor sit amet consectetur</span>
                    <button>Learn More</button>
                </div>

            </section>

        </>

    )
}

export default Home;