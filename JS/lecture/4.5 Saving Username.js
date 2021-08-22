/* 좋아, 'username 저장하기'로 넘어가기 빠르게 복습해보자.
보다시피 form이랑 h1이 있는데 h1에는 hidden이라는 class가 있어.
우리가 만든 이 class의 역할은 요소를 숨기는거야.
그래서 h1 요소는 존재하지만 숨겨져 있는거지.
form은 지금 submit을 기다리고 있어.
submit을 하게되면 많은 일들이 벌어질거야.
첫번째, 브라우저의 기본 동작을 막게 돼.
브라우저가 submit 할 때 원래 하는 동작을 안하게 된다는 거지.
대신, 그 기본 동작을 멈추고 우리가 원하는 대로 할 수 있게 되는거지.
그 다음 하게 되는 일은 form에 hidden이라는 class를 추가하는거야.
hidden class는 CSS에 있어. display: none;
이 때 form과 h1 모두 hidden이라는 같은 class을 지니게 될거야.
이 줄에서 loginForm과 greeting 모두 같은 class를 가지고 있어.
여기서 우리는 loginInput의 값을 변수에 저장하고,
그런 다음에 기본적으로 비어있는 h1인 greeting을 가져다가
거기에 "hello username"이라는 텍스트를 넣어주는거야.
이 때 ` ${ } ` 를 활용해서 string 안에 변수값을 넣고,
그 다음 h1에서 hidden이라는 class를 삭제해주는 거야.
그러면 이제 hidden class명을 갖고 있는건 form 뿐이겠지?
그럼 끝이야. 그거면 준비 끝이야.
좋아, 완벽해.
이제 할 건, value를 저장하는 방법을 배우는 거야.
user에게 매번 질문하기에는 번거로우니까.
이름이 뭐에요? x3
이것 역시, 항상 그랬듯이,
뭔가를 저장하는 건 아주 자주 사용되는 기능이야. 유저의 이름이나 뭐가 되었던간에.
예를 들어 유튜브에서 우리가 볼륨을 조절하고 새로고침하면 유튜브가 그 볼륨값을 기억하겠지?
이게 기억하고 싶은 거야. 내가 말하는 '기억하기'는 이런거야
우리의 경우에는 user의 이름을 기억하고 싶어. user 가 누구인지 기억하고 싶어.
이 작업 역시 흔히 하는 작업이야.
classname을 추가하고 삭제하는거 처럼 말이야. 그러니 아마 API가 존재하겠지.
우리가 브라우저에 공짜로 뭔가를 기억할 수 있게 해주는 기능이 존재해.
그 API의 이름은 local storage야.
콘솔에 localStorage라고 입력하면 볼 수 있는데 보다시피 이미 정의되어 있어.
우리가 아직 모르는 Storage라는 걸 반환하고 있는데 중요한건 local storage가 존재한다는거야.
local storage는 우리가 브라우저에 뭔가를 저장할 수 있게 해줘. 그래서 나중에 가져다 쓸 수 있지
local storage에 뭐가 들어있는지 보고 싶다면 개발자도구를 이용하면 돼.
여기를 클릭하고 application으로 가서, 여기 어딘가에 local storage가 있을거야.
여기 있네.
Session Storage, Indexed DB, Web SQL, Cookies, 등도 있는데
우리는 local storage로 갈꺼야.
여기 있는 것들 모두 다양한 방법으로 유저 정보를 저장할 수 있지만
그 중 local storage가 가장 다루기 쉬워.
보다시피 지금은 내 local storage가 비어있지.
하지만 추후에 이것저것 저장하기 시작하면 여기가 바뀌는걸 보게될거야.
그럼 이제 local storage API를 살펴보면 다양하고 멋진 method들을 보게될거야.
그 중 하나는 바로 setItem이야.
setItem을 활용하면 local storage에 정보를 저장할 수 있어.
이건 정말 정말 간단해. localStorage.setItem
계속 무엇.무엇 이런 형식을 보게되는데, 이런 형식은 계속해서 활용될거야.
중요한건 우리가 setItem을 활용할 수 있다는거고 어떻게 작동하는지 보자.
console로 와서 localStorage.setItem 이라고 작성하고 그 다음에는,
우리가 저장할 값의 이름을 정해줄거야. 예를들면 username.
그 다음에는 저장할 값을 적어줄거야. 예를들면 nico.
끝.
이 한 줄의 코드를 실행하면 이제 우리의 DB에는 새로운 항목이 있어.
username이야!
정말 멋지지 않아?
이게 전부야.
우리는 이제 우리가 원하는 값을 저장할 수 있게 됐어.
값을 저장하고 난 다음에는 당연히 그 값을 불러올수도 있어.
localStorage.getItem("username") 작성
그럼 짜잔! 우리가 저장한 값을 불러냈어.
겁나 멋져.
물론 필요한 경우 저장된 값을 지울 수도 있어.
지금 여기에는 유저명 nico가 저장되어 있지.
이제 이걸 삭제해 볼게.
localStorage.removeItem("username")
이제 application으로 가보면 삭제된 걸 볼 수 있어.
정말 이해하기 쉽지?
localStorage 뒤에 .removeItem, .getItem, .setItem 이거면 끝이야.
아주 간단하게 했어
마치 작은 미니 DB같은거야. 우리는 key와 value만 준비하면 돼.
이게 전부야.
정말 멋진거 같아.
이제 우리가 할 일은 유저가 이름을 제출할 때 그걸 저장해 주면 되는거야.
여기에 localStorage.setItem 작성해주고
우선 저장될 값의 이름(key)를 정해주고, 그 다음에는 값인 username을 적어주면 돼.
이건 저장될 아이템의 이름이고, 값은 username 변수야.
오케이. 준비는 끝났어. 잘 작동하는지 확인하자고.
새로고침 해주고,
오케이. local storage에 집중해봐.
이름이 뭐에요?
nico. 3, 2, 1!
이렇게 key: username, value: nico가 입력됐어.
멋지지 않아? 정말 멋져.
그런데 아직도!!! 새로고침을 하면,
여전히 이 form이 표시되고 있어. 우리가 바라는건 이게 아냐.
적어도 이제는 유저명은 기억하고 있어.
다음 영상에는 우리는 우선 local storage에 username이 존재하는지 확인하고,
form을 표시하지 않을거야.
그런 경우 우리는 바로 h1 요소가 표시되도록 할거야.
만약 local storage에 유저정보가 없다면 form이 먼저 표시되도록 할거야.
이걸 다음 영상에서 다룰거야. 다음 영상에서 봐.
바이바이
 */