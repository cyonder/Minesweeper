function Board(element, cols, rows){
  this.element = element;
  this.grid;
  this.cols = cols;
  this.rows = rows;

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
        // this.grid[i][j].show();
        col.appendChild(this.grid[i][j].element);
      }
      this.element.appendChild(col);
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
}
