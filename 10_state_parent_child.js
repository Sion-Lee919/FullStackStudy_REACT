import { render } from "@testing-library/react";
import React from "react";
//상속관계가 있는
//자식을 클릭해도 부모를 바꿀수있게 코드 state 끌어올리기
class ParentTest extends React.Component{
    
    constructor(){
        super();
        this.state = {key:"부모 state key 초기값",count:0};
        this.click = 0;
    }
 
    //let click =0; 이거 안됨 클래스에서는 constructor 안에 변수 생성
    changeState = (ev)=>{
        this.setState({key:ev.target.value + ++this.click });
    }

    render(){
        return <div>
            <h3>{this.state.key}</h3>
            <button onClick={this.changeState} value="버튼 클릭횟수 =">버튼 클릭(부모)</button>
            <hr />
            {/* props -부모의 state 변수 전달 + 부모의 state 변경 가능 메소드 전달 */}
            <ChildTest key={this.state.key} changeState={this.changeState}/>
        </div>
    }
}

class ChildTest extends React.Component{
constructor(){
    super();
    this.state = {key2:"자식 state key 초기값",count:0};
    this.click = 0;
}

//let click =0; 이거 안됨 클래스에서는 constructor 안에 변수 생성
changeState2 = (ev)=>{
    this.setState({key2:ev.target.value + ++this.click });
}

render(){
    return <div>
        <h3>부모로부터 전달받은 props변수 = {this.props.key}</h3>
        <button onClick={this.props.changeState} value="버튼 클릭횟수 =">버튼 클릭(부모props(state)변경)</button>
        <h3>자식 state 변수 = {this.state.key2}</h3>
        <button onClick={this.changeState2} value="버튼 클릭횟수 =">버튼 클릭(자식)</button>
        
    </div>
}

}
export default ParentTest;