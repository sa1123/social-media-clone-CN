import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import friends from './friends';
import profile from './profile';

export default combineReducers({
  posts,
  auth,
  friends,
  profile
});