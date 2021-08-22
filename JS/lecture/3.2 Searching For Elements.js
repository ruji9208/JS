// 자, 이전 영상에서는,
// HTML코드와 HTML element를 Javascript로 접근하는 방법을 배웠어
// 이건 정말 대박이야
// 이전 영상에서 봤듯이, getElementById()같은 함수로 id를 이용해
// element를 찾는다면
// 그 element에서 어떤 것이든 가져올 수 있고,
// element의 항목들 또한 변경할 수 있어
// 우린 class name을 가져오거나 추가할 수도 있고, text를 가져오거나 변경할 수도 있고,
// 우리가 원하는건 뭐든지 할 수 있어
// 이 id가 title이든 something이든
// HTML에 정의된 id가 JavaScript에서 같으면 상관없어
// 이건 매우 매우 중요해. 이 id가 같지 않다면, 당연히 아무것도 찾지 못할거야
// 아직까진 정상적으로 작동하지
// 자, 대부분의 경우에는 id를 추가하지 않을거야
// 내 말은, id를 사용하기 편리하지만, 보통 className을 사용하거나 둘 다 사용하거든
// 자 className 사용하는걸 보여줄게
// 여기 class가 hello인 이 있어
// 그리고 여기에 5개를 만들어볼게
// 좋아 됐어

// const title = document.getElementById("something");
// title.innerText = "got you!";

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title);

// const title = document.querySelector(".hello h1");
const title = document.querySelectorAll(".hello h1");
console.log(title);

// const title = document.querySelector("#hello");
// const title = document.getElementById("hello");

