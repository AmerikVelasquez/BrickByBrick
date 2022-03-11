import React ,{useState} from 'react';
import {Form, Button, Dropdown, DropdownButton} from "react-bootstrap";

const Quiz = (props) => {
  const setFormVisible = props.quizControl;

  const quizFormSubmit = (event) => {
    event.preventDefault();
    setFormVisible(false);
  }

  return( 
    //look to see how toggle affects along with if others work with dropdown tag surrounding
   <>
   <Form>
     <Form.Group>
     <Form.Label>Question 1. How long is your attention span for a specific project?(approx. hrs)</Form.Label>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">3</Dropdown.Item>
          <Dropdown.Item href="#/action-3">5</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     </Form.Group>
     <br />
     <Form.Group>
     <Form.Label>Question 2. What is your preferred theme?</Form.Label>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Answer 2
          </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Star Wars</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Architecture</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Vehicles</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Harry Potter</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Heroes and Villians</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     </Form.Group>
     <Form.Group>
     <Form.Label>Question 3. Are you comfortable doing the project in parts?</Form.Label>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Answer 3
          </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
          <Dropdown.Item href="#/action-2">No</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
     </Form.Group>
     <Form.Group>
     <Form.Label>Question 4. Adult enjoyment or Children enjoyment? </Form.Label>
      <DropdownButton  id="dropdown-basic-button" title="Answer 4">
          <Dropdown.Item href="#/action-1">Adult</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Children</Dropdown.Item>
      </DropdownButton>
     </Form.Group>
     <Button onClick = {quizFormSubmit}>Finish Quiz</Button>
   </Form>
   </>
  )
}

export default Quiz