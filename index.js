import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {MyReact,MyReact2} from './MyReact'; //2개이상 {}
import Hello1, {Hello2,Hello3,Hello4} from './1_start';
//import Expression from './2_expression';
import Greeting, {Greeting2} from './3_condition_render';
import ForTest from './4_for_render';
import Calc1, { Calc2, StyleProps } from './5_props_calc';
import { State_User1, State_User2 } from './6_state_class_function';
import Expression from './2_6_expression copy';
import SingUp from './7_form';
import { MyReactdom1, MyReactdom2 } from './8_reactdom';
import SingUp2 from './7_form copy';
import Book from './9_test1_book';
import ParentTest from './10_state_parent_child';
import MyContextTest from './11_mycontext';
import MyButton from './12_mystyledcomponent';
import NumberList2 from './13_test2_numberlist copy';
import Boardlist from './15_boardlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyReact />
    <MyReact2 /> */}
     {/* <Hello1 />
    <hr />
    <Hello2 />
    <hr />
    <Hello3 />
    <hr />
    <Hello4 />
    <hr />
    <Expression />
    <hr /> */}
    {/* <Greeting />
    <hr />
    <Greeting2 />
    <hr />
    <ForTest/> */}
    {/* <Calc1 num1={100} num2="200"/>
    <Calc1 num1="10" num2="20"/>
    <Calc1 num1="1" num2="2"/>
    <hr/>
    <Calc2 num1={100} num2="200"/>
    <Calc2 num1="10" num2="20"/>
    <Calc2 num1="1" num2="2"/>
    <StyleProps color="red" backgroundColor="green" width="300px" /> */}
    {/* <State_User1/>
    <hr/>
    <State_User2/>
    <hr/> */}
    {/* <Expression /> 
    <hr/>*/}
    {/* <SingUp/>
    <hr/> */}
    {/* <MyReactdom1 title="MyReactdom1"/>
    <hr/>
    <MyReactdom2 title="MyReactdom2"/>
    <hr/> */}
    {/* <SingUp2/>
    <hr/> */}
    {/* 
    jsx 문법 return <h1>제목1</h1>
    jsx 문법 - React.createElement('h1', null,'제목1'); 변환 children */}
    {/* <Book t="소플의 처음 만난 리액트" body="리액트 기초를 설명하는 책입니다" author="이인제" price="20000" >
      북컴포넌트를 소개합니다 
    </Book>
    <Book t="html 입문" body="html, css, java script, jquery 등 frent end 기술을 설명합니다. " author="윤인성" price="30000"/> 
    <Book t="모던 자바스크립트" body="일본서를 번역한 자바 스크립트 기술 관련 책입니다." author="서재원" price="35000"/> 
    <hr/> */}
    {/* <ParentTest/>
    <hr/> */}
    {/* <MyContextTest/>
    <hr/> */}
    {/* <MyButton color="green" background='silver'>green 글씨 버튼1</MyButton>
    <MyButton color="pink" background='black'>pink 글씨 버튼2</MyButton>
    <MyButton color="navy" background='lightgreen'>navy 글씨 버튼3</MyButton>
    <MyButton >버튼4</MyButton> */}
    {/* <NumberList/> */}
     {/* <NumberList2/> */}
     <Boardlist Pagetitle ="나의 리액트 게시판" seq="번호" title="제목" writer="작성자"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
