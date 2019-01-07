function Board(element, cols, rows, totalMines){
  this.element = element;
  this.grid;
  this.cols = cols;
  this.rows = rows;
  this.totalMines = totalMines;

  this.drawBoard = function(){
    this.grid = make2DArray();
    
    for(var i = 0; i < this.cols; i++){
      var col = document.createElement('div');
      col.classList.add('column', 'column-'+ i);

      for(var j = 0; j < this.rows; j++){
        var field = document.createElement('div');
        field.classList.add('field', 'field-' + j);
        field.setAttribute('column', i);
        field.setAttribute('row', j);

        this.grid[i][j] = new Field(field, i, j);
        col.appendChild(this.grid[i][j].element);
      }
      this.element.appendChild(col);
    }
  }

  this.plantMines = function(){    
    for(var n = 0; n < this.totalMines; n++){      
        var i = Math.floor(Math.random() * this.cols);
        var j = Math.floor(Math.random() * this.rows); 
        // If this field is not planted, plant mine.
        if(!this.grid[i][j].isMine){
          this.grid[i][j].isMine = true; 
        }else{
          n--;
        }
    }
  }

  var make2DArray = function(){    
    var arr = new Array(cols);
    for(var i = 0; i < arr.length; i++){
      arr[i] = new Array(rows);
    }
    return arr;
  }
}

Board.prototype.create = function(){
  this.drawBoard();
  this.plantMines();
  // this.displayAll();
}

Board.prototype.displayAll = function(){
  for(var i = 0; i < this.cols; i++){
    for(var j = 0; j < this.rows; j++){      
      this.grid[i][j].show(this.grid);
    }
  }
}

