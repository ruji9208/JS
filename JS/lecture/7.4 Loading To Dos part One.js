/* 좋아, 지금 우리의 toDos 는 localStorage 에 있어
아주 좋아
하지만 아직도, 새로고침할 때마다
저 toDos 가 localStorage 에는 남아 있지만, 화면에는 나타나진 않아
이게 이번 영상에서 고쳐볼 내용이야
그래서, 저번 영상에서 보여준 것처럼
우리에게 선택지가 있는데, 예를 들어 array 를 stringify 하는거야
이렇게 됐어. 그냥 단순히 string 으로 바뀐 걸 볼 수 있지
이제 우리는 값을 string 으로 저장하고 싶을 때 이걸 많이 사용할거야
방금 우리가 한 거 말이야
좋아, 이건 string 이야. 완벽해
또한 우리에게 다른 방법이 있어
그건 우리가 이 단순한 string 을 가지고
살아있는 JavaScript object 로 만들어줄 수 있다는 거야
JSON.parse 로 이런 일을 할 수 있어
보다시피 멋진 array 를 가지고 단순한 string 으로 바꿀 수 있어
그리고서 이 단순한 string 을 가지고
JavaScript 가 이해할 수 있는 살아있는 array 로 만들 수 있지
이걸 보내볼게. localStorage 를 한번 보자
이걸 복사해서
했지? 여기로 와서, JSON.parse 를 하면
여기서 localStorage 에 있던 텍스트를 parse 할 건데
사실 이건 localStorage 에 있던 텍스트는 아니야
localStorage.getItem("todos") 로 직접 가지고 오면
짜자잔
자, 보다시피
처음 우리가 localStorage 에 갖고 있던 건 그냥 단순한 string 이었어. 그렇지?
우리가 이 string 을 JSON.parse 안에 넣으면
실제로 무언가를 할 수 있는 배열을 얻게 되는 거야
자, 이건 매우 귀중한 정보이고
그걸 여기서 해볼거야. 맨 마지막 줄에서
그 전에 있는 게 addEventListener 든 뭐든
이게 다 된 후에 우리가 해볼 것은 저 toDos 를 가지고 오는 거야
알았지? localStorage 에서 말야
그리고 우리는 이 단순한 string 을 살아있는 array 로 변환할거야
알겠지? 이게 우리가 localStorage 에 가지고 있는거야
보다시피 string 이야. 진짜 이상하게 생겼지? 그치?
이걸 parse 할거고
우린 살아있는 array 를 얻게 돼
그게 정말 정말 중요한 거야
자 여기로 와서
가장 먼저 해야 할 것은 savedToDos 를 얻는 거야
보다시피, greetings 에서 했던 것과 정말 정말 비슷해
여기서 우린 savedUsername 을 가지고 왔었지
그러니까 우리가 savedToDos 에
localStorage.getItem 을 할건데
여기 보면 "todos"를 한번 더 쓰고 있지
그래서 여기에 TODOS_KEY 라는 걸 두는 게 좋아 보여
좋아, 이렇게 하면 실수를 하지 않게 돼
TODOS_KEY 를 여기에 쓰자
됐지?
이제, 물론 우리는 어떨 때는 savedToDos 가 null 이 될 때도 있다는 걸 알아
왜냐면 여기 보는 것처럼, 우리가 localStorage 를 지우고서
savedToDos 를 console.log 해보면
뭐가 나올까? null
그렇지? 왜냐하면 localStorage 에 아무 것도 없기 때문이야
자 이제 뭘 할거냐면
만약 savedToDos 가 localStorage 에 존재하면
난 function 하나를 만들건데, 아니 function 이 아니라 variable 이야
parsedToDos 라는 variable 을 만들게
이게 하는 일이 뭐냐면
localStorage 에서 온 string 을 가지고... 맞지?
이 string 말야
localStorage 에서 갖고 온 string 인데
살아있는 JavaScript object 로 변하게 될거야
JSON.parse(savedToDos) 하면 돼
이건 이렇게도 할 수 있어
자 이제 보여줄게. savedToDos 를 console.log 하고
parsedToDos 도 console.log 해볼거야
새로고침하고 여기 Console 을 보면
이건 savedToDos 인데, 이건 그냥 string 이야
그리고 이건 parsedToDos 인데 이건 array 이지
이걸 사용할 수 있어
좋아, 이거 꽤나 멋지게 될 거야
내가 곧 보여줄 건데
array 는 실제로 굉장히 똑똑해
그건 JavaScript 에서 정말 중요한 Data Structure 야. 알겠지?
대부분의 경우, 너는 array 각각의 item 을 가지고 무언가를 하고 싶을거야
대부분의 경우, array 를 가지고, 예를 들어 여기 toDo 들(각각의 item)
너는 이걸로 뭔가를 한 다음, 이걸로도, 또한 이걸로도 뭔가를 하고 싶을 거야
즉 array 에 있는 각각의 item 에 대해 너는 function 을 실행하고 싶을 거야
화면에 뿌려주고 싶을 수도 있고
텍스트를 변형하고 싶거나
아니면 다른 걸 하고 싶을 수도 있어
하지만 이게 핵심이야
이 array 에 있는 각각의 item 에 대해서
function 을 실행하는 거지
알았지? 이게 정확히 JavaScript 가 할 수 있는 일이야
JavaScript 는 array 에 있는 각각의 item 에 대해 function 을 실행할 수 있게 해줘
자 여기 parsedToDos 는
이게 array 라서 forEach 라는 걸 갖고 있어. 여기
그리고 forEach 는 내가 말한 것처럼, function 을 실행하게 해주는데
그 array 에 있는 각각의 item 에 대해서 실행해줘
좋아, 이게 그 기능을 쓰는 멋진 방법이야
여기 있는 걸 지우고
우리가 늘 하던 방식으로 function 을 작성해 볼거야
여기에 sayHello 라는 이름을 가진 function 을 만들자
좋아, 여기에서 console.log("hello")를 할거야. 이게 다야
이제 JavaScript 한테 말해주는거야
parsedToDos 가 가지고 있는 각각의 item 에 대해
sayHello function 을 실행해줘, 라고
아주 간단하지
자 여기 3개의 item 이 있어
보자, 새로고침하면
hello 가 3번 찍혔지
맞지? 여기 보다시피, 잘 돌아가고 있어
다시, item 이 3개이고, hello 도 3번 나왔어
아 물론, 내가 이 array 에 한 개를 더 추가하면
더 넣어도, 몇 개를 넣어도...
됐어. 내가 이 array 에 item 을 많이 추가하면
(item 과) 같은 수의 hello 를 보게 될 거야
새로고침해보면, 짜자잔, 6개 hello 지
자 본 것처럼 이거 잘 돌아가고, 꽤 근사해
하지만 이건 이 array 의 item 들에 대해 한 개의 function 만 실행할 수 있게 해줘
지금 너에게 설명해주고 싶은 핵심은
지금 내가 어떤 item 을 사용하고 있는지 모른다면 완전 무용지물이라는 거야
여기 보다시피, 6번 실행되었어
하지만, 가장 좋은 건 처리되고 있는 item 이 어떤 것인지 아는 거야
submit eventListener 가 event(argument) 를 그냥 제공해 주는 것처럼
JavaScript 는 지금 처리되고 있는 item 또한 그냥 제공해줘
(위와 같이 작성)
오케이? 여기 와서 보면
as 두 번, a 두 번, b 한 번 나왔어. 놀라워
localStorage 의 Value 를 다 지우고, 한번 더 해보자. a, b, c, d, e, f, g.
새로고침하고 console.log 나온 걸 보면, 여기 나왔다. 자 보면
이건 a 차례, b 차례, c, d, e, f, g.
쩔어
그러니까 JavaScript 가 해주는 건, 문자 그대로 sayHello 를 가지고... 맞지?
JavaScript 는 array 를 보면서
이런 거 같이.. a, b, c, d, e, f, g.
JavaScript 는 이 array 를 가지고, sayHello("a") 를 하는거야
그 다음에는 sayHello("b") 를 하는거지. 그 다음엔 c, d, ... , g 까지
다 하고 나면 끝나는거야
알겠지? 보다시피 진짜 끝내주지
이걸 다시 보면, forEach 는 array 의 각 item 에 대해 function 을 실행하게 해줘
여기서 parsedToDos 를 console.log 를 해보는 게 도움될 거야
다시 새로고침하고
여기 보이지. 이게 parsedToDos 야
array 지. 그렇지?
그리고 forEach 는 각각의 item 에 대해 sayHello 를 실행시켜
하나, 둘, 셋, 넷, 다섯, 여섯, 일곱 번 실행해
그리고 우리에게 그 item 을 공짜로 넘겨주는 거야
자 다시 봐봐. sayHello. JavaScript 는 sayHello 를 가지고
JavaScript 는 이렇게 말해. 좋아. 첫번째 Item "a" 짜잔
그러면 우리는 여기서 "a" 를 사용할 수 있는 거고
그래서 여기서 "This is the turn of a" 라는 게 나오는거야 그 다음 JavaScript 는 "b" 를 가지고
(sayHello 의 argument 로) "b", "c", "d", "e", "f", "g" 를 주는 거야 어때? 완전 쿨하지?
알겠지?
자 만약 네가 이런 방법으로 function 을 작성하고 싶으면
그것도 좋은 방법이야
우리는 이걸 이렇게 사용할 수 있으니까. 그치?
이제 JavaScript 가 여기에서 array 의 각 item 을 가지고 실행시키는 걸 알지
이런 일을 하는 새로운 방법도 있어
shortcut(단축키) 같은 건데 이런 function 을 많이 만들지 않아도 돼
sayHello 나 또 다른 function 을 만드는 대신에
이 부분 item 을 가지고 여기에다가
console.log 를 할 수 있어
(위와 같이 작성)
이게 다야
이 두 가지는 동일해. 말 그대로 똑같아
하지만 이게 function 을 작성할 때 더 짧게 쓰는 방법이야
여기 보듯이, 이름도 필요 없고
function 을 쓸 필요도 없고
이런 것을 쓸 필요가 없어
이게 짧게 쓰는 방법이야. 알았지?
하지만 이게 나타내는 것은
parsedToDos 에 있는 각각의 item 에 대해서
console.log 를 할 거라는 거야. 여기 각각의 item 을. 알겠지?
두 개는 같은 거야. 이거랑 이거랑, 똑같아
이렇게 쓰는 걸 arrow function(화살표 함수)라고 해
어느 걸 사용해도 괜찮아
아무 문제 없고, 속도 차이나 다른 문제도 없어
좋아, 우린 이걸(arrow function) 사용할 거고, 여기 보면
똑같은 결과가 나오는 걸 알 수 있어
좋아, 할게 참 많았네
다음 영상에서 보자
걱정마, 이 섹션 마지막에 복습 영상이 있을거야. 바이바이
 */