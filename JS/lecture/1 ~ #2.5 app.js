// 2 + 2로 했을 때 4가 나오는 이유는 이미 브라우저가 2를 숫자로 알고 있기 때문이다. 
// integer라고 부르지 number이라고 부르지 않는다. 'full number'라고 부르는 정수형이다.  
// float라고 하는 소수형도 있다. 
// hello라고 하면 undefine 에러가 나온다. 자바스크립트 세상에는 존재하지 않기 때문에 
// "hello"라고 하면 인식. "hello" + "kuku"라고 하면 뭘 할지 알고 있고 두 가지 텍스트를 더한다. 
// 하지만, 정식명칭은 text가 아니라 string(처음부터 끝까지 글자로 이어져 있다는 뜻, 
// 그래서 공백이 있으면 안되고 따옴표로 묶어야 공백까지 문자로 인식한다.)이다. 

// alert("hi");
// 이 파일을 브라우저에 띄어도 화면에 내용을 그대로 보여줄 뿐이다. 실행이 목적인데 js파일과 css파일을 연결하는 접착제 같은 것이 필요
// 그게 바로 html이다. 
//브라우저는 html을 열고, js와 css파일을 가져오는 거다.

console.log(549290);
// xx.xx와 같은 형태 나만의 것을 만들게 될거다. 

console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

// 위에서 아래로 읽고 있다. 7 10 2.5 이렇게 순서대로 
// 변수는 값을 저장할 때 사용. const를 사용 

const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);

// const는 상수라는 뜻이고 변경하고 싶은 마음이 없는 변수를 만들 때 사용 
// let은 업데이트가 가능할 수 있는 변수를 만들 때 사용
// let myName = 'kuku';라고 했다가 let myName = 'kuul';로 하면 kuul로 변경이 됨 
// const로 변수를 만들면 같은 변수명으로는 업데이트, 변경이 불가. 가끔 변수는 절대로 변경하지 말아야 할 때가 있는데 그 때 쓰면 된다. 
// const를 기본으로 let은 변경, 업데이트 필요에 의해 사용 
// var은 과거의 방식. 업데이트가 불필요하게 되어도 콘솔창에서 에러를 통해 알려주지 않는다. 

// boolean -> true, false가 끝  
// 0 / 1이 있는데 0은 꺼져 있다는 뜻이고 1은 켜져 있다는 뜻이다. 
// true와 false는 "", ''를 쓰지 않는다. string이 아니기 때문이다. 다른 자료형이다. 

const amIFat = false;
console.log(amIFat);
const amUFat = null;
console.log(amUFat);

// 언제 쓰는가? 예를 들어 사용자가 로그인을 했는가? 하지 않았는가? 이 때 숫자나 문자가 필요없고 true, false가 필요 
// 비디오가 재생되고 있는가? 웹사이트가 로딩되고 있는가? 
// 존재하지 않음, 정의되지 않음, 아무 것도 없음(null) - 데이터 타입 
// null은 false와 다르다. false는 값이 존재한다는 뜻. null은 여기에 아무 것도 없다는 뜻. 
// amUFat은 비어 있다는 것이 아니라 아무 것도 없는 상태로 채워진 것이다.

let something;
console.log(something); // undefined, 변수는 존재하는데 정의되지 않은거다. 그래서 컴퓨터 메모리 안에는 존재. 공간은 있는데, 값이 들어있지 않음

// null은 우리가 변수 안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 거다. 

