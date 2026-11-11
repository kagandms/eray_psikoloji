// Çok Dilli (TR - EN - AR) 20 Soruluk Kaygı Ölçeği ve UI Çevirileri
const I18N = {
  tr: {
    dir: "ltr",
    pageTitle: "Kaygı Ölçeği Anketi",
    loginBadge: "Sunum Etkinliği • 20 Soru",
    loginHeading: "Kaygı Ölçeği Anketi",
    loginSubtitle: "Lütfen başlamak için 11 haneli okul numaranızı giriniz ve aydınlatma onay kutucuğunu işaretleyiniz.",
    labelStudentNo: "Okul Numaranız (11 Haneli)",
    placeholderStudentNo: "Örn: 20231045123",
    hintStudentNo: "Ankete katılmak için 11 haneli öğrenci numaranızı yazınız.",
    errStudentNoEmpty: "Lütfen okul numaranızı giriniz.",
    errStudentNoFormat: "Öğrenci numarası tam 11 haneli bir sayı olmalıdır.",
    labelConsent: "Verilerimin ve cevaplarımın bu proje hakkında işlenip kullanılmasını onaylıyorum.",
    errConsent: "Devam etmek için lütfen onay kutucuğunu işaretleyiniz.",
    startBtn: "Ankete Başla",
    progressLabel: "Anket İlerlemesi",
    questionCounter: (q, total) => `Soru ${q} / ${total}`,
    progressPct: (pct) => `%${pct}`,
    options: [
      "Kesinlikle katılmıyorum",
      "Katılmıyorum",
      "Kararsızım",
      "Katılıyorum",
      "Kesinlikle katılıyorum"
    ],
    errQuestion: "Devam etmek için lütfen bir seçenek işaretleyiniz.",
    prevBtn: "← Geri",
    nextBtn: "İleri →",
    finishBtn: "Anketi Tamamla ✓",
    savingBtn: "Kaydediliyor...",
    thanksHeading: "Katılımınız İçin Teşekkür Ederiz!",
    thanksSubtitle: "Yanıtlarınız başarıyla kaydedilmiştir. Sunumu dinlemeye devam edebilirsiniz.",
    returnHomeBtn: "Giriş Ekranına Dön",
    adminBadge: "Canlı Sunum Paneli (Yönetici)",
    adminBadgeReadOnly: "Canlı Sonuç Paneli (Salt Okunur - 001)",
    adminHeading: "Sınıf Kaygı Seviyesi Dağılımı",
    refreshBtn: "↻ Yenile",
    resetAllBtn: "🗑 Tüm Verileri Resetle",
    exitBtn: "Çıkış",
    statLabelTotal: "Toplam Katılımcı",
    statSubTotal: "Öğrenci",
    statLabelAvg: "Sınıf Ortalama Puanı",
    statSubAvg: "20 – 100 Aralığında",
    statLabelItem: "Madde Ortalaması",
    statSubItem: "5.0 Üzerinden",
    distTitle: "Yüzdelik Kaygı Seviyesi Dilimleri",
    distNote: "20 soruluk ölçekte toplam puan aralığı 20–100'dür. Katılımcıların puan dilimlerine göre sınıf içi yüzdelik dağılımı:",
    tierLowTitle: "Düşük Kaygı Dilimi",
    tierLowRange: "(20 – 46 Puan)",
    tierMidTitle: "Orta Kaygı Dilimi",
    tierMidRange: "(47 – 73 Puan)",
    tierHighTitle: "Yüksek Kaygı Dilimi",
    tierHighRange: "(74 – 100 Puan)",
    personCount: (n) => `(${n} kişi)`,
    quintileTitle: "Detaylı Puan Aralığı Dağılımı (5 Dilim)",
    quintilePointSuffix: "Puan",
    quintileStudentSuffix: "öğrenci",
    studentsTableTitle: "Kişi Bazlı (Öğrenci No) Sonuçlar",
    studentsTableNote: "Öğrenci sonuçlarını inceleyebilir, cevap detaylarını görebilir veya tek tek silebilirsiniz.",
    studentsTableNoteReadOnly: "Öğrenci sonuçlarını ve cevap detaylarını görüntüleyebilirsiniz (Salt okunur görünüm).",
    exportCsvBtn: "⬇ Excel (CSV) İndir",
    seedDemoBtn: "+ Test Verisi Ekle",
    filterPlaceholder: "Öğrenci numarası ile ara (Örn: 2023...)",
    thStudentNo: "Öğrenci No",
    thTotalScore: "Toplam Puan",
    thAvgScore: "Ortalama",
    thTier: "Kaygı Dilimi",
    thTime: "Saat",
    thActions: "İşlemler",
    btnViewAnswers: "🔍 Cevaplar",
    btnDelete: "🗑 Sil",
    btnDeleting: "Siliniyor...",
    emptyTable: "Henüz ankete katılan öğrenci bulunmuyor.",
    emptySearch: "Aranan öğrenci numarasına ait sonuç bulunamadı.",
    tierLowPill: "Düşük Dilim (20–46)",
    tierMidPill: "Orta Dilim (47–73)",
    tierHighPill: "Yüksek Dilim (74–100)",
    detailHeader: (no, sc, tier) => `Öğrenci No: ${no} • Toplam Puan: ${sc}/100 (${tier})`,
    detailQPrefix: (i) => `Soru ${i}`,
    detailAPrefix: "Yanıt",
    closeDetailBtn: "Kapat ✕",
    confirmDeleteSingle: (no) => `"${no}" numaralı öğrencinin kaydını silmek istediğinize emin misiniz?`,
    confirmResetAll: "TÜM öğrenci yanıtlarını tamamen sıfırlamak (resetlemek) istediğinize emin misiniz?",
    statusUpdating: "Veriler güncelleniyor...",
    statusUpdated: (time, count) => `Son güncelleme: ${time} • Toplam ${count} kayıt.`,
    statusDeletedSingle: (no) => `"${no}" numaralı öğrencinin kaydı silindi.`,
    statusResetting: "Veriler sıfırlanıyor...",
    statusResetDone: "Tüm veriler başarıyla sıfırlandı.",
    statusNoExport: "İndirilecek veri bulunamadı.",
    statusDemoAdded: (no) => `Örnek öğrenci (${no}) eklendi.`,
    questions: [
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
    ]
  },

  en: {
    dir: "ltr",
    pageTitle: "Anxiety Scale Survey",
    loginBadge: "Presentation Activity • 20 Questions",
    loginHeading: "Anxiety Scale Survey",
    loginSubtitle: "Please enter your 11-digit student ID and check the consent box below to begin.",
    labelStudentNo: "Student ID Number (11 Digits)",
    placeholderStudentNo: "e.g., 20231045123",
    hintStudentNo: "Enter your 11-digit student number to participate in the survey.",
    errStudentNoEmpty: "Please enter your student ID number.",
    errStudentNoFormat: "Student ID must be an 11-digit number.",
    labelConsent: "I consent to the processing and use of my data and responses for this project.",
    errConsent: "Please check the consent box to continue.",
    startBtn: "Start Survey",
    progressLabel: "Survey Progress",
    questionCounter: (q, total) => `Question ${q} / ${total}`,
    progressPct: (pct) => `${pct}%`,
    options: [
      "Strongly Disagree",
      "Disagree",
      "Neutral / Undecided",
      "Agree",
      "Strongly Agree"
    ],
    errQuestion: "Please select an option to continue.",
    prevBtn: "← Back",
    nextBtn: "Next →",
    finishBtn: "Submit Survey ✓",
    savingBtn: "Saving...",
    thanksHeading: "Thank You for Your Participation!",
    thanksSubtitle: "Your responses have been successfully recorded. You may continue following the presentation.",
    returnHomeBtn: "Return to Home",
    adminBadge: "Live Presentation Dashboard (Admin)",
    adminBadgeReadOnly: "Live Results Dashboard (Read-Only - 001)",
    adminHeading: "Class Anxiety Level Distribution",
    refreshBtn: "↻ Refresh",
    resetAllBtn: "🗑 Reset All Data",
    exitBtn: "Exit",
    statLabelTotal: "Total Participants",
    statSubTotal: "Students",
    statLabelAvg: "Class Average Score",
    statSubAvg: "Range: 20 – 100",
    statLabelItem: "Item Mean Score",
    statSubItem: "Out of 5.0",
    distTitle: "Anxiety Level Percentage Tiers",
    distNote: "Total score ranges from 20 to 100 across 20 items. Class percentage breakdown by score tier:",
    tierLowTitle: "Low Anxiety Tier",
    tierLowRange: "(20 – 46 Pts)",
    tierMidTitle: "Moderate Anxiety Tier",
    tierMidRange: "(47 – 73 Pts)",
    tierHighTitle: "High Anxiety Tier",
    tierHighRange: "(74 – 100 Pts)",
    personCount: (n) => `(${n} students)`,
    quintileTitle: "Detailed Score Range Breakdown (5 Tiers)",
    quintilePointSuffix: "Pts",
    quintileStudentSuffix: "students",
    studentsTableTitle: "Individual Student Results",
    studentsTableNote: "Inspect individual student scores, view question-by-question answers, or delete single entries.",
    studentsTableNoteReadOnly: "You can view student scores and question-by-question answers (Read-only mode).",
    exportCsvBtn: "⬇ Export Excel (CSV)",
    seedDemoBtn: "+ Add Demo Data",
    filterPlaceholder: "Filter by Student ID (e.g., 2023...)",
    thStudentNo: "Student ID",
    thTotalScore: "Total Score",
    thAvgScore: "Average",
    thTier: "Anxiety Tier",
    thTime: "Time",
    thActions: "Actions",
    btnViewAnswers: "🔍 Answers",
    btnDelete: "🗑 Delete",
    btnDeleting: "Deleting...",
    emptyTable: "No students have completed the survey yet.",
    emptySearch: "No matching student ID found.",
    tierLowPill: "Low Tier (20–46)",
    tierMidPill: "Moderate Tier (47–73)",
    tierHighPill: "High Tier (74–100)",
    detailHeader: (no, sc, tier) => `Student ID: ${no} • Total Score: ${sc}/100 (${tier})`,
    detailQPrefix: (i) => `Question ${i}`,
    detailAPrefix: "Answer",
    closeDetailBtn: "Close ✕",
    confirmDeleteSingle: (no) => `Are you sure you want to delete the record for student "${no}"?`,
    confirmResetAll: "Are you sure you want to completely RESET and delete ALL student responses?",
    statusUpdating: "Updating data...",
    statusUpdated: (time, count) => `Last updated: ${time} • Total ${count} records.`,
    statusDeletedSingle: (no) => `Deleted record for student "${no}".`,
    statusResetting: "Resetting all data...",
    statusResetDone: "All data has been reset.",
    statusNoExport: "No data available to export.",
    statusDemoAdded: (no) => `Added demo student (${no}).`,
    questions: [
      "I feel anxious in my daily life without any obvious reason.",
      "I frequently worry about negative events that might happen in the future.",
      "When I get anxious, I find it difficult to control my thoughts.",
      "I tend to magnify even small problems in my mind.",
      "Even when everything is going well, I feel as though something bad is about to happen.",
      "When I feel anxious, I notice my heartbeat speeding up.",
      "I experience muscle tension in stressful situations.",
      "Because of my worries, I have trouble falling asleep or staying asleep.",
      "When I am anxious, I notice changes in my breathing.",
      "When I worry, I experience stomach discomfort or similar physical symptoms.",
      "My anxieties make it difficult for me to focus on my daily tasks.",
      "I worry excessively about how others evaluate me.",
      "I feel uneasy when faced with uncertain situations.",
      "The possibility of making a mistake makes me overly anxious.",
      "Instead of facing situations that make me anxious, I avoid them.",
      "When making important decisions, I become indecisive due to my anxiety.",
      "My anxieties negatively affect my social relationships.",
      "During the day, I often feel restless or on edge.",
      "Because of my worries, I have difficulty relaxing.",
      "I feel that my anxieties negatively affect my daily quality of life."
    ]
  },

  ar: {
    dir: "rtl",
    pageTitle: "استبيان مقياس القلق",
    loginBadge: "نشاط العرض التقديمي • 20 سؤالاً",
    loginHeading: "استبيان مقياس القلق",
    loginSubtitle: "يرجى إدخال رقمك الجامعي المكون من 11 رقماً وتحديد مربع الموافقة أدناه للبدء.",
    labelStudentNo: "الرقم الجامعي (11 رقماً)",
    placeholderStudentNo: "مثال: 20231045123",
    hintStudentNo: "أدخل رقمك الطلابي المكون من 11 رقماً للمشاركة في الاستبيان.",
    errStudentNoEmpty: "يرجى إدخال رقمك الطلابي.",
    errStudentNoFormat: "يجب أن يتكون الرقم الجامعي من 11 رقماً بالضبط.",
    labelConsent: "أوافق على معالجة واستخدام بياناتي وإجاباتي في إطار هذا المشروع.",
    errConsent: "يرجى تحديد مربع الموافقة للمتابعة.",
    startBtn: "ابدأ الاستبيان",
    progressLabel: "تقدم الاستبيان",
    questionCounter: (q, total) => `السؤال ${q} / ${total}`,
    progressPct: (pct) => `%${pct}`,
    options: [
      "لا أوافق بشدة",
      "لا أوافق",
      "محايد / غير متأكد",
      "أوافق",
      "أوافق بشدة"
    ],
    errQuestion: "يرجى اختيار إجابة للمتابعة.",
    prevBtn: "→ السابق",
    nextBtn: "التالي ←",
    finishBtn: "إرسال الاستبيان ✓",
    savingBtn: "جارٍ الحفظ...",
    thanksHeading: "شكراً لمشاركتكم!",
    thanksSubtitle: "تم حفظ إجاباتكم بنجاح. يمكنكم متابعة الاستماع إلى العرض التقديمي.",
    returnHomeBtn: "العودة إلى صفحة البداية",
    adminBadge: "لوحة العرض المباشر (المشرف)",
    adminBadgeReadOnly: "لوحة النتائج المباشرة (للقراءة فقط - 001)",
    adminHeading: "توزيع مستويات القلق في الصف",
    refreshBtn: "↻ تحديث",
    resetAllBtn: "🗑 تصفير جميع البيانات",
    exitBtn: "خروج",
    statLabelTotal: "إجمالي المشاركين",
    statSubTotal: "طالب",
    statLabelAvg: "متوسط درجات الصف",
    statSubAvg: "في النطاق 20 – 100",
    statLabelItem: "متوسط العبارة",
    statSubItem: "من أصل 5.0",
    distTitle: "النسب المئوية لفئات مستوى القلق",
    distNote: "يتراوح المجموع الكلي بين 20 و100 درجة عبر 20 سؤالاً. التوزيع النسبي للصف حسب الفئات:",
    tierLowTitle: "فئة القلق المنخفض",
    tierLowRange: "(20 – 46 نقطة)",
    tierMidTitle: "فئة القلق المتوسط",
    tierMidRange: "(47 – 73 نقطة)",
    tierHighTitle: "فئة القلق المرتفع",
    tierHighRange: "(74 – 100 نقطة)",
    personCount: (n) => `(${n} طالب)`,
    quintileTitle: "التوزيع التفصيلي لنطاقات الدرجات (5 فئات)",
    quintilePointSuffix: "نقطة",
    quintileStudentSuffix: "طالب",
    studentsTableTitle: "النتائج الفردية حسب رقم الطالب",
    studentsTableNote: "يمكنك استعراض نتائج الطلاب، أو عرض تفاصيل الإجابات، أو حذف كل طالب على حدة.",
    studentsTableNoteReadOnly: "يمكنك استعراض نتائج الطلاب وتفاصيل إجاباتهم (وضع القراءة فقط).",
    exportCsvBtn: "⬇ تحميل ملف Excel (CSV)",
    seedDemoBtn: "+ إضافة بيانات تجريبية",
    filterPlaceholder: "ابحث برقم الطالب (مثال: 2023...)",
    thStudentNo: "رقم الطالب",
    thTotalScore: "المجموع الكلي",
    thAvgScore: "المتوسط",
    thTier: "فئة القلق",
    thTime: "الوقت",
    thActions: "الإجراءات",
    btnViewAnswers: "🔍 الإجابات",
    btnDelete: "🗑 حذف",
    btnDeleting: "جارٍ الحذف...",
    emptyTable: "لم يشارك أي طالب في الاستبيان بعد.",
    emptySearch: "لم يتم العثور على نتائج مطابقة لرقم الطالب.",
    tierLowPill: "فئة منخفضة (20–46)",
    tierMidPill: "فئة متوسطة (47–73)",
    tierHighPill: "فئة مرتفعة (74–100)",
    detailHeader: (no, sc, tier) => `رقم الطالب: ${no} • المجموع: ${sc}/100 (${tier})`,
    detailQPrefix: (i) => `السؤال ${i}`,
    detailAPrefix: "الإجابة",
    closeDetailBtn: "إغلاق ✕",
    confirmDeleteSingle: (no) => `هل أنت متأكد أنك تريد حذف سجل الطالب رقم "${no}"؟`,
    confirmResetAll: "هل أنت متأكد أنك تريد تصفير وحذف جميع إجابات الطلاب بالكامل؟",
    statusUpdating: "جارٍ تحديث البيانات...",
    statusUpdated: (time, count) => `آخر تحديث: ${time} • إجمالي السجلات: ${count}.`,
    statusDeletedSingle: (no) => `تم حذف سجل الطالب "${no}".`,
    statusResetting: "جارٍ تصفير البيانات...",
    statusResetDone: "تم تصفير جميع البيانات بنجاح.",
    statusNoExport: "لا توجد بيانات لتحميلها.",
    statusDemoAdded: (no) => `تمت إضافة طالب تجريبي (${no}).`,
    questions: [
      "أشعر بالقلق في حياتي اليومية دون سبب واضح.",
      "أقلق كثيراً بشأن الأحداث السلبية التي قد تقع في المستقبل.",
      "عندما أشعر بالقلق، أجد صعوبة في السيطرة على أفكاري.",
      "أميل إلى تضخيم حتى المشكلات الصغيرة في ذهني.",
      "حتى عندما يسير كل شيء على ما يرام، أشعر وكأن شيئاً سيئاً على وشك الحدوث.",
      "عندما أقلق، أشعر بتسارع في نبضات قلبي.",
      "أعاني من شد أو توتر في عضلاتي في المواقف الضاغطة.",
      "بسبب مخاوفي، أواجه صعوبة في النوم أو الاستمرار فيه.",
      "عندما أكون قلقاً، ألاحظ تغيراً في تنفسي.",
      "عندما أقلق، أعاني من اضطراب في المعدة أو أعراض جسدية مشابهة.",
      "يجعل قلقي من الصعب عليّ التركيز في مهامي اليومية.",
      "أقلق بشكل مفرط بشأن كيفية تقييم الآخرين لي.",
      "أشعر بعدم الارتياح عند مواجهة مواقف غير واضحة أو غامضة.",
      "احتمال ارتكاب خطأ يثير قلقي أكثر مما ينبغي.",
      "بدلاً من مواجهة المواقف التي تثير قلقي، أتجنبها.",
      "عند اتخاذ قرارات مهمة، أتردد بسبب قلقي.",
      "يؤثر قلقي سلباً على علاقاتي الاجتماعية.",
      "خلال اليوم، غالباً ما أشعر بعدم الاستقرار أو التوتر الشديد.",
      "بسبب مخاوفي، أجد صعوبة في الاسترخاء.",
      "أعتقد أن قلقي يؤثر سلباً على جودة حياتي اليومية."
    ]
  }
};

