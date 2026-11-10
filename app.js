// 20 Soruluk Kaygı Ölçeği Soru Havuzu (Tüm maddeler aynı yönde 1-5 arası puanlanır)
const QUESTIONS = [
  "Günlük yaşamımda belirgin bir neden olmadan kaygı hissederim.",
  "Gelecekte yaşanabilecek olumsuz olaylar hakkında sık sık endişelenirim.",
  "Kaygılandığımda düşüncelerimi kontrol etmekte zorlanırım.",
  "Küçük sorunları bile zihnimde büyütme eğilimindeyim.",
  "Her şey yolunda giderken bile kötü bir şey olacakmış gibi hissederim.",
  "Kaygılandığımda kalp atışlarımın hızlandığını hissederim.",
  "Stresli durumlarda kaslarımda gerginlik yaşarım.",
  "Endişelerim nedeniyle uykuya dalmakta veya uykumu sürdürmekte zorlanırım.",
  "Kaygılı olduğumda nefes alışverişimde değişiklik hissederim.",
  "Endişelendiğimde mide rahatsızlığı veya benzeri bedensel belirtiler yaşarım.",
  "Kaygılarım günlük işlerime odaklanmamı zorlaştırır.",
  "Başkalarının beni nasıl değerlendirdiği konusunda aşırı endişelenirim.",
  "Belirsiz durumlarla karşılaştığımda huzursuz olurum.",
  "Hata yapma ihtimali beni gereğinden fazla kaygılandırır.",
  "Kaygı duyduğum durumlarla yüzleşmek yerine onlardan kaçınırım.",
  "Önemli kararlar verirken kaygım nedeniyle kararsız kalırım.",
  "Kaygılarım sosyal ilişkilerimi olumsuz etkiler.",
  "Gün içerisinde kendimi sık sık huzursuz veya diken üstünde hissederim.",
  "Endişelerim nedeniyle rahatlamakta güçlük çekerim.",
  "Kaygılarımın günlük yaşam kalitemi olumsuz etkilediğini düşünürüm."
];

const ADMIN_PASSWORDS = ["sunum-falan-filan", "(sunum-falan-filan)"];
const LOCAL_STORAGE_KEY = "kaygi_olcegi_submissions_v1";
const CLOUD_STORE_URL = "https://api.restful-api.dev/objects/ff808181a09d98f701a1c42e500a7993";

// Uygulama Durumu
let currentStudentNo = "";
let currentQuestionIndex = 0;
let userAnswers = new Array(QUESTIONS.length).fill(null);
let adminPollTimer = null;

// DOM Referansları
const stepLogin = document.getElementById("step-login");
const stepSurvey = document.getElementById("step-survey");
const stepThanks = document.getElementById("step-thanks");
const stepAdmin = document.getElementById("step-admin");

const loginForm = document.getElementById("login-form");
const studentNoInput = document.getElementById("student-no");
const studentNoError = document.getElementById("student-no-error");

const questionForm = document.getElementById("question-form");
const questionCounter = document.getElementById("question-counter");
const progressPercent = document.getElementById("progress-percent");
const surveyProgress = document.getElementById("survey-progress");
const questionHeading = document.getElementById("question-heading");
const questionError = document.getElementById("question-error");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const radioInputs = Array.from(document.querySelectorAll('input[name="answer"]'));

const returnHomeBtn = document.getElementById("return-home-btn");
const refreshAdminBtn = document.getElementById("refresh-admin-btn");
const exitAdminBtn = document.getElementById("exit-admin-btn");
const exportCsvBtn = document.getElementById("export-csv-btn");
const seedDemoBtn = document.getElementById("seed-demo-btn");
const clearDataBtn = document.getElementById("clear-data-btn");
const adminStatus = document.getElementById("admin-status");

