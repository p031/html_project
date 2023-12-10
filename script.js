var txt = document.getElementById("input").value;
document.getElementById("button").onclick = function () { 
  let sv = document.getElementById("input").value;
  let ot = document.getElementById("out");
  ot.innerHTML = '<input type=checkbox> '+sv;
  var clean = document.getElementById("input")
  clean.value = "";
};
/*function enterkey() {
if (window.event.keyCode == 13) {
var sv = document.getElementById("input").value;
var ot = document.getElementById("out");
ot.innerHTML = "- "+sv;
  }
}*/
