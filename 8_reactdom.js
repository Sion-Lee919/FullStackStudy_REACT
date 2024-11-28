//합성
function MyReactdom1(p){
    return <div>
    <h1>나의 돔구조:{p.title}</h1>
    <Mybutton buttontitle="이미지 버튼"/> 
    <Time/>
    </div>;
}

function MyReactdom2(p){
    return <div>
    <h1>나의 돔구조:{p.title}</h1>
    <Time/>
    </div>;
}

function Mybutton(p){//추출하여 1개의 리액트 컴포넌트 정의. 재사용
 return <button><p>버튼을 표현하는 React_dom 입니다.{p.buttontitle} </p>
<img src="http://localhost:4000/logo192.png" ></img></button>
}

function Time(){//추출
    return <div><h1>시간를 표현합니다</h1><h2>현재시간: {new Date().toLocaleTimeString()} </h2></div>
}
export {MyReactdom1,MyReactdom2}