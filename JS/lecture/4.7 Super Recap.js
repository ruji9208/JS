/* 좋았어. 그럼 이제 지금까지 해온 것들에 대해 복습해보자.
우선 자바스크립트를 없애고 우리의 웹사이트가 자바스크립트 없이 어땠는지 보자.
우리 웹사이트에는 2개의 HTML 요소가 있어.
하나는 form이고 하나의 h1이야.
form 안에는 input이 있고 h1은 비어있어.
이 둘은 공통점이 있는데 바로 "hidden"이라는 class를 지니고 있다는 거야.
CSS를 보면 .hidden이 있는데 이 class의 역할은 display: none 즉 요소를 숨기는거야.
자바스크립트를 불러오기 전부터 이 두 요소는 숨겨져 있어.
좋았어.
이제 자바스크립트가 들어와서 제일 먼저 local storage를 확인할거야.
이게 첫 번째 단계야. 자바스크립트가 local storage를 확인하는거.
아주 중요하지.
local storage가 정보를 저장하고 불러오고 삭제하는
브라우저가 가지고 있는 작은 DB같은 API라는걸 알고있어.
우리가 만약 local storage에 없는 정보를 불러오려고 하면 null 값을 받는다는걸 알고있어.
하지만 username처럼 local storage에 존재하는 정보를 불러오려고 한다면,
그 key에 해당하는 value를 받게 될거야.
local storage를 살펴보면 key랑 value가 있어.
그러니까 우리는 key랑 value를 함께 검색하고, 삭제하고 더하는 거고
존재하는 정보에 대한 key를 검색하면 그 value를 string으로 받게 되는거야.
이건 중요해 왜냐하면 이제 우리는 savedUsername이 null 또는 nico라는 걸 알게 됐으니.
null 일 때 부터 살펴보자 왜냐하면 유저가 처음 왔을 때는 그 상태니까.
savedUsername은 null이니까 이 조건은 참이 될거야.
savedUsername이 null이면 어떻게 될까?
무슨 일이 벌어지냐면 우선 우리는 loginForm으로부터 HIDDEN_CLASSNAME을 제거할거야.
이걸 하는거야. form에서 class="hidden" 삭제.
그럼 어떻게 될까?
그럼 당연히 form이 표시될거야.
그 다음 일은 loginForm에 addEventListener를 더하고, submit을 기다리는 거야.
그리고 submit event가 발생하면 onLoginSubmit 함수가 실행될거야.
onLoginSubmit 함수는 아주 간단해.
첫 번째!
우리는 event가 원래 하는 행동을 멈춰줄거야.
브라우저의 기본 동작을 막아줄거고 그 동작은 페이지 새로고침이야.
두 번째! form을 다시 숨겨줄거야.
세 번째.
loginInput.value를 username이라는 변수로 저장해 줄거야.
네 번째. username 값을 username이라는 key와 함께 local storage에 저장할거야.
그래서 여기 local storage에 username이랑 그 값이 있는거야.
다섯 번째. paintGreetings 함수를 호출할거야.
보다시피 paintGreetings 함수는 하나의 인자를 받고 있어.
지금 같은 경우에는 유저가 form 안에 있는 input에 입력한 유저명을 받고 있어.
그럼 paintGreetings 함수를 살펴보자.
이 함수는 username이라는 인자를 하나 받고 있고 이 함수가 하는 일은
비어있는 h1 요소 안에 `Hello ${username}` 이라는 텍스트를 추가해주는거야.
그 다음에 h1 요소로부터 "hidden"이라는 클래스명을 제거해줄거야.
그럼 표시가 되겠지. 이렇게 붐! 이러면 보여지는거지.
이게 첫 번째 경우야. 작동되는지 확인해 보자.
자, 새로고침하면
방금 일어난 일은, local storage에서 username key를 찾으려 했는데
찾을 수 없었고 그 말은 savedUsername 값이 null이란 얘기고
그럼 이 조건이 참이 되고 그럼 form의 hidden class를 제거해서 form이 화면에 표시되고
그러고 나서 우리가 추가한 addEventListener가 submit을 기다리고 있어.
이제 유저명을 입력해볼게.
Log In을 클릭하거나 엔터를 누르거나 둘 다 submit event를 발생시킬거야.
이제 onLoginSubmit 함수를 실행시킨거야.
기본 동작은 막혀있으니 브라우저는 아무것도 하지 않았고
loginForm을 다시 숨김상태로 바꿔줬고
그러니까 처음에는 form을 보여줬다가 유저가 submit 하고 나서 다시 숨긴거야
알겠지?
input의 값을 변수로 저장해주고
그 변수값을 local storage에 username이라는 key로 저장하고
input에 입력한 값을 value로 저장했어
그 다음 paintGreetings 함수를 호출했어. 여기 있네.
input에 적었던 값을 인자로 넣어주고, greeting 안에 텍스트를 넣어주고
"hidden" class명을 지워줬어.
이걸 한거야. 물론 여기에 텍스트를 추가해주고 난 다음에 말이지.
좋았어. 그럼 새로고침해보고 무슨 일이 일어나는지 보자.
새로고침하면 무슨 일이 일어날까?
첫 번째. form이랑 h1 둘 다 다시 숨겨진 상태에서 시작될거야. 이게 첫 단계야.
앱이 실행되면, local storage에서 savedUsername을 얻으려고 할텐데
username이라는 key를 가지고 찾게 되겠지
그리고.. 유저정보가 이미 있어. 보다시피 local storage에 username이 저장되어 있지.
그럼 savedUsername은 null이 아니야. 이 조건은 거짓이라는 말이지.
그럼 이 코드들은 전부 실행이 안되겠지.
이 경우 paintGreetings 함수로 직행하게 될거야.
paintGreetings 함수는 역시 string을 인자로 받을거야.
이 경우에는 paintGreetings 함수가 local storage에 저장된 값을 인자로 받게되고
이전에 했던 작업이 반복될거야.
하나 헷갈리만한 점은 paintGreetings 함수를 호출할 때, 다른 이름의 인자를 넣고 있다는거야.
우리가 paintGreetings으로 하는건 화면에 텍스트가 출력되게 하는게 다야
이 때 텍스트를 보내줘야겠지.
여기 27번 라인에서는 유저정보가 local storage로부터 오고 있어.
하지만 여기 onLoginSubmit 함수에서는 유저정보가 input으로부터 오고 있지.
만약 여기 있는 username들 때문에 헷갈린다면 다른 이름으로 바꿔주면 돼.
typedUsername 아니면 usernameThatTheUserWrote 이런 식으로 말이야. 이 변수는 유저가 input에 입력한 유저명이고 이걸 local storage에 저장하고 있고
그리고 동시에 paintGreetings 함수의 인자로 사용하고 있어.
이제 이 코드를 아주 약간 더 고쳐줄까 해.
사실 생각해보면, paintGreetings 함수는 따로 인자를 받을 필요가 없어.
오케이.
여기도 마찬가지로 따로 인자를 받을 필요 없어.
왜냐하면 우리는 local storage에 유저정보가 존재하는걸 알고 있잖아.
그럼 여기서 username을 지워주고 여기도 지워주고 여기도 다 지워주자.
그 다음 함수안에 username이라는 변수를 만들고
(위와 같이 작성)
local storage에 있는 username을 찾도록 작성해줄거야
이제 여기서 아무것도 보내지 않아도 된다는 뜻이지.
local storage에 뭔가를 저장하면 paintGreetings를 호출하는 순간에
그 유저정보는 이미 local storage에 저장되어 있을거야.
그럼 이 변수를 만들 필요도 없이 이렇게 하면 되겠지.
어쩌면 유저정보를 두 번씩이나 찾고 싶지 않을 수도 있겠지.
왜냐면 존재 여부를 여기서 한 번 찾아보고 있고
그리고 greeting에 텍스트를 넣어줄 때 또 local storage에서 유저정보를 찾고 있거든
어쩌면 지금 우리가 하는 것처럼 유저정보를 두 번씩이나 찾고 싶지 않을 수도 있겠지.
하지만 이게 얼마나 빠르고 멋진지 보여주고 싶었어.
여기서 우리가 하는 거라곤 user의 이름을 저장하는 것과
저장하자마자 다음 라인에서 paintGreetings함수를 호출하고
호출하자마자 유저를 찾게 돼.
이 방법으로도 똑같이 동작할거야.
새로고침하고
보다시피 똑같이 작동하고 있지만 다른 점은 local storage를 두 번 열어본다는 거지
어떤 방법으로 할지는 네가 선택하면 돼.
나는 이전 방법으로 할거야.
왜냐면 local storage를 두 번 열어볼 필요없다고 생각하거든.
오케이. 우리가 해냈어.
다시 한 번만 더 복습해보자. 이번에는 속성으로.
붐! 출발!
유저가 처음 앱을 열면 form과 h1은 CSS에 있는 hidden이라는 class 때문에 숨겨져 있을거야.
그 다음 자바스크립트가 USERNAME_KEY를 가지고 local storage를 확인할거야.
지금 보면 local storage에 username이라는 key와 그 값인 nico가 있지.
하지만 대부분의 경우에는 앱을 처음 실행했을 때, key랑 value가 없을거야.
즉, savedUsername 값이 null 이겠지.
그럼 null = null 이니까 이 조건은 참이 되겠지.
이 조건이 참이면 form에서 HIDDEN_CLASSNAME을 지워야 되니까
그걸 지워주자고.
그럼 이제 form이 표시될테고 그 다음에는 addEventListener가
form이 submit되기를 기다리고 있고 submit이 발생하면 onLoginSubmit 함수를 호출하지.
이 함수는 우리가 호출하는게 아니라 자바스크립트가 호출할거야.
자바스크립트는 함수는 호출하면서 인자를 줄텐데 그 인자에는 event에 관한 정보들이 담겨있어.
그 정보에는 브라우저가 이벤트에 대한 기본 동작을 못하도록 막는 정보도 함께 있어.
그걸 여기서 실행하는거야.
그 다음에는 다시 form을 숨길거야.
여기서는 "hidden"을 없애줬고 여기서는 다시 더해주고 있어. 지금은 form을 숨길거니까.
그렇지? 우린 form을 보여주고 싶지 않아.
그런 다음 input의 값을 가져올거야.
이게 바로 input의 값이야.
그 input 값을 username이라는 변수로 저장한 다음에
그 변수값을 local storage에 USERNAME_KEY와 함께 저장할거야.
그 다음 paintGreetings 함수를 호출하는데 input값을 인자로 넣어줄거야.
바로 이 값 말이야.
그렇게 값을 paintGreetings 함수에 넣어주고
input 값을 받은 paintGreetings 함수는 h1에 "Hello 유저명"이라는 텍스트 적어줄거야.
그 다음 paintGreetings 함수는 h1으로부터 "hidden"을 제거해서 h1을 화면에 띄워줄거야.
오케이?
이걸로 끝이야.
로그인을 한 후에 새로고침하면 무슨 일이 벌어지냐면
이제 savedUsername 값은 null이 아니라 nico야.
이 경우에 nico는 null이 아니야.
그럼 이 조건은 거짓이 되지.
즉 위쪽의 이 코드를 실행하는게 아니라 바로 이 코드를 실행한다는 거지.
다시 paintGreetings 함수로 가는데 이번에는 input 값을 가져오는게 아니야.
이번에는 paintGreetings 함수가 local storage로부터 유저정보를 받는거야.
그 다음은 똑같아. h1에 "Hello 유저명" 넣고 "hidden"은 제거해주고
이걸 하고 화면에 표시해 주는거지.
이걸로 복습 끝!
다음 영상에서 보자고.
질문이 있으면 댓글로 남겨주고.
복습 있는게 좋은지, 도움이 되는지 말해줘.
바이 바이.
 */