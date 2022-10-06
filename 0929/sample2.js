let cnt = 0;

while(1) {

    let inputValue;
    if(cnt==0){inputValue = prompt("주민등록번호를 입력 하세요");}
    else {inputValue = prompt("주민등록번호를 잘못 입력하셨습니다. 다시 입력 하세요");}

    inputValue.replace(" ","");

    let gender;
    let genderText;
    if (inputValue.indexOf('-')) {  // 하이픈이 있는경우
        if(inputValue.length != 14) {
            cnt++;
            continue;
        }
        gender = inputValue.substring(7,8);
    }
    else {
        if(inputValue.length != 13) {
            cnt++;
            continue;
        }
        gender = inputValue.substring(6,7);
    }


    const date = new Date();
    let birth;
    let year = inputValue.substring(0,2);
    let month = Number(inputValue.substring(2,4)) ;
    let day = inputValue.substring(4,6);

    if(gender==1 || gender==3) {
        
        genderText = "남성";
    }
    else if(gender==2 || gender==4){
        genderText = "여성";
    }

    if(gender==1 || gender==2) {
        birth = new Date(Number(19+year), month - 1, day); // month는 인덱스 0이 1월
    }
    else {
        birth = new Date(Number(20+year), month - 1, day);
    }


    let age = date.getFullYear() - birth.getFullYear();
    if(date.getMonth() - birth.getMonth() < 0 || date.getMonth() - birth.getMonth() == 0 && date.getDate() > birth.getDate()) { 
        age--;
    }

    if (genderText==="남성") {
    document.write(`<h1 id="men">성별은 <b class="men">${genderText}</b>이고, 현재 만 나이는 <b class="men">${age}</b> 입니다</h1>`);
    document.write(`<img src="./남자로고.jpg">`);
    }
    else {
    document.write(`<h1 id="women">성별은 <b class="women">${genderText}</b>이고, 현재 만 나이는 <b class="women">${age}</b>입니다</h1>`);
    document.write(`<img src="./여자로고.jpg">`);
    }

    //document.write(`<h1>성별은 ${genderText}이고, 현재 만 나이는 ${age} 입니다</h1>`);

    break;
}