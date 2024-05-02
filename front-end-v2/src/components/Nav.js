import logo from '../img/logo.svg'
import './nav.css'


function Nav(){


    function search(e) {
        const searchValues = document.querySelector('input').value
        window.location.href = `/search/${searchValues}`;
    }


    return(
        <div className={'Nav'}>
            <div className={'leftPartNav'}>
                <a href="/"><img className={'logo'} src={logo} alt=""/></a>
                <div className={'anchors'}>
                    <a href="/">Home</a>
                    <a href="#">Community</a>
                </div>
            </div>
            <div className={'search'}>
                <input className={'searchInp'} type="text"/>
                <button onClick={search} className={'searchBtn'}>Search</button>
            </div>
        </div>
    )

}

export default Nav