const QUESTION_COUNT = 20;
const ADMIN_PASSWORDS = ["sunum-falan-filan", "(sunum-falan-filan)"];
const TEACHER_CODE = "001";
const STUDENT_NO_REGEX = /^\d{11}$/;

const LOCAL_STORAGE_KEY = "kaygi_olcegi_submissions_v2";
const LOCAL_META_KEY = "kaygi_olcegi_meta_v2";
const LANG_STORAGE_KEY = "kaygi_olcegi_lang_v1";
const NTFY_TOPIC = "itopkapi_eray_kaygi_2026_prod";
const NTFY_BASE_URL = `https://ntfy.sh/${NTFY_TOPIC}`;

// Uygulama Durumu
let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || "tr";
if (!I18N[currentLang]) currentLang = "tr";

let currentStudentNo = "";
let isTeacherSession = false;
let isAdminReadOnly = false;
let currentQuestionIndex = 0;
let userAnswers = new Array(QUESTION_COUNT).fill(null);
let cachedSubmissions = [];
let currentlyViewedStudentId = null;
let adminEventSource = null;
const processedEventIds = new Map();
const revealedStudentIds = new Set();

// DOM Referansları
const stepLogin = document.getElementById("step-login");
const stepSurvey = document.getElementById("step-survey");
const stepThanks = document.getElementById("step-thanks");
const stepAdmin = document.getElementById("step-admin");

