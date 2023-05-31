import { createContext, useReducer } from "react"
import AppReducer from './AppReducer'


//create the initial state
const initialState = {
    transactions:[
        {id: 1, description: "Income 1", trasactionAmount: 1000},
        {id: 2, description: "Expense 2", trasactionAmount: -100},
        {id: 3, description: "Income 1", trasactionAmount: 2000},
        {id: 4, description: "Expense 2", trasactionAmount: 500}


    ]
}
export const GloblaContext = createContext(initialState)

export const GlobalProvider = ({children})=>{
    // eslint-disable-next-line
    const [state,] = useReducer(AppReducer, initialState)
    return(
        <GloblaContext.Provider value={
            {
            transactions: state.transactions
              }
        
        
        }>
            {children}
        </GloblaContext.Provider>
    )
}