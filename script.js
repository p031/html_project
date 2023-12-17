var txt = document.getElementById("input").value;
document.getElementById("button").onclick = function () { 
    let sv = document.getElementById("input").value;
    let ot = document.getElementById("out");
    
    ot.innerHTML = '<input type=checkbox> '+sv;
};

document.getElementById("del").onclick = function () {
    var del_out = document.getElementById("out")
    var del_input = document.getElementById("input")
    del_input.value = "";
    del_out.remove();
};

/*function enterkey() {
if (window.event.keyCode == 13) {
var sv = document.getElementById("input").value;
var ot = document.getElementById("out");
ot.innerHTML = "- "+sv;
  }
}*/
