import React from 'react';
import { addToDb, deleteFromDb } from '../../Utilities/fakedb';
// import { addToDatabase, removeFromDatabase } from '../../Utilities/fakedb';
// import { addToDatabase,removeFromDatabase } from '../../Utilities/storage';

const Cosmetic = (props) => {
 const{name,price,id}=props.cosmetic;
 const handlePurchase=(id)=>{
 console.log(id)
 addToDb(id)
 }
 const handleRemove=id=>{
deleteFromDb(id)
 }
 
 return (
  <div>
   <h1>{id}</h1>
   <h2>{name}</h2>
   <p>${price}</p>
   <button onClick={()=>handlePurchase(id)}>Purchase</button>
   <button onClick={()=>handleRemove(id)}>Remove</button>
  </div>
 );
};

export default Cosmetic;