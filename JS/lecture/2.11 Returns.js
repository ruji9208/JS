// 이것이 나의 calculator야. 더하기, 빼기, 곱하기, 나누기, 제곱
// console.log를 했고... 이게 전부야. 잘 작동해!
// 이번 영상의 요지는, (이 calculator에서) console.log를 쓰지 말자는 거야. 그래, console.log는 잘 작동하지
// console.log는 console에 무언가를 log하는 거야 (기록하여 보여줌). 아주 멋지지만, 이제는 그만 할 거야
// 왜냐하면, 우린 사실 function 밖에서 결과값을 얻기를 원하기 때문이지. 이 function에서 답을 얻고 싶은 거야
// 코드 안에서 말야. 무슨 말이냐면, 그래, console.log는 console에 결과를 표시를 해주는데
// 궁극적으로 우리가 원하는 건 결과를 (콘솔이 아닌) 화면에 출력한다든지 무언가를 변경한다든지, data를 받아서 사용하기를 원해
// 예를 들어, 사용자가 ToDo(할 일)를 주면 그 ToDo를 받아서 array에 넣고 싶겠지. 뭐 그런 걸 해야하는 거야
// data를 얻어서, 그 data로 무언가를 해야 돼. 지금 네가 이 코드를 보면 나는 계산의 결과를 가지고 아무것도 하지 않았어
// 
// (계산의 결과들 설명 중)
// 
// 물론 더하기, 곱하기, 빼기, 나누기, 제곱을 하고 그 결과를 console에서 볼 수 있어. 그건 사실이야. 그런데 더 쉽게 이해하기 위해서
// console.log를 alert로 대체해볼게. 왜 내가 function에서 console.log나 alert의 사용을 원치 않는지 알게 될 거야
// 내가 원하는 건, 이 function이 계산의 결과를 나에게 제공하는 거야. 그 결과를 코드 상에서 알려주는 거지. 
// console.log를 alert로 바꾸자. 이제 내가 말하려는 게 이해가 될 거야. alert의 기능은, 메세지를 경고문으로 보여주는 거야
// 해보자! (새로고침 후 작동) 잘 작동해! 보다시피, 그냥.. 무언가가 일어났을 뿐이야
// alert로 일어났고, 브라우저에서 일어났고, 그걸로 끝이야. 그냥 끝난 거지. 알겠니?
// 그렇다면! plus의 값은 무엇일까? plus를 실행을 완료하고 난 다음에 plus의 값은 무엇일까?
// 내가 할 것은 (위와 같이 입력). 좋아. 해보자. 새로고침 하고~ alert가 실행되고. 보다시피, 실제로 plus의 값은 undefined야
// 약간 헷갈릴 수 있는 부분인데, 전에 얘기 했었어. function은 나를 위해 무언가를 해주는 것이야
// 내가 function을 20번 호출했으면, 내가 보낸 data를 가지고 20번 alert 할 거야. 뭐.. 좋아!
// 
// 근데 대부분의 경우, 우린 function으로 무언가를 해서 그리고 function으로부터 결과 값을 얻기를 원할 거야. 그치?
// 더 나은 예제를 만들어 보자
// (위와 같이 작성)

// const calculator = {
//     add: function(a, b) {
//      alert(a + b);
//     },
//     minus: function(a, b) {
//      alert(a - b);
//     },
//     divide: function(a, b) {
//      alert(a / b);
//     },
//     powerOf: function(a, b) {
//      alert(a ** b);
//     }
// };
    
//     calculator.add(10, 5);
//     calculator.minus(10, 5);
//     calculator.divide(10, 5);
//     calculator.powerOf(10, 5);

//     console.log(calculator.add(10, 5));


// 좋아. 나의 한국 나이를 계산하는 function을 만들 거야. 해보자 (위와 같이 작성)

const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
};

// 좋아
// calculateKrAge는 외국 나이를 받아서
// (위와 같이 작성)
 
// 나는 이 function을 작동시키면서 console에 표시하는 건 원치 않아. 내가 하고 싶은 건, 한국 나이를 계산하는 거야
// ageOfForeigner에서 를 더하기 이게 나의 한국 나이야 나는 이 계산에서 

// 결과를 '받고' 싶어. 그것을 코드로 말이지

// 알겠니?함수가 그냥 어떤 기능을 수행하는 것이라고 생각하기보단 


