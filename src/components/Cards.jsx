import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

/* export default function Cards() {
  const [items, setitems] = useState([])

  const getItems = async() => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
    console.log(res);
    setitems(res.data)
    //setitems(res.data.slice(0, 20))
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
} */

const Cards = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
      setItems(res.data);
      setLoading(false)
    }

    fetchPosts();
  },[]);


  //Get currents posts
  const indexOfLastItem = currentPage * itemsPerPage;
  console.log(indexOfLastItem);
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  console.log(indexOfFirstItem);
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);

  return (
    <div>
      {items.map((item) => (
        
      <Card item={item} loading={loading}/>
      ))}
    </div>
  )

};

export default Cards;
