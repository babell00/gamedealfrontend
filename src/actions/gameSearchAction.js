import axios from 'axios';

export function gameSearch(title) {
    return function (dispatch) {
        console.log(title);
        dispatch({
            type: 'GAMESEARCH',
            payload: axios.get("http://rest.learncode.academy/api/test123/tweets")
        })
    }
}