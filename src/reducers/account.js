/**
 * Created by user on 16/6/4.
 */
import * as types from '../constants/actionTypes'

function accountReducer(state = {}, action) {
  switch (action.type) {
    case types.ACCOUNT_LOGIN:
      return Object.assign({}, state, action.account);
    case types.ACCOUNT_LOGOUT:
      return Object.assign({}, state, action.account);
    default:
      return state;
  }
}

export default accountReducer;
