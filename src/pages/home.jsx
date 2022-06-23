import React from 'react'
//import Card from '../components/Card';
import '../App.css'
import Cards from '../components/Cards';
import Pagination from '../components/Pagination/Pagination';

function Home() {

  return (
    <div>
      <Pagination/>
    <div className='App-header container d-flex justify-content-center'>
      <div className='row'>
        <div className='col-md-4'></div> 
          <Cards/>
      </div>
    </div>
    </div>
  )
}

export default Home