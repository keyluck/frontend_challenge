import React, { Component } from 'react'

export class GetInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();  
    };

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    
    render() {
        const { values, handleChange } = this.props;
        

        return (
            <div>
                <div className="container shadow-2xl bg-gray-100 border-2 
                                p-2 text-sm sm:text-base
                                md:max-w-screen-sm md:text-lg
                                lg:max-w-screen-md lg:text-2xl ">

                    <div className="mx-auto max-w-max pb-5 font-bold 
                                    text-blue-900 text-2xl md:text-4xl 
                                    lg:text-4xl">
                                    Customize Star Map
                    </div>
                    
                        <div className="p-2 pb-5 lg:text-lg">
                            <label className="mr-8">Date: </label>
                            <input  required className="text-right bg-white float-right"
                                    type="date" 
                                    onChange={handleChange('date')}
                                    defaultValue={values.date} />
                        </div>

                        <div className="p-2 pb-5 align-right lg:text-lg">
                            <label className="mr-8">Location: </label>
                            <input  required className="p-2 w-20 text-right lg:w-32" 
                                    type="text" 
                                    placeholder="City"
                                    onChange={handleChange('city')} 
                                    defaultValue={values.city} />
                            <input  required className="p-2 ml-4 w-20 text-right lg:w-32" 
                                    type="text" 
                                    placeholder="State" 
                                    onChange={handleChange('state')}
                                    defaultValue={values.state} />
                        </div>

                        <div className="p-2 pb-5 mb-20 align-right lg:text-lg">
                            <label className="p-2 mr-2 float-left">Message: </label>
                            <textarea  required 
                                    className="p-2 float-right text-right w-8/12 pb-2 mb-4" 
                                    placeholder="Enter message" 
                                    onChange={handleChange('msg')} />
                        </div>


                        <div className="mx-auto max-w-max">
                            <button className=  "border-2 ml-4 p-2 rounded-lg
                                                text-white bg-yellow-400 
                                                hover:bg-yellow-200 text-blue-900"
                                    onClick={this.previous}>
                                    Back
                            </button>
                            <button className=  "border-2 ml-4 p-2 rounded-lg
                                                float-right text-white bg-yellow-400
                                                hover:bg-yellow-200 text-blue-900"
                                    onClick={   (values.date!=="" && 
                                                values.city!=="" && 
                                                values.state!=="") ? 
                                                this.continue:""}>
                                    Generate Star Map
                            </button>
                        </div>
                        
                        
                   
                </div>
            </div>
        )

    }
}

export default GetInfo