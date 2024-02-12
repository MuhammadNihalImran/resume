// "use  client"

import React , {useState}from 'react'
import Left from '../component/left'
import Right from '../component/Right1'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const [user, setUser] = useState("Nihal")
  return (
  <>
    <main className='main'>
      <Left/>
      <Right/>
    </main>
  </>
      )
}

export default App
