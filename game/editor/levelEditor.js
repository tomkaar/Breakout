// Global variables
  var tableRows = 4;
  var tableCol = 11;
  var select = document.getElementById("select");
  var levelSelected = 0;


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


// load levels from 
LoadLevels();
function LoadLevels(){
  console.log(levels);
  // Create options
  let length = levels.length;
  for(var i = 0; i < levels.length; i++){
    var option = document.createElement("option");
    option.text = "Level " + i;
    option.setAttribute("data-num", i);
    select.add(option);
  }
  currentlySelected();
}

// Check with one is currently selected
function currentlySelected(){
  let current = select.options[select.selectedIndex].getAttribute("data-num");
  levelSelected = current;
  console.log(levelSelected);
}

function drawCurrentlevel(){

}

 
function dataAttributeChange() {
  // Set attributes



  // Get attributes
  let target = event.target;
  var row = target.getAttribute("data-row");
  var col = target.getAttribute("data-col");
  let type = target.getAttribute("data-type")
  console.log("row: " + row + " & col: " + col + " & type: " + type);


  // Print Attributes

}