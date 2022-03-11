import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Button, Card} from 'react-bootstrap';
import Quiz from './Quiz';

function Dashboard() {
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
  <h1>Brick By Brick</h1>
  <Card>
    <Card.Body>
    <h1>Email: </h1> {currentUser.email}
    </Card.Body>
  </Card>
  <Button onClick = {confirmLogout}>Log out</Button>
  <Button onClick = {startQuiz}> Begin with quiz</Button>
  </>
    )
  }
}
  
export default Dashboard;
