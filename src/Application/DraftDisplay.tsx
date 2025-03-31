import React, { useContext } from 'react';
import SearchContext from '../Infrastructure/SearchContext';
import DraftColumn from './DraftColumn';
import { Card } from '../Domain/Card';

import { styled } from 'styled-components';

const RarityRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

function DraftDisplay() {
  const {draftCards} = useContext(SearchContext);

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: 'space-around', flexWrap: "wrap", marginBottom: "10%", overflow: "auto"}}>
      <RarityRow>
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
      </RarityRow>
      <RarityRow>
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
      </RarityRow>
      <RarityRow>
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
      </RarityRow>
    </div>
  );
}

export default DraftDisplay;
