
const audios = ["5화 - 나비가 날았습니다..mp3", "7화 - 진짜 힘들었겠다.mp3", "7화 - 살려 달라고 온 거잖아요..mp3", "7화 - 내일도 이럴건데.mp3", "7화 - 내 결정이 옳았다고 .mp3", "4화 - 사이드미러, CCTV.mp3", "4화 - 힘내지 않아도 된다.mp3", "3화 - 해주고 싶은 말은 많지만.mp3", "3화 - 마음을 다쳤다는 건 비유가 아닙니다, 충분히 잘하고 계신거에요.mp3", "2화 - 콜드리딩.mp3", "7화 - 가장 따뜻한 위로.mp3", "너는 나의 봄 - 당신이 안아준 사람은 ......지금의 나였다.mp3", "누군가를 안아준다는 건, 식지도 않을 체온으로 백 마디 말보다 선명한 마음을 전하는 것.mp3"];

const chosenAudio = audios[Math.floor(Math.random() * audios.length)];

const bgAudio = document.createElement("audio");

const container = document.querySelector('.container')

bgAudio.classList.add("audioTag");
bgAudio.setAttribute("controls", "controls");
bgAudio.setAttribute("autoplay", "autoplay");

bgAudio.src = `audio/${chosenAudio}`;

container.appendChild(bgAudio);

/* document.querySelector("audio").play(); */