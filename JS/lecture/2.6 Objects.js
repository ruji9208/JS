// 너도 너만의 xx.xx를 만들 수 있다는 것 
// 가끔은 list안에 정리하고 싶지 않을 수 있어. 이럴 때는 object에 정리해야 할 때가 있어. 
// 가장 좋은 예시는 비디오 게임인 것 같아. 게임에 플레이어, 캐릭터를 만든다고 상상해보자. 
// 만약 object가 없다고 생각하면 
// const playerName = "kuku";
// const playerFat = "Mid";
// const playerPoint = 1003091;
// const playerHansome = true; 이렇게 플레이어가 생겼어. 
// 이건 console.log처럼 xx.xx의 형태가 아니다. 즉, player.xx가 아니라는 거다. 
// player.name, player.fat, player.hansome, player.point 이게 훨씬 낫다. 
// 왜냐하면 name, fat, hansome, point의 프로퍼티(특성)들이 한 개의 개체(entity), 즉 player에 대해 설명하고 있다는걸 알기 때문이지. 
// 이렇게 하면 더 잘 정돈된다. 데이터를 가능한 한 최선으로 정리하는거다. 명심해 
// 우리가 아는 변수로 하면 변수가 존재한다는걸 기억해야 하고, 변수의 이름 즉 프로퍼티 이름을 지어야 한다. 좋지 않다. 
// const player = ["kuku", "Mid", 1003984, true] 배열도 적합하지 않다. 배열 안에 값이 어떤 의미인지 알려주지 않는다. 
// 각 값을 주석처리 할 수도 있을꺼다. player[0] == name 이런 식으로. 하지만 이보다 더 좋은 방법이 있어야 할 것 같다. 

const player = {
    name: 'kuku', 
    fat: "mid", 
    point: 13233, 
    hansome: true
} 

// 오브젝트 안과 밖은 규칙이 다르다. 밖은 =을 안은 :를 사용. 

console.log(player);
console.log(player["name"]);
// console는 오브젝트이고 log는 그 안의 어딘가에 있는 log라는 뜻이지. 
// 하지만 이건 리스트가 아니다. 리스트는 리스트 안에 있는 것이 모두 같은 의미를 갖기 때문에. 
console.log(player);
player.hansome = false;
player.lastName = "potato";
console.log(player);
// const를 수정할 수 없는데 수정이 됐는데, 그럼 가르쳐 준거랑 틀리지 않냐? 
// 이건 오브젝트 안의 무언가를 수정하는거다. 문제는 const 전체를 바꾸려고 할 때 발생한다. 

player = false;
// Uncaught TypeError: Assignment to constant variable. 이렇게 말이지 

// 그렇다면 오브젝트는 프로퍼티를 가진 배열이라고 할 수 있지 않나? 