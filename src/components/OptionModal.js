import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=> {
    return(
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.clearPick}
            contentLabel={"Selected Option"}//this will not show up in the browser
        >
            {/*content*/}
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.clearPick}>Okay</button>
        </Modal>
    )
};

export default OptionModal;