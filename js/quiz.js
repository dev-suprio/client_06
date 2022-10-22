const quizData = [
    {
        question: "How long is a marathon? (Sports)",
        a: "45.195 kilometres (26.2 miles)",
        b: "47.195 kilometres (26.2 miles)",
        c: "43.195 kilometres (26.2 miles)",
        d: "42.195 kilometres (26.2 miles)",
        correct: "d",
    },
    {
        question: "How many players are there on a baseball team? (Sports)",
        a: "10 players",
        b: "9 players",
        c: "8 players",
        d: "7 players",
        correct: "b",
    },
    {
        question: "Which country won the World Cup 2018? (Sports)",
        a: "France",
        b: "Brazil",
        c: "Argentina",
        d: "Italy",
        correct: "a",
    },
    {
        question: "In which year did Amir Khan win his Olympic boxing medal? (Sports)",
        a: "2003",
        b: "2004",
        c: "2005",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "World War I began in which year? (History)",
        a: "1923",
        b: "1938",
        c: "1914",
        d: "1956",
        correct: "c",
    },
    {
        question: "Adolf Hitler was born in which country? (History)",
        a: "France",
        b: "Austria",
        c: "Germany",
        d: "Hungary",
        correct: "b",
    },
    {
        question: "Where was John F. Kennedy assassinated in? (History)",
        a: "New York",
        b: "Austin",
        c: "Dallas",
        d: "Miami",
        correct: "c",
    },
    {
        question: "Who fought in the war of 1812? (History)",
        a: "Andrew Jackson",
        b: "Arthur Wellesley",
        c: "Otto von Bismarck",
        d: "Napoleon",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
    if(answer === quizData[currentQuiz].correct) {
        score++
    }
    currentQuiz++
    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
        `
    }
    }
})


// selecting all required elements