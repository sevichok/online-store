import React from 'react'
import { StoreData } from "../../redux/store/data"

function List() {
  return (
    <div className='list'>
      {StoreData.map((item, index) => {
        return <div className='item' key={index}>
          <h4>{item.title}</h4>
          <h6>{item.club}</h6>
          <h6>{item.price}$</h6>
          <h6>{item.quantity}</h6>
          <h6>{item.description}</h6>
          <button>Add to card</button>
        </div>
      })}
    </div>
  )
}

export default List