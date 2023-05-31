import React from 'react'

export const Transaction = ({transactions}) => {
  return (
    
          <li className='flex my-3 gap-6'>
                  <p>{transactions.description}</p>
                <span>{transactions.trasactionAmount}</span>
                <button className='bg-gray-500 px-1 py-.5'>X</button>
            </li>
    
  )
}
