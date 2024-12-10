// Array to temporarily store questions (loaded from localStorage if available)
let questions = JSON.parse(localStorage.getItem("questions")) || [];

// Function to display questions in the Create Exam section
const displayQuestions = () => {
    const questionsList = document.getElementById("questionsList");
    questionsList.innerHTML = questions.map((question, index) => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            ${question}
            <div>
                <button class="btn btn-warning btn-sm mr-2" onclick="editQuestion(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteQuestion(${index})">Delete</button>
            </div>
        </li>
    `).join("");
    saveQuestions();
};

// Save questions to localStorage
const saveQuestions = () => {
    localStorage.setItem("questions", JSON.stringify(questions));
};

// Handle form submission for adding a new question
document.getElementById("questionForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const questionText = document.getElementById("questionText").value;
    questions.push(questionText);
    displayQuestions();
    e.target.reset();
});

// Function to edit a question
const editQuestion = (index) => {
    const newText = prompt("Edit your question:", questions[index]);
    if (newText) {
        questions[index] = newText;
        displayQuestions();
    }
};

// Function to delete a question
const deleteQuestion = (index) => {
    questions.splice(index, 1);
    displayQuestions();
};

// Function to display questions in the Take Exam section
const loadQuestions = () => {
    const savedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
    const examQuestionsList = document.getElementById("examQuestionsList");
    examQuestionsList.innerHTML = savedQuestions.map((question, index) => `
        <li class="list-group-item">
            <strong>Question ${index + 1}:</strong> ${question}
        </li>
    `).join("");
};

// Countdown timer function for the exam (10 minutes)
const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    const interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(interval);
            alert("Time's up! The exam is over.");
            // Optional: Disable answering or automatically submit exam
        }
    }, 1000);
};

// Initialize Take Exam page with questions and start timer
window.onload = () => {
    loadQuestions();
    const display = document.querySelector("#timer");
    const tenMinutes = 10 * 60;
    startTimer(tenMinutes, display);
};

// Initial display of questions in the Create Exam section
displayQuestions();
