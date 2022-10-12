// fetch("http://localhost:3001/comments")
//     .then((response) => response.json())
//     .then((json) => console.log(json)); //전체 데이터 조회



let isLoding = false;

if(isLoding === false){
fetch("http://localhost:3001/posts",{
        method : "POST",
        body : JSON.stringify({
            title : "리액트 공부 준비",
            author : "곰돌이 사육사"
        }),
        headers : {
            "content-type" : "application/json; charset=UTF-8",
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));  
    isLoding = true;    
}