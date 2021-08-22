// 좋았어, 다시 한번 말하지만, 꼭 이해해야 할 것은
// 여기에 app.js가 있기 때문에 javascript를 통해 HTML의 내용을 가져올 수 있다는 거야
// 우리가 app.js를 import하지 않았다면, 당연히, document는 여기 존재할 수도 없었겠지
// 포인트는, document가 HTML이 app.js를 load하기 때문에 존재하는 것이라는 거야.
// 그 다음에 browser가 우리가 document에 접근할 수 있게 해준다구, 알겠지?
// 이건 정말 정말 중요해
// 여기 이 두 줄의 코드로 우리가 했던 것은, hello라는 class 내부의 h1을 가지고 오는 것이었어.
// 다시 한번, class hello 내부에 존재하는 이 h1 말이야
// 이게 우리가 했던 전부라구.
// 자, 지난번 영상들에서 HTML에서 무언가를 가져오는걸 배웠어
// div나 h1같은 tag name을 사용해서 검색하기도 했고
// id를 가지고 검색하기도 했어. 맞지?
// 이따금 class name을 가지고 검색을 하기도 했지. 전부 다른 function을 가지고서 말이야.
// getElementById, getElementsByClassName,
// getElementsByTagName 등과 같은것 말이야. 그렇지?
// 하지만 나는 그 중에서 querySelector가 최고라고 생각해.
// 왜냐하면 이 querySelector는 앞서 나열한 모든 걸 할 수 있거든
// 예를 들어서, 여기서는 hello란 class를 가진 element를 하나 가지고 올 수 있어
// 이렇게(querySelectorAll) 사용하면,
// hello라는 이름의 class를 전부 가져올 수 있어
// 하지만 이걸 섞어서 사용할 수도 있어. #id:first-child 이런식으로 말이야
// 알겠지? 정말 놀랄 만한 일이야
// .hello:first-child h1
// 그리고 여길 보면, 잘 동작한다구!
// console.log(title)을 해보면,
// 잘 작동 할거야. 이걸 보라구
// class hello를 가진 div 내부의 first-child인 h1을 찾아오는것
// 이건 정말 강력한거야

const title = document.querySelector(".hello:first-child h1")
// console.log(title);
// console.dir(title);
// title.innerText = "Hello!"
// title.style.color = "blue";

function handleTitleClick() {
    console.log("title was clicked")
};

title.addEventListener("click", handleTitleClick)

