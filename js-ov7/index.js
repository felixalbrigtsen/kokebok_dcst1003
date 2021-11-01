// Retrieve the needed HTML elements:
let colorSelection = document.getElementById("colorSelection");
let sizeSelection = document.getElementById("sel_size")
let drawingBoard = document.getElementById("drawingBoard");

const cols = 30;
const rows = 20;

function getColor() {
  //All the color names in index.html are valid css color names when not capitalized.
  let rawColorName = colorSelection.value;
  return rawColorName.toLowerCase();
}

function drawPoint(event) {
  const pixelIndex = parseInt(event.target.getAttribute("data-pxl-index"));
  const size = sizeSelection.value;
  const color = getColor();

  //Get location of clicked pixel
  let x = pixelIndex % cols;
  let y = (pixelIndex - x) / cols;

   //List of all pixels to draw
   let affectedPixels = [];
   const centeringOffset = Math.floor(size / 2);

   //Calculate offsets in both directions
   for (let xoff = 0; xoff < size; xoff++) {
       for (let yoff = 0; yoff < size; yoff++) {
           //Use the centeringoffset in combination with directional offsets. ([0,1,2] becomes [-1, 0, +1] so the click is in the middle)
           affectedPixels.push([x + xoff-centeringOffset, y + yoff-centeringOffset]);
       }
   }
    affectedPixels.forEach((pixel) => {
        [x, y] = pixel;

        //Check that the pixel is within the canvas on all sides
        if (x >= 0 && x < cols && y >= 0 && y < rows) {
            //Find the pixels position in the array
            let index = (y*cols) + x;
            //Actually draw the pixel in the appropriate color
            squares[index].style.backgroundColor = color;
        }
    });
}

// The drawingBoard squares will be stored in this table for later use:
let squares = [];

// Create the drawingBoard squares:
for (let i = 0; i < (rows*cols); i++) {
  // Create new drawingBoard square
  let square = document.createElement('div');

  square.style.height = '20px';
  square.style.width = '20px';
  square.style.float = 'left';
  square.style.backgroundColor = "white";
  square.setAttribute("data-pxl-index", i);

  //Draw on click
  square.onclick = drawPoint;

  //Enable drag-to-draw, not just single clicks
  square.onmouseenter = (event) => {
    if (event.buttons == 1) {
      drawPoint(event)
    }
  }

  // Add square as child to drawingBoard element
  drawingBoard.appendChild(square);
  // Add square to squares table
  squares.push(square);
}

//Clear entire grid
document.getElementById("btn_clear").onclick = ()=>{
  squares.forEach(square => {
    square.style.removeProperty("background-color");
  });
}

//Fill all pixels with the same color
document.getElementById("btn_fill").onclick = ()=>{
  squares.forEach(square => {
    square.style.backgroundColor = getColor();
  });
}