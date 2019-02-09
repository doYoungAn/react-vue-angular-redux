export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDUSER = 'ADDUSER';
export const DELETEUSER = 'DELETEUSER';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function addUser(user) {
    return {
        type: ADDUSER,
        payload: user
    }
}

export function deleteUser(index) {
    return {
        type: DELETEUSER,
        payload: index
    }
}