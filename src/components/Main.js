import React from "react";
import "../styles/styles.css";
import "../styles/card.css";

export default function Card({props}) {
  return (
    <div>
      <article className="card">
        <img
          className="cover-img"
          src={props.imageUrl}
        />
        <div className="card-details">
          <div className="location">
            <img src="images/fill219.png" />
            <p>{props.location}</p>
            <a href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h2 className="place">{props.title}</h2>
          <p className="travel-duration">{props.startDate} - {props.endDate}</p>
          <p className="place-details">
            {props.description}
          </p>
        </div>
      </article>
      {/* <hr/> */}
    </div>
  );
}
