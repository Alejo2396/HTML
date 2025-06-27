document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
      if (pass === "adso2993013") {
        localStorage.setItem("usuario", user);
        window.location.href = "dashboard.html";
      } else {
        alert("Credenciales incorrectas.");
      }
    });
  }

  const salirBtn = document.getElementById("salirBtn");
  if (salirBtn) {
    salirBtn.addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "index.html";
    });
  }

  const nombreUsuario = document.getElementById("nombreUsuario");
  if (nombreUsuario) {
    const u = localStorage.getItem("usuario");
    if (!u) {
      window.location.href = "index.html";
    } else {
      nombreUsuario.textContent = u;
    }
  }
});