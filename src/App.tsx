import './App.css';
import CardsDisplay from './Application/CardsDisplay';
import OpenAPack from './Application/OpenAPack';
import SetList from './Application/SetList';

function App() {

  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", gap: "40px", paddingTop: "60px", width: "100%" }}>
      <div style={{ display:"flex", justifyContent: "space-around", height: "50px", width: "100%"}}>
        <OpenAPack />
        <SetList />
      </div>
      <div style={{display: "flex", justifyContent: 'space-around', width: "100%", padding: "0% 10%"}}>
        <CardsDisplay />
      </div>
    </div>
  );
}

export default App;
