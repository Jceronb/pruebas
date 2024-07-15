import { TodoItem } from "./TodoItem"

export const TodoList = ( { todos = [], onDeleteTodo, onToggleTodo } ) => {

  return (
    <ul className="list-group">
    {
        todos.map( todo => (
        /*  Llamamos al componente TodoItem con cada una de las listas por hacer  */
        <TodoItem key={todo.id}
         todo={todo}
         onDeleteTodo={ onDeleteTodo }
         onToggleTodo={ onToggleTodo }
         />

        ) )
    }
</ul>
  )
}


