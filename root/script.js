const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const resultReturn = (str) => {
  const reversedString = str
    .split("")
    .reverse()
    .join("");

    if (str === reversedString) {
      result.innerText = `${str} is a palindrome.`
    }
};

checkButton.addEventListener("click", () => {
  const str = input.value
  if (input.value === '') {
    alert("Please input a value")
  }
  resultReturn(str);
})