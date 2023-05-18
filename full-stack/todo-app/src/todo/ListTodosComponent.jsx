import { useState } from "react";
import { retrieveAllTodosForUsername } from "./api/TodoApiService";
import { useEffect } from "react";

export const ListTodosComponent = () => {

  const today = new Date();
  const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());

  const [todos, setTodos] = useState([]);

  const refreshTodos = () => {

    retrieveAllTodosForUsername('in28minutes')
    .then(response => {
      setTodos(response.data);
    })
    .catch(response => console.log(response));

  }

  useEffect(
    () => refreshTodos()
  , []);
  

  return(
    <div className="container">
      <h1>Things You Want To Do!</h1>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <td>ID</td>
              <td>Description</td>
              <td>Is Done?</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {
              todos.map((todo, i) => (
                <tr key={i}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  {/* <td>{todo.targeDate.toDateString()}</td> */}
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
