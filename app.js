const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = getSumOfBirthDate(dob);
  console.log(sum);
  compareValues(sum, luckyNumber.value);
}

function compareValues(sum, luckyNumber) {
  let message = "Please enter both the fields first, yo 🙄";
  if (sum && luckyNumber) {
    if (sum % luckyNumber === 0) {
      console.log("lucky");
      message = "Your birthday is lucky 🚀";
    } else {
      console.log("NOT lucky");
      message = "Your birthday is not lucky 😕";
    }
  }
  outputBox.innerText = message;
  outputBox.style.display = "block";
}

function getSumOfBirthDate(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkBtn.addEventListener("click", checkBirthDateIsLucky);
