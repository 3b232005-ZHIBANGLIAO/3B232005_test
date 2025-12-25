var sum=function(a,b){
    return a+b
};

//alert(sum(10,20));
//window.alert(sum(10,20));

//自訂義 function
//將資料存放於Console(開發人員主控台)裡面，Log紀錄
function greet(){
    const name = document.getElementById("userName").value;
    console.log(name);
}
//標準function製作
function greetUser(){
    const name = document.getElementById("userName").value;
    document.getElementById("resultUser").textContent = name + "您好!";
}

//模組化 function：函式分工、模組化設計、利於擴充
function greetUserName(){
    const name = document.getElementById("userName").value;
    //呼叫執行事件函式
    showMessage(name);
}

function showMessage(name){
    document.getElementById("resultUser").textContent = name + "您好!";
}