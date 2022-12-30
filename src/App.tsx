import './App.css';

function App() {
  let name: string = 'woojin';
  name = '우진';

  let myAge: number;
  myAge = 25;

  let nameArr: string[] = [];
  nameArr = ['woojins', 'test', 'woojin'];
  console.log(nameArr);

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
  return (
    <div>
      <h1>테스트입니다.</h1>
      <button
        onClick={() => {
          showcs('show함수실행!');
        }}
      >
        showcs함수 실행!
      </button>
    </div>
  );
}

export default App;
