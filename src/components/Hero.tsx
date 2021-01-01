import React, { useState} from 'react';


import GetStarted from './GetStarted'
import GetInfo from './GetInfo'
import DisplayStarmap from './DisplayStarmap'


interface HeroProps {
    data: JSON
}

const defaultData = {
    date: "",
    city: "",
    state: "",
    msg: ""
}

const currentStep = 1

export const Hero: React.FC<HeroProps> = ({ data }) => {
    //State for form control and star map variables
    const [ formData, setData ] = useState(defaultData)
    const [ steps, setStep ] = useState(currentStep);


    // Next Step
    const nextStep = () => {
        setStep(steps => currentStep+1)
    }

    //Previous Step
    const prevStep = () => {
        setStep(steps=>steps - 1)
    }

    
    //Handle Form Submit
    const handleFormSubmit = (input: string) => (
                            e: { target: HTMLInputElement | 
                                    HTMLTextAreaElement }) => {
       setData({...formData, [input]: e.target.value})
        
    }

    const handleOnClick = () => {

        if( formData.date !== "" && 
            formData.city!=="" && 
            formData.state!=="") {
                setStep(3)
        }
        else {
            return ''
        }
        
    }
    

    const props = { formData, handleFormSubmit, handleOnClick, nextStep, prevStep}
    // Switch to step through each component
    switch (steps) {
        case 1: 
            return <GetStarted onClick={nextStep} />
        case 2:
            return <GetInfo formSubmit={handleFormSubmit} 
                            backButton={prevStep}
                            formOnClick={handleOnClick} />
        case 3:
            return <DisplayStarmap onClick={prevStep} starmap={data} />
        default:
            throw new Error('Unknown step');
    }
        


}



export default Hero