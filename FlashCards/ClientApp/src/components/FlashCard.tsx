import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import './FlashCard.css';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
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
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  function goToIndex(newIndex: number){
    if (animating) return;
    setActiveIndex(newIndex);
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

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.id}
        >
          <div className='box'>
            <ReactCardFlip isFlipped={isFlipped} >

              <Card >
                <CardBody>
                  <CardTitle tag="h5">{type} </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Question:</CardSubtitle>
                  <CardText>{item.front}</CardText>

                </CardBody>
                <Button className="btn btn-primary" onClick={handleClick} >Press to see answer</Button>
              </Card>

              <Card>

                <CardBody>
                  <CardTitle tag="h5">{type}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Answer</CardSubtitle>
                  <CardText>{item.back}</CardText>


                </CardBody>
                <Button className="btn btn-primary" onClick={handleClick}> Go back to question</Button>
              </Card>

            </ReactCardFlip>
          </div>

        </CarouselItem>
      );
    });

    return (
      <Carousel

        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false} 
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
}


export default connect()(FlashCard);