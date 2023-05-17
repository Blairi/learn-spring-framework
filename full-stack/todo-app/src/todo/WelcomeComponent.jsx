import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export const WelcomeComponent = () => {

  const { username } = useParams();

  const callHelloWorldApi = () => {
    axios.get("http://localhost:8080/hello-world")
      .then(
        (response) => successfulResponse (response)
      )
      .catch(
        (response) => errorResponse (response)
      )
      .finally(
        (response) => console.log('cleanup')
      )
  }

  const successfulResponse = (response) => {
    console.log(response);
  }

  const errorResponse = (response) => {
    console.log(response);
  }

  return(
    <div className="Welcome">
      <h1>Welcome { username }</h1>
      <div>
        Manage your todos - <Link to='/todos'>Go here</Link>
      </div>
      <div>
        <button 
          className="btn btn-success m-5" 
          onClick={callHelloWorldApi}
          >Call Hello World API</button>
      </div>
    </div>
  )
}
