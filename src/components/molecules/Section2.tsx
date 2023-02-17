import React from 'react'
import Image from 'next/image'
import Image1 from '@/components/assets/image/Container.jpg'

const section2 = () => {
  return (
    <div className=' flex justify-center gap-6'>
        <div>
            <Image src={Image1} alt={"gambarnenek"} />
        </div>
        <div className=' items-center'>
            <div className='mb-10'>
            <h1>Lorem Ipsum Title</h1>
            <p>Web design partially overlaps web engineering in the broader scope of web development</p>
            </div>
            <div>
            <h1>Lorem Ipsum Title</h1>
            <p>Web design partially overlaps web engineering in the broader scope of web development</p>
            </div>
        </div>
    </div>
  )
}

export default section2