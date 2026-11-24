const daftarSoal = [
    {
        kategori: "Game Online",
        pertanyaan: "Anak Anda diajak berteman oleh orang asing dalam game online. Apa yang sebaiknya dilakukan?",
        pilihan: [
            "Membiarkan anak berbagi informasi pribadi",
            "Mengajarkan anak untuk berhati-hati dan tidak membagikan data pribadi",
            "Meminta anak langsung bertemu orang tersebut",
            "Membiarkan semua percakapan tanpa pengawasan"
        ],
        jawaban: 1,
        pembahasan: "Anak perlu memahami bahwa orang yang dikenal di internet belum tentu dapat dipercaya. Jangan membagikan informasi pribadi kepada orang asing."
    },
    {
        kategori: "Privasi Digital",
        pertanyaan: "Informasi apa yang tidak boleh dibagikan anak kepada orang asing di internet?",
        pilihan: [
            "Nama lengkap, alamat rumah, dan nomor telepon",
            "Film kartun favorit",
            "Warna kesukaan",
            "Hobi bermain"
        ],
        jawaban: 0,
        pembahasan: "Nama lengkap, alamat, dan nomor telepon termasuk informasi pribadi yang harus dilindungi."
    },
    {
        kategori: "YouTube",
        pertanyaan: "Bagaimana cara mengurangi risiko anak menonton konten yang tidak sesuai usia?",
        pilihan: [
            "Membiarkan anak menonton semua video",
            "Menghapus seluruh aplikasi video",
            "Mengaktifkan pembatasan konten dan mendampingi anak",
            "Memberikan HP tanpa pengawasan"
        ],
        jawaban: 2,
        pembahasan: "Orang tua dapat memanfaatkan fitur pembatasan konten dan pendampingan saat anak menonton."
    },
    {
        kategori: "Cyberbullying",
        pertanyaan: "Anak terlihat sedih setelah menerima pesan dari teman di media sosial. Apa tindakan terbaik?",
        pilihan: [
            "Memarahi anak",
            "Mengabaikan perubahan perilakunya",
            "Meminta anak menghapus semua akun",
            "Mengajak anak bercerita dan mendengarkan tanpa menghakimi"
        ],
        jawaban: 3,
        pembahasan: "Komunikasi terbuka membantu anak merasa aman untuk bercerita ketika mengalami perundungan online."
    },
    {
        kategori: "Penipuan Digital",
        pertanyaan: "Seseorang menawarkan hadiah game gratis dengan meminta kode OTP anak. Apa yang harus dilakukan?",
        pilihan: [
            "Memberikan kode OTP",
            "Menolak dan tidak membagikan kode OTP",
            "Mengirimkan kata sandi akun",
            "Mencoba mengikuti instruksi"
        ],
        jawaban: 1,
        pembahasan: "Kode OTP bersifat rahasia. Jangan pernah membagikannya kepada siapa pun."
    },
    {
        kategori: "Media Sosial",
        pertanyaan: "Apa manfaat mengatur akun media sosial anak menjadi privat?",
        pilihan: [
            "Semua orang dapat melihat aktivitas anak",
            "Anak bebas menerima semua pesan",
            "Membantu membatasi orang yang dapat melihat konten anak",
            "Menghilangkan seluruh risiko internet"
        ],
        jawaban: 2,
        pembahasan: "Pengaturan privat membantu mengontrol siapa yang dapat melihat unggahan dan informasi anak, meskipun bukan perlindungan yang sempurna."
    },
    {
        kategori: "Keamanan Perangkat",
        pertanyaan: "Mengapa orang tua perlu menggunakan fitur kontrol orang tua?",
        pilihan: [
            "Untuk membantu mengelola aktivitas dan penggunaan perangkat anak",
            "Agar anak tidak bisa belajar menggunakan internet",
            "Untuk menghapus semua aplikasi",
            "Agar perangkat selalu terkunci"
        ],
        jawaban: 0,
        pembahasan: "Kontrol orang tua membantu mengelola waktu layar, konten, dan aktivitas digital anak sesuai kebutuhan."
    },
    {
        kategori: "Penipuan Digital",
        pertanyaan: "Anak menerima tautan hadiah game dari akun tidak dikenal. Apa yang sebaiknya dilakukan?",
        pilihan: [
            "Langsung membuka tautan",
            "Mengisi semua data yang diminta",
            "Meneruskan tautan ke teman",
            "Tidak membuka tautan dan memeriksa kebenarannya bersama orang tua"
        ],
        jawaban: 3,
        pembahasan: "Tautan mencurigakan bisa digunakan untuk pencurian akun atau data. Jangan membukanya sebelum dipastikan aman."
    },
    {
        kategori: "Privasi Digital",
        pertanyaan: "Mengapa izin aplikasi perlu diperiksa secara berkala?",
        pilihan: [
            "Agar aplikasi menjadi lebih banyak",
            "Untuk memastikan aplikasi hanya mengakses data yang diperlukan",
            "Agar semua aplikasi mendapat akses kamera",
            "Supaya aplikasi berjalan tanpa batas"
        ],
        jawaban: 1,
        pembahasan: "Pemeriksaan izin aplikasi membantu mengurangi akses yang tidak diperlukan terhadap data pribadi anak."
    },
    {
        kategori: "Pendampingan",
        pertanyaan: "Apa kebiasaan terbaik untuk membangun keamanan digital anak?",
        pilihan: [
            "Melarang anak menggunakan internet selamanya",
            "Memberikan HP tanpa aturan",
            "Membangun komunikasi terbuka dan mendampingi penggunaan internet",
            "Mengabaikan aktivitas digital anak"
        ],
        jawaban: 2,
        pembahasan: "Pendampingan dan komunikasi terbuka membantu anak memahami risiko serta berani meminta bantuan ketika mengalami masalah."
    }
];

