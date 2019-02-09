export const increment = ({ commit }) => {
    commit('increment');
}

export const decrement = ({ commit }) => {
    commit('decrement');
}

export const addUser = (context, user) => {
    context.commit('addUser', user);
}

export const deleteUser = (context, index) => {
    context.commit('deleteUser', index);
}