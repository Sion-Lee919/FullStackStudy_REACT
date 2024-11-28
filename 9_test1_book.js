const Book = function(p){//index.js props전달 (p.t, p.body, p.price, p.author)
    return <div>
    <h1>{p.children}</h1>
    <HeaderPart t={p.t}/>
    <BodyPart body={p.body}/>
    <FooterPart author={p.author} price={p.price}/>
    </div>
}

const HeaderPart = function(p){
    //props의 t변수값을 빨강색 배경으로, 흰색 글씨로 렌더한다. 글씨크기는 32px로 한다. 
    let headerstyle = {color : "white", backgroundColor:"red", fontSize:"32px"};
    return <div style ={headerstyle}>{p.t}</div>;
}

const BodyPart =function(p){
    //props의 body 변수값을 파랑색 박스에 중앙정렬하여 h3 태그로 렌더한다. 
    return <h3 style={{border:"2px solid blue", textAlign:"center"}}>{p.body}</h3>
}

const FooterPart =function(p){
    //props의 author, price 변수값을 초록색 박스에 중앙정렬하여 렌더한다. 글씨크기는 15px로 한다.
    return <div>저자 {p.author} 가격 {p.price}</div>
}

export default Book;