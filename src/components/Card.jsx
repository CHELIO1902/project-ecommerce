
function Card({item}) {

  return (
         <div className='card col-md-3' style={{border: '2px solid black', margin: '10px'}}>
         <div className='card-body'>
           <img className='col-md-12' src={item.image} alt="img-costummer" />
           <div  className=''>
           <h4 className='card-title text-dark' key={item._id}>{item.product_name}</h4>
           <p className='card-text text-primary'>{item.description}</p>
           </div>
         </div>
       </div>
  )
}

export default Card