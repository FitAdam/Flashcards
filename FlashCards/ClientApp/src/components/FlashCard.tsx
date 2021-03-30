import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import './FlashCard.css';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';



const FlashCard = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    
  };

 

  useEffect(() => {
    fetch(`https://localhost:5001/Category/${props.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error..</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {


    return (

      <div className='box'>
        
        <ReactCardFlip isFlipped={isFlipped}>
        
        <Card>
          <CardBody>
            <CardTitle tag="h5">Question from {props.type} </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.id}</CardSubtitle>
            <CardText>TODO</CardText>
            <Button className="btn btn-primary" onClick={handleClick} >Press to see answer</Button>
          </CardBody>
          <Button onClick={handleClick} >Go back to categories</Button>
        </Card>
        
        <Card>

          <CardBody>
            <CardTitle tag="h5">Answer</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.type}</CardSubtitle>
            <CardText>TODO</CardText>
            <Button className="btn btn-primary" onClick={handleClick} >Go back to question</Button>

          </CardBody>

          <Button onClick={handleClick} >Go back to categories</Button>
        </Card>
       
        </ReactCardFlip>
         
      </div>


    );
  }
}


export default connect()(FlashCard);