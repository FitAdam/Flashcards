import React, { useState } from 'react';
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

    return (
        <div>
            {isCardDisplayed === false && (
                <div className='box'>

                    <CardColumns>
                        <Card>

                            <CardBody>
                                <CardTitle tag="h5">Python Programming language</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Get Started</CardSubtitle>
                                <CardText>Python is a programming language that lets you work quickly and integrate systems more effectively.</CardText>
                                <Button onClick={handleClickToCardView} >Study now!</Button>
                            </CardBody>
                        </Card>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle tag="h5">Programming principles</CardTitle>
                            <CardText>Basic Programming Principles Every Programmer Must Know.</CardText>
                            <Button onClick={handleClickToCardView} >Study now!</Button>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Algorithms</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Get Started</CardSubtitle>
                                <CardText>If you want to become a software engineer, but don’t know where to start, let’s save you the suspense: it’s algorithms and data structures.</CardText>
                                <Button onClick={handleClickToCardView} >Study now!</Button>
                            </CardBody>
                        </Card>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle tag="h5">Networking</CardTitle>
                            <CardText>Computer networking refers to connected computing devices (such as laptops, desktops, servers, smartphones, and tablets) and an ever-expanding array of IoT devices (such as cameras, door locks, doorbells, refrigerators, audio/visual systems, thermostats, and various sensors) that communicate with one another.</CardText>
                            <Button onClick={handleClickToCardView}>Study now!</Button>
                        </Card>
                        <Card>

                            <CardBody>
                                <CardTitle tag="h5">JavaScript</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Get Started</CardSubtitle>
                                <CardText>Today, JavaScript is one of the most powerful languages on the planet because of its performance and omnipresence.</CardText>
                                <Button onClick={handleClickToCardView} >Study now!</Button>
                            </CardBody>
                        </Card>
                        <Card body inverse color="primary">
                            <CardTitle tag="h5">Special Interview's Questions</CardTitle>
                            <CardText>Destroy your inteview as she said. </CardText>
                            <Button color="secondary" onClick={handleClickToCardView}>Study now!</Button>
                        </Card>
                    </CardColumns>
                </div>)}

            {isCardDisplayed === true && <FlashCard />}
        </div>


    );
};

export default connect()(Categories);