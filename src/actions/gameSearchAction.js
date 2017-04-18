import axios from 'axios';


function createClient(){
    const httpClient = axios.create();
    const timeout = 10000;
    httpClient.defaults.timeout = timeout;
    
    return httpClient;
}

export function gameSearch(title) {
    return function (dispatch) {
        const httpClient = createClient();
        dispatch({
            type: 'GAMESEARCH',
            payload: httpClient.get("http://localhost:8080/gamesearch",{params:{title: title}})
        });
    }
}