// CSS selector를 전달할 수 있어. 정말 놀라워
// 그리고 JavaScript는 여기 이 element에 접근할 수 있게 해준다구
// 만약에 이 element를 console.log로 출력해보면, 이런 결과를 얻게 될거야
// 자, 만약 여러분들이 이 element의 내부를 보고 싶다면,
// console.log 대신에 console.dir를 사용하면 돼
// 그리고 이건 기본적으로 object로 표시한 element를 보여줄거야
// 여기 보이듯이, 굉장히 많은 것들을 할 수 있어
// 자 여길 보면, on으로 시작하는 것들이 굉장히 많아
// (on으로 시작하는 항목들을 읽는 중)
// 여기 굉장히 많은 on on on on들이 있어. 이것들은 event야, 알겠지?
// 이번 영상에서 이것들에 대해서 배워볼거야
// 그 전에 이 항목들이 전부 JavaScript object라는 것을 이해하고 넘어가야 해
// 그리고 우리는 이전 영상들에서
// JavaScript object 내부에 있는 property들의 값들을 변경할 수 있다고 배웠어
// 특정 property들은 변경할 수가 없어
// 예를 들어서, 여기 namespaceURI, 이건 바꿀 필요가 전혀 없지
// 알겠지?
// 바꿀 수 있는 것도 있지만, 몇 가지는 자바스크립트가, "이걸 도대체 왜 바꾸는 거야?" 하는 거지
// 그래도 말이야, 우린 정말 많은 것들이 있어, 놀랄 노자야!
// 자, 여기서 중요하고 내가 제일 좋아하는 멋진건 이거야. "style"
// 자, 여기 보이듯이, 이 style은 이 대문짝만한 h1 object 내부에 있는 object야
// 이 style을 한번 둘러보자구
// 여기 보면, 이 element의 style을 볼 수 있는데, JavaScript형식으로 작성돼 있어
// 이게 얼마나 멋진 일이야!
// 여기 예를 들어서, color라는 항목이 있어
// 자 이건 object 내부에 들어있는 property일 뿐이야
// 이제 이걸 바꾸면 어떻게 되는지 한번 보자
// 이제 이 color항목을 찾기위해서는 말이야,
// h1을 찾고, 다음에 여기 있는 이 style을 찾아야 한다는걸 알고 있지
// 그러니까 h1.style. 그리고 여기 어딘가에서 color를 찾으면 돼
// 그럼 이제 한번 바꿔보자
// 여기서 우린, 샤싣.. 아니, title.style.color는... blue로 바꿔보자
// 잘 동작하는지 보자. 새로고침, 제대로 동작하는군!
// 이 예쁜이를 보라구! 정말 미치도록 잘 동작해
// 여기서 봤듯이, 이건 정말 놀라워!
// 정말 멋지다구!
// h1의 style을 JavaScript에서 변경할 수 있다는 사실이 말이야
// 이거 얼마나 멋지냐구!
// 그러니까 우리는 JavaScript가 browser에서 얼마나 강력한지를 이해해야 해. 알겠지?
// 왜냐하면 이런 것들을 할 수 있으니까 말이야
// 이건 정말 멋진 일이지
// 하지만 여러분들이 JavaScript에서 대부분 작업할 일은, event를 listen 하는 거야
// event란 뭘까? event는 말이야 예를 들어서, 내가 click을 하면 그게 event야
// h1위로 마우스가 올라가도 event야
// 만약 내가 입력을 끝내거나, 내 이름을 적거나, enter를 누르는 것, 그런게 event야
// event는 내가 wifi에서 접속이 해제될 경우, 그런것들이 event가 될 수 있어. 알겠지?
// 이 모든 event들을 JavaScript는 listen할 수 있어
// 자 우리가 배울 event는 다름아닌 click event야. 알겠지?
// 자, 이론상으로 여러분들은 어디든지 클릭할 수 있어. 말 그대로 어디든지 말이야. 맞지?
// 이제 우리는 click을 listen 해볼 거야
// 어떻게 하냐면
// 자, 첫번째로 우리가 해야할 것은,
// 우린 HTML element를 JavaScript로 가지고 오는 방법을 알고 있어
// 그래, 알고 있어. 끝
// event를 listen하는 방법만 배우면 돼
// 이제 title에 eventListener를 추가해줄 거야
// eventListener는 말 그대로, event를 listen하는 거야
// 하지만 JavaScript에 무슨 event를 listen하고 싶은지 알려줘야 해
// 왜냐하면 모든 event에 대해서 알고싶은 것이 아니고
// 단 하나의 event만 알아보고 싶기 때문이야
// 자 여기서, 만약 이렇게 하면, 나는 click event에 대해서 listen하고 싶은 거야
// 좋아, 이렇게 하는 것 만으로도, JavaScript에선 title을 지켜보다가,
// 말 그대로 누군가가 title을 click하는 것을 listen할거야, 알겠지?
// 하지만 누군가가 title을 click을 했을 때 무언가를 해줘야겠지?
// 그래서 우리는 여기에 handleTitleClick이라는 function을 정의해 줄거야
// console.log("title was clicked!")
// 끝났어!
// 하지만 이 function을 사용해야지
// 이미 function에 대해서는 배웠으니까, 이제 이 function을 사용해보자
// 이제 이 function을 여기에 두 번째 argument(인수)로 전달할 거야
// 여기 이 addEventListener function에 말이지
// 자, 이게 무슨 의미지?
// 이게 무슨 의미냐면, title element를 찾을 방법을 배웠고, 멋지게 찾아왔지
// 그리고 여기에 eventListener를 추가해줬어
// 여기서 click event를 listen 하고, 이 click event가 발생하면,
// 우리는 이 handleTitleClick이라는 function이 동작하길 원해
// 여기서 이 function을 실행하지 않게 하는 것이 굉장히 중요해
// 설명했듯이, function을 실행시키고 싶다면 이렇게 해야한다고 했어, 맞지?
// 나는 이걸 곧바로 실행시키고 싶지 않아
// 내가 원하는 것은, 이 function을 JavaScript에 넘겨주고,
// 유저가 title을 click할 경우에 JavaScript가 실행버튼을 대신 눌러주길 바라는 거야
// 내가 직접 실행버튼을 누르지 않고, JavaScript에 이 function 이름을 넘겨줘서,
// 유저가 title을 click할 경우에, JavaScript가 나 대신 실행버튼을 눌러주게 하는 거야
// 여기 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있다는거 기억하지?
// 자 이제 제대로 동작 하는지 보자구
// 여기 와서, 새로고침 해보면, 여기 보면 파란색이 사라졌을 거야.
// 왜냐하면 이건 우리가 JavaScript에서 추가했었던 거라서 그래 (JavaScript에서 제거됨)
// 자 이제 이걸 click 해볼거야 3.. 2.. 1.. Click!
// 여기 보여? 작동한다구! 한번 더 해보자
// (열심히 클릭 하는중)
// 얼마나 멋지냐구!
// 굉장히 멋지지 않냐구
// 정말 놀라워
// 이렇게, 웹사이트에서 click event를 감지하는 방법을 배웠어
// 이건 굳이 button일 필요가 없어, 이건 h1이라구
// 예를 들어서 내가 만약 바깥을 click 하면,
// 내가 click을 하고 있지만 아무것도 일어나지 않아
// 하지만 여기 다시 돌아와서 여기를 click하면, 다시 동작해.
// 이렇게, 여러분은 event를 listen하는 방법을 배웠어
// 이제, 항상 이런 방식으로 사용할거야. 알겠지?
// 여기 이 title이란 HTML element가 하나 있다고 가정하고
// addEventListner를 호출하고, listen하고 싶은 event이름을 알려줄 거야
// event를 찾는 방법은 나중에 알려줄테니까 걱정하지 말고,
// 그리고 이곳엔 event가 발생하면 호출할 function을 전달해주면 돼
// 그리고 여기에 괄호를 넣지 않아야 한다는건 정말 중요해
// 이렇게 하면 안돼. 우린 실행버튼을 누르길 원하지 않아
// 우리는 JavaScript에 function만을 넘겨주고,
// 유저가 click할 경우에 JavaScript가 실행버튼을 대신 눌러주길 바라는 거야
// 좋아, 우리가 이 영상에서 배운 것들을 종합해보자.
// 유저가 만약에 title을 click 하면
// title.style.color = "blue" 이라고 하고
// 좋았어, 한번 해보자구
// 자 여기로 돌아와서, Click me!라고 바꿔주자
// 새로고침 하고, 여기 있군
// 3.. 2.. 1.. 짠!
// 자 정말 잘 동작해. 아주 간단하고, 아주 쉬워
// 우린 이번 영상에서, 이 title object 내부를 보면,
// 굉장히 많은 정보를 가지고 올 수도 있고, 변경할 수도 있다고 배웠어
// 예를 들어서, 우리는 이 title을 color를 가지고올 수도 있고, 변경할 수도 있다는 거지
// 그리고 우리는 event를 listen하는 방법 또한 배웠어
// 유저의 행동들을 listen 할 수 있지
// 이 중에서 가장 기본적이고 이해하기 쉬운것은 바로 click event야
// click event를 listen하기 위해서는,
// HTML element를 가져와서, addEventListener function을 실행시켜 주면 되는데,
// 이곳에 어떤 event를 listen 하고 싶은지 명시해줘야해
// 왜냐하면 모든 event를 listen하고 싶지는 않으니까
// 여기에는 굉장히 많은 event들이 있어. 예를 들면 click은 하나의 event지
// 마우스가 element위로 올라갈 경우에도 event가 발생하고,
// 마우스가 element에서 벗어날 때에도 event가 발생해
// 그러니까 어떤 event를 listen하고 싶은지를 명확히 해야 해
// 그리고 유저가 이 element에 해당 event를 했을때 어떤 함수를 실행 할지도 정해야하고
// 그리고 여기서 이 function의 실행버튼을 눌러선 안되고,
// 그걸 원하지는 않아, 알겠지?
// 우린 그저 JavaScript에 function만을 넘겨주고,
// JavaScript가 우리 대신에 실행시켜 주기를 원하는 거야
// 이게 얼마나 흥미로운 일인지 알아. 정말 멋진 일이지.
// event listener를 추가하고 이것저것 할 수 있다는게 말이야
// 그리고 이번 교육에서 모든 것을 이렇게 할 거야
// 이제 배워야 할 아주 사소한 부분이 남아 있는데,
// 안배울 수도 있고,
// 바로 app을 build하는 방법이지만, 일단 배워야 할 것은 이게 다야.
// 페이지에서 element를 찾아오고,
// 그 element에 event listener를 추가할 거고,
// 그리고 유저가 click을 하거나, 무언가 입력하거나, 엔터를 누르거나 할 때,
// 그 event들을 listen 할 것이고,
// 그 event에 반응을 해줄 거야.
// 그게 기본적으로 다야.
// 오케이?
// 좋았어, 다음 영상에서 보자구
// Bye
