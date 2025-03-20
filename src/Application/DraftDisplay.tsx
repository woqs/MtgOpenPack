import React, { useContext } from 'react';
import SearchContext from '../Infrastructure/SearchContext';

import "./DraftDisplay.css"
import DraftColumn from './DraftColumn';
import { Card } from '../Domain/Card';

function DraftDisplay() {
  const {draftCards} = useContext(SearchContext);

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: 'space-around', flexWrap: "wrap", marginBottom: "10%", overflow: "auto"}}>
      <div className="rarityRow">
        <div style={{width: "75px"}}>
          R/M
        </div>
        <DraftColumn title="W" cards={draftCards} filter={(card: Card) =>
          (card.rarity === "rare" || card.rarity === "mythic") && card.color_identity.length === 1 && card.color_identity.includes("W")
        } />
        <DraftColumn title="U" cards={draftCards} filter={(card: Card) =>
          (card.rarity === "rare" || card.rarity === "mythic") && card.color_identity.length === 1 && card.color_identity.includes("U")
        }/>
        <DraftColumn title="B" cards={draftCards} filter={(card: Card) =>
          (card.rarity === "rare" || card.rarity === "mythic") && card.color_identity.length === 1 && card.color_identity.includes("B")
        }/>
        <DraftColumn title="R" cards={draftCards} filter={(card: Card) =>
          (card.rarity === "rare" || card.rarity === "mythic") && card.color_identity.length === 1 && card.color_identity.includes("R")
        }/>
        <DraftColumn title="G" cards={draftCards} filter={(card: Card) =>
          (card.rarity === "rare" || card.rarity === "mythic") && card.color_identity.length === 1 && card.color_identity.includes("G")
        }/>
        <DraftColumn title="Multi" cards={draftCards} filter={(card: Card) =>
          (card.rarity === "rare" || card.rarity === "mythic") && card.color_identity.length > 1
        }/>
        <DraftColumn title="None" cards={draftCards} filter={(card: Card) =>
          (card.rarity === "rare" || card.rarity === "mythic") && card.color_identity.length === 0
        }/>
      </div>
      <div className="rarityRow">
        <div style={{width: "75px"}}>
          Unco
        </div>
        <DraftColumn title="W" cards={draftCards} filter={(card: Card) =>
          card.rarity === "uncommon" && card.color_identity.length === 1 && card.color_identity.includes("W")
        }/>
        <DraftColumn title="U" cards={draftCards} filter={(card: Card) =>
          card.rarity === "uncommon" && card.color_identity.length === 1 && card.color_identity.includes("U")
        }/>
        <DraftColumn title="B" cards={draftCards} filter={(card: Card) =>
          card.rarity === "uncommon" && card.color_identity.length === 1 && card.color_identity.includes("B")
        }/>
        <DraftColumn title="R" cards={draftCards} filter={(card: Card) =>
          card.rarity === "uncommon" && card.color_identity.length === 1 && card.color_identity.includes("R")
        }/>
        <DraftColumn title="G" cards={draftCards} filter={(card: Card) =>
          card.rarity === "uncommon" && card.color_identity.length === 1 && card.color_identity.includes("G")
        }/>
        <DraftColumn title="Multi" cards={draftCards} filter={(card: Card) =>
          card.rarity === "uncommon" && card.color_identity.length > 1
        }/>
        <DraftColumn title="None" cards={draftCards} filter={(card: Card) =>
          card.rarity === "uncommon" && card.color_identity.length === 0
        }/>
      </div>
      <div className="rarityRow">
        <div style={{width: "75px"}}>
          Common
        </div>
        <DraftColumn title="W" cards={draftCards} filter={(card: Card) =>
          card.rarity === "common" && card.color_identity.length === 1 && card.color_identity.includes("W")
        }/>
        <DraftColumn title="U" cards={draftCards} filter={(card: Card) =>
          card.rarity === "common" && card.color_identity.length === 1 && card.color_identity.includes("U")
        }/>
        <DraftColumn title="B" cards={draftCards} filter={(card: Card) =>
          card.rarity === "common" && card.color_identity.length === 1 && card.color_identity.includes("B")
        }/>
        <DraftColumn title="R" cards={draftCards} filter={(card: Card) =>
          card.rarity === "common" && card.color_identity.length === 1 && card.color_identity.includes("R")
        }/>
        <DraftColumn title="G" cards={draftCards} filter={(card: Card) =>
          card.rarity === "common" && card.color_identity.length === 1 && card.color_identity.includes("G")
        }/>
        <DraftColumn title="Multi" cards={draftCards} filter={(card: Card) =>
          card.rarity === "common" && card.color_identity.length > 1
        }/>
        <DraftColumn title="None" cards={draftCards} filter={(card: Card) =>
          card.rarity === "common" && card.color_identity.length === 0
        }/>
      </div>
    </div>
  );
}

export default DraftDisplay;
