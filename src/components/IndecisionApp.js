//App parent
import React from "react";
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options'
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption: undefined
    };

    //Event handlers

    //for erasing all the options
    handleDeleteOptions= ()=>{
        this.setState(() => ({ options:[] }));
    };

    // to delete specific option
    handleDeleteOption= (optionToRemove)=>{
        this.setState((previousState)=>({
            options: previousState.options.filter((option)=>option!==optionToRemove)
        }));
    };

    //picking an option to do
    //To randomly pick one item from the array
    handlePick= ()=>{
        const index = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[index];
        this.setState(()=>({selectedOption:option}));
    };

    //Clear picked up option
    clearPick = () => {
      this.setState(()=>({
          selectedOption:undefined
      }))
    };

    //to add an item to options
    handleAddOption= (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)>=0){
            return `Enter new values`;
        }
        this.setState((previousState)=>({
            options: [...previousState.options,option]
        }));

    };

    //Life cycle methods

    //when first mounted
    componentDidMount(){
        try{
            const jsonString = localStorage.getItem("options");
            const options = JSON.parse(jsonString);
            if(options){
                this.setState(()=>({options}));
            }
            console.log("fecthing data");
        }catch (e){
            console.log(e);
        }
    }

    //when component updated
    componentDidUpdate(previousProps, previousState){//saves data
        if(previousState.options.length!==this.state.options.length){
            // console.log("Saving data");
            const key = "options";
            const jsonString = JSON.stringify(this.state.options);
            localStorage.setItem(key,jsonString);
        }
    }

    //when component is unmounted
    componentWillUnmount(){
        console.log("Component unmount")
    }


    render(){
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className={"container"}>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick = {this.handlePick}
                    />
                    <div className={"widget"}>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearPick = {this.clearPick}
                />
            </div>
        );
    }
}