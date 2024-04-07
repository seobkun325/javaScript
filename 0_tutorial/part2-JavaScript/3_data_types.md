## 자바스크립트 자료형

<span style="color: orange;">1. 자료형 종류 (JavaScript Data Types)</span>  

- 자료형의 기본 타입 (Primitive Types)

  | 타입      | 설명                                                                                                            |
  |---------|---------------------------------------------------------------------------------------------------------------|
  | Number  | 모든 정수 및 부동 소수점 숫자를 포함합니다. JavaScript에서 가장 널리 사용되는 숫자 타입으로, 매우 큰 정수는 제외됩니다. |
  | BigInt  | 매우 큰 정수를 다룰 때 사용합니다. 일반적인 Number 타입으로 표현할 수 없는 크기의 정수를 나타내며, 값 끝에 'n'을 붙여 표기합니다.  |
  | String  | 텍스트 데이터를 저장하는 데 사용됩니다. 문자열은 큰따옴표, 작은따옴표, 또는 백틱으로 둘러싸여 표현됩니다.                      |
  | Boolean | 논리적 값인 'true'와 'false'를 나타냅니다. 주로 조건문이나 논리 연산에서 사용됩니다.                                |
  | Symbol  | 유일하고 변경 불가능한 기본값으로, 주로 객체의 고유한 속성 키로 사용됩니다. 충돌을 방지하는데 유용합니다.                       |
  | Undefined | 변수가 선언되었으나 아직 값이 할당되지 않았음을 나타냅니다.                                                |
  | Null    | 변수에 값이 의도적으로 '없음' 또는 '무효'임을 나타내는 값입니다. 개발자가 명시적으로 할당합니다.                       |

- 복합 타입 (Complex Types)

  | 타입     | 설명                                                                                                              |
  |--------|-----------------------------------------------------------------------------------------------------------------|
  | Object | 키와 값의 쌍으로 구성된 복합 자료형입니다. 객체는 JavaScript의 핵심 구성 요소로, 다양한 형태(함수, 배열, 날짜 등)와 데이터를 포함할 수 있습니다. |
  | Function | 코드의 집합을 나타내며, 호출될 때 특정 작업을 수행합니다. JavaScript에서는 함수도 객체의 일종으로 취급되어, 속성과 메서드를 가질 수 있습니다.   |
  | Array  | 순서가 있는 데이터의 집합으로 사용됩니다. 배열은 0 이상의 인덱스로 각 요소에 접근하며, 서로 다른 타입의 데이터를 포함할 수 있습니다.     |

<span style="color: orange;">2. 문자열 (string)</span>  
문자열은 큰따옴표, 작은따옴표, 또는 백틱으로 둘러싸여 표현됩니다. 

```js
let coffee = "커피";
let chocoBread = '"초코"빵';
let set = `${coffee}와 ${chocoBread} 세트`;
console.log(set);
```

<span style="color: orange;">3. 타입 체크 (typeof)</span>  
자바스크립트는 동적 타입 언어 (타입과 값을 바꿀 수 있는 언어)

```js
// 타입 체크
let coffee = 100;             // 변수에 숫자형 값 할당
console.log(typeof(coffee));  // 결과: 'number'

coffee = "아메리카노";           // 변수 값을 문자열로 변경
console.log(typeof(coffee));  // 결과: 'string'

// 타입 변환
let donut = "20";             // 변수에 문자열 값 할당
console.log(typeof donut);    // 결과: 'string'

let choco = Number(donut);    // 문자열 'donut'을 숫자형으로 변환하여 'choco'에 할당
console.log(typeof choco);    // 결과: 'number'
```

<span style="color: orange;">4. 객체 (object)</span>  

- 객체 종류

| 객체 종류 | 설명 | 예시 |
| --------- | ---- | ---- |
| 일반 객체 | 가장 기본적인 객체 형태, 키-값 쌍을 포함 | `{name: 'Alice', age: 25}` |
| 배열 | 순서가 있는 값의 집합 | `['apple', 'banana', 'cherry']` |
| 함수 | 실행 가능한 코드 블록을 포함하는 객체 | `function greet(name) { return 'Hello ' + name; }` |
| 날짜 (Date) | 날짜와 시간을 나타냄 | `new Date()` |
| 정규 표현식 (RegExp) | 문자열에서 패턴 검색 및 처리를 위해 사용 | `/[a-zA-Z]+/g` |
| 에러 (Error) | 실행 중에 발생하는 오류를 나타냄 | `new Error('Something went wrong')` |
| 내장 객체 | 자바스크립트에 내장된 객체, 고유한 기능과 속성을 가짐 | `Math.random()`, `Number.parseInt('10')` |
| 전역 객체 | 코드 어디에서나 접근할 수 있는 객체 | `globalThis` (브라우저), `globalThis` (Node.js) |

