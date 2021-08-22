// 좋았어, 전 편에서 우리는 프로그래밍의 기초를 배웠어.
// JavaScript와 HTML이 서로 어떻게 작동하는지는 아직 보지 않았지.
// 지난 편에서 배웠던 개념들은 Python에서도 똑같이 쓰일거야.
// Python에도 function, object, arrays, if-else 등이 있지만 생긴 모만 다르거든
// 이번 편에서는, 자바스크립트를 이용해서 브라우저에 대해 조금 더 이해해보는 시간을 가질거야.
// 그러니까 브라우저에 좀 더 초점을 맞춘거지. 이제 JavaScript가 브라우저를 어떻게 움직이게 하는지 알게 될거야.


// 왜냐면, 생각해봐, 내가 전에도 말했듯이, HTML은 접착제같은거야. HTML이 CSS와 JavaScript를 가져오잖아.
// JavaScript를 사용하는 이유는, HTML과 상호작용하기 위해서야.
// 그 말인 즉슨, HTML의 Element들을 JavaScript를 통해 변경하고, 읽을 수 있다는거야.


// 이제 여러분들에게 가장 중요한 브라우저의 핵심 object를 보여줄게. 자, 보다시피, console 창을 열어놨어.
// 그리고 여기에 document라고 칠거야. 좋아, document를 치자마자, 여기 보이듯이, document는 정의되어 있어.
// 보여? console에서 document를 보여주잖아. 봐봐, 여기에 HTML을 보여주고 있어.
// 이게 바로 HTML이야. 보여? 봐봐, 이게 내가 작성한 HTML이야.
// 내가 console에 document를 입력하면, 작성한 HTML을 가져올 수 있어.
// 여기 보이는 것처럼, document는 브라우저에 이미 존재하는 object야.
// 여러분이 접근할 수 있는 HTML을 가리키는 객체지. 정말 멋져!
// 알겠지? 이거에 너무 혼란스러워 하지마. 왜냐하면 console에 console.dir(document)를 호출해 보면...
// document는 보다시피 그저 object일뿐이야. document는 정말 많은 것들이 들어있는 object야.
// 많은 것들이 들어있지


// 이제 내가 여러분들에게 보여주고 싶은건 이거야,
// 여길 보면, document.title에 보면 "Momentum"이라고 되어있지
// 이건 정말 흥미로워. 왜냐하면 title이란 항목은, 여기 HTML에 내가 정의한 항목이기 때문이야
// 나는 JavaScript에서 title을 정의한 적이 없어


// 그러니까 document가 HTML을 보여주는거야.
// 하지만 JavaScript의 관점으로 보여주는거지. 이것처럼 object로 보이지.
// 이건 정말 정말 중요한거야. 이게 왜 중요하냐면, 여기에 보이듯이,
// 내가 JavaScript에서 HTML document 객체로부터 title을 가지고 올 수 있어서야.
// 좋아 한번 보자구,


// console에 document.title을 호출해 보자
// 자 여길 봐, "Momentum"이라고 값이 나왔어.

// 여기서 봤듯이, JavaScript는 HTML에 접근하고 읽을 수 있게 설정이 되어있어.

// 못믿겠다면, title을 Momentum App으로 변경해보자.
// 좋아. 새로고침하면..
// document.title을 쓰면 "Momentum App"이라고 나올거야

// 여기서 봤듯이 JavaScript는 HTML을 읽어오는 거야

// 이건 자동적으로 되는거니까 아무것도 해줄 필요가 없어
// 브라우저가 HTML 정보가 아주 많이 들어있는 document라는 object를 전달해주는거야.


// 자 여기서 봤듯이, 우리는 HTML 코드를 JavaScript 관점에서 보고 있는거야.

