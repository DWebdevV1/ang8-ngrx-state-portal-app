import {UserModel} from '../models/user-model';
import {UserAction, UserActionsTypes} from '../actions/user.action';

const initialState: UserModel = {
  userID: null,
  firstName: null,
  lastName: null
};

export function UserReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionsTypes.SAVE_USER:
      return state = action.payload;
    case UserActionsTypes.RESET_USER:
      return initialState;
    default:
      return state;
  }
}
