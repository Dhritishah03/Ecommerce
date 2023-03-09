import React from "react";
import './Hero.css'; 
export default function Hero(){
    return (
        <section className="hero">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Maqueta-efecto-marco-collage-fotos_117023-2491.jpg/1280px-Maqueta-efecto-marco-collage-fotos_117023-2491.jpg" className="hero-photo"></img>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led
            one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}