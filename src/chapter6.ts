import { profile } from "node:console";
// 타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // 타입 단언을 사용하여 빈 객체를 Person 타입으로 간주하도록 함
person.name = "이정환";
person.age = 30;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <-- 선언식
//A as B; // A를 B로 단언
// A는 B의 하위 타입이거나, A와 B가 서로 호환되는 타입이어야 함
// A와 B가 완전히 다른 타입이거나, A가 B의 상위 타입인 경우에는 에러 발생

let num1 = 10 as never; // never: 모든 타입의 하위 타입 → 항상 단언 가능
let num2 = 10 as unknown; // unknown: 모든 타입의 상위 타입 → 항상 단언 가능

// 이중 단언: number → string 은 직접 단언 불가
// unknown을 중간에 끼워서 우회 (권장하지 않음, 타입 안전성 포기)
let num3 = 10 as unknown as string;

// const 단언
// 타입이 number가 아닌 리터럴 타입 10으로 고정됨
let num4 = 10 as const;

// 모든 프로퍼티가 readonly로 변경됨
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = "야옹이2"; // 에러 발생 - const 단언으로 인해 name 프로퍼티는 읽기 전용이 됨

// non null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시판1",
  author: "이정환",
};

const len: number = post.author!.length;
