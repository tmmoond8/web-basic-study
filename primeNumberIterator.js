const primeNumberIterator = {
  [Symbol.iterator]() {
    let currentPrimeNumber = 1;
    const MAX = 10;
    const isPrimeNumber = num => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    const getNextPrimeNumber = num => {
      for (let i = num + 1; i <= Infinity; i++) {
        if (isPrimeNumber(i)) return i;
      }
    }
    return {
      next() {
        currentPrimeNumber = getNextPrimeNumber(currentPrimeNumber);
        return {
          value: currentPrimeNumber > MAX ? undefined : currentPrimeNumber,
          done: currentPrimeNumber > MAX,
        }
      }
    }
  }
}

const primeNumber = primeNumberIterator[Symbol.iterator]();
console.log(primeNumber.next());
console.log(primeNumber.next());
console.log(primeNumber.next());
console.log(primeNumber.next());
console.log(primeNumber.next());
console.log(primeNumber.next());