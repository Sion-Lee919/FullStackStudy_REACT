import React from "react";

function Greeting(){
    let insa1 = "오늘도 즐거운 하루 되세요."; //0
    let insa2 = "안녕하세요 리액트입니다."; //1
    let insa3 = "오늘 날씨 어때요?"; //2

    //랜덤하게 어떤 인사 구현
    // 0<= Math.random() <1 
    // 0<= Math.random()*100 <100
    // 0<= parseInt(Math.random()*100) //parseInt정수

    let random =  parseInt(Math.random()*3); //정수 0,1,2  0<=? <3
    let result ;
    //  if(random ==0){result = insa1;}
    //  else if(random ==1){result = insa2;}
    //  else{result = insa3;}

    return <div>
        <h1>{random==0? insa1 :random ==1? insa2 :insa3}</h1>
        </div>;
}

class Greeting2 extends React.Component{
    //클래스 구조 this.xxx --> 객체 내부 모든 매소드 사용가능
    constructor(){
        super();//
        this.insa1="오늘도 즐거운 하루 되세요.";
        this.insa2="안녕하세요 리액트입니다.";
        this.insa3="오늘 날씨 어때요?";
        this.random = parseInt(Math.random()*3);

    }
    render(){
        return <div> <h1>
            {this.random==0? this.insa1 :this.random ==1? this.insa2 :this.insa3}
            </h1>
        </div>;
    }
}
export {Greeting as default, Greeting2};