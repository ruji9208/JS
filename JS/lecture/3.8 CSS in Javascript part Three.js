const h1 = document.querySelector(".hello:first-child h1")

function handleTitleClick() {
    h1.classList.toggle("clicked");
};

// function handleTitleClick() {
//     //h1.className = "clicked";
//     console.log(h1.className);
//     const clickedClass = "clicked"
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// };

h1.addEventListener("click", handleTitleClick)

// 좋았어, 지난번 영상에서 우리는, 어떻게 element에서 class name을 변경하고, 제거하고, 추가하는지 배웠어
// 여기엔 문제가 하나 있었지. 버그 같은거 말이야. 
// 이 버그는 우리가 만약에 class name을 이런식으로 바꾸게 된다면, class name을 빈 값으로, 
// class name을 clickedClass로 바꾼다면 말이지,우리는 이 sexy-font처럼 class를 잃게 된다구.
// 이렇게 하는 대신에 말이지, 여러분에게 보여주고 싶은건 class name을 바꾸는 다른 방법이고, 그 방법은 classList를 사용하는 방법이야
// 이 classList는, 여기 보듯이 두 가지 옵션이 있어, className과 classList
// classList는 말 그대로, 여러분이 class들의 목록으로 작업할 수 있게끔 허용해줘
// 왜냐하면 className은 그냥 모든걸 교체해버려, 이전에 class들은 상관하지 않고 말이야
// classList에서는 이걸 조금 다르게 할 수 있어.
// classList에는 내가 보여줄 정말 멋진 function들이 있다구. 예를 하나 들면, constains라는 function이야
// 이게 무슨 말이냐면, 이 function은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다는거야
// 엄청 멋지다는 말이지. 이제 여기에
// (위와 같이 작성)

// 그리고 이건 전부 없애도 돼.여기서 우리가 하는건, HTML element가 가지고 있는 또 하나의 요소를 사용하는거야
// 이 classList 말이지. 여기에 "element의 class 내용물을 조작하는 것을 허용한다" 라고 돼있어. 알겠지?
// 정말 멋지군
// 이제 여기서 우리는 classList가 clicked를 포함하고 있는지만을 확인하는거야. 정말 멋진거지
// 자 이제 여기로 다시 돌아와서, 새로고침 하면 아마 똑같이 동작할거야
// 맞아, 똑같이 동작하지만, 우린 아직도 className을 교체하고 있다구. 우린 이걸 교체하고 싶은게 아니야
// 알겠지? 이걸 교체하고 싶은게 아니라구. 이걸 위해서, 여기 있는 이 remove를 살펴볼거야
// remove 또는 add. 좋아, 만약에 이 clickedClass가 h1의 classList에 포함되어 있다면,
// (위와 같이 입력)

// 그리고 여기서 우린 clickedClass를 제거할거야. 알겠지?
// 만약에 clickedClass가 h1의 classList에 포함되어 있지 않다면,
// (위와 같이 입력)
// 좋았어, 이제 끝났어. 자, 이제 HTML에서 볼 수 있듯이, 우린 모든 class name들을 교체하지 않을거야
// 우리는 JavaScript를 사용하여 JavaScript가 특정한 class name만 변경하도록 했어
// 자 여기 보이지? 클릭하면 sexy-font class는 그대로 남아 있고, clicked class만 추가가 된다구. 보여?
// 그리고 이제 우리는 clicked class를 제거하지만, sexy-font는 그대로 남아 있을거야
// 여기 보이듯이, 정말 정말 잘 동작해. 오케이, 아주 놀라운 녀석이야
// 자, 다음에 뭘 할거냐면, 일단은 이 코드들은 전부 지울거야.
// 왜냐하면, 여기서 우리가 하고있는 이 class name을 추가하고 제거하고,
// element가 class name을 포함하고 있는지 확인하고 있는 것 등은 정말 흔한거야.
// 이건 개발자들이 항상 하고 있는 일들이고, 여러분이 JavaScript로 작업을 하면 이 작업들을 엄청 많이 하게 될거야. 알겠지?
// 이런 이유 덕분에, 우리 삶을 더 쉽게 해줄 function들이 존재한다구.
// 그리고 그 function 중에 하나가, 여기 보이는 toggle function이야. toggle은 굉장히 흥미로운 function이야
// 왜냐하면 이 toggle function은 class name이 존재하는지 확인을 할거야.
// 만약 class name이 존재한다면 toggle은 class name을 제거할거야
// 그리고 만약 class name이 존재하지 않는다면 toggle은 class name을 추가할거야. 그게 다야
// 그러니까 기본적으로 toggle은 이 코드를 구현하는거야. 우리가 구현한 이 코드처럼, 
// h1의 classList에 class name이 포함되었다면 제거하고, 포함되지 않았다면 추가하고 이 다섯줄의 코드는 전부 제거될 수 있어
// 이 toggle에 포함 될 수 있지.
// (위와 같이 작성)

// 좋았어. 그리고 여기에 class를 전달해 주면 돼
// 자 그리고 이 경우엔, 우린 이 clicked를 한 번만 사용하기 때문에 여기에 이렇게 한 번만 적어주면 돼
// 여러분이 이 string을 반복하는 순간, 그때가 constant를 생성할 순간이야. 하지만 지금은 이 이쁜이를 보라구
// 단 한줄의 코드로 우리가 했던걸 똑같이 할 수 있다구. 이제 이걸 새로고침 하고, h1을 한번 살펴보자구
// 여기 있네, 이제 클릭 해보자 그리고 다시 클릭
// 그리고 여기 보듯이, 똑같이 작동해! 단 한줄의 코드라는 점만 빼고 말이지
// 자 다시한번, 이 toggle이 뭘 한다고 했지? toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서
// 만약 있다면, toggle이 clicked를 제거해줘. 
// 만약 h1의 classList에 clicked가 존재하지 않는다면, toggle은 clicked를 classList에 추가를 해줄거야
// 만약 여러분한테 버튼이 하나 있는데 그걸 누르면 불빛이 나오고, 다시 한 번 누르면 꺼지는 것처럼 말이야
// 알겠지? 이게 기본적으로 toggle이 하는 일이야
// 또는 여러분의 스마트폰에 달린 한번 누르면 스크린을 잠그고 다시 한번 누르면 스크린을 켜주는 버튼 같은거야
// 그게 바로 toggle이야. 알겠지? 그리고 이 이쁜이를 보라구.
// 단 한 줄의 코드로 우리가 작성했던 이 코드들로부터 우리를 구해줬다구
// 여기 있는 이 작은 toggle 하나가 여기 있는 이 코드들과 똑같다는거야. 알겠지?
// 하지만 우린 해냈다구
// 이제 우리는 CSS에 정의된 class name들로 HTML element에서 숨기고 표시하는 방법과
// toggle을 사용하는 방법을 이해했다구
// 하지만 말이야 우린 많은 예제를 연습했다구
// 여러분에게 toggle을 처음부터 보여줄 수도 있었지만
// 그건 재미없었을거야. 맞지?
// 그래서 대신에 className도 가르쳐주고.
// if, else, 그리고 contains와 add와 remove등을 가르쳐줬지.
// 그리고 마지막으로 toggle에 대해서 배웠어.
// 무지무지 작지만, 똑같은 일을 해내지
// 알겠지? 이게 다야
// 오, 여기서 toggle에 대해서 읽어볼 수 있어
// "토큰을 toggle한다. 토큰이 존재한다면 토큰을 제거하고 존재하지 않는다면 토큰을 추가한다"
// 끝이군
// 좋았어
// 아름다운 물건이야
// 해냈다구
// 엄청 작은 코드라구.
// 우린 엄청 큰 코드를 썼지만
// 이젠 작다고 부를 수 있게 됐어
// 좋았어
// 이건 이제 끝났어
// 이제 application을 구현하는걸 시작해보자구!
// 좋았어. 우리는 첫째로, 인삿말을 건네는 것부터 시작할거야
// "이방인이여 안녕하신가?" 이런것 처럼 말이지
// "당신의 이름은 무엇인가?"
// 그리고 펑
// 이제 그 사람의 이름을 저장하는 걸 할거야
// 이제 드디어 시작할 수 있게 됐어!
// 다음 영상에서 보자구
// 우리는 이 application 만들기를 시작할거야
// 바이 바이
