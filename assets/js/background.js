const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];
const bgContainerImg = document.querySelector(".background");

const bgImg = document.createElement("img");

bgImg.src = `assets/img/${choseImage}`;
bgContainerImg.appendChild(bgImg);
