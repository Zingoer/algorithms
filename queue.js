class Queue{
    
    constructor(size){
        this.array = [];
        this.head = 0;
        this.tail = 0;
        this.size = 10;
    }

    enqueue(value){
        if(this.tail === this.size) this.tail = 0;
        console.log(`head: ${this.head}, tail: ${this.tail}, head value: ${this.array[this.head]}`);
        if(this.array[this.head] !== undefined && this.head === this.tail) throw "Queue Over Flow";
        this.array[this.tail++] = value;
    }

    dequeue(){
       if(this.head === this.size) this.head = 0;
       if(this.array[this.head] === undefined) throw "Queue Under Flow";
       let value = this.array[this.head];
       this.array[this.head] = undefined;
       this.head++;
       return value;
    }
  
    info(){
        console.log(`head: ${this.head}, tail: ${this.tail}`);
        console.log(`queue: ${this.array}`);
    }


}


// unit tests
// do not modify the below code
describe('Queue', function() {

  const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
  const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
  let queue; 
  
  beforeEach( () => {
    queue = new Queue();
  })
  
  it('constructor', () => {
    expect(queue).toEqual(jasmine.any(Queue));
  });
  
  it('enqueue', () => {
    range(3).map( number => queue.enqueue(number) );
    queue.info();
    expect(queue.tail).toEqual(3);
    expect(queue.array.length).toEqual(3);
    abcRange(7).map( character => queue.enqueue(character) );
    queue.info();
    expect(()=>queue.enqueue('last')).toThrow('Queue Over Flow');
  });
  
  it('dequeue', () => {
    expect(()=>queue.dequeue()).toThrow('Queue Under Flow');
    abcRange(8).map( character => queue.enqueue(character) );
    queue.info();
    expect(queue.tail).toEqual(8);
    range(6).map( () => queue.dequeue() );
    expect(queue.head).toEqual(6);
    queue.info();
    expect(queue.dequeue()).toEqual('g');
    abcRange(7).map( character => queue.enqueue(character) );
    range(2).map( () => queue.dequeue() );
    expect(queue.head).toEqual(9);
    expect(queue.tail).toEqual(5);
    queue.info();
  });
});
