import React from 'react';

//Random selector react component //what should I do
const Action = (props)=> {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}
                className={"big-button"}
            >
                What Should I do?
            </button>
        </div>
    );
};

export default Action;