```js
// 일반 객체
const person = { name: 'Alice', age: 25, isOpen: true };
person.house = '서울';
person.isOpen = false;    // 속성 값 변경
console.log(person);      // 객체의 전체 데이터 확인
console.log(person.name); // Alice

// 배열
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[1]); // banana

// 함수
function greet(name) {
  return 'Hello ' + name;
}
console.log(greet('Alice')); // Hello Alice

// 날짜
const studyDay = new Date();
const studyString = studyDay.toISOString().split('T')[0];
console.log(studyString);
console.log(studyDay);
console.log(studyDay.toString());
console.log(studyDay.getFullYear(), studyDay.getMonth(), studyDay.getDate())

// 정규표현식
const pattern = /[a-zA-Z]+/g;
const result = pattern.test('Hello');
console.log(result); // true

// 에러
try {
  throw new Error('Something went wrong');
} catch (e) {
  console.error(e.message); // Something went wrong
}

// 내장 객체
console.log(Math.random()); // 0과 1 사이의 랜덤한 숫자
console.log(Number.parseInt('10', 10)); // 10

// 전역 객체
console.log(globalThis.location.href); // 브라우저 환경
console.log(globalThis.process.version); // Node.js 환경
```

- 객체 메서드

| 객체 메서드 | 설명 |
|-------------|------|
| `Object.entries()` | 객체의 [키, 값]을 담은 배열을 반환합니다. |
| `Object.keys()` | 객체의 키만 담은 배열을 반환합니다. |
| `Object.values()` | 객체의 값만 담은 배열을 반환합니다. |
| `Object.freeze()` | 객체를 동결하여 수정할 수 없도록 만듭니다. |
| `Object.seal()` | 객체를 밀봉하여 새 속성 추가는 금지하지만, 기존 속성의 수정은 허용합니다. |
| `Object.is()` | 두 값이 같은지를 확인합니다. NaN을 NaN과 같은 값으로 간주하지 않습니다. |
| `Object.assign()` | 하나 이상의 소스 객체로부터 대상 객체로 속성을 복사합니다. |


```js
// 빵 가게 정보 객체
const bakery = {
  saltBread: "소금빵",
  chocoBread: "초코빵",
  cheeseBread: "치즈빵"
};

// Object.entries()
const bakeryEntries = Object.entries(bakery);
console.log("Object.entries():", bakeryEntries);
// 출력: Object.entries(): [ [ 'saltBread', '소금빵' ], [ 'chocoBread', '초코빵' ], [ 'cheeseBread', '치즈빵' ] ]

// Object.keys()
const bakeryKeys = Object.keys(bakery);
console.log("Object.keys():", bakeryKeys);
// 출력: Object.keys(): [ 'saltBread', 'chocoBread', 'cheeseBread' ]

// Object.values()
const bakeryValues = Object.values(bakery);
console.log("Object.values():", bakeryValues);
// 출력: Object.values(): [ '소금빵', '초코빵', '치즈빵' ]

// Object.freeze()
Object.freeze(bakery);
bakery.cheeseBread = "Baguettes"; // 변경이 적용되지 않음
console.log("Object.freeze():", bakery);
// 출력: Object.freeze(): { saltBread: '소금빵', chocoBread: '초코빵', cheeseBread: '치즈빵' }

// Object.seal()
Object.seal(bakery);
bakery.chocoBread = "456 Bread Avenue"; // 변경이 허용됨
console.log("Object.seal():", bakery);
// 출력: Object.seal(): { saltBread: '소금빵', chocoBread: '456 Bread Avenue', cheeseBread: '치즈빵' }

// Object.is()
console.log("Object.is(10, 10):", Object.is(10, 10));     // true
console.log("Object.is(10, '10'):", Object.is(10, '10')); // false

// Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const mergedObject = Object.assign({}, target, source);
console.log("Object.assign():", mergedObject);
// 출력: Object.assign(): { a: 1, b: 3, c: 4 }
```

