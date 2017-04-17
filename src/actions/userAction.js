export function fetchUser(){
    return {
        type: "FETCH_USER_FULLFILLED",
        payload: {
            name: 'Kuba',
            age: 30
        }
    }
}