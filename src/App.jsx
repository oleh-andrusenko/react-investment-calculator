import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react"


function App() {
  const [options, setOptions] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null
  })
  function handleChange(identifier, newValue) {
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        [identifier]: +newValue,
      }
    })
  }

  
  
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} />
      <Results  options={options}/>
    </>
  )
}

export default App
