console.log("hello world");

function unkownExam() {
  let a: unknown = 1;
  let b: unknown = "string";
  let c: unknown = true;
  let d: unknown = { name: "object" };

  let unkwonwVar: unknown;
  // let num: number = unkwonwVar;
  // let str:string = unkwonwVar;
  // let bool: boolean = unkwonwVar;
  // let obj: object = unkwonwVar;
}

// **NaverType**
function naverExam() {
  function naverFunc(): never {
    while (true) {}
  }
}

// **voide type**
function voidExam(): void {
  console.log("void type");
  return undefined;
}

//**any type  */
function anyExam(): any {
  let unkwonwVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let naverVar: never;

  anyVar = unkwonwVar;
  undefinedVar = anyVar;
  naverVar = anyVar;
}
