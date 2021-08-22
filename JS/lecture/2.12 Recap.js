// 네가 무슨 생각하는지 알아. 아주 어렵다는 것을.. 그렇고 말고
// 설명하기 어려운 개념이고 이해하기 어려워.
// 그냥 console.log하는 게 아니라 return을 해야하는 이유를 이해하기 어려울 거야
// console.log는, 콘솔에 결과를 보여주기 위한 것임을 알 거야. 브라우저에서 결과를 보여주는 alert 처럼. 알겠니?
// 
// 근데 a + b, a - b 같은 실제적인 계산은 javascript 코드에서는 그 value(값)를 바로 얻을 수가 없어. 
// 네가 calculator.plus(, )을 하는데 return하는 대신 console.log해보자
// (위와 같이 작성)



// 그래, console.log를 실행했어!잘 작동하는 것처럼 보여. 근데 plusResult를 확인해보고자 한다면 plusResult는 작동하지않아
// plusResult는 undefined(정의 안 됨)이야. 알겠니?
// 왜냐하면 내가 전에 말했듯이 네가 만약 function을 const, let, var 같은 variable(변수)에 할당하면
// variable에 function을 할당하면 그 variable은 plus function의 결과 type를 가지게 될 거야
// 다른 것들은 결과를 return하지? 그치? 여기서의 plus는 아무것도 return하지 않아
// plus는 무언가를 console.log만 할 뿐. console에서는 보여지더라도 우리가 원하는 상황이 아니야
// 모든 걸 항상 console.log하고 싶은 건 아닐 거야. 우린 function의 외부에서 그 value를 얻길 원하지
// 이 function은 계산 작업을 하기에 아주 좋아. 근데 우리는 value를 도출해내고 싶어. 
// 만약에 네가 망고 주스를 만들고 싶은데. 주스 기계에서 망고주스가 안 꺼내진다면? 집에 믹서가 있다고 해보자
// 주스를 만들고 싶은데, 만들어진 주스를 꺼내야 하잖아
// 이 경우에는 그걸 못하고 있는 셈이야. 망고주스를 보고 있는데, 그 주스를 꺼내지 못하고 있지
// a + b의 return 값이 필요해. 이 질문의 답이 필요한 거지. 그래서 console.log를 하는 대신에 return을 할 거야
// 그러면 규칙에 의해서 variable에 function을 할당하면 이 variable은 function의 return value를 가지게 되는 거야
// 그 뜻은, calculator.plus가 를 return하면 plusResult는 가 되겠지. 근데 이건 return을 했을 때에만 가능한 것이지

// 그리고 아주 중요한 개념인데 한번 return하면 function은 끝나. 
// return을 하면, function은 작동을 멈추고 결과 값을 return하고 끝나버려
// 예를 들어,
// (위와 같이 작성)


// 새로고침하면 hello는 나오지 않아. 알겠니?
// 그 이유는, 내가 return을 하면 이 코드는 절대 작동하지 않아
// 이 코드는 작동해 bye bye를 적어보면 전혀 실행되지 않을 거야
// 보다시피, hello는 떴고 a + b 의 값을 return했는데, bye bye는 작동하지 않아
// 왜냐하면 return하는 순간, function이 종료되기 때문이지
// 알겠니? 이게 javascript의 규칙이야. 내가 말했듯 종종 console.log를 하고 싶을 때가 있어
// 우린 결과를 눈으로 보기 위해서 지금까지 그렇게 해왔지.근데 대부분은 console.log를 하길 원치는 않을 거야
// 네가 원하는 건, function 외부에서 value를 제공받는 거야
// 예를 들어, 날씨 정보를 알고 싶다면 나중에 실제로 해볼 건데 사용자의 위치에 따라 날씨를 알고 싶다면
// 단지 그냥 날씨 정보를 구한 다음 console에 출력하지는 않을 거야. 
// 우리는 날씨 정보를 구한 다음 그 값을 (콘솔이 아니라) 화면에 멋지게 출력할 거야
// 그래서 console.log 대신에 return을 사용할 거야. 알겠니? 그래서 네가 하는 것은 대체하기(replacing)야
// 눈으로 해보거나 진짜로 대체해볼 수 있어. 이 방법은 내가 헷갈렸을 때에도 많은 도움을 줬어
// 여기 있는 function을 보고 plusResult의 마지막에 저장되는 값을 알고 싶다면 
// plus function을 보고 a와 b를 인자로 가지니까, 2와 3이 되겠지.
// 2, 3으로 대체하고 그럼 여기도 2, 3이 될 거고 결국 가 5되지. 5를 반환하고 그럼 우리는 추측을 할 수 있어
// 여기의 반환 값이 5가 된다는 것을! 그럼 plusResult를 console.log하면 5가 나오지
// function은 계속 남아있는 게 아냐. (실행되고 나면) 사라지고, 마지막엔 결과를 남겨
// 알겠니? 다 했어. 좋아 여기까지가 javascript의 이론이였고
// 다음 섹션에서는 javascript로 HTML을 수정하고, 변경하고, HTML을 인터렉티브하게 만드는 방법을 배울 거야
// 지금까지 console에 너무 많은 시간을 쏟았어
// 눈이 아플 정도야.. 더 이상 console을 보고 싶지 않아
// 대신! javascript로 HTML 페이지를 수정하는 과정을 배울 거야
// 네가 보듯, 여기 body에는 아무것도 없어. 나는 이것을 인터렉티브(쌍방향으로 작용)하게 만들 거고
// 물론 javascript도 계속 배울 거야. 예를 들어 조건문도 배우고 많은 것들을 배울 거야
// 여기까지가 javascript를 소개하는 섹션이였고 다음 강의에서 보자
// 
// 질문이 있으면 댓글로 남겨줘. 다음에 보자!
// 안녕