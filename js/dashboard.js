// ================================
// DASHBOARD ANAKAMAN
// ================================

const TOTAL_CHECKLIST = 12;

const checklistKey = "anakaman_checklist";
const quizKey = "anakaman_kuis";

// Mengambil data dari localStorage
function ambilData(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
}

const dataChecklist = ambilData(checklistKey) || [];
const dataKuis = ambilData(quizKey);

// Menghitung progres checklist
const jumlahChecklist = Array.isArray(dataChecklist)
  ? dataChecklist.length
  : 0;

const persenChecklist = Math.min(
  100,
  Math.round((jumlahChecklist / TOTAL_CHECKLIST) * 100)
);

// Mengambil data kuis
const sudahKuis = dataKuis && typeof dataKuis.skor === "number";
const skorKuis = sudahKuis ? dataKuis.skor : null;
const jumlahBenar = sudahKuis ? (dataKuis.benar || 0) : 0;
const jumlahSalah = sudahKuis ? (dataKuis.salah || 0) : 0;

// Menghitung skor aktivitas sementara
const komponenSkor = [];

if (jumlahChecklist > 0) {
  komponenSkor.push(persenChecklist);
}

if (sudahKuis) {
  komponenSkor.push(skorKuis);
}

const skorKeseluruhan = komponenSkor.length > 0
  ? Math.round(
      komponenSkor.reduce((total, nilai) => total + nilai, 0) /
      komponenSkor.length
    )
  : 0;


// ================================
// MENAMPILKAN TANGGAL
// ================================

function tampilkanTanggal() {
  const tanggal = new Date();

  document.getElementById("tanggalHariIni").textContent =
    tanggal.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
}


// ================================
// MENAMPILKAN SKOR
// ================================

function tampilkanSkor() {
  document.getElementById("overallScore").textContent =
    skorKeseluruhan;

  document.getElementById("scoreCircleText").textContent =
    skorKeseluruhan + "%";

  const lingkaran = document.getElementById("scoreCircle");

  lingkaran.style.background =
    `conic-gradient(#91B69A ${skorKeseluruhan * 3.6}deg, #385747 0deg)`;

  if (komponenSkor.length === 0) {
    document.getElementById("scoreDescription").textContent =
      "Mulai checklist dan kuis untuk melihat perkembangan.";
  } else if (skorKeseluruhan >= 80) {
    document.getElementById("scoreDescription").textContent =
      "Bagus! Terus pertahankan kebiasaan digital yang aman.";
  } else if (skorKeseluruhan >= 50) {
    document.getElementById("scoreDescription").textContent =
      "Perkembangan sudah terlihat. Masih ada beberapa hal yang perlu ditingkatkan.";
  } else {
    document.getElementById("scoreDescription").textContent =
      "Ayo tingkatkan pemahaman dan langkah perlindungan digital anak.";
  }
}


// ================================
// MENAMPILKAN DATA CHECKLIST
// ================================

function tampilkanChecklist() {
  document.getElementById("checklistCount").textContent =
    `${jumlahChecklist}/${TOTAL_CHECKLIST}`;

  document.getElementById("checklistPercent").textContent =
    `${persenChecklist}% telah diselesaikan`;

  document.getElementById("detailChecklistPercent").textContent =
    persenChecklist + "%";

  document.getElementById("detailChecklistBar").style.width =
    persenChecklist + "%";

  const pesan = document.getElementById("checklistMessage");

  if (jumlahChecklist === 0) {
    pesan.textContent =
      "Belum ada checklist yang diselesaikan. Mulai periksa keamanan perangkat dan akun anak.";
  } else if (persenChecklist === 100) {
    pesan.textContent =
      "Hebat! Semua checklist keamanan sudah diselesaikan.";
  } else {
    pesan.textContent =
      `${jumlahChecklist} dari ${TOTAL_CHECKLIST} langkah sudah dilakukan. Lanjutkan checklist yang masih tersisa.`;
  }
}


// ================================
// MENAMPILKAN HASIL KUIS
// ================================

