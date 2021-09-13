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

  // const fetchUserName = async () => {
  //   try {
  //     const query = await db
  //       .collection("users")
  //       .where("uid", "==", user?.uid)
  //       .get();
  //     const data = await query.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err + "error from fetchuser");
  //   }
  // };

  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return history.replace("/");

  //   fetchUserName();
  // }, [user, loading]);

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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (

      <div className="dashboard">       
        {/* <div className="">
          Logged in as
          <div>{name}</div>
          <div>{user?.email}</div>
          <button className="" onClick={logout}>
            Logout
          </button>
        </div> */}


        <ul>
          {items.map(item => (
            <li >
              {item.title} {item.price}
              <button>Add to cart</button>
            </li>          
          ))}
        </ul>
      </div>

    );
  }
}


export default Dashboard;
