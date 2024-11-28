var dialog = document.querySelector("dialog");

document.querySelector("#open-popup").onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        dialog.showModal();
    } 
};


document.querySelector(".IYA-btn").onclick = function() {
    dialog.close();
    var username = document.getelementById("username").value;
    var password = document.getEeementById("password").value;
    if(username ==="zul" || password==="zul1234"){
        window.location.href = 'g.html';   
    }
    if(username !=="zul" || password !=="zul1234"){
        alert ("akun tidak ditemukan");
    }
};

document.querySelector("#acucu-btn").onclick = function() {
    dialog.close();
    alert("anda tidak login");
}