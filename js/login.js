
const square = document.getElementById("square");
const frontSide = document.getElementById("frontSide");
const rightSide = document.getElementById("rightSide");
const leftSide = document.getElementById("leftSide");

frontSide.addEventListener("click", () => {
    frontSide.style.display = "none";
    rightSide.style.display = "block";
    leftSide.style.display = "block";
    square.style.transform = "rotate3d(0, 0, 0, 90deg)";
    document.title = "Login page";
});

rightSide.addEventListener("click", () => {
    rightSide.style.display = "none";
    frontSide.style.display = "block";
    leftSide.style.display = "block";
    square.style.transform = "rotate3d(0, -1, 0, 90deg)";
    document.title = "Sign up page";
});

leftSide.addEventListener("click", () => {
    leftSide.style.display = "none";
    frontSide.style.display = "block";
    rightSide.style.display = "none";
    square.style.transform = "rotate3d(0, 1, 0, 90deg)";
    document.title = "Forgot password page";
});