<span style="color: orange;">5. 배열 (array)</span>  

```js
// 빈 배열 생성
const breads = [];

// 배열에 요소 추가
breads.push("소금빵", "초코빵", "치즈빵");
console.log(breads.length); // 3

// 원하는 인덱스에 새 요소 추가
breads[5] = "식빵";
console.log(breads[5]); // '식빵'
console.log(Object.keys(breads)); // ['0', '1', '2', '5']
console.log(breads.length); // 6

// 빈 슬롯 추가로 배열 확장
breads.length = 10;
console.log(breads); // ['소금빵', '초코빵', '치즈빵', empty x 2, '식빵', empty x 4]
console.log(Object.keys(breads)); // ['0', '1', '2', '5']
console.log(breads.length); // 10
console.log(breads[8]); // undefined

// 길이를 줄이면 요소가 삭제됨
breads.length = 2;
console.log(Object.keys(breads)); // ['0', '1']
console.log(breads.length); // 2
console.log(breads); // ['소금빵', '초코빵']
```

<span style="color: orange;">6. 배열 메서드 (Array prototype method)</span>  

- 주로 많이 사용되는 array 메서드

| 메서드 | 설명 |
| ------ | ---- |
| [concat()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) | 두 개 이상의 배열을 병합하는 데 사용, 새 배열을 반환 |
| [filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 |
| [map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환 |
| [slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) | 어떤 배열의 `begin` 부터 `end` 까지(`end` 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환 |
| [sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) | 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환 |
| [splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) | 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경 |
| [forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | 각 배열 요소에 대해 제공된 함수를 한 번씩 실행 |
| [find()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find) | 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환 |
| [join()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join) | 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환 |
| [includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) | 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 `true` 또는 `false`를 반환 |
| [reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) | 배열의 각 요소에 대해 함수를 실행하고 단일 출력 값을 반환 |
| [push()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push) | 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환 |
| [pop()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) | 배열의 마지막 요소를 제거하고 그 요소를 반환

- 그 외 array 메서드

| 메서드 | 설명 |
| ------ | ---- |
| [copyWithin()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) | 배열의 일부를 같은 배열의 다른 위치로 얕게 복사하며, 배열의 길이를 수정하지 않고 해당 배열을 반환 |
| [every()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트합니다. 이 메서드는 불리언 값을 반환 |
| [flat()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) | 모든 하위 배열 요소가 지정된 깊이까지 재귀적으로 연결된 새 배열을 생성 |
| [flatMap()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) | 배열의 각 요소에 주어진 콜백 함수를 적용한 다음 그 결과를 한 단계씩 평탄화하여 형성된 새 배열을 반환 |
| [indexOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) | 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환, 없으면 -1을 반환 |
| [shift()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) | 배열의 첫 번째 요소를 제거하고, 그 요소를 반환 |
| [unshift()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) | 배열의 시작에 하나 이상의 요소를 추가하고, 새 길이를 반환 |
| [lastIndexOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | 배열에서 주어진 값과 일치하는 마지막 요소의 인덱스를 반환, 없으면 -1을 반환 |
| [reduceRight()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) | 배열의 각 요소에 대해 함수를 오른쪽에서 왼쪽으로 적용하고 단일 출력 값을 반환 |
| [fill()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) | 배열의 지정된 범위를 정해진 값으로 채움 |
| [from()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from) | 유사 배열 또는 반복 가능한 객체를 얕은 복사하여 새 배열 객체 생성 |
| [isArray()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) | 주



```js
// concat()
const breads = ['바게트', '치아바타'];
const pastries = ['크루아상', '데니쉬'];
const menuItems = breads.concat(pastries);
console.log(menuItems); // ['바게트', '치아바타', '크루아상', '데니쉬']

// filter()
const coffeePrices = [3.5, 4.0, 2.5, 3.0, 4.5];
const affordableCoffees = coffeePrices.filter(price => price < 4);
console.log(affordableCoffees); // [3.5, 2.5, 3.0]

// map()
const coffees = ['에스프레소', '라떼', '카푸치노'];
const menuDisplay = coffees.map(coffee => coffee.toUpperCase());
console.log(menuDisplay); // ['에스프레소', '라떼', '카푸치노']

// slice()
const cafeMenu = ['커피', '차', '샌드위치', '샐러드', '케이크'];
const beverageMenu = cafeMenu.slice(0, 2);
console.log(beverageMenu); // ['커피', '차']

// sort()
const pastryTypes = ['크루아상', '데니쉬', '에클레어', '스콘'];
pastryTypes.sort();
console.log(pastryTypes); // ['크루아상', '데니쉬', '에클레어', '스콘']

// splice()
const menu = ['커피', '차', '주스'];
menu.splice(2, 0, '에스프레소', '라떼');
console.log(menu); // ['커피', '차', '에스프레소', '라떼', '주스']

// forEach()
const bakeryItems = ['커피', '빵', '케이크'];
bakeryItems.forEach(item => {
  console.log(item);
});
// 커피
// 빵
// 케이크

// find()
const temperatures = [72, 68, 75, 80, 77];
const idealTemp = temperatures.find(temp => temp === 75);
console.log('커피 온도는 :' + idealTemp); // 75

// join()
const coffeeTypes = ['에스프레소', '라떼', '카푸치노'];
console.log(coffeeTypes.join(', ')); // '에스프레소, 라떼, 카푸치노'

// reduce()
const orderTotals = [4.25, 3.50, 2.75];
const total = orderTotals.reduce((total, current) => total + current, 0);
console.log(total); // 10.50

// push()
const cakes = ['초콜릿', '바닐라'];
const updatedLength = cakes.push('레드 벨벳');
console.log(cakes); // ['초콜릿', '바닐라', '레드 벨벳']
console.log(updatedLength); // 3

// pop()
const teaFlavors = ['얼그레이', '녹차', '페퍼민트', '모카라떼'];
const lastTea = teaFlavors.pop();
console.log(teaFlavors); // ['얼그레이', '녹차', '페퍼민트']
console.log(lastTea); // '모카라떼'
```

<span style="color: orange;">7. 배열 구조 분해 할당</span>  

- [구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) : 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식

```js
// 기본 예제
// 배열의 요소들을 변수에 할당합니다.
const bakery = ['소금빵', '치즈빵', '초코빵'];
const [saltBread, cheeseBread, chocoBread] = bakery;
console.log(saltBread);   // '소금빵'
console.log(cheeseBread); // '치즈빵'
console.log(chocoBread);  // '초코빵'

// 일부 요소만 선택하여 할당
// 특정 요소들만 변수에 할당하고 나머지는 무시합니다.
const numbers = [1, 2, 3, 4, 5];
const [first, , third, , fifth] = numbers;
console.log(first); // 1
console.log(third); // 3
console.log(fifth); // 5

// 기본값 설정
// 할당할 배열의 요소가 부족할 때 기본값을 사용합니다.
const [a, b, c = '버터빵'] = ['모카빵', '앙금빵'];
console.log(a); // '모카빵'
console.log(b); // '앙금빵'
console.log(c); // '버터빵' <- 기본 값

// 나머지 요소들을 새로운 배열로 할당
// 나머지 요소들을 다른 배열로 모읍니다.
const bread = ['초코빵', '크림빵', '소보로빵', '팥빵'];
const [chocoBread, creamBread, ...others] = bread;
console.log(chocoBread); // '초코빵'
console.log(creamBread); // '크림빵'
console.log(others); // ['소보로빵', '팥빵']

// 함수에서 여러 값을 반환하고 구조분해할당 사용
// 함수에서 배열을 반환하고, 구조분해할당을 사용하여 결과를 변수에 할당합니다.
function getBread() {
  return ['모카', '빵'];
}

const [firstName, lastName] = getBread();
console.log(firstName); // '모카'
console.log(lastName); // '빵'

// ...rest 연산자
// 나머지 요소들을 새로운 배열로 할당
const cafe = ['아메리카노', '카페라떼', '카푸치노', '에스프레소'];
const [americano, cafeLatte, ...others] = cafe;

console.log(americano); // '아메리카노'
console.log(cafeLatte); // '카페라떼'
console.log(others); // ['카푸치노', '에스프레소']
```



```js
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (let {
  name: n,
  family: { father: f },
} of people) {
  console.log("Name: " + n + ", Father: " + f);
}

let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
```




***

- references  
  [템플릿 리터럴](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)  
  [Function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)  
  [Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array) : **다양한 [데이터 형식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)을 혼합하여 저장**  
  [RegExp](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp) : 패턴을 사용해 텍스트를 판별할 때 사용  
  [Error](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error) : 런타임 오류가 발생했을 때 나타남, 예외처리로도 사용됨