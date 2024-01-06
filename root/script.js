const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const resultReturn = (str) => {
  const reNonAlpha = /[^a-zA-Z\d]/g;
  const strAplhanumOnly = str.replace(reNonAlpha, '');
  console.log(strAplhanumOnly);
  
  const reversedString = strAplhanumOnly
    .split("")
    .reverse()
    .join("");

    if (strAplhanumOnly.toLowerCase() === reversedString.toLowerCase()) {
      result.innerText = `${str} is a palindrome.`
    } else {
      result.innerText = `${str} is not a palindrome.`
    }
};

checkButton.addEventListener("click", () => {
  const str = input.value
  if (input.value === '') {
    alert("Please input a value")
  }
  resultReturn(str);
})