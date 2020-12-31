import React, { Component } from 'react'

import Image from 'next/image'

export class DisplayStarmap extends Component {


    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        
        // Values from user input form can be accessed with props
        // const { values } = this.props


        return (
            <div className="shadow-2xl">
                <Image  src="/images/hero.png" alt="Star Map" 
                        height={550} width={400} />
                <div className="mx-auto max-w-max">
                    <button className=  "border-2 ml-4 p-1 rounded-lg 
                                        text-2xl bg-yellow-400 
                                        hover:bg-yellow-200 text-blue-900"
                            onClick={this.previous}>
                        Back
                    </button>
                </div>
            </div>
           
        )
    }
}

export default DisplayStarmap

