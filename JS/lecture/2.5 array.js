// array -> 데이터를 정리하는 법 
// 컴퓨터 과학에서 매우 큰 부분, 바로 데이터 구조에 대한 것. 
// 자료의 검색이나 삽입을 빠르게 할 수 있는 데이터의 저장방법 
// 가장 기본적인 데이터 구조 -> array(배열)

// 배열이 없으면 변수지정하고 나열하거나 문자열끼리 더해서 만들꺼다. 하지만, 원하는 데이터를 받아오고 싶을 때 방법이 없다. 
// 대신 변수를 선언하고 []로 감싸서 안에 쉼표(,)로 구분하면 모든 데이터 타입을 저장해서 그루핑 할 수 있다. 
// 컴퓨터는 0부터 세기 때문에 배열 이름에 []붙이고 해당 번호를 써주면 배열을 받아올 수 있다. 
// 배열은 배열 안에서 값을 받아올 수도 있고, 값을 추가할 수도 있다. 

const dayOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// Get Item from Array
console.log(dayOfWeek[4]);
console.log(dayOfWeek);

// Add one more day to the Array 
dayOfWeek.push("sun");

console.log(dayOfWeek);

const toBuy = ['tomato', 'potato', 'pizza'];
toBuy.push('kimbab');
console.log(toBuy);
console.log(toBuy[2]);
console.log(toBuy[9894848415]);