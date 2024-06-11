
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home.jsx'

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Create from './Create.jsx';
import Update from './Update.jsx';
function App() {

  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/edit/:id' element={<Update/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
