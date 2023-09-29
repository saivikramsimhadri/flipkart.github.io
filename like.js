// var heartButton = document.getElementById("like-button");
// console.log(heartButton);

// heartButton.addEventListener("click", (e) => {
//   heartButton.classList.toggle("like-button-red");
// });
var toggleLike = (e, text) => {
  console.log(e);
  // var divToRemove = document.getElementById(text);
  // if (divToRemove) {
  //   divToRemove.remove();
  // }

  e.target.classList.toggle("like-button-red");
};
var removeDiv = (e, text) => {
  e.target.classList.toggle("del-button-red");
  var divToRemove = document.getElementById(text);
  if (divToRemove) {
    divToRemove.remove();
  }
};
