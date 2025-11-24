// Updated script.js with new timer functionality, approval system, and NR-based questions

let timer;
let isApproved = false;

// Timer functionality
function startTimer(duration) {
    let timerDisplay = document.getElementById('timer');
    timer = duration;
    let minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Approval system
function requestApproval() {
    if (!isApproved) {
        alert('Approval is required to proceed.');
    }
}

// NR-based questions
const questions = [
    { question: 'What does NR stand for?', options: ['Normal Rate', 'Non-Recurring', 'New Release'], answer: 1 },
    { question: 'How to request NR?', options: ['Email', 'Direct Call', 'Online Form'], answer: 2 }
];

function loadQuestions() {
    questions.forEach((q, index) => {
        console.log(`Q${index + 1}: ${q.question}`);
        // Display options and handle answers
    });
}

// Initialize timer
startTimer(300); // Starts a 5-minute timer
loadQuestions();