import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/slime.png"
                            text="Defeat the evil slimes to save the world!"
                            label="Unity/C#"
                            path='/projects'
                        />
                        <CardItem
                            src="images/quilava.jpg"
                            text="Core-v4 site for SJSU Software and Engineering Society"
                            label="React/JavaScript"
                            path='/projects'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/Raho.jpg"
                            text="Mock up webpage for insane ink!"
                            label="HTML/CSS/PHP"
                            path='/projects'
                        />
                        <CardItem
                            src="images/Suit.jpg"
                            text="Blog Simulator to post pictures online!"
                            label="Python/Django"
                            path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
