

import "./Shop.css";

import ShopSectionData from "../../Data/ShopSectionData"

import { HomeSection2 } from "../../Sections/index";

import { Button } from "../../Component/Index";

import { FaArrowRight } from "react-icons/fa";

const Shop = () => {

    const ShowShopSectionData = ShopSectionData.map(item => {

        return (

            <HomeSection2 key={item.id} img={item.image} textOne={item.text1} textTwo={item.text2} star={item.starIcon} price={item.price} shopIcon={item.cartIcon} />
        )
    })

    return (

        <>

            <section class="shop-page" id="hero">
                <div>
                    <h2>home shopping</h2>
                    <p>Save more with copons & up to 70% off!</p>
                </div>
            </section>

            <section class="product-1 section-p1" id="product-1">
                <div class="pro-container">

                    {ShowShopSectionData}

                </div>
            </section>

            <section class="pagination">

                <a href="#"> <Button>1</Button> </a>
                <a href="#"> <Button>2</Button> </a>
                <a href="#"> <Button> <FaArrowRight /> </Button> </a>

            </section>

        </>

    )
}

export default Shop;