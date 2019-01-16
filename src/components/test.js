import React from 'react';
import logger from '../hoc/logger';

const Test = props => {
    console.log('Test Props:', props);

    props.log('I\'m the Lizard Bwoi From the Log!');

    return (
        <div>
            <h1 className="center">Lizard Bwoi!</h1>
        </div>
    )
}

export default logger(Test, 'Test Says:');