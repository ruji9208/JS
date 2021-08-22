// 자, 나는 여러분에게 event에 관해서 여러분에게 조금 더 알려주고 싶어
// 왜냐하면 event들은 그저 click이라거나 마우스가 enter, leave하는 정도만 처리하는게 아니거든
// 내말은 이건 정말 멋져,
// 멋지긴 하지만 말이야, 이것보다는 더 많은걸 할 수 있다는거야
// 자 여기서 내가 보여주고 싶은건, window의 interface 또는 object야
// 이 window란건 말이야, 기본적으로 window야. 이 window를 뜻 해
// 알겠지?
// 자 이제 우리가 할건 말이야,
// event내부를 살펴보고, event를 listening하는 또다른 방법을 배워볼거야
// 자 여기 이 event 쪽을 살펴보자
// 여기 이 문서에서 볼 수 있듯이,
// 여러분은 addEventListener()를 통해서 event들을 listen 할 수도 있고,
// oneventname property에 event listener를 할당함으로써
// event를 listen할 수 있대
// 자, 여기 보이듯이 이건 우리가 이전 영상에서 본 onclick이나 onmouseenter같은거랑 비슷해
// 알겠지?
// 자, event를 사용하는 데에는 두가지 방법이 있어
// 기본적으로.
// 첫번째는 이거야. title.addEventListener()를 해주고, click을 넘겨주는거야. 맞지?
// 하지만 이걸, title.onClick() 이런식으로 바꿀 수 있어
// 이렇게도 할 수 있어
// 좋았어. 어떤게 더 좋아보이는지 나한테 말해달라구
const h1 = document.querySelector(".hello:first-child h1")
console.dir(h1);

function handleTitleClick() {
    h1.style.color = "blue";
};

// h1.addEventListener("click", handleTitleClick)
h1.onclick = handleTitleClick;

function handleTitleEnter() {
    h1.innerText = "Mouse is here!";
};
h1.addEventListener("mouseenter", handleTitleEnter);

function handleTitleLeave() {
h1.innerText = "Mouse is gone!";
};
h1.addEventListener("mouseleave", handleTitleLeave);

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
    alert("copier!");
}
window.addEventListener("copy", handleWindowCopy);

function handleWindowOffline() {
    alert("SOS no WIFI!");
}
window.addEventListener("offline", handleWindowOffline);

