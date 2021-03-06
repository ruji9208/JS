// 다음 섹션으로 가기 전에 하나 알아야 할 것이 있는데, 바로 조건문이야
// conditional(조건문)은 true인지 false인지 알려주기 때문에 아주 중요해

// 뭔가를 확인해야 할 때 거의 대부분 사용할 거야
// 예를 들어, 사용자가 로그인되어 있다면, 무언가를 보여준다든지
// 아니면 사용자가 무언가를 할 때 반응하는 것을 만들 때.

// 키워드는 'if'야

// 만약 (if) 이것이 맞으면? 만약 (if) 숫자가 보다 크면? 만약 (if) 날씨 정보를 알 수 있다면?
// 그럴 때 if를 사용할 거야. 그럼 if와 else를 배워보자
// 하기 전에, 전에 했던 것을 복습할게. 먼저 function. 우린 function을 호출하는 법을 배웠어
// 그리고 argument(인자)를 배웠고 string, boolean, number같은 data type(자료형)을 배웠어
// 이것들을 연습해보고, 마지막에 if, else같은 조건문을 추가해볼게
// 뭘 할 거냐면, 아주 나이스한 나이 계산기 만들기야. 이 계산기는 음주가 가능한 나이인지 아닌지를 알려줘
// 그게 다임. 간단해보이지. 근데 아직 네가 모르는 것들을 많이 사용할 거야
// 그럼, 유저의 나이를 묻는 것으로 시작해보자. 뭘 해야 하냐면
// age라는 variable을 만들고 18살, 19살로 직접 넣는 대신, prompt라는 function을 사용할 거야
// prompt는 사용자에게 창을 띄울 수 있도록 해줘. 보다시피, prompt는 개의 argument를 받는데
// 하나는 message(문자), 다른 하나는 default라는 거야. 우리는 message만 넣을 거고 message는 string이야
// prompt는 사용자에게서 message를 보여주고 값을 넣으라고 말해줄 거야
// 보여줄게. "몇 살이야?" (위와 같이 작성)
const age = prompt("How old are you?");     // <-----------------아직 작동하지 않고 자바스크립트를 정지시키고 있다. 
console.log(age);
console.log(typeof age);


// 완료! 여기에 console.log(age) 해볼게. 새로고침을 하면 보다시피, 페이지가 계속 로딩하는 것처럼 보여
// 봐봐. 로딩중이지. 그리고 나이가 얼마인지를 물어봐
// console에서는 아무 반응이 없어. 이걸 이해하는 게 중요해
// 이 페이지는 javascript를 일시정지시키고 있어
// 그치? 지금 여기서 javascript는 잠시 멈춰있어.
// 이 function의 역할이야. javascript는 여기서 가만히 우리를 기다리고 있어
// 보다시피, console.log(age)는 아직 작동하지 않았어
// 내가 아무 것도 안하면, 아무 일도 일어나지 않을 거야. 보는 것처럼, 이것은 자바스크립트 코드의 실행을 멈추게 해
// 그게 더 이상 prompt function을 사용하지 않는 이유지. 알겠니?
// prompt를 안 쓰는 이유는, message가 별로 안 예쁘고 아무런 스타일, 즉 CSS를 적용시킬 수 없거든
// 여기 있는 버튼도 못 바꿔..그리고 어떤 브라우저는 이런 팝업을 제한하기도 하고.
// 이건 아주 아주 오래된 방법이야. 유저에게 값을 물어보려고 사용을 했었거든
// 요즘에는, 대부분이 HTML, CSS로 만든 자신만의 창을 사용해. 아주 멋있고, 사용자가 값을 작성할 수 있어
// 아무튼 이건 브라우저로 할 수 있는 가장 직접적인 방법이고 그런 걸 수행하는 function으로 prompt라는 걸 쓸 수 있어
// prompt가 이런 걸 해주지. 간단하게 쓸 수 있고, 자바스크립트는 네가 답하기 전까지 실행을 멈춰.
// 꼭 답할 필요는 없어. 싫으면 cancel을 누르면 돼. 네가 보듯, cancel을 누르면
// console.log(age)는 age가 null이라고 알려주지. 그 뜻은 아무 것도 없음(null)이야
// 아니면, 다시 새로고침을 하고 OK 버튼을 누르면 age는 아무 것도 없어. 비어있지.비어있는 string인 거야.
// 만약 156을 입력하면, 이렇게 값이 출력돼. 보다시피, 아주 흥미로워. javascript와 브라우저의 역사를 약간 엿볼 수 있고
// 우린 여전히 아주 오래된 기술을 쓸 수 있어. 브라우저랑 javascript는 여전히 이걸 지원하지만 사람들은 더 이상 쓰지 않지
// 아무튼, 우리는 이걸 쓸 거고 덕분에 type를 배울 수 있었지 여기서, 우린 뭔가를 확인해 볼 거야.
// 여기서 15라고 답해보자. 좋아. 이런 식으로 하는 거랑은 달라
// 네가 보듯, javascript는 무엇이라도 value로 가져갈 거야. 알겠니?
// 우리는 한 type으로 받아서 다른 type으로 바꾸는 작업을 해 볼 거야. 
// 약간 이상하게 들리겠지만 뭘 할 거냐면, 사용자가 무엇을 입력하더라도 그걸 number로 바꿔 볼 거야. 
// 이건 number로 보이는데 과연 number가 맞을까? 여기 답은 '아니'야

