function Field(element, x, y){
  this.element = element;
  this.x = x;
  this.y = y;
  if(Math.random(1) < 0.5){
    this.isMine = true;
  }else{
    this.isMine = false;
  }
  this.isRevealed = false;
}

Field.prototype.show = function(){
  if(this.isRevealed){
    if(this.isMine){
      this.element.classList.add('found-mine');
    }else{
      this.element.classList.add('clean-field');
    }
  }
}