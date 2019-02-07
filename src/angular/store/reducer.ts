import { Action } from '@ngrx/store';

const initialState = {
    count: 0,
    owner: {
        name: '',
        age: 0
    }
}

export function reducers(state = initialState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}