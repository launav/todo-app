
export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case '[TODO] add-todo':
            return [...state, action.payload]

        case '[TODO] delete-todo':
            const newTodo = state.filter(todo => todo.id != action.payload)
            return newTodo;
        case '[TODO] toggle-todo':
        return(
            state.map(todo=>{
                if(todo.id ===action.payload) return{...todo,done:!todo.done}
                return todo
            })
        )



        default:
            return state
    };



};
