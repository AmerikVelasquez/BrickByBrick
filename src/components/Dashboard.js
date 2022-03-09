import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Button, Card} from 'react-bootstrap';

function Dashboard() {
  const { currentUser , logout} = useAuth();
  const {user, setUser} = useState();
  const navigate = useNavigate();
  // const {completedQuiz, setQuiz} = useState();

  const confirmLogout = () => {
    logout();
    navigate("/");
  }

  // const startQuiz = () => {
  //   if(completeQuiz){
  //     <h1>"You've already done the quiz" </h1>
  //   }else {
  //     setQuiz(true)
  //   }
  // }

  return (
  <>
  <Card>
    <Card.Body>
    <h1>Email: </h1> {currentUser.email}
    </Card.Body>
  </Card>
  <Button onClick = {confirmLogout}>Log out</Button>
  {/* <Button onClick = {startQuiz}> Begin with quiz</Button> */}
  </>
    )

}

export default Dashboard;
