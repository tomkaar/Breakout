// Global variables
  var tableRows = 4;
  var tableCol = 11;
  var select = document.getElementById("select");
  var levelSelected = 0;
  var newLevels = levels;

  var instructions = document.getElementById("howTo");

  // Inputs
  var inputType = document.getElementById("inputType");

  // Input Types
  var inputColor = document.getElementById("inputColor");
  var inputLives = document.getElementById("inputLives");

  // Input Types wrap
  var inputColorWrap = document.getElementById("inputColorWrap");
  var inputLivesWrap = document.getElementById("inputLivesWrap");

  // Output
  var outputBox = document.getElementById("output");





// Change Width and Height to text instead of numbers on load
ChangeWandH();
function ChangeWandH(){
  for(var i = 0; i < newLevels.length; i++){
    for(var j = 0; j < newLevels[i].length; j++){
      if(newLevels[i][j][0] == "Brick" || newLevels[i][j][0] == "Block"){
        newLevels[i][j][3] = "brickWidth";
        newLevels[i][j][4] = "brickHeight";
      }
      if(newLevels[i][j][0] == "BrickMoving"){
        newLevels[i][j][4] = "brickWidth";
        newLevels[i][j][5] = "brickHeight";
      }
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
LoadLevels(0);
function LoadLevels(c){
  // Create options
  for(var i = 0; i < newLevels.length; i++){
    var option = document.createElement("option");
    option.text = "Level " + i;
    option.setAttribute("data-num", i);
    select.add(option);
  }
  // Set levels
  select.selectedIndex = c;
  // Set selected + Update print in textbpx
  currentlySelected();
  Print();
}


// Currently selected -> Inputs show
function currentBlockType(){
  // hide all inputs
  inputColorWrap.style.display = "none";
  inputLivesWrap.style.display = "none";

  // get inputType
  let current = inputType.options[inputType.selectedIndex].innerHTML;

  // if type == "this" -> show these inputs
  if(current == "Block"){
    inputColorWrap.style.display = "block";
  }
  if(current == "Brick"){
    inputColorWrap.style.display = "block";
    inputLivesWrap.style.display = "block";
  }
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
    if(currentBrick[0] == "Block"){
      drawBlock(currentBrick[0], currentBrick[1], currentBrick[2], currentBrick[3], currentBrick[4], currentBrick[5], currentBrick[6]);
    }
    if(currentBrick[0] == "Brick"){
      drawBrick(currentBrick[0], currentBrick[1], currentBrick[2], currentBrick[3], currentBrick[4], currentBrick[5], currentBrick[6], currentBrick[7]);
    }
  }
}


// Put his function directly in drawThisLevel function OR
// OR
// connect other functions to this function??

// This is the function that changes/ draws the attribues on screen
function drawBrick(type, x, y, width, height, color, life){
  // Find the right location in the table
  let table = document.getElementById("table");
  let col = table.querySelector("tr:nth-child(" + (Number(y)+1) + ")");
  let cell = col.querySelector("td:nth-child(" + (Number(x)+1) + ")")

  // Style and set attributes
  cell.style.backgroundColor = color;
  cell.innerHTML = type;
  cell.setAttribute("data-type", type);
  cell.setAttribute("data-lives", life);

  // create tooltip
  BrickTooltip(cell, type, color, life);
}
function drawBlock(type, x, y, width, height, color){
  // Find the right location in the table
  let table = document.getElementById("table");
  let col = table.querySelector("tr:nth-child(" + (Number(y)+1) + ")");
  let cell = col.querySelector("td:nth-child(" + (Number(x)+1) + ")")

  // Style and set attributes
  cell.style.backgroundColor = color;
  cell.innerHTML = type;
  cell.setAttribute("data-type", type);

  // create tooltip
  BlockTooltip(cell, type, color);
}























// Everytime you click on a cell in the table this will run
function dataAttributeChange() {

  // You can not place a block if "ok" is not true
  let ok = true;

  // Get info from all inputs
  let currentType = inputType.options[inputType.selectedIndex].value;
  let currentColor = inputColor.value;
  let currentLives = inputLives.value;

    // if one or more inputs are empty or only contains a space
    if(currentType == "Brick"){
      if(currentColor == "" || currentColor == " " || currentLives == "" || currentLives == " "){
        alert("One or more fields are empty.");
        ok = false;
      }
    }
    if(currentType == "Block"){
      if(currentColor == "" || currentColor == " "){
        alert("One or more fields are empty.");
        ok = false;
      }
    }
    if(isNaN(currentLives) != false){
      alert("Lives is NotaNumber");
      ok = false;
    }

  if(ok){
    // Set attributes to new info
    let target = event.target;

    target.setAttribute("data-type", currentType)
    target.setAttribute("data-lives", currentLives);

    if(currentType == "Remove"){
      target.style.backgroundColor = "transparent";
      // removes text & Tooltip
      target.innerHTML = "";
    }
    else if(currentType == "Brick"){
      target.style.backgroundColor = currentColor;
      target.innerHTML = currentType;
      // Create tooltip
      BrickTooltip(target, currentType, currentColor, currentLives);
    }
    else if(currentType == "Block"){
      target.style.backgroundColor = currentColor;
      target.innerHTML = currentType;
      // Create tooltip
      BlockTooltip(target, currentType, currentColor, currentLives);
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
          if(thisType == "Block"){
            // Create new array (item) and push is the c
            let newBrick = [];
              let newType = thisType;
              let newRow = thisBrick.getAttribute("data-row");
              let newCol = thisBrick.getAttribute("data-col");
              let newColor = thisBrick.style.backgroundColor;

              newBrick.push(newType);
              newBrick.push(parseInt(newCol));
              newBrick.push(parseInt(newRow));
              newBrick.push("brickWidth");
              newBrick.push("brickHeight");
              newBrick.push(newColor);

            c.push(newBrick);
          }
        }
      }
      // Set rebuilt level (c) to newLevels
      newLevels[current] = c;

    // Update Print
    Print();
  }
}




// Update and print to text box, based on newLevels array
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
      if(newLevels[i][j][0] == "Block"){
        outputBox.innerHTML += "\"" + newLevels[i][j][0] + "\", " + newLevels[i][j][1] + ", " + newLevels[i][j][2] + ", " + newLevels[i][j][3] + ", " + newLevels[i][j][4] + ", \"" + newLevels[i][j][5] + "\"";
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
// So to reset everything we have to do is to remove the color and change the data-type to " "
// The other information (lives, score etc.) can stay as it is, when we add a new brick on that location
// said information will be updated and used

function ResetTable(){
  let table = document.getElementById("table");

  // Loop every cell
  for (let i = 0, row; row = table.rows[i]; i++) {
    for (let j = 0, col; col = row.cells[j]; j++) {
      // reset each cell
      table.rows[i].cells[j].style.background = "transparent";
      table.rows[i].cells[j].setAttribute("data-type", " ");
      table.rows[i].cells[j].innerHTML = "";
    }
  }
}

// Clear level, remove all bricks on that level without removing teh level itself
function ClearLevel(){
  // Clear Table (colors and data-type
  ResetTable();
  // reset current Level in array
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





// Set local storage for Instructions
function setInstructionsLS() {
  let LSbtn = document.getElementById("dns-btn");
  let checked = LSbtn.checked;
  if(checked){
    localStorage.setItem("instructions", "true");
  } else{
    localStorage.setItem("instructions", "false");
  }
}

// hide/ show editor
function showEditor(){
  document.getElementById("editor").className = "show";
  let checked = localStorage.getItem("instructions");
  if(checked == "true"){
    hideInstructions();
  } else {
    showInstructions();
  }
}

function hideEditor(){
  document.getElementById("editor").className = "hide";
  location.reload();
}

function hideInstructions() { instructions.style.display = "none"; }
function showInstructions(){
  // Get LS
  let checked = localStorage.getItem("instructions");
  let LSbtn = document.getElementById("dns-btn");

  // Set button
  if(checked == "true"){
    LSbtn.checked = true;
  } else{
    LSbtn.checked = false;
  }
  instructions.style.display = "block";
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
  createUpdate();
}

// Create new levels
function createAfter(){
  // Find current level in newLevel Array
  let current = select.options[select.selectedIndex].getAttribute("data-num");
  let c = parseInt(current)+1;
  // Create new empty array before in 'newLevels'
  newLevels.splice(c, 0, []);

  createUpdate(c);
}

function createBefore(){
  // Find current level in newLevel Array
  let current = select.options[select.selectedIndex].getAttribute("data-num");
  // Create new empty array before in 'newLevels'
  newLevels.splice(current, 0, []);

  createUpdate(current);
}

function createUpdate(c){
  // Clear Options from select to avoid duplicates
  while (select.hasChildNodes()) {
    select.removeChild(select.lastChild);
  }
  // Run LoadLevels to update dropdown
  LoadLevels(c);
}








// Tooltip
function BrickTooltip(pos, type, color, life){
  var div = document.createElement("div");
  div.innerHTML = "Type: " + type + "<br>Color: " + color + "<br>Lives: " + life;
  pos.appendChild(div);
}

function BlockTooltip(pos, type, color){
  var div = document.createElement("div");
  div.innerHTML = "Type: " + type + "<br>Color: " + color;
  pos.appendChild(div);
}




function toggleTextbox(){
  outputBox.classList.toggle('visible');
}