function handleWindowOnline() {
    alert("All Good!");
}
window.addEventListener("online", handleWindowOnline);
// 이제 이걸 새로고침 하고 클릭해보자
// 봐, 잘 동작하고 있지
// 그러니까 이건 똑같이 동작하는거야
// 이제, 이것도 바꿀 수 있어.
// "이 function을 실행시켜 주세요" 라고 하는거지
// 끝났어
// 알겠지? 이게 다야
// 두가지 방법
// 알았어?
// 이제, 내가 addEventListener를 더 선호하는 이유는,
// 나중에 removeEventListener를 통해서 event listener를 제거할 수 있기 때문이야
// 알겠지? 그러니까 난 이걸 더 선호해
// 그리고 내가 생각하기에, 이게 더 보기가 좋아
// 왜냐하면 이런식으로 title.onclick=... 이런식의 코드를 별로 안좋아하거든
// 하지만 여러분들은 이렇게 할 수도 있어, 알겠지?
// 자 이제 window로 다시 돌아가서... window의 event를 한번 listen해보자 알겠지?
// 자 여길 한번 보자. 여기 error event가 있네? 그치만 이건 신경 안써
// devicemotion이란 event도 있네? 이건 여러분의 모바일이 움직이거나 할 때 발생하는 event야
// 그리고 여길 봐, 여기 resize event가 있어
// 난 이건 좋아해
// 이건 진짜 좋아한다구
// 자 우린 이 event를 한번 listen 해볼거야
// 우리 지금까지 window에 대해서 이야기 하고 있었지?
// 여기 있는 title은 HTML element이고,
// 이제 window에 대해서 이야기 할거야
// 자 여기 window라고 입력하고,
// 감사하게도, 이건 기본적으로 제공하는 거야
// 마치 document가 JavaScript에서 기본적으로 제공되듯이 window도 기본적으로 제공하지
// (코딩 중)
// 그리고 이곳에 resize를 넘겨줘
// 그리고 이곳에 handleWindowResize를 넘겨주자
// 자 여기서 문제는, 난 아직 handleWindowResize를 생성하지 않았어
// 그러니까 여기에 handleWindowResize function을 생성해주자
// 알겠지?
// 자 이제 우리의 window가 resize(화면크기가 바뀜)될 경우에,
// 여기서 document를 호출하고..
// 자 우리는 document가 body에 접근할 수 있게 해주는걸 알아
// (코딩 중)
// 알겠지?
// 여기서 이 body 부분이 꽤 중요한 부분이야.
// 여기 h1처럼 document 밑으로 가져올 순 없어
// 자 우리가 만약에 document.title을 호출하면, 여기 있는 이 title이 아닐거야
// 여기 있는 이 title을 가져올거야
// 자 여러분이 헷갈릴 수도 있으니까, 여기 이 title을 h1으로 바꾸자
// 이걸 h1으로 변경하자구
// 다른 것들도 모두 h1으로 바꿔줘
// 알겠지?
// h1은 document.title이랑 달라
// 이제 이 코드를 테스트 해볼거야. 그전에 이걸 다시 바꿔놓자구
// 자 이제 됐어
// 자 다시, 만약 이게 제대로 동작한다면 어떻게 될까?
// 만약 내가 말한게 맞고, 모든것이 제대로 동작한다고 한다면,
// 우린 이제 event를 하나 더 listen하고 있고, 그건 바로 resize event야. 알겠지?
// 하지만 우리는 h1을 resize할 수는 없고, window를 resize 할 수는 있어
// 자 우린 이제 window element의 resize event를 listen 하고 있고,
// 만약 이 event가 발생한다면,
// 이 handleWindowResize가 실행될 거고,
// 그리고 이 handleWindowResize function은
// body의 backgroundColor를 변경할거야
// 그리고 내가 말했듯이, 우린 console에서 body에 매우 쉽게 접근할 수 있어
// 오? 이게 되네?
// 이걸 보라구
// 여기 이 window를 resize 했다구, 이게 되다니 놀라워!
// 자, 내가 말했듯이, body는 특별해서, 이렇게 body를 호출할 수 있어
// 알겠지?
// 이렇게 body를 가지고올 수 있고
// 이제 body는 backgroundColor가 tomato로 돼있는걸 볼 수 있어
// 알겠지? 하지만 이렇게 우리가 가지고 올 수 있는건 이게 다야
// 우린 예를 들어서 document.div 이런식으로는 가지고 올 수 없어
// 이건 존재하지도 않아. 알겠지?
// document의 body, head, title 이런것들은 중요하기 때문에 이렇게 존재하는거고,
// 나머지 element들은 querySelector나 getElementById 등으로 찾아와야 해
// 하지만 여길 보면, 이건 제대로 동작해! 해냈다구!
// 다시 한번 해보자,
// 자 새로고침 하고, 다시 resize 해볼거야,
// 3
// 2
// 1
// 짜잔
// 잘 동작 한다구. 여기 resize 하는걸 봐
// 정말 멋지지 않냐구!
// 정말 정말 멋져!
// 멋지군
// 자, 몇 가지 더 해보자
// wifi에 관련 된 event를 다뤄보자
// 자 이건 animation을 위한거야,
// 이거 말고, 이걸 보자
// 이건 clipboard에 관련한 event야
// 얼마나 멋지니
// 해당 event는 유저가 copy 행위를 했을 때 발생합니다
// 와우! 이건 못참지
// 여기 event listener를 하나 더 추가하자
// (코딩 중)
// 여기에 copy event를 전달해 주고,
// 여기에 handleWindowCopy function을 전달해 주자
// 자 이제 저게 제대로 동작하는지 보자구,
// (코딩 중)
// alert를 추가하고..
// copy paster... 아니 copier!를 입력해주자, 알겠지?
// 이제 제대로 동작하는지 보자구
// 여기 보이듯이, 우린 실험을 하고 있지만 모두 똑같은 패턴이야
// 우리는 event를 listen 하고 거기에 반응 하는거야
// 자 여기로 돌아와서, command+c 또는 ctrl+c를 해보자
// 좋았어!
// 이걸 봐바
// 내가 command+c 또는 ctrl+c를 했더니 동작 했어!
// 얼마나 멋지냐구!
// 이제 이걸 copy 해보자
// 이제 이걸 copy 하면...
// 된다구! 이걸 봐바
// Copier! 하!
// 얼마나 멋져?
// 아마 paste(붙여넣기)도 마찬가지겠지?
// 봤지? 여러분이 원하는 어떤 event도 가지고올 수 있어!
// 정말 멋져!
// 그리고 여기 보이듯이, 매번 같은 패턴이야
// 우린 copy event를 listen 해서 이 event를 처리하는거야
// 좋아
// 당연히, 이건 h1에서 발생한 event가 아니고 window에서 발생한 event지만, 패턴은 같아
// 여기 보이듯이, 이 코드는 계속 패턴이 반복된다구
// 우리는 element를 찾아서 event listener를 추가하고, event가 발생하면 반응을 해주는거야
// 알겠지?
// 좋아, 몇개만 더 해보자
// 자, 이게 내가 해보고 싶었던 거야
// 여기 이 두개 말이야.
// 이건 정말 멋질거 같아
// 우리가 wifi에 연결 돼있는지 브라우저가 알 수 있다는게
// 이건 나에게 정말 멋진 일이야
// 이걸 한번 해보자
// 이제 우린 여기에..
// (코딩 중)
// 여기다간 offline을 더해주자
// 그리고 마찬가지로 handleWindowOffline function을 만들어줄게
// 이 function은 아직 없지만 이제 만들거야,
// (코딩 중)
// 그리고 여기다가 똑같이,
// (코딩 중)
// 여기 이 online event를 쓸거고,
// 이건 handleWindowOffline function을 실행시키지
// 아직 이 funciton을 생성하진 않았지만 곧 생성 할거야
// (코딩 중)
// 자, 작동하는지 보러가자
// 새로고침 하고,
// 좋아, 다른건 잘 작동하는 것 같네
// 내가 이걸 copy 하려고 하면..
// copier 이라고 나타나지
// 여기 봤듯이, 유저에게서 발생하는 event들을 감지해내고 있어
// 이걸 봐바 tomato색깔 배경이야! 아름답군!
// 이제 이게 제대로 동작하는지 보자구
// 이제 난 wifi를 해제할거야
// 뾰롱
// 그리고~ 이 이쁜이를 보라구
// SOS no WIFI
// 이거 정말 멋지다구!
// 자 이제 다시 wifi에 연결해보자구
// 3
// 2
// 1
// 나타났어! 이걸 봐!
// ALL GOOOD
// 여러분 자신이 지금 얼마나 강력한지 느껴져?
// 이게 JavaScript가 정말 멋진 이유야!
// 이건 단지 event listening에 관한 것일 뿐이야
// 이건 단지 event listening에 관한 것이라구! 정말 멋져!
// 자, 다음 영상에서 우린 코드에 if-else를 추가해 볼거야
// 다음 영상에서 보자구!
// 안녕!
