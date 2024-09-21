
import "./BlogSection.css";

const BlogSection = (props) => {

    return (

        <div class="blog-box">

            <div class="blog-img">
                <h1> { props.title1 } </h1>
                <img src={ props.img } alt="" />
            </div>

            <div class="blog-details">
                <h4> { props.title2 } </h4>
                <p> { props.text } </p>
                <a href=""> {props.link} </a>
            </div>
            
        </div>
    )
}

export default BlogSection
