// 좋아
// 네가 list를 쓰면, 항목들에 공통된 맥락이 있다는 점이 맘에 들 거야.
// 예를 들어 days 라는 list가 있다면 난 바로 알 수 있지. 여기 있는 모든 것들이 여기에 뭐가 있든
// 이것들은 같은 종류, 즉 한 주의 요일들이란 것을 알 거야. 그런데 문제는 말이야
// 의미가 있는 property를 저장하려고 할 때가 문제야. 연관되어 있는 property들을 그룹으로 묶어서 저장해야 할 때 말이야
// 내가 늘 쓰는 예시가 있는데 player라는 object를 만드는 거야. 전에 했었지
// (위와 같이 입력)

const player = {
    name: "kuku",
    age: 43,
};

console.log(player, console);
player.name = "kuul";
console.log(player);
player.sexy = "soon";
console.log(player);


// 여느 variable을 만들 때처럼 같은 시작이야. 근데 array, boolean, text, 또는 null을 갖는 것 대신에 이런 식으로 만들어
// 그럼 여기에서, player라는 object의 property를 작성할 수 있어. 
// 예를 들어 name player라는 variable 안에, name이라는 일종의 variable을 만든 거야
// 이것의 정식 명칭은 variable이 아니라 property인데 명칭엔 그리 신경 쓰지마. 아무도 신경 안 써
// 
// (위와 같이 작성)


// 나이, 이건 솔직하게 적을게. // , 좋아. 이렇게 우리의 object가 생겼어.
// 좋아, 이제 player에 두 가지 선택사항이 생겼지? age 그리고 name. 우리의 첫 object를 만들었어!
// 내가 하고 싶은 것은 기억해? 우린 계속 console을 했었잖아. 보다시피 console에는 많은 property가 있고, 그 중 하나가 log야
// player.name과 아주 유사한 형태야. 그래서, console은 사실 object였단 것을 깨닫게 되었지
// player를 console.log 할 거야. 또 console을 console.log하고, 무슨 일이 일어나는지 보자
// 브라우저로 와서 새로고침하면 첫 줄은 player를 console.log 한 것이야. 
// 그리고 console 자체를 console.log 했어 (두번째 줄) 그랬더니 신기한 것들을 받았네. 봐.
// 이게 다 console이란 object 안에 있는 것들이야. 네가 보다시피, 아주 유사한 형태야. console의 것과 비슷하게 생겼지!
// 
// 보다시피 javascript는 네 뒤에서 마법을 부리는 게 아니라 javascript는 이미 너를 위한, 
// 네가 사용할 수 있는 object를 가지고 있고 이게 전부야! 놀랍지 않니?
// 여기 age는 number고 name은 string이야. 여기 있는 그 외의 것들은 'f'라고 되어있는데 function(함수)이란 뜻이지. 알겠지?
// 
// function, 중요하지. 아무튼 보다시피, 둘 다 비슷하게 생겼어. 둘 다 object야!
// 멋지지 않니? array에서 한 개의 element를 가져올 수 있었던 것처럼,object 중 한 개의 element를 가져올 수 있어
// 
// (위와 같이 작성)

// array처럼 update도 할 수 있어.player.name을 'Nico'대신 'nicolas'로 할 거야.
// 알겠지? 이거 말고, player를 console.log 해보자.
// 
// (위와 같이 작성)


// 짠! 보다시피 name은 Nicolas야. 전에는 Nico였는데 지금은 Nicolas야. 
// 다시 말하지만 기억해! javascript는 위에서부터 아래로 읽어. 이 console.log가 실행되고 nicolas로 변경한 후에
// 그런 다음 또다른 console.log가 실행될 거야. 보다시피 그렇게 작동했어
// 우리는 object의 item을 가져오는 방법을 알아. 또한 object의 item을 업데이트 하는 방법도 알지
// 또한! object를 만든 이후에, object 안에 새로운 item을 만드는 것도 가능해. 예를 들어, sexy라는 것을 만들고
// 
// (위와 같이 작성)


