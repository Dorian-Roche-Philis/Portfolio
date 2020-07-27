const model = () => {
var modal = document.querySelector(".modal");
var container = modal.querySelector(".container");

document.querySelector("button").addEventListener("click", function (e) {
  modal.classList.remove("hidden")
});

document.querySelector(".modal").addEventListener("click", function (e) {
  if (e.target !== modal && e.target !== container) return;
  modal.classList.add("hidden");
});
}
export { model };
