let value = prompt("입력 하세요");
let str = value.split(" ");
let sum = Math.min(str[0],str[1],str[2]) + Math.min(str[3],str[4]) - 50;


document.write("<h1>가장 싼 세트메뉴의 가격 : " + sum + "</h1>")

document.write(`<p>가장 저렴한 버거 : ${Math.min(str[0],str[1],str[2])}</p>`);
document.write(`<p>가장 저렴한 음료 : ${Math.min(str[3],str[4])} </p> `)
document.write(`<p> *할인 50원 적용*</p> `)

document.write(`<img src="/0929/logo.jpeg" width="270px">`)