import React from "react";
import './NavBar.css'

function NavBar() {
    return (
        <div className="NavBar">
            <nav>
                <h1><a className={'logo'} href="/">AllTheSubs</a></h1>
                <div className={"links"}>
                    <a href="">Movies</a>
                    <a href="">Series</a>
                    <a href="">Latest</a>
                    <a href=""><i className="fas fa-search"></i></a>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;