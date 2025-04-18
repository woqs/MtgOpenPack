import BoosterTypes from "../Application/BoosterTypes";
import BoosterValue from "../Application/BoosterValue";
import DraftDisplay from "../Application/DraftDisplay";
import OpenPacks from "../Application/OpenPacks";
import SetList from "../Application/SetList";

function SealedPage() {
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", gap: "40px", paddingTop: "40px", width: "100%" }}>
      <div style={{ display:"flex", justifyContent: "space-around", width: "100%"}}>
        <div style={{width: "50%", height: "50px", display:"flex", justifyContent: "space-around"}}>
          <OpenPacks number={30} title="Open Box" />
          <SetList />
          <BoosterTypes />
        </div>
      </div>
      <BoosterValue />
      <div style={{display: "flex", justifyContent: 'space-around', width: "100%", padding: "0% 10%"}}>
        <DraftDisplay />
      </div>
    </div>
  );
}

export default SealedPage;
