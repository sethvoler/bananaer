import {combineReducers} from 'redux';
import theme from './theme';
import status from './login';
import user from './user';
import tab from './tab';
import plays from './plays';
import token from './token';
import {rootCom, RootNavigator} from '../navigator/AppNavigator';

const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

const navReducer = (state = navState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

const index = combineReducers({
  nav: navReducer,
  theme: theme,
  status: status,
  user: user,
  tab: tab,
  plays: plays,
  token: token,
});

export default index;