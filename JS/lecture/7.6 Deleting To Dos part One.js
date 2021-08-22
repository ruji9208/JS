/* 좋아. 거의 다 왔어!
우리가 만든 게 넘 멋져서 완전 행복해!!
우리가 이걸 만들었어.
우린 이걸 화면에 그렸지. 이게 쉬운 부분이었구..
그리고 이걸 local storage에 저장했지.
그 다음에 To Do를 복원해서 다시 화면에 그려줬어.
그치만 문제가 있어.
To Do를 지울 때마다 local storage에 업데이트를 하지 않아.
이걸 바꿔야 해. 알겠지?
이 local storage를 데이터베이스라고 생각해보자.
데이터베이스는 아냐.
local storage는 우리의 데이터베이스가 아냐.
console에서.. toDos array를 보면..
이건 데이터베이스야.
local storage는 이 toDos array를 복사해두는 곳이야.
toDos array가 local storage와 같지 않다는 걸 생각해야 돼.
알겠지?
다시, 비록 toDos array가 지워졌지만
여전히 이 item을 갖고 있어. 이걸 바꾸고 싶은 거야.
알겠지?
그치만 어떤 item을 지워야 할 지 알 수 없어.
JavaScript, HTML의 입장에서 deleteToDo는
화면에서 어떤 HTML의 element를 지워야 하는 지 알고 있어.
그치만 어떤 todo text를 데이터베이스에서 지워야 하는 지 몰라.
알겠지?
예를 들어 이렇게 글자를 얻을 수 없어.
왜냐면.. 만약 a가 2개면 어떻게 될까?
이렇게..
toDos를 보면 a가 2개야.
만약 첫 번째 a를 지우면 어떤걸 지웠는 지 알 수 있을까?
첫 번째인지 마지막인지
어떤 건지 알 수 없어.
그래서 더 좋은 방법이 필요해.
toDos를 더 좋은 방법으로 만들어야 해.
알겠지?
그래서 어떤걸 나눌 텐데..
이렇게 toDos를 만들고 싶지 않아. 정말로 별로야.
내가 하고 싶은 건 이 todo들에게 ID 같은 걸 주고 싶어.
text 대신에 object를 만들고 싶은 거야. 알겠지?
내가 하고 싶은 건 이렇게
array, object 안에 id가 있고 text는 이렇게 되어 있어.
이게 내가 만들고 싶은 array야.
to do의 내용은 여기 있구
랜덤한 ID도 필요해.
첫 번째로 우리 toDos 데이터베이스를 비우자. 알겠지?
랜덤으로 ID를 만드는 방법을 보여줄 거야.
랜덤이 완전 랜덤한 숫자는 아니구..
element가 만들어질 때 이 ID를 갖게 될 거야.
알겠지?
Date.now()는 밀리초(1000분의 1초)를 주는 함수야.
이 초들이 거의 랜덤처럼 보이지?
꽤 유용해. 이건 우리에게 랜덤 숫자를 줄 거야.
좋아. 다시 생각해보면..
데이터베이스에 To Do 내용을 추가하는 곳으로 가보자.
여기야. toDos에서 저장해.
여기서 데이터베이스로 매번 사용자가 적어둔 text를 push해. 그치?
난 이렇게 하고 싶지 않아. 이제 object를 push하고 싶어.
그래서 text 대신 object를 push하고 싶어.
여기에 object를 만들어도 되고 새 object를 만들어도 돼.
(화면과 같이 작성)
그리고 text는 newTodo를 갖고
id는 Date.now()야.
그리고 이 newTodoObj를 toDos array에 넣을 거야.
이제 보다시피, object를 저장해.
text만 저장하지 않아.
여기에 와서 hello라고 적으면
잘 되구.. local storage를 보면..
이걸 얻었어. 다시.. 진짜로 바뀐건 없어.
그렇게 까지 많이 바뀐건 아냐. 그치?
이제 toDos에 text를 저장하지 않고 object를 저장해.
알겠지?
이제.. 중요한 걸 얘기하고 싶어.
여기서 toDos를 한번 볼까?
보다시피 id를 갖고 있는데
아직 사용하지 않았으니까 id를 사용해 보고 싶어.
알겠지?
이 id를 사용하는 방법은.. 이 id를 HTML에 두고 싶어.
여길 보면 paintToDo가 있는데
paintToDo는 오직 text인 newTodo만 갖고 있어.
이걸 object로 바꿀 거야. 알겠지?
그래서 paintToDo에 string으로 newTodo를 주는 것 대신에 newTodoObj을 줄 거야.
알겠지? toDos 배열에 newTodoObj을 추가하구
paintToDo에는 text를 주는 게 아니라 newTodoObj를 줄 거야.
이게 문제가 될 수 있어.
왜냐면 여기에 글자를 적으면 object Object 로 나와.
이걸 원하지 않아.
내가 원하는 건 실제 글자를 보고 싶어.
그래서 paintToDo를 바꿔야 해.
paintToDo는 text를 받았지만 이제는 object를 받아.
그 말은 object를 보면.. object는 text와 id를 갖고 있어.
즉 span.innerText = newTodo.text가 되어야 해.
이제 정상적으로 잘 될 거야.
여기로 와서..
a를 치면.. 완벽해! 그치만 id가 왜 있는걸까?
id로 각각의 li item을 구별하고 싶었어.
알겠지?
다시, 예전 paintToDo는 toDoInput.value에서 온 newTodo와 함께 call했지만
이제 object와 함께 call되고 있어. 그래서 paintToDo를 조금 수정해야 됐지.
이미 paintToDo를 바꿨어. span.innerText는 newTodo.text가 되었네.
이 object의 text지.
그리고.. li.id = newTodo.id
좋아..
모두 지우고.. 여기서..
element를 확인해보자.
ul이 여기 있구..
여길 확대해서 주목해보자.
ul.. 그리고 hello 엔터!
좋아. ul 밑을 열어서
보다시피 li에 id가 있구 hello가 있어. 완벽해!
완전 좋아~
이건 물론 잘 되지만..
user가 어떤 id를 지우길 원하는지 알려줘야 해.
알겠지?
그치만 여전히 멋지게 삭제하지 않고 있어. 왜냐면 여기 application에서..
다시, 데이터베이스가 완전 멋있지. id를 갖고 있어.
그치만 이걸 나중에 해야 돼.
만약 새로고침하면, 보다시피 문제없이 잘 돼.
왜 문제없이 잘 될까?
이유는.. 다시 여기로 와서..
savedToDos에서 to do를 받으면
to do를 local storage에서 받으면 이걸 forEach를 해.
그리고 forEach가 실행되면 이렇게 paintToDo를 불러.
자세히 적어보면 이렇게 paintToDo가 실행될거야.
알겠지? 그리고 id도 있어야 돼
이 줄에서 이런 일이 일어났을 거야. 그치?
만약 그게 아닌 것 같으면 데이터베이스를 봐.
좋아. 완벽해.
문제없이 잘 되지만 아직 아무것도 삭제하지 않았어.
그치만 데이터베이스에게 id를 저장하는 옵션을 줬어.
a b c를 하구..
이제 object에 id가 저장돼.
이건 굉장히 중요해. 이제 삭제할 수 있다는 얘기야!
예를 들어 id가 여기 있는데.. 이걸 하기 전에 필요한 건..
우리가 X를 누른 버튼의 id를 얻어야 해.
알겠지?
여기 deleteToDo에서 예전엔 이렇게 했는데
화면에서 li를 삭제하기 전에 li를 얻게 돼.
화면에서 삭제하기 전에 li의 id도 얻어.
여기서 a를 적고 삭제하면.. li의 id를 얻어. 이건 완전 완전 유용해!
이따가 array에서 item을 지우는 법을 얘기해 볼 거야.
우린 push로 array에 item을 추가할 수 있는 걸 봤었지.
다음 영상에서 array에서 item을 삭제하는 방법을 볼 거야.
다음 시간에 보자. 안뇽!
 */