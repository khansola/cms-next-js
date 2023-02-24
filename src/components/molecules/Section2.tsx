import React from 'react'
import Image from 'next/image'
import Image1 from '@/components/assets/image/Container.jpg'

const section2 = () => {
  return (
    <div className=' flex justify-center gap-6 px-[7%]'>
      <div className='mt-20'>
        <Image 
        src={Image1} 
        alt={"gambarnenek"}
        width={675.68}
        height={919}
        />
      </div>
      <div className=' flex flex-col justify-center gap-y-40 mt-16 px-[7%]'>
        <div>
          <h1>Lorem Ipsum Title</h1>
          <p>Web design partially overlaps web engineering in the broader scope of web development</p>
        </div>
        <div>
          <h1>Lorem Ipsum Title</h1>
          <p>Web design partially overlaps web engineering in the broader scope of web development</p>
        </div>
      </div>
    </div>
  );
};

export default section2