/* 좋아
다음으로, function 을 만들거야
paintToDo 라고 할게
좋아. 이 function 은 toDo 를 그리는 역할을 담당할거야. 알겠지
하지만, 이 function 은 지금 그려야 할 것이 뭔지 몰라. 그렇지?
그러니까 이 function 에 인자를 주자. toDo 아니, newTodo 라고 하자
그리고 이건 물론 text 가 될 거야. 알겠지?
이제 handleToDoSubmit function 이 paintToDo 를 사용하게 되는 거야
그러니 여기 와서 patinToDo() 를 호출하고
그리고 newTodo 를 보내는 거지
알겠지? paintToDo 한테 보내는 거야
자 이 변수 newToDo 는 input 의 value 를 비우기 전의 값을 나타내는
string 이야. 알겠지?
그런 다음 그 입력값을 paintToDo에 넣어서 호출하는 거지
자 이제 paintToDo 는 무엇을 그려야 할지 알게 될 거야
그러니 console.log 해서 확인해보자
(위와 같이 작성)
좋아. 한번 볼까. 새로고침하고
완벽해. toDo 입력 후 Enter 하면
i will paint sdsdsd
여기 나왔어
좋아. hello 라고 치면
i will paint hello
좋아, 잘 되네
input 에서 value 를 얻어서
paintToDo 라는 새로운 function 에 그 값을 보내는 거야
자, paintToDo 가 하는 일은 기본적을 이런 걸 만드는 건데
이런식으로
이건 새로운게 아니야
왜냐하면 네가 기억하듯, background 에서 똑같은 걸 했거든
backgound 에서 element 를 생성해서 body 에 추가했어
이 경우에, 우리는 li(list item)를 만들어서
그 li 를 ul(list)에 추가할 거야. 아주 간단하지
놀랍지? 이게 완전 간단하잖아
그럼, 뭘 해야 하지?
여기로 와서 제일 먼저 li 를 만들거야
(위와 같이 작성)
다시 말하지만 변수의 이름을 li 로 하지 않아도 돼. 알았지?
potato 라고 할 수도 있어
상관 없어
HTML 태그의 이름으로 만들 필요가 없어
여기 createElement 안에는 li 여야만 해. 알겠지?
하지만 나는 같은 이름을 썼어. 내 생각엔 그게 이해하기 더 쉽거든
오케이? 좋아
이제 뭘하면 될까?
내가 실제로 하고 싶은 건 이런식으로 li 를 만들기보단
span 을 이용해서 li 를 만들고 싶어, 이렇게
그 이유는 나중에 여기에 toDo 를 삭제하는 button 을 만들 것이기 때문이야. 알겠지?
그렇기 때문에 li 를 만들고 li 내부에 span 도 만들고 싶어
그래서 해야 할 건, 여기로 와서
좋아. 이제 두 element 를 만들었어
하지만, 이 span 은 li 내부에 있지 않아. 맞지?
넣어보자
(위와 같이 작성)
됐어. 이제 li 는 span 이라는 자식을 가지게 됐어. 맞지?
이제 span.innerText 에 newTodo 를 넣자
그러면 span 의 텍스트는 handleToDoSubmit 에서 온 newTodo 텍스트가 되는거지
이제 우리가 할 일은 console.log(li) 해서 어떻게 생겼는지 보는 거야
자 hello 라고 입력 후 Enter 하면, 볼 수 있어
li 가 있고, li 안에는 span 이 있고, span 안에는 hello 가 있지. 끝내주지?
이런식으로
방금 HTML 을 만들었어
쩔어
다시 보자. 우리는 li 를 만들었고
span 을 만들었고
그 span 을 li 내부에 집어넣었어
그 다음에는 텍스트를 span 내부에 넣었지
span 안에 넣은 새로운 텍스트는 사용자가 form 에서 우리에게 준 newTodo 값인거지
좋아. 이제 우리가 해야 할 건, 이 새로운 li 를 list(toDoList)에 추가하는 거야
자 우리는 li 를 가지고 있어
말 그대로 우리가 해야 할 건, 여기 와서 list 에 li 를 놓는 거야
얼마나 쉬워?
완전 껌이지?
자 해보자
(위와 같이 작성)
끝
완전 쿨하지?
자 이제 새로고침하고, 진짠지 보는 거야
여기로 와서, 뭐라고 할까... 나는 먹어야 돼
자 봐봐
숙면이 필요하니까 Sleep 도 넣어줄게
끝내주지?
기분이 어때?
완전 놀랍지?
나는 마셔야 돼. Drink 도 넣어주고
봐봐
물론 아무것도 입력하지 않으면 추가되지 않아
HTML 에서 field 를 보호하고 있어. (input 에 required 를 넣었기 때문)
이렇게 toDoList 를 만들었어
얼마나 쉬운지! 아주 간단해
당연히 HTML 을 검사해보면, span 이 들어있는 li 를 볼 수 있어
얼마나 멋져?
우리가 해냈어. 아주아주 간단히
그런데 문제가 있어. 우선, 첫번째 문제는 toDo 를 지울 수 없다는 거야. 그걸 하고 싶어
두번째 문제는, 새로고침하면 내 toDo 들이 사라져버려
이 부분이 사라져 버리는 거야
우리가 list 에 item 들을 추가할 수는 있지만, 지울 수는 없다는 것과
그것들을 어디에도 저장하지 않고 있어
이게 잘 실행되고 굉장히 멋져 보이지만
내가 새로고침하면 다 사라져버려
이걸 고치는 건 다음 영상에서 해볼 거야
하지만 지금은 이걸로 만족해도 돼. 왜냐면 toDoList 를 만들었기 때문이지
여기 볼 수 있듯이, 엄청 엄청 쉬워
새로운 건 하나도 없어
greetings 섹션에서 똑같은 걸 해봤어
submit event 를 받고, 기본 동작을 막고, input 에서 value 를 얻어냈어
여기서 유일한 차이점은 우리가 paintToDo 를 호출한다는 점이야
paintToDo 는 새로운 것을 하고 있지 않아
background element 를 만들 때와 같은 방식으로 element (li) 를 생성해
같은 방식으로 element (span) 도 생성하지
우리가 전에 한 방식과 똑같은 방식으로 자식을 추가하고
이전에 한 것처럼 text 를 바꾸고 있어
또 append 하지. 새로운 건 없어
우리는 새로운 코드를 전혀 사용하지 않았어
다음 영상에서 보자, 바이바이
 */