const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const konfirmasiPassword =
    document.getElementById("konfirmasiPassword").value;

  const message = document.getElementById("registerMessage");

  message.className = "auth-message";

  if (password.length < 8) {
    tampilkanPesan("Password minimal 8 karakter.", "error");
    return;
  }

  if (password !== konfirmasiPassword) {
    tampilkanPesan("Konfirmasi password tidak sesuai.", "error");
    return;
  }

  let users = [];

  try {
    users = JSON.parse(localStorage.getItem("anakaman_users")) || [];
  } catch (error) {
    users = [];
  }

  const emailTerdaftar = users.some(user => user.email === email);

  if (emailTerdaftar) {
    tampilkanPesan("Email sudah terdaftar. Silakan masuk.", "error");
    return;
  }

  const penggunaBaru = {
    id: Date.now(),
    nama: nama,
    email: email,
    password: password,
    role: "parent"
  };

  users.push(penggunaBaru);

  localStorage.setItem("anakaman_users", JSON.stringify(users));

  tampilkanPesan(
    "Pendaftaran berhasil! Kamu akan diarahkan ke halaman login.",
    "success"
  );

  registerForm.reset();

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1200);
});

function tampilkanPesan(teks, tipe) {
  const message = document.getElementById("registerMessage");
  message.textContent = teks;
  message.className = `auth-message ${tipe}`;
}