const langButtons = Array.from(document.querySelectorAll(".lang-btn"));

const loginForm = document.getElementById("login-form");
const studentNoInput = document.getElementById("student-no");
const studentNoError = document.getElementById("student-no-error");
const consentCheck = document.getElementById("consent-check");
const consentError = document.getElementById("consent-error");
const startBtn = document.getElementById("start-btn");

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
const resetTopBtn = document.getElementById("reset-top-btn");
const exitAdminBtn = document.getElementById("exit-admin-btn");
const exportCsvBtn = document.getElementById("export-csv-btn");
const seedDemoBtn = document.getElementById("seed-demo-btn");
const clearDataBtn = document.getElementById("clear-data-btn");
const studentFilterInput = document.getElementById("student-filter");
const adminTableBody = document.getElementById("admin-table-body");
const studentDetailPanel = document.getElementById("student-detail-panel");
const detailStudentTitle = document.getElementById("detail-student-title");
const detailAnswersList = document.getElementById("detail-answers-list");
const closeDetailBtn = document.getElementById("close-detail-btn");
const adminStatus = document.getElementById("admin-status");

function t() {
  return I18N[currentLang] || I18N.tr;
}

// --- DİL DEĞİŞTİRME (TR / EN / AR) ---
function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // localStorage kapalıysa devam et
  }

  const dict = t();
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;
  document.title = dict.pageTitle;

  langButtons.forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  // Giriş Ekranı Metinleri
  document.getElementById("login-badge").textContent = dict.loginBadge;
  document.getElementById("login-heading").textContent = dict.loginHeading;
  document.getElementById("login-subtitle").textContent = dict.loginSubtitle;
  document.getElementById("label-student-no").textContent = dict.labelStudentNo;
  studentNoInput.placeholder = dict.placeholderStudentNo;
  document.getElementById("student-no-hint").textContent = dict.hintStudentNo;
  document.getElementById("label-consent").textContent = dict.labelConsent;
  startBtn.textContent = dict.startBtn;

  if (studentNoInput.getAttribute("aria-invalid") === "true") {
    validateStudentNo();
  }
  if (consentCheck.getAttribute("aria-invalid") === "true") {
    consentError.textContent = dict.errConsent;
  }

  // Anket Seçenekleri
  dict.options.forEach((optLabel, idx) => {
    const el = document.getElementById(`opt-text-${idx + 1}`);
    if (el) el.textContent = optLabel;
  });
  document.getElementById("progress-nav").setAttribute("aria-label", dict.progressLabel);
  prevBtn.textContent = dict.prevBtn;

  if (!stepSurvey.hidden) {
    renderCurrentQuestion();
  }

  // Teşekkür Ekranı
  document.getElementById("thanks-heading").textContent = dict.thanksHeading;
  document.getElementById("thanks-subtitle").textContent = dict.thanksSubtitle;
  returnHomeBtn.textContent = dict.returnHomeBtn;

  // Admin Paneli Metinleri
  updateAdminPermissionsUI();
  document.getElementById("admin-heading").textContent = dict.adminHeading;
  refreshAdminBtn.textContent = dict.refreshBtn;
  resetTopBtn.textContent = dict.resetAllBtn;
  exitAdminBtn.textContent = dict.exitBtn;

  document.getElementById("stat-label-total").textContent = dict.statLabelTotal;
  document.getElementById("stat-sub-total").textContent = dict.statSubTotal;
  document.getElementById("stat-label-avg").textContent = dict.statLabelAvg;
  document.getElementById("stat-sub-avg").textContent = dict.statSubAvg;
  document.getElementById("stat-label-item").textContent = dict.statLabelItem;
  document.getElementById("stat-sub-item").textContent = dict.statSubItem;

  document.getElementById("dist-title").textContent = dict.distTitle;
  document.getElementById("dist-note").textContent = dict.distNote;
  document.getElementById("tier-low-title").textContent = dict.tierLowTitle;
  document.getElementById("tier-low-range").textContent = dict.tierLowRange;
  document.getElementById("tier-mid-title").textContent = dict.tierMidTitle;
  document.getElementById("tier-mid-range").textContent = dict.tierMidRange;
  document.getElementById("tier-high-title").textContent = dict.tierHighTitle;
  document.getElementById("tier-high-range").textContent = dict.tierHighRange;

  document.getElementById("quintile-title").textContent = dict.quintileTitle;
  document.getElementById("students-table-title").textContent = dict.studentsTableTitle;
  exportCsvBtn.textContent = dict.exportCsvBtn;
  seedDemoBtn.textContent = dict.seedDemoBtn;
  clearDataBtn.textContent = dict.resetAllBtn;
  studentFilterInput.placeholder = dict.filterPlaceholder;

  document.getElementById("th-student-no").textContent = dict.thStudentNo;
  document.getElementById("th-total-score").textContent = dict.thTotalScore;
  document.getElementById("th-avg-score").textContent = dict.thAvgScore;
  document.getElementById("th-tier").textContent = dict.thTier;
  document.getElementById("th-time").textContent = dict.thTime;
  document.getElementById("th-actions").textContent = dict.thActions;
  closeDetailBtn.textContent = dict.closeDetailBtn;

  if (!stepAdmin.hidden) {
    renderAdminStats(cachedSubmissions);
    if (!studentDetailPanel.hidden && currentlyViewedStudentId) {
      const st = cachedSubmissions.find((s) => s.id === currentlyViewedStudentId);
      if (st) showStudentDetails(st, false);
    }
  }
}

