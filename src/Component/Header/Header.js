

import "./Header.css";

import { NavLink } from "react-router-dom";

import { FaBars, FaSearch, FaUser } from "react-icons/fa";

import { useState } from "react";

const Header = () => {

    const [navOpen, setnavOpen] = useState(false);
    const [searchOen, setsearchOen] = useState(false);
    

    return (

        <div>
            
            <section className="header" id="header">

                <img className="logo" src={require('../../assets/images/logo.png')} height="35" alt="" />

                <ul className={ `ul-container ${navOpen ? 'open' : '' } ` } id="navbar">
                    <NavLink onClick={() => { setnavOpen(false) }} to="/" className="li"> <a >Home</a></NavLink>
                    <NavLink onClick={() => { setnavOpen(false) }} to="/Shop" className="li"> <a >Shop</a></NavLink> 
                    <NavLink onClick={() => { setnavOpen(false) }} to="/Blog" className="li"> <a >Blog</a></NavLink>
                    <NavLink onClick={() => { setnavOpen(false) }} to="/About" className="li"> <a >About</a></NavLink>  
                    <NavLink onClick={() => { setnavOpen(false) }} to="/Cart" className="li"> <a >Cart</a></NavLink> 
                </ul>
                
                <div className="icons">
                    <FaBars className="icon three-bars" onClick={() => {

                        setnavOpen(!navOpen)
                        setsearchOen(false)
                    }} />
                    <FaSearch className="icon Search-icon" onClick={() =>{

                        setsearchOen(!searchOen)
                        setnavOpen(false)
                    }} />
                    <NavLink to={"/Login"} onClick={() => {

                        setsearchOen(false)
                        setnavOpen(false)
                    }} >
                        <FaUser className="icon user-icon" />
                    </NavLink>
                </div>

                <form action="" className={` search-form ${searchOen ? "open" : ""} `}>
                    <input type="search" name="" placeholder="search here..." id="search-box" />
                    <label htmlFor="search-box"><FaSearch className="input-icon" /></label>
                </form>
                    

            </section>
        
        </div>

    )
}

export default Header;