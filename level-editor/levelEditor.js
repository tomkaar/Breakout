


var title = ""; // LevelName
var textAreaOutput = ""; // Text that will appear in the textarea.

var tableRows = 6;
var tableCol = 11;
var table = document.getElementById("data2");
var currentblock = " ";
var currentColor = "red";
var currentScore = "10";
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



// Change current block
// used to place blocks
function buttonEmpty(){
  currentblock = " ";
  currentColor = " ";
  currentScore = " ";
}
function buttonBlock(){
  currentblock = "Block";
  currentColor = "grey";
  currentScore = " ";
}
function buttonBrick(){
  currentblock = "Brick";
  currentColor = "red";
  currentScore = "10";
}




// Update title variable when typing
window.addEventListener("keyup", titleKeyUp, false);
function titleKeyUp(e) {
  let titleKey = e.keyCode;
  title = document.getElementById("form-name").value;

  // keep TextArea
	UpdateTextArea();
}

// onclick, set the current 
function dataAttributeChange(e) {
  e.setAttribute("data-block", currentblock);

  allModifs = "";

  // loop every td + print
  for (var i = 0, row; row = table.rows[i]; i++) {
     for (var j = 0, col; col = row.cells[j]; j++) {
        let thisAttribute = table.rows[i].cells[j].getAttribute('data-block');
        let thisRow = table.rows[i].cells[j].getAttribute("data-row");
        let thisCell = table.rows[i].cells[j].getAttribute("data-cell");
        
        if(thisAttribute != " "){
          if(thisAttribute == "Block"){
            allModifs += "brickTemp = new " + table.rows[i].cells[j].getAttribute('data-block') + "(tile.row(" + thisCell + "), tile.column(" + thisRow + "), brickWidth, brickHeight, \"" + currentColor + "\");\n";
            allModifs += "levelBricks.push(brickTemp);\n";
            let thisText = table.rows[i].cells[j].innerHTML = thisAttribute;
          }
          if(thisAttribute == "Brick"){
            allModifs += "brickTemp = new " + table.rows[i].cells[j].getAttribute('data-block') + "(tile.row(" + thisCell + "), tile.column(" + thisRow + "), brickWidth, brickHeight, \"" + currentColor + "\", " + currentScore + ");\n";
            allModifs += "levelBricks.push(brickTemp);\n";
            let thisText = table.rows[i].cells[j].innerHTML = thisAttribute;
          }
        } else{
          let thisText = table.rows[i].cells[j].innerHTML = thisAttribute;
        }
     }  
  }

  UpdateTextArea();
}





// Call this function to update the textarea
function UpdateTextArea(){

	// Add basics to the textAreaOutput
	textAreaOutput = "var " + title + " = new " + title + "();\r\n\r\nfunction " + title + "() {\r\n  \r\n  tc = 0;\r\n  cc = 0;\r\n  let levelBricks = [];\r\n  let brickTemp;\n\n";
	//console.log(attributes);
	
	textAreaOutput += allModifs;
	//console.log(attributes);

	textAreaOutput += "\n\n  this.draw = function() {\r\n    for (var u in levelBricks) {\r\n      levelBricks[u].draw();\r\n    }\r\n  }\r\n}";
	//console.log(textAreaOutput);

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