function tampilkanKuis() {
  const elemenSkor = document.getElementById("quizScore");
  const elemenDeskripsi = document.getElementById("quizDescription");
  const elemenBenar = document.getElementById("correctCount");
  const elemenSalah = document.getElementById("wrongCount");

  if (!sudahKuis) {
    elemenSkor.textContent = "Belum ada";
    elemenDeskripsi.textContent = "Belum mengerjakan kuis";
    elemenBenar.textContent = "0";
    elemenSalah.textContent = "Belum ada hasil kuis";
    return;
  }

  elemenSkor.textContent = skorKuis + "/100";
  elemenDeskripsi.textContent = "Nilai kuis terakhir";
  elemenBenar.textContent = jumlahBenar;
  elemenSalah.textContent = `${jumlahSalah} jawaban salah`;
}


// ================================
// REKOMENDASI BERDASARKAN PROGRES
// ================================

function tampilkanRekomendasi() {
  const wadah = document.getElementById("recommendationList");
  const rekomendasi = [];

  if (persenChecklist < 100) {
    rekomendasi.push({
      judul: "Lengkapi checklist keamanan",
      deskripsi: "Periksa pengaturan perangkat, privasi, dan aktivitas digital anak.",
      link: "checklist.html",
      tombol: "Lanjutkan"
    });
  }

  if (!sudahKuis || skorKuis < 80) {
    rekomendasi.push({
      judul: "Tingkatkan pemahaman keamanan digital",
      deskripsi: "Pelajari materi dan kerjakan kuis untuk menguji pemahaman.",
      link: "kuis.html",
      tombol: "Kerjakan"
    });
  }

  if (rekomendasi.length === 0) {
    rekomendasi.push({
      judul: "Pertahankan kebiasaan digital yang aman",
      deskripsi: "Tetap dampingi anak dan periksa pengaturan keamanan secara berkala.",
      link: "materi.html",
      tombol: "Pelajari"
    });
  }

  rekomendasi.push({
    judul: "Pelajari risiko di dunia digital",
    deskripsi: "Kenali risiko game online, media sosial, penipuan, dan cyberbullying.",
    link: "materi.html",
    tombol: "Baca"
  });

  wadah.innerHTML = rekomendasi.map((item, index) => `
    <div class="recommendation-item">
      <span class="recommendation-icon">${index + 1}</span>
      <div>
        <strong>${item.judul}</strong>
        <p>${item.deskripsi}</p>
      </div>
      <a href="${item.link}">${item.tombol}</a>
    </div>
  `).join("");
}


// ================================
// AKTIVITAS TERAKHIR
// ================================

function tampilkanAktivitas() {
  const wadah = document.getElementById("activityList");
  const aktivitas = [];

  if (jumlahChecklist > 0) {
    aktivitas.push({
      judul: "Mengerjakan checklist keamanan",
      waktu: `${jumlahChecklist} dari ${TOTAL_CHECKLIST} langkah telah diselesaikan`
    });
  }

  if (sudahKuis) {
    let tanggalKuis = "Tanggal tidak tersedia";

    if (dataKuis.tanggal) {
      const tanggal = new Date(dataKuis.tanggal);

      if (!isNaN(tanggal.getTime())) {
        tanggalKuis = tanggal.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
      }
    }

    aktivitas.push({
      judul: "Menyelesaikan kuis keamanan digital",
      waktu: `Nilai ${skorKuis}/100 • ${tanggalKuis}`
    });
  }

  if (aktivitas.length === 0) {
    wadah.innerHTML = `
      <p class="empty-activity">
        Belum ada aktivitas. Mulai checklist atau kerjakan kuis terlebih dahulu.
      </p>
    `;
    return;
  }

  wadah.innerHTML = aktivitas.map(item => `
    <div class="activity-item">
      <span class="activity-dot"></span>
      <div>
        <strong>${item.judul}</strong>
        <span>${item.waktu}</span>
      </div>
    </div>
  `).join("");
}


// ================================
// JALANKAN DASHBOARD
// ================================

tampilkanTanggal();
tampilkanSkor();
tampilkanChecklist();
tampilkanKuis();
tampilkanRekomendasi();
tampilkanAktivitas();
