import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Button, Card} from 'react-bootstrap';
import Quiz from './Quiz';
import Brick from './Navbar';

const Dashboard = () => {
  const { currentUser , logout} = useAuth();
  const navigate = useNavigate();
  const [quizForm, setQuizForm] = useState(false);

  const confirmLogout = () => {
    logout();
    navigate("/");
  }

  const startQuiz = () => {
    setQuizForm(true);
  }
  
  if(quizForm=== true){
    return (
      <Quiz 
      quizControl = {setQuizForm} />
    )
  }else {
    return (
      <>
    <Brick />
    
  <Card>
    <Card.Body>
    <h4>Email: </h4> {currentUser.email}
    </Card.Body>
  </Card>
  <Button variant="danger" onClick = {confirmLogout}>Log out</Button>
  <Button variant="danger" onClick = {startQuiz}> Begin with quiz</Button>
  </>
    )
  }
}
  
export default Dashboard;
