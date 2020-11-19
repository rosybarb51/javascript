function over2(obj) {
    obj.src = "./images/cat02.jpg"
}

function out2(obj) {
    obj.src = "./images/cat03.jpg"
}


// function은 동작할 일을 정해놓은 것. 위에 보면 우리가
// 만들어놓은 fuction인 over2나 out2가 있다. 저런식으로 만들어서 
// 밑에처럼 사용하면된다.
var img4 = document.getElementById("img4");
img4.addEventListener("mouseover", over3);
img4.addEventListener("mouseout", out3);

function over3(obj) {
    obj.src = "./images/cat02.jpg";
}

function out3(obj) {
    obj.src = "./images/cat03.jpg";
}