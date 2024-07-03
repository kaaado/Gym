import React from 'react'

export default function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className="a-b-img">
            <img src={props.img} alt="image" />
        </div>
        <div className="a-b-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
    </div>
  )
}
