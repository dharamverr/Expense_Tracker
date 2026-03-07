import React from 'react'

export default function Select({value,id,name,labelName,changeHandler,defaultSelect,Options,error}) {
   
  return (
     <div>
        <label htmlFor={id}>{labelName}</label>
        <select
          name={name}
          id={id}
          value={value}
          onChange={changeHandler}
        >
          <option hidden>{defaultSelect}</option>
          {
            Options.map((Option,i) => (<option key={i} value={Option}>{Option}</option>))
          }          
        </select>
        <p className="error">{error}</p>
      </div>
  )
}
