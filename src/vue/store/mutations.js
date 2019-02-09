export const increment = (state) => {
    state.count++;
}

export const decrement = (state) => {
    state.count--;
}

export const addUser = (state, user) => {
    state.users.push(user);
}

export const deleteUser = (state, index) => {
    state.users.splice(index, 1);
}