/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * + - * / %
 */

/**
 * 대소 관계 비교 연산자
 * 
 * 
 * 
 */
console.log(100 > 1);
console.log(100 < 1);
console.log (100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 * 
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/**
 * 논리 연산자
 * 
 * 1) &&  (and)
 * 2) ||  (or)
 * 
 */
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log ('---------------------');

// ||는 하나만 true 여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

console.log ('---------------------');

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');


/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자 
 */
let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name2);

