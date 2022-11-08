// Java Script Programming file for the game
const grid = document.querySelector('.grid');
const  blockWidth = 100;
const blockHeight = 20;

// create block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, blockHeight]
    }
}

// all my blocks
const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    // new Block(10,270),
    // new Block(10,270),
    // new Block(10,270),
    // new Block(10,270),
    // new Block(10,270),
    // new Block(10,270),
    // new Block(10,270),
    // new Block(10,270),
    // new Block(10,270),
    // new Block(10,270)
]

// draw all my blocks
function addBlocks() {
    for(let i = 0; i < blocks.length; i++) {
    // creating grid sub child "block and add it to the div.grid class and use "style " of the block class"
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px" ;
    grid.appendChild(block);
 }
}

addBlocks();