function updateAdminPermissionsUI() {
  const dict = t();
  stepAdmin.classList.toggle("admin-readonly", isAdminReadOnly);

  document.getElementById("admin-badge").textContent = isAdminReadOnly
    ? dict.adminBadgeReadOnly
    : dict.adminBadge;
  document.getElementById("students-table-note").textContent = isAdminReadOnly
    ? dict.studentsTableNoteReadOnly
    : dict.studentsTableNote;

  // 001 (Hoca / Salt Okunur) modunda veri değiştirme ve silme butonlarını tamamen gizle
  resetTopBtn.hidden = isAdminReadOnly;
  clearDataBtn.hidden = isAdminReadOnly;
  seedDemoBtn.hidden = isAdminReadOnly;
  exportCsvBtn.hidden = isAdminReadOnly;
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedLang = btn.getAttribute("data-lang");
    setLanguage(selectedLang);
  });
});

// --- EKRAN GEÇİŞ YÖNETİMİ ---
function showSection(targetSection, headingId) {
  [stepLogin, stepSurvey, stepThanks, stepAdmin].forEach((sec) => {
    sec.hidden = sec !== targetSection;
  });

  if (targetSection !== stepAdmin && adminEventSource) {
    adminEventSource.close();
    adminEventSource = null;
  }

  const heading = document.getElementById(headingId);
  if (heading) {
    heading.focus();
  }
}

