

import "./Blog.css";

import { BlogSection } from "../../Sections/index";

import BlogData from "../../Data/BlogData";

import { Button } from "../../Component/Index";

import { FaArrowRight } from "react-icons/fa";

const Blog = () => {

    const ShowBlogData = BlogData.map(el => {

        return (

            <BlogSection key={el.id} title1={el.header1} img={el.images} title2={el.header2} text={el.parag} link={el.link} />
        )
    })

    return (
        <>

            <section class="blog-page" id="hero">
                <div>
                    <h2>Read more</h2>
                    <p>Save more with copons & up to 70% off!</p>
                </div>
            </section>

            <section class="blog-container">

                { ShowBlogData }

            </section>

            <section class="pagination">

                <a href="#"> <Button>1</Button> </a>
                <a href="#"> <Button>2</Button> </a>
                <a href="#"> <Button> <FaArrowRight /> </Button> </a>

            </section>

        </>
    )
}

export default Blog;