import React from 'react'
import CardContents from '@/components/atoms/CardContents'

function ArticleList() {
  return (
    <div>
    <div className=' flex flex-col items-left justify-center mt-10 gap-5 px-[7%]'>
        <div className=' text-left'>
            <h1>Lihat Juga</h1>
        </div>
        <div className=' flex items-center justify-center gap-5 px-[7%]'>
            <CardContents />
            <CardContents />
            <CardContents />
            <CardContents />
        </div>
    </div>
</div>
  )
}

export default ArticleList