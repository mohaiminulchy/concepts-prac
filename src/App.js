import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const twelvthMan=['Miraz','Saifuddin','Liton']

  const products=[{name:'Shoe',price:'$190'},
                  {name:'Watch',price:'$490'},
                  {name:'Bag',price:'$10'},
                  {name:'Sun GLass',price:'$90'},
                  {name:'Wallet',price:'$120'},]
                  
  return (
    <div className="App">
      <header className="App-header">
     
      <ul>{
        products.map(x=><li>{x.name}</li>)

      }
        
      </ul>
        <p>I am React IronMan</p>
        <Counter></Counter>
        <Users></Users>
        {
          products.map(iter=><Product properties={iter}></Product>)
        }

       {
         twelvthMan.map(iter=><Person properties={iter}></Person>)
       }
        
      </header>
    </div>
  );
}
function Person(props){
  
  const personStyle={
    
    border:'2px solid yellow',
    margin:'10px',
    padding:'5px',
    width:'400px'
  }
  return (
    <div style={personStyle}>
          <h1>Name :{props.properties}</h1>
          <h5>Press like to meet me</h5>
          
    </div>
  )
}


function Product(props){
  const {name,price}=props.properties
  const prodStyle={
    color:'black',
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'400px',
    float:'left',
    margin:'10px 0px'
  }
  return(
    <div style={prodStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>

  )
}



function Counter(){
  const [count,setCount] =useState(0);
  const handleIncrease=()=>{
    const newCount=count+1;
   
    setCount(newCount);
  }
  const handleDicrease=()=>{
    const newCount=count-1;
    setCount(newCount);
  }
  return(
    <div>
        <h1>Count :{count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDicrease}>Dicrease</button>
    </div>
  )
}


function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonPlaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));

},[])


  return (
    <div>
        <h3>Dynamic Users:{users.length}</h3>
        <ul>
          {
            users.map(iter=><li>{iter.website}</li>)
          }
        </ul>
    </div>
  )
}

export default App;
