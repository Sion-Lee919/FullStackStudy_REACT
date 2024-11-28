import React, { useState } from "react";
//이미지 변경시키기
function Expression(){
    const item = "card";
    const price = 12000;
    const product = "커피";
    const amount = 3;

    const[image,setimage]=useState("http://localhost:4000/favicon.ico"); //최초이미지
    
    //setimage("변경이미지")

    const changimage= function(){
        setimage("http://localhost:4000/logo192.png");
    };

    return <div>
        <h1>{item} - {price * 2}를 지불하셨습니다.</h1>
        <h2>{product} {amount}잔을 구매하셨습니다.</h2>
        <img src ={image} alt={product}/>
        <button onClick={changimage}>이미지변경</button>


    </div>;
    
}
export default Expression;