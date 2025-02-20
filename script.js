// query select some elements by id

const input = document.querySelector("#name-input") // can use any CSS selector syntax here
const button = document.querySelector("#submit-button")
const greeting = document.querySelector("#greeting")
const pTag = document.querySelector("#current-key")

button.addEventListener('click', () => {
    const name = input.value; // grabbing value from text box
    greeting.innerHTML = `Hello, ${name}!`; //reassign text in paragraph element
})

document.addEventListener("keydown", function(event) {
    console.log(event)
    pTag.innerHTML = `Key: ${event.key}`    // change paragraph element to key that was pressed
})