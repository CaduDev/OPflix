import { combineReducers } from 'redux';

import auth from './auth/reducer';
import headerConfig from './headerConfig/reducer';

export default combineReducers({
  auth,
  headerConfig
});
