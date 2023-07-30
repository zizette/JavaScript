
// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("openBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    // for (i = 0; i < x.length; i++) {
    text  = x.elements[0].value;
    // alert(i + " : " + text);
    document.querySelector("#modalTitle").innerHTML = text;
    // document.getElementById("modalTitle").innerHTML = text;
}
function myClear() {
   x=document.getElementById("frm1");
   x.elements[0].value="";
    var text="";
    document.querySelector("#modalTitle").innerHTML = "Reseted Title";

}



