function ForTest() {
    let weekdayarray = ['월','화','수','목','금','토','일'];

    // weekdayarray.forEach() 실행결과를 모아서 리턴x
    // jquery-each(function(index, item){})

    //첫번쨰 방법
    // let map1 = weekdayarray.map(function (data,index) {
    //    //alert(index + "번째의 데이터 ="+data + "요일");
    //    return <h3> {index}번째의 데이터 ={data}요일</h3>;
    // });//실행결과를 모아서 리턴o

    // return <div>{map1}</div>;

    //2번쨰 방법
    // let forEach1;
    // weekdayarray.forEach(function (data,index){
    //     forEach1.push(<h3> {index}번째의 데이터 ={data}요일</h3>);
    // });

    // 3번째 방법 미리 반복 결과 리턴 함수 구현
    // const array_loop = function(){
    //     let result = [];
    //     for (let i = 0; i < weekdayarray.length; i++) {
    //         result.push(<h3> {i}번째의 데이터 ={weekdayarray[i]}요일</h3>); //jsx
            
    //     }
    //     return result;
    // };
    // return <div>{array_loop()}</div>;

    let num_array=[34,56,67,77,13,17,68,99,100,6,7];
    //34- 짝수이다
    //56- 짝수이다
    //77- 홀수이다 .... 모든 값 구현
    // let hz =  num_array.map(function (d,i){
        
    //     if(d % 2 == 0){
    //         return <h3>{d}=짝수입니다.</h3>
    //     }
    //     else{
    //         return <h3>{d}=홀수입니다.</h3>
    //     }
    // });
    // return <div>{hz}</div>;
   
    //답지1
     let result1 = num_array.map(function(data,index){
         return <h3>{data} - {data % 2 ==0? '짝수입니다' : '홀수입니다'}</h3>
     });
    // return <div>{result1}</div>;

    //답지2
    let array_loop = function(){
        let result2 = [];
        for (let i = 0; i < num_array.length; i++) {
            result2.push(<h3>{num_array[i]} - {num_array[i] % 2 ==0? '짝수입니다' : '홀수입니다'}</h3>);   
        }
        return result2;
    }
    return <div><h3>map 함수이용반복</h3>{result1}<hr/><h3>반복문 이용한 함수호출결과</h3>{array_loop}</div>;
}
export default ForTest;