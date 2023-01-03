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
