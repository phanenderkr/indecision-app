import React from 'react';

//option react component
const Option = (props) => {
    return(
        <div className={"option"}>
            <p className={"option__text"}>
                {props.count+". "}
                {props.optionText}
            </p>

            <button
                className={"button button--link"}
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