// --- VERİ SAKLAMA (GERÇEK ZAMANLI BULUT AKIŞI + SUNUCU + YEREL YEDEK) ---
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
    // localStorage kapalıysa sessizce devam et
  }
}

function parseNtfyEnvelope(rawLine) {
  try {
    const env = typeof rawLine === "string" ? JSON.parse(rawLine) : rawLine;
    if (!env || env.event !== "message" || typeof env.message !== "string") return null;
    if (!env.message.startsWith("EVT:")) return null;
    const payload = JSON.parse(env.message.slice(4));
    return {
      ntfyId: env.id,
      ntfyTime: (env.time || 0) * 1000,
      payload
    };
  } catch {
    return null;
  }
}

function getLocalMeta() {
  try {
    const raw = localStorage.getItem(LOCAL_META_KEY);
    return raw ? JSON.parse(raw) : { lastResetTs: 0, deletedIds: [] };
  } catch {
    return { lastResetTs: 0, deletedIds: [] };
  }
}

function saveLocalMeta(meta) {
  try {
    localStorage.setItem(LOCAL_META_KEY, JSON.stringify(meta));
  } catch {
    // localStorage kapalıysa devam et
  }
}

function rebuildStateFromEvents() {
  const meta = getLocalMeta();
  let lastResetTs = Number(meta.lastResetTs || 0);
  const deletedSet = new Set(Array.isArray(meta.deletedIds) ? meta.deletedIds : []);

  const allEvents = Array.from(processedEventIds.values()).sort((a, b) => {
    const tA = a.payload.ts || a.payload.entry?.timestamp || a.ntfyTime || 0;
    const tB = b.payload.ts || b.payload.entry?.timestamp || b.ntfyTime || 0;
    return tA - tB;
  });

  // Önce bulut olaylarındaki en son reset zamanını ve silinen ID'leri tespit et
  for (const item of allEvents) {
    const p = item.payload;
    const evTs = Number(p.ts || item.ntfyTime || 0);
    if (p.op === "reset" && evTs >= lastResetTs) {
      lastResetTs = evTs;
      deletedSet.clear();
    } else if (p.op === "delete" && evTs >= lastResetTs && p.id) {
      deletedSet.add(p.id);
    }
  }

  // Yerel hafızadaki eski günlere ait (son reset'ten sonra oluşturulmuş) kayıtları koru
  const byStudentNo = new Map();
  const existingLocal = getLocalSubmissions();
  for (const s of existingLocal) {
    const sTs = Number(s?.timestamp || 0);
    if (s && s.studentNo && sTs > lastResetTs && !deletedSet.has(s.id)) {
      byStudentNo.set(String(s.studentNo).trim(), s);
    }
  }

  // Bulut olaylarını sırayla uygula
  for (const item of allEvents) {
    const p = item.payload;
    const evTs = Number(p.ts || p.entry?.timestamp || item.ntfyTime || 0);
    if (evTs < lastResetTs) continue;

    if (p.op === "reset") {
      byStudentNo.clear();
    } else if (p.op === "submit" && p.entry && p.entry.studentNo) {
      if (!deletedSet.has(p.entry.id)) {
        const cleanNo = String(p.entry.studentNo).trim();
        const prev = byStudentNo.get(cleanNo);
        if (!prev || Number(p.entry.timestamp || 0) >= Number(prev.timestamp || 0)) {
          byStudentNo.set(cleanNo, p.entry);
        }
      }
    } else if (p.op === "delete") {
      for (const [k, val] of byStudentNo.entries()) {
        if (val.id === p.id || (p.studentNo && k === String(p.studentNo).trim())) {
          byStudentNo.delete(k);
        }
      }
    }
  }

  const list = Array.from(byStudentNo.values()).sort(
    (a, b) => Number(a.timestamp || 0) - Number(b.timestamp || 0)
  );

  saveLocalMeta({ lastResetTs, deletedIds: Array.from(deletedSet) });
  cachedSubmissions = list;
  saveLocalSubmissions(list);
  return list;
}

async function publishCloudEvent(payload) {
  try {
    const res = await fetch(NTFY_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: `EVT:${JSON.stringify(payload)}`
    });
    if (res.ok) {
      const env = await res.json();
      const parsed = parseNtfyEnvelope(env);
      if (parsed) {
        processedEventIds.set(parsed.ntfyId, parsed);
        rebuildStateFromEvents();
      }
    }
  } catch {
    // Çevrimdışı durumda yerel yedek kullanılır
  }
}

async function fetchAllSubmissions() {
  try {
    const res = await fetch(`${NTFY_BASE_URL}/json?poll=1&since=all`, {
      cache: "no-store"
    });
    if (res.ok) {
      const text = await res.text();
      const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
      for (const line of lines) {
        const parsed = parseNtfyEnvelope(line);
        if (parsed) {
          processedEventIds.set(parsed.ntfyId, parsed);
        }
      }
      if (processedEventIds.size > 0) {
        return rebuildStateFromEvents();
      }
    }
  } catch {
    // Bulut erişimi yoksa yerel sunucu veya localStorage'a düş
  }

  try {
    const res = await fetch("/api/responses", { cache: "no-store" });
    if (res.ok) {
      const serverData = await res.json();
      if (Array.isArray(serverData.submissions) && serverData.submissions.length > 0) {
        saveLocalSubmissions(serverData.submissions);
        cachedSubmissions = serverData.submissions;
        return serverData.submissions;
      }
    }
  } catch {
    // Statik mod
  }

  const fallback = getLocalSubmissions();
  cachedSubmissions = fallback;
  return fallback;
}

function startRealtimeAdminStream() {
  if (adminEventSource) {
    adminEventSource.close();
    adminEventSource = null;
  }

  try {
    adminEventSource = new EventSource(`${NTFY_BASE_URL}/sse?since=all`);
    adminEventSource.onmessage = (evt) => {
      const parsed = parseNtfyEnvelope(evt.data);
      if (!parsed) return;
      const hadAlready = processedEventIds.has(parsed.ntfyId);
      processedEventIds.set(parsed.ntfyId, parsed);
      const updated = rebuildStateFromEvents();
      if (!stepAdmin.hidden) {
        renderAdminStats(updated);
        if (!hadAlready) {
          const dict = t();
          adminStatus.textContent = dict.statusUpdated(
            new Date().toLocaleTimeString("tr-TR"),
            updated.length
          );
        }
      }
    };
  } catch {
    // EventSource desteklenmiyorsa manuel yenileme çalışır
  }
}

