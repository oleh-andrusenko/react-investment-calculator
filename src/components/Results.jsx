import React from "react"
import { formatter } from "../util/investment"
import { calculateInvestmentResults } from "../util/investment"

function Results({ options }) {
  let optionsCopy = { ...options }
  let expectedReturn = options.expectedReturn * 100
  let data = calculateInvestmentResults(options)
  return (
    <>
      {data.length === 0 && (
        <p className='center'>Input all options correct to see forecast...</p>
      )}
      {data.length > 0 && (
        <table id='result'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (year)</th>
              <th>Total interest</th>
              <th>Invested capital</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(item.totalInterest)}</td>
                <td>
                  {formatter.format(
                    (optionsCopy.initialInvestment +=
                      optionsCopy.annualInvestment)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Results