// 보다시피 에러가 발생했어
// nulld의 innerText 프로퍼티를 바꿀 수 없대..
// 이 에러는 많은 사람들이 댓글에 남기는 에러야
// 이 에러가 왜 발생하는지 알려줄게
// 이게 무슨 말이냐면, 여러분의 코드 내에 어떤 값이 null이라는 뜻이야
// 우린 이게(null) 뭔지 알아, 그렇지? 아무것도 없다는 뜻이잖아
// 그런데 여러분은 아무것도 없는 것(null)의 innerText를 접근하려고 한거지
// 이게 무슨말이냐면, 여기 이 title이 null이라는 말이야
// 이제 이해가 되네, 왜냐하면 something이란 id를 가진 항목이 없기 때문이야
// 여기엔 hello라는 class만 있잖아
// 그러니까 title은 null인데 우린 지금 null의 innerText를 변경하려고 한거야
// 만약 다음에 이 문제를 겪게 된다면, 어떻게 하면 되는지 알겠지?
// 이건 내가 항상 받는 질문이고 "이거 안돼요", "왜이런지 모르겠어요"란 댓글이 항상 있는데
// 에러를 보면 왜 이 에러가 발생했는지 알려줘
// 뭐.. 이 에러가 이해하기 쉬운 에러가 아니긴 해
// "title이 존재하지 않으니 title 내부의 innerText를 호출하지 마십시오"라고 알려주면 좋지만
// 이런 식으로 알려주거든
// 이 null variable의 innerText property는 변경할 수 없다고 알려주는거지
// 자, 우리는 getElementById() 함수에 대해 배웠어
// 하지만 여러분들이 얼마나 이 함수를 쓰게 될지는 잘 모르겠어
// 왜냐하면 난 자주 쓰지 않거든
// 이제 이 hello class를 사용하는 방법을 알려줄게
// 여기에 hellos라는 변수를 정의할거야
// document를 쓰면.. 많은 getElementBy~가 있는걸 볼 수 있을거야
// 우리는 그 중에 getElementsByClassName()을 사용할거야
// 이 안에 hello를 쓸게
// 그리고 이 class name은 당연히, 여기 있는 class name과 같아야 해
// 이 class가 이것과 같아야 한다는거야
// 이제 console.log(hellos)를 호출해보자
// 새로고침을 하고 console창을 보면, 모든 h1 elements가 나와
// h1, h1, h1... 그리고 여길 보면, 이건 array야
// 그러니까 이건 hellos"."으로 뭔가를 가져올 수 없어
// 왜냐하면 이건 많은 h1이 들어있는 array이기 때문이야
// 하나.. 둘... 셋...
// 그러니까 이건 element를 가져오는 방법 중에 하나야
// 가끔은, 많은 element를 한번에 가지고 와야하는 경우가 있잖아
// 그럴 때는 getElementsByClassName()을 사용하면 돼
// 그런데, 대부분의 경우에는 class name을 모든 곳에 추가하지는 않을거야
// 아마도 여기에 이 class name을 사용하고 또 다른 class name을 사용하겠지
// 예를 들어 이렇게 div를 생성해볼게
// div 내부에 h1을 생성해주고, 이 h1안에 Grab me!라고 적어줄거야
// 알겠지? 그리고 여기서 내가 하고싶은 것은 이 h1을 가지고오는거야
// 알겠지? 이걸 가져오기 위해 또 다른 function이 필요해
// 여기로 돌아와서 title을 다시 정의해주고
// document 내부의 getElementsBy~
// (document의 getElementsBy~함수를 읽는 중)
// 그럼 여기에 tag name으로 가지고오는걸 써보자
// 여기서 모든 h1을 가져와볼게
// 아마도 이게 내가 원하는건 아닐거야
// 내가 원하는건 h1 중에 하나만을 가지고 오는거니까
// 하나만 말이야. 모든 h1이 필요하지 않아. 왜냐하면 h1이 많을 수도 있기 때문이야
// 앞으로 element를 가지고 올 수 있는 모든 방법을 보여주겠다고 약속할게
// 보다시피, h1만 하나만 들어있는 array가 나왔어
// 하지만, 이것도 우리가 원하는게 아니야
// 아직도 title.으로 뭔가 할 수 없기 때문이지
// 왜냐하면, title이 title object 자체가 아니고 array기 때문이야
// 하지만 이렇게 element들을 가지고 올 수 있다는 방법을 알았으니 됐어.
// 알겠지? tag name을 가지고 element들을 가지고 올 수 있어.
// tag는 anchor, div, section, button 같은 것들을 의미해
// 자, 내 기준에서 element를 가지고 오는 가장 멋진 방법은
// querySelector와 querySelectorAll 이야
// 자 querySelector가 무엇을 하느냐?
// querySelector는 element를 CSS 방식으로 검색할 수 있어
// 이게 무슨 말이냐면, hello란 class 내부에 있는 h1을 가지고 올 수 있다는 것을 의미해
// 그래서 우리는 CSS selector를 사용해서 class hello를 찾고,
// 그 안에 있는 h1을 가져와달라고 할거야.
// 여기보면, 짜잔, 아주 잘 가져왔어.
// 보다시피, 이건 달라. 이건 CSS처럼 쓸 수 있어서 좀 더 섹시하지
// 물론 여기에는 .을 쓰고 hello를 썼어
// 왜냐하면 이건 CSS selector이기 때문이야. 알겠지?
// 이전에 getElementsByClassName() 함수를 사용할 때는 hello만 썼어
// 왜냐하면 JavaScript에서 우리가 class name을 넘겨준다는 것을 알기 때문이야
// 하지만 querySelector에는 hello가 class name이라는 것과 그 안의 h1을 명시해줘야 해
// 이게 내가 가장 좋아하는 함수고, 앞으로 계속 쓰게 될거야
// 남은 모든 영상에서 나는 document.querySelector()을 사용할거야. 100% 보장할게
// 왜냐하면 내가 이런식으로 element를 검색할 수 있게 해주거든
// div h1 이런 식으로도 검색할 수 있어
// 자, 여기서 보이듯이, querySelector는 단 하나의 element를 return 해줘
// 여기 있지. 만약 찾았다면 말이야.
// 찾지 못했다면.. h2를 찾는다고 해보자, 여기선 null이라고 응답할거야
// 그런데 이 element를 찾을 수 있다면, 다른 모든 element도 찾을 수 있어야 하겠지
// 이 부분이 세 개가 있다고 해보자
// 보다시피 hello h1이 3개야
// 그러면 여기에서 뭐가 나올까?
// title이 array일까? element일까? 어떤게 나올 것 같아?
// 여기에 1번, 2번, 3번이 있어. console에 뭐가 나올지 맞춰봐
// 여기에 대한 대답은, 새로고침해보면..
// 첫번째 것 하나만 나와
// querySelector를 사용할 때, hello class 안에 h1이 많을 수도 있어
// 여기서는 hello class가 세개 존재하지
// 각각 h1을 가지고 있어
// 여기 보이듯이, querySelector는 이 세개를 전부 가져왔어야 해
// 왜냐면 모두 조건에 맞으니까
// 하지만 실제로는 아니야. querySelector는 오직 첫번째것만 가져왔지
// 자 여기 봐바. 첫번째 element만 가져온대
// 알겠지? 매우 중요한거야
// 오직 첫번째 것만
// 만약 이 세 개 모두 가져오고 싶다면,
// 여기에 querySelectorAll이라고 해주기만 하면 돼
// querySelectorAll은 세개의 h1이 들어있는 array를 가져다 줄거야.
// querySelectorAll은 이 selector 안의 조건에 부합하는 모든 element를 가져다줄거야.
// 자 요약하자면, 우린 저번 영상에서 query.. 미안
// getElementById에 대해서 배웠어
// 그리고 이번 영상에서는 getElementsByClassName에 대해서 배웠고
// array를 가져다 준다는 것도 배웠어
// 또한, getElementsByTagName에 대해서도 배웠고 이것 또한 array를 준다는걸 배웠어
// 그리고 여러분은 getElementsByName도 할 수 있는데,
// 여기에 이렇게 name을 할당할 수 있어
// 이것 또한 array를 반환해 줘
// 그래서 이것 대신에 우린 querySelector를 사용했어
// querySelector는 CSS selector를 사용하여 검색할 수 있어
// 예를 들어 여기에 h1:first-child 같이 사용할 수 있다는 말이지
// 이건 정말 멋져!
// 알겠지? 그리고 이건, 하나의 element만 반환해줘
// 첫번째로 검색된 element만 말이지
// 만약 이 조건에 맞는 모든 element를 찾고 싶다면,
// querySelectorAll을 사용하면 돼
// 그리고 내가 말했듯이, 이 강의의 99.98%는 querySelector를 사용할거야
// 만약에 id를 통해서 찾고 싶다고 하더라도, querySelector를 활용해서 찾을 수 있어
// 여러분은 id만 전달해 주면 돼. 여기에 id인 #hello만 전달해주면 돼
// 그러니까 이 코드와, 이 코드는 같은 일을 한다고 보면 돼.
// 자 여기서는 당연히, id(#)를 적어줄 필요가 없지
// 왜냐하면 여기서 우리는 id를 찾고 있다는걸 알고 있기 때문이야
// 하지만 querySelector에서는 우리가 뭘 검색하는지 명확하지 않으니까 id(#)라고 명시해주는거지
// 왜냐하면 querySelector에서는 CSS selector 자체를 전달하기 때문이야
// 알겠지?
// 보다시피, 이 두 코드가 하는 일은 완전히 같아
// 하지만 여기서 h1을 가지고 오고 싶다거나,
// hello란 id 하위의 form을 가져온다든지
// 이런 것들은 getElementById로는 할 수 없어
// 알겠지?
// 이번 영상은 여기까지야
// 이제 JavaScript에서 HTML element를 가져오고 검색하는 것을 배웠어
// 이건 정말 정말 멋져!
// 좋아
// 요약하자면,
// 나는 이 querySelector를 사용할거고,
// 가끔씩은 이 getElementById를 사용할거고,
// 어쩔때는 array를 반환해주는 querySelectorAll을 사용할거야
// 하지만 대부분의 경우에는 이 2개를 사용할거야
// 그래도 이것보다 querySelector를 더 많이 사용할거야
// 이렇게 두어도 문제없이 동작할거야
// 한번만 더 테스트 해보자
// hello란 class 안의 h1을 가져와보자
// .hello h1
// title의 innerText를 hello로 바꿔보자
// 새로고침! 제대로 동작하는군.
// 좋았어, 다음 영상에서 만나자구. 바이바이
