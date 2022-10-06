function newRegister() {
    let newItem = document.createElement("li");
    let subject = document.querySelector("#subject");
    let newText = document.createTextNode(subject.value); // 텍스트 필드의 값으로 텍스트 노드 만들기
    newItem.appendChild(newText);

    let itemList = document.querySelector("#itemList");
    itemList.insertBefore(newItem, itemList.childNodes[0]);

    subject.value = "";
    let items = document.querySelectorAll("li");
    for (i=0 ; i<items.length ; i++) {
        items[i].addEventListener("click",function(){
            if(this.parentNode) {
                this.parentNode.removeChild(this);
            }
        });

    }

}