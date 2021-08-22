/* 좋아, 지금까지 많은 걸 배웠어
그 중 하나는
JavaScript 의 object 나 array 등을 string 으로 변환시킬 수 있었어
그리고 나서 우리는 그 string 을 가지고
다시 string 이 아닌 JavaScript 에서 사용 가능한 object 로 만들 수 있다는 것을 배웠어
이 경우는 array 로 변환돼
그 다음에는 array 의 각 item 에 대해 하나의 function 을 실행할 수 있다는 것을 배웠어
그렇지? parsedToDos.forEach 를 쓰고 여기 function 을 작성해서 했지
이제, 둘 중 하나를 선택할 수 있다는 것도 알아
첫번째 방법은 arrow function 을 사용하는 거야. 이렇게
두번째 선택지는 sayHello function 을 만드는 거지
JavaScript 는 item 을 그냥 넘겨주니까, 이렇게 console.log 하면 돼
자 이렇게 두 가지 방법이 있는데, Arrow function 이 이것보다 더 짧게 쓸 수 있었어
그렇지?
하지만 두 방법은 똑같은 거야
그리고 기억해, 가장 중요한 것은 내가 말했듯이
JavaScript 는 이 function 을 호출하면서 array 에 있는 각각의 item 을 준다는 거야
sayHello() 를 6번 실행하는 것이 아니야
이건 먼저 sayHello("a") 를 한 번 실행하고
또 한번은 sayHello("b"), 또 한 번은 sayHel("c"), 계속 한 번씩... 하는 거야
좋아. 우리는 이렇게 작성할 수 있어
길게 할 수도 있고, 더 짧게 만드는 방법도 있지
하지만 이건 동일한거야
우리는 item 을 받아서 item 을 사용하도록 선언했어
자 이제 우리는 이 console.log 를 바꿔볼 거야
더이상 console.log 는 필요하지 않거든
지금 우리가 원하는 건, parsedToDos array 내부의 item 들을 가지고
그 item 을 나타내고 싶은 거지
그리고 다행스럽게도 이미 item 을 화면에 그려주는 paintToDo function 을 갖고 있어
li 와 span, button 및 eventListener 등 모든 걸 생성하는 function 이 있어
이미 갖고 있지
이 function 이 필요로 하는 건 newToDo 하나밖에 없어. 맞지?
그러니, 이건 되게 쉽게 바꿀 수 있는 거야
왜냐면, 다시 말해줄게. 생각해봐
여기 있는 item 은 곧 예를 들면 a, b, c, d, e, f 이기 때문이야. 맞지?
사실상 우리가 보내기 원하는 텍스트인 거지
그래서 이런 복잡한 일을 할 필요 조차 없어
그저 paintToDo 를 호출하기만 하면 돼. 그럼 끝이야
얼마나 대박인지 봐봐
이것만 하면 돼
왜냐하면 paintToDo 는 텍스트를 받는데
JavaScript 는 그 텍스트를 paintToDo 에게 전달해주거든
다시 말해, JavaScript 는 paintToDo 에 "a", ..., "d" 를 넣어주기 때문이야
그것들은 우리 array 에 있는 각각의 item 이지
아주 멋지지?
그래서 JavaScript 는 이것("a")을 paintToDo 할 거고
"b", "c", "d", "e" 계속 paintToDo 할 거야. 알겠지?
자 이제 진짜인지 볼 준비 됐어?
3, 2, 1 새로고침
이것 좀 봐봐
array 에 있는 각각의 item 들을 화면에 출력했어
완전 쿨하지. 믿을 수 없어
놀라워, 정말 놀라워
다시 nico 로 로그인하고... 봐봐
멋지지?
정말 대단한 것 같아
자 이제 더 추가해보자. a, b, c, d, e, f, g 에
h, i, j, k 를 넣어보자
좋아
이제 localStorage에 저것들이 저장되었는지 보면
이거 봐봐, 문제가 있어
localStorage 에 저장이 잘 안 되었어
새로 추가한 것들만 localStorage 에 저장되고, 예전 것은 없어졌어. 이게 문제야
여기 보다시피, 예전 것들을 복원했는데
여기에 a, b, c, d 를 추가하면 예전 것을 덮어쓰고 있어
우리는 덮어 씌우는 것을 원하지 않아, 그렇지?
이전 것과 새로운 것을 모두 유지하고 싶어
이런 일이 벌어진 이유가 뭐냐면, 여기 보다시피
application 이 시작될 때 toDos array 는 항상 비어있기 때문이야
그리고 newToDo 를 작성하고 form 을 submit 할 때마다
newToDo 를 toDos array (빈 array) 에 그냥 push 하게 돼
그리고 그 toDo 를 저장할 때
나는 새로운 toDo 들만 포함하고 있는 array 를 저장하는 거야
이 array 는 이 전의 toDo 들은 갖고 있지 않아
전에 있던 toDo 들은 localStorage 에 들어있잖아
새로운 toDo 들은 사용자가 입력하는 것들이고
자 이건 정확히 우리가 설계한 대로 잘 동작하고 있어
우리는 단지 newTodo 들만 toDos array 에 추가해서
단지 newTodo 들만 localStorage 에 저장하고 있지
무슨 뜻이냐 하면, 우리가 갖고 있던 toDos 의 이전 복사본을 잊어버리고 있다는 말이야
자 이건 매우 쉽게 해결할 수 있어
appalication 이 시작될 때 toDos array 를 빈 값으로 시작하는 대신에
이렇게 할 건데, const 를 let 으로 바꿔서 업데이트가 가능하도록 만들고
localStorage 에 toDo 들이 있으면
toDos 에 parsedToDos 를 넣어서 전에 있던 toDo 들을 복원할 거야
자 다시 해보자. 잘 기억해
여기에서 toDos 는 항상 빈 array 로 시작해
그렇지? 그런데 우리는 그렇게 하는 것을 원하지 않아
맞지? 우리가 원하는 것은 우리가 toDos array 를 시작할 때
localStroage 에서 발견되는 이전의 toDo 들로 하고 싶은 거야. 맞지?
그래서 localStorage 를 다 비우고, 새로고침한 다음 login 을 다시 해볼게
이제 a, b, c, d 를 입력하고
새로고침 해보면, a, b, c, d 가 localStorage 에도 있고, 화면에도 있지
다시 새로고침해도 완벽해. 여전히 여기 있어
이 전의 toDo 들을 그려주고 있어. 멋져
한 개만 더 해보자. 무슨 일이 생기는지 봐봐
e 하나를 입력하면 e 가 array 에 추가되는 지, 덮어 쓰는지 한번 보자
짠. 봐봐
좋아, 여기 보다시피, 예전 것도 역시 보관하고 있어
다시 말하지만, 이건 단지 우리의 toDos 가 빈 값으로 시작했었기 때문이야. 그렇지?
그리고 toDo 를 submit 할 때마다
newTodo 를 빈 array 였던 toDos array 에 push 했던 거지
그리고 여기에서 saveToDos() 를 호출하고
그러면 빈 array 였다가 이제는 "a" 하나만 갖고 있는 array 를 저장하는거지
이걸 바라는 게 아니잖아
우리가 원하는 건, 이전 toDo 들을 복원하는거야. 맞지?
그래서 toDos array 를 가지고 와서 toDos array 에 복원해주었어
그러니까 내가 새로운 toDo 를 입력하면
toDos array 는 더이상 빈 값이 아니니까
내가 toDos 를 저장하면, 더이상 한 개의 값을 가지게 된 빈 array 를 저정하는 게 아니고
이전의 모든 element 들을 가지고 있는 array 를 저장하게 되는 거야
좋아. toTos 를 성공적으로 가지고 오고 있어
멋져
아주 쿨해
JavaScript 를 꽤 오래 해왔지만, 그래도 지금 하고 있는게 너무 멋지다고 생각해
그런데, 문제가 있어
문제는, 삭제, 삭제, 삭제, 삭제, 삭제하고
새로고침하면
다시 생겨나
왜냐하면 내가 화면에서는 삭제를 했지만
localStorage 에서는 지우지 않았기 때문이야
이게 다음 영상에서 우리가 해야 할 내용이야, 바이바이
 */