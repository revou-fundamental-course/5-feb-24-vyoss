for (var i = 0; i < 150; i++) {
  let box = document.createElement("span");
  document.getElementById("container").appendChild(box);
}
let cursor = document.getElementById("cursor");
window.onmousemove = function (e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
};
