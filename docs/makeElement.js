
function myFunction() {
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);
}

// creating a div element
function createDiv () {
 var eDiv = document.createElement("Div");
  eDiv.id = "divID";

// Styling It
  eDiv.style.textAlign = "center";
  eDiv.style.fontWeight = "bold";
  eDiv.style.fontSize = "smaller";
  eDiv.style.paddingTop = "15px";
 // Adds paragraph
  var paragraph = document.createElement("p");
  var text = document.createtextCode("A Styled Paragraph!!!");
  paragraph.appendChild(text);
  eDiv.appendChild(paragraph);
}
