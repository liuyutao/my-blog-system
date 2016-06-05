/**
 * Created by user on 16/6/5.
 */

import * as types from '../constants/actionTypes';

function authenticated(json) {
  debugger;
  return {
    type: types.ACCOUT_AUTHENTICATED,
    account: {
      username: json.result.username,
      isLogin: json.message == 'ok'
    }
  }
}


export function isAuthenticated() {
  return dispatch => {
    return fetch('/mock/isLogin.json', {
      credentials:"same-origin"
    }).then((response) => {
      response = response.json();
      return response;
    }).then(
      json => dispatch(authenticated(json))
    )
  }
}
