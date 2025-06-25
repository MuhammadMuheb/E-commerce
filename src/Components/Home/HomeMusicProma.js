import React, { useState, useEffect } from 'react';
import '../../App.css';
import { useNavigate } from "react-router-dom"; 

export default function MusicPromoCard() { 
    const navigate = useNavigate();
    const [musicpromocard, setMusicpromocard] = useState([]);
    const [timeLeft, setTimeLeft] = useState({
        days: "05",
        hours: "23",
        minutes: "59",
        seconds: "35",
    });


    useEffect(() => {
        fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/musicpromocard.json")
    .then((response) =>{response.json()
        .then((result) => {setMusicpromocard(result);})
    })
    }, []);

    useEffect(() => {
        const countdownDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = countdownDate - now;

            if (timeRemaining < 0) {
                clearInterval(interval);
                setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
            } else {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: days < 10 ? `0${days}` : days,
                    hours: hours < 10 ? `0${hours}` : hours,
                    minutes: minutes < 10 ? `0${minutes}` : minutes,
                    seconds: seconds < 10 ? `0${seconds}` : seconds,
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Music-proma">
            <div className="promo-text">
                <p className="category">Categories</p>
                <h1>Enhance Your <br /> Music Experience</h1>
                <div className="countdown">
                    <div className="countdown-item hours">
                        <span>{timeLeft.hours}</span>
                        <p>Hours</p>
                    </div>
                    <div className="countdown-item days">
                        <span>{timeLeft.days}</span>
                        <p>Days</p>
                    </div>
                    <div className="countdown-item min">
                        <span>{timeLeft.minutes}</span>
                        <p>Minutes</p>
                    </div>
                    <div className="countdown-item sec">
                        <span>{timeLeft.seconds}</span>
                        <p>Seconds</p>
                    </div>
                </div>
                <button 
                    className="btn" 
                    onClick={() => navigate('/buynow', { state: { product: musicpromocard[0] } })}>
                    Buy Now!
                </button>
            </div>
            <div className="promo-image">
                <img 
                    src={`/images/${musicpromocard[0]?.image || ""}`} 
                    alt={musicpromocard[0]?.title || "Product"} 
                    onClick={() => navigate(`/product/${musicpromocard[0]?.id}`, { state: { product: musicpromocard[0] } })}
                />
            </div>
        </div>
    );
}
