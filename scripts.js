const result ={
    "ESTJ": "당신은 관리자형입니다. 당신은 체계적이고 조직적인 사람으로, 일을 효율적으로 처리하는 것을 선호합니다.",
    "ESFJ": "당신은 외향적이고 사교적인 사람입니다. 사람들과의 관계를 중요시하며, 타인의 감정을 잘 이해합니다.",
    "ENTJ": "당신은 지도자형입니다. 당신은 목표 지향적이고 결단력이 강하며, 문제를 해결하는 데 능숙합니다.",
    "ENTP": "당신은 혁신가형입니다. 당신은 창의적이고 독창적인 아이디어를 내는 것을 좋아합니다.",
    "ESFP": "당신은 활동가형입니다. 당신은 사람들과의 상호작용을 즐기며, 즉흥적인 결정을 내리는 것을 선호합니다.",
    "ENFP": "당신은 열정적인 사람입니다. 당신은 새로운 경험과 사람들을 만나는 것을 좋아합니다.",
    "ENFJ": "당신은 카리스마형입니다. 당신은 사람들과의 관계를 중요시하며, 타인을 이끄는 능력이 있습니다.",
    "ESTP": "당신은 모험가형입니다. 당신은 새로운 경험을 추구하며, 즉흥적인 결정을 내리는 것을 좋아합니다.",
    "ISFJ": "당신은 보호자형입니다. 당신은 타인을 배려하고, 안정적인 환경을 선호합니다.",
    "ISFP": "당신은 예술가형입니다. 당신은 감정이 풍부하고, 창의적인 표현을 중요시합니다.",
    "INTJ": "당신은 전략가형입니다. 당신은 논리적이고 분석적인 사고를 하며, 목표를 달성하기 위해 계획을 세우는 것을 좋아합니다.",
    "INTP": "당신은 사색가형입니다. 당신은 깊이 있는 사고를 하며, 새로운 아이디어를 탐구하는 것을 좋아합니다.",
    "ISTJ": "당신은 현실주의자형입니다. 당신은 사실적이고 실용적인 사고를 하며, 신뢰할 수 있는 사람입니다.",
    "ISTP": "당신은 탐험가형입니다. 당신은 새로운 경험을 추구하며, 문제를 해결하는 데 능숙합니다.",
    "INFJ": "당신은 상담자형입니다. 당신은 사람들의 감정을 잘 이해하고, 깊이 있는 관계를 중요시합니다.",
    "INFP": "당신은 이상주의자형입니다. 당신은 자신의 가치관을 중요시하며, 사람들과의 깊은 관계를 원합니다.",
};
function getMBTIType(score) {
    let mbti = "";
    mbti += score.E > score.I ? "E" : "I"; // 외향(E) 또는 내향(I)
    mbti += score.S > score.N ? "S" : "N"; // 감각(S) 또는 직관(N)
    mbti += score.T > score.F ? "T" : "F"; // 사고(T) 또는 감정(F)
    mbti += score.J > score.P ? "J" : "P"; // 판단(J) 또는 인식(P)
    return mbti; // MBTI 유형 반환
}

