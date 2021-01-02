import React from 'react'
import Image from 'next/image'



interface Props {
    onClick: () => void;
}



export const DisplayStarmap: React.FC<Props> = ({ onClick }) => {

    return (
        <div className="shadow-2xl">
            <Image  src="/images/hero.png" alt="Star Map" 
                    height={550} width={400} />
            <div className="mx-auto max-w-max">
                <button className=  "border-2 ml-4 p-1 rounded-lg 
                                    text-2xl bg-yellow-400 
                                    hover:bg-yellow-200 text-blue-900"
                        onClick={onClick}>
                    Back
                </button>
            </div>
        </div>
        
    )
}




export default DisplayStarmap

