


var title = ""; // LevelName
var textAreaOutput = ""; // Text that will appear in the textarea.

var tableRows = 6;
var tableCol = 11;
var table = document.getElementById("table");
var currentblock = " ";
var currentColor = "red";
var currentScore = "10";
var currentX = "0";
var currentY = "0";
var inputColor = "grey";
var inputScore = "10";
var inputCurrentX = "0";
var inputCurrentY = "0";
var allModifs = "";




// create table + add empty attributes and onclick function
for (var i = 0; i < tableRows; i++) {
  // create every table row
  var row = document.createElement("tr");

  for (var j = 0; j < tableCol; j++) {
    // create new td
    var cell = document.createElement("td");
    // append tbe attributes
    cell.setAttribute("data-row", i);
    cell.setAttribute("data-cell", j);
    cell.setAttribute("data-block", " ");
    cell.setAttribute("data-color", currentColor);
    cell.setAttribute("data-score", currentScore);
    cell.setAttribute("data-speedx", inputCurrentX);
    cell.setAttribute("data-speedy", inputCurrentY);
    cell.setAttribute("onclick", "dataAttributeChange(this)");
    //var cellText = document.createTextNode("cell in row "+i+", column "+j);
    var cellText = document.createTextNode("");
    // add to propriate location
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  // add everything to table
  table.appendChild(row);
}



// Update title variable when typing
window.addEventListener("keyup", titleKeyUp, false);
function titleKeyUp(e) {
  let titleKey = e.keyCode;
  title = document.getElementById("form-name").value;
  inputColor = document.getElementById("input-color").value;
  inputScore = document.getElementById("input-score").value;
  inputCurrentX = document.getElementById("input-speedx").value;
  inputCurrentY = document.getElementById("input-speedy").value;
  currentColor = inputColor;
  currentScore = inputScore;
  currentX = inputCurrentX;
  currentY = inputCurrentY;

  // keep TextArea
  UpdateTextArea();
}



// Change current block
// used to place blocks
function buttonEmpty(){
  currentblock = " ";
  currentColor = " ";
  currentScore = " ";
  currentX = " ";
  currentY = " ";
}
function buttonBlock(){
  currentblock = "Block";
  buttonBasic();
}
function buttonBrick(){
  currentblock = "Brick";
  buttonBasic();
}
function buttonMovingBlock(){
  currentblock = "MovingBlock";
  buttonBasic();
}

function buttonBasic(){
  currentColor = inputColor;
  currentScore = inputScore;
  currentX = inputCurrentX;
  currentY = inputCurrentY;
}




// onclick, set the current 
// Load and output new text to TextOutput
function dataAttributeChange(e) {

  // set attribute on current block
  e.setAttribute("data-block", currentblock);
  e.setAttribute("data-color", currentColor);
  e.setAttribute("data-score", currentScore);
  e.setAttribute("data-speedx", currentX);
  e.setAttribute("data-speedy", currentY);

  allModifs = "";

  // loop every td + print to textArea
  for (var i = 0, row; row = table.rows[i]; i++) {
     for (var j = 0, col; col = row.cells[j]; j++) {
        let thisAttribute = table.rows[i].cells[j].getAttribute('data-block');
        let thisRow = table.rows[i].cells[j].getAttribute("data-row");
        let thisCell = table.rows[i].cells[j].getAttribute("data-cell");
        let thisColor = table.rows[i].cells[j].getAttribute("data-color");
        let thisScore = table.rows[i].cells[j].getAttribute("data-score");
        let thisX = table.rows[i].cells[j].getAttribute("data-speedx");
        let thisY = table.rows[i].cells[j].getAttribute("data-speedy");
        

          if(thisAttribute == " "){
            table.rows[i].cells[j].innerHTML = thisAttribute;
            table.rows[i].cells[j].style.backgroundColor = "transparent";
          }
          else if(thisAttribute == "Block"){
            allModifs += "brickTemp = new " + table.rows[i].cells[j].getAttribute('data-block') + "(tile.row(" + thisCell + "), tile.column(" + thisRow + "), brickWidth, brickHeight, \"" + thisColor + "\");\n";
            allModifs += "levelBricks.push(brickTemp);\n";
            table.rows[i].cells[j].innerHTML = thisAttribute;
            table.rows[i].cells[j].style.backgroundColor = thisColor;
          }
          else if(thisAttribute == "Brick"){
            allModifs += "brickTemp = new " + table.rows[i].cells[j].getAttribute('data-block') + "(tile.row(" + thisCell + "), tile.column(" + thisRow + "), brickWidth, brickHeight, \"" + thisColor + "\", " + thisScore + ");\n";
            allModifs += "levelBricks.push(brickTemp);\n";
            table.rows[i].cells[j].innerHTML = thisAttribute;
            table.rows[i].cells[j].style.backgroundColor = thisColor;
          }
          else if(thisAttribute == "MovingBlock"){
            allModifs += "brickTemp = new " + table.rows[i].cells[j].getAttribute('data-block') + "(tile.row(" + thisCell + "), tile.column(" + thisRow + "), brickWidth, brickHeight, \"" + thisColor + "\", " + thisScore + ", " + thisX +", " + thisY + ");\n";
            allModifs += "levelBricks.push(brickTemp);\n";
            table.rows[i].cells[j].innerHTML = thisAttribute;
            table.rows[i].cells[j].style.backgroundColor = thisColor;
          }
          else{
            table.rows[i].cells[j].innerHTML = thisAttribute;
            //table.rows[i].cells[j].style.backgroundColor = "transparent";
          }
     }  
  }

  UpdateTextArea();
}





// Call this function to update the textarea
function UpdateTextArea(){

	// Add basics to the textAreaOutput
	textAreaOutput = "var " + title + " = new " + title + "();\r\n\r\nfunction " + title + "() {\r\n  \r\n  tc = 0;\r\n  cc = 0;\r\n  let levelBricks = [];\r\n  let brickTemp;\n\n";
	textAreaOutput += allModifs;
	textAreaOutput += "\n\n  this.draw = function() {\r\n    for (var u in levelBricks) {\r\n      levelBricks[u].draw();\r\n    }\r\n  }\r\n}";
	// Add text to TextArea
	document.getElementById('text-output').innerHTML = textAreaOutput;
}








// Download function
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename + ".js");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}



