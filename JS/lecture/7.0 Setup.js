/* 이번 섹션에선 todo 리스트를 해 볼 거야
그러니까 todo.js 파일을 만들고 바로 시작해보자
자 여기로 와서 todo.js 파일을 import 할거야
그리고 바로 시작해보자. 빨리 해보고 싶어
우선 우리에게 뭐가 필요한 지 생각해봐야 해. form 이 필요해, 그렇지?
왜냐면 사용자가 todo 를 입력해야만 하고, list 도 필요해
사용자가 todo 를 나열할 수 있어야 하기 때문이야
todo 목록에서 todo 들을 확인할 수 있어야 해
그럼 바로 그걸 해보자
여기에 form 을 만들게
이 form의 id 는 todo-form 으로 하고
그리고 나서 input 도 만들거야
(위와 같이 작성)
좋아 그리고 이걸 필수(required)로 만들자
자 어떻게 생겼는지 봐 볼까
여기로 와서 Nico 로 로그인 해볼게
좋아, 이제 todo 를 쓰고 Enter 를 치면
짜잔, 된다
보다시피 물론 실행되는 JavaScript는 없고 페이지가 새로고침 돼
왜 그런진 설명하지 않을 거야. 왜냐면 이미 Greetings 부분에서 설명했기 때문이야
좋아. 이게 끝이야
이제 리스트를 만들자
todo-list 라는 id 를 가진 ul 을 만들거고, 이게 다야
이 리스트에는 아무 것도 추가하지 않을거야
JavaScript 로 li 를 추가할 거거든
HTML 에는 아무 것도 쓰지 않을거야
우리는 JavaScript 를 사용해서 li 를 만들거야
그러니까 이 리스트는 처음에는 비어 있을 거야
자, 이제 뭘 만들 거냐면...아냐 만드는 게 아니라
form 과 ul 을 HTML 에서 JavaScript 로 가져가보자
toDoForm 을 가져오는데 getElementById 를 사용할게
다음은 toDoList 인데 이것의 아이디는 todo-list 야
(위와 같이 작성)
완벽해
자 이제 우리는 greetings 의 form 에서 했던 것과 똑같을 걸 반복할거야
복습하자면, 네가 기억하듯 form 은 submit 이벤트를 가져
function을 만들고, 그 이벤트의 기본 동작을 막을거야
알고 있겠지만, submit 의 기본 동작은 페이지를 새로고침하는 것이고
그건 우리가 원하는 게 아니기 때문이야
알았지? 완벽해
자, 먼저 handleToDoSubmit 이라는 function 을 만들자
(위와 같이 작성)
오케이, 그리고 여기에 submit eventListener 를 만들자
handleToDoSubmit 으로. 좋아
이제 우리는 JavaScript 가 방금 발생한 event 를
handleToDoSubmit 함수의 첫번째 인자로 준다는 것을 알고 있지
자 이제 event.preventDefault() 를 하자
자, 이걸 테스트할 거야. 새로고침하고 내용 입력 후 엔터를 치면
(엔터를 쳐도 submit 기본동작인 새로고침이 일어나지 않음)
완벽하게 잘 동작하네
다음으로, 우리는 여기 있는 input 의 value 를 얻어내고 싶어
오케이? 여기서 다시 반복해보자
여기 toDoInput 이 필요하고
두 가지 선택을 할 수 있어
첫번째로 우리는 toDoInput 을 전체 document에서 찾아볼 수 있어. 전체 HTML 말이야
혹은 toDoInput 을 toDoForm 안에서만 찾아볼 수도 있어
여기 있는 form 말이야. 알겠지?
우리가 이미 toDoForm 을 찾아놨기 때문에, 그 안에서 input 을 찾을 수 있어
예를 들어 toDoInput.querySelector("input"), 이렇게 하면 돼
이거랑 이렇게 하는 건 같은 거야
똑같은 거야
즉, id 가 todo-form 인 form 안에서 input 을 찾는거야
또는 input 을 document 가 아닌 toDoForm 안에서 찾을 수 있어
이 두 개는 동일해
console.log 로 toDoInput.value 를 확인해보자
여기 와서, 새로고침하고
Inspect(요소 검사)를 해보면
자 여기 나오지
좋아. 자 이 정도면 충분해
지금은 이것으로 충분해
자 계속해보자
이제 할 건, input을 이렇게 비우는거야
Enter 를 누를 때마다, 입력한 것을 비우고 싶어. 알겠지?
그러니까 내가 Enter 를 누르면, 짠! 모든 입력값이 사라지는 거야. 알았지?
그래서 어떻게 하냐면, toDoInput의 value 에 빈 값("") 를 넣는 거야
알았지? 자 이제 잘 되는지 보자
여기 와서
완벽해. 잘 되네. 근데, input value 를 비우기 전에 그 값을 저장해보자
(위와 같이 작성)
그 후에 toDoInput 의 값을 비우는 거야. 알겠지?
자, 명심할 건 toDoInput.value 를 비웠다고 해서
newToDo 가 비워지는 것을 의미하는 것은 아니라는 거야
왜냐면 이 시점에, 바로 여기 말이지
우리가 하는 건 input 의 value 를 새로운 변수에 복사하는 것이기 때문이야
그 이후에 input 의 value 를 가지고 무얼하든
newToDo 에는 아무런 영향이 없어. 알겠지?
console.log 로 보여줄게
그리고 여기에도 toDoInput.value 를 console.log 해보자
됐어. 이제 새로고침 후 값을 입력한 다음 엔터를 누르고 Inspect 해보면 볼 수 있을거야
여기 보는 것처럼, 이게 toDoInput.value 야. 맞지
그리고 이건 newToDo 야
그리고 보다시피, toDoInput.value 는 여기 없네. console.log 되지 않았어
사실 여기 있어
(값이 empty("") 로 적용되었기 때문에 console.log 로 안 보임)
여길 봐
빈 칸이 하나 있지
좋아. 코멘트에 이것에 대한 질문이 너무 많아서
다시 설명해줄게
7번째 라인에서 우리가 하는 건, input 의 현재 value 를 새로운 변수에 복사하는 거야
알겠지? 그 다음에 우리가 무엇을 하든
newToDo 변수와는 아무 상관이 없어
이게 toDoList 의 첫번째 단계야
보다시피, 우리는 greetings 에서 한 것과 다른 일을 하는게 아니야
greetings 에서 한 것과 똑같은 걸 하고 있어. 그게 다야
이제 우리가 해야 할 일은 실제로 toDo 를 만드는 거야. 알겠지?
toDo HTML 요소(element). 좋아
다음 영상에서 하게 될 거야, 바이바이
 */