const nameSubmit = document.querySelector(".submit-name");
const introdSubmit = document.querySelector(".submit-introd");

const yieldSubmit = document.querySelector(".submit-yield");
const quartersSubmit = document.querySelector(".submit-quarters");
const amountSubmit = document.querySelector(".submit-amount");
const yearsSubmit = document.querySelector(".submit-years");
const calcWrap = document.querySelector(".calculate-wrap");

// Luam valoarea din form
const getValue = function (form) {
  return Number(document.querySelector(form).value);
};

// Afisam ceva
const showCard = (card) => {
  document.querySelector(card).style.display = "block";
};

//Ascundem ceva
const hideCard = (card) => {
  document.querySelector(card).style.display = "none";
};

//Introducerea numelui
nameSubmit.addEventListener("click", function () {
  const name = document.querySelector(".meet-form").value;

  hideCard(".meet-card");
  showCard(".introd-card");

  document.querySelector(
    ".introd-text"
  ).textContent = `Hello, ${name}, and thank you for using our app! \ 
  We are going to show you what compound interest means and \
  how much money you will make according to certain conditions.`;
});

//Afisam cele 4 cartonase
introdSubmit.addEventListener("click", function () {
  hideCard(".introd-card");
  calcWrap.style.display = "block";
});

//////////////////////////////////////

let yieldValue = 0;
let quartersValue = 0;
let amountValue = 0;
let yearsValue = 0;

// Dividend submit
yieldSubmit.addEventListener("click", function () {
  yieldValue = document.querySelector(".dividend-form").value;
  hideCard(".card-content1");
  document.querySelector(".submitted-text1").textContent = yieldValue;
  showCard(".submitted-text1");
});

// Quarters submit

quartersSubmit.addEventListener("click", function () {
  quartersValue = document.querySelector(".quarters-form").value;
  hideCard(".card-content2");
  document.querySelector(".submitted-text2").textContent = quartersValue;
  showCard(".submitted-text2");
});

// Amount submit
amountSubmit.addEventListener("click", function () {
  amountValue = document.querySelector(".amount-form").value;
  hideCard(".card-content3");
  document.querySelector(".submitted-text3").textContent = amountValue;
  showCard(".submitted-text3");
});

// Years submit
yearsSubmit.addEventListener("click", function () {
  yearsValue = document.querySelector(".years-form").value;
  hideCard(".card-content4");
  document.querySelector(".submitted-text4").textContent = yearsValue;
  showCard(".submitted-text4");
});

document.querySelector(".calculate").addEventListener("click", function () {
  // Partial dividend
  const partialYield = yieldValue / quartersValue;

  // Amount for one quarter
  const quarterAmount = amountValue * (12 / quartersValue);

  let totalAmount = 0;
  for (let i = 1; i <= yearsValue * quartersValue; i++) {
    totalAmount += quarterAmount;
    totalAmount += totalAmount * (partialYield / 100);
  }

  const profit = totalAmount - amountValue * yearsValue * 12;
  console.log(yearsValue);
  document.querySelector(
    ".result-card"
  ).textContent = `If you invest ${amountValue} \
  every month, after ${yearsValue} years, you will have ${Math.trunc(
    totalAmount
  )},\
  with a profit of ${Math.trunc(profit)}`;
  hideCard(".calculate-wrap");
  showCard(".result-card");
});

// submittedValue = document.querySelector(".submit-amount").value;

// hideCard(".card-content");
// document.querySelector(".submitted-text").textContent = submittedValue;
// showCard(".submitted-text");

// Function to return value from the form

// document.querySelector(".calculate").addEventListener("click", function () {
//   // Values from forms
//   const yield = getValue("#dividend");
//   const quarters = getValue("#quarters");
//   const monthlyAmount = getValue("#amount");
//   const years = getValue("#years");

//   // Percent for each quarter
//   const partialDividend = yield / quarters;

//   // Total amount for one quarter
//   const quarterAmount = monthlyAmount * (12 / quarters);

//   let totalAmount = 0;
//   for (let i = 1; i <= years * quarters; i++) {
//     totalAmount = totalAmount + quarterAmount;
//     totalAmount = totalAmount + totalAmount * (partialDividend / 100);
//   }

//   const profit = totalAmount - monthlyAmount * years * 12;

//   document.querySelector(
//     ".result"
//   ).textContent = `If you invest ${monthlyAmount} \
//   every month, after ${years} years, you will have ${Math.trunc(totalAmount)},\
//   with a profit of ${Math.trunc(profit)}`;
// });
