import { Form, Button, Card} from 'react-bootstrap'
import React, {useRef, useState, useEffect} from 'react'
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login, currentUser} = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  
  
  const confirmLogin = async() => {
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
    } catch(error) {
      setError(error.message)
    }
    setLoading(false)
  }
  
  useEffect(() => {
    if(currentUser) {
      navigate("/dashboard")
    }
  })
  
  return (
    <>
      <Card>
        <Card.Body>
          <Form>
            <p>{error}</p>
            <Form.Group id= "email">
              <Form.Label>email</Form.Label>
              <Form.Control type = "email" ref= {emailRef}></Form.Control>
            </Form.Group>
            <Form.Group id = "password">
              <Form.Label>password</Form.Label>
              <Form.Control type = "password" ref= {passwordRef}></Form.Control>
            </Form.Group>
            <Button  onClick={confirmLogin}>Login</Button>
            <Button  onClick={() => navigate("/SignUp")}> Create Account</Button>
          </Form>
        </Card.Body>
     </Card>
    </>
  )
}

export default Login