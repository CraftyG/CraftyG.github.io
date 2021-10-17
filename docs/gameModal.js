// Get the Modal
var modal = document.getElementById("gameModal");

// Get the button that opens the modal
var btn = document.getElementById("gameBtn");

// Get the <span> element that closes the modal
var span = document.getElementByClassName("close)[0];
                                          
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none;
}

// When ths user clicks anywhere outside the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}