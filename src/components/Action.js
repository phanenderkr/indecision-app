import React from 'react';

//Random selector react component //what should I do
const Action = (props)=> {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >
                What Should I do?
            </button>
        </div>
    );
};

export default Action;