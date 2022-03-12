import React ,{useState} from 'react';
import {Form, Button, Dropdown, DropdownButton} from "react-bootstrap";
import Brick from './Navbar';

const Quiz = (props) => {
  const setFormVisible = props.quizControl;

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
     <DropdownButton variant="danger" id="dropdown-basic-button" title="Answer 1">
          <Dropdown.Item href="#/action-1">1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">3</Dropdown.Item>
          <Dropdown.Item href="#/action-3">5</Dropdown.Item>
          </DropdownButton>
     </Form.Group>
     <br />
     <Form.Group>
     <Form.Label>Question 2. What is your preferred theme?</Form.Label>
     <DropdownButton variant="danger" id="dropdown-basic-button" title="Answer 2">
          <Dropdown.Item href="#/action-1">Star Wars</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Architecture</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Vehicles</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Harry Potter</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Heroes and Villians</Dropdown.Item>
          </DropdownButton>
     </Form.Group>
     <br />
     <Form.Group>
     <Form.Label>Question 3. Are you comfortable doing the project in parts?</Form.Label>
     <DropdownButton variant="danger" id="dropdown-basic-button" title="Answer 3">
          <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
          <Dropdown.Item href="#/action-2">No</Dropdown.Item>
          </DropdownButton>
     </Form.Group>
     <br />
     <Form.Group>
     <Form.Label>Question 4. Adult enjoyment or Children enjoyment? </Form.Label>
      <DropdownButton variant="danger" id="dropdown-basic-button" title="Answer 4">
          <Dropdown.Item href="#/action-1">Adult</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Children</Dropdown.Item>
      </DropdownButton>
     </Form.Group>
     <br />
     <Button onClick = {quizFormSubmit} variant = "dark">Finish Quiz</Button>
   </Form>
   </>
  )
}

export default Quiz