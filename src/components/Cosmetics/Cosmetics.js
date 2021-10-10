import React, { useEffect, useState } from 'react';
import {add, multiply} from '../../Utilities/storage'
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
 const[cosmetics,setCosmetics]=useState([]);
 useEffect(()=>{
   fetch('./cosmetics.json')
   .then(res=>res.json())
   .then(data=>setCosmetics(data))
 },[])
 // const first=55;
 // const second=90;
 // const sum=add(first,second);
 // const product=multiply(first,second);
 // const multiply=multiply (first,second)
 return (
  <div>
   {/* <h3>{sum}</h3>
   <p>{product}</p> */}
   <h3> Shop my cosmetics</h3>
   {
    cosmetics.map(cosmetic=><Cosmetic 
     key={cosmetic._id}
     cosmetic={cosmetic}></Cosmetic>)
   }
  </div>
 );
};

export default Cosmetics;