// --- EKRAN GEÇİŞ YÖNETİMİ ---
function showSection(targetSection, headingId) {
  [stepLogin, stepSurvey, stepThanks, stepAdmin].forEach((sec) => {
    if (sec === targetSection) {
      sec.hidden = false;
    } else {
      sec.hidden = true;
    }
  });

  if (targetSection !== stepAdmin && adminPollTimer) {
    clearInterval(adminPollTimer);
    adminPollTimer = null;
  }

  const heading = document.getElementById(headingId);
  if (heading) {
    heading.focus();
  }
}

// --- VERİ SAKLAMA (YEREL + SUNUCU + BULUT SENKRONİZASYON) ---
function getLocalSubmissions() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalSubmissions(list) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  } catch {
    // localStorage dolu veya kapalıysa sessizce devam et
  }
}

function mergeSubmissions(listA, listB) {
  const map = new Map();
  [...listA, ...listB].forEach((item) => {
    if (item && item.id) {
      map.set(item.id, item);
    }
  });
  return Array.from(map.values()).sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
}

async function fetchAllSubmissions() {
  let localList = getLocalSubmissions();

  // 1. Yerel Node sunucusu (/api/responses) varsa oradan çek
  try {
    const res = await fetch("/api/responses", { cache: "no-store" });
    if (res.ok) {
      const serverData = await res.json();
      if (Array.isArray(serverData.submissions)) {
        localList = mergeSubmissions(localList, serverData.submissions);
        saveLocalSubmissions(localList);
      }
    }
  } catch {
    // Statik barındırma (Vercel / Netlify) modunda yerel API olmayabilir
  }

  // 2. Bulut deposundan çek ve birleştir
  try {
    const cloudRes = await fetch(CLOUD_STORE_URL, { cache: "no-store" });
    if (cloudRes.ok) {
      const cloudObj = await cloudRes.json();
      const cloudList = cloudObj?.data?.submissions;
      if (Array.isArray(cloudList)) {
        localList = mergeSubmissions(localList, cloudList);
        saveLocalSubmissions(localList);
      }
    }
  } catch {
    // Çevrimdışı durumda yerel yedek kullanılır
  }

  return localList;
}

async function persistSubmission(newEntry) {
  // Önce yerel yedeğe ekle
  const currentLocal = getLocalSubmissions();
  // Aynı öğrenci numarası daha önce girdiyse güncelle veya yeni ekle
  const filtered = currentLocal.filter((item) => item.studentNo !== newEntry.studentNo);
  const updatedLocal = [...filtered, newEntry];
  saveLocalSubmissions(updatedLocal);

  // Yerel Node sunucusuna kaydetmeyi dene
  try {
    await fetch("/api/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry)
    });
  } catch {
    // Statik ortamda devam et
  }

  // Bulut deposuna kaydet
  try {
    const cloudRes = await fetch(CLOUD_STORE_URL, { cache: "no-store" });
    let cloudList = [];
    if (cloudRes.ok) {
      const cloudObj = await cloudRes.json();
      if (Array.isArray(cloudObj?.data?.submissions)) {
        cloudList = cloudObj.data.submissions;
      }
    }
    const merged = mergeSubmissions(cloudList, updatedLocal).filter(
      (item, idx, arr) =>
        arr.findIndex((x) => x.studentNo === item.studentNo && x.id !== item.id) === -1 ||
        item.id === newEntry.id
    );

    await fetch(CLOUD_STORE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "kaygi-olcegi-store",
        data: { submissions: merged }
      })
    });
  } catch {
    // Bulut erişimi yoksa yerel kayıt korunur
  }
}

async function clearAllSubmissions() {
  saveLocalSubmissions([]);
  try {
    await fetch("/api/responses", { method: "DELETE" });
  } catch {
    // Statik mod
  }
  try {
    await fetch(CLOUD_STORE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "kaygi-olcegi-store",
        data: { submissions: [] }
      })
    });
  } catch {
    // Bulut hatası
  }
}

// --- ADIM 1: GİRİŞ DOĞRULAMA VE YÖNLENDİRME ---
function validateStudentNo() {
  const val = studentNoInput.value.trim();
  if (!val) {
    studentNoInput.setCustomValidity("Lütfen okul numaranızı giriniz.");
    studentNoInput.setAttribute("aria-invalid", "true");
    studentNoError.textContent = "Lütfen okul numaranızı giriniz.";
    return false;
  }
  studentNoInput.setCustomValidity("");
  studentNoInput.removeAttribute("aria-invalid");
  studentNoError.textContent = "";
  return true;
}

