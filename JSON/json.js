// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => response.json())
// .then((json) => console.log(json)); 

// 데이터 생성
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method : "POST",
//     body : JSON.stringify({
//         title : "JSON Test",
//         body : "JSON과 비동기 통신에 대해서 연습해 봅시다",
//         userId : 1
//     }),
//     headers : {
//         "content-type" : "application/json; charset=UTF-8"
//     }
// })
// .then((rsp) => rsp.json())
// .then((json)=> console.log(json));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {

//     method : "PUT",
//     body : JSON.stringify({
//         id : 1,
//         title : "Feth API test",
//         userId : 1
//     }),
//     headers : {
//         "Content-type" : "application/json; charset=UTF-8"
//     }
    
// })
// .then((rsp) => rsp.json())
// .then((json)=> console.log(json));
fetch("http://localhost:3000/comments")
    .then((response) => response.json())
    .then((json) => console.log(json)); //전체 데이터 조회

fetch("http://localhost:3000/comments/1")
    .then((response) => response.json())
    .then((json) => console.log(json)); //id로 조회

fetch("http://localhost:3000/comments?postId=1")
    .then((response) => response.json())
    .then((json) => console.log(json)); //query로 postId=1로 조회