async function syncLocalServer(updatedList) {
  try {
    await fetch("/api/responses", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submissions: updatedList })
    });
  } catch {
    // Statik ortam
  }
}

async function persistSubmission(newEntry) {
  const cleanNo = String(newEntry.studentNo).trim();
  const filtered = cachedSubmissions.filter((item) => String(item.studentNo).trim() !== cleanNo);
  cachedSubmissions = [...filtered, newEntry];
  saveLocalSubmissions(cachedSubmissions);

  await publishCloudEvent({
    op: "submit",
    ts: newEntry.timestamp || Date.now(),
    entry: newEntry
  });

  await syncLocalServer(cachedSubmissions);
}

async function deleteSingleSubmission(targetId) {
  if (isAdminReadOnly) return;
  const targetItem = cachedSubmissions.find((item) => item.id === targetId);
  cachedSubmissions = cachedSubmissions.filter((item) => item.id !== targetId);
  saveLocalSubmissions(cachedSubmissions);

  await publishCloudEvent({
    op: "delete",
    id: targetId,
    studentNo: targetItem?.studentNo || "",
    ts: Date.now()
  });

  await syncLocalServer(cachedSubmissions);
}

async function clearAllSubmissions() {
  if (isAdminReadOnly) return;
  cachedSubmissions = [];
  saveLocalSubmissions([]);

  await publishCloudEvent({
    op: "reset",
    ts: Date.now()
  });

  await syncLocalServer([]);
}

// --- ADIM 1: GİRİŞ DOĞRULAMA (11 HANE KURALI + ADMIN & 001 İSTİSNASI) ---
function isAdminPassword(val) {
  const normalized = String(val || "")
    .toLocaleLowerCase("tr-TR")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[()[\]\s]/g, "")
    .replace(/[–—―_]/g, "-");
  return normalized === "sunum-falan-filan";
}

function isSpecialEntry(val) {
  const trimmed = String(val || "").trim();
  return isAdminPassword(trimmed) || trimmed === TEACHER_CODE;
}

function validateStudentNo() {
  const val = studentNoInput.value.trim();
  const dict = t();

  if (!val) {
    studentNoInput.setCustomValidity(dict.errStudentNoEmpty);
    studentNoInput.setAttribute("aria-invalid", "true");
    studentNoError.textContent = dict.errStudentNoEmpty;
    return false;
  }

  // Admin ("Sunum-Falan-Filan") ve Hoca ("001") 11 hane kuralından muaftır
  if (!isSpecialEntry(val) && !STUDENT_NO_REGEX.test(val)) {
    studentNoInput.setCustomValidity(dict.errStudentNoFormat);
    studentNoInput.setAttribute("aria-invalid", "true");
    studentNoError.textContent = dict.errStudentNoFormat;
    return false;
  }

  studentNoInput.setCustomValidity("");
  studentNoInput.removeAttribute("aria-invalid");
  studentNoError.textContent = "";
  return true;
}

