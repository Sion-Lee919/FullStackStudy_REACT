import { useState } from "react";

function SingUp2() {
    const[form,setForm] =useState({username:"이름입력",gender:"성인남자",memo:"기타사항 입력"})
    
    const changName = function(e){
        setForm({...form,username:e.target.value});
    }
    const changgender = function(e){
        setForm({...form,gender:e.target.value});
    }
    const changmemo = function(e){
        setForm({...form,memo:e.target.value});
    }
    const handlersubmit = function(ev){
        ev.preventDefault();
        setForm({username:"",gender:"",memo:""});
    }



    return<div>
        <form onSubmit={handlersubmit} action="a.jsp">
            <label for ="name">이름 :</label>
            <input type="text" name="username" id="name" value={form.username} onChange={changName}></input>
            성별 :<select value={form.gender} onChange={changgender}>
                <option>성인남자</option>
                <option>성인여자</option>
                <option>미성년남자</option>
                <option>미성년여자</option>
            </select>
            <label for ="gender">기타 :</label><textarea value={form.memo} onChange={changmemo}></textarea>
            <button type="submit">회원가입</button>
    </form>
    <h3>{form.username} : {form.gender}</h3>
    <h3>{form.memo} </h3>
    <div>회원가입 버튼 클릭시마다 가입 회원의 이름만 출력</div>
    </div>
    
}
export default SingUp2;