let nomorSoal = 0;
let jumlahBenar = 0;
let jawabanPengguna = [];
let sudahMenjawab = false;

function mulaiKuis() {
    nomorSoal = 0;
    jumlahBenar = 0;
    jawabanPengguna = [];

    document.getElementById("kuisIntro").style.display = "none";
    document.getElementById("quizResult").style.display = "none";
    document.getElementById("quizBox").style.display = "block";

    tampilkanSoal();
}

function tampilkanSoal() {
    const soal = daftarSoal[nomorSoal];

    sudahMenjawab = false;

    document.getElementById("questionNumber").textContent =
        `Pertanyaan ${nomorSoal + 1} dari ${daftarSoal.length}`;

    document.getElementById("questionCategory").textContent =
        soal.kategori;

    document.getElementById("questionText").textContent =
        soal.pertanyaan;

    document.getElementById("quizProgressFill").style.width =
        `${((nomorSoal + 1) / daftarSoal.length) * 100}%`;

    const pilihanContainer = document.getElementById("answerOptions");
    pilihanContainer.innerHTML = "";

    soal.pilihan.forEach((pilihan, index) => {
        const button = document.createElement("button");

        button.className = "answer-option";
        button.textContent =
            `${String.fromCharCode(65 + index)}. ${pilihan}`;

        button.onclick = () => pilihJawaban(index, button);

        pilihanContainer.appendChild(button);
    });

    const feedback = document.getElementById("quizFeedback");
    feedback.className = "quiz-feedback";
    feedback.textContent = "";

    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = true;
    nextButton.textContent =
        nomorSoal === daftarSoal.length - 1
            ? "Lihat Hasil →"
            : "Jawaban Selanjutnya →";
}

