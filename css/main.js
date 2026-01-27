window.onload = function () {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("navMenu");

  btn.onclick = () => menu.classList.toggle("active");

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove("active");
    }
  });

  console.log("Ziyakha Script Active");
};
