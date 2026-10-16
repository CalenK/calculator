function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const number1 = parseInt(document.querySelector("input#number1").value);
    const number2 = parseInt(document.querySelector("input#number2").value);
    const math = document.querySelector('input[name="math"]:checked').value;

    if (math === "adding") {
      document.querySelector("span#equation").innerText = add(number1, number2);
    } else if (math === "subtracting") {
      document.querySelector("span#equation").innerText = subtract(number1, number2);
    } else if (math === "multiplying") {
      document.querySelector("span#equation").innerText = multiply(number1, number2);
    } else if (math === "dividing") {
      document.querySelector("span#equation").innerText = divide(number1, number2);
    }

    document.querySelector("div#results").removeAttribute("class");
  });

  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function() {
    document.getElementById("number1").value = null;
    document.getElementById("number2").value = null;
  });
});