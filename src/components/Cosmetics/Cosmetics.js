import React from 'react';
import {add, multiply} from '../../Utilities/storage'

const Cosmetics = () => {
 const first=55;
 const second=90;
 const sum=add(first,second);
 const product=multiply(first,second);
 // const multiply=multiply (first,second)
 return (
  <div>
   <h3>{sum}</h3>
   <p>{product}</p>
  </div>
 );
};

export default Cosmetics;