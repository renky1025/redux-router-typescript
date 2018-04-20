import * as constants from '../constants'


export interface IncrementNumbers {
    type: constants.INCREMENT_NUMBERS;
}

export interface DecrementNumbers {
    type: constants.DECREMENT_NUMBERS;
}

export type NumbersAction = IncrementNumbers | DecrementNumbers;

export function incrementNumbers(): IncrementNumbers {
    return {
        type: constants.INCREMENT_NUMBERS
    }
}

export function decrementNumbers(): DecrementNumbers {
    return {
        type: constants.DECREMENT_NUMBERS
    }
}