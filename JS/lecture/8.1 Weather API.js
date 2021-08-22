/* 좋아. 날씨를 하기 위해 weather.js 파일을 만들자.
이건 아주 빠르게 할 거야.
좋아.
weather.js에서는 예전에 전혀 사용해본 적 없는 함수를 써 볼거야.
이 함수는 user의 위치(geolocation)를 줘.
완전 멋져
그리고 화면에 날씨를 보여줄 거야.
그치만 JavaScript로 이걸 할 수 있다고 인식한다면
네가 JavaScript를 알고 있으면 넌 아주 짱짱한거야.
놀랍지?
그래서 우리가 사용할 함수는 navigator야.
navigator와 geolocation을 사용해. 완전 멋짐!!
그리고 getCurrentPosition()을 해.
놀랍지 않아?
이걸 봐. 이걸 브라우저에서 하면 돼.
대박이야.
아무것도 할 필요가 없어.
그냥 이걸 부르면 브라우저에서 위치 좌표를 줄 거야.
WiFi, 위치, GPS 등등
이 코드만 하면 돼. 진짜 놀라워.
이제 getCurrentPosition이 어떤 일을 하는 지 보자.
getCurrentPosition은 argument가 2개 필요해.
하나는 모든 게 잘 됐을 때 실행 될 함수야.
나머지 하나는 에러가 발생했을 때 실행 될 함수야.
그럼 둘 다 만들어보자!
(위처럼 작성)
음.. onGeoOk로 하자.
다른건 onGeoError 함수야.
이제 이 함수는 여기, 다른 함수는 그 뒤에 두자.
피자처럼 끝났어(???)
나 뭐라는 거짘ㅋㅋ
암튼 계속해보자.
만약 위치를 받는 데 문제가 발생했을 때,
만약 user가 위치 받는게 불가능하다고 했다면
아마도 알려줘야 겠지?
(위처럼 작성)
그치만 위치를 얻는 데 성공했다면
onGeoOk를 실행 할 거야. 그치?
너도 짐작할 수 있겠지만
JavaScript는 그냥 함수를 실행 한 것보다 더 많은 정보를 줄 거야.
JavaScript가 user의 위치를 전달해 줄 거야.
그래서 user의 위치를 확인해보자.
진짜 놀라워.
이걸 복붙해서 구글링해보자.
그럼 이게 얼마나 멋진 지 볼 수 있을거야.
(검색함)
보다시피 getCurrentPosition은 success와 errror를 받아
success 함수는 GeolocationPosition object 하나를 입력 받는대.
그 말은 JavaScript가 GeolocationPosition object를 줄 거야.
하나의 input parameter로.
좋아. 이걸 다 번역할 수 없으니
한국어로 바꾸면 우리가 이해할 수 있겠지..
멋졍
그래서 success는... 음... 번역이 좋진 않네.
받는 콜백 함수
암튼 요점은.. user의 위치를 얻을 거야.
그게 다야.
console.log로 잘 되는 지 확인해보자.
여기서 새로고침하면
쨘!!! 이걸 봐!!!
브라우저가 우리에게 뭔가를 물어봐.
너의 위치를 알고 싶대~
allow(허용)를 누르자.
그리고 inspect에서 console을 확인해보자.
3 2 1 console!
허어억 와우😲
좋아. GeolocationPosition을 열어보면
이걸 봐~ timestamp는 상관 없구.. coords(좌표)가 있어.
이걸 봐!
이제 내가 있는 곳의 위도와 경도를 알아.
앗챠
그치만 이걸 봐! 위도와 경도를 봐봐.
완전 멋있어~
이제 여기서..
(위와 같이 작성)
그리고 위도를 얻자
그리고 경도도 얻자.
그리고 이 둘은 GeolocationPosition에 있지.
coords에서.. latitude와 longitude야.
그래서 position.coords. 은 공통이구
latitude와 longitude를 복붙하면 돼.
(위 처럼 작성)
새로고침해서 allow하면 console.log로 latitude와 longitude가 나올 거야.
이걸 봐. 완전 멋져!!!
좋아.
이게 첫 번째 단계야.
보다시피 엄청 쉬워.
그냥 이 안내문 대로 하면 돼.
success와 error 함수를 줘야 하구~
JavaScript가 함수를 불러. 그리고 멋진 object를 전달해주지.
네가 원하는 object를 JavaScript가 줄 거야.
좋아. 우린 아무것도 안해도 돼.
우린 JavaScript가 채울 공간을 만들어주면 돼.
완전 대박이다.
좋아. 이게 첫 번째 단계야.
두 번째 단계는 이 숫자들을 장소로 바꿔줄 서비스를 사용해야 돼.
그치?
그건 이따가 하구.. 일단 API 계정을 열어야 해.
openweathermap.org 웹 사이트로 이동해줘.
그리고 계정을 만들어줘. 여기 sign in을 누르고..
난 이미 계정이 있어.
sign in을 누르거나 Create an Account를 눌러서 계정을 만들어.
좋아. 로그인을 하면 API로 이동할 수 있어.
Okay, in the API place.
API를 보면.. 뭔가 많이 있지?
우리가 원하는 건 간단해.
오우.. 이걸 봐.
우리가 원하는 Geocoding이 있구 Air Pollution도 있어.
멋지당
또 뭐가 있지? Maps?
와.. 과거 날씨도 있어.
Road API, Solar radiation API.. 엄청나네.
암튼 이건 우리 위치의 날씨를 알려 줄 거야.
우리가 있는 장소의 이름과 현재 날씨를 줄 거야.
이건 다음 영상에서 할 거구 지금은 이 코드 10줄을 봐봐.
코드 10줄로 user의 위치를 알 수 있어.
놀랍지 않아? 20년 전 개발자는 이걸 못했어.
이제 이걸 코드 10줄 이하로 만들 수 있지. 완전 멋져!
잘 되는 지 확인해보구 openweathermap.org 계정을 만들어줘. 공짜야!
다음 영상에서 보자
바이바이~
 */