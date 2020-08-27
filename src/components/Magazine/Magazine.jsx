import React from 'react';

import { Row, Col, Form, Button } from 'react-bootstrap';

export const Magazine = ({user}) => {
  
    // console.log(user);
    //  const a = user.fio;
    // console.log(a);
    return (
        <div className="widget__wrapper widget__profile--update has-shadow">
            <div className="widget__body">
                <Form className="form-horizontal">
                    <Form.Group className="mb-5" controlId="Student">
                        <Form.Label className="magazine_filter">Ученик</Form.Label>
                        <Col lg={3}>
                            <Form.Control type="text" placeholder="Астахов В.Ю." />
                        </Col>
                    </Form.Group>
                </Form> 
            </div>
        </div>
    )   
}