// value의 type를 보려면 typeof라는 키워드를 써야 돼. typeof를 하고, 한 칸 띄우고, variable을 적으면 새로고침하면 알 수 있어
// 보다시피 string이야. 이게 javascript로 안보이고 이상해 보인다면... 나도 동의해
// 아마 이렇게 해도 될 거야. 아무튼 이건 이렇게 써.
// 자바스크립트는 조금 이상해서 그래. 종종 무언가 이상한 것들을 추가하거든... 아무튼, 이렇게 하면 돼
// 이게 variable의 type을 보는 방법이야. 알겠니?
// 여기 보면,이런 숫자를 썼는데 age의 type은 string인 것을 알 수 있어. 이건 기본 값이야. 
// 12를 적든, 그래도 string, aa를 적어도 string 네가 보듯, 아무 것도 안 적어도 string
// 여기서 우리는 뭘 배울 거냐면 type을 변경하는 방법을 배울 거야. 어떻게 string을 number로 바꿀 수 있을까?
// 예를 들어, ""를 로 어떻게 바꿀까? 분명 방법이 있을 거야. 가능해!
// 이것을 하기 위해 다른 function을 쓸 거야. 이미 만들어져있는 function인데 parseInt라는 function이야
// 이건 무슨 기능을 하냐면~ 여기 있네. string을 number로 변환합니다
// string을 number로 변환해주는 거야. 아주 사용하기 쉬워. 그 뜻은
// 예를 들어, (위와 같이 작성) 


// 이러면 ""를 로 변환해주겠네. 차이를 확인해보자
// (위와 같이 작성)


// 차이를 보자. 여기서 새로고침을 하면
// 네가 보듯, string 그리고 number 멋지지 않니? 여기서 age를 console.log하고 이게 무엇인지 알고 작동도 잘해
// parseInt(age)도 console.log해보자 새로고침 하고 를 넣으면 하나는 string이고, 하나는 number야
// 아주 멋져. 


// 이게 멋진 이유는 이 숫자가 어떤 수보다 큰지 작은지 알 수 있기 때문이야
// string이면, 숫자와 크기 비교를 할 수가 없어. number로 바꿔야 알 수 있는 부분이지
// 또한 이건 어떤 도움을 주냐면, 사용자에게 나이를 물어봤는데, 사용자가 숫자가 아닌 걸 입력했을 경우를 인지할 수 있어
// 문자를 입력하면, NaN이 나오지. 이 문자를 parseInt 하면 Not a Number(NaN) 숫자가 아님을 알 수 있지
// 계산기 만들기에 필요한 모든 것을 배웠어. 나이 계산기 말이야

// 아주 좋아. 우리는 string을 number로 바꾸는 방법을 아는 거야. 그리고 여기처럼 string을 받고 number로 바꾸고자 한다면
// NaN(Not a Number)가 뜰 거야. parseInt는 "lalalala"같은 string을 처리하지 못해
// ""같은 것만 처리할 수 있어
// 알겠니? 아주 아주 유용해. 우린 NaN인지 확인만 하면 되는 거야.
// parseInt한 후의 age가 number형이 아니라면 message를 띄울 거야. 알겠니?
// 살짝 코드를 변경해보자
// (위와 같이 작성) 


// 짜잔! 네가 보듯, 난 두 가지 function을 사용했어. 이게 첫 번째 function이고 사용자의 나이를 묻는 역할을 하지
// 그리고 ""를 받았다고 하자.  그리고 parseInt를 실행할 거야. parseInt는 ""를 로 변환할 거야
// function은 내부에서부터 외부로 실행돼. 여기를 보면, 이게 실행될 첫 번째 function이야
// javascript가 먼저 prompt로 물어볼 거고, 우리는 답할 거야. 라고 답해보자
// 그러면 javascript가 parseInt("")를 실행해서 로 변환할 거야
// 아니면 이런 식으로 답한다면 parseInt는 이걸 받고, NaN라고 알려줄 거야
// 잘 작동하는지 확인해보자. console.log(age) 해볼게
// 완료! 새로고침해보자
// ( 입력)

// 보다시피 number가 나왔어. 다시 새로고침해서, (위와 같이 입력)
// Not a Number(NaN)가 나와. 완벽해!
// 다음 강의에서 배울 것은, 무언가를 확인하는 방법이야
// age가 number가 아니면 사용자에게 너의 age를 다시 입력 하라고 할 거야
// 알겠니? 만약 age가 NaN이 아니라면, (number라면) 내가 만든 계산의 결과를 보여줄 거야
// 여기서 가장 중요한 키워드는 'if'야. 만약 age가 NaN이라면, 필요한 작업을 할 거고 그 반대라면, 또 다른 작업을 할 거야
// 이해되니? 다음 강의에서 보자
// 안녕