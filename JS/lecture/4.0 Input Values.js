
// 좋았어. 이제 JS랑 CSS 파일에 있는 내용을 모두 지우고 완전히 새로 시작할거야.
// 우리는 이제 이 앱을 만들어볼거야
// 좋아. JS도 비어있고 CSS도 비어있어.
// 이제 우리가 뭘 할지에 대해 얘기해 보자.
// 우선 우리는 user에게 질문을 해야 해.
// 당신은 누구십니까?
// 이름이 뭐에요. 알겠지?
// 그런 다음에 그 정보들을 어떻게 받을지에 대해 배울거야.
// 왜냐면 우리는 아직 그 정보들을 어떻게 받는지 모르거든.
// 그러고나서 받은 정보를 화면에 표시할거야. 오케이?
// 그게 끝이야. 아주 간단하지
// 물론 아주 중요하기도 해. 아직 해보지 않은거니까.
// 우린 아직은 정보를 기억하는 법을 몰라.
// JS에는 사실 value를 기억하게 하는 아주 쉬운 방법이 있어
// user의 이름을 기억하는 것처럼
// 하지만 모든 것은 HTML에서 시작되어야해.
// 우선 HTML을 작성한 다음에 거기있는 element들을 끌고 오는거야.
// 그런 다음 JS에서 이런저런 작업들을 해주는거지.
// 그럼 input을 생성하는 것부터 시작하자
// (위와 같이 작성)
// 참고로 이 앱을 만드는 과정 중에는 모든 것들이 엄청 못생겨 보일거야.
// 확실히 해두자고. 전부 다 정말 정말 정말 정~~~말 못생겨 보일거야
// 그런 다음에 이쁘게 꾸며줄거야.
// 보다시피 우리는 input을 만들었어.
// "이름이 뭐에요?"
// 그리고 여기에는 button을 만들어 줄거야.
// 버튼은 Log In 이라고 적혀있을거고
// 참 쉽죠?
// 그런데 말이지, 이 앱에는 input과 button이 아주 많을거란 말이야.
// 예를 들면, user의 이름을 입력할 input이 있어야 되고,
// to-do를 입력할 input도 필요하겠지.
// 그러니까 이름이 더 잘 지을 필요가 있어.
// 지금까지 작성한 결과를 보자.
// 이름이 뭐예요? 랑 로그인
// 완벽해.
// 좋았어.
// 이제 지금까지 만든 것들을 div 안에 집어넣을 거야.
// (위와 같이 작성)
// 그리고 이 div에 "form"이란 class를 추가해 줄거야.
// 아니면 id를 추가해도 상관없어.
// id="#form"
// class나 id 중 아무거나 추가해도 상관없어.
// 다만 여기서 사용한 classname을 다시 사용하면 안된다는 것만 기억해 둬
// 좋아.
// 이건 "login-form" 이라고 이름 지어 줄거야.
// 알겠지? 좋았어.
// 이제 안에서 input이랑 button을 찾을 수 있어.
// 그럼 JS로 그걸 해보자고.
// app.js 로 와서
// (위와 같이 작성)
// 어디서 찾을까? document에서 찾을거야
// 여기에 querySelector() 또는 getElementById()를 추가해주고,
// "login-form"을 입력할거야.
// querySelector()를 사용할 때는 대상이 id인지 명확히 해줘야 해.
// 왜냐면 querySelector()로는 classname, tagname 모두 검색 가능하니까.
// 하지만 getElementById()를 사용할 때는 그럴 필요가 없어
// 왜냐면 JS가 내가 id를 찾고 있다는 걸 이미 알고 있기 때문이야.
// 알겠지? 아주 좋았어.
// 이제 내가 하고 싶은건 input이랑 button을 끌어오는 거야.
// 여기서 우리는 두 가지 옵션이 있어.
// 그 중 하나를 보자면, const loginInput 을 작성한 다음에
// document에서 찾는 대신에 위에 작성한 loginForm에서 검색을 하는거야.
// (위와 같이 작성)
// 이런 식으로 말이지
// button에도 똑같이 적용할 수 있어
// (위와 같이 작성)
// 그럼 button을 찾을 수 있겠지

/* const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button"); */

// 무슨 일이 벌어지고 있는지 살펴보자. 우선 우리는 HTML에서 form을 찾고 있어
// document.getElementById()를 통해서 말이지.
// JS가 이걸 찾았다면 loginForm은 HTML 내에 있는 element라는 뜻이야. 바로 요놈이지.
// 우리는 이제 이 element를 JS로 끌고왔어.
// 다음으로 할 일은 input과 button을 찾는 일인데
// 우리는 이제 이걸 document가 아닌 loginForm 안에서 바로 찾을 수 있어.
// 좋았어.
// 보다시피 loginForm은 HTML element거든.
// 그말인즉슨, HTML element 안을 바로 검색 가능하다는 뜻이지.
// 좀 더 정밀조사가 가능하다는 말이야.
// 우리는 우선 login-form 이라는 id를 찾았고,
// 그리고 그 안에서 input과 button을 찾았지.
// 아주 멋진 일이지.
// 더 짧게 코드를 작성하기 위해 우리가 할 수 있는 다른 방법으로는
// 첫 줄은 지우고 바로 querySelector("#login-form input/button")로 바꾸고
// 그리고 물론 제일 앞은 document로 바꿔줘야지.


