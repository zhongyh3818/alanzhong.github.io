function multiply(num1, num2) {
    let result = num1 + num2;
    return result;
}

let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/test-image.jpeg") {
        myImage.setAttribute("src", "images/atest.jpg");
    } else {
        myImage.setAttribute("src", "images/test-image.jpeg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了, " + myName;
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    let storeName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了, " + storeName;
}

myButton.onclick = function() {
    setUserName();
}
