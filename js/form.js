const listaInputs = [
  document.querySelector("#name"),
  document.querySelector("#email"),
  document.querySelector("#message"),
];

listaInputs.forEach((input) => {
  input.addEventListener("input", addBorder);
});

function addBorder(e) {
  if (e.target.value.length < 2) {
    e.target.classList.remove("correct");
    e.target.classList.add("error");
  } else if (e.target.value.length > 2) {
    e.target.classList.remove("error");
    e.target.classList.add("correct");
  }
}
