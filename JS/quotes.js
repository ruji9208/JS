const quotes = [
    {
      quote: "나는 당신의 눈물이 하는 말을, 당신의 체온이 하는 말을 다 알아 듣는다. \n '나는 니가 미치게 가여워서 그냥 두고 갈 수가 없었어.'\n그 밤, 당신이 안아준 사람은 형을 잃은 11살의 나였고, 환자를 잃은 26살의 나였고, \n더는 세상에 빚을 질 수 없어 당신조차 잃으려 하는 바보 같은 지금의 나였다. ",
      author: "\n주영도",
    },
    {
      quote: "해주고 싶은 말이었다. 깨어져도 된다. 힘내지 않아도 된다. \n누군가를 붙잡고 일어나도 된다. 그리고 하마터면 할 뻔 했던 말도 있었다. \n그 누군가가 나였으면.. 좋겠다.",
      author: "\n주영도",
    },
    {
      quote: "다치지 말라고 지구 끝까지 밀어내면 지구를 반으로 접어 다가오는 사람이 있다. \n당신은 왜 멀어지지 않을까, 당신은 왜 참아지지가 않을까 \n도망가라, 도망가지 마라, 제발 가까이 오지 마라, 제발 멀어지지 마라. \n누구도 들어줄 수 없는 엉터리 주문을 외면서 결국 내가 지구를 반으로 접어 달려가게 하는 사람이 있다.",
      author: "\n주영도",
    },
    {
      quote: "누군가를 안아준다는 건 식지도 않을 체온으로 100마디 말보다 선명한 마음을 전하는 것. \n너무 그리웠다고, 왜 이제 왔냐고, 한동안 안 보여 걱정했다고. \n곁에 없어 허전했다고, 보고 싶어 미칠 뻔했다고. \n미안하다고, 괜찮다고, 고맙다고.",
      author: "\n너는 나의 봄",
    },
    {
      quote: "얼마나 힘들었냐는 말, 이제는 그렇게 아프지 말았으면 좋겠다는 말. \n떨고 있던 그날의 당신을 안아주진 못했지만 \n그 시간을 이겨낸 지금의 당신을 안아주고 싶다는 아마도 가장 따뜻한 위로.",
      author: "\n너는 나의 봄",
    },
    {
      quote: "저런 얼굴을 본 적이 있다. \n슬픔도 분노도 주인이 될 수 없는 텅 빈 진공관 같은 숨 쉴 공기도 없어 \n어떤 소리도 들리지 않는 '많이 걱정했다, 니가 괜찮아서 다행이다, \n슬퍼해도 되고 화를 내도 된다, 이 모든 일에 너의 잘못은 없다, \n조금만 버티면 모든 건 지나간다, 내가 곁에 있어주겠다.' \n해주고 싶은 말은 많지만 내가 가진 말 중에는 \n이 얼굴을 위로할 수 있는 게 없다는 걸 안다 그래서... \n'식사 안 하셨죠? 저희 밥 먹고 들어가요.'",
      author: "\n너는 나의 봄",
    },
    {
      quote: " Sometimes people don’t want to hear the truth because they don’t want their illusions destroyed.",
      author: "\nFriedrich Wilhelm Nietzsche",
    },
    {
      quote: " In individuals, insanity is rare; but in groups, parties, nations, and epochs, it is the rule.",
      author: "\nFriedrich Wilhelm Nietzsche",
    },
    {
      quote: "불행을 재현할 순 있지만 \n어떻게 극복할지는 배운 적이 없으니까 \n그렇다면 반복 강박을 갖게 될 만큼 벗어나고 싶은 기억은 뭘까.",
      author: "\n너는 나의 봄",
    },
    {
      quote: "I am who I am and, \nI have the need to be",
      author: "\n어린 왕자",
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
