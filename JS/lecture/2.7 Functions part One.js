
// 좋아, 전에 말했듯이 console.log란 걸 쓸 수 있고
// 우리는 이런 xx.xx를 어떻게 만드는지 배웠어 
// player.name 같은 거 말야
// 그런데 우리의 player.name이나 player.points는 이런 ()가 없었어. 그치?
// 왜냐면 우리의 player.points는 function이 아니기 때문이야. player.points는 숫자거든
// 그래서 player에게 function을 주기 전에, 어떻게 function을 만드는지부터 배워야해

// function이 뭘까?
// function은 너가 계속 반복해서 사용할 수 있는 코드 조각이라고 생각하면 돼 
// 기억해? 프로그래머들은 게을러, 알지? 우리는 코드를 쓰고 싶지 않아... 그렇지?
// 진짜야! 우리는 가능한 적은 코드를 작성하고 싶어
// 이러한 이유로 우리는 뭘 할거냐면 우리가 넘겨주는 어떠한 이름이든 Hello를 해주는 function을 작성할게
// function이 없는 세상이라면 이렇게 해야할 거야.
// 우리는 console.log를 해서
// "Hello my name is Nico" 라고 적어볼게
// 그리고 만약 내 친구 모두에게 인사를 하고 싶다면
// 여기에 "Hello" Dal, Shigatsu, My name is Flynn... 이런 식으로...

console.log("Hello my name is Nico")
console.log("Hello my name is Yewon")
console.log("Hello my name is kuku")
console.log("Hello my name is zzangxi")
console.log("Hello my name is taegyu")


// 이거 봐봐, 이렇게 하는 건 좋지 않아
// 왜냐면 내가 console.log를 하는데 복붙을 너무 많이 하고 있잖아.
// 그리고 생각해보면, 이 전체 코드에서 바뀌는 부분은 이 끝의 이름들 뿐이야.
// 나는 정말 이 이름만 바꾸고 있어. 나머지의 코드들은, 그냥 복사하고 있어
// 이건 좋은 코드는 아니야. 이것보다 좋은 게 있어야 해
// 하지만 최소한 우리의 목표는 알았어. 우리는 친구들에게 인사를 하고 싶은 거야
// 그리고 우리는 코드의 반복을 최소한으로 줄이고 싶어
// 우리는 console.log("Hello my name is.... 라고 하는 것까지 복붙하고 싶지 않아
// 그래서 function을 만들 거야.function은 어떤 코드를 캡슐화해서, 실행을 여러 번 할 수 있게 해줘
// 노래를 재생한다고 생각해봐. 노래나 동영상 같은 거 말이야. 넌 동영상을 계속 계속 반복해서 볼 수 있지
// 끝나면 다시 재생할 수 있고, 끝나면 또 재생할 수 있지.
// function도 마찬가지야. 그럼 어떻게 function을 만들어야 할까?
// 우리는 글자 그대로 function이라고 적으면 돼
// 여기에서 우리는 창의적일 수 있어, 원하는 어떠한 이름이든 넣으면 되지
// 나는 sayHello라고 해볼게. 이렇게 자, 예를 들어 우리가 const를 만들 때 const라고 쓰는 것처럼
// 또 우리가 string을 작성할 때는 ""를 써야하 우리가 list나 array를 만들 때 []를 해야하는 것처럼
// function을 만드는 몇 가지 규칙이 있어. function은 ()가 필요해.
// 걱정마, 이 녀석들은 나중에 신의 한 수가 될 거야.
// 그리고 function은 실행하게 될 코드 블록이 필요해, 이렇게.
// 그래서 우리가 여기 뭘 하든 내가 여기 작성하는 것이, sayHello를 실행할 때마다 실행되는 거야
function sayHello() {
    console.log("Hello!")
};

sayHello();
sayHello();
sayHello();
sayHello();

