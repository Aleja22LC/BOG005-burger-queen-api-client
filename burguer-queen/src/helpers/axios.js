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
