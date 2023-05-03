import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import friends from './friends';
import profile from './profile';
import search from './search';

export default combineReducers({
  posts,
  auth,
  friends,
  profile,
  search
});