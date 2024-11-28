import { useState } from "react";

function Boardlist(props){
    
    const boardarray = [
        {seq : 1, title : "제목1", writer : "작성자1"},
        {seq : 2, title : "제목2", writer : "작성자2"},
        {seq : 3, title : "제목3", writer : "작성자3"},
        {seq : 4, title : "제목4", writer : "작성자4"},
        {seq : 5, title : "제목5", writer : "작성자5"}
    ];

    const[board,setBoard] = useState(boardarray);

    const addBoard = function(oneboard){
        let newboard = [...board];
        newboard.push(oneboard);
        setBoard(newboard);
    };

    //삭제 함수
    const deleteBoard = function(seq){
        //방법 1
        //  for (let i = 0; i < board.length; i++) {
        //      //반복중인 게시물의 번호와 매개변수 seq일치하는 게시물을 찾으면 그 게시물을 삭제
        //      if(board[i].seq==seq){let newboard = [...board]; newboard.splice(i, 1);//배열 1개 삭제-화면 렌더링이전
        //      //board 게시물(삭제이후)을 setBoard 메소드로 전달
        //      setBoard(newboard);//화면 랜더링이후 반형
        //      }
        //  }
        //방법2
        let filterdboard = board.filter(function(oneboard){return oneboard.seq != seq});
        setBoard(filterdboard);
    };

    //수정함수
    const updatetx = function(updateboard){
        //방법1
        // let newboard=[...board];
        // for(let i=0; i < board.length; i++){
        //     if(newboard[i].seq == updateboard.seq){
        //         newboard[i]=updateboard;
        //     }
        // }
        //방법2
        let newboard = board.map(function(data,index){
            return data.seq == updateboard.seq? updateboard : data;
        });
        setBoard(newboard);        
    }

    return <div style={{width:"600px",margin:"auto"}}>
        <h1>{props.Pagetitle}</h1>
        <table border="3">
        <BoardHeading seq={props.seq} title={props.title} writer={props.writer}/>
        <Board board ={board} deleteBoard={deleteBoard} updatetx={updatetx}/>
        </table>
        <BoardForm board ={board} addBoard={addBoard}/>
    </div>
}



function BoardHeading(p){
 return <thead>
 <tr>
     <th>{p.seq}</th>
     <th>{p.title}</th>
   <th>{p.writer}</th>
   <th>추가동작(수정/삭제)</th>
 </tr>
 </thead>
}

function Board(p){
    
    const [update, setUpdate] = useState({
        isUpdateClick:false,
        updateSeq:0,
        updateTitle:'',
        updateWriter:''
    });

    const deleteBoard_child = function(ev){
        //삭제버튼 클릭시 id 값 전달받아 props deleteboard(게시물 번호) 메소드 호출
        p.deleteBoard(ev.target.id);
    }
    
    const updateBoard_child = function(e){
        
        setUpdate({isUpdateClick:true, updateSeq:e.target.id, updateTitle:'', updateWriter:''}); //수정폼/수정완료 보이기
    }

    const changeTitle = function(ev){
        setUpdate({...update, updateTitle:ev.target.value});
    }
    const changeWriter = function(ev){
        setUpdate({...update, updateWriter:ev.target.value});
    }

    const updateDone_child = function(e){
        p.updatetx({seq:e.target.id, title:update.updateTitle, writer:update.updateWriter});//수정 겜시물 전송
        setUpdate({...update, isUpdateClick:false}); // 수정완료버튼 없애고 수정과 삭제버튼 보이기
    }

//board에 전달받은 배열 tr,td 출력
    let board_map = p.board.map(function(data,index){
       return <tr key={data.seq}>
        <td>{data.seq}</td>
        <td>{data.title}</td>
        <td>{data.writer}</td>
        {update.isUpdateClick == true && data.seq == update.updateSeq
        ?
            <td>
            <input type="text" value={update.updateTitle} onChange={changeTitle}/>
            <input type="text" value={update.updateWriter} onChange={changeWriter}/>
            <button onClick={updateDone_child} id={data.seq}>수정완료</button>
            </td>
            :
            <td>
            <button onClick={updateBoard_child} id={data.seq}>수정</button>
            <button onClick={deleteBoard_child} id={data.seq}>삭제</button>
            </td>
            }
        </tr>
    });
    return <tbody>{board_map}</tbody>
}

function BoardForm(props){
    const[title,setTitle] = useState("제목초기값")
    const[writer,setWriter] = useState("작성자초기값")

    const changeTitle = function(ev){
        setTitle(ev.target.value);
    }
    const changeWriter = function(ev){
        setWriter(ev.target.value)
    }
    const addBoard_child = function(){
        props.addBoard({seq : props.board[props.board.length - 1].seq+1, title: title, writer: writer});
        
    }
    //form 제목 , 제목입력 input ,작성자 , 작성자 입력input, 게시물 추가버튼
    return <div>
        <hr/>
        <fieldset>
        <label for ="name">이름 :</label><input type="text" id="name" value={title} onChange={changeTitle}></input>
        <label for ="name2">게시물작성자 :</label><input type="text" id="name2" value={writer} onChange={changeWriter}></input><br/>
        <button onClick={addBoard_child}>게시물추가</button>
        </fieldset>
        
    </div>
}

export default Boardlist;