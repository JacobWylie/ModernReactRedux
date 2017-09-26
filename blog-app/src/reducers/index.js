import { combineReducers } from 'redux';
import POSTSREDUCER from './reducer_posts';

const rootReducer = combineReducers({
  posts: POSTSREDUCER
});

export default rootReducer;
