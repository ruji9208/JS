const h1 = document.querySelector(".hello:first-child h1")
console.dir(h1);

// function handleTitleClick() {
//     if (h1.style.color === "blue") {
//         h1.style.color = "tomato";
//     } else {
//         h1.style.color = "blue";
//     }
        
// };

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;    
};
h1.addEventListener("click", handleTitleClick)
// h1.onclick = handleTitleClick;



// 좋아, 이 영상에서는, 이 event listener들을 모두 지울거야
// 그냥 여러분이 얼마나 강력해질 수 있는지 보여주고 싶었어
// 여러분들이 찾을 수 있는 event들을 통해서 말이지
// 예를 들어 resize, copy, online, offline등
// 아주 많지
// 자 여기 이것들도 지워버릴거야
// 왜냐면 우리가 이제 handleTitleClick function에 초점을 맞출 것이기 때문이지
// 그러니까 다른것들은 모두 빠이빠이 하자구
// 좋았어,
// 여기서 내가 원하는 것은 말이야, 유저가 title을 click 했을 때 title을 파란색으로 칠해주는거야
// 하지만 내가 이걸 한번 더 누르면 title의 색깔을 tomato색깔로 변경하고 싶어
// 그리고 내가 다시 클릭하면 파란색으로 그다음엔 다시 tomato로 말이야
// blue, tomato, blue, tomato,... 알겠지?
// 자 그게 내 목표야
// 그 말은, 내가 무언가가 true인지를 확인해야 한다는 거야
// 우리가 이제부터 할 일이지
// 자 이것도 지워버리고,
// 여기에 console.log를 해주고,
// h1.style.color를 출력해보자
// (h1.style.color 값 할당한 뒤) 여기에서도 console.log 해볼게
// 알다시피, 여기에는 getter와 setter가 있어
// 여기서는, 우린 h1의 color를 획득할 수 있어
// 그리고 여기서는, h1의 color를 설정할 수 있어
// 또 여기서는, h1의 color를 다시 가지고 오지
// 자 이제 어떤 일이 일어나는지 한번 보자
// 이걸 새로고침하고,
// 클릭하면,
// 좋았어, 이제 console을 검사해보자
// 여길 보면, 아무것도 없지
// 말 그대로 아무것도 없었지만, 여긴 blue라고 출력되네
// 그렇군
// 좋아, 그 말은, 내가 이걸 다시 클릭하면, 여기에
// blue blue blue blue..... 이런식으로 출력이 될거야
// 자 이제 이건 매우 좋은 소식이야
// 왜냐하면 내가 찾는 값이 여기 있거든
// 이게 무슨 뜻이냐면,
// 여기서 내가 원하는건, 이 값을 검사해서 만약 h1.style.color가 blue라면,
// 이걸 tomato로 변경해주세요, 라고 하는거야
// 그리고 만약 h1.style.color가 blue색깔이 아니라면, blue로 변경해주세요 라고 하는거지
// 그리고 이건 굉장히 간단해
// 이제, 여기에 if를 추가해주자
// (위와 같이 입력)
// 이건 이전 영상에서 배웠지?
// 그 다음에 h1.style.color를 tomato로 바꿔주자
// 자 여길 보면, 이 세 개는 값이 일치함을 확인하기 위한 거야
// 여기서 h1의 color 값이 blue와 일치하는지 확인해
// 여기서 하는 일은 이 h1의 color를 tomato로 바꿔주는 거지
// 좋아,
// 이제, if 다음은 뭘까?
// 이건 필수적인건 아니지만, else를 사용해줘야 해
// 좋아, 만약 이게 true라면, 이걸 tomato 색으로 바꿀거야
// 그리고 이게 false라면, 이걸 blue로 바꿀거야
// (위와 같이 입력)
// 이러면 끝이야
// 자 돌아와서, 새로고침 하고,
// 클릭하면 파란색,
// 클릭하면 토마토색,
// 클릭하면 파란색,
// 클릭하면 토마토색,
// 클릭하면 파란색,
// 클릭하면 토마토색,
// 그.리.고.엄.청.잘.동.작.해
// 얼.마.나.멋.져.?
// 정말 멋지다구!
// 하지만, 우린 우리 코드를 개선해서 더 깔끔하게 만들 수 있다
// 이제 h1.style.color를 이렇게 많이 호출하기 보다는,
// 먼저, 이 color 현재 상태를 저장하는 것을 해보자
// 알겠지?
// 이 color의 현재 값을 말이야
// 이제 여기로 와서, const currentColor를 정의해주고,
// 여기에 h1.style.color를 저장해주자. 이게 첫번째야
// 그리고 여기로 돌아와서,
// currentColor가 blue인지 확인할거야
// 다 됐어
// 이제 여기서 true 또는 false를 반환해 줄거야
// 그리고 나서, 이걸 두 번씩 하는 것 대신에
// 여기에 let으로 변수를 하나 생성해주자
// 기억하겠지만, const와 let의 차이점은, let은 값이 변경될 수 있다는거야
// 알겠지?
// 그리고 이건 newColor로 해주자
// newColor는 아무것도 없는 비어있는 let 변수야
// 이제, 만약에 currentColor가 blue라면, newColor는 tomato로 변경해 줄거야
// 그리고 else라면, newColor는 blue가 되어야겠지
// 하지만, 여기 보이듯이, newColor를 변경해 봤자, 우리의 h1의 color엔 아무 영향도 미치지 않아
// 그렇다면 우리는 뭘 해야 하냐면,
// 여기에, h1.style.color = newColor라고 해줄거야
// 이제 다 됐어.
// 이러면 읽을 때 훨씬 보기 좋지, 우리가 뭘 하려고 하는지
// 우리가 왜 color를 바꾸려고 하는지 더 쉽게 이해할 수 있어
// 그렇지?
// 그리고 우린 우리가 배운 거의 모든것들, const라던가, let이라던가
// if, else도 사용하고 있고, 일치하는지 비교도 하지
// 자, 이제 아직도 이게 잘 작동하는지 확인해보자구
// 여기로 돌아와서,
// Click, click, click, click...
// 아주 완벽하게 작동하는군! 뷰티풀
// 하지만 여기서 중요한 것 하나 말해주자면,
// 사실 내가 말했듯이 난 element의 style을 JavaScript에서 변경하는걸 별로 좋아하지 않아
// 왜냐면 다른 언어들을 섞는걸 별로 선호하지 않거든
// 알겠어? 난 JavaScript를 상호작용을 만들어 내는데 적합하다고 생각하고,
// HTML은.. 다른 선택지가 없어
// 하지만 CSS는 말이야, js파일에서도 할 수 있지만
// 난 이걸 style파일.. 그니까 css파일에서 하는 걸 선호해
// 좋아, 이 다음 영상에서는, 실제 춤사위를 보여줄게
// 우리의 application을 어떻게 할건지, 그리고 실제로 어떻게 만드는지를 말이야
// 자 이 춤은 곧 완성될거야, 드디어!!!
// 왜냐면 거의 모든 스텝들이 다 갖춰졌거든

// step 1. element를 찾아라
// step 2. event를 listen 해라
// step 3. 그 event에 반응해라

// 그리고 그 반응이란 건 말이야, 무언가를 보여주거나, 감추거나, 색깔을 바꾼다는 것 등과 같아, 맞지?
// 그리고 그건 다음 영상에서 다뤄볼거야. 하지만 먼저, 우린 CSS와 소통하는 법을 배워볼거야.
// 그러니까, 다음 영상에서 보자구
// 바이 바이
