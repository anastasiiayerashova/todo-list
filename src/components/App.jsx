import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList/TodoList'
import { useId } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// const initialValues = {
//     username: '',
//   email: '',
//   message: '',
//     level: 'good',
//   }

// const FeedbackForm = () => {
//   const handleSubmit = (values, actions) => {
//     console.log(values)
//     actions.resetForm()
//   }
//   const nameId = useId();
//   const emailId = useId();
//   const msgId = useId();
//   const selId = useId();
//   console.log(initialValues)

// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
//   email: Yup.string().email("Must be a valid email!").required("Required"),
//   message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
//   level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
// });

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
//       <Form>
//         <label htmlFor={nameId}>Username</label>
//         <Field type='text' name='username' id={nameId}></Field>
//         <ErrorMessage name='username' component='span'></ErrorMessage>
//         <label htmlFor={emailId}>Email</label>
//         <Field type='email' name='email' id={emailId}></Field>
//          <ErrorMessage name='email' component='span'></ErrorMessage>
//         <button type='submit'>Submit</button>
//         <Field as='textarea' name='message' id={msgId} rows='5'></Field>
//         <ErrorMessage name='message' component='span'></ErrorMessage>
//         <label htmlFor={selId}>Select</label>
//         <Field as='select' id={selId} name='level'>
//           <option value="good">Option 1</option>
// 	<option value="neutral">Option 2</option>
// 	<option value="bad">Option 3</option>
//         </Field>
//         <ErrorMessage name='level' component='span'></ErrorMessage>
//       </Form>
//       </Formik>
//   )
// }

const LoginForm = ({onLogin}) => {
 
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const { login, password } = form.elements;
    onLogin({
      login: login.value,
      password: password.value,
    })
    form.reset()
  }
  const loginId = useId();
  const passwordId = useId();
  
  
  return (
    <form onSubmit={handleSubmit}>
<label htmlFor={loginId}> </label>
      <input type='text' name='login' id={loginId}></input>
      <label htmlFor={passwordId}> </label>
      <input type='password' name='password' id={passwordId}></input>
      <button type='submit'>Login</button>
  </form>
)
}

const SearchBar = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <input type='text' value={value} onChange={e => setValue(e.target.value)}></input>
      <p>{value}</p>
    </div>
  )
}

const SelectBar = ({value, onSelect}) => {
  const selectId = useId();
  
  return (
    <div> 
      <label htmlFor={selectId}>Choose language</label>
      <select id={selectId} value={value} onChange={e => onSelect(e.target.value)}>
      <option value="ua">English</option>
      <option value="en">Ukrainian</option>
      <option value="pl">Polish</option>
      </select>
      </div>
  )
}

export default function App() {
  
//   const [lang, setLang] = useState("ua");
//   const handleLogin = (userData) => {
//     console.log(userData)
//     window.localStorage.setItem('user', JSON.stringify(userData));
//   }
//   const [size, setSize] = useState('sm');
//   const handleChange = (e) => {
//     setSize(e.target.value)
  
//   }
//   console.log(size)

//   const [hasAccepted, setHasAccepted] = useState(false);
//   const handleAccepted = (e) => {
//     setHasAccepted(e.target.checked)
//   }

//   const [values, setValues] = useState({
//     login: '',
//     password: '',
//   })
//   const handleChangeInputs = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     })
//   }
//   console.log(values)

//   const submitForm = (e) => {
//     e.preventDefault()
//     console.log(values)
//     setValues({
//       login: '',
//       password: '',
//     })
// }

  
  
  return (
    <div className='mainDiv'>
      {/* <FeedbackForm /> */}
      <TodoList />
       {/* <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <p>Selected language: {lang}</p>
      <SelectBar value={lang} onSelect={setLang} />
      <div>  
        <h1>Select coffee size: {size}</h1>
      <label>
        <input type='radio' name='coffeeSize' value='sm' onChange={handleChange} checked={size === "sm"}></input> Small
      </label>
      <label>
        <input type='radio' name='coffeeSize' value='md' onChange={handleChange} checked={size === "md"}></input> Medium
      </label>
      <label>
        <input type='radio' name='coffeeSize' value='lg' onChange={handleChange} checked={size==="lg"}></input> Large
        </label>
      </div>
      <div>
        <label>
          <input type='checkbox' onChange={handleAccepted}></input>I accept terms and conditions
        </label>
        <button type='button' disabled={!hasAccepted}>Click</button>
      </div>
      <div> 
        <form onSubmit={submitForm}>   
        <input type="text" name='login' value={values.login} onChange={handleChangeInputs}/>
        <input type="text" name='password' value={values.password} onChange={handleChangeInputs} />
          <button type='submit'>Login</button>
          </form>
      </div>  */}
   </div>
 )
}


