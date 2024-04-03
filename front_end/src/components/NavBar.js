import React from "react";
import './NavBar.css'
import logoImg from '../img/Assets/logo.svg'
import { CiSearch } from "react-icons/ci";
function NavBar() {




    function search(e) {
        const searchValues = document.querySelector('input').value
        window.location.href = `/search/${searchValues}`;
    }

    return (
        <div className="NavBar">
            <nav>
                {/*<h1><a className={'logo'} href="/">AllTheSubs</a></h1>*/}
                <a href="/"><img className={'logo'} src={logoImg} alt=""/></a>
                <div className={"links"}>
                    <a href="">Movies</a>
                    <a href="">Series</a>
                    {/*<a href="">Latest</a>*/}

                </div>
                <div className={'searchBar'} ><input type="text"/><CiSearch onClick={search} className={'searchBtn'}/></div>

            </nav>
        </div>
    );
}

export default NavBar;