import { combineReducers } from "redux";
import deckReducer, { DeckState } from "./deckReducer";

export interface RootState {
  deck: DeckState
}

const rootReducer = combineReducers({
  deck: deckReducer
});

export default rootReducer;