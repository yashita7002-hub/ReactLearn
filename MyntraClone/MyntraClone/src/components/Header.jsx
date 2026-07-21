import React from 'react'
import { IoMdPerson } from 'react-icons/io'
import { GiHeartBeats } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
            <header>
                <div className="logo_container">
                    <Link to='/'>
                        <img
                            className="myntra_home"
                            src="images/myntra_logo.webp"
                            alt="Myntra Home" /></Link>
                </div>
                <nav className="nav_bar">
                    <Link href="#">Men</Link>
                    <Link href="#">Women</Link>
                    <Link href="#">Kids</Link>
                    <Link href="#">Home & Living</Link>
                    <Link href="#">Beauty</Link>
                    <Link href="#">Studio <sup>New</sup></Link>
                </nav>
                <div className="search_bar">
                    <span className="material-symbols-outlined search_icon">search</span>
                    <input className="search_input" placeholder="Search for products, brands and more" />
                </div>
                <div className="action_bar">
                    <div className="action_container">
                        <IoMdPerson />
                        <span className="action_name">Profile</span>
                    </div>

                    <div className="action_container">
                        <GiHeartBeats />
                        <span className="action_name">Wishlist</span>
                    </div>

                    <Link className="action_container" to='/bag'>
                         <FaShoppingBag />
                        <span className="action_name">Bag</span>
                        <span className="bag-item-count">0</span>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header