const printf = (message: string) => {
  console.log(message);
};

function printFunc(message: string) {
  console.log(message);
}

type Print = (message: string) => void;

const printToday = (callback: Print) => {
  callback(new Date().toDateString());
};

printToday(printf);
printToday(printFunc);
