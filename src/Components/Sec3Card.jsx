import React from 'react'
import './Sec3Card.css'

export default function Sec3Card({imag, heading,point1,point2}) {
    return (
        <div className="Card">
            <div className='leftSideCard'>
            <div className="cardImage">
                <img src={imag} alt="G" />
            </div>
            <h3 className="cardHeading">{heading}</h3>
            </div>
            <div className='rightSideCard'>
            <ul>
                {(point1!==""&&point1!==null)?<li>{point1} </li>:""}
                {(point2!==""&&point2!==null)?<li>{point2} </li>:""}
            </ul>
            </div>
        </div>
    )
}
