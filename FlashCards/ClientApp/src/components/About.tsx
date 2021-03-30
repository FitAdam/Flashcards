import React, { useState } from 'react'
import { connect } from 'react-redux';
import ReactCardFlip from 'react-card-flip';
import './About.css'
import Wood from '../resources/wood.jpg';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
} from 'reactstrap';

const About = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <div >

            <ReactCardFlip isFlipped={isFlipped}>
                <Card className="AboutPage">
                    <CardBody>
                        <CardTitle tag="h5"><h1>About us</h1></CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">This project was created by Team named "Wood Divison".</CardSubtitle>
                        <CardText>flashcard example: “How many seconds are there in a year?” You would see “Twelve. January 2nd, February 2nd, March 2nd, etc.” on the back side.</CardText>
                        <Button className="btn btn-secondary" onClick={handleClick} >Press to learn more</Button>
                    </CardBody>

                </Card>

                <Card className="AboutPage">

                    <CardBody >
                        <CardTitle tag="h5"><h1>Wood Division's members:</h1></CardTitle>

                        <CardText> <p className="lead">
                            <ul>
                                <li>Adam Project Supervisor</li>
                                <li>Eddie Backend Manager</li>
                                <li>FitAdam Frontend Manager</li>
                                <li>Arnas Backend Developer</li>
                                <li>Stefano Helper</li>
                            </ul>
                        </p></CardText>
                        <Button className="btn btn-secondary" onClick={handleClick} >Turn back</Button>

                    </CardBody>

                </Card>

            </ReactCardFlip>
            <img src={Wood} alt="..." />


        </div>
    );
}

export default connect()(About);
