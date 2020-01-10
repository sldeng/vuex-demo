const getters = {
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
      },
      doneTodos: state => {
        return state.todos.filter(todo => todo.done)
      }
}
export default getters