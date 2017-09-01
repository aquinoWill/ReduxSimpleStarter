import { FETCH_WEATHE } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHE:
            //return state.concat([action.payload.data]);
            return [action.paylod.data, ...state];
    }
    return state;
}


