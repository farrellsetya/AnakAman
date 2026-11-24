const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  const message = document.getElementById("loginMessage");

  message.className = "auth-message";

  let users = [];

  try {
    users = JSON.parse(localStorage.getItem("anakaman_users")) || [];
  } catch (error) {
    users = [];
  }

  const user = users.find(item =>
    item.email === email && item.password === password
  );

  if (!user) {
    tampilkanPesan("Email atau password yang kamu masukkan salah.", "error");
    return;
  }

  const session = {
    id: user.id,
    nama: user.nama,
    email: user.email,
    role: user.role
  };

  localStorage.setItem("anakaman_session", JSON.stringify(session));

  tampilkanPesan("Login berhasil! Mengarahkan ke dashboard...", "success");

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);
});

function tampilkanPesan(teks, tipe) {
  const message = document.getElementById("loginMessage");
  message.textContent = teks;
  message.className = `auth-message ${tipe}`;
}
