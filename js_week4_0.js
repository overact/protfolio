// Array of quiz questions and answers
const quizData = [
    {
        question: "Q1. Feng is working:",
        answers: ["a:Yes", "b:No", "c:Yes & No", "d:I don't know"],
        correct: "d:I don't know"
    },
    {
        question: "Q2. Feng is good at Java:",
        answers: ["a:Certainly Yes", "b:Maybe Yes", "c:No", "d:He will"],
        correct: "d:He will"
    },
    {
        question: "Q3. Feng's favorite programming language is:",
        answers: ["a:JavaScript", "b:Python", "c:C++", "d:R"],
        correct: "b:Python"
    },
    {
        question: "Q4. Feng has experience in:",
        answers: ["a:Web Development", "b:Data Science", "c:AI & ML", "d:Not for Sure"],
        correct: "c:AI & ML"
    }
];

// Function to generate the quiz
function generateQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizData.forEach((currentQuestion, questionIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h4');
        questionTitle.innerText = currentQuestion.question;
        questionDiv.appendChild(questionTitle);

        currentQuestion.answers.forEach((answer) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${questionIndex}`;
            input.value = answer;

            label.appendChild(input);
            label.append(answer);
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionDiv);
    });
}

// Function to calculate the quiz results
function calculateResults() {
    let correctAnswers = 0;
    quizData.forEach((currentQuestion, questionIndex) => {
        const selectedAnswer = document.querySelector(`input[name="question${questionIndex}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === currentQuestion.correct) {
            correctAnswers++;
        }
    });

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerText = `You got ${correctAnswers} out of ${quizData.length} correct!`;
}

// Event listener for the submit button
document.getElementById('submit').addEventListener('click', calculateResults);

// Generate the quiz on page load
generateQuiz();