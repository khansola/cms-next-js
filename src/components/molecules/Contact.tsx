import React from 'react'
import Image from 'next/image'
import Image1 from '@/components/assets/image/ibu2.png'
import InputCustom from '../atoms/InputCustom';

const Contact = () => {
  return (
    <div className=' w-full flex justify-between gap-14'>
      <div>
        <Image
          src={Image1}
          alt={"gambarnenek"}
          width={675.68}
          height={919}
        />
      </div>
      <div className='w-[65%]'>
        <h1 className='w-[506px] h-[50px] text-[40px] text-[#A03C78] mt-16'>
          Get in touch today</h1>
        <p className='text-[#9795B5] mt-2'>
          Keep in touch with us!</p>
        <ul className='flex gap-4'>
          <li>
            <div className=' w-[266px] h-[72px]'>
              <InputCustom title="Name" placeholder='John Carter' type='text' />
            </div>
          </li>
          <li>
            <div className=' w-[266px] h-[72px]'>
              <InputCustom title="Email" placeholder='example@email.com' type='email' />
            </div>
          </li>
        </ul>
        <div>
        <ul className='flex gap-4'>
          <li>
            <div className=' w-[266px] h-[72px]'>
              <InputCustom title="Name" placeholder='John Carter' type='text' />
            </div>
          </li>
          <li>
            <div className=' w-[266px] h-[72px]'>
              <InputCustom title="Email" placeholder='example@email.com' type='email' />
            </div>
          </li>
        </ul>
        </div>
        <div>
        <ul className='flex gap-4'>
          <li>
            <div className=' w-[266px] h-[72px]'>
              <InputCustom title="Name" placeholder='John Carter' type='text' />
            </div>
          </li>

        </ul>
        </div>
      </div>
    </div>
  );
};


export default Contact