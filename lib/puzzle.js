// todo

// Select the 'Show Hint' button
const button = document.querySelector("#show-hint");
// Add a click event listener to the button, and show/hide the 'hint' to the user.
button.addEventListener("click", (e) => {
  const hint = document.querySelector(".hint");
  hint.classList.toggle("active");
})

// TODO: Building the game:
// Add event listener for when the user can clicks on a tile 
// Check if the tile is next to the empty square
// If true, then swap the clicked tile witb the empty tile
// then check if the user has sorted the tiles properly, and tell them they have won if true.
// else do nothing



// check if the user has sorted the tiles properly, and tell them they have won if true.
const checkUserHasWon = () => {
  const tiles = Array.from(document.querySelectorAll("td")).map(e => Number.parseInt(e.innerHTML, 10));
  console.log(tiles);
  if (tiles.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("Congratulations, you won! You can go home!");
  }
}

// Check if the tile is next to the empty square
const checkTileCanMove = (selectedCell, emptyCell) => {
  // Get the selected tile's location using it's cellIndex for the column and it's parent (<tr>) rowIndex
  const selectedColumn = selectedCell.cellIndex;
  const selectedRow = selectedCell.parentElement.rowIndex;
  // Get the empty tile's location using it's cellIndex for the column and it's parent (<tr>) rowIndex
  const emptyColumn = emptyCell.cellIndex;
  const emptyRow = emptyCell.parentElement.rowIndex;
  //console.log(`empty Row is ${emptyRow}, Selected Row is ${selectedRow}.  Empty Column is ${emptyColumn}, Selected Column is ${selectedColumn}`);
  // Either the row or the column of the Selected Cell must be the same as the Empty cell's
  // AND the selected Cell must be either directly above/below or directly to the left/right of the Empty cell
  if (selectedRow === emptyRow && selectedColumn === emptyColumn -1 ||
      selectedRow === emptyRow && selectedColumn === emptyColumn +1 ||
      selectedColumn === emptyColumn && selectedRow === emptyRow +1 ||
      selectedColumn === emptyColumn && selectedRow === emptyRow -1) {
        console.log("Next to empty Cell");
        return true;
  } else {
    return false;
  }
}

// Add event listener for when the user can clicks on a tile
const tiles = document.querySelectorAll("td");
console.log(tiles);
tiles.forEach((tile) => {
  tile.addEventListener("click", (e) => {
    //console.log(e);
    const selectedCell = e.target;
    const emptyCell = document.querySelector(".empty");
    if (checkTileCanMove(selectedCell, emptyCell)) {
      // Swap the clicked tile witb the empty tile
      emptyCell.classList.remove("empty");
      emptyCell.innerText = selectedCell.innerText;
      selectedCell.classList.add("empty");
      selectedCell.innerText = "";
      // As the tile array has changed, we need to check if the user has won:
      checkUserHasWon();
    }
    // no need for an else here, as nothing needs to be changed.
  })
})


