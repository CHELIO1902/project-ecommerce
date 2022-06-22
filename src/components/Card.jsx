import axios from 'axios';
import { useEffect, useState } from 'react';

function Card() {

  const [items, setitems] = useState([])

  const getItems = async() => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
    console.log(res);
    setitems(res.data.slice(0, 20))
  }

  useEffect(() => {
    getItems();
  }, [])

  return (
    <div className='card col-md-3'>
      {items.map((item) => (
        <div className='card-body'>
          <img className='col-md-12' src={item.image} alt="img-costummer" />
          <div  className=''>
          <h4 className='card-title text-dark' key={item._id}>{item.product_name}</h4>
          <p className='card-text text-primary'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card