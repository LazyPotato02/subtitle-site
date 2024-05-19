import img1 from '../img/Ahsoka_Mandalorian_babyyoda.jpg'

import './Home.css'
import testImg from '../img/13_Hours_2016.webp'
import testImg2 from '../img/Ant_Man_2015.webp'
import testImg3 from '../img/Barbie_2023.webp'
import testImg4 from '../img/Captain_America_The_Winter_Soldier_2014.webp'
function Home() {

    document.title = 'All The Subs'

    return (
        <div className={'main'}>
            <div className={'leftWrap'}>
                <div className={'leftWrapTextBoxes'}>
                    <p className={'welcome'}>WELCOME</p>
                    <div className={'subtitlesText'}>
                        <p className={'aqua'}>SUBTITLES</p>
                        <p>IN ANY LANGUAGE FOR ANY MOVIE</p>
                    </div>
                    <img className={'addimg1'} src={img1} alt=""/>

                </div>

            </div>
            <div className={'rightWrap'}>
            <p className={'latest'}>LATEST</p>
                <ul className={'movies'}>
                    <li className={'movie'}>
                        <img src={testImg} alt=""/>
                        <p>Harry Potter and the Deathly Hallows – Part 2</p>
                    </li>
                    <li className={'movie'}>
                        <img src={testImg2} alt=""/>
                        <p>NAME</p>
                    </li>
                    <li className={'movie'}>
                        <img src={testImg3} alt=""/>
                        <p>NAME</p>
                    </li>
                    <li className={'movie'}>
                        <img src={testImg4} alt=""/>
                        <p>NAME</p>
                    </li>
                    <li className={'movie'}>
                        <img src={testImg} alt=""/>
                        <p>NAME</p>
                    </li>
                    <li className={'movie'}>
                        <img src={testImg2} alt=""/>
                        <p>NAME</p>
                    </li>
                </ul>
            </div>
            <img className={'addimg2'} src={img1} alt=""/>

        </div>
    )
}

export default Home;
