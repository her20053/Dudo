import React, { useState, useEffect, useRef } from 'react';
import '../styles/diceComponentStyle.css';

const DiceComponent = () => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [rotateZ, setRotateZ] = useState(0);
    const diceRef = useRef(null);

    const handleDiceClick = () => {
        const diceFaces = [
            { x: 0, y: 0, z: 0 },    // [ Numero 6 ] Face 1
            { x: 90, y: 0, z: 0 },   // [ Numero 4 ] Face 2
            { x: 0, y: 90, z: 0 },   // [ Numero 2 ] Face 3
            { x: 0, y: -90, z: 0 },  // [ Numero 5 ] Face 4
            { x: -90, y: 0, z: 0 },  // [ Numero 3 ] Face 5
            { x: 180, y: 0, z: 0 }   // [ Numero 1 ] Face 6
        ];

        const randomFace = Math.floor(Math.random() * 6);

        setRotateX(diceFaces[randomFace].x + 360);
        setRotateY(diceFaces[randomFace].y + 360);
        setRotateZ(diceFaces[randomFace].z + 360);

        console.log(`The dice landed on face ${randomFace + 1}`);

        if (diceRef.current) {
            diceRef.current.style.animation = 'none';
            setTimeout(() => {
                diceRef.current.style.animation = '';
            }, 0);
        }
    };

    return (
        <div onClick={handleDiceClick}>
            <div className="diceComponent-dice-container">
                <div
                    ref={diceRef}
                    className="diceComponent-dice diceComponent-add-keyframe"
                    style={{
                        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
                    }}
                >
                    <div className="diceComponent-front">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="diceComponent-back">
                        <span></span>
                    </div>
                    <div className="diceComponent-right">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="diceComponent-left">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="diceComponent-top">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="diceComponent-bottom">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiceComponent;