// 이건 정말 멋진거야
// 왜냐하면, HTML에 있는 title을 자바스크립트로 가져다 쓸 수 있다는거니까
// 그런데 생각해보면, object에서 properties를 가지고 올 수 있어 맞지?
// properties 값을 바꿀 수도 있었지
// 만약에 document.title 항목을 변경하면 어떻게 될까?
// 이 title에 집중해봐
// 여기에 document.title을 호출만 하는 대신에, document.title = "Hi"를 입력하고, 엔터를 칠게
// 어떻게 변했는지 봐봐. 멋져 그렇지 않아? 엄청 멋지다구.
// 보다시피 JavaScript에서 HTML을 읽어올 뿐만 아니라, HTML을 변경할 수도 있어.
// 이제, 밑에 을 보면, "Hi"라고 돼있지. 이건 JavaScript를 통해 변경 된거야.
// 물론, 새로고침을 하면 title이 "Momentum App"으로 돌아갈거야.
// 하지만 여기서 알 수 있는건, 이 모든 설정들이 다 준비되어 있다는거야.
// HTML과 JavaScript를 연결하기 위해서 아무것도 하지 않아도 돼.
// 브라우저가 여러분에게 많은게 들어있는 document 객체를 주니까
// 그 중에서 방금 배운건, document 안의 title이란 항목이야
// 만약 이렇게 적으면, 당연히 title의 값을 가져올거야.
// 하지만 이렇게 하면, 우리는 여기에 새로운 값을 저장하는거야
// 봐봐
// 자, 이번엔 뭘 배웠지?
// 우리는 JavaScript가 HTML에 이미 연결 돼있다는 것을 배웠어
// 우리가 HTML에서 여러 정보를 가져올 수 있다는 것과
// JavaScript코드에서 그 항목들을 볼 수 있다는 것도 배웠어
// 그러면, 내가 여기에 document.title = "Hello! From JS!"를 하고..
// 이 문장을 복사해서
// HTML파일의 에는 Hello! From HTML!이라 써볼게.
// 이렇게 하면 어떻게 나올까?
// 3 2 1 봐봐
// 보다시피, 우리는 JavaScript로 HTML을 변경했어.
// 얼마나 쉽냐구?
// 엄청, 엄청 쉬워

document.title = "Hello! From JS!"

// 좋아, 이번 영상에서 보여주고 싶었던 것은,
// JavaScript가 HTML에 이미 연결되어 있다는 거야.
// JavaScript는 여러분의 HTML에 접근하고 읽을 수 있어. 알겠지?
// 그리고 모든 것들은 document로부터 시작해.
// document가 모든 것들의 시작점이야,
// 왜냐하면 document는 여러분의 web site를 의미하거든.
// (HTML 읽는 중)
// 이 모든것들을 의미 한다구

// 이제 document.body 도 호출해보자.
// 이렇게 하면, body 항목만 가지고 올 수 있어.
// 이건 엄청 멋진거야
// 왜냐하면 JavaScript에서 HTML의 항목들을 읽어올 수 있다는 거니까
// 그 뜻은, 우리는 HTML에 항목들을 추가할 수도 있다는거야.
// 하지만 그건 다음 영상에서 다뤄보자
// 아직 우리는 HTML에 항목을 추가하는 것을 배우지 않을거고,
// 어떻게 항목들을 가지고 올 수 있는지 배울거기 때문이지
// 예를 들어, 여기 document의 title과 body가 있는데, body 안에 title을 추가한다면?
// 아니면 form을 생성하고, 그 form을 어떻게 JavaScript에서 사용하는지..
// 그런 것들은 다음 영상에서 해볼거야.
// 지금은, document 안을 뒤져보고, 뭘 할 수 있는지 조사해보는걸 추천해.
// 왜냐하면 document에서 할 수 있는게 엄청 많거든. 알겠지?
// 정말 많은 정보가 있어.
// 예를 들어, 여기 location이라는 항목이 있어.
// 여길 봐, 그리고 이 location이란 항목을 호출하면,
// 우리에게 object를 하나 리턴해줘. 여기 있네
// 이 object는 우리가 어디에 위치하고 있는지 알려줘.
// 정말 멋지지.
// 좋아, 보다시피 브라우저에서의 JavaScript는 매우 매우 강력해
// 다음 영상에서 보자구
// 다음 영상에서 우리는, 어떻게 JavaScript에서 HTML 항목을 가져오고 사용할 수 있는지 배울거야.
// 다음편에서 보자구. 바이바이
