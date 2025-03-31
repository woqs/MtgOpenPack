import React, { useEffect, useState } from 'react';
import { Card, ImageUris } from '../Domain/Card';
import { styled } from 'styled-components';

const CardDiv = styled.div<{ $reduced?: boolean }>`
  width: ${props => props.$reduced ? 200 : 256}px;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: ${props => props.$reduced ? "scale3d(1.15, 1.15, 0.2)" : "scale3d(1.3, 1.3, 0.3)"};
    z-index: 1;
  }
`

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
    <CardDiv $reduced={isReduced}>
      <img alt="This is cool" src={imgUri} style={{ borderRadius: "10px", maxWidth: "100%"}} />
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
    </CardDiv>
  );
}

export default CardDisplay;