const questions = [
    {
      'question': "1. 처음 만난 사람들과의 모임이 있을 때, 나는 보통...",
      'answer': [
        { text: "새로운 사람들과 빨리 어울리고 대화를 시작한다", type: "E" },
        { text: "낯선 환경이 부담스러워 조용히 분위기를 살핀다", type: "I" },
      ],
    },
    {
      'question': "2. 문제를 해결할 때, 나는 보통...",
      'answer': [
        { text: "구체적인 사실과 데이터를 우선적으로 고려한다", type: "S" },
        { text: "직관적으로 아이디어를 떠올리고 큰 그림을 본다", type: "N" },
      ],
    },
    {
      'question': "3. 의사결정을 할 때, 나는 주로...",
      'answer': [
        { text: "논리적 타당성과 객관성을 최우선으로 생각한다", type: "T" },
        { text: "사람들의 감정과 관계를 우선적으로 고려한다", type: "F" },
      ],
    },
    {
      'question': "4. 일을 진행할 때, 나는 보통...",
      'answer': [
        { text: "체계적으로 계획을 세우고 단계별로 실천한다", type: "J" },
        { text: "상황에 따라 유연하게 대처하며 즉흥적으로 진행한다", type: "P" },
      ],
    },
    {
      'question': "5. 휴일에 나는 보통...",
      'answer': [
        { text: "친구들과 모여 에너지를 충전한다", type: "E" },
        { text: "집에서 혼자 시간을 보내며 여유를 즐긴다", type: "I" },
      ],
    },
    {
      'question': "6. 새로운 아이디어를 얻을 때, 나는 주로...",
      'answer': [
        { text: "경험을 통해 실질적인 정보를 얻는다", type: "S" },
        { text: "창의적 생각과 가능성을 상상한다", type: "N" },
      ],
    },
    {
      'question': "7. 의견 충돌이 있을 때, 나는 보통...",
      'answer': [
        { text: "논리와 사실을 근거로 토론한다", type: "T" },
        { text: "상대방의 감정을 고려하며 조정하려 한다", type: "F" },
      ],
    },
    {
      'question': "8. 업무나 일정을 수행할 때 나는...",
      'answer': [
        { text: "체계적인 계획을 세워 단계별로 진행한다", type: "J" },
        { text: "유연하게 상황에 맞게 대처한다", type: "P" },
      ],
    },
    {
      'question': "9. 새로운 모임에서 나는 보통...",
      'answer': [
        { text: "적극적으로 대화에 참여한다", type: "E" },
        { text: "먼저 듣고 조용히 반응을 보인다", type: "I" },
      ],
    },
    {
      'question': "10. 문제 해결 시 나는 보통...",
      'answer': [
        { text: "세부적인 정보와 데이터를 꼼꼼하게 분석한다", type: "S" },
        { text: "전체적인 흐름과 큰 그림을 먼저 파악한다", type: "N" },
      ],
    },
    {
      'question': "11. 결정을 내릴 때 나는...",
      'answer': [
        { text: "객관적인 분석을 통해 합리적인 결정을 내린다", type: "T" },
        { text: "주변 사람들의 감정과 의견을 충분히 반영한다", type: "F" },
      ],
    },
    {
      'question': "12. 일정을 계획할 때 나는...",
      'answer': [
        { text: "미리 계획을 세워 체계적으로 관리한다", type: "J" },
        { text: "그때그때 상황에 맞게 자유롭게 조정한다", type: "P" },
      ],
    },
    {
      'question': "13. 사회적 모임에서 나는...",
      'answer': [
        { text: "대화의 주도권을 잡고 분위기를 이끈다", type: "E" },
        { text: "주변 분위기를 관찰하며 조용히 참여한다", type: "I" },
      ],
    },
    {
      'question': "14. 정보를 습득할 때 나는...",
      'answer': [
        { text: "구체적이고 실질적인 예시를 선호한다", type: "S" },
        { text: "미래의 가능성과 아이디어에 주목한다", type: "N" },
      ],
    },
    {
      'question': "15. 문제에 접근할 때 나는...",
      'answer': [
        { text: "객관적이고 논리적인 분석을 우선시한다", type: "T" },
        { text: "감성적인 면과 인간적인 측면을 고려한다", type: "F" },
      ],
    },
    {
      'question': "16. 생활이나 업무 계획을 세울 때 나는...",
      'answer': [
        { text: "구체적인 목표와 일정을 미리 정한다", type: "J" },
        { text: "즉흥적이고 유연한 계획을 선호한다", type: "P" },
      ],
    }
  ];
  

let score = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
};
let currentQuestionIndex = 0;

/* id 가 무엇이있는지 확인하고 기능추가 */

const startPage = document.getElementById("start-page");
const questionPage = document.getElementById("question-page");
const resultPage = document.getElementById("result-page");
const progressDiv = document.getElementById("progress");
const questionDiv = document.getElementById("question");
const resultType = document.getElementById("result-type");
const resultDesc = document.getElementById("result-desc");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const answerBtns = document.querySelectorAll('.answer-btn');

// function renderQuestion(){
//     const questionData = questionDiv[currentQuestionIndex];
//     progressDiv.textContent = `질문 ${currentQuestionIndex + 1} / ${question.length}`;
//     questionDiv.textContent = questionData.question;
//     answerBtns.forEach((btn, index) => {
//         const answer = questionData.answer[index];
//         btn.textContent/*innerText*/ = answer.text;
//         btn.dataset.type = answer.type;/*이거중요함*/
//         //btn.onclick = () => selectAnswer(questionData.answer[index].type);
//     });
//     //progressDiv.innerText = `${currentQuestionIndex + 1} / ${question.length}`;
// }
function renderQuestion() {
    const questionData = questions[currentQuestionIndex]; // questions 배열에서 데이터 가져오기
    progressDiv.textContent = `질문 ${currentQuestionIndex + 1} / ${questions.length}`; // 질문 진행 상황 업데이트
    questionDiv.textContent = questionData.question; // 질문 내용 업데이트
    answerBtns.forEach((btn, index) => {
        const answer = questionData.answer[index];
        btn.textContent = answer.text; // 답변 텍스트 설정
        btn.dataset.type = answer.type; // 답변 유형 설정
    });
};

startBtn.addEventListener('click',() => {
    startPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = {
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0
    };
    renderQuestion();
});
answerBtns.forEach(btn => {
    btn.addEventListener('click',(event) => {
        const selectedTtype = event.target.dataset.type;
        score[selectedTtype]++;
        console.log('현재점수' ,score);
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            renderQuestion();}
        else{
            console.log('검사 완료!');
            showResult();
                }
    })
});

function showResult() {
    questionPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
    const mbtiType = getMBTIType(score);
    resultType.textContent = `당신의 MBTI 유형은 ${mbtiType}입니다.`;
    resultDesc.textContent = result[mbtiType] || "결과 설명을 준비중입니다.";

}
restartBtn.addEventListener('click', () => {
    resultPage.classList.add('hidden');
    startPage.classList.remove('hidden');
});