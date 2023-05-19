import { useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService";
import { useEffect } from "react";

export const ListTodosComponent = () => {

  const today = new Date();
  const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());

  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);

  const refreshTodos = () => {

    retrieveAllTodosForUsernameApi('in28minutes')
    .then(response => {
      setTodos(response.data);
    })
    .catch(response => console.log(response));

  }

  const deleteTodo = (id) => {
    deleteTodoApi('in28minutes', id)
    .then(() => {
      setMessage(`Delete of todo with id = ${id} successful`);
      refreshTodos();
    })
    .catch(response => console.log(response));
  }

  useEffect(
    () => refreshTodos()
  , []);
  

  return(
    <div className="container">
      <h1>Things You Want To Do!</h1>
      {message && <div className="alert alert-warning">{ message }</div>}
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Description</th>
              <th>Is Done?</th>
              <th>Target Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map((todo, i) => (
                <tr key={i}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>
                    <button 
                      className="btn btn-warning" 
                      onClick={ () => deleteTodo(todo.id) }
                    >Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
