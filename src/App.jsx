import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import { Outlet } from 'react-router'

function App() {

  return (
    <section className='container'>
    <Header/>
    <Outlet/>
    </section>
  )
}

export default App
