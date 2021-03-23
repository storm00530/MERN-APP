import React, { useState } from "react";
import httpService from "../services/accountService";
import { Redirect } from "react-router-dom";
export default function Success(props) {
  // const [isAuth, setAuth] = useState(false);
  // httpService.auth().then(
  //   (res)=>{
  //     setAuth(true);
  //   }
  // )
  // if(!isAuth) return <Redirect to='/login' />
  return <div>Welcome {props.name}</div>;
}