// true보다 soon이 더 낫다.console.log를 한번 더 하고 무슨일이 일어나는지 보자. 이것으로 시작하고 name을 업데이트하고
// object에 약간의 꿈을 추가해봤어 (곧 섹시해짐) 좋아! 다음 것으로 넘어가자
// object를 만드는 방법을 배웠고 우리가 만든 object는, javascript가 미리 준비한 object랑 비슷하게 생겼다는 걸 배웠어.
// 예를 들어 console 같은 거 말야. 특별한 것이 아니고 그냥 (우리가 만든 object와) 똑같이 생겼어
// 우린 player에서 item을 가져오는 방법을 배웠어. 사실 object에서 property를 가져오는 방법이지
// player의 name property! 그리고 player가 만들어진 이후에 player안에 새 property를 만드는 방법을 배웠지
// 좋아! 지금까지 object에 대한 설명이였어. 이제 부터 function에 대해 얘기해보자
// 전에 말했던 것처럼, function은 어떤 코드를 캡슐화해서 그걸 계속 반복해서 사용할 수 있도록 한 거야
// 나의 애청곡을 계속 반복재생하는 것처럼 특정 input을 기반으로, 같은 행동을 실행하지
// 예를 들어서, function을 적고 네가 원하는 어떤 function을 만들 수 있어. plus라는 function을 만들어 볼게!
// 
// 이 function은 2 + 2를 console.log할 거야. 이게 전부야! 이게 이 function이 할 일의 전부야!
// function을 실행시키려면 이렇게 적으면 안되고 이렇게 적어야 돼!

function plus() {
    console.log(2 + 2);
};

plus();

// plus; -> 아무 일도 일어나지 않는다. 

// 아주 중요한 포인트야!
// 네가 이렇게만 적으면(plus) 아무일도 벌어지지 않아
// 진짜로. 봐봐. 아무일도 일어나지 않았어. console.log가 작동하지 않았어
// ()을 추가해야 돼. 

// ()의 뜻은 실행한다는 뜻이야. 

// 이것 봐, 됐지. 내가 여러번 실행시키고 싶다면 이런 식으로! 
// (위와 같이 입력)
plus();
plus();
plus();
plus();
plus();
plus();

// 실행을 여러 번 한 거야. 내가 본 것 중에 가장 아름다운 function이군!
// 그치만, 이걸 더 발전시켜보자. 
// function 안에 미리 data를 넣어두는 것보다 function 밖에서 data를 넣을 수 있게 하는 것이 훨씬 나아
// function의 목적은 여러 가지 일을 같은 코드로 하기 위함이기 때문이지
// 예를 들어 이 function의 목적은 두 개의 수를 더하는 거야. 2 + 2 뿐만 아니라! 알겠니?
// 우리가 할 것은 이 function으로 data를 보내고 그리고 이 function이 그 data를 받아서 그리고 그것들로 무언가를 할 수 있도록 하는 거야
// 우리는 전에도 function 안으로 data를 많이 보내봤어!
// 예를 들어 (위와 같이 작성) alert function으로 data를 보냈지. 브라우저 코드의 어딘가에 누군가가 alert라는 function을 만들어 놓았어
// alert function은 이 data를 받을 거고 내가 새로고침을 하면.. 경고문을 볼 수 있지. 아주 멋져
alert("lalalalala");

// 알겠니? function 안으로 data를 보내는 방법을 배웠어. function 안에서 data를 받는 방법을 배우기 전에 말이야!
// function 안에서 data를 받는 방법은, () 안에 무언가를 적는 거야. 예를 들어 두 가지의 숫자를 받고 싶다면
// (위와 같이 작성)
function plus_ab(a, b) {          // placeholder(자리 표시자): a, b
    console.log(a + b);
};

plus_ab(5, 10);
plus_ab(1.39891, 89201);
plus_ab(89201, 1.39891);

function minusFive (M) {
    console.log(M - 5);
};

minusFive(5, 31, 443, 4221, 564, 920184);
// 이 경우에는, 이름을 꼭 a와 b로 써야 하는 것은 아니야. potato랑 salad가 될 수도 있지
// 꼭 a와 b여야 한다는 것은 아니지. 알겠니?data를 받으면 대체되는 place holder(자리 표시자)일 뿐이야
// 그럼 와 을 보내보자. 알겠니?근데 지금 이 plus function은 place holder로 data를 받을 준비만 되어 있을 뿐
// 이 place holder를 사용하지는 않았어. 그래서 여기 적힌 숫자들을 place holder로 대체할 거야
// 이렇게 해서 우리가 원하는 어떤 계산이든 할 수 있지
// 뭐든 상관없어 (위와 같이 작성)


