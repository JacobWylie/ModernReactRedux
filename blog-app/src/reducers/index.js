import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import POSTSREDUCER from './reducer_posts';

const rootReducer = combineReducers({
  posts: POSTSREDUCER,
  form: formReducer
});

export default rootReducer;
