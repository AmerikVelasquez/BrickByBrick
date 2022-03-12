import { Form, Button, Card} from 'react-bootstrap';
import React, {useRef, useState, useEffect} from 'react';
import { useAuth } from '../AuthContext';
import {addDoc, collection} from 'firebase/firestore';
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const {signup, currentUser} = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser) {
      navigate("/dashboard")
    }
  })

  const confirmSignUp = async() => {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }
    
    try {
      setError('')
      setLoading(true)
      const res = await signup(emailRef.current.value, passwordRef.current.value)
      const user = res.user
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
      })
      navigate('/dashboard')
    } catch(error) {
      setError(error.message);
    }
    setLoading(false)
  }


  return (
    <>
      <Card>
        <Card.Body>
          <h2>Sign Up</h2>
          <Form>
            <Form.Group id= "email">
              <Form.Label>email</Form.Label>
              <Form.Control type = "email" ref= {emailRef}></Form.Control>
            </Form.Group>
            <Form.Group id = "password">
              <Form.Label>password</Form.Label>
              <Form.Control type = "password" ref= {passwordRef}></Form.Control>
            </Form.Group>
            <Form.Group id ="password-confirm">
              <Form.Label>password confirm</Form.Label>
              <Form.Control type = "password-confirm" ref= {confirmPasswordRef}></Form.Control>
            </Form.Group>
            <Button variant="danger" onClick = {confirmSignUp}>Signup</Button>
            <Button variant="danger" onClick={() => navigate("/login")}> Already Have An Account?</Button>
          </Form>
        </Card.Body>
     </Card>
    </>
  )
}

export default Signup