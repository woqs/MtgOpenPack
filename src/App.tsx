import { useState } from 'react';
import './App.css';
import OpenAPackPage from './Pages/OpenAPackPage';
import SealedPage from './Pages/SealedPage';
import BoosterBoxPage from './Pages/BoosterBoxPage';

function App() {
  const [pageDisplayed, setPageDisplayed] = useState<"pack"|"sealed"|"box">("pack")
  return (
    <div>
      <div style={{display: "flex", width: "100%", justifyContent: 'space-around'}}>
        <div style={{display: "flex", width: "50%", marginTop: "20px", justifyContent:"space-around"}}>
          {pageDisplayed !== "pack" && <button onClick={() => setPageDisplayed("pack")}>Open a pack?</button>}
          {pageDisplayed !== "sealed" && <button onClick={() => setPageDisplayed("sealed")}>Wanna try sealed?</button>}
          {pageDisplayed !== "box" && <button onClick={() => setPageDisplayed("box")}>Open a Booster Box?</button>}
        </div>
      </div>
      {pageDisplayed === "pack" && <OpenAPackPage />}
      {pageDisplayed === "sealed" && <SealedPage />}
      {pageDisplayed === "box" && <BoosterBoxPage />}
    </div>
  );
}

export default App;
