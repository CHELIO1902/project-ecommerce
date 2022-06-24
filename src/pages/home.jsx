import React from 'react'
//import Card from '../components/Card';
import '../App.css'
import Cards from '../components/Cards';


function Home() {

  return (
      
    <div className='App-header container d-flex justify-content-center'>
      <div className='row'>
        <div className='col-md-4'></div> 
          <Cards/>
      </div>
    </div>


  )
}

export default Home