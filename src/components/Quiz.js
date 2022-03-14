import React ,{useState} from 'react';
import {Form, Button, Dropdown, DropdownButton} from "react-bootstrap";
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Brick from './Navbar';
// import {getLego} from './Fetch';

const Quiz = (props) => {
  const setFormVisible = props.quizControl;
  const [value, setValue]= useState('');

  const handleSelect=(e)=>{
    console.log(value);
    setValue(event.target.value);
  }

  const quizFormSubmit = (event) => {
    event.preventDefault();
    setFormVisible(false);
  }

  

  return( 
   <>
   <Brick />
   <Form >
     <Form.Group>
     <Form.Label>Question 1. How long is your attention span for a specific project?(approx. hrs)</Form.Label>
     <DropdownButton variant="danger" id="dropdown-basic-button" title="Answer 1" onSelect={handleSelect}>
          <Dropdown.Item eventKey="1" >1</Dropdown.Item>
          <Dropdown.Item eventKey="2">3</Dropdown.Item>
          <Dropdown.Item eventKey="3">5</Dropdown.Item>
          <DropdownItem >7</DropdownItem>
          </DropdownButton>
     </Form.Group>
     <br />
     <Form.Group>
     <Form.Label>Question 2. What is your preferred theme?</Form.Label>
     <DropdownButton variant="danger" id="dropdown-basic-button" title="Answer 2" onSelect={handleSelect}>
          <Dropdown.Item >Star Wars</Dropdown.Item>
          <Dropdown.Item >Architecture</Dropdown.Item>
          <Dropdown.Item >Vehicles</Dropdown.Item>
          <Dropdown.Item >Harry Potter</Dropdown.Item>
          <Dropdown.Item >Heroes and Villians</Dropdown.Item>
          </DropdownButton>
     </Form.Group>
     <br />
     <Form.Group>
     <Form.Label>Question 3. Are you comfortable doing the project in parts?</Form.Label>
     <DropdownButton variant="danger" id="dropdown-basic-button" title="Answer 3" onSelect={handleSelect}>
          <Dropdown.Item>Yes</Dropdown.Item>
          <Dropdown.Item>No</Dropdown.Item>
          </DropdownButton>
     </Form.Group>
     <br />
     <Form.Group>
     <Form.Label>Question 4. Adult enjoyment or Children enjoyment? </Form.Label>
      <DropdownButton variant="danger" id="dropdown-basic-button" title="Answer 4" onSelect={handleSelect}>
          <Dropdown.Item >Adult</Dropdown.Item>
          <Dropdown.Item >Children</Dropdown.Item>
      </DropdownButton>
     </Form.Group>
     <br />
     <Button onClick = {quizFormSubmit} variant = "dark">Finish Quiz</Button>
   </Form>
   </>
  )
}

export default Quiz