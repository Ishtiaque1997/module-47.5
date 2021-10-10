function add(num1,num2){
 return num1+num2;
}


function multiply(num1,num2){
 return num1*num2;
}


//reduce
const nums=[12,34,56,78,87];

const reducer=(previous,current)=>previous+current;
nums.reduce(reducer,0)
const jinis=[
 {id:1,name:'alta',price:25},
 {id:2,name:'alt',price:125},
 {id:3,name:'altap',price:225},
 {id:4,name:'altas',price:325},
]
let total=0;
for(const jini of jinis){
 total=total+jini.price;
}
const jinisReducer=(previous,current)=>previous+current;
const jiniTotal=jinis.reduce(jinisReducer,0)



 function subtract(num1,num2){
 return num1-num2;
}

export{add,multiply}
