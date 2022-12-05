import axios from 'axios';
// import { useState, useEffect } from "react";
const baseUrl = "http://localhost:8080";
export const loginUsers = async (email, password) => {
  const rest = await axios({
      method: 'POST',
      url: baseUrl + '/login',
      data: {
          email: email,
          password: password
      }
  })
  return rest
}
console.log(loginUsers)
// function loginUsers() {
//   const [email,setEmail] = useState([])
  
  
//   useEffect(() => {
    
//     const obtenerCorreos = async () => {
//       const url = 'http://localhost:8080/';
//       const result = await axios.get(url);
//       // console.log(result.data)
//       setEmail(result.data)
//     }
//     console.log(setEmail)
//     obtenerCorreos()
//   },  []);
  

// return (
//   <div>
//     <h1>loginUsers</h1>
//     </div>
//   );
// };