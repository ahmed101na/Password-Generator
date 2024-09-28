// Get references to the button and serial elements
let bntEl = document.querySelector(".generate");
let serialEl = document.querySelector(".serial");

// Define a click event handler for the button
bntEl.onclick = function () {
  // Define a string containing all possible characters for the serial
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  // Set the desired length of the serial
  let charsCount = 10;

  // Initialize an empty string to store the generated serial
  let randomSerial = "";

  // Generate the serial by randomly selecting characters from the defined set
  for (let i = 0; i < charsCount; i++) {
    randomSerial += characters[Math.floor(Math.random() * characters.length)];
  }

  // Update the inner HTML of the serial element with the generated serial
  serialEl.innerHTML = randomSerial;
};

// Select the copy button by finding the element with the class "copy"
const copyButton = document.querySelector(".copy");

// Select the element containing the text to be copied by finding the element with the class "serial"
const textToCopy = document.querySelector(".serial");

// Add an event listener to the copy button to trigger a function when clicked
copyButton.addEventListener("click", () => {
  // Use the clipboard API to copy the text from the "textToCopy" element to the clipboard
  navigator.clipboard
    .writeText(textToCopy.textContent) // Copy the text content from the element
    .then(() => {
      // If the copy is successful, log a success message to the console
      console.log("Text copied successfully!");
    })
    .catch((err) => {
      // If there's an error copying, log the error message to the console
      console.error("Error copying text:", err);
    });
});
