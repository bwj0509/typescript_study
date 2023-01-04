import './App.css';

function App() {
  let name: string = 'woojin';
  name = '우진';

  let myAge: number;
  myAge = 25;

  let nameArr: string[] = [];
  nameArr = ['woojins', 'test', 'woojin'];

  let infoArr: (number | string)[] = [];
  infoArr = ['woojin', 123, 'ete', 32];

  type nameType = string | number;

  let pid: nameType = 'woojin';

  const showcs = (s: string) => {
    console.log(s);
  };

  type PersonalInfo = {
    name: string;
    age: number;
  };

  const woojin: PersonalInfo = {
    name: 'woojin',
    age: 25,
  };

  type PersonalInfo2 = {
    [key: string]: number | string;
  };

  const obj: PersonalInfo2 = {
    name: 'woojin',
    age: 24,
  };

  const singer: {
    singer: string;
    song: string;
  } = {
    singer: 'blued',
    song: 'cris',
  };

  let project: {
    member: string[];
    days: number;
    started: boolean;
  } = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
  };

  let projects: {
    [key: string]: string[] | number | boolean;
  } = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
  };

  let test = [12, 3, 421, 'woojin'];
  // 타입스크립트는 타입 지정안해도 test위에 마우스 올려보면 알려줌 개꿀!

  let users: (string | number)[] = [1, 2, 3, 'woojin'];

  type MultiObj = { [key: string]: string | number | boolean };
  let objs: MultiObj = { a: '123', b: 45, c: true };

  let yourAge: number = parseInt('24');

  //아래보이는 문제 복습할때 하면 좋을듯!!
  let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
  } = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
  };
  학교.score[4] = false;
  학교.friend = ['Lee', 학교.teacher];

  //함수 매개변수에 타입 지정하는 방법
  function doublling(x: number): number {
    return x * 2;
  }
  // console.log(doublling(20));

  const tripling = (x: number): number => {
    return x * 3;
  };
  // console.log(tripling(20));

  //return을 하지 않는 함수라면 void type을 지정해준다
  const noReturn = (x: number): void => {
    // console.log('yes!');
  };
  noReturn(20);

  //parameter가 옵션으로 넣고 싶은 경우 파마리터? 형식으로 입력 (?는 undefined 랑 같은거임 따라서 x?: number === x:number|undefined)
  const parameterOptionfn = (x?: number): void => {
    // console.log('option!');
  };

  parameterOptionfn(21);
  parameterOptionfn();

  // Q1
  const printFn = (input?: string): void => {
    if (input) {
      console.log(`안녕하세요 ${input}님`);
    } else {
      console.log('이름이 X');
    }
  };
  // printFn('백우진')
  // printFn()

  // Q2
  const countFn = (input: string | number) => {
    console.log(String(input).length);
  };
  // countFn('woojin')
  // countFn(123124)

  // Q3
  const possibleMarry = (income: number, hasHouse: boolean, attract: string): string | null => {
    let sum = income + (hasHouse ? 500 : 0) + (attract === '상' ? 100 : 0);
    return sum >= 600 ? '결혼가능' : null;
  };
  // console.log(possibleMarry(700, false, '중'))
  // console.log(possibleMarry(100, false, '상'))

  // Q4 배열받아서 배열 안에 item들 전부 숫자로 바꾸기
  const changeToNumber = (x: (string | number)[]): void => {
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === 'string') {
        x[i] = Number(x[i]);
      }
    }
    // console.log(x);
  };
  changeToNumber([1, 2, '3', 4, 5, '7']);

  // Q5

  let 철수쌤 = { subject: 'math' };
  let 영희쌤 = { subject: ['science', 'english'] };
  let 민수쌤 = { subject: ['science', 'art', 'korean'] };

  const printLastSubject = (x: { subject: string | string[] }): void => {
    if (typeof x.subject === 'string') {
      console.log(x.subject);
    } else if (Array.isArray(x.subject)) {
      console.log(x.subject[x.subject.length - 1]);
    } else {
      console.log('출력할거 없음!');
    }
  };

  // printLastSubject(철수쌤);
  // printLastSubject(영희쌤);
  // printLastSubject(민수쌤);

  type Animal = string | number | undefined;
  let ani: Animal = 3;
  ani = undefined;
  ani = 'test';

  // Name이라는 변수는 string, Age라는 변수는 number -> Person은 string or number
  type Name = string;
  type Age = number;
  type Person = Name | Age;

  // positionX랑 Y의 타입을 정의하고 Newtype을 만들어 X와Y를 합쳐준다.
  type PositionX = { x: number };
  type PositionY = { y: number };
  type NewType = PositionX & PositionY;
  let position: NewType = { x: 10, y: 20 };

  // Q1
  type Property = {
    color?: string;
    size: number;
    readonly position: number[];
  };
  let boxs: Property = {
    color: 'red',
    size: 10,
    position: [1, 2, 3],
  };

  // Q2
  type Userinfo = {
    name: string;
    phone: number;
    email?: string;
  };
  type Adult = { adult: boolean };

  type NewUser = Userinfo & Adult;

  // 수업중에 진행한 가위바위보 함수 만들기
  type Rsp = '가위' | '바위' | '보'; // Rsp를 아래 식에 넣어줘도 정상 작동!
  const rsp = (x: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] => {
    return ['가위', '보'];
  };

  // about as const
  var 자료 = {
    name: 'kim',
  } as const;
  // as const의 효과 1. 타입을 Object의 value로 바꿔준다. -> 타입을 kim으로 바꿔줌
  // 2. object안의 모든 속성을 readonly로 바꿔준다. -> 변경시 에러 발생

  const 내함수 = (x: 'kim') => {};
  내함수(자료.name);

  // 함수에 들어갈 타입도 type alias로 저장 가능!
  type Sum = (x: number, y: number) => number;

  let sumNumber: Sum = (x, y) => {
    return x + y;
  };

  //회원 정보 Object를 타입지정 해보기!
  type Userinfos = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
  };
  let 회원정보: Userinfos = {
    name: 'kim',
    age: 30,
    plusOne: (x) => {
      return x + 1;
    },
    changeName: () => {
      console.log('안녕');
    },
  };

  //젤 앞글자 0 지우기, 전화번호 하이폰 빼는 함수 타입 지정 연습
  type CutZero = (s: string) => string;

  let cutZero: CutZero = (s) => {
    s[0] === '0' ? (s = s.replace('0', '')) : null;
    return s;
  };
  // console.log(cutZero('0fae'));

  let removeDash = (s: string): number => {
    s = s.replace(/-/g, '');
    return Number(s);
  };
  // console.log(removeDash('010-5011-8246'));

  type MultiFn = (s: string, cutZero: CutZero, removeDash: (s: string) => number) => {};
  let multiFn: MultiFn = (s, cutZero, removeDash) => {
    let result = removeDash(cutZero(s));
    return Number(result);
  };
  console.log(multiFn('010-5011-8246', cutZero, removeDash));

  //interface 사용 기본형!!! type이랑 비슷한데 =가 사라진다! 인터페이스는 중복 선언 가능하고 type은 불가능하다.
  interface Square {
    color: string;
    width: number;
  }

  let nemo: Square = {
    color: 'red',
    width: 100,
  };

  // Q1
  interface Student {
    name: string;
  }
  interface Teacher extends Student {
    age: number;
  }
  let 학생: Student = { name: 'kim' };
  let 선생: Teacher = { name: 'kim', age: 20 };

  // Q2 인터페이스 작성해보기
  interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
  }
  let 상품: Product = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone'],
  };

  // Q3 인터페이스 작성해보기
  interface Cart {
    product: string;
    price: number;
  }

  interface Cart2 extends Cart {
    card?: boolean;
  }

  let 장바구니: Cart2[] = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
    { product: '삼다수2', price: 8001, card: true },
  ];

  // Q4 인터페이스 작성해보기
  interface Cal {
    [key: string]: (a: number, b: number) => number;
  }

  let cal: Cal = {
    plus: (a, b) => {
      return a + b;
    },
    minus: (a, b) => {
      return a - b;
    },
  };
  return (
    <div>
      <h1>테스트입니다.</h1>
      <button
        onClick={() => {
          showcs('show함수실행!');
        }}
      >
        showcs함수 실행!!!
      </button>
    </div>
  );
}

export default App;
