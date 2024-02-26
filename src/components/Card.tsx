import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToDeck } from "../action/deckActions";
import { Loader } from "./Loader";
import { RootState } from "reducer";

interface CardProps {
  data: GatheringCard,
  isShowAdd: boolean
}

export const Card = (props: CardProps) => {
  const dispatch = useDispatch();
  const { deckList } = useSelector((state: RootState) => state.deck);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const onClickAdd = () => {
    if (deckList.length >= 30) {
      window.alert('Maximum Deck Limited');
    } else dispatch(addToDeck(props.data));
  }

  return (
    <div className="p-4 card rounded-lg shadow-md hover:shadow-xl flex flex-col justify-between gap-4">
      <img src={props.data.imageUrl} />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-base text-center">{ props.data.name } ({ props.data.cmc })</p>
        <p className="font-medium text-sm text-red-400 text-center">{ props.data.type }</p>
        { props.isShowAdd &&
          <button
            className="h-10 bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600"
            onClick={onClickAdd}
          >
            { !isAdding ?
              'Add to Deck'
              : <Loader />
            }
          </button>
        }
      </div>
    </div>
  )
}