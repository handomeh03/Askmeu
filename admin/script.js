const questions = [
  {
    id: 1,
    question: "What is JavaScript hoisting?",
    author: "Alice",
    approved: false,
    answered: false,
    helpfulYes: 0,
    helpfulNo: 0,
  },
  {
    id: 2,
    question: "How does JavaScript handle asynchronous code?",
    author: "User123",
    approved: false,
    answered: false,
  },
  {
    id: 3,
    question: "What is the difference between let and var?",
    author: "User456",
    approved: false,
    answered: false,
  },
];

function renderQuestions() {
  const container = document.getElementById("questions-container");
  container.innerHTML = "";

  questions.forEach((q) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.innerHTML = `
      <h3>${q.question}</h3>
      <p><strong>Asked by:</strong> ${q.author}</p>
      <p><strong>Status:</strong> ${q.answered ? "Answered" : "Pending"}</p>
      <div class="buttons">
        <button class="approve" onclick="approveQuestion(${
          q.id
        })">Approve</button>
        <button class="answered" onclick="markAsAnswered(${
          q.id
        })">Mark as Answered</button>
        <button class="delete" onclick="deleteQuestion(${q.id})">Delete</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function approveQuestion(id) {
  const question = questions.find((q) => q.id === id);
  if (question) {
    question.approved = true;
    alert("Question approved.");
    renderQuestions();
  }
}

function deleteQuestion(id) {
  const index = questions.findIndex((q) => q.id === id);
  if (index !== -1) {
    questions.splice(index, 1);
    alert("Question deleted.");
    renderQuestions();
  }
}

function markAsAnswered(id) {
  const question = questions.find((q) => q.id === id);
  if (question) {
    question.answered = true;
    alert("Marked as answered.");
    renderQuestions();
  }
}

if (q.answered) {
  card.classList.add("answered");
} else if (q.approved) {
  card.classList.add("approved");
}

function downloadJSON() {
  const filename = "questions.json";
  const jsonStr = JSON.stringify(questions, null, 2); // pretty print
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
}

window.onload = renderQuestions;
