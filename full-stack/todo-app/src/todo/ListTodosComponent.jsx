export const ListTodosComponent = () => {

  const today = new Date();
  const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());

  const todos = [
    {id:1, description: 'Learn AWS', done: false, targeDate: targetDate},
    {id:2, description: 'Learn DevOps', done: false, targeDate: targetDate},
    {id:3, description: 'Learn Full Stack', done: false, targeDate: targetDate},
  ]

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
                  <td>{todo.targeDate.toDateString()}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
