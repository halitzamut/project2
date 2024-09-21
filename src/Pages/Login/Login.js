

import "./Login.css";

import { NavLink } from "react-router-dom";

import { Button } from "../../Component/Index";

const Login = () => {


    return (



        <div className="form-container">

            <form action="" className= "form-boxes">

                <h3> Login </h3>

                <label className="label" htmlFor="email">Write your email :</label>
                <input className="box" id="email" type="email" placeholder="enter your email here" />

                <label className="label" htmlFor="password">Write your password :</label>
                <input className="box" id="password" type="password" placeholder="password" />

                <div className="remember-pass">
                    <input type="checkbox" name="" id="remember-me" />
                    <label htmlFor="remember-me">remember me</label>
                    <a href="#">forget password</a>
                </div>

                <input type="submit" class="btn" value="login now" />
                <div className="login-or-signin">
                    <p>I dont have an acount</p>
                    <NavLink to={"/SignUp"}> creat one </NavLink>
                </div>
            </form>

        </div>

    )
}

export default Login;
