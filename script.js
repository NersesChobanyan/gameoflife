var matrix = [
    [0,0,1,0,0,0,1,0],
    [1,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [0,0,1,0,0,0,1,1],
    [1,1,0,0,0,0,1,1],
    [1,1,0,0,0,0,0,0],
    [1,1,0,0,0,1,0,0],
    [1,0,0,0,0,0,1,0]
 ];
 
const side = 10;
const grassArr = [];
function setup() {
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('black');
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 1) {
                grassArr.push(new Grass(x,y,1))
            }
            
        }
        
    }
}
function draw(){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++){
            if (matrix[y][x] == 1) {
                fill("green")
            }
            else if (matrix[y][x] == 2) {
                fill("red")
            }
            else if (matrix[y][x] == 0) {
                fill("#6B3125")
            }

            rect(x * side,y * side , side,side)

        }
        
    }
    for (const gr in grassArr) {
        grassArr[gr].Mul()
    }
}
