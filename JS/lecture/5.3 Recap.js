/* 좋아 방금 우리가 뭘 한건지 되짚어보자
우린 getClock() 이라는 function을 만들었고
그 안에서 Date object를 새로 생성했는데
Date object는 네가 이걸 호출 하는 당시의 현재 날짜랑 시간을 알려줘
코드를 실행한 그 시점의 밀리초, 초, 시간 등 전부 가져올 수 있는거야
딱 그 시점을 알려주는 거야
거기서 우린 시간도 알 수 있고, 분도 알 수 있고, 초도 알아냈어
이걸로 number 타입을 받았는데 이걸 string으로 바꾸고 싶었어
그저 String constructor로 주위를 감싸면 됐지? 이렇게 말야
이것만 해주면 string을 얻을 수 있었어
정말 너무 간단하지
그러고 나서 우린 구한 시간을 clock의 innerText로 넣어줬어
clock은 id가 clock인 h2였지
여기 id가 clock인 h2말이야
이제 중요한 것들이 있었지
한 가지는 우리가 padStart() function을 썼다는거야
padStart() function은 네가 가지고 있는 string을 보다 길게 만들어야 할때 사용하는거야
원하는 만큼의 길이가 아니라면 string의 앞쪽에 문자를 끼워넣는거지
여기서 하고있는건 우린 이 string이 두 글자가 되길 원한다는 것과
그렇지 않다면 string 앞쪽에 0을 추가하겠다는 거야
정말 간단한 작업이지
그리고 정말 중요한 부분은 여기있는데
여기가 바로 이게 실시간으로 보이게 하는 부분이야
여기서 setInterval()를 쓰지 않으면 이런식으로 되겠지
시간을 새로 만들어내긴 하지만
시간, 분, 초 다 나오고있어
그치만 그 당시의 시간뿐이야
지금 보이는 것처럼 동작을 하긴 하는데 한 번만 실행되고 작업이 반복되진 않아
근데 우리가 해야하는건 이걸 매 초 반복하는거잖아 그치?
setInterval()이 없다면 한 번만 일어난다는 것, 그것 뿐이야
그게 다야, 끝났어
우리가 해야하는 건 매 초 getClock()을 실행하는거지
물론 이런식으로는 할 수 없어
이렇겐 동작하지 않지
제대로 동작하지 않는게 당연해
자 그럼 function 을 어떻게 호출할까
매초, 아니 네가 원하는 어떤 시간 간격이든 말이야
이 때가 바로 setInterval()를 썼던 타이밍이지
setInterval()은 정한 시간 마다 function을 실행시키게 해줘. 여기선 getClock을
그리고 어떤 시간 간격이든 ms단위로 설정할 수 있어
우린 1000ms(1초) 마다 실행되도록 했지
여기서 젤 중요한건 이 function을 매 초마다 호출하기 때문에
이게 실시간처럼 보인다는 거야
setInterval()를 쓰지 않으면 이런식으로 보여
딱 한 번만 실행하고 끝나버려 한 번 실행하고, 화면에 표시하고, 그러고 끝이야
우리가 하고싶은건 이걸 매 초 계속해서 반복하는거니까 그치?
그래서 내가 여기다가 초를 넣고 싶었고
새로고침 하면
매번 새로운 초의 값으로 표시되고 있어
이 function에 별다르게 특별한건 없어
function이 하고 있는 건 그저 현재 시간, 분, 초를 표시하는 것 뿐이야
그게 다야. function을 계속해서 호출하는건 setInterval()이 할 일이고
그럼 우리는 이 시계가 실시간이라는 환상을 얻게 되는거야
이해했지? 이게 전부야. 다 끝났어
원하면 이 function을 5초에 한 번 실행할 수도 있어
근데 뭐 여기선 왜그렇게 하겠어?
어쨌든 그런 것도 가능하다는 거야
5초 기다렸다가 어떻게 되는지 볼게
여기 나왔지
오케이. 끝이야. 우리가 다 해냈어
다음 섹션에선 랜덤한 명언을 만들어볼게
너한테 Randomness에 대해 알려주고 싶거든. Javascript로 하면 정말 정말 간단해
이건 전부 엄청 간단한 프로젝트였어
그치만 우리한테 정말 많은걸 알려주고 있어
정말 정말 작지만 정말이지 멋진 프로젝트야
그럼 다음 강의를 들을 땐 네가 좋아하는 명언들을 적어도 10개 가져와줘
기억하겠지만, 여기 momentum으로 오면
여기 명언이 하나 보이지
삶은 설계, 테스트, 변화와 실행의 연속이다
여기에 넣을, 이런 걸로 준비하면 돼
명언 몇개 가져오고
작가도 넣고 싶다면 같이 가져와
10개정도만
다음 영상에서 만나자. 바이바이
이거 다시 1000ms로 바꾸는 거 잊지 말고!
안 그러면 고장난 시계가 될 테니까
다음에 보자구, 바이바이
 */