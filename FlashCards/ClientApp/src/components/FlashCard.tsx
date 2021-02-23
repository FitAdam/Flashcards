import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import './FlashCard.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';

const FlashCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  
    return (

      <div className='box'>
       <ReactCardFlip isFlipped={isFlipped}>

          <Card>
        <CardImg top width="100%" src="" alt="" />
        <CardBody>
          <CardTitle tag="h5">Question</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">JavaScript</CardSubtitle>
          <CardText>Can you name two programming paradigms important for JavaScript app developers?</CardText>
          <Button onClick={handleClick} >Press to see answer</Button>
        </CardBody>
      </Card>
      
        <Card>
        <CardImg top width="" alt="" />
        <CardBody>
          <CardTitle tag="h5">Answer</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">JavaScript</CardSubtitle>
          <CardText>JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.</CardText>
          <Button onClick={handleClick} >Go back to question</Button>
        </CardBody>
      </Card>

      </ReactCardFlip>
      </div>
      
   
    );
  }


export default connect()(FlashCard);