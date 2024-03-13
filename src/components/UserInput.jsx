import React, { useState } from "react"

function UserInput({ onChange }) {
  return (
    <div id='user-input'>
      <div className='input-group'>
        <label htmlFor='initialInvestment'>
          Initial investment
          <input
            type='number'
            name='initialInvestment'
            id='initialInvestment'
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </label>
        <label htmlFor='annualInvestment'>
          Annual investment
          <input
            type='number'
            name='annualInvestment'
            id='annualInvestment'
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </label>
      </div>
      <div className='input-group'>
        <label htmlFor='expectedReturn'>
          Expected return
          <input
            type='number'
            name='expectedReturn'
            id='expectedReturn'
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </label>
        <label htmlFor='duration'>
          Duration
          <input
            type='number'
            name='duration'
            id='duration'
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </label>
      </div>
    </div>
  )
}

export default UserInput
