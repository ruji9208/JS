/* 좋았어.
이전 영상에서 말했듯이 이제 할건, form을 보여주기 전에,
그리고 addEventListener를 하기 전에, 확인을 해줘야 해.
이 때 local storage가 비어 있으면 form부터 보여주면서 지금까지 해오던 걸 하면 돼.
하지만 local storage에 유저정보가 있으면 form을 보여주면 안돼.
우리는 h1 요소를 보여줘야 해.
그럼 이제 우리가 할 일은, local storage에 유저정보 유무를 확인하는 거야.
유저정보가 없다면 form을 보여주고 하던대로 하면 돼.
그럼 유저정보 유무를 어떻게 확인할까?
이전 영상에서 어떻게 하는지 보여줬었지.
localStorage.getItem("username")
저장된 값인 nico가 나왔어.
이제 local storage에서 nico를 지우고 다시 실행해 보자.
보다시피 local storage에 username이 없으면 null 값을 결과로 받고 있어.
이게 우리가 원하는 거야. local storage에 유저 정보의 유무를 확인하고 싶거든.
이게 바로 우리의 답이야.
이제 우리가 할 일은, 여기 확인하는 거야
const localStorageUsername, 이건 너무 긴거 같은데. 그치?
savedUsername으로 바꾸자. 한결 낫네.
(위와 같이 작성)
좋았어.
이걸 console.log 해보자
console.log(savedUsername)
새로고침하면 null 값이 나왔어.
이건 좋은 소식이야.
만약 savedUsername의 값이 null 인 경우에는
form을 보여주도록 할거야.
그 외의 경우에는 greeting을 보여줄거야.
이게 전부야.
로직이 정해졌어. 아주 간단하지.
하지만 보다시피 "username"이 반복되고 있어.
여기에도 "username", 저기에도 "username".
이것들은 똑같아야 되는데 오타가 날 수도 있잖아.
예를 들면 이렇게 오타를 내놓고 눈치채지 못할 수도 있어.
그치?
이런 상황은 나한테도 발생하고 여러분들한테도 발생할 수 있어.
여기처럼 string을 반복해서 사용하는 경우에
그리고 그것들이 무.조.건. 같아야 할 때
전처럼 여기에 변수로 고정시켜 줄 수 있어.
const USERNAME_KEY = "username"
이제 이 부분이랑 이 부분을 USERNAME_KEY로 교체해주자.
이건 매우 중요해 왜냐하면 우린 이 string을 한 번만 작성하고 싶거든.
만약 string을 작성하다가 오타가 나면 자바스크립트는 이걸 지적하지 않을거야.
하지만 변수명이 오타가 나면, 이렇게 자바스크립트가 지적해 줄거야.
본인이 생성한 string을 반복해서 사용하게 될 경우에는
앞서 만든 class name "hidden"이나 local storage key "username"처럼
이렇게 반복되는 string들은 대문자 변수로 저장해놓는 것이 좋은게
실수를 만들고 싶지 않은 string이라는 사실을 기억하고 상기시키기 좋아
좋아, 다시. 여기 있는 이건 우리 프로그램의 제어 흐름이야.
"만약 savedUsername 값이 null 일 경우, form을 표시하라"
문제는 지금 이 if 구문과 상관없이 form이 표시된다는 거야.
내 생각에는, form이랑 greeting 모두 숨긴 채로 시작해야 될 것 같아.
이걸 복사해주면, 이제 둘 다 숨겨졌어.
이제 form도 없고 타이틀(greeting)도 없어.
HTML에는 있지만 화면에는 표시되지 않고 있지.
오케이.
이제 우리는 뭘 표시할 지 선택할 수 있기 때문에 이 부분은 정말 중요해.
다시, savedUsername 값이 null인 경우, 즉 local storage에 유저정보가 없을 때,
우리는 이렇게 해줄거야.
loginForm.classList.remove(HIDDEN_CLASSNAME)
자 됐다.
그럼 다음에 addEventListener를 추가해 주자.
오케이. 약간 더 복잡해졌긴 한데, 이해할 수 있길 바래.
만약 유저정보가 local storage에 없다면 local storage는 null 값을 반환할거야.
그래서 만약 savedUsername 값이 null이라면 form의 hidden class명을 지워줄거야.
왜냐하면 지금은 form이랑 h1 모두 hidden이라는 class를 가지고 시작하거든.
작동하는지 보자고. 새로고침하면,
보다시피 form은 표시되고 h1은 숨겨진 상태가 유지되고 있어.
왜냐하면 지금 local storage에는 유저정보가 없거든.
그럼 이제 로그인을 하면 되겠지?
로그인을 클릭하면 이전이랑 똑같이 작동하고 있어.
차이점은 이제 local storage에 유저정보가 저장되어 있다는 거야.
이제 다시 새로고침하면 이 코드가 작동해야 되는데
아직 우리는 아무것도 하고 있지 않아
이제 우리가 해야 할 일은 greeting을 보여주는 거야.
greeting을 보여주기 위해서는 hidden class명을 제거해줘야 해.
greeting.classList.remove(HIDDEN_CLASSNAME) 작성
이제 새로고침하면, 짠! 제대로 작동은 되고 있어.
greeting에 이제 hidden class명은 없어 하지만 greeting에 텍스트도 없어.
왜냐하면 그 텍스트는 우리가 추가해줘야 되거든.
(위와 같이 작성)
그리고 이 부분이랑 똑같아야 하지.
그런데 지금 상황에서는 username이 존재하지 않지?
지금 존재하는건 savedUsername이니까 이걸 넣어주자.
좋아. 그럼 이걸 위로 올리고,
먼저 greeting 안에 텍스트를 추가하고,
그런 다음 greeting한테서 HIDDEN_CLASSNAME을 제거해 줄거야.
확인해보자. 3, 2, 1. 새로고침!
작동했어! Hello Nico.
멋지지?
이제 우린 유저정보를 기억하고 있어.
다시 확인해보자. local storage에서 유저정보를 지우고 새로고침하면,
보다시피 다시 form이 표시됐어. 완벽해.
다시 입력하고 새로고침하면, 짠! 작동하고 있어.
하지만 아주 작은 문제가 하나 있어.
똑같은 동작을 두 번 반복하고 있다는 점이야.
우리는 greeting.innerText랑 greeting.classList.remove를 반복하고 있어.
여기랑 여기에서 말이야.
어쩌면 이걸 함수로 만드는게 나을 수도 있다고 생각해.
그럼 paintGreetings 라는 함수를 만들어보자.
그리고 paintGreetings 함수의 내용은 이걸 넣자.
이 작업을 수행할텐데, username은 argument에서 가져올거고
이 부분을 username으로 바꿔주자.
완벽해.
이 부분에는 이제 paintGreetings 함수를 호출하면 돼.
인자로 savedUsername을 넣어주고. 완벽해.
여기도 똑같이 작업해줄거야.
paintGreeting(username)
이러면 코드를 두 줄 더 적게 쓸 수 있어.
우리는 방금 username을 인자로 받는 함수를 만들었고 이건 우리가 해오던 일을 할거야.
greeting에 텍스트 Hello ${username}을 추가 후 hidden class명를 지워주는 일
하지만 우리가 함수를 호출하는 위치에 따라 유저정보는 다른 곳에서 오게 될거야.
예를 들면 local storage에 유저정보가 있으면 거기서 유저정보를 받아서 인자로 넣어줄거야.
만약 local storage에 유저정보가 없다면, 우리는 form의 submit을 기다리고
form이 submit되면 우리는 input으로부터 유저정보를 받고,
input에서 받은 user를 가진 paintGreetings를 호출할거야.
이렇게 코드를 좀 더 정리해봤고 이게 끝이야.
다 끝났어.
해냈어!
다시와서 새로고침해보면 제대로 작동하고 있지. 한 번만 더 해보자.
그리고 다음 영상에서는 짧게 짧게 천천히 복습해보도록 할거야.
다시 새로고침하고,
nico, 짜잔! 잘 되는군.
새로고침 x3
좋았어.
다음 영상에서 보자고.
바이 바이.
 */