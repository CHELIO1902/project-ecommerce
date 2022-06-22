import axios from 'axios';
import { useEffect, useState } from 'react';

export const Home = () => {

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
    <div>
      <h4>hola</h4>
      {items.map((item) => (
        <div>
          <div key={item._id}>{item.image}</div>
          <p key={item._id}>{item.product_name}</p>
        </div>

      ))}
    </div>
  )
}
