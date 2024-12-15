'use client'

import React from 'react'
import { useState } from 'react'

interface cardProps{
   question: string;
   answer: string;
}

const FaqCards = (props: cardProps) => {
    const {question, answer} = props;

    
    const [isClicked, setisClicked] = useState(false)

    const openAnswer = () => {
        setisClicked(!isClicked)
    }

  return (
    <div className='p-6 bg-pink-50 rounded-lg flex flex-col gap-6'>
        <div className='flex justify-between'>
            <p className='text-[#333333] font-helvetica font-bold text-lg'>{question}</p>
            <button className='w-6 h-6' onClick={openAnswer}>{isClicked ? '+' : "-"}</button>
        </div>

        {isClicked && (<div>
            <p className='answer font-inter font-norma text-base text-[#4F4F4F]'>{answer}</p>
        </div>)}

    </div>
  )
}

export default FaqCards