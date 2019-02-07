const initialState = {
    count: 0,
    owner: {
        name: '',
        age: 0
    },
    users: ['a', 'b', 'c']
}

export function reducers(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducers;