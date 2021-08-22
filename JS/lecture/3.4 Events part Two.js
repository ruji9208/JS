// 자, 여러분이 listen 하고 싶은 event를 찾는 가장 좋은 방법은,
// 구글에 찾고 싶은 element의 이름, 예를 들어 h1 element을
// Mozilla Developer Network인 MDN에 검색해보는거야
// 당연히, 이곳에서 이 HTML에 대한 설명을 해줄거야, 그렇지?
// 하지만 우리는 HTML은 알고 있기에 HTML설명은 원하지 않아
// 우리가 원하는건, 바로 JavaScript element야
// 우린 HTML의 element를 원하는게 아니야
// 자 여기서 우리는 Google을 열고,
// 우린 링크에 Web APIs라는 문장이 포함된 페이지를 찾을 거야
// 왜냐하면 이건 JavaScript관점의 HTML Heading Element란 의미이기 때문이야
// 좋아, 찾았어
// 자, 이걸로 우리가 뭘 할 수 있는지 알아보자
// 이제 여길 보면, HTMLHeadingElement는 HTMLElement 인거야
// 그러니까 HTMLElement를 한번 보자
// 여기서 property들을 볼 수 있어. 맞아, 이것들은 중요해
// 하지만 여기선, 이 event들 또한 찾을 수 있지.
// 예를 들어서 여기 invalid 같은거 말이야
// (event 문서를 읽는 중)
// 좋았어
const title = document.querySelector(".hello:first-child h1")
console.dir(title);

// function handleTitleEnter() {
//         console.log("mouse is here!")
//     };
// title.addEventListener("mouseenter", handleTitleEnter);

function handleTitleEnter() {
        title.innerText = "Mouse is here!";
    };
title.addEventListener("mouseenter", handleTitleEnter);

function handleTitleLeave() {
    title.innerText = "Mouse is gone!";
};
title.addEventListener("mouseleave", handleTitleLeave);

// console.log(title);

// title.innerText = "Hello!"
// title.style.color = "blue";

// function handleTitleClick() {
//     console.log("title was clicked")
// };

// title.addEventListener("click", handleTitleClick)


// 여기서 우리는 좀 더 뒤로 갈 수도 있어. Element도 살펴볼 수 있지
// 그리고 이 Element는 평범한 HTML Element와 비슷해
// 여기 보이듯이 정말 많은 property가 존재하고 event또한 정말 많지
// 자 event를 한번 살펴보자
// onfullscreenchange, 멋지네. 좀 더 살펴볼까?
// 이것들은 전부 method나 event들이야
// (event 문서를 읽는 중)
// 이거 봐! 복사하는 것을 감지할 수 있어
// 정말 놀라워! 잘라내기와 붙여넣기도 가능해
// 누군가 붙여넣기 하는 것을 감지할 수도 있어
// 여기 감지할 수 있는게 엄청 많다구
// 자, 만약 여러분이 이걸 들여다보고 싶지 않다면 말이야,
// 나도 알아 이건 좀 지루하다구
// 대신에 console.dir을 통해서
// element를 console에 출력시켜줘
// 그러면 여기에 엄청 많은 property를 출력해 줄 거야
// 사용 가능한 event는 여기서 찾을 수 있어
// property 이름 앞에 on이 붙어있다면, 그게 바로 event listener야
// 이 event를 사용할 때에는 onabort 대신 abort로 사용해야 해. 알겠지?
// 이제 click을 찾아보자
// 여기있네, onclick
// 이 말은, click event를 부여할 수도 있고, change event를 부여할 수도 있어
// 또한 copy event를 부여할 수도 있어. 알겠지?
// 자 이제, 마우스로 할 수 있는 무언가를 찾아보자
// 여기 있군, 이제 우리는 특정한 event를 listen해볼거야
// 마우스가 우리의 title위에 올라갈때, click은 하지 않고 그냥 위에 위치할 때의 event 말이야
// 알겠지?
// 그 event는 mouseenter라고 불리는 event야
// 이제 나는 이걸 복사해서,
// (복사)
// 그리고 우리가 작성한 코드로 돌아가서,
// eventListener를 하나 더 추가할 거야. 알겠지?
// 그리고 여기에 mouseenter event를 입력하고
// 이제 handleMouseEnter라는 function 하나를 작성하고
// function 이름은 굳이 이렇게 짓지 않아도 돼
// 어떻게든 지어도 상관 없어
// 그치만 나는 내가 뭘 하고 있는지 제대로 알기 위해서 이렇게 짓는 거야
// 그리고 이 function을 여기 addEventListener에게 전달해 줄 거야
// 이제 제대로 동작하는지 console.log로 확인해보자
// console.log("mouse is here!")
// 좋았어, 이제 여기로 돌아와서, 새로고침 하고,
// 여길 봐바, 마우스를 올렸다 내렸다
// 마우스를 올렸다 내렸다..x4
// 내렸다 잘 동작해!
// 얼마나 멋지냐구
// 정말 멋지지 않아? 보라구!
// 이제 이걸 클릭하면! 뿅~ 이것 또한 제대로 동작하지
// 여기 보이듯이, 이제 JavaScript가 두 event를 listen 하고있어
// 하나는 click이고, 하나는 mouse enter야
// 이제 하나 더 생성해보자, mouse enter 대신에 다른걸 넣을거야
// 한번 찾아보자구
// 다시 한번 on으로 시작하는 property를 찾아서, onmouse를 찾아보자,
// 여길 보면 mouse enter가 있고 click과 비슷한 onmousedown도 있네
// onmouseleave 이게 내가 찾던 거야!
// 이 mouseleave를 한번 살펴보자
// 자 코드로 돌아와서, mouseleave로 바꿔주자구
// 이걸 복사해서 여기에 붙혀넣기 해줘
// 됐어, 그리고 이제 function 하나를 더 생성해 줄 거야
// handleMouseLeave라고 이름을 붙여주자
// 좋았어, 이제 이 function을 여기에 전달 해주고,
// 이제 console.log 대신에, 이 title의 innerText를 바꿔보자
// (코딩 중)
// 그리고 mouseleave event가 발생할 때는,
// (코딩 중)
// 좋아 이렇게 하면 돼
// 여길 보면, 코드자체로 설명이 되고, 굉장히 이해하기 쉬워
// 이걸 이해하려고 천재가 될 필요도 없고, 수학도 필요 없어
// 여기서 우리가 하는 건, JavaScript로 HTML element를 가져오고
// 가져온 element에 event listener를 추가해 주는 거야
// 그리고 event가 발생하면 어떤 function를 실행 시켜 준 거지
// 그리고 다시 한번, 이 함수의 실행버튼을 이런식으로 누르지 않아도 돼
// JavaScript가 우리 대신에 이 실행버튼을 눌러줄거라구
// 여러분이 실행버튼을 누르지 않아도 돼
// 알겠지? 좋아 한번 해보자구
// 다시 브라우저로 돌아와서, 새로고침 해보자
// 어떻게 되나 한번 보자구. 아직 아무일도 없지?
// 이제 마우스를 올리면? Mouse is here!
// 마우스를 내리면? Mouse is gone!
// Mouse is here!
// Mouse is gone!
// Mouse is here!
// Mouse is gone!
// 그리고 이제 클릭하면? 짜잔! 제대로 동작한다구 그렇지?
// 자 여기서 볼 수 있듯이, 여기에선 3가지의 event가 발생하고
// JavaScript이 이 3가지의 function을 정말 정말 잘 조작해주고 있다구
// 알겠지? 우린 아무것도 실행시키지 않았어
// 우린 그저 JavaScript에게 뭘 할지 알려주고 JavaScript는 그걸 하는 거야. 알겠지?
// 우리가 직접 할 필요 없이, 그저 JavaScript에게 하라고 지시만 하면 돼
// 알겠지? 우린 그저 JavaScript에게 누군가 title을 click하면
// 이 handleTitleClick function을 실행하라고 얘기해준 거야
// 그리고 누군가 마우스를 title에 올리면,
// 이 handleMouseEnter function을 실행하길 원해
// 만약 누군가가 마우스를 title 밖으로 내보내면,
// 이 handleMouseLeave를 실행시키길 원하는 거야
// 이게 전부야!
// 얼마나 간단하냐구! 정말 정말 멋져!
// 그러니까 이 예제를 한번 만들어보고, 다른 예제들 또한 만들어봐
// 여긴 엄청나게 많은 여러분들이 적용할 수 있는 event들이 존재한다구
// 이 이쁜이를 봐, 얼마나 멋져?
// 정말 정말 멋지다구
// 자, 우리는 더 많은 event를 활용해서 더 많은 연습을 할 거야
// 왜냐하면 event로 할 수 있는 많은 것들을 여러분에게 보여주고 싶기 때문이야
// 그리고 그 다음에 HTML과 CSS 그리고 JavaScript 간에 이뤄지는 무도회를 알아볼 거야
// 왜냐하면 우리가 지금까지 하는건, 맞아, 이론적으로, style을 변경하고 있어
// 다만 생각해보면, style을 변경하는건 CSS가 하는게 옳아
// 맞아, JavaScript로도 style을 변경할 수는 있어
// 여기 이 코드처럼 말이야. 여기에 잘못된 것은 없어
// 하지만 대부분의 경우에는 style은 CSS를 통해서 변경되어야 해
// 그러니까 우리는 CSS파일을 어떻게 사용하는지 배워볼 거야, 알겠지?
// 하지만 지금은 이걸로도 만족해. 다음 영상들에서도 event를 연습을 계속 할 거야
// 그리고 우리가 지금까지 배웠던걸 모두 다 사용할 거야
// function도 사용할 거고, if-else나 다른것들도 모두 사용해볼 거야
// 곧 말이야. 다음 영상에서 보자구
// Bye bye.
