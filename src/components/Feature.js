import React from "react";
import requireAuth from "../components/requireAuth";

class Feature extends React.Component {
   componentDidMount = () => {
      const token = localStorage.getItem("token");
      fetch("http://localhost:3002/home", {
         method: "POST",
         body: JSON.stringify({ name: "john" }),
         headers: {
            "Content-Type": "application/json",
            authorization: token ? token : null
         }
      })
         .then(res => res.json())
         .then(data => console.log(data));
   };

   render() {
      return <h1>FEATURE</h1>;
   }
}

export default requireAuth(Feature);
