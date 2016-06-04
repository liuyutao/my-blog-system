/**
 * Created by user on 16/6/4.
 */
function accountReducer(state, action) {
  switch (action.type) {
    case 'login':
      return Object.assign({}, state, action.account);
    case 'logout':
      return Object.assign({}, state, action.account);
  }
}

export default accountReducer;
