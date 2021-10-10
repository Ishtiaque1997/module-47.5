import React from 'react';
import { addToDatabase } from '../../Utilities/fakedb';
import { add } from '../../Utilities/storage';

const Cosmetic = (props) => {
 const{name,price,id}=props.cosmetic;
 const handlePurchase=(id)=>{
 console.log(id)
 addToDatabase(id);
 }
 
 return (
  <div>
   <h1>{id}</h1>
   <h2>{name}</h2>
   <p>${price}</p>
   <button onClick={()=>handlePurchase(id)}>Purchase</button>
  </div>
 );
};

export default Cosmetic;