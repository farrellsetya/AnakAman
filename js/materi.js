
const daftarMateri = {
    1: {
        kategori: "Game Online",
        judul: "Bahaya Interaksi dengan Orang Asing dalam Game",
        isi: `
            <p>Game online memungkinkan anak berkomunikasi dengan pemain lain.
            Namun, tidak semua pemain memiliki niat baik.</p>

            <h3>Risiko yang perlu diketahui</h3>
            <p>Orang asing dapat berpura-pura menjadi teman, meminta informasi
            pribadi, mengajak berpindah ke aplikasi lain, atau menawarkan
            hadiah untuk mendapatkan kepercayaan anak.</p>

            <h3>Yang dapat dilakukan orang tua</h3>
            <p>Ajarkan anak untuk tidak membagikan identitas pribadi,
            tidak menerima ajakan bertemu, serta segera bercerita jika
            mengalami percakapan yang membuat tidak nyaman.</p>
        `
    },

    2: {
        kategori: "YouTube",
        judul: "Konten Tidak Pantas untuk Anak",
        isi: `
            <p>Tidak semua video yang tersedia di internet sesuai
            dengan usia dan perkembangan anak.</p>

            <h3>Risiko yang perlu diketahui</h3>
            <p>Anak dapat menemukan kekerasan, bahasa kasar,
            tantangan berbahaya, atau konten yang tidak sesuai usia.</p>

            <h3>Yang dapat dilakukan orang tua</h3>
            <p>Gunakan YouTube Kids atau fitur pengawasan keluarga,
            aktifkan pembatasan konten sesuai kebutuhan, dan
            dampingi anak ketika menonton.</p>
        `
    },

    3: {
        kategori: "Privasi Digital",
        judul: "Melindungi Data Pribadi Anak di Internet",
        isi: `
            <p>Data pribadi adalah informasi yang dapat digunakan
            untuk mengenali seseorang.</p>

            <h3>Contoh data pribadi</h3>
            <p>Nama lengkap, alamat rumah, nomor telepon,
            nama sekolah, lokasi, dan foto identitas.</p>

            <h3>Yang dapat dilakukan orang tua</h3>
            <p>Periksa pengaturan privasi akun anak dan ajarkan
            mereka agar tidak membagikan informasi pribadi
            kepada orang yang tidak dikenal.</p>
        `
    },

    4: {
        kategori: "Cyberbullying",
        judul: "Mengenali Tanda Anak Mengalami Perundungan Online",
        isi: `
            <p>Cyberbullying adalah tindakan menyakiti atau
            mempermalukan seseorang melalui media digital.</p>

            <h3>Tanda-tanda yang perlu diperhatikan</h3>
            <p>Anak tiba-tiba tidak ingin menggunakan HP,
            terlihat sedih setelah membaca pesan, menarik diri,
            atau takut membuka media sosial.</p>

            <h3>Yang dapat dilakukan orang tua</h3>
            <p>Dengarkan cerita anak tanpa menghakimi,
            simpan bukti percakapan, blokir akun pelaku,
            dan laporkan jika diperlukan.</p>
        `
    },

    5: {
        kategori: "Penipuan Digital",
        judul: "Waspada Penipuan Top-Up dan Hadiah Game",
        isi: `
            <p>Penipuan dalam game sering menggunakan tawaran
            hadiah gratis, diskon top-up, atau item langka.</p>

            <h3>Contoh modus penipuan</h3>
            <p>Pelaku meminta kata sandi, kode OTP, atau uang
            dengan alasan memberikan hadiah dalam game.</p>

            <h3>Yang dapat dilakukan orang tua</h3>
            <p>Gunakan layanan top-up resmi, jangan pernah
            membagikan kode OTP, dan periksa transaksi
            sebelum melakukan pembayaran.</p>
        `
    },

    6: {
        kategori: "Media Sosial",
        judul: "Menggunakan Media Sosial dengan Aman",
        isi: `
            <p>Media sosial dapat menjadi tempat anak belajar
            dan berkomunikasi, tetapi juga memiliki risiko.</p>

            <h3>Risiko yang perlu diketahui</h3>
            <p>Penyebaran foto tanpa izin, akun palsu,
            komentar negatif, dan interaksi dengan orang asing.</p>

            <h3>Yang dapat dilakukan orang tua</h3>
            <p>Atur akun menjadi privat jika sesuai,
            periksa siapa yang dapat menghubungi anak,
            dan ajarkan anak berpikir sebelum mengunggah sesuatu.</p>
        `
    }
};

function bukaMateri(id) {
    const materi = daftarMateri[id];

    if (!materi) return;

    document.getElementById("detailKategori").textContent = materi.kategori;
    document.getElementById("detailJudul").textContent = materi.judul;
    document.getElementById("detailIsi").innerHTML = materi.isi;

    document.getElementById("materiModal").classList.add("show");
}

function tutupMateri() {
    document.getElementById("materiModal").classList.remove("show");
}

document.getElementById("materiModal").addEventListener("click", function(event) {
    if (event.target === this) {
        tutupMateri();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        tutupMateri();
    }
});
