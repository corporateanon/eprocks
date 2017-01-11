import * as dir from '../constants/directoryActionTypes';

const initial = {
    items: []
};

export default(state = initial, action) => {
    switch (action.type) {
        case dir.GET_LIST_FULFILLED:
            return {
                ...state,
                items: action.payload
            }
            break;
        default:

    }
    return state;
};
