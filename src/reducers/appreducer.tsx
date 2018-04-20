import {NumbersAction} from '../actions/appaction';
import { AppStoreState } from '../store/index';
import { INCREMENT_NUMBERS, DECREMENT_NUMBERS } from '../constants/index';

const initialState = {counter: 0, name:"world"};

export function numbers(state=initialState, action: NumbersAction): AppStoreState {
  switch (action.type) {
    case INCREMENT_NUMBERS:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_NUMBERS:
      return { ...state, counter: state.counter - 1 };
  }
  return state;
}