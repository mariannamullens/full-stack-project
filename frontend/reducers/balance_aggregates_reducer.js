import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const balanceAggregatesReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.balanceAggregates;
    default:
      return oldState;
  }
}

export default balanceAggregatesReducer;