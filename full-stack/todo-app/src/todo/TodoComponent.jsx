import { useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

  const validate = (values) => {
    let errors = {};

    if(values.description.length < 5){
      errors.description = 'Enter atleats 5 characters'
    }

    if(values.targetDate == null){
      errors.targetDate = 'Enter atleats 5 characters'
    }

    return errors;
  }

  return (
    <div className="container">
      <h1>Enter todo details</h1>
      <div>
        <Formik initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={ onSubmit }
          validate={ validate }
          validateOnChange={false}
          validateOnBlur={false}
        >
        {
          (props) => (
            <Form>

              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              />

              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-warning"
              />

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
