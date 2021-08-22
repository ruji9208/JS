/* 좋아. array에서 어떻게 element를 삭제하는 지 알기 위해서
완전 진짜루 정말로! paintToDo에서 어떤 일이 일어나는 지 이해해야 돼.
그렇다고 겁먹을 필욘 없어.
알겠지?
이 줄에서 겁먹을 필요가 없어.
완전 중요하게 이해해야 하는 부분은
forEach 함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행해.
완전 중요해. 알겠지?
기억해야 할 게 뭐냐면.. forEach는 paintToDo를 기본적으로 실행해.
forEach는 각각의 item을 줘. 이젠 item이 object가 되는 거야. 그치?
이걸 이해하는 게 완전 중요해!
왜냐면 이따가 forEach와 비슷한 작업을 할 거야.
그건 바로.. filter야.
만약 array에서 뭔가를 삭제할 때
실제로 array에서 그걸 지우는게 아냐.
진짜 일어나는 일은
지우고 싶은 item을 빼고 새 array를 만들어.
item을 지우는 게 아니라 item을 제외하는 거야.
그래서 예전 array는 여전히 있구
지우고 싶은 item을 제외하고 새 array를 만드는 거야.
지우고 싶은 item을 제외한다!
이건 filter 함수를 사용하면 돼. 완전 멋지다구.
그럼 filter는 어떻게 작동할까?
array가 이렇게 있으면
filter는 filter 함수가 필요하다고 우리에게 요청해.
여기서 sexyFilter를 만들어보자.
filter는 forEach와 비슷해.
filter는 sexyFilter를 부르고
1, 2, 3, 4에 sexyFilter가 차례대로 실행될 거야.
다시, filter는 sexyFilter에 1, 2, 3, 4를 넣어서 부를 거야.
sexyFilter만 이렇게 부르지 않아.
sexyFilter에 1, 2, 3, 4를 넣게 될 거야.
알겠지? 이제 sexyFilter의 역할이 뭘까?
sexyFilter 함수는 반드시 true를 리턴해야 돼
만약 새 array에서 이 object를 유지하고 싶으면.
다시, sexyFilter 함수는 반드시 true를 리턴해야 돼
만약 새 array에도 이 1, 2, 3, 4를 포함하고 싶으면.
만약 false를 리턴하면 그 item은 새 array에 포함되지 않을거야. 알겠지?
다시, 이 뜻은 JavaScript가 sexyFilter를 4번 부르는 거야.
그치만 매번 숫자는 달라져. 알겠지?
JavaScript가 이렇게 할 거야.
그리고 true를 리턴하면 JavaScript는 1을 유지할 거야.
2, 3, 4도 true면 유지 돼.
그리고 새로 만들어지는 array 안에 1,2,3,4가 있어.
만약 3번째 단계에서 false를 리턴하면..
JavaScript는 3빼고 1, 2, 4만 유지할 거야.
이걸 한번 해 보자. 이건 완전 중요해!
JavaScript가 sexyFilter 1, 2, 3, 4를 부를 거라는 걸 기억해둬.
이제 array의 모든 element를 유지하는 함수를 만들어보자.
이제 sexyFilter 함수를 만들고..
item이 뭐든 상관 없어.
무조건 true를 리턴할 거야.
그 말은 1, 2, 3, 4, 5 등등 하고 .filter(sexyFilter)를 하면
sexyFilter는 모두 true니까 모든 item이 유지 되어야 해.
이게 sexyFilter가 하는 일이야. 알겠지?
보다시피 item에 대해 신경쓰지 않아.
item을 저장할 변수도 안 만들었어.
JavaScript가 item을 보내겠지만 우린 신경쓰지 않아.
노상관!
무조건 true를 리턴하구 끝이야.
이제 반대로 해보자.
false를 리턴하는 sexyFilter를 만들어보자.
무슨 일이 일어나냐면.. 비어있는 array가 만들어졌어.
왜냐면 sexyFilter가 false를 리턴하니까.
이제 array의 item을 유지하고 싶으면 true를 리턴해야 되는 걸 이해했어.
이제 예제를 만들어보자.
3번을 지우고 싶다고 해보자.
sexyFilter를 어떻게 만들어야 할까?
sexyFilter는 item이 3이 아니면 true를 리턴해야 돼.
그런데 sexyFilter는 1, 2, 3, 4 각각의 item을 부르게 돼.
그래서 여기에 item을 저장할 공간을 만들어야 해.
알겠지? 이게 다야.
우리가 여기서 한 건.. item이 3이 아니면 true를 리턴해.
좋아. 이걸 다시 실행해보자.
쨘! 보다시피 잘 됐지.
좋아. 다시, filter는 sexyFilter에 1을 넣어서 불러. 그치?
item은 1이 되구 return 1 !== 3 이야.
네 생각에 이 식의 답은 어떨거 같아?
true일까 false일까?
이건 true지.
그래서 1은 그대로 있어.
그 다음 2를 해보자.
2 !== 3은 true일까 false일까?
true야.
2는 3이 아니지.
이번엔 3이야.
3 !== 3 이 맞는 걸까? 아냐. 3은 3이니까 false야!
그래서 3을 제외했어.
좋아. 한 번 더 연습해보자.
여기에 array가 있구..
음식이 있어. pizza, banana..
tomato
좋아.
만약 banana를 지우고 싶으면
filter 함수를 어떻게 만들어야 할까?
sexyFilter를 만들어서..
JavaScript가 각 item을 줄 거라는 걸 알고 있구.. 음 food로 하자.
argument의 이름이 뭐가 돼도 상관 없어.
이제 질문을 return 해야 돼. 질문이 뭐였지?
banana가 아닌 element는 유지하고 싶어.
그래서 food !== "banana"로 하면 돼.
(화면과 같이 작성)
쨘! 보다시피 2개만 남았지.
좋아. 이게 끝이야!
sexyFilter 함수가 할 일은 질문을 던지는 거야. 혹은 item을 제외할 지.
난 banana 빼고 모든 음식을 남기고 싶어.
한 단계 더 나아가보자. 새 array를 만들어서..
(위처럼 작성)
좋아. 됐다.
이제 1000보다 큰 수는 지워보자.
그럼 어떻게 하면 될까?
sexyFunction을 만들고
JavaScript가 array의 각 item을 sexyFunction의 첫번째 인자로 전달해 줘.
그래서 이름은 신경쓰지 않아도 돼. potato도 될 수 있지.
potato는 내가 가리키는 이것들이 될 거야.
알겠지?
이제 질문을 return 할 거야.
(위와 같이 작성)
이건 1000보다 큰 수에 작용할 거야.
근데 우린 1000보다 큰 수들을 지우고 싶으니까
질문으로 potato는 1000보다 작거나 같아야 해.
알겠지? 끝이야.
이건 1000보다 큰 수를 모두 제외할 거야.
sexyFunction을 실행해보자..
쨘!
좋아. 보다시피 potato가 1000보다 작거나 같은지를 물었어.
만약 그렇다면 array에 남아있고, 그렇지 않으면 array에서 삭제돼.
좋아.. 멋져!!
이제 toDos DB가 어떻게 생겼는 지 생각해보자.
이렇게 돼 있어.
object가 있구
id도 있어.
이 object를 console에 복붙하구..
이걸 toDos라고 하자.
그리고 sexyFunction을 만들어보자.
예시로 이 id를 갖고 있는 todo를 삭제하고 싶다고 하자.
그럼 sexyFunction은 어떻게 만들까?
sexyFilter라고 하구..
todo를 받아서..
기억할 건 todo는 object가 될 거야. object!
그러니까 todo.id가 이 숫자랑 다른 지 볼 거야.
알겠지? 이게 내 질문이야.
todo.id가 내가 지우고 싶은 id와 다른 지 물어볼 거야.
만약 내가 삭제하고 싶은 id와 다르면 todo를 array에 그대로 둘 거야.
좋아. 잘 되는지 보자.
(위와 같이 작성)
쨘! 2개만 나왔지.
완전 멋지지 않아?
다시, todo의 id가 이것과 다른지를 물어봤어.
만약 다르면 array에 남아 있고 같으면 삭제돼. 알겠지?
물론 todo를 text로 삭제하고 싶으면 그것도 가능해.
(위와 같이 작성)
똑같이 sexyFilter 함수를 만들고 todo를 받자.
이름은 상관 없어. 첫 번째에 와야한다는 것만 상관 있지!
array의 각 item이 filter function의 첫번째 argument가 되는 거야.
그리고... "lololo"를 지워볼까?
return todo.text !== "lololo"
기억해. 이 단어는 어떤 걸 사용해도 괜찮아. 알겠지?
filter가 각 todos의 item을 이 todo argument로 넣어 줄 거야.
이렇게 적어주구..
보다시피 lololo가 지워졌어.
video를 멈추고 이 화면에 있는 걸 이해해봐.
왜냐면 이건 완전 진짜로 중요해.
좋아. 다음 시간에 보자.
todo를 지워 볼 거야.
그렇게 어렵진 않을 거야.
그리고 멋진 todo list를 끝내보자!
다음 시간에 봐~
안뇽~
 */