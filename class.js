class Grass{
    constructor(x,y,index){
        this.x = x;
        this.y = y;
        this,index= index;
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    
    chooseCell(character) {
        const found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
     
     }

     Grass() {
         const newCell = random(this.chooseCell(0));
         if (this.multiplay >= 5 && newCell){

            const newGrass = new Grass(newCell[0], newCell[1], 1);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]]= 1;
            this.multiplay = 0
        }
        this.multiplay++;
     }

     Mul() {
        const newCell = random(this.chooseCell(0));
        if (this.multiplay >= 5 && newCell){

           const newMul = new Mul(newCell[1], newCell[2], 2);
           MulArr.push(newMul);
           matrix[newCell[2]][newCell[2]]= 1;
           this.multiplay = 0
       }
       this.multiplay++;
    }
     
}