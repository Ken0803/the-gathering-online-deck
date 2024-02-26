import { ADD_TO_DECK } from 'action/actionTypes';

export interface DeckState {
  deckList: GatheringCard[];
}

type DeckAction = {
  type: typeof ADD_TO_DECK;
  payload: GatheringCard;
}

const initialState: DeckState = {
  deckList: [],
};

const deckReducer = (state: DeckState = initialState, action: DeckAction): DeckState => {
  switch (action.type) {
    case ADD_TO_DECK:
      return { ...state, deckList: [...state.deckList, action.payload] };
    default:
      return state;
  }
};

export default deckReducer;