// 
// 그래. 이제 우린 function에 값이나 데이터를 보내는 방법을 알아
// 여기서 봤듯이, 우리는 console.log에서 하는 방식과 동일하게 데이터 보낼 수 있어.
// 이 console.log의 경우에는 이걸 그대로 인쇄하지만 sayHello의 경우에는
// "Hello my name is"와 우리가 보낸 데이터를 출력해야해
//  그래서 이번 영상에서, 어떻게 데이터를 받는지 알아 볼 거야. 왜냐면 우리는 이미 보내는 법은 알아
// 이제 우리는 어떻게 받아야 하는지 알아야지. 그치?
// 우리가 데이터를 받는 방법은 여기 ()에 데이터를 추가하는 거야. 데이터가 필요하면 여기에 넣어줄 거야.
// 그리고 우리가 원하는 어떤 이름이든, 어떤 variable 이름이든 넣어도 돼.
// 우리는 nameOfPerson이라고 해볼게.

// function sayHello(nameOfPerson) {
//     console.log(nameOfPerson)
// };

// sayHello("nico");
// sayHello("dal");
// sayHello("lynn");

// 우리가 이렇게 하면 자바스크립트는, sayHello로 보내진 첫번째 데이터가 nameOfPerson이라는 variable로 가게 된다는 것을 알아.
// 이제 여기 있는 "hello my name is"를 지우고 console.log로 nameOfPerson을 해보자
// 이제 우리가 콘솔에서 nico, dal, lynn을 볼 수 있어야겠지. 
// 잘 작동하는지 보자. 새로고침 하면 이 멋진 걸 봐.
// nico 
// dal 
// lynn


// 바로 이거야. 이게 우리가 바깥 세상에서 뭔가를 받는 방법이야. 우리의 function에서 말이지
// 그래서 예를 들어 첫번째 argument로 어떤 데이터가 들어오면 nameOfPerson이라는 variable 이름을 쓰게 된다는 것이지
// argument는 하나만 받을 수 있다는 건 아니고 우리는 argument를 하나 더 받을 수 있어
// 이건.. age가 될 수 있겠다. 그러니 age라고 적어볼게. 자 이 말은 내가 sayHello의 실행버튼을 누를 수 있는데
// nico가 nameOfPerson이 되는 것이고 그리고 age가 있는데 이 경우에는
// 살, 그리고 여기도 살 여기도 마찬가지로.
// 자 이제 보다시피 우리의 sayHello function은 개의 argument를 받고 있어.
// 첫번째는 string이 되는 것이고 두번째는 age가 되는 것이지. 물론, 이 두 가지 nameOfPerson과 age는 이 블럭 안에서만 존재해
// 이건 function의 body에만 존재하는 거야. 그래서 우리는 이런 걸 할 수 있어. 안녕, 나는 nameOfPerson이고 age살이야.
// 됐다. 자 여기서 어떻게 보이는지 보자. 짠!
// 여기 보면 안녕, 나는 nico이고 살이야. dal은 , lynn은 이래
// 자 됐어. 이게 우리가 데이터를 function에 보내는 방법이야. 이렇게 arguement를 보내고 이게 argument를 받는 방법이야

// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// };

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// 이게 아직도 헷갈린다면, 이번엔 아주 간단한 계산기를 만들어보자.
// 뭘 할 거냐면, plus이라는 function을 하나 만들어 볼게. 이 function은 2개의 argument를 가지는데, a와 b야
// 여기엔 말 그대로 어떤 이름이든 넣어도 돼. 어떤 거든 말야.
// 자 이제 이 function 안에서는 a와 b가 모두 존재하지.
// 그래서 a와 b를 console.log 해볼게. 알았지? 보다시피 우리는 plus function을 만들었어. 실행버튼을 눌러보자
// 명심해, 매우 중요한 게 우리가 실행버튼을 누를 건데 이렇게 하면 plus 실행버튼을 누르는게 아니지
// 이 () 두 개를 붙여야 한다는 거, 알겠지? 만약 우리가 a와 b를 보내지 않는다면, 무슨 일이 벌어지는지 보자
// 새로고침 했더니 보다시피 undefined와 undefined래. 좋지 않군. 

