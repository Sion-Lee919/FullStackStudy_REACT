import { useState } from "react";

function SingUp() {
//이름입력
    const[username,setUserName]=useState("이름입력");
    const changName = function(ev){
        setUserName(ev.target.value);
    };
//성별선택시
    const[gender,setGender]=useState("성인남자");
    const changgender = function(ev){
        setGender(ev.target.value);
    };
//기타
const[memo,setmeno]=useState("기타사항 입력");
const changmemo = function(ev){
    setmeno(ev.target.value);
};

const handlersubmit = function(ev){
    ev.preventDefault();
    //이름, 성별, 기타 선택사랑 출력 공백
    setUserName('');
    setGender('');
    setmeno('');
}

    return<div>
        <form onSubmit={handlersubmit} action="a.jsp">
            <label for ="name">이름 :</label>
            <input type="text" name="username" id="name" value={username} onChange={changName}></input>
            성별 :<select value={gender} onChange={changgender}>
                <option>성인남자</option>
                <option>성인여자</option>
                <option>미성년남자</option>
                <option>미성년여자</option>
            </select>
            <label for ="gender">기타 :</label><textarea value={memo} onChange={changmemo}></textarea>
            <button type="submit">회원가입</button>
    </form>
    <h3>{username} : {gender}</h3>
    <h3>{memo} </h3>
    <div>회원가입 버튼 클릭시마다 가입 회원의 이름만 출력</div>
    </div>
    
}
export default SingUp;