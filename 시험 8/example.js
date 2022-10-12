
const el = document.getElementById('password');
const passMsg = document.getElementById("pwMsg");
el.addEventListener('click', (event) => {
    passMsg.innerHTML = "영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자&nbsp;";
});

