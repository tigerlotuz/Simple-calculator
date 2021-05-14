const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
let equation = "";
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleClick(e);
  });
});
function handleClick(btn) {
  let text = btn.target.outerText;
  input.value = "";
  if (text === "=") {
    // run calcfunction
    const results = calc(equation);
    input.value = results;
  } else if (text === "C") {
    //clear input
    input.value = "";
    equation = "";
  } else {
    equation += text;
    input.value += equation;
  }
}
function calc(equation) {
  let res = eval(equation);
  return res.toString();
}
