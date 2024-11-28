import styled from "styled-components";

//스타일드, 컨텍스트 - 함수외부. // export 쓰면 다른곳에도 쓸 수 있다.
export const StyledButton = styled.button`
    color: ${(p)=> p.color || 'black' };
    background : ${(p)=>p.background || 'white'};
    border : 1px solid red;
`;
const StyledButton2 = styled(StyledButton)`
    width:100px;
    height:100px;
`;
const StyledImage = styled.img`
    background : silver;
    border : 3px solid red;
    width : 100px;
    height : 100px;
    padding : 20px;  //내부여백
    border-radius : 10px; //모서리 깎기
`;

function MyButton(p){
    return  <div>
        <button>그냥{p.children}</button>
    <StyledButton color={p.color} background={p.background}>스타일드{p.children}</StyledButton>
    <StyledImage src="http://localhost:4000/logo192.png"/>
    <StyledButton2 color={p.color} background={p.background}>스타일드2{p.children}</StyledButton2>
    </div>
}

export default MyButton;