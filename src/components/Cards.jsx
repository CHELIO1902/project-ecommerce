import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

export default function Cards() {
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
      {items.map((item) => (
        
      <Card item={item}/>
      ))}
    </div>
  )
}

