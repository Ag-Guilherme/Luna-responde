const inputQuestion = document.getElementById("inputQuestion");
const result = document.getElementById("result");
const sendBtn = document.getElementById("sendBtn");

inputQuestion.addEventListener("keypress", (e) => {
  if (inputQuestion.value && e.key === "Enter") SendQuestion();
});

sendBtn.addEventListener("click", () => {
  if (inputQuestion.value) SendQuestion();
});

const OPENAI_API_KEY = "";

function SendQuestion() {
  var sQuestion = inputQuestion.value;

  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer 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",
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: sQuestion,
      max_tokens: 2048, // tamanho da resposta
      temperature: 0.5, // criatividade
