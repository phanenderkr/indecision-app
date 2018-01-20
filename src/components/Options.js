import React from 'react';
import Option from './Option';

//Options React component
const Options = (props) => {
    return (
        <div>
            <div className={"widget--header"}>
                <h3 className={"widget-header--title"}>Your Options</h3>
                <button
                    onClick={props.handleDeleteOptions}
                    className={"button button--link"}
                >
                    Remove All
                </button>

            </div>
            {props.options.length===0 && <p className={"widget--message"}>Please add an option to get started!</p>}
            {
                props.options.map((option, index)=>
                    (
                        <Option
                            key={option}
                            optionText={option}
                            count={index+1}
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