import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import './FlashCard.css';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';

type Props = {
  id: string,
  type: string,
};

const FlashCard: React.FC<Props> = ({
  id,
  type,
}) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    console.log(items)
  };

  
  const nextQuestion = () => {

  }

 

  useEffect(() => {
    fetch(`https://localhost:5001/Category/${id}`)
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
        {items.slice(0,1).map(item => (
        <ReactCardFlip isFlipped={isFlipped} key={item.typeID}>
        
        <Card >
          <CardBody>
            <CardTitle tag="h5">Question from {type} </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{id}</CardSubtitle>
            <CardText>{item.front}</CardText>
            <Button className="btn btn-primary" onClick={handleClick} >Press to see answer</Button>
          </CardBody>
          <Button onClick={handleClick} >Go back to categories</Button>
        </Card>
         
        <Card>

          <CardBody>
            <CardTitle tag="h5">Answer</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{type}</CardSubtitle>
            <CardText>{item.back}</CardText>
            <Button className="btn btn-primary" onClick={handleClick}> Go back to question</Button>

          </CardBody>

          <Button onClick={handleClick} >Go back to categories</Button>
        </Card>
     
        </ReactCardFlip>
           ))}
      </div>


    );
  }
}


export default connect()(FlashCard);