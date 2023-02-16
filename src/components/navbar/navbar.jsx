import React from 'react'
import { Link } from 'react-router-dom';
const navbar = ({ image }) => {
    return (
            <>
            <header>
            <section id='navbar'>
                    <div className="container">
                        <div className="nav-area">
                            <ul className='nav'>
                                <div className="nav_one">
                                <Link to='/'><img src={image.Logo} alt="logo" /></Link>
                                <Link ><img src={image.SideBar} alt="side-bar" /></Link>
                                <Link ><img src={image.HomePage} alt="home-page" /></Link>
                                <Link ><img src={image.CheckBag} alt="check-bag" /></Link>
                                </div>
                                <div className="nav_second">
                                <Link ><img src={image.Exit} alt="exit" /></Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
      
            </>
    
    )
}

export default navbar