studentNoInput.addEventListener("input", () => {
  if (studentNoInput.value.trim()) {
    studentNoInput.setCustomValidity("");
    studentNoInput.removeAttribute("aria-invalid");
    studentNoError.textContent = "";
  }
});

studentNoInput.addEventListener("blur", () => {
  if (studentNoInput.value.length > 0) {
    validateStudentNo();
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validateStudentNo()) {
    studentNoInput.focus();
    return;
  }

  const entered = studentNoInput.value.trim();

  // Gizli Admin Paneli Kontrolü: "Sunum-Falan-Filan"
  if (ADMIN_PASSWORDS.includes(entered.toLowerCase())) {
    studentNoInput.value = "";
    openAdminPanel();
    return;
  }

  // Normal Öğrenci Girişi
  currentStudentNo = entered;
  currentQuestionIndex = 0;
  userAnswers = new Array(QUESTIONS.length).fill(null);
  renderCurrentQuestion();
  showSection(stepSurvey, "question-heading");
});

// --- ADIM 2: SORU GÖSTERİMİ VE İLERİ / GERİ GEÇİŞ ---
function renderCurrentQuestion() {
  const qNum = currentQuestionIndex + 1;
  const total = QUESTIONS.length;
  const pct = Math.round((qNum / total) * 100);

  questionCounter.textContent = `Soru ${qNum} / ${total}`;
  progressPercent.textContent = `%${pct}`;
  surveyProgress.value = qNum;
  questionHeading.textContent = `${qNum}. ${QUESTIONS[currentQuestionIndex]}`;
  questionError.textContent = "";

  const savedVal = userAnswers[currentQuestionIndex];
  radioInputs.forEach((input) => {
    input.checked = savedVal !== null && Number(input.value) === savedVal;
  });

  prevBtn.disabled = currentQuestionIndex === 0;
  prevBtn.style.visibility = currentQuestionIndex === 0 ? "hidden" : "visible";

  if (currentQuestionIndex === total - 1) {
    nextBtn.textContent = "Anketi Tamamla ✓";
    nextBtn.setAttribute("enterkeyhint", "done");
  } else {
    nextBtn.textContent = "İleri →";
    nextBtn.setAttribute("enterkeyhint", "next");
  }
}

radioInputs.forEach((input) => {
  input.addEventListener("change", () => {
    userAnswers[currentQuestionIndex] = Number(input.value);
    questionError.textContent = "";
  });
});

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderCurrentQuestion();
    questionHeading.focus();
  }
});

questionForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const selected = radioInputs.find((r) => r.checked);
  if (!selected) {
    questionError.textContent = "Devam etmek için lütfen bir seçenek işaretleyiniz.";
    radioInputs[0].focus();
    return;
  }

  userAnswers[currentQuestionIndex] = Number(selected.value);
  questionError.textContent = "";

  if (currentQuestionIndex < QUESTIONS.length - 1) {
    currentQuestionIndex += 1;
    renderCurrentQuestion();
    questionHeading.focus();
  } else {
    // 20 Soru Tamamlandı -> Kaydet ve Teşekkür Ekranına Geç
    nextBtn.disabled = true;
    nextBtn.textContent = "Kaydediliyor...";

    const totalScore = userAnswers.reduce((acc, v) => acc + (Number(v) || 1), 0);
    const avgScore = Number((totalScore / QUESTIONS.length).toFixed(2));

    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      studentNo: currentStudentNo,
      answers: [...userAnswers],
      totalScore,
      avgScore,
      timestamp: Date.now(),
      dateStr: new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    await persistSubmission(entry);

    nextBtn.disabled = false;
    showSection(stepThanks, "thanks-heading");
  }
});

returnHomeBtn.addEventListener("click", () => {
  studentNoInput.value = "";
  showSection(stepLogin, "login-heading");
});

