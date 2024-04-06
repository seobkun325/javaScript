/**
 * Array Functions
 */
let iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
];

console.log(iveMembers);

//  push() ==> array 끝에 추가
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('-------------');
//  pop() ==> 마지막 element 삭제
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('-------------');
//  shift() ==> 첫번째 element 삭제
console.log(iveMembers.shift());
console.log(iveMembers);

console.log('-------------');
//  unshift() ==> 첫번째 element 추가
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('-------------');
//  splice(x,y)  ==> x번 idx부터 y개의 element 삭제
console.log(iveMembers.splice(0,3));
console.log(iveMembers);


console.log('-------------');
//  리셋
iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
];

console.log(iveMembers);

//  concat() ==> 기존 메모리가 아닌, 다른 메모리에 새로운 배열을 만들어 반환한다.
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers); // 기존과 다름이 없음 = 원래 배열 변경 x

//  slice() ==> 범위내 element 삭제. 원하는 끝 idx보타 1 크게.
console.log(iveMembers.slice(0,3));
console.log(iveMembers); // 기존과 다름이 없음 = 원래 배열 변경 x

//  spread operator 
let iveMembers2 = [
  ...iveMembers, // ...은 리스트를 펼쳐서 넣음
];
console.log(iveMembers2);

let iveMembers3 = [
  iveMembers,
];
console.log(iveMembers3);

console.log('-------------');
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);
// console.log([
//   ...iveMembers,
// ] === iveMembers);

//  join() ==> 모든 값들을 string으로 엮을 때
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

//  sort()
//  오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [
  1,
  9,
  7,
  5,
  3,
];
console.log(numbers);

//  a, b를 비교했을때
//  1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0 보다 큰 숫자를 반환
//  2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0 보다 작은 숫자를 반환
//  3) 원래 순서를 그대로 두려면 0을 반환


numbers.sort((a,b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a,b) => a > b ? -1 : 1);
console.log(numbers);

//  map()
console.log('-------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
  if(x === '안유진'){
    return `아이브: ${x}`;
  } else {
    return x;
  }
}));
console.log(iveMembers);

//  filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

//  find()
console.log(numbers.find((x) => x % 2 === 0));

//  findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

//  reduce()
console.log(numbers.reduce((p, n) => p + n, 0));