// 그래서 네가 이 블록 안에 작성하는 것이 너가 실행버튼을 누를 때마다 발생하는 거야
// 아직은 function의 실행버튼을 누르는 법을 몰라. 하지만 여기 작성하는 것이 반복 또 반복해서 실행될 수 있을 거야.
// 그래서 나는 console.log 그러고 "Hello"라고 적어볼게
// 그래서 내가 sayHello의 실행을 누를 때마다 console.log("Hello!")가 실행되는 거야
// 어떻게 실행버튼을 눌러야 할까?
// 기억한다면, console.log를 하고 이 괄호를 넣었지. 그치?
// 같은 방법으로 array.push를 했었고. 보다시피 여기 () 두 개를 추가했어. 그치? 그리고 우리는 alert() 때도 그렇게 했어
// 보다시피 () 두 개를 넣었지. 그래서 이 두 개 있잖아. 이 괄호 두 개가 우리가 function을 실행하는 방법이야
// 자 그러니 세 번 실행시켜보자. 나는 이렇게 이렇게 이렇게 했어. 보면 알지만 내가 셈을 못해서 네 번을 했네.
// 새로고침하고 잘 작동하는지 보자. 됐어
// 어떤 일이 발생했지? 우리는 function 실행을 네 번 했어.
// 그리고 말했듯이 이 중괄호 안에 있는 코드가 우리가 실행을 누를 때마다 실행됐어
// 멋지지? 나도 알아, 지금 이건 좀 바보같아 보이지. 이 function은 똑같은 것만 하고 있으니까 이 function은 같은 결과를 반복해서 내고 있어

// 우린 이걸 바꿀 수 있어. 실제로 내가 원했던 것은 "Hello my name is" 라고 하고
// 그러고 이름, 예를 들어 A, B, 또는 C를 쓰는 거야. 그걸 위해서는 우리가 argument(인수)라는 것을 보내야 해
// argument는, function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법이야
// 알았지? 우린 그런 걸 이미 했봤었어.우리는 alert를 할 때 그냥 이렇게 하지 않고 어떤 정보를 보냈지
// function에게 말이야. 내가 alert를 하고 아무것도 하지 않으면 어떻게 되는지 볼텐데
// 아무튼 난 지금 우리들이 자랑스러워! 
// 처음으로 써봤던 자바스크립트 코드랑 똑같이 생긴 걸 만들었어. alert()와 sayhello() 말야. 같은 거야!
// 자 이걸 저장하고 새로고침 할게. 자 보다시피 비어있는 alert가 떴네.
// This page says 하고는 아무것도 없어. 거참 싱겁구만.
// 같은 방식으로 console.log를 해보자. 그냥 console.log()로 실행해보는 거야
// 보다시피 우리는 여기도 실행버튼을 누르고 여기도 누르고 여기도 누르는 거야.
// 실행버튼은 누르는데 아무것도 전송하지 않으면 보다시피 여기 있는 console.log는 아무것도 출력하지 않아
// 그냥 "Hello my name is C"만 실행되는 거야. 이걸 없애고 해보는 게 더 낫겠다.
// 새로고침. 보다시피 아무것도 없어. 말 그대로 없어. 왜냐하면 function 실행버튼을 눌렀지만 아무것도 안보냈거든
// 이제 function 실행버튼을 누르면서 뭔가를 보내는 법을 배울 차례야. 우린 바깥에서는 어떻게 하면 되는지 알지.
// 왜냐면 log로 정보를 보내려면 여기 안에 넣으면 된다는 걸 알거든. 그치?
// 그래서 우리의 function도 어떻게 보일지 알고 있어. 우리의 function도 같은 식일 거야

// sayHello("nico")라고 하면 되겠지. 근데, 우리는 function을 만들 때 어떻게 이걸 표현해야 할지 몰라
// 다시 말하지만 우리는 이미 function을 실행하면서 데이터를 보내는 법을 알아.
// 우리는 실행버튼을 누르고 동시에 데이터를 보내는 법을 알고 있지.
// 그치? 이게 바로 우리가 한 거야. 우리의 function으로 말이지. 괄호를 썼으니까 실행버튼을 누른 거고
// 또한 여기에 데이터도 보내고 있지. 다시 말하지만 우리가 function에서는 이걸 어떻게 표현할 지 몰라.
// 이 function은 데이터를 받아서 여기 넣어줘야 해. 우리의 목표는 C를 nico로 바꾸는 거야
// 예를 들어, C가 dal로 바뀔 수 있어야 해.우리의 목표는 C를 lynn으로 바꾸는 거야.
// 이상적으로는, "Hello my name is nico"
// Hello my name is dal
// Hello my name is lynn이 출력되어야 해
// 새로고침 하면, 보다시피 나는 실행버튼을 세번 눌렀어

// 맞지? 그리고 내가 데이터를 보내고 있지만 보다시피 이 데이터로 아무것도 하고 있지 않아
// 이건 다음 영상에서 다루도록 할게
// 안녕
