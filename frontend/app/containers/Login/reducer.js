import produce from 'immer';
import { TEST } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TEST:
        // Delete prefixed '@' from the github username
        console.log("test")
        break;
    }
  });

export default loginReducer;