//함수는 어떤 일을 수행하고 그 결과를 알려주는 것이라고 생각해봐.
// 그냥 조용히 일을 수행할 뿐만 아니라, 너에게 결과를 줘.
// 종종, 조용히 일만 수행하는 function도 있을 거고 종종 function으로부터 결과를 원할 때도 있을 거야. 맞지?

// console에서의 결과를 원하는 것이 아니라 alert 경고문에서의 결과를 원하는 것이 아니라 너의 코드에서 결과를 원할 거야
// 그래서! variable 하나를 만들어 보자
// (위와 같이 입력)

const krAge = calculateKrAge(age);
console.log(krAge);

// krAge는 calculateKrAge의 결과와 같을 거야. 좋아. krAge를 console.log해보자
// 여기와서 새로고침하고! 보다시피, krAge는 아직 정의가 되지않았어(undefined) 
// 아주 흥미로워. 무언가를 했는데 말이야. calculateKrAge에서 console.log를 사용하지 않았어. 그치만 우린 뭔가를 하긴 했잖아
// 근데, 우리가 빠뜨린 건 return을 하는 거야. 이 값을 말야. 맞지?
// return이라는 키워드를 사용했지
// function 안에서 무언가를 return 하면 무슨 일이 벌어지냐면 누군가가 function을 실행 할 때, 이것을 대체할 거야
// 이 부분을, 이것의 결과로 대체하는 거야. 이해하기 어려울텐데.. console.log를 사용해서 차이점을 알아보자
// 네가 보듯, 작동해! 무슨 일이 일어난 거냐면 calculateKrAge를 실행시키면 96이라는 argument가 age 자리로 대체가 돼
// 그 96이 이 자리로 가고, 그리고 96 + 2를 return하지
// 이건 98이 될 거고 return을 함으로써, function을 호출하는 코드가 98이 돼. 
// 이것이 console.log(krAge) 했을 때 98이 뜨는 이유야. 이제는 console에 출력하려고 function을 쓰지는 않을 거야
// 대신 어떤 작업을 처리하고 그 결과를 return하기 위해 function을 사용할 거야
// 보다시피, 이게 function이 function의 밖과 소통하는 방법이야
// 가끔은, function을 쓸 때 그냥 조용히 작업시키고 결과는 필요없는 경우도 있을 거야
// 그러나 어떨 때는 어느 작업을 하고 그 작업의 결과를 알려주는 function을 원할 거야
// 그 기능을 return이 수행해. 다시 말해서, 무언가를 return하면 계산을 담당하는 function의 코드는 그 function이 return하는 값과 같아질 거야
// 
// 예를 들어, 여기서 외국 나이에서 를 더하고 "hello"를 return 한다면 무슨 일이 벌어질 거라고 생각해?
// 무슨 일이 벌어지냐면, 한번 살펴보자. calculateKrAge를, 과 함께 실행시키면 여기의 경우에는 age야
// age는 이 될 거야. 그리고 ageOfForeigner는 이 돼! 알겠지? 그리고 여기가 이 되고 여기 줄이 이 돼
// 그리고 "hello"를 return하는 거지. 이 function이 작동을 완료 했을 때 이 function을 호출한 이 코드는 function의 return 값이 돼
// 그 뜻은 krAge는 calculateKrAge의 반환 값이 돼. 그 반환 값은 hello라는 string이지
// 못 믿겠으면 콘솔을 확인해보자! 여기서 새로고침을 하면 hello를 볼 수 있어.
// 그리고 우리는 function에서 console.log하는 게 아니고 function의 반환 값과 같은 variable을 console.log하고 있어.
// 우리가 만든 calculator로 이 작업을 하고 싶으면 alert나 console.log를 사용하는 대신 이 방법을 써야 돼. 
// alert를 return으로 바꿔. 좋아, 괄호는 지우고. 만약에 calculator.plus를 실행하면 console에는 아무것도 안 보일 거야.
// 여기 있는 것들 중 하나도 console을 부르지 않거든 여기서 새로고침 하면 console에서 아무 일도 벌어지지 않았어
// 근데 여기서 내가 이렇게 하면
// (위와 같이 작성)


