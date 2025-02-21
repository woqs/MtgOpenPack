import React, { useContext, useEffect, useMemo, useState } from 'react';
import SearchContext from '../Infrastructure/SearchContext';
import { Card, Currency } from '../Domain/Card';

function BoosterValue() {
  const [value, setValue] = useState<number>(0);
  const [currency, setCurrency] = useState<Currency>("eur");
  const {boosterCards} = useContext(SearchContext);

  useEffect(() => {
    let sum: number = 0;
    boosterCards.forEach((card: Card) => {
      sum += Number.isNaN(Number.parseFloat(card.prices[currency])) ?
        Number.parseFloat(card.prices.usd_foil) ?? 0 :
        Number.parseFloat(card.prices[currency]) ?? 0
      ;
    });
    setValue(sum);
  }, [boosterCards]);

  return (
    <div>
      Value: {value}
      <select onChange={(element) => setCurrency(element.target.value as Currency)}>
        <option value="eur">€</option>
        <option value="usd">$</option>
      </select>
    </div>
  );
}

export default BoosterValue;
