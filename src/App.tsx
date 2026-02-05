import React from "react";
import "./App.css";
import logoImage from "./Images/logo192.png";
import {Button, Container, Row, Col} from 'react-bootstrap';

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Task 3</h1>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.

                Owen Marko
                Hello World
            </p>
            <img src={logoImage} alt="React logo"/>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <Button onClick={() => {console.log("Hello World!")}}>Log Hello World</Button>
            <Container>
                <Row>
                    <Col>
                        <div className="colored" style={{backgroundColor: "red"}}>
                        </div>
                    </Col>
                    <Col>
                        <div className="colored">
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
