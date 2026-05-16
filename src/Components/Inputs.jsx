import React from 'react'

export default function Inputs({changeHandler,type,id,name,labelName,error,value,step}) {
  return (
    <div>
        <label htmlFor={id}>{labelName}</label>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={changeHandler}
          step={step}
        />
        <p className="error">{error}</p>
      </div>
  )
}
