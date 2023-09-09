import React from 'react';
import NavBarOwn from './NavBarOwn';
import ListGroup from './ListGroup';
import Content from './Content';

function HomeInit() {
    return (
        <>
            <div>
                <NavBarOwn />
            </div>
            <div>
                <Content />
            </div>
        </>
    );
}

export default HomeInit;