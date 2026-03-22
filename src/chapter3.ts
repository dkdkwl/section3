// 합집합 대수타입 - union type에 대해서

let a: string | number | boolean;
a = "hello";
a = 1;

a = true;

let arr: (number | string | boolean)[] = [1, "hello:", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};
type Union1 = Dog | Person;

// ✅ Dog 타입의 필수 프로퍼티(name, color)를 모두 가지고 있으므로
// Union1(Dog | Person) 중 Dog에 해당 → 정상
let union1: Union1 = {
  name: "",
  color: "",
};

// ✅ Person 타입의 필수 프로퍼티(name, language)를 모두 가지고 있으므로
// Union1(Dog | Person) 중 Person에 해당 → 정상
let union2: Union1 = {
  name: "",
  language: "",
};

// ✅ Dog(name, color)도 만족하고 Person(name, language)도 만족함.
// 유니온 타입의 초과 프로퍼티 검사에서는 객체의 모든 프로퍼티가
// 유니온 멤버 중 하나 이상에 존재하면 허용됨 → 정상
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// ❌ name만 있어서 Dog(color 없음), Person(language 없음) 중
// 어느 쪽도 만족하지 못함 → 에러 발생
let union4: Union1 = {
  name: "",
};
