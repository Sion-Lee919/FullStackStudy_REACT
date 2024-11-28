import React, { useState } from "react";

//class 형태 setState
//함수형태 useState

class State_User1 extends React.Component{
    constructor(){
        //1-브라우저 출력 이전
        super();
        this.state = {id:"id초기값", name:"name의 초기값"}
        this.dept= "dept의 초기값"; //render 포함 클래스 영역 모두 사용가능. 수정은 안됨
    }

    render(){
        
        let handlerfunction=()=> {//3
            //이벤트 처리 - 현재 자신의 객체 (익명함수 -이벤트 발생객체)
            //이벤트 처리 -현재 자신의 객체 (화살표함수 -이벤트 방생객체 부모객체)
            //this.state.id ="id의 수정값"; //render 1번 실행 출력 이후 수정반영 안된다
            this.setState({id:"id의 수정값", name:"새로운 name값",dept:"dept의 수정값"}); //수정매소드 정해져있다  
        }
        
        //2-브라우저 출력
        return <div>
            <h3>id출력={this.state.id}</h3>
            <h3>name출력={this.state.name}</h3>
            <h3>dept출력={this.dept}</h3>
            {/* 변경버튼. 클릭하면 handlerfunction 함수 실행*/}
            <button onClick={handlerfunction}>변경</button>
            </div>
    }

}
function State_User2(){
//함수형 컴포넌트 - useState()리액트 내장 라이브러리 사용

// let func_state = useState("초기값");//길이 2개짜리인 배열 리턴 [0]=state관리변수명,[1]=state변수값변경메소드
// let id2 = func_state[0];
// let setId2 = func_state[1];
//return<div><h2>useState타입={func_state.constructor.name} : state변수초기값={id}</h2></div>

let[obj, setobj] = useState({id:"초기값",count:100});//[0]=state관리변수명,[1]=state변수값변경메소드
let handlerfunction = function() {
    //일부의 변수만 변경하고 나머지 변수는 그대로
    setobj({...obj,count:1000});//obj 복사한 후 count 변경하고 다시 obj 객체 반환
    //setobj({id:"id변경값",count:1000});
    
}
return<div>
    <h2>state변수값1={obj.id}</h2>
    <h2>state변수값2={obj.count}</h2> 
    <button onClick={handlerfunction}>변경</button>
    </div>

}
export {State_User1, State_User2}; 