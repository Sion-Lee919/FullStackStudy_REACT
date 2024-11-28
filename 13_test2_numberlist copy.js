import { useState } from "react";
import { StyledButton } from "./12_mystyledcomponent";

function NumberList2(){
    //배열 - [1,2,3,4,5] 변수 선언
    //1. 배열의 내용 출력 - <ul><li> 태그
    //2. 값 1개 입력 text타입 input
    //3. button 3개 -  추가, 수정, 삭제 - Styled 형태 사용
    //값 입력하고 추가 버튼 클릭시 배열 마지막 요소 추가
    //값 입력하고 수정 버튼 클릭시 배열 마지막 요소 수정
    //삭제 버튼 클릭시 배열 마지막 요소 삭제
    // 버튼 클릭하여 해당 작업 수행 결과 화면에 즉각 반영

    let aa = [1,2,3,4,5];

    const[s1,s2]=useState();

    const[state_array, setArray]=useState(aa);
    let aa2 = state_array.map(function(i,j){
        return <li>{i}</li>;
    });
    
    const s3 = function(ev){
        s2(ev.target.value);
    }

    let on1 =function(){
        //state_array.push(s1); 배열변수 직접 변경 사용 불가.
        let new_array =[...state_array];
        new_array.puch(s1);
        setArray(new_array);
    };

    let on2 =function(){};
        let new_array =[...state_array];
        new_array[new_array.length-1]=s1;
        setArray(new_array);

    let del =function(){
        let new_array =[...state_array];
        new_array.pop();
        setArray(new_array);
    };

    return <div>    
         <ul>{aa2}</ul>
    
    <input type="text" value={s1} onChange={s3}></input>
    <br />
    <StyledButton color="red" background="bule" onClick={on1}>추가</StyledButton>
    <StyledButton color="red" background="bule" onClick={on2}>수정</StyledButton>
    <StyledButton color="red" background="bule" onClick={del}>삭제</StyledButton>
    <h3>{s1}</h3>
    </div>
}

export default NumberList2;