// 자, 지난 영상에서 우린 document.title, document.body을 호출하는 방법을 배웠어.
// 하지만 내가 원하는건 특정한 무엇인가를 가져오는거야.
// 우선 뭘 할거냐면.. 이걸 바꿀거야. 이렇게 할 필요 없으니까.. 이제 여기에 태그를 생성하자.
// 그리고 여기에 Grab me!라고 적어볼게. 여기에 id를 title이라 써주고..
// 자, 우리가 JavaScript로 정보를 가지고 올 수 있는 방법은, document 객체와, element를 가져오는 수 많은 함수들을 이용하는거야.
// 알겠지? 이번 영상에서 전부 알아보자. 왜냐면 오늘 배울 것들을 정말x13 자주 사용할거거든
// 자 이 id로 어떻게 가지고 올 수 있을까? 이건 정말 간단해.
// 그저 document를 호출하고.. 알다시피 document에는 굉장히 많은 정보가 있어.
// 우리가 이전 영상에서도 다뤘듯이, document는 우리가 JavaScript에서 HTML에 접근할 수 있는 방법이지.
// 여기에 document.getElementById()를 입력할게.
// 이 함수는 string을 전달받는 함수니까 이곳에 id를 입력해볼게. 알겠지?
// 여기에 전달해 줘야하는 id는 이거야. "title" 짜잔, 이렇게 말이지.
// 짠, 여기에 보이듯이, 아무것도 찾지 못했어.
// 내가 파일을 저장은 했지만, 새로고침 하지 않았기 때문이지.
// 여길 보면, 태그 안에 id="title"을 가진 항목이 없어.
// 그러면 새로고침을 하고.. 자 이제 나타났어
// Grab me! 라고 하네, 아름답군,
// 이제 아까 코드를 다시 실행해보자.
// 3 2 1 꼬우!
// 보다시피, JavaScript로 id="title"을 가진 태그를 가져왔어
// 이건 매우 흥미로워.
// 알겠지? 이걸 console에서 하지말고,
// 우리의 app.js 파일에서 호출해보자
// 여기로 와서,
// 위와 같이 작성
// 그리고 여기에 element의 id를 써야하는데, 이는 string이어야 해
// 그러니 "title"을 입력하고,
// 여기에서 console.log(title)을 해볼게

const title = document.getElementById("title");

title.innerText = "got you!";

