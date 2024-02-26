import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "reducer";
import { Card } from "components/Card";

const DeckList: FC = () => {
  const { deckList } = useSelector((state: RootState) => state.deck);
  const [avgMana, setAvgMana] = useState<number>(0);

  useEffect(() => {
    const sum = deckList.reduce((prev, current) => {
      let tempSum = prev;
      tempSum += current.cmc;

      return tempSum;
    }, 0);

    setAvgMana(deckList.length ? sum / deckList.length : 0);
  }, [deckList]);

  return (
    <div className="pt-14 px-5 mx-auto">
      <p className="font-bold text-xl text-black">
        Average Mana Cost: { avgMana }
      </p>
      <div className="sm:mt-10 mt-5 grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
        {
          deckList.map((card) => (
            <Card
              key={card.id}
              data={card}
              isShowAdd={false}
            />
          ))
        }
      </div>
    </div>
  )
}

export default DeckList;