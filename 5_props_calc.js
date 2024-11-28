import React from "react";

class Calc2 extends React.Component{
    //React.Component 클래스 상속 - 자동 소유 변수 - this.props(읽기전용) - 부모 컴포넌트 전달값 저장 객체 변수
    render(){
        let props = this.props;
        let add = props.num1 + parseInt(props.num2);
        let sub = props.num1 - props.num2;
        let mul = props.num1 * props.num2;
        let div = parseInt(props.num1 / props.num2);

        return (
        <div>
            <h3>{props.num1}+{props.num2}={add}</h3>
            <h3>{props.num1}-{props.num2}={sub}</h3>
            <h3>{props.num1}*{props.num2}={mul}</h3>
            <h3>{props.num1}/{props.num2}={div}</h3>
        </div>
        );
    }
}

function Calc1(props){


    let add = props.num1 + parseInt(props.num2);
    let sub = props.num1 - props.num2;
    let mul = props.num1 * props.num2;
    let div = parseInt(props.num1 / props.num2);

    //변경 불가능 read only -> props.num1 =props.num1 + props.num2;
    return (
    <div>
        <h3>{props.num1}+{props.num2}={add}</h3>
        <h3>{props.num1}-{props.num2}={sub}</h3>
        <h3>{props.num1}*{props.num2}={mul}</h3>
        <h3>{props.num1}/{props.num2}={div}</h3>
    </div>
    )
}

function StyleProps(p) {
    //index.js <StyleProps color="red" backgroundColor="green" width="300px" /> 
    //전달받은 요소들로 h3 스타일 지정
    //p {color="red", backgroundColor="green", width="300px"}
    return <h3 style={p}>StyleProps 컴포넌트 실행중 {p.color}:{p.backgroundColor}:{p.width}</h3>
}
export  {Calc1 as default,Calc2,StyleProps};