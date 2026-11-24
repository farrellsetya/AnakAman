
const checks = document.querySelectorAll(".security-check");

const STORAGE_KEY = "anakaman_checklist";

function ambilData() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function simpanData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function updateProgress() {
    const total = checks.length;
    const selesai = document.querySelectorAll(
        ".security-check:checked"
    ).length;

    const persen = Math.round((selesai / total) * 100);

    document.getElementById("progressPercent").textContent =
        persen + "%";

    document.getElementById("completedCount").textContent =
        `${selesai} dari ${total} selesai`;

    document.getElementById("progressFill").style.width =
        persen + "%";

    let status = "Belum dimulai";

    if (persen === 100) {
        status = "Semua selesai";
    } else if (persen >= 75) {
        status = "Hampir selesai";
    } else if (persen >= 25) {
        status = "Sedang berjalan";
    }

    document.getElementById("progressStatus").textContent = status;
}

function simpanChecklist() {
    const data = [];

    checks.forEach(check => {
        if (check.checked) {
            data.push(check.dataset.id);
        }
    });

    simpanData(data);
}

function selesaiChecklist() {
    simpanChecklist();
    updateProgress();

    const selesai = document.querySelectorAll(
        ".security-check:checked"
    ).length;

    alert(
        `Progres berhasil disimpan!\n\n` +
        `${selesai} dari ${checks.length} checklist telah selesai.`
    );
}

function muatChecklist() {
    const data = ambilData();

    checks.forEach(check => {
        check.checked = data.includes(check.dataset.id);
    });

    updateProgress();
}

checks.forEach(check => {
    check.addEventListener("change", () => {
        simpanChecklist();
        updateProgress();
    });
});

muatChecklist();
