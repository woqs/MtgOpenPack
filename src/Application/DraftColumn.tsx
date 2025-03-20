import React from 'react';
import { Card } from '../Domain/Card';
import CardDisplay from './CardDisplay';

const DraftColumn: React.FC<{title: string, cards: Card[], filter: (card: Card) => boolean}> = ({title, cards, filter}) => {
  let cardNumber = 0;
  return (
    <div style={{width: "200px"}}>
      <div style={{textAlign: "center"}}>{title}</div>
      <div style={{display: "flex", flexDirection: "column", marginTop: "10px"}}>
        {cards
          .filter(filter)
          .map((card: Card) => {
            cardNumber += 1;
            return <div style={{marginTop: cardNumber === 1 ? "0px" : "-200px"}}><CardDisplay card={card} isReduced /></div>
          })
        }
      </div>
    </div>
  );
}

export default DraftColumn;
