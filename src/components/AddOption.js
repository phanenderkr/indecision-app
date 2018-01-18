//AddOption React component
import React from "react";

export default class extends React.Component{
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.optionInput.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=>({ error: error }));
        if(!error){
            e.target.elements.optionInput.value = "";
        }
    };
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type={"text"} name={"optionInput"}/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}