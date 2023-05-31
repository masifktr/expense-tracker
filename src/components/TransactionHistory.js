import React, {useContext} from 'react'
import { GloblaContext } from '../context/GlobalState'
import { Transaction } from './Transaction'


export const TransactionHistory = () => {
  const { transactions } = useContext(GloblaContext);
  
  return (
    <div>
        
        <ul className='flex flex-col items-center max-w-sm mx-auto shadow-2xl bg-white my-2'>
        <h3 className='font-bold text-center my-2 text-2xl'>Transaction History</h3>
          {
            transactions.map(transactions => (
            <Transaction key={transactions.id} transactions={transactions}/>
            )
          )}
        </ul>  

    </div>
  )
}
