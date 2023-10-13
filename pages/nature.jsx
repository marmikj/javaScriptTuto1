import Image from 'next/image'
import React from 'react'
import img from '../public/4.jpg'
const nature = () => {
  return (
    
    <div>
        <Image src={img} placeholder='blur' alt='no image' width='500' height='700'/>  
        {
            ['1','2','3','4','5'].map(path=>{
                return(
                    <div key={path}>
                        <Image src={`/${path}.jpg`} alt='no img' width='500' height='700'/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default nature