// 우리가 원하는 모든 것을 할 수 있어. 여기서 주의해야 할 점이 있는데 순서는 중요해
//  는 potato, .은 potato, 은 potato가 될 거고 은 salad, 은 salad, .은 salad가 될 거야
// 알겠니? 순서가 아주 중요해!
// 그것이 우리가 이런 식으로 적는 이유야. 

// 우리의 계산기를 확인해보자 짜잔! 완벽하게 잘 작동하는 것처럼 보이군!
// 이게 function을 만들고, function 안에서 data를 받는 방법이야
// 물론, 네가 하나의 data만 받고 싶다면 그래도 돼. 여기에 많은 data를 넘겨주더라도 이건 문제가 없어
// 이번에는, plus 대신 minusFive라고 명명해보자. 어떤 숫자를 받아서 그 숫자에서 -를 할 거야
// 여기서 새로고침을 해보면, 을 얻을 수 있어. 아주 많은 argument를 보내더라도 문제되지 않아
// 이 function은 많은 argument를 받을 준비가 되어있지 않아서 그래. 
// 이 function은 오직 첫 번째 argument만 받거든. 좋아! 이게 전부야
// 이게 우리가 function을 만들고! function으로 data를 보내고! function 밖에서 data를 받는 방법이야
// 다시 말하지만, 꼭 기억해야 하는 건 이 potato는 function의 body에서만 사용가능하다는 점.
// 이게 function의 body야 ({}로 둘러진 부분)
// potato는 이 function 밖에서는 접근할 수 없어. 
// potato는 정의(define)되지 않았고, 그렇기 때문에 네가 사용하면 (위와 같은) 에러가 떠. 좋아! 아주 아름답군!
// 내가 전에 말했듯이, 우리는 전에도 console.log()를 많이 썼었지
// 
// 그리고 나를 믿고 기다려달라고 부탁했어. 우린 이러한 형태의 무언가를 직접 만들어 볼 거라고 말야. 그리고 만들었어!
// 어떻게 object, function을 다루고 어떻게 function에 data 보내는 지를 배웠어. 마지막 예제를 해보자. 모든 것을 지우고!
// (위와 같이 작성)

const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    divide: function(a, b) {
        console.log(a / b);
    },
    powerOf: function(a, b) {
        console.log(a ** b);
    }
};

calculator.add(10, 5);
calculator.minus(10, 5);
calculator.divide(10, 5);
calculator.powerOf(10, 5);

// function을 작성할 거야. add라고 명명하자. 아니, player 말고 calculator라고 하자.
// calculator라는 function을 만들고 모든 계산기의 기능을 넣을거야. 
// 이건 add이고 add는 a, b를 갖는 function이고 a, b를 console.log 할 거야
// 그리고 여기서 (위와 같이 작성)


// , 을 넣을 거야. 그리고 끝! 보다시피, 해냈어. console.log 같은 걸 만들었어. 해냈다구! 
// 무언가와 argument가 있는 우리만의 object를 만들었어. console.log처럼 보기 좋아. 멋지지 않니?
// 이 복습이 끝난 뒤에 할 숙제를 내줄게
// 이 object를 완성시켜봐! 알겠지?
// 다음과 같은 작업을 할 수 있게 구현해줘
// + 이랑 또 -a+b 가 낫겠다. a-b, a 나누기 b, 또 a의 b제곱도 할 수 있도록 만들어줘.
// 이 기능들을 만들어보고 너의 코드를 댓글에 남겨줘. calculator라는 이름의 object에 네 코드의 마지막에는 이런 게 있어야 할 거야
// (위와 같이 작성)


// 그리고 빼기 (위와 같이 작성) 
// 나누기 그리고 제곱까지! 
// 이것이 너의 코드 숙제야
// 오직 console.log만 사용하고 그리고 calculator라는 object 안의 function을 사용해!
// 이걸로 복습을 마칠게. 다음 영상에서 보자! 
// 안녕