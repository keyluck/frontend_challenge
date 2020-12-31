import React, {Component} from 'react'



export class GetStarted extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    
    };

    render () {
        return (
            <div>
                <div className="container shadow-2xl bg-gray-100 border-2 p-2 w-80
                                text-sm sm:text-base
                                md:w-96 md:text-lg
                                lg:w-96 lg:text-2xl ">
                
            
            <div className="mx-auto max-w-max pb-5 font-bold 
                            text-blue-900 text-2xl md:text-4xl 
                            lg:text-4xl">
                    Your Custom Star Map
            </div>
            <section className="text-center px-4 pb-5 text-lg">
                    Create a 18"x24" star map that shows the stars exactly
                    as they were on a specific date and location with a 
                    personalized message!
            </section>
            <div className="mx-auto max-w-max">
            <button className=  "border-2 ml-4 p-2 rounded-lg text-white 
                                bg-yellow-400 hover:bg-yellow-200 text-blue-900"
                    onClick={this.continue}>
                    Get Started
            </button>
            </div>
            </div>

            
        </div>
    )
    
}}

export default GetStarted
