// Data 50 Soal berdasarkan seluruh materi Hidrosfer PDF
const questions = [
    // --- BAB A: SIKLUS AIR (1-10) ---
    {
        question: "Lapisan air yang berada di bumi disebut...",
        options: ["Atmosfer", "Litosfer", "Hidrosfer", "Biosfer"],
        answer: 2
    },
    {
        question: "Ilmu pengetahuan yang mempelajari tentang air di bumi disebut...",
        options: ["Geologi", "Hidrologi", "Meteorologi", "Oseanografi"],
        answer: 1
    },
    {
        question: "Volume air di bumi diperkirakan sekitar...",
        options: ["332,5 juta mil kubik", "97 juta mil kubik", "200 juta mil kubik", "12 juta mil kubik"],
        answer: 0
    },
    {
        question: "Berapa persentase air di bumi yang berupa air asin?",
        options: ["50%", "75%", "97%", "100%"],
        answer: 2
    },
    {
        question: "Mengapa jumlah air di bumi tetap?",
        options: ["Karena hujan terus turun", "Karena mengalami siklus air", "Karena air laut tidak menguap", "Karena es di kutub mencair"],
        answer: 1
    },
    {
        question: "Proses penguapan air oleh panas matahari disebut...",
        options: ["Transpirasi", "Kondensasi", "Evaporasi", "Presipitasi"],
        answer: 2
    },
    {
        question: "Proses penguapan air dari tumbuh-tumbuhan melalui stomata disebut...",
        options: ["Evaporasi", "Transpirasi", "Evapotranspirasi", "Infiltrasi"],
        answer: 1
    },
    {
        question: "Gabungan dari proses evaporasi dan transpirasi disebut...",
        options: ["Adveksi", "Kondensasi", "Evapotranspirasi", "Run off"],
        answer: 2
    },
    {
        question: "Proses perubahan wujud uap air menjadi awan disebut...",
        options: ["Presipitasi", "Kondensasi", "Adveksi", "Infiltrasi"],
        answer: 1
    },
    {
        question: "Siklus air yang berlangsung tanpa melewati daratan (evaporasi ke atmosfer lalu presipitasi kembali ke laut) adalah...",
        options: ["Siklus Air Pendek", "Siklus Air Sedang", "Siklus Air Panjang", "Siklus Air Tertutup"],
        answer: 0
    },

    // --- BAB B: PERAIRAN DARAT (11-30) ---
    {
        question: "Perairan yang ada di wilayah daratan dibedakan menjadi...",
        options: ["Air tanah dan air permukaan", "Air hujan dan air laut", "Air sungai dan air danau", "Air gletser dan air rawa"],
        answer: 0
    },
    {
        question: "Faktor-faktor yang memengaruhi daya serap air ke dalam tanah adalah...",
        options: ["Porositas tanah, kemiringan lereng, dan kelembapan tanah", "Suhu udara dan kecepatan angin", "Jenis batuan dan warna tanah", "Curah hujan dan penguapan"],
        answer: 0
    },
    {
        question: "Air tanah yang berasal dari proses presipitasi (hujan) yang bercampur dengan debu meteorit disebut air tanah...",
        options: ["Tubir", "Juvenil", "Meteorik", "Fosil"],
        answer: 2
    },
    {
        question: "Air tanah yang tersimpan di dalam perut bumi, seperti air yang tersimpan di dalam batuan sedimen disebut air tanah...",
        options: ["Meteorik", "Tubir", "Juvenil", "Konat"],
        answer: 1
    },
    {
        question: "Mata air panas yang naik ke permukaan karena gas-gas magma yang dilepaskan atau geiser disebut air tanah...",
        options: ["Fosil", "Juvenil", "Meteorik", "Tubir"],
        answer: 1
    },
    {
        question: "Air tanah yang terperangkap dalam rongga-rongga batuan dan tetap tinggal dalam batuan sejak penimbunan terjadi disebut air tanah...",
        options: ["Fosil atau Konat", "Meteorik", "Tubir", "Juvenil"],
        answer: 0
    },
    {
        question: "Bagian sungai yang terletak di wilayah dataran tinggi, kemiringan lereng besar, erosi tinggi, dan dasar sungai berbentuk huruf V adalah...",
        options: ["Hulu", "Tengah", "Hilir", "Muara"],
        answer: 0
    },
    {
        question: "Bagian sungai yang terletak di wilayah landai, pengendapan tinggi, dan dasar sungai berbentuk huruf U adalah...",
        options: ["Hulu", "Tengah", "Hilir", "Estuaria"],
        answer: 1
    },
    {
        question: "Bagian sungai yang alirannya sangat lambat, dekat dengan laut atau danau, banyak kelokan, dan terdapat delta adalah...",
        options: ["Hulu", "Tengah", "Hilir", "Pegunungan"],
        answer: 2
    },
    {
        question: "Bentuk DAS di mana jalur anak sungai di kiri-kanan mengalir menuju sungai utama, debit banjir kecil, dan banjir berlangsung lama adalah...",
        options: ["Radial", "Paralel", "Bulu Burung", "Sentripetal"],
        answer: 2
    },
    {
        question: "Bentuk DAS yang menyerupai lingkaran, anak-anak sungai berkonsentrasi ke suatu titik secara radial, dan banjir besar terjadi di titik pertemuan adalah...",
        options: ["Bulu Burung", "Radial", "Paralel", "Rektangular"],
        answer: 1
    },
    {
        question: "Sungai yang memiliki volume dan debit air yang relatif konstan sepanjang tahun disebut sungai...",
        options: ["Periodik", "Ephemeral", "Permanen", "Non-permanen"],
        answer: 2
    },
    {
        question: "Sungai yang bergantung pada perubahan musim (besar saat hujan, kering saat kemarau) disebut sungai...",
        options: ["Permanen", "Ephemeral", "Periodik", "Gletser"],
        answer: 2
    },
    {
        question: "Sungai yang terisi air jika terjadi hujan dan selanjutnya kering kembali disebut sungai...",
        options: ["Permanen", "Periodik", "Ephemeral", "Campuran"],
        answer: 2
    },
    {
        question: "Sungai yang sumber airnya berasal dari resapan air hujan disebut sungai...",
        options: ["Sungai Gletser", "Sungai Hujan", "Sungai Campuran", "Sungai Ephemeral"],
        answer: 1
    },
    {
        question: "Sungai gletser yang mendapat tambahan air hujan disebut sungai...",
        options: ["Sungai Hujan", "Sungai Gletser", "Sungai Campuran", "Sungai Periodik"],
        answer: 2
    },
    {
        question: "Sungai yang arah alirannya searah dengan lereng disebut sungai...",
        options: ["Subsekuen", "Obsekuen", "Resekuen", "Konsekuen"],
        answer: 3
    },
    {
        question: "Pola aliran sungai yang menyerupai tulang daun atau pohon disebut pola...",
        options: ["Trelis", "Dendritik", "Radial", "Paralel"],
        answer: 1
    },
    {
        question: "Danau air tawar ditemukan di daerah humid (basah) dengan curah hujan yang tinggi. Contohnya adalah...",
        options: ["Danau Satonda", "Danau Labuan Cermin", "Danau Toba", "Danau Kelimutu"],
        answer: 1
    },
    {
        question: "Danau air asin ditemukan di daerah semiarid dan arid dengan penguapan yang tinggi. Contohnya adalah...",
        options: ["Danau Tondano", "Danau Maninjau", "Danau Satonda", "Danau Laut Tawar"],
        answer: 2
    },

    // --- BAB B & C: RAWA, GLETSER, KONSERVASI (31-35) ---
    {
        question: "Daerah di sekitar muara sungai yang sangat luas, terdiri dari wilayah lumpur dengan kadar air relatif tinggi dan bersifat tergenang disebut...",
        options: ["Danau", "Rawa", "Gletser", "Estuaria"],
        answer: 1
    },
    {
        question: "Rawa yang airnya tidak selalu tergenang dan kondisi airnya tidak terlalu asam disebut...",
        options: ["Rawa Gambut", "Rawa Pasang Surut", "Swamp", "Marsh"],
        answer: 1
    },
    {
        question: "Rawa yang permukaannya relatif kering, tetapi tanahnya basah dan jenuh air, serta mayoritas tumbuhannya lumut penghasil lapisan gambut asam disebut...",
        options: ["Rawa Pasang Surut", "Rawa Gambut", "Swamp", "Marsh"],
        answer: 1
    },
    {
        question: "Bongkahan atau endapan es yang sangat besar akibat akumulasi es dan salju disebut...",
        options: ["Gletser", "Salju", "Iceberg", "Puncak Jaya"],
        answer: 0
    },
    {
        question: "Menetapkan kawasan lindung air tanah di wilayah cekungan atau sempadan mata air adalah upaya konservasi...",
        options: ["Konservasi DAS", "Konservasi Air Tanah", "Konservasi Laut", "Konservasi Rawa"],
        answer: 1
    },

    // --- BAB D: PERAIRAN LAUT (36-42) ---
    {
        question: "Daratan di tepi laut yang tergenang saat air pasang dan kering saat surut disebut...",
        options: ["Pantai", "Pesisir", "Laut", "Delta"],
        answer: 1
    },
    {
        question: "Zona laut yang berada di antara garis air pasang surut disebut zona...",
        options: ["Neritik", "Litoral", "Batial", "Abisal"],
        answer: 1
    },
    {
        question: "Zona laut dengan kedalaman 0-200 meter, sinar matahari masih dapat menembus dasar laut, dan banyak biota laut adalah...",
        options: ["Zona Litoral", "Zona Neritik", "Zona Batial", "Zona Abisal"],
        answer: 1
    },
    {
        question: "Zona laut yang tidak ada cahaya matahari sehingga selalu gelap, terdapat hewan predator, detritivor, dan pengurai adalah...",
        options: ["Neritik", "Batial", "Abisal", "Litoral"],
        answer: 2
    },
    {
        question: "Laut yang terletak di tepi benua, contohnya Laut Jepang dan Teluk Benggala disebut...",
        options: ["Laut Tepi", "Laut Pertengahan", "Laut Pedalaman", "Laut Teritorial"],
        answer: 0
    },
    {
        question: "Danau air asin yang sangat luas hingga menyerupai laut, contohnya Laut Kaspia dan Laut Hitam disebut...",
        options: ["Laut Tepi", "Laut Pertengahan", "Laut Pedalaman", "Laut Lepas"],
        answer: 2
    },
    {
        question: "Morfologi dasar laut yang berupa cekungan sangat dalam dan memanjang disebut...",
        options: ["Paparan Benua", "Lereng Benua", "Palung Laut", "Gunung Bawah Laut"],
        answer: 2
    },

    // --- BAB D & E: GERAKAN LAUT & BATAS (43-46) ---
    {
        question: "Naik turunnya air laut secara teratur dan berulang-ulang karena pengaruh gaya gravitasi disebut...",
        options: ["Gelombang", "Arus Laut", "Pasang Surut", "Adveksi"],
        answer: 2
    },
    {
        question: "Berdasarkan Deklarasi Juanda tanggal 13 Desember 1957, batas laut teritorial Indonesia ditarik dari garis ujung pulau terluar sejauh...",
        options: ["12 mil", "200 mil", "350 mil", "24 mil"],
        answer: 0
    },
    {
        question: "Batas Zona Ekonomi Eksklusif (ZEE) Indonesia ditetapkan sejauh 200 mil dari garis dasar ke arah laut bebas pada tanggal...",
        options: ["13 Desember 1957", "21 Maret 1980", "1 Januari 1973", "17 Agustus 1945"],
        answer: 1
    },
    {
        question: "Dasar laut dan tanah di bawahnya di luar perairan wilayah RI sampai kedalaman 200 meter untuk eksplorasi kekayaan alam diatur dalam...",
        options: ["Deklarasi Juanda", "UU Nomor 1 Tahun 1973", "UU ZEE 1980", "UNCLOS 1982"],
        answer: 1
    },

    // --- BAB F, G, H: POTENSI, PENCEMARAN, LEMBAGA (47-50) ---
    {
        question: "Berikut ini yang merupakan manfaat perairan laut sesuai materi, KECUALI...",
        options: ["Daerah budidaya tambak", "Objek wisata bahari", "Kawasan pertambangan", "Sarana irigasi pertanian"],
        answer: 3
    },
    {
        question: "Masuknya komponen lain ke lingkungan laut oleh kegiatan manusia sehingga kualitasnya turun disebut...",
        options: ["Konservasi Air Laut", "Pencemaran Air Laut", "Abrasi Pantai", "Sedimentasi"],
        answer: 1
    },
    {
        question: "Upaya konservasi air laut dengan menanam tanaman bakau bertujuan untuk...",
        options: ["Meningkatkan kadar garam", "Mencegah abrasi", "Mempercepat pendangkalan", "Menarik wisatawan"],
        answer: 1
    },
    {
        question: "Lembaga di Indonesia yang berperan sebagai penyedia dan pengguna data hidrologi serta geospasial sesuai materi adalah...",
        options: ["BMKG dan LIPI", "Kementerian PUPR dan BIG", "Kementerian Pertanian dan BPS", "Kementerian ESDM dan BNPB"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// Elemen DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionProgress = document.getElementById('question-progress');
const scoreDisplay = document.getElementById('score-display');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');

// Sesuaikan teks di layar mulai secara dinamis
document.querySelector('#start-screen p').innerHTML = `Ujian ini terdiri dari <strong>${questions.length} soal</strong> pilihan ganda yang mencakup seluruh materi Hidrosfer (Siklus Air, Perairan Darat, Laut, Batas Wilayah, hingga Lembaga Hidrologi).`;

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    hasAnswered = false;
    nextBtn.classList.add('hidden');
    feedbackContainer.classList.add('hidden');
    optionsContainer.innerHTML = '';

    const currentQuestion = questions[currentQuestionIndex];
    
    // Update UI Header & Progress
    questionProgress.textContent = `Soal ${currentQuestionIndex + 1} dari ${questions.length}`;
    scoreDisplay.textContent = `Skor: ${score}`;
    // Hitung persentase progress bar
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    // Tampilkan Pertanyaan
    questionText.textContent = currentQuestion.question;

    // Tampilkan Opsi
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.onclick = () => selectOption(index, button);
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedIndex, selectedButton) {
    if (hasAnswered) return;
    hasAnswered = true;

    const currentQuestion = questions[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    
    // Nonaktifkan semua tombol
    allButtons.forEach(btn => btn.disabled = true);

    // Cek jawaban (Tanpa Explanation)
    if (selectedIndex === currentQuestion.answer) {
        score += 2; // 50 soal x 2 poin = 100
        selectedButton.classList.add('correct');
        feedbackText.innerHTML = `<strong>Jawaban Benar!</strong>`;
        feedbackContainer.className = 'feedback correct';
    } else {
        selectedButton.classList.add('incorrect');
        allButtons[currentQuestion.answer].classList.add('correct'); // Tunjukkan jawaban benar
        feedbackText.innerHTML = `<strong>Jawaban Salah.</strong> Jawaban yang benar adalah ${String.fromCharCode(65 + currentQuestion.answer)}.`;
        feedbackContainer.className = 'feedback incorrect';
    }

    // Update Skor
    scoreDisplay.textContent = `Skor: ${score}`;
    
    // Tampilkan Feedback & Tombol Next
    feedbackContainer.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = "Lihat Hasil Akhir";
    } else {
        nextBtn.textContent = "Soal Selanjutnya";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    finalScore.textContent = score;
    
    if (score >= 80) {
        resultMessage.textContent = "Luar Biasa! Pemahaman Hidrosfer kamu sangat baik.";
        resultMessage.style.color = "#2e7d32";
    } else if (score >= 60) {
        resultMessage.textContent = "Bagus! Sedikit lagi untuk sempurna.";
        resultMessage.style.color = "#f57c00";
    } else {
        resultMessage.textContent = "Jangan menyerah, pelajari kembali materinya ya!";
        resultMessage.style.color = "#c62828";
    }
  }
