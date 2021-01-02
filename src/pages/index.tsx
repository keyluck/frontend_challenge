import React from 'react';
import Hero from "../components/Hero";
import Link from 'next/link'

export function Home() {
    let data 
    return (
        <div className="container flex items-center mx-auto justify-center p-2">
            <Hero />
        </div>
    )
}


  
export default Home