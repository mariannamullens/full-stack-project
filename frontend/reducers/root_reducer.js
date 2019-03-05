import { combineReducers } from 'redux';
import errorsReducer from './errors/errors_reducer';
import entitiesReducer from './entities/entities_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui/ui_reducer';
import balanceAggregatesReducer from './balance_aggregates_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  ui: uiReducer,
  balanceAggregates: balanceAggregatesReducer,
});

export default rootReducer;