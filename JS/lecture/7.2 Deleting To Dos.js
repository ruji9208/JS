/* 좋아. 이제 내가 하고 싶은 건 toDo 를 삭제하는 button 을 추가하는 거야
알겠지?
다시 말하지만, button 은 당연히 JavaScript 에서 만들어질 거야
그리고 이 모든 것들이 어떻게 보일지 디자인해야 해
여기 우리는 li 를 가질 거야. 여기 이미 갖고 있지
span이 있고, 이게 toDo 의 텍스트야. 맞지?
그리고 나서 button 을 갖게 될건데, 이 버튼은 event 를 수신하고 있어야 해. 맞지?
이모티콘을 넣어보자. X 가 좋을 거 같아
이게 다야. 끝
button 을 만들었어. 맞지?
하지만 여기서 중요한 건, button 이 click event 를 기다리고 있어야 한다는 거야. 알겠지?
왜냐하면 그게 누군가 뭔가를 클릭했을 때 알 수 있는 유일한 방법이기 때문이야
좋아. 여기다 해보자
이제 button 을 생성해볼게
모든 것을 append 하기 전에 말이야. 알겠지?
(위와 같이 작성)
button.innerText 에 X 이모지를 넣자
됐어. 좋아
이제 button 을 li에 추가하고 싶어. 알겠지?
(위와 같이 작성)
알겠지, 먼저 span 을 추가하고 button 을 추가했어
되는지 보자. 새로고침
봐! 잘 된다
다시 보자. 우리는 li 를 만들고, span 과 button 을 만들었어
button 의 텍스트를 바꿔주고
음, 있잖아 span 의 텍스트를 여기 span 뒤에 놓아 보자. 이게 좀 더 적절한 거 같아
자 다시, 우리는 li 를 만들고, span 을 만들고 span 의 텍스트를 변경했어
button 을 만들고, button 의 텍스트를 변경했지
span 을 li 에 추가하고, button 을 li 에 추가했어
기억해. append 는 맨 마지막에 놓여져야 해
button 은 span 뒤에 있게 될 거야
그 다음에 li 를 toDoList 에 추가하는 거야
좋아, 지금은 button 이 아무 것도 하지 않아
우리가 클릭해도 아무 일도 일어나지 않아. 그렇지?
이제 그걸 바꿔보자
질문 하나 해볼게
뭔가가 클릭되었다는 것을 어떻게 확인할 수 있을까?
(이벤트리스너요!)
정확해. eventListener
eventListener 를 추가해야 해. 어디에?
(버튼이요!)
맞아. button 에 넣어야 해
알겠지? 이제 해보자
우리가 해야 할 건 button 에 click eventListener 를 추가하는거야
보다시피, 새로운 건 하나도 없어
그리고 이제, 여기 물론 function 을 만들어야 해
또 다른 function 을 만들어보자
이 function 은 toDo를 삭제할 거야
끝내주지
좋아, deleteToDo
여기로 와서, deleteToDo 를 넣자
deleteToDo 는 단순히 console.log 를 하게 하고
되는지 한번 보자. 새로고침하고 toDo 입력 후 엔터
Inspect(요소 검사) 해보자
Console 탭으로 가서, X 버튼을 클릭하면, 봐봐 나오지. 동작해
하지만 지금 문제가 있어
문제는, 어디를 클릭한 건지를 알 수가 없다는 거야
우리는 button 이 클릭되었다는 건 알아
하지만 우리는 어떤 li 를 제거해야 되는 지를 알지 못해
처음 것일까? 마지막 것일까?
자, 아마 이건 우리가 전에 본 적이 없는 것일 수 있어
여기 보다시피, 많은 button 들이 있는데
같은 event 를 기다리고 있고, 그들 모두 같은 function 을 실행시키고 있어
여기 5개의 button 이 있어
모든 button 이 같은 event 를 기다리고 있고, 모두 같은 function 을 실행하고 있어
이건 어려운 일이야. 왜냐면 어떤 button 이 클릭되었는 지를 모르기 때문이야
우리는 어떠한 button 한 개가 클릭된 건 알아
한 개의 button 이 클릭되었지만, 어떤 button 인지는 몰라
앞서 말한 것처럼, 우리는 클릭에 대한 정보를 갖고 있어
우리에겐 event 에 대한 정보가 있지. 맞지?
submit event 에 대한 정보를 가졌던 것 처럼
우리에겐 또한 click event 에 대한 정보도 있는 거야
그러니 여기에 넣자
그리고 이제 event 를 console.log 해서 살펴보자
클릭 된 button 이 어떤 건지에 대한 단서를 얻을 수 있는 지 해보는 거야
알았지? a, b, c 를 넣어두고
클릭해보면 (a, b, c 차례로), 모두 거의 똑같아 보이는 걸 알 수 있어
우리에게 좌표 같은 것을 주고 있어. (screenX, screenY) 쿨하지
하지만 좌표로는 할 수 없어. 텍스트가 너무 길잖아
대신에, 우리가 할 수 있는 건, 예를 들어... path 를 보는 거야
path 를 보자. button
li, 이 멋진 걸 봐봐
보다시피, 우리에게 어떤 element 에서 클릭이 일어난 건지를 보여주고 있어
클릭은 button 에서 시작했고, 맞지?
그런데 button 은 li 에 포함되어 있어
event 가 click 된 위치를 알려준다는 것을 알 수 있지
쩔어
이거 정말 흥미로워
왜냐면 이것이 의미하는 게, 클릭 target 이 무엇인지를 체크할 수 있다는 거거든
여기 다시 해보자
이게 target 이 되는 거지
내가 이걸 target 이라고 하는 건 여기서 볼 수 있는 거거든. target
알겠지?
event 는 property 를 가지는데
어떤 button 이 클릭되었는지를 알려줘
자 다시 해보자. a, b, c, 입력 후 차례대로 X 버튼을 클릭할게
보다시피, 꽤 비슷해
하지만 button 안을 들여다보면
자 여기 button 안에 많은 것들이 있는 것을 볼 수 있어
이것들 중에 parent 라는게 있는데
p... p...
여기 있다
parent, 아니! parentNode
저게 의미하는 건, 누가 그 button 의 부모냐는 거야
우리의 경우, 이걸 좀 봐봐. li 를 찾았어
자 똑같은 걸 찾아보자
마지막 button 에서. 여기 이 button. property 들이 참 많아
좋아. 우리가 찾는 건, parentNode 또는 parentElement 야
둘 다 똑같은 것 같아
요점은, 여기 보다시피
무엇이 parent 인지를 알 수 있다는 거야
button 의 parent 가 누구인지
이게 바로 우리가 원하는 것이야
어떤 게 클릭되었는 지 아는 것만으로는 충분하지 않아
지금 경우에, 우리는 어떤 게 click 되었는지를 알 수 있어. 그건 button 인데
우리는 그것의 parentNode 혹은 parentElement 를 얻고 싶어
여기 와서 event.target.parentElement 로 수정해보자
여기 와서 (새로고침 후) a, b, c, 하나 둘 셋
자 이제 차이점을 볼 수 있어
확인할 수 있지
클릭된 게 어떤 것인지 말야
예를 들어 우리는 innerText 를 얻을 수가 있는데
그게 어떤 거든지 말야
a, b, c 입력해주고
저걸 봐
이제 우리는 어떤 것이 클릭되었는 지 알 수 있어
그뤠~~잇! 좋지?
console.log 에 넣으면 li 를 볼 수 있어
a, b, c 입력하고 클릭, 클릭, 클릭
이제 누가 클릭되었는지 알 수 있어
자, 걱정하지마. 다시 복습을 할 거야
하지만 이게 기본적인 전체 아이디어야
우리는 event 에 대한 유용한 정보를 얻고 있어
하지만, 이 경우엔 그렇게 많은 정보를 주지 않아
event.target 을 살펴봐야 해
target 은 클릭된 HTML element 야
그리고 모든 HTML element 에는 하나 이상의 property 가 있어
저건 parentElement 인데
parentElement 는 클릭된 element 의 부모야
여기 보면, button, 바로 여기 있는 이 자식 말야
이게 바로 event.target 이야. 맞지?
그리고 이 자식은 parent 를 갖고 있어. 부모 말야
부모는.. 이 li 야. 자 이제 우리는 누구를 삭제해야 하는지를 알 수 있어
자, 그럼 여기서 이걸 저장하자. li 라고 하면 돼
이게 우리가 삭제하고 싶은 li 야
좋아
이제 우리가 해야 할 일은 실제로 아주 아주 쉬운 일이야
li.remove() 라고만 하면 돼
이게 다야. 끝
자 이제 우리는 toDo 를 지우고 있어
여기 와서 새로고침해주고 li to delete! 라고 입력해볼게
좋아, 우리는 이 li 를 만들었어
X button 을 클릭할 때, event 를 얻게 될거야
event 는 target 을 주겠지?
자 누가 click 된거지?
target 은 button 이야. 그 button 은 부모를 갖고 있지
우리는 그 button 의 부모에 접근할 수 있어
button 의 부모는 결국 li 가 되는거지
그 li 를 제거할 거야
3, 2, 1... 짠!
이렇게
너는 더 나은 toDoList 를 만들었어
그리고 뭐든지 삭제할 수도 있지
좋아. 그럼 다음 영상에서 만나자
 */