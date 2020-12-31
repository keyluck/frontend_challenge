import React, { Component } from 'react';

import GetStarted from './GetStarted'
import GetInfo from './GetInfo'
import DisplayStarmap from './DisplayStarmap'



export class Hero extends Component {

    //State for form control and star map variables
    state = {
        step: 1,
        date: "",
        city: "",
        state: "",
        msg: ""
    }

    // Next Step
    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step+1
        })
    }

    //Previous Step
    prevStep = () => {
        const { step } = this.state;
        this.setState ({
            step: step-1
        });
    }

    //Handle input form for customizing star map
    handleChange = input => e => {
        this.setState ({[input]: e.target.value});
    
    }


    render() {

        const { step } = this.state
        const { date, city, state, msg} = this.state
        const values = {date, city, state, msg}
        
        // Switch to step through each component
        switch (step) {
            case 1: 
                return <GetStarted 
                            nextStep={this.nextStep} 
                            handleChange={this.handleChange}
                            values={values} />
            case 2:
                return <GetInfo
                            prevStep={this.prevStep} 
                            nextStep={this.nextStep} 
                            handleChange={this.handleChange}
                            values={values} />
            case 3:
                return <DisplayStarmap 
                            prevStep={this.prevStep} 
                            values={values} />
            default:
                throw new Error('Unknown step');
        }
        


    }

}

export default Hero
