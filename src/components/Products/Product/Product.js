import React from 'react';

const Product = ({item}) => {

    // id
    // title
    // description
    // image
    // "rating":{"rate":3.9,"count":120}}

    
  return (
    <div>
        <img src={item.image} alt={item.title}/>
        <div>
            {item.title}
        </div>
    </div>
  )
}

export { Product }