export default function reducer(state = {
    tweets: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'TWEETER_TWEETS': {
            return {
                ...state,
                fetching: true
            };
        }
        case 'TWEETER_REJECTED': {
            console.log(action.payload)
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }
        case 'TWEETER_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                tweets: action.payload
            };
        }
        default: {
            return state;
        }
    }

}