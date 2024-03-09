import Image from 'next/image'
import React from 'react'
import HeaderBg from "../../public/header-bg.svg"
const Headers = () => {
  return (
    <div className='header'>
        <div className=' head-flex'>
            <div className='txt '>
            <h1>More than just <br />shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <button>Get Started</button>
            </div>
            <div className='header-bg'>
                 <Image className='img' src={HeaderBg} alt='headers-bg'/>
            </div>
        
        </div>
    </div>
  )
}

export default Headers