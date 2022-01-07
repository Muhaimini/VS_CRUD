import React from "react"
import { Index } from '../index'
import { useHistory } from 'react-router-dom'


const App = () => {

  const history = useHistory()
  console.log(history.location.pathname);

  return <Index />
}

export default App
