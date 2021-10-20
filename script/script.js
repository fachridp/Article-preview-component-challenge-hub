const shareBtn = document.getElementById("share-btn");
const containerShared = document.querySelector(".active");
const shareBtnRight = document.getElementById("share-btn-right");

shareBtn.addEventListener("click", function () {
  containerShared.classList.toggle("active");
});

shareBtnRight.addEventListener("click", function () {
  containerShared.classList.toggle("active");
});