/* const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button"); */


// 이렇듯 document 또는 하나의 element를 통해서 검색이 가능해.
// 오직 한 element 안에서 찾을 수 있어. 어쨌든 재밌는 사실이야.
// 자! 이제 우리는 user가 이 button을 클릭할 때 감지하는 방법을 알고 있지.
// 내가 여기 이름을 적고 클릭했을 때 적어도 이걸 console.log() 할 수 있었으면 해.
// 추후에 이 value를 저장할 수 있도록 말이야.
// 이걸 구현할 방법을 우린 알고 있지.
// 지금 이건 click event 야.
// 우리는 이미 click event에 대해 알고 있잖아?
// 이 click event는 loginButton에 연결되야 해.
// (위와 같이 작성)
// 이제 function을 만들어 줘야해.
// function handleLoginBtnClick()
// 엄청 긴 이름이란거 알아.
// 다른 이름으로 바꾸고 싶다면 btnClick, onLoginClick 등
// 너한테 코드가 더 명확해지는 방향으로 이름지으면 돼.
// 이제 준비가 됐어.
// 우린 loginButton에 대한 click을 감지할 준비가 됐어.
// 이건 전혀 새로운게 아니라 이전에 이미 해본 것들이야.
// console.log("click!!!!")
// 제대로 작동하는지 확인해보자고.
// 검사에서 console을 켜고
// click! 완벽하게 작동하고 있어.
// 이제는 우리는 여기 입력하는 이 value를 얻고 싶어
// 이 텍스트를 콘솔에 표시하고 싶어
// 아까 만들어 둔 loginInput 있지?
// 항상 하듯이 우선 console.dir(loginInput)을 해줄거야.
// 이제 무슨 일이 벌어지는지 보자고.
// 검사에서 콘솔로 이동한 다음에 login을 누르면
// onLoginBtnClick()이 실행되면서 loginInput의 내부를 보여줄거야.
// 여기를 클릭해주면 input에 대한 정보들을 볼 수 있어.
// 보다시피 우리가 생성했던 이것저것 들어가 있는 일반적인 object야.
// 이 중에서 내가 제일 보고 싶은건 말이지...
// 여기보면 이전 영상에서 봤던 classList도 있지?
// 가장 보고 싶은건 말이지...
// value야. 여기쯤 있을텐데. 찾았다.
// value.
// 이건 기본적으로 내 HTML 안에 있는 텍스트야. (실수)
// HTML이 아니라 input 안에. 미안
// HTML로 다시 와보면, 이렇게 value를 미리 입력해 줄 수도 있어.
// 보다시피 여기서 새로고침을 하면 input에 value가 선입력 되어 있을거야.
// 다시 value를 찾아보자고.
// 찾았다. value.
// 희소식이구만. 우린 이제 input의 내용을 가져오려면 어떤 property를 찾아봐야 하는지 알게됐어.
// 아까 작성한 기본 value는 지워주고.
// 대신 JS에서 value를 console.log해줄게
// (위와 같이 작성)
// 잘 작동하는지 보자고. 여기에서 계속 button 클릭을 하면..
// value가 없는 뭔가를 계속 console.log()하고 있긴 한데..
// 하지만...! (값 입력 후 클릭) 이제 나오네. 아름답구만.

/* const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() {
    console.log(loginInput.value);
    console.log("click!!!!!!"); 
}
loginButton.addEventListener("click", handleLoginBtnClick);
 */
// 이제 이런식으로 input의 value를 얻을 수 있어. 아주 좋아!
// 근데 지금 문제가 하나 있어.
// console.log("hello", loginInput.value)를 한다고 했을 때,
// 여기서 보면.. 콘솔에 hello 랑 value가 표시되지.
// 여기까지는 좋아.
// 문제는 아무런 값도 입력 안했을 때야.
// hello 뒤에 아무것도 없는 채로 console에 표시되지? 이건 좋지 못해.
// 이 부분에 대한 확인 작업이 필요해.
// 우리는 user가 이름을 입력했을 때만 button을 클릭할 수 있도록 하고 싶거든.
// 아마 수많은 if else 를 활용해서 뭘 할 수 있을지 보자.
// 다음 강의에서 보자고. 바이바이.
