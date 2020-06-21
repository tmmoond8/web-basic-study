let a: unknown = 30;
let b = a === 123; // a의 타입에는 영향을 미치지 않는다.
let c = a + 10; // unknwon 타입은 숫자와 + 연산을 할 수 없다.
if (typeof a === "number") {
  let d = a + 10; // 위 조건문을 통해 a가 number 타입으로 결정된다.
  a.substring(1); // number 타입으로 결정되었기 때문에 문자열 메소드를 사용할 수 없다.
}
