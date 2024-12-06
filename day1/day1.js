// document.querySelector("html").addEventListener("click", () => {
//   alert("Ouch! Stop poking me!");
// });

//get and set method in js and how to bring dynamic nature to them...
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./img1.jpg") {
    myImage.setAttribute("src", "./img2.jpg");
  } else {
    myImage.setAttribute("src", "./img1.jpg");
  }
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
myButton.onclick = () => {
  setUserName();
};