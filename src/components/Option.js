import React from 'react';

//option react component
const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

export {Option as default}
