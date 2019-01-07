window.onload = function(){
  var game = document.querySelector('.game');
  
  var el = document.createElement('div');
  el.classList.add('board');
  game.appendChild(el);
  
  var board = new Board(el, 16, 16, 51);
  board.create(); 
  
  // Listen for click events on the field elements
  for(var i = 0; i < board.cols; i++){
    for(var j = 0; j < board.rows; j++){
      board.grid[i][j].element.addEventListener('click', function(e){
        var col = e.target.getAttribute('column');
        var row = e.target.getAttribute('row');
        
        board.grid[col][row].isRevealed = true;
        board.grid[col][row].show(board.grid);
      })
    }
  }
}
