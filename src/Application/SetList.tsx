import React, { useContext, useMemo, useState } from 'react';
import { ScryfallApiRepository } from '../Infrastructure/ScryfallApiRepository';
import { CrackableSetType, Set } from '../Domain/Set';
import SearchContext from '../Infrastructure/SearchContext';

function SetList() {
  const {getSetList} = ScryfallApiRepository();
  const [sets, setSets] = useState<Array<Set>>([]);
  const {setSelectedSet} = useContext(SearchContext);

  useMemo(() => {
    getSetList().then((sets: Set[]) => setSets(sets));
  } , [])

  return (
    <select onChange={(element) => setSelectedSet(element.target.value)}>
      {sets.map((set: Set) => {return CrackableSetType.includes(set.set_type) && (<option value={set.code}>{set.name}</option>)})}
    </select>
  );
}

export default SetList;
