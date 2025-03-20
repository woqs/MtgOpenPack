import React, { useEffect, useState } from 'react';
import { Card, ImageUris } from '../Domain/Card';
import "./CardDisplay.css"

const CardDisplay: React.FC<{card: Card, isReduced?: boolean}> = ({card, isReduced = false}) => {
  const [imgUri, setImgUri] = useState<string|undefined>();
  const [cardFaces, setCardFaces] = useState<ImageUris[]>();
  useEffect(() => {
    const cardImage = card.image_uris?.normal;
    const faces = card.card_faces ?? [];
    const img = cardImage !== undefined ? cardImage :  faces.length > 0 ? faces[0].image_uris?.normal : "";
    setCardFaces(faces);
    setImgUri(img);
  }, [card]);

  return (
    <div className={isReduced ? "reducedCard" : "card"} >
      <img alt="This is cool" src={imgUri} />
      {cardFaces && cardFaces.length > 1 &&
        <div
          style={{position: "absolute", color: "white", top: "90%", left: "45%"}}
          onClick={() => {
            imgUri === cardFaces[0].image_uris?.normal ?
              setImgUri(cardFaces[1].image_uris?.normal):
              setImgUri(cardFaces[0].image_uris?.normal)
            }}
        >
          Turn
        </div>
      }
    </div>
  );
}

export default CardDisplay;
