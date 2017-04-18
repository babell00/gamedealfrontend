export default function reducer(state = {
    games: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'GAMESEARCH_PENDING': {
            return {
                ...state,
                fetching: true
            };
        }
        case 'GAMESEARCH_REJECTED': {
            console.log(action.payload)
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }
        case 'GAMESEARCH_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                games: action.payload.data
            };
        }
        default: {
            return state;
        }
    }

}