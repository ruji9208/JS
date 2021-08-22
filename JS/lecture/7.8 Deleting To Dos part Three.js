/* 좋아~😉
우리가 배운 걸 알고 있으면 아주 쉽게 todos를 지울 수 있어.
왜냐면 내가 이것들을 지울 때마다 다른 id를 얻는 걸 알고 있어.
이제 내가 할 일은 이 id가 있는 todo를 지우는 거야.
알겠지?
그래서 filter function이 새 array를 주는 걸 기억하는 게 아주 중요해.
예전 array에는 실제로 작업하지 않아. filter function은 새 array를 줘.
그래서 예를 들어 array를 하나 만들어보면..
(위와 같이 작성)
그리고 arr.filter에.. item이 2보다 큰 지 해보자.
좋아.
이렇게 arr.filter의 결과를 받는 newArr를 만들 수 있어.
보다시피 arr는 newArr를 실행하기 전과 똑같아.
newArr는 arr.filter가 전달해 준 값이야.
filter는 이 array를 변경하지 않아.
그리고 이전 영상에서 만들었던 sexyFilter함수를 이렇게 표현할 수 있지.
function을 선언하는 작업을 할 필요가 없어.
이렇게 하면 되구.. 끝이야.
완전 멋지지 않아?
이제 우리가 할 일은
예를 들어.. 이 id를 제외하고 array를 만들 거야.
그리고 todos array를 업데이트 해야 돼.
왜냐면 todos가 local storage에 저장돼 있으니까
이걸 업데이트해서 유지해야한다는 걸 알고 있어.
여기서 우리가 찾은 걸 local storage를 업데이트해.
이거랑 똑같이 삭제할 때도 업데이트 해줘야 돼.
이걸 끝내보자!
우리가 할 일은.. toDos = todos.filter
이걸 위해 코드를 적어보자.
클릭했던 li의 id를 갖고 있는 toDo를 지우고 싶어.
그 말은 toDo의 id가 li의 id와 다른 걸 남기고 싶어.
끝이야. 한 줄로 적었구 멋지지!
이 toDo는 toDos DB에 있는 요소 중 하나야.
알겠지?
그래서 이 함수는 DB에 있는 모든 것과 함께 실행돼.
이 문장의 의미는
우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶어.
알겠지? 여기로 와서.. 모든 걸 없애구..
여기서..
이름은 nico
a b c d를 적구 새로고침!
모든 게 잘 됐어. 멋져!
이제 console에 가보자.
toDos를 보면 4개가 있어. 잘 됐구..
이제 2번째를 지워보자.
toDos를 확인해보면
보다시피 잘 되지 않아.
왜 안됐냐면 변수의 타입 때문이야.
이 id는 number야. 그치?
아주 중요해. id는 number야.
그치만 li의 id를 console.log로 보면
(위처럼 작성)
이걸 클릭하면.. 음 type이 안나오네.
typeof를 써주자.
이걸 봐. string이야.
li.id는 string 타입이야. toDo.id는 number 타입이지.
그래서 이 둘이 다른게 되니까 아무것도 지워지지 않아.
이제 우리가 할 일은 간단해.
parseInt. 이건 문자열을 숫자로 바꿔줘.
이제 잘 될거야.
toDos DB에서 todo를 지운 뒤에
saveToDos를 한 번 더 불러야 하는 걸 잊지 마!
이제 잘 될거야!
다시 살펴보자.
toDos를 부르고.. 4개가 있지.
이제.. toDos를 보면.. 1개만 갖고 있어!
멋졍
왜냐면 여기서 savedToDos를 불렀기 때문이지.
Application으로 가보면 item이 1개야.
쨘! 이제 item이 없지. 아주 잘 돼!
a b c d e를 추가하구 중간에 있는 c를 지우고 싶어
얍!
사라졌어. 새로고침해도 잘 됐어!
끝! 바이바이~
 */