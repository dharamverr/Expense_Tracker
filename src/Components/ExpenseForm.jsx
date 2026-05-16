import { useState } from "react";
import Inputs from "./Inputs";
import Select from "./Select";

export default function ExpenseForm({
  setEditRowId,
  expenses,
  setExpenses,
  expense,
  setExpense,
  editRowId,
}) {
  // const [title, setTitle] = useState('')
  // const [category,setCategory] = useState('')
  // const [amount,setAmount] = useState('')

  const [error, setError] = useState({});

  const validateConfig = {
    title: [
      { isRequired: true, message: "Title is required." },
      { minlength: 3, message: "Title should be 5 character long." },
    ],
    category: [{ isRequired: true, message: "Please select category." }],
    amount: [{ isRequired: true, message: "Please enter an amount." }],
  };
  const formValidate = (formData) => {
    const errorData = {};

    Object.entries(formData).forEach(([key, value]) => {
      // console.log(Key,value)
      validateConfig[key].some((rule) => {
        if (rule.isRequired && !value) {
          errorData[key] = rule.message;
          return true;
        }

        if (rule.minlength && value.length < 3) {
          errorData[key] = rule.message;
          return true;
        }
      });
      // console.log(errorData);
    });

    // if (!formData.title) {
    //   errorData.title = "Title is required";
    // }
    // if (!formData.category) {
    //   errorData.category = "Please select a category.";
    // }
    // if (!formData.amount) {
    //   errorData.amount = "Amount is required";
    // }
    setError(errorData);
    return errorData;
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = formValidate(expense);
    // console.log(validateResult)
    if (Object.entries(validateResult).length) return;

    if (editRowId) {
      setExpenses((prevState) =>
        prevState.map((singleExpense) => {
          if (singleExpense.id === editRowId) {
            return { ...expense, id: editRowId };
          } else {
            return singleExpense;
          }
        })
      );
      setEditRowId("");
      setExpense({ title: "", category: "", amount: "" });
      return
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({ title: "", category: "", amount: "" });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {/* <div>
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          id="Title"
          name="title"
          value={expense.title}
          onChange={changeHandler}
        />
        <p className="error">{error.title}</p>
      </div> */}
      <Inputs
        type="text"
        id="Title"
        name="title"
        labelName="Title"
        error={error.title}
        value={expense.title}
        changeHandler={changeHandler}
      />
      {/* <div>
        <label htmlFor="Category">Category</label>
        <select
          name="category"
          id="Category"
          value={expense.category}
          onChange={changeHandler}
        >
          <option hidden>Select Category</option>
          <option value="Clothes">Clothes</option>
          <option value="Bill">Bill</option>
          <option value="Grocery">Grocery</option>
          <option value="Medicine">Medicine</option>
          <option value="Education">Education</option>
        </select>
        <p className="error">{error.category}</p>
      </div> */}
      <Select
        value={expense.category}
        id="Category"
        name="category"
        labelName="Category"
        changeHandler={changeHandler}
        defaultSelect="Select Category"
        Options={["Clothes", "Bill", "Grocery", "Medicine", "Education"]}
        error={error.category}
      />
      {/* <div>
        <label htmlFor="Price">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          step="0.01"
          value={expense.amount}
          onChange={changeHandler}
        />
        <p className="error">{error.amount}</p>
      </div> */}
      <Inputs
        type="number"
        id="amount"
        name="amount"
        labelName="Amount"
        error={error.amount}
        value={expense.amount}
        changeHandler={changeHandler}
        step="0.01"
      ></Inputs>
      <button>{editRowId ? "Save" : "Add"}</button>
    </form>
  );
}
