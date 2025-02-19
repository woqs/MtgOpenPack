import React, { useContext } from 'react';
import SearchContext from '../Infrastructure/SearchContext';

function CardsDisplay() {
  const {selectedSet} = useContext(SearchContext);

  return (
    <div>{selectedSet}</div>
  );
}

export default CardsDisplay;
