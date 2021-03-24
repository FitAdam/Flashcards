import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import './FlashCard.css';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
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
          <CardBody>
            <CardTitle tag="h5">Question</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">JavaScript</CardSubtitle>
            <CardText>Can you name two programming paradigms important for JavaScript app developers?</CardText>
            <Button className="btn btn-primary" onClick={handleClick} >Press to see answer</Button>
          </CardBody>
          <Button onClick={handleClick} >Go back to categories</Button>
        </Card>

        <Card>

          <CardBody>
            <CardTitle tag="h5">Answer</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">JavaScript</CardSubtitle>
            <CardText>JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.</CardText>
            <Button className="btn btn-primary" onClick={handleClick} >Go back to question</Button>

          </CardBody>

          <Button onClick={handleClick} >Go back to categories</Button>
        </Card>

      </ReactCardFlip>
    </div>


  );
}


export default connect()(FlashCard);