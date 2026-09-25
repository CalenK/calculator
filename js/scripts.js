function saySomething(whatToSay) {
  window.alert(whatToSay);
}

function add(number1, number2) {
  return number1 + number2;
}

const result = add(3, 5)
const outputText = "The sum is " + result + ".";
saySomething(outputText);