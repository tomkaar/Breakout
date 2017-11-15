// Global variables
  var tableRows = 4;
  var tableCol = 11;
  var select = document.getElementById("select");
  var levelSelected = 0;

  var newLevels = levels;

  // Inputs
  var inputType = document.getElementById("inputType");
  var inputTypeSelect = document.getElementById("inputType");
  var inputColor = document.getElementById("inputColor");
  var inputLives = document.getElementById("inputLives");

  // Output
  var outputBox = document.getElementById("output");





// Change Width and Height to text instead of numbers on load
ChangeWandH();
function ChangeWandH(){
  for(var i = 0; i < newLevels.length; i++){
    for(var j = 0; j < newLevels[i].length; j++){
      newLevels[i][j][3] = "brickWidth";
      newLevels[i][j][4] = "brickHeight";
    }
  }
}





// Create table
createTable();
function createTable(){
  for (let i = 0; i < brickCol; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < brickRow; j++) {
      let cell = document.createElement("td");
        cell.setAttribute("data-row", i);
        cell.setAttribute("data-col", j);
        cell.setAttribute("data-type", " ");
        cell.addEventListener("click", dataAttributeChange);
      let cellText = document.createTextNode("");

      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}






// load levels from array and create Options that allows you to choose and switch between levels
LoadLevels();
function LoadLevels(){
  // Create options
  for(var i = 0; i < newLevels.length; i++){
    var option = document.createElement("option");
    option.text = "Level " + i;
    option.setAttribute("data-num", i);
    select.add(option);
  }
  currentlySelected();
  Print();
}







// Check which level is currently selected (updates everytime a new lvl is selected)
function currentlySelected(){
  let current = select.options[select.selectedIndex].getAttribute("data-num");
  levelSelected = current;
  drawThisLevel();
}

// Call draw function
function drawThisLevel(){
  // Reset Table (to stop level from being draw on to of a other level)
  ResetTable();
  
  // Find the selected level in the 'levels' array
  var selected = newLevels[levelSelected];

  // Loop each level and find every brick
  for(var i = 0; i < selected.length; i++){
    let currentBrick = newLevels[levelSelected][i];
    // find type ( call different functions depending on what type it is ) W.I.P
    // Use the data found in each item and call the draw function
    drawBrick(currentBrick[0], currentBrick[1], currentBrick[2], currentBrick[3], currentBrick[4], currentBrick[5], currentBrick[6], currentBrick[7]);
  }
}

// This is the function that changes/ draws the attribues on screen
function drawBrick(type, x, y, width, height, color, life){

  // Find the right location in the table
  let table = document.getElementById("table");
  let col = table.querySelector("tr:nth-child(" + (Number(y)+1) + ")");
  let cell = col.querySelector("td:nth-child(" + (Number(x)+1) + ")")

  // Style and set attributes
  cell.style.backgroundColor = color;
  cell.setAttribute("data-type", type);
  cell.setAttribute("data-lives", life);

}























// Everytime you click this will happen (used to change bricks in editor)
function dataAttributeChange() {
  // Get info from inputs
  //let currentType = inputType.value;
  let currentType = inputTypeSelect.options[inputTypeSelect.selectedIndex].value;
  let currentColor = inputColor.value;
  let currentLives = inputLives.value;



  // Set attributes to new info
  let target = event.target;
  
  target.setAttribute("data-type", currentType)
  target.setAttribute("data-lives", currentLives);

  if(currentType == "Remove"){
    target.style.backgroundColor = "transparent";
  } else{
    target.style.backgroundColor = currentColor;
  }


  // Redraw newLevels (Update newLevels Array)
  
  // Find current level
  let current = select.options[select.selectedIndex].getAttribute("data-num");
  let c = newLevels[current];
  // Reset this level (remove all items)
  c = [];

  // Build new level
  let table = document.getElementById("table");
  
  // Loop table + every cell
  for (let i = 0, row; row = table.rows[i]; i++) {
    for (let j = 0, col; col = row.cells[j]; j++) {
      // if data-type is Brick -> This is a block we can draw
      let thisBrick = table.rows[i].cells[j];
      let thisType = thisBrick.getAttribute("data-type");
      if(thisType == "Brick"){
        // Create new array (item) and push is the c
        let newBrick = [];
          let newType = thisType;
          let newRow = thisBrick.getAttribute("data-row");
          let newCol = thisBrick.getAttribute("data-col");
          let newColor = thisBrick.style.backgroundColor;
          let newLives = thisBrick.getAttribute("data-lives");

          newBrick.push(newType);
          newBrick.push(parseInt(newCol));
          newBrick.push(parseInt(newRow));
          newBrick.push("brickWidth");
          newBrick.push("brickHeight");
          newBrick.push(newColor);
          newBrick.push(parseInt(newLives));

        c.push(newBrick);
      }
    }
  }
  // Set rebuilt level (c) to newLevels
  newLevels[current] = c;

  // Print Attributes (data from Get Attributes above) (This is used to print the level editor in the text box)

  Print();

}




// Update and print to text box
function Print(){
  // Reset box
  outputBox.innerHTML = "";

  // Set base (top)
  outputBox.innerHTML += "var levels = [\n";

  // Loop 'newLevels' array -> loop each level -> Loop each brick -> Print Each brick
  for(var i = 0; i < newLevels.length; i++){
    outputBox.innerHTML += "\t[\n";
    for(var j = 0; j < newLevels[i].length; j++){
      outputBox.innerHTML += "\t\t[";

      if(newLevels[i][j][0] == "Brick"){
        outputBox.innerHTML += "\"" + newLevels[i][j][0] + "\", " + newLevels[i][j][1] + ", " + newLevels[i][j][2] + ", " + newLevels[i][j][3] + ", " + newLevels[i][j][4] + ", \"" + newLevels[i][j][5] + "\", " + newLevels[i][j][6];
      }

      outputBox.innerHTML += "],\n";
    }
    outputBox.innerHTML += "\t],\n";
  }

  // set base (bottom)
  outputBox.innerHTML += "]";
}














// Reset table
// To write a brick we check the data-type, if the data-type is not " " we know there's a brick there. 
// So to reset all we have to do is to remove the color and change the data-type to " "
// The other information (lives, score etc.) can stay as it is, when we add a new brick on that location
// That information will be updated and used

function ResetTable(){
  let table = document.getElementById("table");
  
  // Loop every cell
  for (let i = 0, row; row = table.rows[i]; i++) {
    for (let j = 0, col; col = row.cells[j]; j++) {
      // reset each cell
      table.rows[i].cells[j].style.background = "transparent";
      table.rows[i].cells[j].setAttribute("data-type", " ");
    }
  }
}

// Clear level
function ClearLevel(){
  // Clear Table
  ResetTable();
  // reset current Level array
  let current = select.options[select.selectedIndex].getAttribute("data-num");
  newLevels[current] = [];
  // Print new to update text area
  Print();
}











// Download function, save to levels.js file
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', "levels.js");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


// hide/ show editor
function showEditor(){
  document.getElementById("editor").className = "show";
}

function hideEditor(){
  document.getElementById("editor").className = "hide";
}


// Remove this level
function removeThisLevel(){
  // Find current level in newLevel Array
  let current = select.options[select.selectedIndex].getAttribute("data-num");

  // If there is more then or equal to 1 level left
  if(select.length <= 1){
    alert("You need atleast one level, try 'Clear' instead.");
  } else {
    // remove 1 item at current position (this item)
    newLevels.splice(current, 1);
  }

  

  updateBase();
}


// Create new levels
function createAfter(){
  // Find current level in newLevel Array
  let current = select.options[select.selectedIndex].getAttribute("data-num");
  let c = parseInt(current)+1;
  // Create new empty array before in 'newLevels'
  newLevels.splice(c, 0, []);

  updateBase();
}

function createBefore(){
  // Find current level in newLevel Array
  let current = select.options[select.selectedIndex].getAttribute("data-num");
  // Create new empty array before in 'newLevels'
  newLevels.splice(c, 0, []);

  updateBase();
}


function updateBase(){

  // Clear Options from select to avoid duplicates
  while (select.hasChildNodes()) {
    select.removeChild(select.lastChild);
  }

  // Run LoadLevels to update dropdown
  LoadLevels();
}
