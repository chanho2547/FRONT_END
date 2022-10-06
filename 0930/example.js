function inputVal() {
    let inputValue = document.getElementById("inputValue").value;
    inputValue = func(inputValue);
    document.getElementById("value").innerHTML = inputValue;
}

function func(str) {

    let newStr=[];
    for (let i=0 ; i<str.length ; i++) {
        if(str[i]>='a' && str[i]<='z') { newStr += str[i].toUpperCase(); }
        else { newStr += str[i].toLowerCase(); }
    }
    return newStr;
}

