import React from 'react';

//Header react component
const Header= (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle?<h2>{props.subtitle}</h2>:``}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecisive"
};

export {Header as default};