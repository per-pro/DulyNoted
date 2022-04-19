import { RECEIVE_AUTHOR, RECEIVE_AUTHORS } from "../../actions/authors_actions"

const authorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_AUTHOR:
            return Object.assign({}, state, action.payload.authors)
        case RECEIVE_AUTHORS:
            return Object.assign({}, action.payload.authors)
        default:
            return state;
    }
}

export default authorsReducer;