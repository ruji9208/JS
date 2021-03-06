/* 
좋아 이제 form 관련한 것들로 부터는 잠깐 쉬어가도록 할거야.
이게 어렵다는 걸 잘 알고 있거든
이렇게 하자. 바이바이.
그리고 여기에 nomadcoders.co로 연결되는 anchor 요소를 하나 만들어 줄거야.
좋았어.
"Go to courses"라고 적어줄거야.
아주 간단한 링크야.
일반적인 HTML이고 전혀 겁낼 필요 없어.
오히려 반가울거야. HTML은 이미 알고 있는거니까.
3, 2, 1 클릭! 그럼 nomadcoders로 이동하게 돼. 좋았어.
오케이. 전혀 어렵지 않았어.
자 다시 한 번 JS를 이용해서 기본 동작을 막아볼거야.
전에 말했듯이 JS는 우리가 기본 동작을 막는 것을 허용해.
이전 영상에서 form의 기본 동작은 submit이라는 걸 배웠어.
그럼 링크의 기본 동작은 뭘까?
맞았어. 링크의 기본 동작은 클릭 시 다른 페이지로 이동하는 거야.
오케이?
그럼 이제 우리가 그걸 막아볼거야.
그럼 다시 app.js로 돌아와서 이 링크를 찾아보자.
const link = document.querySelector("a")
이렇게 작성하고 링크를 찾을거야
링크도 하나뿐이고 설명하는 용도니까 이렇게 써도 별 상관없어.
(위와 같이 작성)
여기에는 function handleLinkClick() {} 을 써주고
여기에는 특별히 뭔가를 하지 않을거야. event를 위한 자리를 만들던가 하는 거 말이지.
안 할거야.
그냥 alert("clicked!") 만 추가해 줄거야.
이게 끝이야. 다시 돌아와서 새로고침하고 클릭. 짜잔!
여기보면 clicked라고 alert가 표시되고,
지금 이 alert가 이 page가 다른 동작을 하지 못하도록 막고 있어.
그래서 아무 일도 일어나고 있지 않지만 내가 OK를 눌러서 alert가 없어지면
이 브라우저의 기본 동작이 실행되는 걸 보게 될거야.
보라고. 짜잔. 브라우저의 기본 동작이 실행됐지?
다시, 클릭, 붐. JS가 모든 걸 멈췄어.
왜냐하면 alert는 좀 특이해서 모든 동작들을 막게 되거든.
그래서 이제 아무도 alert를 사용하지 않지.
모든 것들이 막혀있다가 OK를 누르면 다시 기본 동작이 실행되지.
이전 영상에서 말했듯이,
여러분들이 EventListener를 만들고 거기에 함수를 줬다는 걸 JS가 보게되면,
JS는 누군가 링크를 클릭할 때, 널 위해 함수를 실행시키게 될거야.
계속 반복해서 말하지만 이건 그만큼 중요하니까.
이 함수는 네가 실행시키는게 아니야.
()를 추가하면 이 함수는 한 번만 실행되고 그걸로 끝이야.
우린 이걸 원하지 않지.
너는 JS한테 함수의 이름만 주고 실행하는건 JS의 몫이야.
하지만 가끔 우리는 기본 동작을 막아야 할 필요가 있어.
가끔은 뭐가 클릭됐는지 어디가 클릭됐는지 등 정보를 알고 싶을 때가 있어.
그럴 때 JS는 단순히 함수를 실행시키기만 하는게 아니라,
JS는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어 줄거야.
그게 바로 규칙이지.
그리고 이 object에는 방금 일어난 event에 대한 여러 정보가 담겨있지.
이건 JS가 우리한테 공짜로 주는거야.
방금 일어난 event에 대한 정보를 담은 이 object는
handleLinkClick을 위한 EventListener 함수의 첫번째 인자로 주어지게 될거야.
우리는 자리만 제공해주면 돼.
우리는 공간만 만들고 받기만 하면 돼.
우리가 해야 할 건 받는 것 뿐이야
계산기 만들었을 때처럼 우리는 argument를 받아줘야 해.
여기서 받을 거야.
여기에 console.log(event) 해주고 확인해 보자고.
돌아가서, 검사를 해보면,
console.log 띄우고, 여기를 클릭해보면,
보다시피 이건 좀 다른거지. 이건 MouseEvent야.
상당히 흥미로워. 전에는 SubmitEvent 였거든.
다른게 나온 이유는 event의 종류가 다양하기 때문이야.
지금은 아무것도 클릭이 안되는데,
사실 클릭할 수 있지만, 새로운 페이지가 열리지는 않지
왜냐하면 지금 alert가 떠있기 때문인데.
만약 내가 확인 버튼을 누르면 다시 진행되
포인트는 말이지, 이게 얼마나 멋진지 한번 보라구!
지금 이건 내가 클릭한 위치의 X, Y좌표를 보여주고 있어. 겁나 멋져.
이건 엄청 중요한 정보야. 유저가 어디를 클릭했는지 알아야 할 때가 있거든.
그리고 여기에 유저가 스크린 상 클릭한 위치를 X, Y 좌표로 제공하고 있지.
보다시피, 이벤트로부터 얻을 수 있는 다양한 정보가 존재하고
그리고 굉장히 다양한 이벤트들이 존재하지
이건 클릭으로 비롯된 거니까 MouseEvent지.
그 전에 본건 Submit Event 였고. 완전 다른거야.
다른 정보들이 제공되고 있지.
지금 우리는 기본 동작을 안 막고 있으니까,
OK를 누르면 바로 이동하게 되지. 이건 우리가 원하는게 아니야.
우리가 해줄 건, event.preventDefault() 이거야.
좋았어. 그럼 끝이야.
그럼 이제 event의 내부를 보자고.
여기를 클릭하면, 더 이상 nomadcoders로 이동되지 않아.
왜냐면 우리가 기본 동작을 막고 있거든. 이제 이해 될거라 했지?
브라우저는 링크를 클릭 할 때 해당 사이트로 이동하도록 설정되어 있는데
지금 우리가 그걸 막고 있는거야.
좋아 이제 event 내부를 살펴보자고.
내부에 보면 이것저것 많이 있어.
X, Y 좌표. 아주 멋져.
Okay, layer X.
movement, offset, page..
이거 좀 봐봐. path.
이게 우리가 클릭할 때 무슨 일이 있었는지, 어디서 발생했는지 array로 보여주고 있어.
우리는 Window > document > html > body > a 를 클릭한거야. 멋져.
너무 멋진거 같아. timestamp도 있고.
type은 클릭이었고. 아주 멋져.
중요한 건 우리가 기본 동작을 막았다는 거야.
여기 보면 defaultPrevented 값이 true지.
우리가 브라우저가 하려고 하는 동작을 허용하지 않았다는 거야. 허용하지 않고 막아버렸지.
이게 event를 활용 하는 방법이고 우리가 preventDefault를 사용하는 이유야.
다시, 가장 중요한건 addEventListener 안에 있는 함수는 직접 실행하지 않는다는 것이야.
네가 하는게 아니라 이건 브라우저가 해주는거야.
브라우저는 실행만 시켜주는게 아니라 event에 대한 정보도 담아줄거야.
우리는 자리만 만들어주면 되고 이 정보 안에는 몇 가지 함수도 같이 들어있을거야.
예를 들면 preventDefault 함수 이걸 호출하게 되면,
event는 멈추게 되고 아무 것도 진행되지 않을 거야.
네가 브라우저에 대한 모든 걸 컨트롤하게 될거야.
좋아.
이제 event.preventDefault를 이해했으니 링크들은 지우고 다시 우리 form을 작성해보자.
다음 영상에서 보자고.
바이바이. */