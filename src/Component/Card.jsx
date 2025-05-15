import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-wrap justify-start gap-6 p-6'>
      <div className='h-48 w-96 border-2 border-amber-500'>
        Card 1
      </div>
      <div className='h-48 w-96 border-2 border-amber-500'>
        Card 2
      </div>
      <div className='h-48 w-96 border-2 border-amber-500'>
        Card 3
      </div>
    </div>
  )
}

export default Card;
