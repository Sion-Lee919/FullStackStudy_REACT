import { createContext, useContext, useState } from "react"

//test 1 props로 데이터 공유
// function MyContextTest(){
//     const insaarray= ["Hello React", "Goodbye React"]
//     return<div><InsaList insas={insaarray}/></div>
// }

// function InsaList(p){
//     return <div><InsaItem insas={p.insas}/></div>
    
// }

// function InsaItem(p){
//     return <div><h1>{p.insas[0]}</h1> <h5>{p.insas[1]}</h5></div>
// }

//test 2 context로 데이터 공유
// const InsaContext = createContext();
// function MyContextTest(){
//     const insaarray= ["Hello React", "Goodbye React"]
//     return<div>
//         <InsaContext.Provider value={insaarray}>
//         <InsaList />
//         </InsaContext.Provider>
//         </div>
// }

// function InsaList(){
//     return <div><InsaItem /></div>
    
// }

// function InsaItem(){
//     const insas = useContext(InsaContext);
//     return <div><h1>{insas[0]}</h1> <h5>{insas[1]}</h5></div>
// }

//test 3 Provider
const InsaContext = createContext();
function MyContextTest(){
    //const insaarray= ["Hello React", "Goodbye React"]
    const[insaarray, setInsas]=useState(["Hello React", "Goodbye React"]);
    const changHandler0 = function(ev){
        let newarray= [...insaarray];
        newarray[0] =ev.target.value;
        setInsas(newarray);
    }
    const changHandler1 = function(ev){
        let newarray= [...insaarray];
        newarray[1] =ev.target.value;
        setInsas(newarray);
    }
    return<div>
        <InsaContext.Provider value={insaarray}>
        <InsaList />
        </InsaContext.Provider>
        <input type="text" onChange={changHandler0} value={insaarray[0]}></input>
        <input type="text" onChange={changHandler1} value={insaarray[1]}></input>
        </div>
}

function InsaList(){
    return <div><InsaItem /></div>
    
}

function InsaItem(){
    const insas = useContext(InsaContext);
    return <div><h1>{insas[0]}</h1> <h5>{insas[1]}</h5></div>
}
export default MyContextTest;