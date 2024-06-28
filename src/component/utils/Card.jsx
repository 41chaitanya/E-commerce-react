import React from 'react'

const Card = ({name ,short}) => {
  return (
    <div id='card' className='rounded-xl border-4 mb-5 mx-2 mt-8'>
        
        <div className="bg-gray-200"><img className='object-cover hover:scale-120 w-30 h-48' src={`/src/assets/images/${short}.png`} alt="" /></div>
        <div className='content-center ms- text-xl h-16 text-center'>{name}</div>
       
    </div>
  )
}

export default Card
