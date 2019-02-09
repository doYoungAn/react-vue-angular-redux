import { INCREMENT, DECREMENT, ADDUSER, DELETEUSER } from './actions';

const initialState = {
    count: 0,
    owner: {
        name: '',
        age: 0
    },
    users: ['a', 'b', 'c']
}

export function reducers(state = initialState, action) {
    console.log('들어온 액션', action);
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case ADDUSER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case DELETEUSER:
            state.users.splice(action.payload, 1);
            const users = state.users;
            // return state;
            return Object.assign({}, state, {
                users: users
            });
        default:
            return state;
    }
}

export default reducers;