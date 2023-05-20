import { useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";

export const TodoComponent = () => {

  const { id } = useParams();

  const { username } = useAuth();

  const [description, setDescription] = useState('');

  useEffect(
    () => retrieveTodos()
  ,[id]);
  

  const retrieveTodos = () => {
    retrieveTodoApi(username, id)
    .then(response => {
      setDescription(response.data.description);
    })
    .catch(response => console.log(response));
  }

  return (
    <div className="container">
      <h1>Enter todo details</h1>
      <div>
        Description: {description}
      </div>
    </div>
  )
}
