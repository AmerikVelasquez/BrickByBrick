import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Card} from 'react-bootstrap';
import Quiz from './Quiz';
import Brick from './Navbar';
// import Masonry from 'react-masonry-css';
import '../index.css';


const Dashboard = () => {
  const { currentUser , logout} = useAuth();
  const navigate = useNavigate();
  const [quizForm, setQuizForm] = useState(false);

  // const breakpointColumnsObj = {
  //   default: 4,
  //   1100: 3,
  //   700: 2,
  //   500: 1
  // };

  // <Masonry
  // breakpointCols={3}
  // className="my-masonry-grid"
  // columnClassName="my-masonry-grid_column">
  
  // </Masonry>

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
