import React, { useState } from 'react'

export const AddTransation = () => {
    const [description, setDescription]=useState();
    const [transactionamount, setTransactionamount]=useState();
  return (
            <>
        
      

    <div className='flex justify-center max-w-xs mx-auto shadow-2xl bg-white pb-3'>
        
        <form>
        <h3 className='text-center mt-3 font-bold text-2xl'>Add New Transaction</h3> 
            <div className="flex flex-col py-2 my-2">
                <label className='text-center font-semibold text-lg' htmlFor='description'>Description</label>
                <input 
                className='text-center py-2 bg-slate-100' 
                type='text' id='description' 
                placeholder='Details of Transation'  
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                
                />
                
            </div >

           
            <div className="flex flex-col py-2">
            <label className='text-center font-semibold text-lg' htmlFor='transactionamount'>Transaction Amount</label>
                <input className='text-center py-2' 
                        type='number' id='transactionamount' 
                        placeholder='Enter Transaction Amount' 
                        value={transactionamount}
                        onChange={(e)=> setTransactionamount(e.target.value)}
                        />
                        
            </div>
                <button className='bg-blue-800 text-white font-semibold text-center py-2 px-16 mt-2'>Add Transaction</button>

        </form>

    </div>
    </>
  )
}
