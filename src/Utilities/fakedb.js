//use local storage as database
const addToDatabase=id=>{
 const exists=localStorage.getItem('shopping_cart');
 if(!exists){
 localStorage.setItem(id,1);
 }else{
  const newCount=parseInt(exists)+1;
  localStorage.setItem(id,newCount);
 }
 
}
export {addToDatabase}