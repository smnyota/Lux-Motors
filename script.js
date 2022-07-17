console.log("script running!");

const button1 = document.querySelector("#button1");

const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const status2 = document.querySelector("#status2");
const status3 = document.querySelector("#status3");
const status4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5"); 
const email1 = document.querySelector("#email1");

const zoo = document.querySelector(".container");
const button_container = document.querySelector("#button-container1");
console.log(zoo);






button1.addEventListener("click" , e => {

  console.log("button 1 clicked");
  alert("Rolls Royce Phantom Orchid Added to Cart. Proceed to the bottom of the page for Checkout!");
})

button2.addEventListener("click", e => {
  console.log("button 2 clicked");
    alert("Ferrari LaFerrari Added to Cart. Proceed to the bottom of the page for Checkout!");
})




button3.addEventListener("click", e => {
  console.log("button 3 clicked");
    alert("Mercedes-Benz G-Class added to Cart. Proceed to the bottom of the page for Checkout!");
})


button4.addEventListener("click", (e) => {
  console.log("button 4 pressed!");
  zoo.innerHTML = `<h1 class="title">Thank you for shopping with Lux Motors!<br>Your order details have been emailed to you!<br><br></h1>`;
});



button5.addEventListener("click", e => {
 console.log("button 5 is clicked!");
  alert("GTR added to Cart. Proceed to the bottom of the page for Checkout!");
})


email1.addEventListener("click", e => {
  console.log("email1 button clicked");
    alert("Name and Email Stored. Click the Checkout Button to Proceed!");
})