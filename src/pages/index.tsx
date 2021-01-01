import React from 'react';
import Hero from "../components/Hero";


export function Home() {
    let data 
    return (
        <div className="container flex items-center mx-auto justify-center p-2">
            <Hero data={data}/>
        </div>
    )
}


  
export default Home