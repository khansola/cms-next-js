import React from 'react'
import CardContents from '@/components/atoms/CardContents'
import Button from '../atoms/Button'


const ProgramList = () => {
  return (
    <div className=' flex flex-col items-center justify-center mt-10 gap-5  '>
      <div className=' text-center'>
        <h1>Program Unggulan SEHJIRA</h1>
      </div>
      <div className=' flex flex-wrap items-center justify-center gap-5'>
        <CardContents />
        <div className='ml-5 bg-white w-72 rounded mt-5 h-14    ' >
          <Button style='p-4 ' title='PELAJARI LEBIH LANJUT' />
        </div>
      </div>
    </div>
  );
};

export default ProgramList