document.getElementById("addButton").onclick = function () {
    const btn = document.createElement("button");
    btn.textContent = "動態按鈕";
    document.getElementById("container").appendChild(btn);
};
