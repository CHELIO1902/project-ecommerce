import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import './App.css';
//import Cards from './components/Cards';
import Header from './components/Header';
import Home from './pages/Home';

export const App = () => {

  

  return(
    
    <Router>
      <Header/>
      <Routes>
        

        <Route
        path='/'
        element={
          
          <Home/>
        }
        >

        </Route>

      </Routes>

    </Router>

    
  )
}

export default App;