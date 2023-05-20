import { useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";

export const TodoComponent = () => {

  const { id } = useParams();

  const { username } = useAuth();

  const [description, setDescription] = useState('');
  const [targetDate, setTargetDate] = useState('');

  useEffect(
    () => retrieveTodos()
  ,[id]);
  

  const retrieveTodos = () => {
    retrieveTodoApi(username, id)
    .then(response => {
      setDescription(response.data.description);
      setTargetDate(response.data.targetDate);
    })
    .catch(response => console.log(response));
  }

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <div className="container">
      <h1>Enter todo details</h1>
      <div>
        <Formik initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={ onSubmit }
        >
        {
          (props) => (
            <Form>
              <fieldset className="form-group">
                <label htmlFor="">Description</label>
                <Field type="text" className="form-group" name="description" />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="">Target Date</label>
                <Field type="date" className="form-group" name="targetDate" />
              </fieldset>
              <div>
                <button className="btn btn-success" type="submit">Save</button>
              </div>
            </Form>
          )
        }
        </Formik>
      </div>
    </div>
  )
}