// function plus(a, b) {
//     console.log(a, b)
// };

// plus();

// function plus(a, b) {
//     console.log(a + b)
// };

// plus();

// 전혀 좋지 않아. 자 이렇게 a, b를 하는 대신에 이제 a + b를 해보자
// 그랬더니, 이건 우리가 본 적이 없는 타입이야. 

// NaN은 Not a Number (숫자가 아님)이라는 뜻이야

// 그래서 보다시피 우리는 function의 실행버튼을 누를 수 있는데, 얘는 a와 b를 필요로 해.
// 근데 우리는 a, b 없이도 실행할 수 있지. 물론, 좋지 않은 결과가 뜨지만.
// 그래서 우리가 이 문제를 처리해야 하는데, 나중에 해보도록 할거야. 
// 자 이제 plus function을 실행해 볼 건데, 이번엔 실제로 숫자를 보내보자. 그래서 난 8과 60를 보낼 거야. 알았지?

// function plus(a, b) {
//     console.log(a + b)
// };

// plus(8, 60);

// 자, 중요한 점은 여기 이 순서에 맞춰서, a는 8이 되고 a는 8이 되는 거고... b는 60이 되는 거야, 여기도 오케이? 자, 이걸 꼭 기억해둬!
// 여기 있는 이름은 뭐가 됐든 상관없어. 네가 원하는 대로 지으면 됨.
// 단지 기억할 건, (첫번째 변수인) a에는 첫번째 argument의 데이터가 전달되고 여기 (두번째 변수인) b는 두번째 argument인 을 가져간다는 거야.
// 그래서 여기에 a라고 하는 대신에 firstNumber라고 하고 그러면 다른 것은 secondNumber라고 할 수 있어.
// 그러면 firstNumber + secondNumber를 console.log 해야겠지
// 다시 네가 이걸 실행버튼을 누르면, 자바스크립트는 firstNumber를 로 바꿀 거고 그래서 firstNumber는 8이고.. 그리고 secondNumber는 60으로 바뀌지.
// 그러면 8 + 60를 console.log하게 되는 거야. 이게 우리가 데이터를 받는 방법이고, 순서는 매우매우 중요해
// 8은 firstNumber이고 60는 secondNumber이야.

// 네가 만약에 60이 firstNumber가 되게 하고 싶다면, 60이 먼저 들어가면 돼.
// 그리고 8은  다음으로 들어가면 되지. 그럼 이 firstNumber가 되고 이 secondNumber가 되는 거야.
// 알았지? 이제 잘 작동하는지 테스트 해보자. 여기 와서 새로고침하면, 짠! 작동하는군


// 자, function을 더 만들면서 연습해보자. function divide라고 할게
// a와 b를 넣고, console.log(a / b)를 할 거야

// function divide(a, b) {
//     console.log(a / b)
// };

// divide(98, 20);

// 그리고 이 divide를 실행하는 거야
// 명심해, 우리는 실행버튼을 눌러야하니까 ()를 써야 하고 divide는 두 개의 argument를 받는다는 것을 아니까
// 첫번째, 두번째 숫자들을 넣자.
// 자 해보자. 짠. 됐네. 그치? 훌륭해.끝났어. 이게 네가 데이터를 function에 보내는 방법이야.
// firstNumber는 여기에서만 존재해. 네가 만약에 console.log(firstNumber)를 function 밖에서 한다면 에러가 발생하게 될 거야.

// console.log(firstNumber);
// Uncaught ReferenceError: firstNumber is not defined

// 왜냐면 firstNumber는 이 블록 밖에서 존재할 수 없거든 그래서 이 블록은 firstNumber와 secondNumber에 접근할 수 있지만

// firstNumber와 secondNumber는 function 밖에서 존재하진 않아.
// 동일하게, a와 b는 divide function 안에서만 존재하는 거야

