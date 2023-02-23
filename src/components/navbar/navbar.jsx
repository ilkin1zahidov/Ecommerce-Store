import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
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
                                <CustomLink to='/' ><img src={image.HomePage} alt="home-page" /></CustomLink>
                                <CustomLink to='/card-details' ><img src={image.CheckBag} alt="check-bag" /></CustomLink>
                                </div>
                                <div className="nav_second">
                                <Link to='/'><img src={image.Exit} alt="exit" /></Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
            </>
    
    )
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    console.log(window.location.pathname)
    return (
        <li style={{listStyle:'none'}} className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>

    )

}
export default navbar