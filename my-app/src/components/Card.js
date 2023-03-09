import React from "react";
import './card.css'; 
export default function Card(props){
    return(
        // <div className="card">
        //     <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" className="card-photo"/>
        //     <div className="card-stats">
        //         <img src="https://pixlok.com/wp-content/uploads/2021/02/Like-Icon-SVG.jpg" className="card-star"/>
        //         <span>5.0</span>
        //         <span className="gray">6 . </span>
        //         <span className="gray">USA</span>
        //     </div>
        //     <p>life lessons with katie zaferes</p>
        //     <p>From $136 / person</p>
        // </div>
        <div className="card">
            <img src={props.img} className="card-photo"/>
            <div className="card-stats">
                <img src="https://pixlok.com/wp-content/uploads/2021/02/Like-Icon-SVG.jpg" className="card-star"/>
                <span>{props.rating}</span>
                <span className="gray">{props.review}</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>From ${props.price} / person</p>
        </div>
    )   
}