// 그치만 여기 나온거랑 똑같을거야
// 이미 알고 있지?
// 그러면 console.log()를 사용하는 대신,
// element를 더 자세하게 보여주는 console.dir()을 사용할게
// title인 태그 하나에서 가져올 수 있는 이 많은 것들을 봐봐.
// 이걸 보라구.
// title 하나에서 엄청 많은 것들을 가져올 수 있어.
// 여기서 특별히 중요한 것들은 textContent의 "Grab me!" 같은거야
// 보다시피 이렇게 우린 JavaScript에서 HTML을 읽을 수 있어
// 여기에 또 outerHTML, outerText 등이 존재하지
// 좋아, 우리가 나중에 배워야 할게 여기 엄청 많군.
// 여기 h1이라는 localName도 있어.
// 여기 innerHTML에 "Grab me!", innerText에도 "Grab me!"
// id는 "title", hidden 은 false야. 여기 보이듯이, 뭔가 엄청 많아!
// 이 모든 것들은 HTML에 표현되어 있는거야
// 예를 들어서, 이걸 한 번 보자구, autofocus: false
// autofocus: false를 자세히 알아보자
// HTML로 돌아가서, 이곳에 autofocus를 추가할게
// 이것만 하면 돼 autofocus. 끝
// 자, 이 autofocus를 페이지를 새로고침 한 다음, 다시 한번 들여다 볼거야.
// 여기 보면, autofocus가 true인 걸 확인할 수 있지.
// 이게 얼마나 강력하고 중요한건지 여러분들이 이해해줬으면 좋겠어.
// 여기서 우리가 하고 있는건, 이 HTML을 가지고 오는거지만, 그걸 JavaScript에서 하고 있는거야.
// 그리고 JavaScript는 이 HTML element를 가지고 오지만, HTML 자체를 보여주지는 않아.
// JavaScript는 이 object를 보여주지
// JavaScript에서 이 HTML을 표현하는 이 object를 말이야.
// 여기 보이듯이, 이곳에 autofocus를 갖다 놓으면,
// Javascript에서 autofocus는 true로 나와
// 좋아, className도 한번 보자.
// 여기 보이듯이, className 항목은 비어있어. 그렇지?
// 여기서 내가 할 것은, class="hello"를 추가해 주는거야.
// 새로고침을 하고..
// 여기서 class를 찾아보자.
// 여기 보면, className이 "hello"인걸 확인할 수 있어.
// 보다시피 우리는 똑같은 element를 보고 있어.
// 알겠어? 이 h1 element 말이야.
// 하지만 우린 이 element를 JavaScript에서 가지고 오고 있고,
// 이 element들이 JavaScript에선 이런 모습으로 보여
// 좋아 그러면 우리가 className 같은 항목들을 가지고 올 수 있다는 것을 의미해. 맞지?
// 또는 autofocus 같은 것들을 가져올 수 있지
// 하지만 우리는 여기서 이것들을 바꿀 수도 있어
// 여기서 innerText란 항목을 수정해보자
// innerText는 지금 "Grab me!"라고 돼있어, 맞지?
// 여기서 가져온거지
// 난 이제 이것들을 모두 지울거야.
// 그리고 여기에..
// 위와 같이 작성
// 자 이제 "Grab me!"가 어떻게 변경되는지 새로고침 해보자.
// 3 2 1.. 새로고침! Got you!가 나왔어
// 여기 보여? Got you!
// 이 텍스트는, JavaScript에 의해 변경됐어.
// 알겠어? HTML에 의해 변경된게 아니지.
// 이게 가능한 이유는, 우리가 여기에 id를 추가했기 때문이고
// 여기서 이 element를 가져왔기 때문이지.
// 이 element는 getElementById란 함수로 가져온거야
// 이건 document의 함수이고 document는 알다시피 HTML을 뜻해
// JavaScript 관점에서의 HTML을 말하지
// 자 여기 보이듯이, 우리는 JavaScript에서 title이란 항목을 가져오고 있어.
// JavaScript에서 이 h1의 className을 확인 할 수 있지.
// 또한 h1의 id를 확인 할 수도 있어.
// console.log()로 우리가 원하는 것 모두 확인해 볼 수 있어.
// title.id를 console.log 해보면..
// 그리고 title.className도 console.log 해볼게
// 그리고 또 나는.. console.log로 title의... 아냐, 그냥 이거 두개만 하자구
// 여기로 와서 새로고침 하자
// 자 여기 보이듯이, "title" 이게 title.id야, 맞지?
// 그리고 className은 보이는 것과 같이 비어있어.
// 그렇지만 내가 여기에 className을 추가하면,
// (class 추가 중)
// 좋았어, 이제 새로고침을 해보자구, 자 이걸봐!
// 자 이건 다음 영상으로 넘어가기 전에 이해해야 하는 매우! 매우! 중요한 개념이야. 알겠지?
// 잘 볼 수 있도록, 창을 2개 열어줄게..
// 좋아, 보다시피, 여기 HTML이 있어.
// 하지만 이 HTML은 솔직히 좀 쓸모 없어.
// 우린 이 HTML을 JavaScript에서 읽어올 수 있어야 해.
// 그래서 이전 영상에서 HTML과 상호작용을 가능하게 해주고
// 브라우저에서 그냥 사용할 수 있는 document라는 object를 배웠어.
// 자, document의 함수 중에는 getElementById라는 함수가 있어.
// 이 함수는 HTML에서 id를 통해 element를 찾아줄거야.
// 이 경우에는 우린 title이란 id를 찾고 있어. 알겠지?
// 당연히, title이란 id를 가진 element가 없는 경우에는 아무것도 찾지 못할거야.
// element를 찾고 나면, 그 HTML에서 뭐든지 바꿀 수 있어.
// 예를 들어, element의 innerText를 바꿀 수도 있고,
// id와 className을 가져올 수도 있어.
// 그래서 여기 있는 HTML의 class인 hello가
// 새로고침 하면 여기에 표시되는거야. 알겠지?
// 이게 어떻게 동작하는지 명확하게 이해하는게 매우! 매우! 중요해
// 왜냐하면 모든 것들이 이 개념으로부터 시작하거든.
// 우린 HTML에서 항목들을 가지고 와서, JavaScript를 통해 항목들을 변경할거야.
// 예를 들어, 우리가 Hello Nico처럼 유저에게 Hello 라고 말하려면
// 우리는 HTML에서 title을 가지고 와야하고,
// 유저명 또한 가져와서 해당 title 안에 넣어줘야해
// 알겠지?
// 좋았어, 연습을 좀 더 해야겠지만, 기억할 것은,
// 이 getElementById란 함수를 통해 id로 element를 가져올 수 있다는거야
// 우리가 한 것처럼 말이야. 물론 이 방법만 있는게 아니야.
// HTML에서 항목들을 가져오는 다른 방법도 있지.
// 어쨌든 이게 우리가 할 수 있는 것 중 하나지
// 우리가 할 수 있는건 2가지야
// 첫번째는, document에서 항목들을 가지고 오는 것이고.
// 두번째는, 이 document 항목들을 변경하는거야.
// 알겠지? 아직 이 항목들을 변경하는 것은 하지 않을거야.
// 뭘 먼저 배울거냐면, JavaScript에서 HTML을 가져올 수 있는 다른 방법들을 배워볼거야
// 지금은 이게 다야.
// 질문이 있다면 다음으로 넘어가기 전에 댓글로 작성해줘.
// 개념을 잘 이해해야 해
// 이제 JavaScript 파일에서 HTML element를 가지고 올 수 있게 됐어.
// 어떤 HTML element이든지 간에, 가져올 수 있고 변경할 수 있어.
// className, id, innerText, autofocus..
// 무엇이든지 간에 원하는 것을 가져올 수 있어
// 좋았어, 다음 영상에서 보자구
// 바이바이
