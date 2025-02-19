import React from 'react';
import { Card } from '../Domain/Card';
import "./CardDisplay.css"

const CardDisplay: React.FC<{card: Card}> = ({card}) => {
  const cardImage = card.image_uris?.normal;
  const cardFaces = card.card_faces ?? [];
  return (
    <div className="card" >
      <img
        alt="This is cool"
        src={cardImage !== undefined ? cardImage :  cardFaces.length > 0 ? cardFaces[0].image_uris?.normal : ""}
        style={{maxWidth: "100%"}}
      />
      {cardFaces.length > 1 && <div>Turn</div>}
    </div>
  );
}

export default CardDisplay;
