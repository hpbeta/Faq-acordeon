const questions = document.querySelectorAll(".question-item");

questions.forEach(question => {
  question.addEventListener("click", () => {
    const itemShow = document.querySelector(".show");
    itemShow.classList.remove("show");
    question.classList.add("show");
  });
});
