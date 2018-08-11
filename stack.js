class Stack{
    
    constructor(size){
        this.array = [];
        this.current = 0;
        this.size = 10;
    }

    push(value){
        if(this.current === this.size) throw 'Stack Over Flow';
        this.array[this.current++] = value;
    }

    info(){
        console.log(`size: ${this.current}`);
        console.log(`stack: ${this.array}`);
    }

    pop(){
        if(this.current === 0) throw "Stack Under Flow";
        let value = this.array[--this.current]
        this.array[this.current] = undefined;
        return value;
    }
}


// unit tests
// do not modify the below code
describe('Stack', function() {

  const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
  const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
  let stack; 
  
  beforeEach( () => {
    stack = new Stack();
  })
  
  it('constructor', () => {
    expect(stack).toEqual(jasmine.any(Stack));
  });
  
  it('push', () => {
    range(3).map( number => stack.push(number) );
    stack.info();
    expect(stack.current).toEqual(3);
    expect(stack.array.length).toEqual(3);
    abcRange(7).map( character => stack.push(character) );
    stack.info();
    expect(()=>stack.push('last')).toThrow('Stack Over Flow');
  });
  
  it('pop', () => {
    expect(()=>stack.pop()).toThrow('Stack Under Flow');
    abcRange(8).map( character => stack.push(character) );
    stack.info();
    expect(stack.current).toEqual(8);
    range(6).map( () => stack.pop() );
    expect(stack.current).toEqual(2);
    stack.info();
    expect(stack.pop()).toEqual('b');
  });
});
