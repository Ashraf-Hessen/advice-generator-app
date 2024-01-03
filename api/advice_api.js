// Variables
const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const getAdviceBtn = document.getElementById("get-advice-btn");

// Events
window.onload = () => {
  getAdvice();
};

getAdviceBtn.onclick = getAdvice;

// Functions
function getAdvice() {
  // Unset button of get advice from error mode
  getAdviceBtn.classList.remove("error");

  // Set button of get advice on loading mode
  getAdviceBtn.classList.add("loading");

  // Fetch data
  fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json()) // Parse json data
    .then(({ slip }) => {
      // Set id of advice on element of advice number
      adviceNumber.innerText = slip.id;
      // Set text of advice on element of advice text
      adviceText.innerText = `"${slip.advice}"`;
    })
    .catch((err) => {
      // Set button of get advice on error mode
      getAdviceBtn.classList.add("error");
    })
    .finally(() => {
      // Unset button of get advice from loading mode
      getAdviceBtn.classList.remove("loading");
    });
}
