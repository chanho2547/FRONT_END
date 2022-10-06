// let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];

// for (let i=0 ; i<brands.length ; i++) {
//     console.log(brands[i]);
// }

// let person = {
//     fname : "찬호",
//     lname : "정",
//     age : 24
// };



// for (let key in person) {
//    console.log(`${key}의 값은 ${person[key]}`);       // Object key에 해당하는 값을 출력
// }

// //for - of

// console.log("----------------------------");

// for (let e of brands) {
//     console.log(e);
// }


// console.log("----------------------------");
// let lang = "Javascript";
// for (let e of lang)  {
//     console.log(e);
// }


// for (let i=2 ; i<10 ; i++) {
//     document.write("<table>");
//     document.write("<tr><th>" + i + "단</th></tr>" );

//     for(j=1 ; j<10 ; j++) {
//         document.write("<tr><td>" + i + " x " + j + " = " + i*j + "</td></tr>");
//     }




//     document.write("</table>");

// }

let treeHit = 0;
while(treeHit<10) {
    treeHit++;
    document.write("<p>나무를 " + treeHit + "번 찍었습니다</p>");
    if(treeHit == 10) {
        document.write("<h2>나무가 넘어 갑니다</h2>");
    }
}
























