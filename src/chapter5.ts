// 타입 추론 시스템

let a = 0;
let b = "hello";

let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

function fuc(message: string) {
  return "hello";
}

let d;
d = 10;
d.toFixed(2);

d = "hello";
d.toUpperCase();
// d.toFixed(2);

const num = 10;
const str = "hello";

let arr = [1, "string"];
