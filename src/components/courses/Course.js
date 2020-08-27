import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import './Course.css';

const Course = (props) => {

    const { image, name, price, details } = props.newData;
    
    return (       
        
        <div className="col-sm-6 d-flex justify-content-center courses">
                    <Card style={{ width: '80%' }}>
                <Card.Img className="courseImg"variant="top" src={image} />
                <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    <Card.Text>
                            {details}
                    </Card.Text>
                    <br/>
                <h4> <strong>Price: ${price}</strong> </h4>
                    <br/>
                    <Button onClick={()=> props.handleAddCourse(props.newData.price)} variant="primary"><FontAwesomeIcon icon={faCartPlus}/> Enroll Now</Button>
                </Card.Body>
                </Card>
   
                </div>
    );
};

export default Course;