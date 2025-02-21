import React, { useContext, useMemo, useState } from 'react';
import SearchContext from '../Infrastructure/SearchContext';
import { BoosterType } from '../Domain/PackConstruction';

function BoosterTypes() {
  const {setBoosterType} = useContext(SearchContext);
  const boosterTypes: BoosterType[] = [
    "draft", "set", "play", "collector"
  ]

  return (
    <select onChange={(element) => setBoosterType(element.target.value as BoosterType)}>
      {boosterTypes.map((type: BoosterType) => <option value={type}>{type}</option>)}
    </select>
  );
}

export default BoosterTypes;
