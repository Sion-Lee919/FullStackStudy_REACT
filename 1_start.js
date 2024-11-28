import React from "react";

//함수선언식으로 정의하는 리액트 컴포넌트
function Hello1(){
    let mag = `나의 리액트 컴포넌트 생성(함수선언식)`;
    let mag2 = `(함수선언식)`;
    return <div><h1>{mag}</h1><h3>{mag2}</h3></div>
}

//익명함수(리액트 컴포넌트 내용 불면)
const  Hello2 = function(){
    let mag = `나의 리액트 컴포넌트 생성(함수선언식)`;
    let mag2 = `(익명함수)`;
    return <div><h1>{mag}</h1><h3>{mag2}</h3></div>
}
//화살표 함수
const  Hello3 = ()=> <div><h1>'나의 리액트 컴포넌트 생성'</h1><h3>(화살표함수)</h3></div>

//클래스 표현
class Hello4 extends React.Component {
    render(){ //React.Component render() -상속 뭔가 구현되었을지라도 Hello4 변경
        return <div><h1>'나의 리액트 컴포넌트 생성'</h1><h3>(클래스 구조)</h3></div>
    }
}
export {Hello1 as default, Hello2, Hello3, Hello4};

