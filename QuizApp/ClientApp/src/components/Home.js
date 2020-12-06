import React, { Component } from 'react';
import { ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Tommy's Fun Quiz</h1>
                <p>Add your own Questions and Answers for the quiz then challenge someone to complete it.</p>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Link to="/counter"><Button type="button" variant="primary">Add Questions</Button></Link>
                    </ButtonGroup>
                    <ButtonGroup aria-label="Second group">
                        <Link to="/fetch-data"><Button type="button" variant="success">Take Quiz</Button></Link>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}