function pilihJawaban(index, button) {
    if (sudahMenjawab) return;

    sudahMenjawab = true;

    const soal = daftarSoal[nomorSoal];
    const benar = index === soal.jawaban;

    jawabanPengguna.push(index);

    if (benar) {
        jumlahBenar++;
    }

    document.querySelectorAll(".answer-option").forEach((option, i) => {
        option.disabled = true;

        if (i === soal.jawaban) {
            option.classList.add("correct");
        }

        if (i === index && !benar) {
            option.classList.add("wrong");
        }
    });

    const feedback = document.getElementById("quizFeedback");

    feedback.className =
        `quiz-feedback show ${benar ? "success" : "error"}`;

    feedback.innerHTML = `
        <strong>${benar ? "✓ Jawaban Benar!" : "✕ Jawaban Kurang Tepat"}</strong>
        <p>${soal.pembahasan}</p>
    `;

    document.getElementById("nextButton").disabled = false;
}

function lanjutPertanyaan() {
    if (!sudahMenjawab) return;

    nomorSoal++;

    if (nomorSoal < daftarSoal.length) {
        tampilkanSoal();
    } else {
        tampilkanHasil();
    }
}

function tampilkanHasil() {
    const total = daftarSoal.length;
    const salah = total - jumlahBenar;
    const skor = Math.round((jumlahBenar / total) * 100);

    document.getElementById("quizBox").style.display = "none";
    document.getElementById("quizResult").style.display = "block";

    document.getElementById("resultScore").textContent = skor;
    document.getElementById("correctCount").textContent = jumlahBenar;
    document.getElementById("wrongCount").textContent = salah;

    let pesan = "";
    let rekomendasi = "";

    if (skor >= 80) {
        pesan = "Bagus! Pemahaman Anda tentang keamanan digital sudah baik.";
        rekomendasi = "Pertahankan kebiasaan baik Anda. Terus dampingi anak dan periksa pengaturan keamanan secara berkala.";
    } else if (skor >= 60) {
        pesan = "Cukup baik! Masih ada beberapa hal yang perlu dipelajari.";
        rekomendasi = "Pelajari kembali materi tentang privasi digital, penipuan online, dan pendampingan anak.";
    } else {
        pesan = "Anda masih perlu meningkatkan pemahaman keamanan digital.";
        rekomendasi = "Mulailah dengan membaca seluruh materi AnakAman dan praktikkan checklist keamanan bersama keluarga.";
    }

    document.getElementById("resultMessage").textContent = pesan;
    document.getElementById("recommendationText").textContent = rekomendasi;

    localStorage.setItem("anakaman_kuis", JSON.stringify({
        skor: skor,
        benar: jumlahBenar,
        salah: salah,
        tanggal: new Date().toISOString()
    }));
}

function ulangiKuis() {
    mulaiKuis();
}

function kembaliIntro() {
    const yakin = confirm("Apakah Anda yakin ingin keluar dari kuis? Progres kuis saat ini tidak akan disimpan.");

    if (!yakin) return;

    document.getElementById("quizBox").style.display = "none";
    document.getElementById("kuisIntro").style.display = "block";
}
 
// Simulasi kasus
function jawabSimulasi(button, benar) {
    const buttons = document.querySelectorAll(".simulation-options button");

    if (document.getElementById("simulationFeedback").classList.contains("show")) {
        return;
    }

    buttons.forEach(item => {
        item.disabled = true;
    });

    button.classList.add(benar ? "correct" : "wrong");

    const feedback = document.getElementById("simulationFeedback");

    feedback.className =
        `simulation-feedback show ${benar ? "success" : "error"}`;

    feedback.innerHTML = benar
        ? "<strong>✓ Tepat sekali!</strong><p>Kode OTP merupakan informasi rahasia. Jangan pernah membagikannya kepada orang lain. Blokir akun mencurigakan dan laporkan jika diperlukan.</p>"
        : "<strong>✕ Jawaban belum tepat.</strong><p>Jangan pernah memberikan kode OTP kepada orang lain. Tolak tawaran tersebut dan blokir akun yang mencurigakan.</p>";
}
