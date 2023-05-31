import { AccountSummary } from "./components/AccountSummary";
import { AddTransation } from "./components/AddTransation";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { TransactionHistory } from "./components/TransactionHistory";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
    <div className="bg-blue-200">
    <Header/>
    <Balance/>
    <AccountSummary/>
    <TransactionHistory/>
    <AddTransation/>
    </div>
    
    </GlobalProvider>
  )
}