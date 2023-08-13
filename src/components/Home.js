import React from 'react';
import { Link } from "react-router-dom"; // Import the Link component
import NavBarOwn from './NavBarOwn';
import ListGroup from './ListGroup';

function HomeInit() {
    return (

        <div>
            <NavBarOwn />
            <ListGroup />
            <h1>
                Hello World
            </h1>
        </div>

    );
}

export default HomeInit;