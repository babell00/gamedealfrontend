import axios from 'axios';

export function fetchTweets() {
    return function (dispatch) {
        dispatch({
            type: 'TWEETER',
            payload: axios.get("http://rest.learncode.academy/api/test123/tweets")
        })
    }
}