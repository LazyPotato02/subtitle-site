import React from "react";
import './NavBar.css'
import logoImg from '../img/Assets/logo.svg'
function NavBar() {

    return (
        <div className="NavBar">
            <nav>
                {/*<h1><a className={'logo'} href="/">AllTheSubs</a></h1>*/}
                <a href="/"><img className={'logo'} src={logoImg} alt=""/></a>
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