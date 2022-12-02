import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Pagination } from './components/Pagination'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
