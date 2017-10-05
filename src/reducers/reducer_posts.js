import { FETCH_POSTS } from '../actions';

export default function(state = {}, action){
    switch(action.type){

        case FETCH_POSTS: 
            console.log(action.payload.data); // [post1, post2] Need to convert array to object (lodash)

        default:
        return state;
    }
}