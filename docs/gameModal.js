
var datamap = new Map([
  [document.getElementById("gameBtn"), document.getElementById("gameModal")],
  [document.getElementById("gameBtn2"), document.getElementById("gameModal2")]
]);

datamap.forEach((value key) => {
  doModal(key, value);
});

function doModal(anchor, popupbox) {
  var span = popupbox.getElementsByClassName("close")[0];
  
  anchor.addEventListener("click", function (event) {
    popupbox.style.display = "block";
  });
  
   span.addEventListener("click", function (event) {
   popupbox.style.display = "none";
 });
 
   window.addEventListener("click", function (event) {
    if (event.target == popupbox) {
     popupbox.style.display = "none";
      }
  });
}
