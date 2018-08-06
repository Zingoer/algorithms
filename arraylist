class ArrayList{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  
  push(value){
    this.data[this.length] = value;
    this.length++;
  }
  
  pop(){
    this.length--;
    cosnt ans = this.data[this.length];
    delete this.data[this.length];
    return ans;
    // return this.delete(this.length-1);
  }
  
  get(index){
    return this.data[index];
  }
  
  delete(index){
    const ans = this.data[this.index];
    this._collapseTo(index);
    return ans;
  }
  
  _collapseTo(index){
    for(let i = index; i < this.length-1; i++){
      this.data[i] = this.data[i+1];
    }
    this.length--;
    delete this.data[this.length];
  }
}
