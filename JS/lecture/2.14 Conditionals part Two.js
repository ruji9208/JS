// 바로 전 영상에서, type를 변환하는 방법을 배웠어. string을 number로 바꿨지. 완전 가능한 방법이야
// 가끔씩은 불가능할 때도 있어. 그 경우가 NaN(Not a Number)가 뜰 때이지
// 무언가가 NaN인지를 판별하는 방법을 배워볼 거야. 그걸 위해 isNaN라는 멋진 function을 사용할 거야
// 진짜로. 이 function을 사용하면 이 function은 boolean으로 알려줄 거야
// boolean이 뭐였지? boolean은 true(참) 아니면 false(거짓)이 있어
// isNaN를 사용하면 하나의 argument(인자)를 주면 number인지 아닌지를 알려줄 거야
// isNaN에 age를 넣어줄게. 기억해. age는 15처럼 number일 수 있어
// 근데 사용자가 무엇을 입력하느냐에 따라 number가 아닐 수 있어

const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

// 새로고침하고 15를 입력해볼게. 보다시피, false가 나왔어. 
// isNaN은 boolean을 return(반환)해. 알겠니? 전에 return에 대해 얘기했었지.
// 이번 경우에, isNaN은 boolean을 반환해. 알겠니?
// 이 경우엔 false가 반환됐어. 그 뜻은 여기 age가 number가 아닌 것(NaN)이 아니란 뜻이야 (숫자라는 뜻)
// 그 뜻은 age가 number라는 뜻이야. 다시, 새로고침하고 문자를 넣어보자. 네가 보듯, true라고 하네. 알겠니?
// age가 NaN이란 뜻이야. 이렇게, true나 false를 알 수 있어. 다시, 15를 입력하면 false가 나오지, NaN이 아니란 뜻이야
// 다시, text를 입력하면 true가 나오고 NaN이란 뜻이야. 아주 유용한 방법이야
// conditional(조건문)에 넣으면 되기 때문이지. 아직 conditional을 배운적이 없는데 아주 이해하기 쉬울 거야
// 우리가 할 것은 그냥 이렇게 적으면 돼. if를 적고, condition(조건)을 적고 그 조건이 참일 때 실행할 코드를 적으면 돼
// 알겠니? else 블록에는, condition이 false일 때 실행할 코드를 적으면 돼
// 조건이 true(참)이면 이 코드가 실행될 것이고 조건이 false(거짓)이면 이 코드가 실행될 것이야
// 이 부분은 없어도 돼. 지워도 됨. 한 가지 조건일 때만 설정하면 돼

// if(condition) {
//     condition === true;
// } else {
//     condition === false;
// };


// 만약 조건이 true라면, 이 코드를 실행할 것이고 그렇지 않다면, 아무 것도 하지 않을 거야
// condition(조건) 자리에는 무엇이 들어가야 할까? condition은 boolean이여야 해
// condition은 boolean으로 판별 가능해야 돼. true거나 false여야 해. 오직 두 가지 옵션 뿐이야.
// 이 조건이 true라면 여기 코드가 실행될 거고 false면 실행되지 않을 거야. 알겠니?
// 우리에게 true, false를 주던 게 뭐였더라? 그래 맞아. 여기 이 function이야
// 그럼 이걸 가져와서, 여기 붙여넣자. 그럼 여기가 true 혹은 false가 되겠지
// 아주 좋은 소식이야. 이런 걸 할 수 있거든 (위와 같이 작성)

if(isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.")
};


// 짠! 이게 condition을 사용하는 방법이야. 여기와서. 새로고침하고 몇 살? 15 입력. console에 아무 일도 벌어지지 않았어
// 새로고침하고 (위와 같이 입력)


// 이것 봐. "숫자를 써 주세요." 멋지지 않니? 너의 프로그램이 조금 똑똑해진 거 같다. 아주 좋아
// 기억해. 아주 아주 쉬워.우선, 여기서 string을 받아. 이 string은 15가 될 수 있고, 뭔가 숫자가 아닌 게 될 수도 있어(asasas...)
// 그 다음 이 function을 사용해서 string을 number로 바꾸려고 시도하지. 이 function은 string을 number로 변환을 시도하는 거야
// 이건 가장 이상적인 경우고 근데 사용자가 15를 입력하지 않고 이렇게 입력한다면 parseInt는 이것을 number로 변환하지 못해
// 대신, NaN로 변환해서 보여주지. 여기서 우린 확인을 하고 싶은 거야.만약에 age가 NaN인지 말야. 
// 그걸 위해서, isNaN function이란 걸 쓸 수 있어. 이미 만들어져있고, 우린 그냥 바로 쓸 수 있어
// 이 function은 isNaN이라고 해. 우리가 해야 할 것은, function을 호출하고 첫 번째 argument는 number여야 하고, 이 자리에 넣을 거야
// 이 function이 true 아니면 false를 return할 거야. age가 NaN인지 아닌지에 따라서 말야. 
// 이 function이 true를 리턴한다면 age는 NaN이란 뜻이야. 조건문이 작동하는 원리를 보자면 여기 condition이 true면 
// 그럼 여기 코드를 실행시킬 거야. 테스트를 한번 해보자. 한 번 했었지만 다시해볼게
// 영어도 적어보고, 숫자도 적어보고~ 잘되네. 여기에 한 가지를 더 해볼게. 지금까지는 한 가지만 했어
// age가 number가 아니면, console.log를 했어. 우린 또 다른 해결책을 주기 위해서, else을 쓸 거야
// (위와 같이 입력)

// 잘 작동하는지 확인해보자. 새로고침하고
// (위와 같이 입력)
// (위와 같이 표시됨)
// 작동해
// (위와 같이 입력)
// (위와 같이 표시됨)
// 아주 잘 작동했어. conditional 아주 쉽지? 아주 아주 간단해. 
// 만약에 여기가 true라면 이게 실행될 거고 여기 condition이 false라면 이게 실행될 거야. 끝! 다했어
// 다 했어... 아주 간단했지. 근데 더 좋게 만들 수 있어. 계산을 할 수 있어
// 우선, age가 number라면 여기서 이미 한 건데, 확인하고 나중에는 18세 이하인지를 판별해야 해
// 그러면 술을 마실 수 없다고 알려줘야 돼. 그리고 18세 초과이고 50이하라면 음주할 수 있다고 알려줘야 해
// 50세 초과라면 음주를 그만하는 게 좋지않을까요 라고 말할 수 있겠지. 건강이 걱정돼요... 뭐 이렇게 말야
// 이게 다음 강의 내용이야. 이번 강의에서는 isNaN이라는 멋진 function을 배웠어
// 우리가 보낸 variable이 NaN(Not a Number)인지 아닌지 알려줄 거야. true, 혹은 false로 말야
// if 안에 isNaN를 사용하기 때문에 여기가 true면 이게 실행될 것이고 여기 condition이 false라면 이게 실행될 거야
// 앞으로 if랑 else를 많이 사용할 거야. 전에 말한 것처럼, 사용자가 로그인을 하면 무언가를 보여주고~
// 사용자가 로그인하지 않았을 때, 또 무언가를 보여줄 거야
// 알겠니? 좋아
// 다음에 보자, 안녕