import React from 'react';

const Cosmetic = (props) => {
 const{name,price}=props.cosmetic;
 return (
  <div>
   <h2>{name}</h2>
   <p>${price}</p>
  </div>
 );
};

export default Cosmetic;