// calculator가 나에게 이 작업의 결과를 줄 거야. 여기에 결과를 가지고 있어
// 아주 큰 차이가 있어. 여러분은 return하는 것이 무슨 의미가 있냐고 생각할지도 몰라
// 어쨌든 우린 plusResult를 console.log할 수 있는데 말야.
// return하는 것의 포인트는 console.log를 하는 것이 아니라 너는 궁극적으로 이 결과값을 화면에 보여줘야 할 거거든
// 여기 보면 잘 작동했는데 calculator 내부에서 console.log를 사용하지 않았어
// 그치?
// 마지막으로 한번만 더 복습해보자. plus function이 있는 calculator object가 있어
// 이 function을 a와 b를 argument로 가져
// a는 이고 여기 a는 가 되고 b가 이 돼
// 이 function은 a + b, 즉  + 을 return하지
// 이 function이 무언가를 return 하기 때문에 이 function을 호출하는 코드가 그 function의 반환 값이 되지
// 그 말인즉슨, 이게 가 되고 를 return하기 때문에
// 여기 있는 코드가 function을 호출했으니까, 가 돼
// 네가 function을 호출하고 이 function은 반환 값이 있다면 이 function을 실행했을 때 무언가를 실행하고 끝났을 때 너에게 반환 값을 줘
// 이 경우에는, 반환 값은 야. 알겠니?
// 보다시피, function 내부에서 console.log하는 것과는 큰 차이가 있어
// function의 외부에서 값을 얻은 뒤에 그 값으로 네가 원하는 모든 것을 할 수 있어
// 그걸 위해서, calculator를 살짝 변경해보았고 너의 이해를 돕기 위해, 내가 하고싶은 것은
// 코드의 긴 연결을 만들어 볼 거야. calculator의 function을 사용할 거고 전의 결과값을 사용할 거야
// plusResult를 구하고 minusResult를 구하고
// (위와 같이 작성)


// a는 plusResult로 하고, b를 으로 줄 거야. 그리고 timesResult를 써서
// (위와 같이 작성)


// a는 으로 하고 b는 minusResult로 하자. 보다시피 이것들은 '상호 의존적'이야
// 전에는 이런 것을 하지 않았어. plus의 결과 값을 얻지 못했었지. 오직 console에서만 plus의 결과를 알 수 있었지
// console에서 값을 가져올 수는 없었어. console은 그냥 보여주기 위한 것일 뿐
// 우리의 코드에서는 결과 값을 알 수 없었어. 보다시피, 지금 이 코드는 서로 의존하고 있어
// (위와 같이 작성)
// (위와 같이 작성)


// (a를 timesResult)
// (b를 plusResult)
// 마지막에 사용할 것은 power야
// (위와 같이 작성)
// (위와 같이 작성)
// (a를 divideResult)
// (b를 minusResult)
// 네가 보듯, 서로가 서로를 의존하고 있어(서로 연결됨). 이건 흐름을 이해하는 데 아주 좋은 방법이야
// 머릿속으로 값들을 바꾸면서 생각해봐. 그럼 보일 거야
// plusResult는 calculator.plus(, )의 결과랑 같아
// calculator.plus를 보자. 와 을 보내지
// 여기 와서 보면 , 
//  +  이것들이 결국 가 돼. 이건 무슨 뜻이냐면 plusResult는 가 돼
// 그리고 한번 더 대체를 해보자. calculator.minus가 있고 plusResult가 인 것을 알지
// 그래서 여기에 를 넣을 거야. 그러면  -  이 되지. 그러면 값을 알 수 있고 반환 값은 -가 돼.
// 여기가 -가 되지. 이렇게 값의 대체를 할 수 있었어. 여기 variable 자체가 function의 반환 값이기 때문이지
// 이 방법은 그냥 console.log할 때와는 차원이 달라
// 물론, 이걸 실행해보면 네가 보듯, 아무 일도 일어나지 않았어. 아무 것도 console.log하지 않았기 때문이지
// 근데 대신 plusResult에 접근 할 수 있어! minusResult에 접근 할 수 있고 timesResult에 접근 할 수 있고
// divideResult, powerResult까지도..! 알겠니? 잘 작동해!
// 네가 보듯, 이 variable은 value가 있어. 전에는 전부를 console.log했지만 근데 지금은 그럴 필요가 없어!
// 왜냐하면 function이 무언가를 return하기 때문이지. 다음 강의에선 빠르게 복습해볼게
// 잘가!