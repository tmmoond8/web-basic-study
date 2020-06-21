interface Book {
  name: string;
}

interface Bike {
  name: string;
}

let theKiteRunner: Book = { name: "the kite Runner" };
let ZINN: Bike = { name: "ZINN" };

theKiteRunner = ZINN;
