import type p5Types from "p5";

let canvasParent: Element;
let parentStyle: CSSStyleDeclaration;
let canvasWidth = 0;
let canvasHeight = 0;
let cellSize = 15;
let columnCount = 0;
let rowCount = 0;
type Cell = 0 | 1;
type Grid = Cell[][];

let currentCells: Grid = [];
let nextCells: Grid = [];

export const setup = (p5: p5Types, canvasParentRef: Element) => {
  // Find the parent Element's size to create a Canvas that size
  canvasParent = canvasParentRef;

  const parent = canvasParentRef.parentElement || canvasParentRef;
  parentStyle = getComputedStyle(parent);

  canvasWidth = parseInt(parentStyle.width);
  canvasHeight = parseInt(parentStyle.height);

  const canvas = p5.createCanvas(canvasWidth, canvasHeight);
  canvas.parent(canvasParentRef);

  // Set simulation framerate to 10 to avoid flickering
  p5.frameRate(5);
  //   p5.createCanvas(720, 400);

  // Calculate columns and rows
  columnCount = p5.floor(canvasWidth / cellSize);
  rowCount = p5.floor(canvasHeight / cellSize);

  // Set each column in current cells to an empty array
  for (let column = 0; column < columnCount; column++) {
    currentCells[column] = [];
    nextCells[column] = [];
    // 초기 상태 설정 추가
    for (let row = 0; row < rowCount; row++) {
      currentCells[column][row] = p5.random([0, 1]);
      nextCells[column][row] = 0;
    }
  }

  p5.loop(); // noLoop() 대신 loop()로 변경
};

export const draw = (p5: p5Types) => {
  generate();
  for (let column = 0; column < columnCount; column++) {
    for (let row = 0; row < rowCount; row++) {
      // Get cell value (0 or 1)
      let cell = currentCells[column][row];

      // Convert cell value to get black (0) for alive or white (255 (white) for dead
      // Set fill color based on cell state
      if (cell) {
        p5.fill(0, 255, 194); // Light blue for alive cells
      } else {
        p5.fill(255, 255, 255); // White for dead cells
      }
      // p5.stroke(0, 255, 194);
      p5.noStroke();
      p5.rect(column * cellSize, row * cellSize, cellSize, cellSize);
    }
  }
};

// Reset board when mouse is pressed
export const mousePressed = (p5: p5Types) => {
  for (let column = 0; column < columnCount; column++) {
    for (let row = 0; row < rowCount; row++) {
      // Randomly select value of either 0 (dead) or 1 (alive)
      currentCells[column][row] = p5.random([0, 1]);
    }
  }
  p5.loop();
};

// Keep canvas and its content responsive across window resizes
export const windowResized = (p5: p5Types, canvasParentRef: Element) => {
  canvasParent = canvasParentRef;

  const parent = canvasParentRef.parentElement || canvasParentRef;
  parentStyle = getComputedStyle(parent);

  canvasWidth = parseInt(parentStyle.width);
  canvasHeight = parseInt(parentStyle.height);
  p5.resizeCanvas(canvasWidth, canvasHeight);
};

// Create a new generation
function generate() {
  // Loop through every spot in our 2D array and count living neighbors
  for (let column = 0; column < columnCount; column++) {
    for (let row = 0; row < rowCount; row++) {
      // Column left of current cell
      // if column is at left edge, use modulus to wrap to right edge
      let left = (column - 1 + columnCount) % columnCount;

      // Column right of current cell
      // if column is at right edge, use modulus to wrap to left edge
      let right = (column + 1) % columnCount;

      // Row above current cell
      // if row is at top edge, use modulus to wrap to bottom edge
      let above = (row - 1 + rowCount) % rowCount;

      // Row below current cell
      // if row is at bottom edge, use modulus to wrap to top edge
      let below = (row + 1) % rowCount;

      // Count living neighbors surrounding current cell
      let neighbours =
        currentCells[left][above] +
        currentCells[column][above] +
        currentCells[right][above] +
        currentCells[left][row] +
        currentCells[right][row] +
        currentCells[left][below] +
        currentCells[column][below] +
        currentCells[right][below];

      // Rules of Life
      // 1. Any live cell with fewer than two live neighbours dies
      // 2. Any live cell with more than three live neighbours dies
      if (neighbours < 2 || neighbours > 3) {
        nextCells[column][row] = 0;
        // 4. Any dead cell with exactly three live neighbours will come to life.
      } else if (neighbours === 3) {
        nextCells[column][row] = 1;
        // 3. Any live cell with two or three live neighbours lives, unchanged, to the next generation.
      } else nextCells[column][row] = currentCells[column][row];
    }
  }

  // Swap the current and next arrays for next generation
  let temp = currentCells;
  currentCells = nextCells;
  nextCells = temp;
}
