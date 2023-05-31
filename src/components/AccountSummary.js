import React from 'react'

export const AccountSummary = () => {
  return (
    <div className="flex gap-6 py-4 justify-center shadow-2xl bg-white max-w-xs mx-auto">
        
        <div className='text-center'>
        <h4 className='font-semibold text-xl'>INCOME</h4>
        <p className='text-lg'>$0.00</p>
        </div>

        <div className='text-center'>
        <h4 className='font-semibold text-xl'>EXPENSE</h4>
        <p className='text-lg'>$0.00</p>
        </div>

    </div>
  )
}
