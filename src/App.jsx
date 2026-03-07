import { useState } from "react";
import "./App.css";
import ExpenseForm from "./assets/Components/ExpenseForm";
import ExpenseTable from "./assets/Components/ExpenseTable";
import ExpenseData from "../ExpenseData";
import { useLocalStorage } from "../Hooks/useLocalStorage";

function App() {
  const [expenses,setExpenses] = useLocalStorage('expenses',ExpenseData)
  const [expense, setExpense] = useLocalStorage('expense',{
    title: "",
    category: "",
    amount: "",
  });


  const [editRowId,setEditRowId] = useLocalStorage('editRowId','')
  return (
    <>
      <main className="parent-container">
        <h1>Track Your Expense</h1>
        <div className="container">
        <ExpenseForm expenses={expenses} setEditRowId={setEditRowId} editRowId={editRowId} setExpenses={setExpenses} expense={expense} setExpense={setExpense}/>
        <ExpenseTable setEditRowId={setEditRowId} expenses={expenses} setExpenses={setExpenses} expense={expense} setExpense={setExpense}/>
        </div>
      </main>
    </>
  );
}

export default App;
