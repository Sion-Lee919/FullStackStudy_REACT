import { useState } from "react";
import styled from "styled-components";

const StyledButton1 = styled.button`
color: red;
background : skyblue;
border : 1px solid yellow;
width:100px;
height:100px;
`;

function NumberList(){
    //배열 - [1,2,3,4,5] 변수 선언
    //1. 배열의 내용 출력 - <ul><li> 태그
    //2. 값 1개 입력 text타입 input
    //3. button 3개 -  추가, 수정, 삭제 - Styled 형태 사용
    //값 입력하고 추가 버튼 클릭시 배열 마지막 요소 추가
    //값 입력하고 수정 버튼 클릭시 배열 마지막 요소 수정
    //삭제 버튼 클릭시 배열 마지막 요소 삭제
    // 버튼 클릭하여 해당 작업 수행 결과 화면에 즉각 반영
    let aa = [1,2,3,4,5];

    let[s1,s2]=useState("추가하려면 입력하세요");
    let s3 = function(ev){
        s2(ev.target.value);
    }

    let on =function(){
        aa.push(s1);
    };

    let on2 =function(){};

    let dlt =function(){};

    
    let aa2 = aa.map(function(i,j){
        return <li>{i}</li>;
    });

    return <div>
        <ul>{aa2}</ul>
    
    <input type="text" value={s1} onChange={s3}></input>
    <br />
    <StyledButton1 onClick={on}>추가</StyledButton1>
    <StyledButton1 onClick={on2}>수정</StyledButton1>
    <StyledButton1 onClick={dlt}>삭제</StyledButton1>
    <h3>{s1}</h3>
    </div>
}

export default NumberList;