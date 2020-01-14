const getters = {
    doneTodosCount: (state) => {
        return state.todos.length
      },
      doneTodos: state => {
        return state.todos.filter(todo => todo.done)
      }
}
export default getters