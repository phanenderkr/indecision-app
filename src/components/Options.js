import React from 'react';
import Option from './Option';

//Options React component
const Options = (props) => {
    return (
        <div>
            {props.options.length===0 && <p>Please add an option</p>}
            <button
                onClick={props.handleDeleteOptions}
                className={"button button--link"}
            >
                Remove All
            </button>
            {
                props.options.map((option)=>
                    (
                        <Option
                            key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )
                )
            }
            {/*js code for map*/}
        </div>
    );
};

export default Options;