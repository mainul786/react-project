import React, { useState ,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

var style={
  backgroundColor:"red",
  color:"yellow"
}

function App() {
  const nayak=['sakib khan', 'amir khan', 'salman sha', 'josim']
  const goods=[
    { name:"hp laptop" , model:'320' , price:'$100'},
    { name:"vivo laptop" , model:"310" , price:'$120'},
    { name:"lenovo laptop" , model:'301' , price:'$150'},
    { name:"hp laptop" , model:'320' , price:'$100'},
    { name:"vivo laptop" , model:"310" , price:'$120'},
    { name:"lenovo laptop" , model:'301' , price:'$150'}
  ]

  
  
  const goodMal=goods.map(product => product.name)
  const nayakName=nayak.map(nayak => nayak)
  console.log(nayakName);
  console.log(goodMal);
  return (
    <div className="App">
      <header className="App-header">
      <p style={{backgroundColor:"blue",color:'red'}}>hi meri jan</p>
      <h1 style={style}>ki kore tui je amr..</h1>
      
      <ul>
        {
          nayak.map(nayak => <li>{nayak}</li>)
        }
        <li>{nayak[0]}</li>
        <li>{nayak[1]}</li>
        <li>{nayak[2]}</li>
        <li>{nayak[3]}</li>
      </ul>

        {
          goods.map(prod => <Product product={prod}> </Product>)
        }

      {/* <Product product={goods[0]}></Product>
      <Product product={goods[1]}></Product>
      <Product product={goods[2]}></Product> */}

      <Person name="ramiz" gf="mehek"></Person>
      <Person name="ramiz"></Person>
      <Person name="ramiz"></Person>
      <Person name="ramiz"></Person>
      <Person name={nayak[1]}></Person>
      <Counter></Counter>
      <Users></Users>

      
      </header>
    
    </div>

  );
}

function Person(props){
  const personStyle={
    border:'1px solid black',
    padding:'10px',
    margin:'10px'

  }
  
  return(
    <div style={personStyle}>
    <h1 >name: {props.name} </h1>
    <p>My girl friend name is:{props.gf} </p>
    </div>
  )
}

function Product(props){
const productStyle={
  backgroundColor:"gray",
  width:'300px',
  height:'200px',
  border:"1px solid red",
  margin :"10px",
  padding:"10px",
  float:'left'
}
const {name,price}=props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
  <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

// increase and decrease button start 
function Counter(){
  const [count, setCount]=useState(100);

// one no way
  // const handleIncrease=()=>{
  //   const newCount=count + 1 ;
  //   setCount(newCount);
  // }

{/* two no way */}
  // const handleIncrease=()=>setCount(count+1);

  return (

    <div>
      <h2>count:{count}</h2>
      {/* two no way */}
      {/* <button onClick={handleIncrease}>Increase</button> */}

      {/* three no way */}
      <button onClick={()=>setCount(count - 1)}>Decrease</button>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
    </div>
  )
}
// increase and decrease button stop end---

// data load form server
function Users(){
  const [user,setUsers]=useState([]);
 useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (data=>setUsers(data));
  },[])
  return (
    <div>
      <h5>dynamic user details:{user.length}</h5>
      
        <ul>
          {
            user.map(user=><li>{user.name}</li>)
}
        </ul>
      
    </div>
  )
}
// end data load form server
export default App;
