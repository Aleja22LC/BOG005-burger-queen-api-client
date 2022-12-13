import axios from 'axios';
// import { useState, useEffect } from "react";
const baseUrl = "http://localhost:8080";
// let token = localStorage.getItem('tokenUser')
// let userId = localStorage.getItem('userId')

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
const token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY1MDIzMzkwOSwiZXhwIjoxNjUwMjM3NTA5LCJzdWIiOiIyIn0.nS99u-MBatZHbexMUenwsGdS8oV55BIaGwI6PSP7BC8

export const listProducts = async (product,name) =>{
  const res = await axios({
    
    method:'GET',
    url: baseUrl + '/ListProduct',
        data: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
})
return res.data 
}  
  
  
  