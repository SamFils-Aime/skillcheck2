import {createStore} from 'redux';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode:0,
    imgurl:'',
    monthly_mortgage:0,
    mounthly_rent:0
}

//constants
export const UPDATE_STATE = 'UPDATE_STATE';
export const ADD_POST = 'ADD_POST';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';

//reducer
function reducer(state=initialState, action) {
    const {type, payload, stateKey} = action;
    switch(type) {
        case UPDATE_STATE:
            return {
                ...state,
                [stateKey]: payload
            }
        case ADD_POST:
            const {name, address, city,state,zipcode} = state
            const post = {name, address, city,state,zipcode}
            const newPost = [...state.posts, post]
            return {
                ...state,
                posts: newPost
            }
        case CLEAR_FIELDS:
            return {
                ...state,
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode:0,
                imgurl:'',
                monthly_mortgage:0,
                mounthly_rent:0
            }
        default:
            return state;
    }
}

export default createStore(reducer)