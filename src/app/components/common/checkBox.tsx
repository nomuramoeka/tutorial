/** @jsxImportSource @emotion/react */
import React, { useState } from "react";

interface CheckProps{
  firstCheck?:boolean;
}
const CheckBox: React.FC<CheckProps> = ({
 firstCheck=true
})=>{
  const[isChecked,setCheck]=useState(firstCheck);
  return(
  <input type="checkbox" checked={isChecked} onChange={() => setCheck(!(isChecked))}/>
)}


export default CheckBox;
