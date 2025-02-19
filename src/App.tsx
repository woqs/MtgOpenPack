import './App.css';
import CardsDisplay from './Application/CardsDisplay';
import OpenAPack from './Application/OpenAPack';
import SetList from './Application/SetList';

function App() {

  return (
    <div style={{ height: "100%", display: "flex", justifyContent: 'space-around' }}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
        <div style={{ display:"flex", justifyContent: "space-around", height: "50px" }}>
          <OpenAPack />
          <SetList />
        </div>
        <CardsDisplay />
      </div>
    </div>
  );
}

export default App;
