import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';


 function Header() {
    const [items, setitems] = useState([])

    const getItems = async() => {
      const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
      console.log(res);
      setitems(res.data.slice(0, 20))
    }

    useEffect(() => {
      getItems();
    }, [])




    const handleChange=e=>{
      setBusqueda(e.target.value);
      filtered(e.target.value);
    }
    
    const filtered=(searchTerm)=>{
      var resultadosBusqueda=tablaUsuarios.filter((element)=>{
        if(element.product_name.toString()(searchTerm.toLowerCase())
        ){
          return element;
        }
      });
      setUsuarios(resultadosBusqueda);
    }


    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#" >Home</a>
                  
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Products</a>
                </li>

              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-success" type="submit"
                      onChange={handleChange}>Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
}
 export default Header