function validateConsent() {
  const dict = t();
  if (!consentCheck.checked) {
    consentCheck.setCustomValidity(dict.errConsent);
    consentCheck.setAttribute("aria-invalid", "true");
    consentError.textContent = dict.errConsent;
    return false;
  }
  consentCheck.setCustomValidity("");
  consentCheck.removeAttribute("aria-invalid");
  consentError.textContent = "";
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

consentCheck.addEventListener("change", () => {
  if (consentCheck.checked) {
    consentCheck.setCustomValidity("");
    consentCheck.removeAttribute("aria-invalid");
    consentError.textContent = "";
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validateStudentNo()) {
    studentNoInput.focus();
    return;
  }

  const entered = studentNoInput.value.trim();

  // 1) Gizli Admin Paneli Kontrolü: "Sunum-Falan-Filan" (Tam Yetkili)
  if (isAdminPassword(entered)) {
    studentNoInput.value = "";
    consentError.textContent = "";
    consentCheck.removeAttribute("aria-invalid");
    isTeacherSession = false;
    openAdminPanel(false);
    return;
  }

  // 2) Normal Öğrenci ve Hoca ("001") Girişinde Onay Kutucuğu Kontrolü
  if (!validateConsent()) {
    consentCheck.focus();
    return;
  }

  // Hoca ("001") girişi mi yoksa 11 haneli öğrenci girişi mi?
  isTeacherSession = entered === TEACHER_CODE;
  currentStudentNo = entered;
  currentQuestionIndex = 0;
  userAnswers = new Array(QUESTION_COUNT).fill(null);
  renderCurrentQuestion();
  showSection(stepSurvey, "question-heading");
});

// --- ADIM 2: SORU GÖSTERİMİ VE İLERİ / GERİ GEÇİŞ ---
function renderCurrentQuestion() {
  const dict = t();
  const qNum = currentQuestionIndex + 1;
  const total = QUESTION_COUNT;
  const pct = Math.round((qNum / total) * 100);

  questionCounter.textContent = dict.questionCounter(qNum, total);
  progressPercent.textContent = dict.progressPct(pct);
  surveyProgress.value = qNum;
  questionHeading.textContent = `${qNum}. ${dict.questions[currentQuestionIndex]}`;
  questionError.textContent = "";

  const savedVal = userAnswers[currentQuestionIndex];
  radioInputs.forEach((input) => {
    input.checked = savedVal !== null && Number(input.value) === savedVal;
  });

  prevBtn.disabled = currentQuestionIndex === 0;
  prevBtn.style.visibility = currentQuestionIndex === 0 ? "hidden" : "visible";
  prevBtn.textContent = dict.prevBtn;

  if (currentQuestionIndex === total - 1) {
    nextBtn.textContent = dict.finishBtn;
    nextBtn.setAttribute("enterkeyhint", "done");
  } else {
    nextBtn.textContent = dict.nextBtn;
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

// PC'de hızlı test için gizli klavye kısayolları: 1-5 ile şık seçimi, Enter ile ilerleme
document.addEventListener("keydown", (e) => {
  if (stepSurvey.hidden || e.isComposing || e.ctrlKey || e.altKey || e.metaKey) {
    return;
  }

  if (["1", "2", "3", "4", "5"].includes(e.key)) {
    e.preventDefault();
    const idx = Number(e.key) - 1;
    const targetRadio = radioInputs[idx];
    if (targetRadio) {
      targetRadio.checked = true;
      userAnswers[currentQuestionIndex] = Number(targetRadio.value);
      questionError.textContent = "";
    }
    return;
  }

  if (e.key === "Enter") {
    e.preventDefault();
    if (!nextBtn.disabled) {
      questionForm.requestSubmit(nextBtn);
    }
  }
});

questionForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const dict = t();

  const selected = radioInputs.find((r) => r.checked);
  if (!selected) {
    questionError.textContent = dict.errQuestion;
    radioInputs[0].focus();
    return;
  }

  userAnswers[currentQuestionIndex] = Number(selected.value);
  questionError.textContent = "";

  if (currentQuestionIndex < QUESTION_COUNT - 1) {
    currentQuestionIndex += 1;
    renderCurrentQuestion();
    questionHeading.focus();
  } else {
    nextBtn.disabled = true;
    nextBtn.textContent = dict.savingBtn;

    const totalScore = userAnswers.reduce((acc, v) => acc + (Number(v) || 1), 0);
    const avgScore = Number((totalScore / QUESTION_COUNT).toFixed(2));

    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      studentNo: currentStudentNo,
      consentApproved: true,
      lang: currentLang,
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

    // Eğer "001" (Hoca) anketi tamamladıysa doğrudan Salt Okunur Admin Panelini aç
    if (isTeacherSession) {
      openAdminPanel(true);
    } else {
      showSection(stepThanks, "thanks-heading");
    }
  }
});

returnHomeBtn.addEventListener("click", () => {
  studentNoInput.value = "";
  consentCheck.checked = false;
  isTeacherSession = false;
  showSection(stepLogin, "login-heading");
});

// --- ADIM 4: ADMİN PANELİ (TAM YETKİLİ VEYA 001 SALT OKUNUR) ---
function getTierInfo(score) {
  const dict = t();
  if (score <= 46) {
    return { key: "low", label: dict.tierLowPill, pillClass: "pill-low" };
  }
  if (score <= 73) {
    return { key: "mid", label: dict.tierMidPill, pillClass: "pill-mid" };
  }
  return { key: "high", label: dict.tierHighPill, pillClass: "pill-high" };
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function maskStudentNo(no) {
  const s = String(no || "").trim();
  if (s.length <= 2) {
    return s.slice(0, 1) + "*".repeat(Math.max(1, s.length - 1));
  }
  return s.slice(0, 2) + "*".repeat(s.length - 2);
}

const EYE_OPEN_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
const EYE_OFF_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`;

async function openAdminPanel(readOnlyMode = false) {
  isAdminReadOnly = Boolean(readOnlyMode);
  revealedStudentIds.clear();
  updateAdminPermissionsUI();
  studentDetailPanel.hidden = true;
  currentlyViewedStudentId = null;
  showSection(stepAdmin, "admin-heading");
  startRealtimeAdminStream();
  await refreshAdminData();
}

async function refreshAdminData() {
  const dict = t();
  adminStatus.textContent = dict.statusUpdating;
  const submissions = await fetchAllSubmissions();
  renderAdminStats(submissions);
  adminStatus.textContent = dict.statusUpdated(
    new Date().toLocaleTimeString("tr-TR"),
    submissions.length
  );
}

function renderAdminStats(submissions) {
  const dict = t();
  const totalCount = submissions.length;
  document.getElementById("stat-total-count").textContent = String(totalCount);

  if (totalCount === 0) {
    document.getElementById("stat-avg-total").textContent = "0";
    document.getElementById("stat-avg-item").textContent = "0.0";

    ["low", "mid", "high"].forEach((k) => {
      document.getElementById(`pct-${k}`).textContent = dict.progressPct(0);
      document.getElementById(`count-${k}`).textContent = dict.personCount(0);
      document.getElementById(`bar-${k}`).style.width = "0%";
    });

    renderQuintiles([]);
    renderStudentTable([]);
    return;
  }

  const sumScores = submissions.reduce((acc, s) => acc + Number(s.totalScore || 0), 0);
  const avgTotal = (sumScores / totalCount).toFixed(1);
  const avgItem = (sumScores / (totalCount * QUESTION_COUNT)).toFixed(2);

  document.getElementById("stat-avg-total").textContent = avgTotal;
  document.getElementById("stat-avg-item").textContent = avgItem;

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

  document.getElementById("pct-low").textContent = dict.progressPct(lowPct);
  document.getElementById("count-low").textContent = dict.personCount(lowCount);
  document.getElementById("bar-low").style.width = `${lowPct}%`;

  document.getElementById("pct-mid").textContent = dict.progressPct(midPct);
  document.getElementById("count-mid").textContent = dict.personCount(midCount);
  document.getElementById("bar-mid").style.width = `${midPct}%`;

  document.getElementById("pct-high").textContent = dict.progressPct(highPct);
  document.getElementById("count-high").textContent = dict.personCount(highCount);
  document.getElementById("bar-high").style.width = `${highPct}%`;

  renderQuintiles(submissions);
  renderStudentTable(submissions);
}

function renderStudentTable(submissions) {
  const dict = t();
  const query = (studentFilterInput?.value || "").trim().toLowerCase();
  const filtered = query
    ? submissions.filter((s) => String(s.studentNo).toLowerCase().includes(query))
    : submissions;

  if (filtered.length === 0) {
    adminTableBody.innerHTML = `
      <tr>
        <td colspan="7" class="empty-row">
          ${escapeHtml(query ? dict.emptySearch : dict.emptyTable)}
        </td>
      </tr>
    `;
    return;
  }

  const reversed = [...filtered].reverse();
  adminTableBody.innerHTML = reversed
    .map((item, idx) => {
      const tier = getTierInfo(Number(item.totalScore));
      const safeId = escapeHtml(item.id);
      const isRevealed = revealedStudentIds.has(item.id);
      const displayedNo = escapeHtml(
        isRevealed ? item.studentNo : maskStudentNo(item.studentNo)
      );
      const safeNo = escapeHtml(item.studentNo);
      const deleteBtnHtml = isAdminReadOnly
        ? ""
        : `<button
            type="button"
            class="btn btn-danger btn-xs"
            data-action="delete"
            data-id="${safeId}"
            data-no="${safeNo}"
          >
            ${escapeHtml(dict.btnDelete)}
          </button>`;

      return `
        <tr>
          <td>${filtered.length - idx}</td>
          <td>
            <div class="student-no-cell">
              <strong class="student-no-text">${displayedNo}</strong>
              <button
                type="button"
                class="eye-toggle-btn"
                data-action="toggle-no"
                data-id="${safeId}"
                aria-pressed="${isRevealed ? "true" : "false"}"
                aria-label="${isRevealed ? "Öğrenci numarasını gizle" : "Öğrenci numarasını göster"}"
              >
                ${isRevealed ? EYE_OFF_SVG : EYE_OPEN_SVG}
              </button>
            </div>
          </td>
          <td><strong>${Number(item.totalScore)}</strong> / 100</td>
          <td>${Number(item.avgScore).toFixed(2)} / 5</td>
          <td><span class="pill ${tier.pillClass}">${escapeHtml(tier.label)}</span></td>
          <td>${escapeHtml(item.dateStr || "-")}</td>
          <td>
            <div class="row-actions">
              <button
                type="button"
                class="btn btn-secondary btn-xs"
                data-action="view"
                data-id="${safeId}"
              >
                ${escapeHtml(dict.btnViewAnswers)}
              </button>
              ${deleteBtnHtml}
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

studentFilterInput.addEventListener("input", () => {
  renderStudentTable(cachedSubmissions);
});

adminTableBody.addEventListener("click", async (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  const dict = t();
  const action = btn.getAttribute("data-action");
  const targetId = btn.getAttribute("data-id");

  if (action === "toggle-no") {
    if (revealedStudentIds.has(targetId)) {
      revealedStudentIds.delete(targetId);
    } else {
      revealedStudentIds.add(targetId);
    }
    renderStudentTable(cachedSubmissions);
    if (!studentDetailPanel.hidden && currentlyViewedStudentId === targetId) {
      const st = cachedSubmissions.find((s) => s.id === targetId);
      if (st) showStudentDetails(st, false);
    }
    return;
  }

  if (action === "view") {
    const student = cachedSubmissions.find((s) => s.id === targetId);
    if (!student) return;
    showStudentDetails(student, true);
    return;
  }

  if (action === "delete") {
    if (isAdminReadOnly) return;
    const studentNo = btn.getAttribute("data-no") || "";
    const ok = window.confirm(dict.confirmDeleteSingle(studentNo));
    if (!ok) return;

    btn.disabled = true;
    btn.textContent = dict.btnDeleting;
    await deleteSingleSubmission(targetId);
    studentDetailPanel.hidden = true;
    currentlyViewedStudentId = null;
    renderAdminStats(cachedSubmissions);
    adminStatus.textContent = dict.statusDeletedSingle(studentNo);
  }
});

function showStudentDetails(student, shouldFocus = true) {
  const dict = t();
  currentlyViewedStudentId = student.id;
  const tier = getTierInfo(Number(student.totalScore));
  const displayedNo = revealedStudentIds.has(student.id)
    ? student.studentNo
    : maskStudentNo(student.studentNo);
  detailStudentTitle.textContent = dict.detailHeader(
    displayedNo,
    student.totalScore,
    tier.label
  );

  const answers = Array.isArray(student.answers) ? student.answers : [];
  detailAnswersList.innerHTML = dict.questions
    .map((qText, i) => {
      const val = Number(answers[i]);
      const optText = val >= 1 && val <= 5 ? `${dict.options[val - 1]} (${val})` : `${val || "-"}`;
      return `
        <div class="detail-answer-card">
          <span class="detail-q-text"><strong>${escapeHtml(dict.detailQPrefix(i + 1))}:</strong> ${escapeHtml(qText)}</span>
          <span class="detail-a-val">${escapeHtml(dict.detailAPrefix)}: ${escapeHtml(optText)}</span>
        </div>
      `;
    })
    .join("");

  studentDetailPanel.hidden = false;
  if (shouldFocus) {
    detailStudentTitle.focus();
  }
}

closeDetailBtn.addEventListener("click", () => {
  studentDetailPanel.hidden = true;
  currentlyViewedStudentId = null;
});

function renderQuintiles(submissions) {
  const dict = t();
  const ranges = [
    { min: 20, max: 35 },
    { min: 36, max: 51 },
    { min: 52, max: 67 },
    { min: 68, max: 83 },
    { min: 84, max: 100 }
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
          <span class="quintile-range">${r.min} – ${r.max} ${escapeHtml(dict.quintilePointSuffix)}</span>
          <strong class="quintile-pct">${escapeHtml(dict.progressPct(pct))}</strong>
          <span class="quintile-cnt">${cnt} ${escapeHtml(dict.quintileStudentSuffix)}</span>
        </div>
      `;
    })
    .join("");
}

refreshAdminBtn.addEventListener("click", () => {
  refreshAdminData();
});

exitAdminBtn.addEventListener("click", () => {
  studentDetailPanel.hidden = true;
  currentlyViewedStudentId = null;
  isTeacherSession = false;
  isAdminReadOnly = false;
  studentNoInput.value = "";
  consentCheck.checked = false;
  showSection(stepLogin, "login-heading");
});

// Excel (CSV) İndirme
exportCsvBtn.addEventListener("click", async () => {
  if (isAdminReadOnly) return;
  const dict = t();
  const submissions = await fetchAllSubmissions();
  if (submissions.length === 0) {
    adminStatus.textContent = dict.statusNoExport;
    return;
  }

  const headers = [
    "Sira",
    "Okul_Numarasi",
    "Onay_Durumu",
    "Toplam_Puan",
    "Ortalama_Puan",
    "Kaygi_Dilimi",
    "Saat",
    ...Array.from({ length: QUESTION_COUNT }, (_, i) => `Soru_${i + 1}`)
  ];

  const rows = submissions.map((s, idx) => {
    const tier = getTierInfo(Number(s.totalScore)).label;
    const ansCols = Array.isArray(s.answers) ? s.answers : [];
    return [
      idx + 1,
      `"${String(s.studentNo).replace(/"/g, '""')}"`,
      '"Onaylandi"',
      s.totalScore,
      s.avgScore,
      `"${tier}"`,
      `"${s.dateStr || ""}"`,
      ...Array.from({ length: QUESTION_COUNT }, (_, i) => ansCols[i] ?? "")
    ].join(";");
  });

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
  if (isAdminReadOnly) return;
  const dict = t();
  seedDemoBtn.disabled = true;
  const randomNo = `2023${Math.floor(1000000 + Math.random() * 9000000)}`;
  const answers = Array.from({ length: QUESTION_COUNT }, () => Math.floor(1 + Math.random() * 5));
  const totalScore = answers.reduce((a, b) => a + b, 0);
  const avgScore = Number((totalScore / QUESTION_COUNT).toFixed(2));

  await persistSubmission({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    studentNo: randomNo,
    consentApproved: true,
    lang: currentLang,
    answers,
    totalScore,
    avgScore,
    timestamp: Date.now(),
    dateStr: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
  });

  renderAdminStats(cachedSubmissions);
  adminStatus.textContent = dict.statusDemoAdded(randomNo);
  seedDemoBtn.disabled = false;
});

async function handleResetAllData() {
  if (isAdminReadOnly) return;
  const dict = t();
  const confirmed = window.confirm(dict.confirmResetAll);
  if (!confirmed) return;

  adminStatus.textContent = dict.statusResetting;
  await clearAllSubmissions();
  studentDetailPanel.hidden = true;
  currentlyViewedStudentId = null;
  renderAdminStats([]);
  adminStatus.textContent = dict.statusResetDone;
}

clearDataBtn.addEventListener("click", handleResetAllData);
resetTopBtn.addEventListener("click", handleResetAllData);

// İlk Yüklemede Seçili Dili Uygula
setLanguage(currentLang);
