

import "./About.css";


const About = () => {

    return (

        <>

        <section className="about-us-page" id="hero">
            <div>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Neque, alias!
                </p>
            </div>
        </section>

        <section className="about-box">
        <img src={ require("../../assets/images/idea.png") } alt="" />
        <div>
            <h2>We are</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Illo blanditiis assumenda quae eaque aut reprehenderit 
                nostrum? Obcaecati cum aliquam id nam culpa deleniti quos, 
                natus reprehenderit itaque eius quod quaerat harum cumque 
                ipsum explicabo nemo autem doloribus ducimus inventore mollitia 
                vero vitae tempore! Vitae exercitationem fugiat quis incidunt
                dicta minima.
            </p>
            <marquee behavior="" bgcolor="#ccc" loop="-1" scrollamount="7" width="100%" direction="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ex qui at consectetur magni 
                error vitae ipsum temporibus officiis voluptatem.

            </marquee>
        </div>
    </section>

        </>

    )
}

export default About;