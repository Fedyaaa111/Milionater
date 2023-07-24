
const questions = [
    {
        question: "Which is largest animal in the world",
        answers:[
            {text: "Shark",correct: false},
            {text: "Whale",correct: true},
            {text: "Elephant",correct: false},
            {text: "Giraffe",correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world",
        answers:[
            {text: "Asia",correct: false},
            {text: "Australia",correct: true},
            {text: "Africa",correct: false},
            {text: "Arctic",correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world",
        answers:[
            {text: "Vatikan city",correct: true},
            {text: "Armenia",correct: false},
            {text: "Fiji",correct: false},
            {text: "Malta",correct: false},
        ]
    },
    {
        question: "Which is the biggest mountain in the world",
        answers:[
            {text: "lhoste",correct: false},
            {text: "Cho Oyu",correct: false},
            {text: "Makalu",correct: false},
            {text: "Everest",correct: true},
        ]
    },
    {
        question: "Halley's comet returns to Earth every",
        answers:[
            {text: "99 years",correct: false},
            {text: "86 years",correct: false},
            {text: "76 years",correct: true},
            {text: "120 years",correct: false},
        ]
    },
    {
        question: "Where will you find the Crown Jewels of England",
        answers:[
            {text: "Buckingarm Palace",correct: false},
            {text: "Tower of London",correct: true},
            {text: "Britsh Museum",correct: false},
            {text: "World Sky",correct: false},
        ]
    },
    {
        question: "What is acrophobia a fear of",
        answers:[
            {text: "Spiders",correct: false},
            {text: "Heights",correct: true},
            {text: "Wather",correct: false},
            {text: "Fire",correct: false},
        ]
    },
    {
        question: "What is the capital of Canada",
        answers:[
            {text: "Toronto",correct: false},
            {text: "Ottawa",correct: true},
            {text: "Mantreal",correct: false},
            {text: "Bern",correct: false},
        ]
    },
    {
        question: "Who was the last prophet in Islam",
        answers:[
            {text: "Moses",correct: false},
            {text: "Jesus",correct: false},
            {text: "Muhammad",correct: true},
            {text: "Budda",correct: false},
        ]
    },
    {
        question: "Which is the name of rhe river that flows trough London",
        answers:[
            {text: "Seine",correct: false},
            {text: "Thames",correct: true},
            {text: "Danube",correct: false},
            {text: "Amazon",correct: false},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}

function selectAnswer(e){
    const  selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();