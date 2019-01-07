function Field(element, x, y){
  this.element = element;
  this.x = x;
  this.y = y;
  this.isMine = false;
  this.isRevealed = false;
  this.neighbourMines = 0;
}

Field.prototype.floodFill = function(grid){
  // console.log(grid);
  
  for(var xoff = -1; xoff <= 1; xoff++){
    for(var yoff = -1; yoff <= 1; yoff++){
      var x = this.x + xoff;
      var y = this.y + yoff;

      if(x > -1 && x < 16 && y > -1 && y < 16){
        var neighbourField = grid[x][y];
        if(!neighbourField.isMine && !neighbourField.isRevealed){
          neighbourField.show(grid);
        }
      }
    }
  }
}

Field.prototype.show = function(grid){  
  if(this.isRevealed){
    if(this.isMine){
      this.element.classList.add('mine-field');
    }else{
      console.log(this.neighbourMines);
      
      if(this.neighbourMines == 0){
        this.floodFill(grid);
      }
      this.element.classList.add('clean-field');      
      
      this.countNeighbourMines(grid);

      var totalMines = document.createElement('span');
      totalMines.classList.add('total-mine');
      totalMines.setAttribute('mines', this.neighbourMines);
      totalMines.textContent = this.neighbourMines;
      
      this.element.appendChild(totalMines);
    }
  }
}

Field.prototype.countNeighbourMines = function(grid){  
  if(this.isMine){
    return -1;
  }  
  var total = 0;
  for(var xoff = -1; xoff <= 1; xoff++){
    for(var yoff = -1; yoff <= 1; yoff++){
      var x = this.x + xoff;
      var y = this.y + yoff;

      // If there is no neighbout ignore it
      // TODO: DON'T HARD CODE '16'!
      if(x > -1 && x < 16 && y > -1 && y < 16){
        var neighbourField = grid[x][y]
        if(neighbourField.isMine){
          total++;
        }
      }
    }
  }
  this.neighbourMines = total;
}
