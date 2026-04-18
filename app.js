const pointsEl = document.getElementById("points");
const streakEl = document.getElementById("streak");
const resultEl = document.getElementById("result");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitAnswer");

let points = 0;
let streak = 0;

submitBtn.addEventListener("click", () => {
  const answer = Number(answerInput.value);

  if (!answerInput.value) {
    resultEl.textContent = "من فضلك اكتب إجابة الأول.";
    resultEl.style.color = "#fbbf24";
    return;
  }

  if (answer === 12) {
    points += 10;
    streak += 1;
    resultEl.textContent = "إجابة صحيحة! +10 نقاط 🎉";
    resultEl.style.color = "#22c55e";
  } else {
    points = Math.max(0, points - 5);
    streak = 0;
    resultEl.textContent = "إجابة خاطئة. -5 نقاط";
    resultEl.style.color = "#ef4444";
  }

  pointsEl.textContent = String(points);
  streakEl.textContent = String(streak);
  answerInput.value = "";
  answerInput.focus();
});
