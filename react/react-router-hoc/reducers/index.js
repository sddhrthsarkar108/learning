import {combineReducers} from 'redux';
import parts from './part'

// here exact naming 'parts' matters since 
// to acces state defined in part.js need
// to be accessed via state.parts
export default combineReducers({
    parts
});