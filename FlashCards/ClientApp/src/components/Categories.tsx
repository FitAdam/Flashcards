import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Categories.css';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';

import FlashCard from './FlashCard';

const Categories = () => {
    const [isCardDisplayed, setIsCardDisplayed] = useState(false);
    const handleClickToCardView = () => {
        setIsCardDisplayed(!isCardDisplayed);

    };
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // 
    useEffect(() => {
        fetch("https://localhost:5001/Category/All")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // TODO 
                // Pass data.id into the child component
                // Think about introducing a colors
                // :)
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div>

                {isCardDisplayed === false && (
                    <div className='box'>

                        <CardColumns>
                            {items.map(item => (
                                <Card>

                                    <CardBody>
                                        <CardTitle tag="h5">{item.type}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">id={item.id}</CardSubtitle>
                                        <CardText>Here we will see some description..</CardText>
                                        <Button onClick={handleClickToCardView} >Study now!</Button>
                                    </CardBody>

                                </Card>
                            ))}
                        </CardColumns>
                    </div>)}

                {isCardDisplayed === true && <FlashCard />}
            </div>


        );
    }
};

export default connect()(Categories);