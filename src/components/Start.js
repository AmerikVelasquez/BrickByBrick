import React, {useEffect} from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Start = () => {
  const { currentUser } = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser) {
      navigate("/dashboard")
    }
  })

  return (
    <React.Fragment>
      <h1>Start</h1>
    <Button  onClick={() => navigate("/signup")} >Sign Up</Button>
    <Button  onClick={() => navigate("/login")}>Login</Button>
    </React.Fragment>
  )
}

export default Start