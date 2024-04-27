import React, {useState, useEffect} from 'react';
import img1 from '../img/Ahsoka_Mandalorian_babyyoda.jpg'
import img2 from '../img/Avengers.jpg'
import img3 from '../img/DUNE_2.jpg'
import img4 from '../img/R2D2.png'
import img5 from '../img/DUNE_2_.jpg'


function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
let numberBackgroundImg = getRandomNumber()
function Home(){
    const backgrounds = [
        img1, img2, img3, img4, img5
    ];

    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
        document.body.style.backgroundSize = 'cover';

        // Cleanup function to reset styles when component unmounts
        return () => {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundPosition = '';
        };
    }, []);
    return (
        <div className="App" style={{backgroundImage: `url(${backgroundImage})`}}>
            {/* Your app content here */}
            <h1>Welcome to My React App</h1>
        </div>
    )
}

export default Home;