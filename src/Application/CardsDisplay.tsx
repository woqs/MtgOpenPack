import React, { useContext } from 'react';
import SearchContext from '../Infrastructure/SearchContext';
import { Card } from '../Domain/Card';
import CardDisplay from './CardDisplay';

function CardsDisplay() {
  const {draftCards} = useContext(SearchContext);

  return (
    <div style={{ width: "80%", height: "80%", display: "flex", justifyContent: 'space-around', flexWrap: "wrap", marginBottom: "10%"}}>
      {draftCards.map((card: Card) => <CardDisplay card={card} />)}
    </div>
  );
}

export default CardsDisplay;