// --- ADIM 4: GİZLİ ADMİN PANELİ VE YÜZDELİK DİLİM HESAPLAMA ---
function getTierInfo(score) {
  if (score <= 46) {
    return { key: "low", label: "Düşük Dilim (20–46)", pillClass: "pill-low" };
  }
  if (score <= 73) {
    return { key: "mid", label: "Orta Dilim (47–73)", pillClass: "pill-mid" };
  }
  return { key: "high", label: "Yüksek Dilim (74–100)", pillClass: "pill-high" };
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function openAdminPanel() {
  showSection(stepAdmin, "admin-heading");
  await refreshAdminData();

  if (!adminPollTimer) {
    adminPollTimer = setInterval(refreshAdminData, 6000);
  }
}

async function refreshAdminData() {
  adminStatus.textContent = "Veriler güncelleniyor...";
  const submissions = await fetchAllSubmissions();
  renderAdminStats(submissions);
  adminStatus.textContent = `Son güncelleme: ${new Date().toLocaleTimeString("tr-TR")} • Veriler otomatik senkronize ediliyor.`;
}

function renderAdminStats(submissions) {
  const totalCount = submissions.length;
  document.getElementById("stat-total-count").textContent = String(totalCount);

  if (totalCount === 0) {
    document.getElementById("stat-avg-total").textContent = "0";
    document.getElementById("stat-avg-item").textContent = "0.0";

    ["low", "mid", "high"].forEach((k) => {
      document.getElementById(`pct-${k}`).textContent = "%0";
      document.getElementById(`count-${k}`).textContent = "(0 kişi)";
      document.getElementById(`bar-${k}`).style.width = "0%";
    });

    renderQuintiles([]);
    document.getElementById("admin-table-body").innerHTML =
      '<tr><td colspan="6" class="empty-row">Henüz ankete katılan öğrenci bulunmuyor.</td></tr>';
    return;
  }

  const sumScores = submissions.reduce((acc, s) => acc + Number(s.totalScore || 0), 0);
  const avgTotal = (sumScores / totalCount).toFixed(1);
  const avgItem = (sumScores / (totalCount * QUESTIONS.length)).toFixed(2);

  document.getElementById("stat-avg-total").textContent = avgTotal;
  document.getElementById("stat-avg-item").textContent = avgItem;

  // 3 Ana Dilim Hesaplaması (20-46 Düşük, 47-73 Orta, 74-100 Yüksek)
  let lowCount = 0;
  let midCount = 0;
  let highCount = 0;

  submissions.forEach((s) => {
    const sc = Number(s.totalScore || 20);
    if (sc <= 46) lowCount += 1;
    else if (sc <= 73) midCount += 1;
    else highCount += 1;
  });

  const lowPct = Math.round((lowCount / totalCount) * 100);
  const midPct = Math.round((midCount / totalCount) * 100);
  const highPct = Math.round((highCount / totalCount) * 100);

  document.getElementById("pct-low").textContent = `%${lowPct}`;
  document.getElementById("count-low").textContent = `(${lowCount} kişi)`;
  document.getElementById("bar-low").style.width = `${lowPct}%`;

  document.getElementById("pct-mid").textContent = `%${midPct}`;
  document.getElementById("count-mid").textContent = `(${midCount} kişi)`;
  document.getElementById("bar-mid").style.width = `${midPct}%`;

  document.getElementById("pct-high").textContent = `%${highPct}`;
  document.getElementById("count-high").textContent = `(${highCount} kişi)`;
  document.getElementById("bar-high").style.width = `${highPct}%`;

  // 5'li Detaylı Dilim
  renderQuintiles(submissions);

  // Öğrenci Tablosu (En son katılan en üstte)
  const tbody = document.getElementById("admin-table-body");
  const reversed = [...submissions].reverse();
  tbody.innerHTML = reversed
    .map((item, idx) => {
      const tier = getTierInfo(Number(item.totalScore));
      return `
        <tr>
          <td>${totalCount - idx}</td>
          <td><strong>${escapeHtml(item.studentNo)}</strong></td>
          <td><strong>${Number(item.totalScore)}</strong> / 100</td>
          <td>${Number(item.avgScore).toFixed(2)} / 5</td>
          <td><span class="pill ${tier.pillClass}">${tier.label}</span></td>
          <td>${escapeHtml(item.dateStr || "-")}</td>
        </tr>
      `;
    })
    .join("");
}

function renderQuintiles(submissions) {
  const ranges = [
    { label: "20 – 35 Puan", min: 20, max: 35 },
    { label: "36 – 51 Puan", min: 36, max: 51 },
    { label: "52 – 67 Puan", min: 52, max: 67 },
    { label: "68 – 83 Puan", min: 68, max: 83 },
    { label: "84 – 100 Puan", min: 84, max: 100 }
  ];

  const total = submissions.length;
  const container = document.getElementById("quintile-container");

  container.innerHTML = ranges
    .map((r) => {
      const cnt = submissions.filter(
        (s) => Number(s.totalScore) >= r.min && Number(s.totalScore) <= r.max
      ).length;
      const pct = total > 0 ? Math.round((cnt / total) * 100) : 0;
      return `
        <div class="quintile-box">
          <span class="quintile-range">${r.label}</span>
          <strong class="quintile-pct">%${pct}</strong>
          <span class="quintile-cnt">${cnt} öğrenci</span>
        </div>
      `;
    })
    .join("");
}

refreshAdminBtn.addEventListener("click", () => {
  refreshAdminData();
});

exitAdminBtn.addEventListener("click", () => {
  showSection(stepLogin, "login-heading");
});

// Excel (CSV) İndirme
exportCsvBtn.addEventListener("click", async () => {
  const submissions = await fetchAllSubmissions();
  if (submissions.length === 0) {
    adminStatus.textContent = "İndirilecek veri bulunamadı.";
    return;
  }

  const headers = [
    "Sira",
    "Okul_Numarasi",
    "Toplam_Puan",
    "Ortalama_Puan",
    "Kaygi_Dilimi",
    "Saat",
    ...QUESTIONS.map((_, i) => `Soru_${i + 1}`)
  ];

  const rows = submissions.map((s, idx) => {
    const tier = getTierInfo(Number(s.totalScore)).label;
    const ansCols = Array.isArray(s.answers) ? s.answers : [];
    return [
      idx + 1,
      `"${String(s.studentNo).replace(/"/g, '""')}"`,
      s.totalScore,
      s.avgScore,
      `"${tier}"`,
      `"${s.dateStr || ""}"`,
      ...QUESTIONS.map((_, i) => ansCols[i] ?? "")
    ].join(";");
  });

  // UTF-8 BOM ile Türkçe karakterlerin Excel'de düzgün açılmasını sağla
  const csvContent = "\uFEFF" + [headers.join(";"), ...rows].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kaygi-olcegi-sonuclari-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});

// Sunum Öncesi Test İçin Örnek Veri Ekleme
seedDemoBtn.addEventListener("click", async () => {
  seedDemoBtn.disabled = true;
  const randomNo = `2023${Math.floor(1000 + Math.random() * 9000)}`;
  const answers = QUESTIONS.map(() => Math.floor(1 + Math.random() * 5));
  const totalScore = answers.reduce((a, b) => a + b, 0);
  const avgScore = Number((totalScore / QUESTIONS.length).toFixed(2));

  await persistSubmission({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    studentNo: randomNo,
    answers,
    totalScore,
    avgScore,
    timestamp: Date.now(),
    dateStr: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
  });

  await refreshAdminData();
  seedDemoBtn.disabled = false;
});

// Verileri Sıfırlama
clearDataBtn.addEventListener("click", async () => {
  const confirmed = window.confirm(
    "Tüm öğrenci yanıtlarını sıfırlamak istediğinize emin misiniz?"
  );
  if (!confirmed) return;
  await clearAllSubmissions();
  await refreshAdminData();
  adminStatus.textContent = "Tüm veriler sıfırlandı.";
});
