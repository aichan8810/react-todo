import React, {useState} from 'react';

function TodoList() {
    const initialState = [
      {
        task: 'vuejs',
        isCompleted: false
      },
      {
        task: 'reactjs',
        isCompleted: false
      },
      {
        task: 'Gatsbyjs',
        isCompleted: false
      },
    ]
    const [todos, setTodo] = useState(initialState);
  return (
    <div>
      <h1>TodoList</h1>
    </div>
  );
}
export default TodoList;
