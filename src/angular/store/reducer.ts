import { Action } from '@ngrx/store';
import { ActionTypes } from './actions';

const initialState = {
    count: 0,
    owner: {
        name: '',
        age: 0
    },
    users: ['a', 'b', 'c']
}

export function reducers(state = initialState, action): any {
    switch (action.type) {
        case ActionTypes.Increment:
            return {
                ...state,
                count: state.count + 1
            };
        case ActionTypes.Decrement:
            return {
                ...state,
                count: state.count - 1
            };
        case ActionTypes.AddUser:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case ActionTypes.DeleteUser:
            state.users.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}