// 알았지? 좋았어. 자, 끝났어. 이게 우리가 function을 만드는 방법이야.
// 하지만! 우리는 이전 영상에서 봤듯이 우린 player.sayHello()와 같은 것을 하고 싶어. 그치?
// 예를 들어 console.log랑 매우 비슷하게 생겼어. 그치?
// 자, 그러면 player object를 만들어보자. name "nico"라고 해주고. 지금은 이 정도만 하자
// 근데 문자, 숫자, boolean 같은 데이터 타입을 넣어주는 대신에 뭘 할 거냐면, 
// sayHello라고 하고 이건 function과 같다고 해줄 거야. 이렇게 말이지.
// 나도 알아, 밖에서 했던 거랑 조금 달라 보이지. 이 밖에서는 어떻게 했냐면 function sayHello라고 했었어
// 이게 우리가 밖에서 했던 거지. object 안에서는 보다시피 약간 달라보여
// 이름이 (위치가) 바뀌었어. 걱정할 건 아닌 게, 기억하기 매우 쉬울 거거든.

const player = {
    name: "kuku",
    sayHello: function(otherPersonsName) {
        console.log("hello!" + otherPersonsName + "nice to meet you!")
    },
};

console.log(player.name);
player.sayHello("lynn");

//  그래서 우리는, sayHello라는 player 안의 function을 부를 때 console.log로 "hello!" 를 할 거야
// 알았지? 그럼 여기서 console.log(player.name)을 할 수 있고 다음에 이렇게 player.sayHello()를 할 수 있지
// 보다시피 마침내 console.log와 비슷한 것을 만들었어. 
// 우리만의 object와 function이지. 하지만 보다시피 sayHello는 어떠한 argument도 받지 않아
// 그래서 우리는 sayHello에게 바깥 세상으로부터 argument를 받도록 가르칠 거야
// 그래서 otherPersonsName이라고 할게. 그리고 여기로 와서 sayHello("lynn")이라고 할게
// 그래서 sayHello는 첫번째 argument로 "lynn"을 받는데 여기로 가게 될 거야. 
//그래서 우리는 "hello " + "lynn"... 이 아니고 otherPersonsName + " nice to meet you!"라고 할게
// 됐어, 좋아. 새로고침 하면 보다시피 작동해
// 안녕 lynn 반가워요! 그리고 우리는 우리의 player를 우리가 원하는 어떤 것이든, 누구든 인사하도록 할 수 있어
// 그치? hello nico, hello lynn, 짜잔!
// 이제 너만의 console.log 혹은 array.push와 같은 걸 가지게 되었어
// 우린 player.sayHello 라는 걸 만들었지. 완전 멋지지?

// 그래서 이 영상에서 우리가 한 걸 정리하자면 우리는 function에게 정보를 보내는 법을 배웠어
// 사실, 우린 어떻게 하는지 이미 알고 있었지. 우리가 console.log를 할 때 우린 console.log로 데이터를 보내는 걸 자주 했었어
// 우리가 몰랐던 것은 우리가 이 정보를 어떻게 받느냐였는데 이게 너가 정보를 받는 방법이야.
// 이건 function이 object 안에 있을 때만 가능해. 우리가 계산기를 만든다면, 이렇게 plus(a, b)를 하게 될 거야.
// 그리고 console.log(a + b)를 하겠지. 예를 들어서 말야. 그치? 물론, 기억하겠지만, 이렇게 plus만 쓰면 아무 일도 일어나지 않아.
// 우리는 실행버튼을 눌러야해. 그리고 plus는 a와 b를 예상하고 있으니까 우리는 a는 5, b는 5라고 제공해줘야 해
// 그리고 보다시피 VSCode는 이걸 도와줄 거야. VSCode는 plus가 a와 b를 기다리고 있다고 알려주지.
// 알았지? 이게 다야. 끝났어. 이게 바로 데이터를 function 안으로 보내는 법이야.
// 그리고 바로 이게. function이 그 데이터를 받는 방법이지.  그래, 다음 영상에서 우리가 지금껏 배운 것을 정리할 예정이니 다음 영상에서 만나자. 
// 안녕