// 프로그래머로 일하다보면, 조건이 하나보다 더 많을 때가 있을 거야
// 여기는 조건이 하나밖에 없었지. age가 NaN인가? 말야
// NaN이라면 여기를 실행하고, number라면 여기를 실행할 거야
// 근데 많은 경우에 if는 하나 이상 필요할 수 있어. 그래서 else를 하는 대신, else if로 연결해볼 거야
// else if는 else와 비슷한데 거기에 if를 더한 개념이야. 즉, 이 if가 false일 때, 한 가지 condition을 더 사용할 수 있게 해줘
// 내가 쓰는 else if를 보면 더 이해가 갈 거야. else if를 써서 age가 18세 미만이라면 (위와 같이 작성)

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0) {
    console.log("Please write a positive number");
} else if(age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age < 50) {
    console.log("You can drink.");
} else if(age > 50 && age <= 80) {
    console.log("You shoud exercise.");
} else if(age > 80) {
    console.log("You can do whatever you want.");
}

// 그러면~ (위와 같이 작성). "당신은 너무 어려요"
// 좋아. 두 가지 선택사항이 생겼어. 두 가지의 condition!
// 하나는 age가 NaN일 때, 뭔가가 실행될 거고, 근데 age가 number이면 다른 condition을 확인하는 거지
// 그리고 마지막으로 else를 작성해보자.
// (위와 같이 작성)
// 곧 condition 하나를 더 추가할 거야. 여기, 두 가지의 condition이 있어. 알겠니?
// 이게 true면, 이게 실행될 거야. 이 condition이 false면, javascript는 이 condition을 확인할 거야
// 여기 condition이 true면, 여기가 실행될 거고 이 condition이 false면 이게 실행될 거야
// 이 코드가 실행되기 위해서는, 여기도 false, 여기도 false여야 해
// 그러면 "You can drink"가 화면에 뜰 거야. 좋아. 잘 되는지 보자. 여기 와서~
// 몇 살일까? (위와 같이 입력). 숫자를 입력해 주세요. 몇 살일까? 12살
// 당신은 너무 어려요. 잘 작동해. 99살? 음주 가능.
// 다시 확인해보자. 첫 번째 테스트에서는 lalalal를 입력하고 parseInt에 넣으면 NaN을 반환했어
// 알지? 그럼 age는 NaN란 거지. 그럼 true가 돼. 그래서 이게 작동해
// 두 번째의 경우는, 여기 12를 적었어. 여기 12를 넣으면 이거는 false로 될 거야
// 그리고 여기는 실행되지 않겠지. 알겠니? 
// javascript는 한번 더 확인할 거야. age가 12여서, 12는 18보다 작기 때문에 여기가 true로 될 거야
// 여기가 true가 되고  그리고 여기가 실행되었지. 그 다음 테스트에선 age에 99를 입력했었어
// 여기 99를 넣으면 false가 되고 여기 줄은 실행되지 않을 거고, 여기 99를 넣으면, 99는 18보다 작지 않으므로 여기는 false가 돼
// 여기는 실행되지 않을 거야. 더 이상의 condition이 없어서 javascript는 마지막인 else를 실행할 거야
// 알겠니? 그게 다야. 네가 보듯, 많은 conditional을 연결시킬 수 있어
// 그럼 다른 것을 배워 보자
// 두 가지의 조건을 동시에 확인할 거야. 하나는 age가 18보다 큰지, 다른 하나는, 예를 들어, 50보다 작은지 말야
// 두 가지의 조건을 만족해야 해. age가 18 이상이고 50 이하인가?
// 여기 else를 없애고 else if를 하나 더 만들게. else를 마지막에 배치하자.
// else는 이것도 false이고, 이것도 false, 이것도 false여야 작동해
// 이 중 하나라도 true면, 당연히 else는 작동하지 않아. 알겠니? 좋아
// 두 가지를 확인해보자. age가 18 이상인지 확인해야 하고 여기 새로 배울 기호인 AND가 있는데 AND는 이렇게 생겼어
// 그리고 age가 50 이하라면, (위와 같이 작성) 음주 가능.
// 전에 못 보던 거야. AND가 하는 역할은, javascript에게 여기 조건과 여기 조건, 둘 다 true여야 하는 거라고 알려줘
// 여기도 true, 여기도 true면, 합쳐서 true!
// 첫 번째가 true고 두 번째가 false면 미안하지만 false가 돼
// 다른 경우는, 첫 번째가 false, 두 번째가 true면 그래도 합쳐서 false가 되는 거지
// 알겠니? 이게 AND operator(연산자)야. 이건 여기와 여기가 true인지 확인할 거야
// 다른 것도 있는데 OR라는 거야. OR은 둘 중 하나만 true인지 확인할 거야. 둘 다가 아니라 오직 하나만 확인하는거지
// OR는, 여기가 false라고 하고, 여기가 true면 결과는 true가 돼. 알겠니?
// OR는 여기가 true고 여기가 false면 true가 돼. OR는 여기가 true고 여기도 true면 true가 돼
// OR는 여기가 false고 여기도 false면 false가 돼. 보다시피, 달라!
// OR는 그 중 하나만 true면 돼. AND는 둘 다 true여야만 하지. 여기도 true여야하고 여기도 true여야해
// 우리 언어랑 똑같아. OR를 사용하면 여기가 true거나, '또는' 여기가 true여야 해.
// AND는 이것도 true, '그리고' 다른 것도 true여야 해. 짠
// AND랑 OR를 배웠어, 아주 좋아. 잘 작동하는지 확인해보자
// 첫 번째 condition부터 작동을 시작해. 여기에 text를 적을 거야. Please write a number
// 이 부분이 작동하는 거지. 다음은! 18 미만의 수를 적을 거야
// You are too young. 네가 보듯, 여기 부분이 잘 작동해
// 다음 차례는 18을 해보자. 짠! You can drink
// 그래! 여기 이 부분이야. 여기가 true고 여기도 true이기 때문이지. 이건 많거나 같다 라는 뜻이야
// 여기는 작거나 같다 라는 뜻이고. 한번 더 확인해보자. (50 입력). You can drink
// 완벽해! 한번 더! (51 입력) 어? You can't drink. 됐다...
// 다시 한번 더. (51 입력) You can't drink. 좋아. 아주 잘 작동해
// 이건 else의 경우야. 여기 전부를 테스트 했고 51을 입력할 때 무슨 일이 일어나는지 보자
// 51부터 80까지의 한 가지 경우를 추가해보자. else if를 하나 더 만들 거야. age가 50보다 크다면,
// 그리고 age가 80보다 작거나 같다면, (위와 같이 입력) 네가 보듯, else가 없어. else는 선택적 사항이야
// else를 꼭 사용해야 하는 건 아냐. 테스트 해보자. 새로고침하고~ 51 입력. 운동하셔야 해요.
// 멋지군. 마지막으로, 80 초과일 때의 경우를 해볼 거야. 여기 와서~
// (위와 같이 작성)
// 다 했어. 그리고! 한 가지 경우를 더 추가해보자. 여기의 경우는 잘 일어나지 않을 거야
// 나이가 80 초과인 것까지 추가하면 대부분의 케이스를 포함하는데 한 가지 경우를 제외하고 말이지
// 그건 바로... 음수를 입력하는 경우야. 아무튼 여기 와서 확인해보자. 90을 입력해보자. "뭐든 원하는 대로 하세요."
// 좋아! 아주 잘 작동해. -50을 입력하면 어떻게 되는지 보자. 당신은 너무 어려요. 라는군.
// 이 경우엔 "You are too young."이 나오면 안되겠지. 사용자에게 양의 숫자를 입력하라고 해야할 거야.
// 여기서는 OR 연산자를 사용할 거야. 여기는 AND 연산자를 사용했어. 사용자가 음의 숫자를 입력할 때를 알고 싶어.
// 여기서는 else if를 사용하지 않을 거고, OR 연산자를 사용할 거야. 바로 여기에서. 알겠니?
// (위와 같이 입력) 0보다 작으면~ 양의 숫자를 적어주세요. 라고 할 거야.
// 좋아. 아주 멋진 계산기야! 새로고침하고! number가 아닌 것으로 시작해보자. 12도 해보고 You are too young.
// 18도! You can drink. 51 해보자. You should exercise. 좋아.
// 99 해보자. You can do whatever you want.
// 99999도 해보자. You can do whatever you want. 좋아.
// 한번, -50도 해보자. 보다시피, Please write a real positive number.
// 우린 AND랑 OR 둘 다 사용하고 있어. 내가 말했듯, AND는 여기, 여기 condition이 둘 다 true여야 돼.
// 여기 OR 연산자는 둘 중 하나만 true면 여기 코드가 실행 돼. age가 NaN라면 여기가 실행될 거고 age가 0보다 작다면 여기가 실행될 거야.
// OR 연산자는 다른 연산자랑은 다르고, 아주 아주 중요한 친구야. OR과 true에 관한 간단한 복습을 해보자.
// true OR true 는 true를 반환해. false OR true는 true야. true OR false는 true야.
// false OR false는 false야. 하나만 true면, 이건 true가 될 거야. 알겠지?
// false가 되기 위해서는 둘 다 false여야 해
// AND를 확인해보자면 true AND true가, AND가 오직 true가 되는 방법이야.
// false AND true를 하면 true가 될 수 없고 true AND false를 하면 true가 될 수 없고 false AND false를 하면 true가 될 수 없어.
// 이해 되니? 이게 AND와 OR의 차이점이야. 네가 보듯, 우리의 작업에 둘 다 사용했어. 이제 우리가 음주가능한지 계산할 수 있어!
// 멋지지 않니? 아주 좋아. 다음 강의에서 보자. 안녕!
