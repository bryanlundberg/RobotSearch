import React from "react";
import "../stylesheets/Card.css"

export default function Card ({ maidenName, gender, ssn, image, showMore }) {
  return (
    <section className="card-container" onClick={showMore}>
      <img src={image} alt="" className="image-card"/>
      <div className="aside-info-card">
        <p>{maidenName}</p>
      </div>
    </section>
  )
}