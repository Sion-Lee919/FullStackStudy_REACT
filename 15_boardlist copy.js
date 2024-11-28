// 1. React의 useState 훅 임포트
import { useState } from "react";

// 2. 큰 틀인 Boardlist 컴포넌트 정의 (전체 구조 및 레이아웃 잡기)
function Boardlist(props) {
    const boardarray = [  // 초기 게시글 데이터 설정
        { seq: 1, title: "제목1", writer: "작성자1" },
        { seq: 2, title: "제목2", writer: "작성자2" },
        { seq: 3, title: "제목3", writer: "작성자3" },
        { seq: 4, title: "제목4", writer: "작성자4" },
        { seq: 5, title: "제목5", writer: "작성자5" }
    ];
    const [board, setBoard] = useState(boardarray);  // 게시글 상태 관리

    // 3. 전체 레이아웃과 하위 컴포넌트 배치 (헤더, 리스트, 추가 폼)
    return (
        <div style={{ width: "600px", margin: "auto" }}>
            <h1>{props.Pagetitle}</h1>
            <table border="3">
                <BoardHeading seq="번호" title="제목" writer="작성자" />
                <Board board={board} setBoard={setBoard} />
            </table>
            <BoardForm board={board} setBoard={setBoard} />
        </div>
    );
}

// 4. BoardHeading 컴포넌트 작성 (테이블 헤더 정의)
function BoardHeading(p) {
    return (
        <thead>
            <tr>
                <th>{p.seq}</th>
                <th>{p.title}</th>
                <th>{p.writer}</th>
                <th>추가동작 (수정/삭제)</th>
            </tr>
        </thead>
    );
}

// 5. Board 컴포넌트 작성 (게시글 목록과 수정/삭제 기능 구현)
function Board({ board, setBoard }) {
    const [update, setUpdate] = useState({
        isUpdateClick: false,
        updateSeq: 0,
        updateTitle: '',
        updateWriter: ''
    });

    // 5.1 삭제 기능 구현 (삭제 버튼 클릭 시 처리)
    const deleteBoard = (seq) => {
        setBoard(board.filter(item => item.seq != seq));
    };

    // 5.2 수정 모드 활성화 (수정 버튼 클릭 시 처리)
    const activateUpdate = (seq) => {
        setUpdate({ isUpdateClick: true, updateSeq: seq, updateTitle: '', updateWriter: '' });
    };

    // 5.3 수정 중인 제목과 작성자 상태 업데이트
    const changeTitle = (e) => setUpdate({ ...update, updateTitle: e.target.value });
    const changeWriter = (e) => setUpdate({ ...update, updateWriter: e.target.value });

    // 5.4 수정 완료 처리 (수정 완료 버튼 클릭 시 처리)
    const completeUpdate = () => {
        setBoard(board.map(item =>
            item.seq == update.updateSeq
                ? { ...item, title: update.updateTitle, writer: update.updateWriter }
                : item
        ));
        setUpdate({ isUpdateClick: false, updateSeq: 0, updateTitle: '', updateWriter: '' });
    };

    // 5.5 게시글 리스트 렌더링
    return (
        <tbody>
            {board.map((item) => (
                <tr key={item.seq}>
                    <td>{item.seq}</td>
                    <td>{item.title}</td>
                    <td>{item.writer}</td>
                    {update.isUpdateClick && update.updateSeq == item.seq ? (
                        <td>
                            <input type="text" value={update.updateTitle} onChange={changeTitle} />
                            <input type="text" value={update.updateWriter} onChange={changeWriter} />
                            <button onClick={completeUpdate}>수정완료</button>
                        </td>
                    ) : (
                        <td>
                            <button onClick={() => activateUpdate(item.seq)}>수정</button>
                            <button onClick={() => deleteBoard(item.seq)}>삭제</button>
                        </td>
                    )}
                </tr>
            ))}
        </tbody>
    );
}

// 6. BoardForm 컴포넌트 작성 (게시글 추가 폼 구현)
function BoardForm({ board, setBoard }) {
    const [title, setTitle] = useState("제목초기값");
    const [writer, setWriter] = useState("작성자초기값");

    // 6.1 입력 필드 상태 업데이트
    const changeTitle = (e) => setTitle(e.target.value);
    const changeWriter = (e) => setWriter(e.target.value);

    // 6.2 게시글 추가 처리
    const addBoard = () => {
        const newBoard = {
            seq: board.length ? board[board.length - 1].seq + 1 : 1,
            title,
            writer
        };
        setBoard([...board, newBoard]);
    };

    // 6.3 게시글 추가 폼 렌더링
    return (
        <div>
            <hr />
            <fieldset>
                <label htmlFor="name">이름 :</label>
                <input type="text" id="name" value={title} onChange={changeTitle} />
                <label htmlFor="name2">게시물작성자 :</label>
                <input type="text" id="name2" value={writer} onChange={changeWriter} />
                <br />
                <button onClick={addBoard}>게시물추가</button>
            </fieldset>
        </div>
    );
}

// 7. Boardlist 컴포넌트 내보내기
export default Boardlist;
