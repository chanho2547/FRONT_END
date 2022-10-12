
const id = document.getElementById('id');
const password = document.getElementById('password');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const idBtn = document.getElementById('idBtn');
const pwdBtn = document.getElementById('pwdBtn');
const emailBtn = document.getElementById('emailBtn');
const phBtn= document.getElementById('phBtn');



function pushIdBtn() {
    console.log("good");
    let regEx = /.{8,20}/;
    if(regEx.test(id.value) === false) {
        idMsg.style.color = "red";
        document.getElementById('idMsg').innerText = "대문자, 소문자, 숫자 포함 8자 이상 20자리 이하";

    }
    else  {
        idMsg.style.color = "blue";
        document.getElementById('idMsg').innerText = "생성 가능합니다";
    }
}
function pushPwdBtn() {
    let regEx = /.{8,20}/;
    if(regEx.test(id.value) === false) {
        pwdMsg.style.color = "red";
        document.getElementById('pwdMsg').innerText = "대문자, 소문자, 특수문자, 숫자 포함 8자리 ~ 20자리";
    }
    else  {
        pwdMsg.style.color = "blue";
        document.getElementById('pwdMsg').innerText = "생성 가능합니다";
    }
}
function pushEmailBtn() {
    let regEx = /'@'/;
    if(regEx.test(id.value) === false) {
        emailMsg.style.color = "red";
        document.getElementById('emailMsg').innerText = "이메일 형식이 아닙니다";
    }
    else  {
        emailMsg.style.color = "blue";
        document.getElementById('emailMsg').innerText = "생성 가능합니다";
    }
}
function pushPhBtn() {
    let regEx = /.{8,20}/;
    if(regEx.test(id.value) === false) {
        phMsg.style.color = "red";
        document.getElementById('phMsg').innerText = "8자 이상 20자 이하로 생성가능";
    }
    else  {
        phMsg.style.color = "blue";
        document.getElementById('phMsg').innerText = "생성 가능합니다";
    }
}

function test() {
    console.log("onclick에 함수연결 성공");
}

function join () {
     pushIdBtn();
     pushPwdBtn();
     pushEmailBtn();
     pushPhBtn();
}


