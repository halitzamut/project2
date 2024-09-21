

import { NavLink } from "react-router-dom";

import "../Login/Login.css";

const SignUp = () => {

    return (

        <div className="form-container">

            <form action="" className= "form-boxes">

                <h3> sign up </h3>

                <label className="label" htmlFor="name"> Write your name : </label>
                <input className="box" id="name" type="text" placeholder="name"/>

                <label className="label" htmlFor="email">Write your email :</label>
                <input className="box" id="email" type="email" placeholder="enter your email here" />

                <label className="label" htmlFor="password">Write your password :</label>
                <input className="box" id="password" type="password" placeholder="password" />

                <div className="remember-pass">
                    <input type="checkbox" name="" id="remember-me" />
                    <label htmlFor="remember-me">remember me</label>
                    
                </div>

                <input type="submit" class="btn" value="sign up" />

                <div className="login-or-signin">
                    <p>I have an acount</p>
                    <NavLink to={"/Login"}> Login here </NavLink>
                </div>

            </form>

        </div>
    )
}
export default SignUp;