/* 자, 이제 실제로 toDo 들을 저장해 볼 거야. 알겠지?
왜냐하면 내가 여기 쓸 때마다... 오해하지는 말아줘
이건 훌륭해
삭제하고 있어
아주 좋아. 하지만 toDo 를 저장하고 있진 않아
보이지?
새로고침하면, 사라지지
좋아, 내가 여러번 말한 것 같은데, 브라우저에 어떻게 저장할 수 있을까?
맞아, 정답은 localStorage 야
자, 단계별로 시작해보자. 먼저 toDo 들을 저장하고 싶어
그 다음에 toDo 들을 불러오고 싶어
무슨 의미냐면, 만약 내가 a, b, c 를 입력하면
먼저 이것들을 localStorage 에 저장하고
그 후에 새로고침하면
localStorage 에서 그것들을 불러와서, 화면에 그려주고 싶은거야
이해됐지? 아주 좋아
자! 먼저 toDo 들을 저장하는 것부터 시작해보자
이제 내가 하고 싶은건, 여기에 array 를 만드는 거야. 알겠지?
(위와 같이 작성)
됐지? 이게 다야. array 를 만들었어
그리고 이제 newTodo 가 그려질 때마다
그 텍스트를 array 에 push 하고 싶어. 알겠지?
그래서, newTodo 를 그리기 전에
toDos array 를 가지고 와서 newTodo 를 push 할거야
array 에.. toDos 는 그냥 array 야. 알겠지?
(새로고침하고) 이제 a, b, c 를 넣고
모든게 근사해
근데 이제는, 당연히, toDos array 가 있게 돼
여기 보다시피 텍스트들이 있어. a, b, c. 됐지?
내 목표는 이제, 이걸 localStorage 에 넣는 거야
알겠지? 바로 그거야
내가 하고 싶은 건, 이걸 localStorage 에 넣는 거지
하지만, 문제는 localStorage 에 array 를 저장할 수 없다는 거야
localStorage 에는 오직 텍스트만 저장할 수 있어. 알겠지?
그래도 한번 시도는 해보자. 오케이?
자, newTodo 를 toDos array 에 push 한 후에
화면에 그 toDo 를 그려주고
그리고 이제 나는 function 을 하나 더 만들거야
이 function 은 saveToDos 라 이름짓자
saveToDos 가 하는 단 한 가지 일은
toDos array 의 내용을 localStorage 에 넣는 거야. 이게 다야. 오케이?
자 다시, 사용자가 form 을 submit 하면, 우리는 input 을 비우고
그 텍스트(newTodo)를 toDos array 에 push 하고
그 다음에는, 화면에 toDo 를 그려주고
그러고 나서 바로 여기에서 saveToDos 를 하면 돼. toDo 들을 저장하는 거야
다시 말하지만, saveToDos 가 수행하는 오직 한 가지 일은
toDos array 를 localStorage 에 집어넣는 거야. 알겠지?
물론, 이 시점, 즉 saveToDos function 이 호출되는 시점에는
newTodo 는 array 에 들어있어
알았지? 이제 여기로 와서 (새로고침) a, b, c 를 넣고
이제, Application 에서 어떤 일이 벌어지는지 살펴보자
(Application 탭에서 Local Storage file:// 을 클릭)
여기 보는 것처럼 a,b,c 가 있어. 정말 멋지지?
대박이야, 그치? 어떻게 생각해?
정말 멋진 것 같아
우리가 해야 할 건, 말 그대로... 여기 좀 봐봐
a, b, c d, e, f, g... (넣을 때마다 localStorage 에 추가됨)
끝내주지
이렇게 우리는 toDo 들을 저장하고 있어
엄청나
toDo 를 저장하는데, 아주 훌륭해
하지만, 새로고침을 하면
맞아. 화면에 나타나질 않아
하지만 여기엔 있지
localStorage 에
하지만 또 문제가 있어
문제는 만약 내가 예를 들어 a 를 다시 입력하면, 이거봐
다시 시작돼. (a,b,c,d,e,f 가 없어지고 a 로 바뀜)
보이지? 이상하잖아
그게 문제야. 하지만, 우리는 여전히 toDo 들을 저장하고는 있어. 그렇지?
자, 문제는 아까 말한 것처럼, 기존에 있던 toDo 들을 화면에 나타내주지 않는단 거야
거기서부터 시작해보자
먼저 toDo 들을 그려보는거야. 알겠지?
그 후에 복제와 다른 모든 것들에 대해 이야기해볼거야. 왜냐면 중요한 일이기 때문이야. 알겠지?
근데 나는 이렇게 toDo 들을 텍스트로 저장하고 싶지는 않아. 오케이?
왜냐하면 저건 단순히 텍스트가 아니기 때문이야
이렇게 array 로 저장했으면 좋겠어
하지만 이렇게 할 수는 없어
여기서는 (Value 를 직접 수정해서) 할 수 있어
하지만 이건 그냥 텍스트야
실제로 array 는 아니야
무슨 뜻인지 보여줄게
(위와 같이 작성)
텍스트를 얻을 수 있어
이걸 봐
텍스트를 얻긴 하지만, 적어도 array 처럼 보이니까 괜찮아
이게 바로 우리가 할 일이야
단순 텍스트로 저장되는 걸 원하지 않아
array 로 저장하고 싶어
자, 이제 우리는 브라우저가 가지고 있는 어떤 기능을 이용할 거야
JavaScript object 나 array 나 어떤 것이든 string 으로 바꿔주는 기능이야. 알겠지?
예를 들어 보여줄게
자, name 으로 nico 를 가진 player (object) 가 있다고 해보자
이렇게. 알겠지?
네가 이걸 string 으로 바꾸고 싶다면, 이렇게만 하면 돼
player 를 JSON.stringify() 안에 넣기만 하면 되는 거야
여기 있는 JSON.sringify 는
JavaScript object 나 array 또는 어떤 JavaScript 코드건 간에
그걸 string 으로 만들어줘
이게 바로 우리가 하고 싶은 거지
toDos 를 stringify 하면 돼
이렇게. 좋아
다시 해보자
localStorage 를 다 지우고
로그인을 다시 해야 해
로그인하자. 좋아
a, b, c 를 넣으면
자 여기 봐봐. array 의 모양으로 저장이 되었어. 그렇지?
이거 중요해. 정말 중요한거야. 알겠어?
왜냐면 다음 영상에서 어떻게 localStorage 있는 것들을 불러오는지 배울 것이기 때문이야
여기 이걸 보면, 중복도 가능해. 그렇지? 전에 언급했듯이 말이야
여기 새로고침을 하면 물론 또 덮어쓰지만
그래도 괜찮아. 알겠지?
이제 우리는 저걸 화면에 그릴 수 있게 됐어
다음 영상에서 해볼 거야, 바이바이
 */