import BoosterTypes from '../Application/BoosterTypes';
import BoosterValue from '../Application/BoosterValue';
import CardsDisplay from '../Application/CardsDisplay';
import OpenPacks from '../Application/OpenPacks';
import SetList from '../Application/SetList';

function OpenAPackPage() {
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", gap: "40px", paddingTop: "40px", width: "100%" }}>
      <div style={{ display:"flex", justifyContent: "space-around", width: "100%"}}>
        <div style={{width: "50%", height: "50px", display:"flex", justifyContent: "space-around"}}>
          <OpenPacks number={1} title="Open Booster" />
          <SetList />
          <BoosterTypes />
        </div>
      </div>
      <BoosterValue />
      <div style={{display: "flex", justifyContent: 'space-around', width: "100%", padding: "0% 10%"}}>
        <CardsDisplay />
      </div>
    </div>
  );
}

export default OpenAPackPage;
