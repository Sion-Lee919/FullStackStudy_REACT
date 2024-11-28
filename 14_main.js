import { useParams } from "react-router-dom";

function Main(){
    return <div>
        <h1>나의 홈페이지에 오신 것을 환영합니다.</h1>
        <img src="http://localhost:4000/logo192.png"/>

    </div>
}
function NoMatch(){
    return<div><h1>해당 url을 처리하는 컴포넌트는 존재하지 않습니다.</h1>
    <img src="https://t4.ftcdn.net/jpg/03/75/23/37/360_F_375233758_ZcvzjFWFXx1RAPnPfVM3iIt70KCyKMyj.jpg"></img>
    </div>
}
function OneNumber(p){ // {num1:"100", num2:"200"}  index에서 받아온 상태
//useParams - url 포함 파라미터변수값 사용(/number/:num3/:num4....)
    const {num3,num4} = useParams();
    return<div><h1>{p.num1}, {p.num2},{num3},{num4}숫자를 출력합니다</h1></div>
}
export {Main, NoMatch, OneNumber};