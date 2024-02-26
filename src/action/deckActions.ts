import { ADD_TO_DECK } from "./actionTypes";

export const addToDeck = (card: GatheringCard) => {
  return {
    type: ADD_TO_DECK,
    payload: card,
  };
};