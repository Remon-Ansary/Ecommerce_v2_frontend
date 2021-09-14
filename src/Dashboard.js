import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //cart
  const [cart,setCart]= useState([]);
  const [page,setPage]= useState('items');

  const addToCart =(item) => {
    console.log("hello");
      setCart([...cart,{...item}]);
  };
  const removeFromCart =(productToRemove)=>{
    setCart(cart.filter(product=>product !== productToRemove ))

  };

  useEffect(() => {
    fetch("/products")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },


      )
  }, [])


  const navigateTo =(nextPage)=>{
    setPage(nextPage);
  }

  const renderItems = () => (
    <>
   
      <ul>
        {items.map((item,idx) => (
          <div key={idx}>
           <h4> {item.title}</h4>
           <h4> {item.price}</h4>
            <button onClick={()=>addToCart(item)}>Add to cart</button>
          </div>    
                
        ))}
      
      </ul> 
  
       </>  
  )

 
  const renderCart = () => (
    <>
   
      <ul>
        {cart.map((item,idx) => (
          <div key={idx}>
           <h4> {item.title}</h4>
           <h4> {item.price}</h4>
            <button onClick={()=>removeFromCart(item)}>Remove</button>
          </div>    
                
        ))}
      
      </ul> 
  
       </>  
  )

 
    return (

      <div className="dashboard">   
      <button onClick={() =>navigateTo('cart')}>Go to cart ({cart.length})</button> 
      <button onClick={() =>navigateTo('items')}>Items</button> 
      {page === 'items' && renderItems()}  
      {page === 'cart' && renderCart()}  
    
      </div>

    );
  }



export default Dashboard;
