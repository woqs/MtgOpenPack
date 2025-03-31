import BoosterTypes from "../Application/BoosterTypes";
import DraftDisplay from "../Application/DraftDisplay";
import OpenDraft from "../Application/OpenDraft";
import SetList from "../Application/SetList";

function SealedPage() {

  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", gap: "40px", paddingTop: "40px", width: "100%" }}>
      <div style={{ display:"flex", justifyContent: "space-around", width: "100%"}}>
        <div style={{width: "50%", height: "50px", display:"flex", justifyContent: "space-around"}}>
          <OpenDraft />
          <SetList />
          <BoosterTypes />
        </div>
      </div>
      <div style={{display: "flex", justifyContent: 'space-around', width: "100%", padding: "0% 10%"}}>
        <DraftDisplay />
      </div>
    </div>
  );
}

export default SealedPage;
