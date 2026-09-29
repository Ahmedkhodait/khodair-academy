const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>KHODAIR ACADEMY</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Arial, sans-serif; background: #f5efd5; color: #2a2418; min-height: 100vh; }
header { background: #d6b85a; padding: 15px 25px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; }
.logo-text { color: #1a1509; font-size: 22px; font-weight: bold; }
.subtitle { color: #3a3020; font-size: 12px; }
.header-actions { display: flex; gap: 8px; flex-wrap: wrap; }
.header-actions button, .contact-btn, .email-btn { padding: 8px 14px; font-size: 12px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: inherit; text-decoration: none; display: inline-block; }
.header-actions button { background: #1a1509; color: #d6b85a; }
.contact-btn { background: #25D366; color: #fff; }
.email-btn { background: #ea4335; color: #fff; }
main { max-width: 1200px; margin: 0 auto; padding: 35px 20px; }
.welcome { text-align: center; margin-bottom: 40px; }
.welcome h1 { color: #8b6f1f; font-size: 32px; margin-bottom: 12px; }
.welcome p { color: #3a3020; font-size: 16px; line-height: 1.8; max-width: 700px; margin: 0 auto; }
.progress-overview { background: #fff; border: 2px solid #d6b85a; border-radius: 12px; padding: 22px; margin-bottom: 35px; text-align: center; }
.progress-overview h3 { color: #8b6f1f; font-size: 15px; margin-bottom: 12px; }
.progress-bar-main { background: #e8dcc0; height: 24px; border-radius: 12px; overflow: hidden; margin-bottom: 10px; }
.progress-fill-main { height: 100%; background: linear-gradient(90deg, #b8963d, #d6b85a); width: 0%; transition: width 0.8s; }
.progress-text { color: #2a2418; font-size: 13px; }
.progress-text strong { color: #8b6f1f; font-size: 16px; }
.modules-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 22px; }
.module-card { background: #fff; border: 2px solid #d6b85a; border-radius: 15px; padding: 25px; cursor: pointer; }
.module-card:hover { background: #fdf9ea; border-color: #8b6f1f; }
.module-icon { font-size: 45px; margin-bottom: 12px; display: block; }
.module-title { color: #8b6f1f; font-size: 18px; font-weight: bold; margin-bottom: 6px; }
.module-desc { color: #3a3020; font-size: 13px; line-height: 1.6; margin-bottom: 12px; }
.module-meta { display: flex; justify-content: space-between; color: #7a6a3a; font-size: 12px; margin-bottom: 12px; padding-top: 12px; border-top: 1px dashed #d6b85a; }
.module-start-btn { background: #d6b85a; color: #1a1509; border: none; padding: 11px; border-radius: 8px; font-weight: bold; font-size: 13px; cursor: pointer; width: 100%; font-family: inherit; }
footer { text-align: center; padding: 25px; color: #7a6a3a; font-size: 12px; border-top: 1px solid #d6b85a; }
.modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(26,21,9,0.75); display: none; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
.modal-overlay.show { display: flex; }
.modal-box { background: #fff; border: 3px solid #d6b85a; border-radius: 15px; padding: 32px; max-width: 560px; width: 100%; text-align: center; }
.modal-box h2 { color: #8b6f1f; font-size: 22px; margin-bottom: 12px; }
.modal-box p { color: #3a3020; line-height: 1.7; margin-bottom: 12px; }
.modal-close { background: #d6b85a; color: #1a1509; border: none; padding: 11px 30px; border-radius: 8px; font-weight: bold; font-size: 14px; cursor: pointer; margin-top: 15px; font-family: inherit; }
.login-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #f5efd5; display: flex; align-items: center; justify-content: center; z-index: 9999; }
.login-box { background: #fff; border: 3px solid #d6b85a; border-radius: 15px; padding: 40px; max-width: 420px; width: 90%; text-align: center; }
.login-box h1 { color: #8b6f1f; font-size: 22px; margin-bottom: 8px; }
.login-box p { color: #3a3020; font-size: 13px; margin-bottom: 22px; }
.login-box input { width: 100%; padding: 14px; font-size: 15px; text-align: center; margin-bottom: 12px; background: #f5efd5; color: #2a2418; border: 2px solid #d6b85a; border-radius: 8px; font-family: inherit; }
.login-box button { width: 100%; padding: 14px; background: #d6b85a; color: #1a1509; border: none; border-radius: 8px; font-weight: bold; font-size: 15px; cursor: pointer; font-family: inherit; }
.login-error { color: #c0392b; font-size: 13px; margin-top: 10px; display: none; }
.login-error.show { display: block; }
.scenario-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #f5efd5; display: none; z-index: 5000; overflow-y: auto; padding: 15px; }
.scenario-overlay.show { display: block; }
.scenario-container { max-width: 780px; margin: 0 auto; padding: 25px 15px 60px; }
.scenario-topbar { display: flex; justify-content: space-between; align-items: center; background: #fff; border: 2px solid #d6b85a; border-radius: 10px; padding: 10px 18px; margin-bottom: 20px; }
.scenario-title { color: #8b6f1f; font-weight: bold; font-size: 14px; }
.scenario-score { background: #f5efd5; padding: 5px 12px; border-radius: 15px; font-size: 12px; }
.scenario-score strong { color: #8b6f1f; }
.scenario-close { background: none; border: 2px solid #8b6f1f; color: #8b6f1f; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-weight: bold; font-family: inherit; }
.scenario-progress { width: 100%; height: 4px; background: #e8dcc0; border-radius: 2px; margin-bottom: 25px; overflow: hidden; }
.scenario-progress-fill { height: 100%; background: linear-gradient(90deg, #d6b85a, #8b6f1f); width: 0%; transition: width 0.5s; }
.char-area { text-align: center; margin-bottom: 18px; }
.char-avatar { font-size: 80px; display: inline-block; }
.char-name { color: #8b6f1f; font-size: 18px; font-weight: bold; margin-top: 8px; }
.char-role { color: #3a3020; font-size: 12px; margin-top: 3px; }
.speech { background: #fff; border: 2px solid #d6b85a; border-radius: 15px; padding: 22px; margin: 22px 0; position: relative; }
.speech-text { color: #2a2418; font-size: 15px; line-height: 1.9; text-align: right; padding-top: 10px; }
.speech-text strong { color: #8b6f1f; }
.voice-btn { position: absolute; top: 8px; left: 8px; background: #d6b85a; color: #1a1509; border: none; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; font-size: 16px; }
.choices { display: flex; flex-direction: column; gap: 10px; margin-top: 18px; }
.choice-btn { background: #fff; border: 2px solid #d6b85a; color: #2a2418; padding: 14px 18px; border-radius: 10px; text-align: right; font-size: 14px; font-family: inherit; cursor: pointer; line-height: 1.6; display: flex; gap: 10px; align-items: flex-start; }
.choice-btn:hover { background: #fdf9ea; border-color: #8b6f1f; }
.choice-num { background: #d6b85a; color: #1a1509; width: 24px; height: 24px; line-height: 24px; text-align: center; border-radius: 50%; font-weight: bold; flex-shrink: 0; font-size: 12px; }
.choice-text { flex: 1; }
.feedback { margin-top: 18px; padding: 14px 18px; border-radius: 10px; font-size: 14px; line-height: 1.7; display: none; }
.feedback.show { display: block; }
.feedback.positive { background: #d5f5e0; border-right: 5px solid #4a9d6e; color: #1e5a3a; }
.feedback.negative { background: #fadbd8; border-right: 5px solid #c0392b; color: #7b241c; }
.feedback.neutral { background: #fdf3d0; border-right: 5px solid #d6b85a; color: #7a5c0f; }
.continue-btn { background: #d6b85a; color: #1a1509; border: none; padding: 13px 35px; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; margin-top: 18px; font-family: inherit; }
.ending-area { text-align: center; padding: 25px 15px; }
.ending-icon { font-size: 90px; margin: 15px 0; }
.ending-title { color: #8b6f1f; font-size: 24px; font-weight: bold; margin: 12px 0; }
.ending-desc { color: #2a2418; font-size: 15px; line-height: 1.9; max-width: 620px; margin: 0 auto 20px; padding: 18px; background: #fff; border-radius: 12px; border-right: 5px solid #d6b85a; text-align: right; }
.final-score-box { display: inline-block; background: #fff; border: 3px solid #d6b85a; padding: 18px 40px; border-radius: 15px; margin: 18px 0; }
.final-score-label { color: #3a3020; font-size: 12px; margin-bottom: 6px; }
.final-score-value { color: #8b6f1f; font-size: 38px; font-weight: bold; }
.action-btn { background: #d6b85a; color: #1a1509; border: none; padding: 12px 30px; border-radius: 8px; font-size: 14px; font-weight: bold; cursor: pointer; margin: 15px 5px 0; font-family: inherit; }
.action-btn.secondary { background: transparent; color: #8b6f1f; border: 2px solid #8b6f1f; }
.action-btn.share { background: #25D366; color: #fff; }
.voice-global { position: fixed; bottom: 20px; left: 20px; background: #d6b85a; color: #1a1509; border: 2px solid #8b6f1f; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; font-size: 20px; z-index: 9997; }
.voice-global.muted { background: #ccc; color: #888; }
@media (max-width: 700px) { .modules-grid { grid-template-columns: 1fr; } .welcome h1 { font-size: 24px; } }
</style>
</head>
<body>
<button class="voice-global" id="voiceGlobal">🔊</button>
<div class="login-overlay" id="loginOverlay">
  <div class="login-box">
    <h1>KHODAIR ACADEMY</h1>
    <p>أكاديمية الحوكمة والقيادة</p>
    <input type="password" id="accessPassword" placeholder="أدخل كلمة المرور">
    <button id="loginBtn">دخول</button>
    <div class="login-error" id="loginError">كلمة المرور غير صحيحة</div>
  </div>
</div>
<header>
  <div>
    <div class="logo-text">KHODAIR ACADEMY</div>
    <div class="subtitle">أكاديمية الحوكمة والقيادة التفاعلية</div>
  </div>
  <div class="header-actions">
    <button id="aboutBtn">عن التطبيق</button>
    <a class="contact-btn" href="https://wa.me/201061396019" target="_blank">واتساب</a>
    <a class="email-btn" href="mailto:ahmedkhodair33@gmail.com">إيميل</a>
    <button id="resetBtn">إعادة تعيين</button>
  </div>
</header>
<main>
  <div class="welcome">
    <h1>رحلتك التعليمية التفاعلية</h1>
    <p>خمس وحدات تفاعلية تأخذك في رحلة عبر الحوكمة، والتخطيط الاستراتيجي، والتنمية المستدامة، والقيادة، واتخاذ القرار.</p>
  </div>
  <div class="progress-overview">
    <h3>تقدمك الإجمالي</h3>
    <div class="progress-bar-main"><div class="progress-fill-main" id="mainProgressFill"></div></div>
    <div class="progress-text">أكملت <strong id="modulesCompleted">0</strong> من <strong>5</strong> وحدات - <span id="overallPercent">0%</span></div>
  </div>
  <div class="modules-grid" id="modulesGrid"></div>
</main>
<footer>
  <p>KHODAIR ACADEMY - أكاديمية الحوكمة والقيادة التفاعلية</p>
  <p style="margin-top:6px;">2026 أحمد محروس خضير - جميع الحقوق محفوظة</p>
</footer>
<div class="scenario-overlay" id="scenarioOverlay">
  <div class="scenario-container">
    <div class="scenario-topbar">
      <div class="scenario-title" id="scenarioTitle">وحدة</div>
      <div class="scenario-score">النقاط: <strong id="scenarioScore">0</strong></div>
      <button class="scenario-close" id="scenarioCloseBtn">X</button>
    </div>
    <div class="scenario-progress"><div class="scenario-progress-fill" id="scenarioProgressFill"></div></div>
    <div id="scenarioContent"></div>
  </div>
</div>
<div class="modal-overlay" id="aboutModal">
  <div class="modal-box">
    <h2>KHODAIR ACADEMY</h2>
    <p>أكاديمية الحوكمة والقيادة التفاعلية</p>
    <p style="margin-top:15px;">للاستفسار والشراء:</p>
    <p><strong>واتساب:</strong> 01061396019</p>
    <p><strong>إيميل:</strong> ahmedkhodair33@gmail.com</p>
    <p style="margin-top:15px;"><strong>أحمد محروس خضير</strong></p>
    <p>كلية السياحة والفنادق - جامعة مدينة السادات</p>
    <button class="modal-close" id="closeAboutBtn">إغلاق</button>
  </div>
</div>
<script>var MODULES = [
  { id: "governance", icon: "🏛️", title: "الحوكمة والشفافية", desc: "اختبار تفاعلي للحوكمة الرشيدة", duration: "15 دقيقة" },
  { id: "strategic", icon: "📊", title: "التخطيط الاستراتيجي", desc: "رحلة في بناء الرؤية والتحليل", duration: "20 دقيقة" },
  { id: "sustainability", icon: "🌍", title: "التنمية المستدامة", desc: "قرارات مصيرية في الاستدامة", duration: "18 دقيقة" },
  { id: "leadership", icon: "🤝", title: "القيادة وإدارة الفرق", desc: "اكتشاف نمطك القيادي", duration: "20 دقيقة" },
  { id: "decision", icon: "🎯", title: "اتخاذ القرار", desc: "مواقف حرجة تحتاج قرارات", duration: "15 دقيقة" }
];
var STATE_KEY = "khodair_academy_state";
var state = { completed: [], scores: {} };
var voiceEnabled = true, arabicVoice = null;
var currentModule = null, currentScene = null, currentScore = 0, sceneCount = 0, totalScenes = 0;

function loadState() { try { var s = localStorage.getItem(STATE_KEY); if (s) state = JSON.parse(s); } catch(e) {} }
function saveState() { try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch(e) {} }

function renderModules() {
  var grid = document.getElementById("modulesGrid");
  var html = "";
  for (var i = 0; i < MODULES.length; i++) {
    var m = MODULES[i];
    var done = state.completed.indexOf(m.id) >= 0;
    var score = state.scores[m.id] || null;
    html += "<div class='module-card " + (done ? "completed" : "") + "' data-module='" + m.id + "'>";
    html += "<div class='module-icon'>" + m.icon + "</div>";
    html += "<div class='module-title'>" + m.title + "</div>";
    html += "<div class='module-desc'>" + m.desc + "</div>";
    html += "<div class='module-meta'><span>" + m.duration + "</span>";
    if (score !== null) html += "<span>" + score + "%</span>";
    html += "</div>";
    html += "<button class='module-start-btn'>" + (done ? "إعادة" : "ابدأ") + "</button></div>";
  }
  grid.innerHTML = html;
  var cards = grid.querySelectorAll(".module-card");
  for (var j = 0; j < cards.length; j++) {
    cards[j].addEventListener("click", function() { startModule(this.getAttribute("data-module")); });
  }
  updateProgress();
}

function updateProgress() {
  var done = state.completed.length;
  var pct = Math.round((done / 5) * 100);
  document.getElementById("modulesCompleted").innerText = done;
  document.getElementById("overallPercent").innerText = pct + "%";
  document.getElementById("mainProgressFill").style.width = pct + "%";
}

function resetAll() {
  if (!confirm("إعادة تعيين كل التقدم؟")) return;
  state = { completed: [], scores: {} };
  saveState();
  renderModules();
}

function initVoice() {
  if (!('speechSynthesis' in window)) return;
  function loadVoices() {
    var voices = speechSynthesis.getVoices();
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].lang.indexOf('ar') === 0) { arabicVoice = voices[i]; break; }
    }
  }
  loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = loadVoices;
}

function speakText(text) {
  if (!voiceEnabled || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  var clean = text.replace(/<[^>]*>/g, '');
  var u = new SpeechSynthesisUtterance(clean);
  u.lang = 'ar-EG';
  u.rate = 0.95;
  if (arabicVoice) u.voice = arabicVoice;
  speechSynthesis.speak(u);
}

function stopSpeaking() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }

function toggleVoice() {
  voiceEnabled = !voiceEnabled;
  var btn = document.getElementById("voiceGlobal");
  btn.innerText = voiceEnabled ? "🔊" : "🔇";
  if (voiceEnabled) btn.classList.remove("muted");
  else { btn.classList.add("muted"); stopSpeaking(); }
}

var SCENARIOS = {};

SCENARIOS.governance = {
  title: "الحوكمة والشفافية",
  startScene: "s1",
  scenes: {
    s1: { char: { avatar: "🎩", name: "معالي الوزير", role: "وزير المالية" },
      speech: "أهلا بك يا مستشار. هناك شبهات فساد في إحدى الإدارات. من أين نبدأ؟",
      choices: [
        { text: "مراجعة الميزانيات والحسابات.", score: 1, feedback: "المشكلة قد تكون أعمق من المال.", type: "neutral", next: "s2" },
        { text: "تقييم منظومة الحوكمة.", score: 3, feedback: "قرار ممتاز! الحوكمة هي الأساس.", type: "positive", next: "s2" },
        { text: "إقالة المتورطين فورا.", score: 0, feedback: "التسرع يزيد المشكلة.", type: "negative", next: "s2" }
      ]
    },
    s2: { char: { avatar: "💼", name: "مدير المراجعة", role: "إدارة المراجعة" },
      speech: "المشكلة: غياب الفصل بين السلطات، غياب الشفافية، ضعف المساءلة.",
      choices: [
        { text: "الفصل بين السلطات أولا.", score: 3, feedback: "حجر الأساس!", type: "positive", next: "s3" },
        { text: "الشفافية أولا.", score: 2, feedback: "خطوة جيدة.", type: "positive", next: "s3" },
        { text: "المساءلة أولا.", score: 1, feedback: "قد تصبح أداة انتقام.", type: "neutral", next: "s3" }
      ]
    },
    s3: { char: { avatar: "👨‍💼", name: "أحمد", role: "موظف قديم" },
      speech: "شفت مبادرات كتير فشلت. الموظفين مش هيصدقوا إلا لو شافوا نتيجة.",
      choices: [
        { text: "حملة توعية.", score: 1, feedback: "الكلام لا يكفي.", type: "neutral", next: "s4" },
        { text: "مشروع صغير ناجح خلال 90 يوم.", score: 3, feedback: "Quick Win!", type: "positive", next: "s4" },
        { text: "إجبار على التعهدات.", score: 0, feedback: "الإجبار يخلق مقاومة.", type: "negative", next: "s4" }
      ]
    },
    s4: { char: { avatar: "🎓", name: "خبير دولي", role: "البنك الدولي" },
      speech: "الحوكمة ثقافة. كيف تضمنون الاستدامة؟",
      choices: [
        { text: "الاعتماد على القيادة.", score: 1, feedback: "خطر.", type: "neutral", next: "end" },
        { text: "بناء منظومة مؤسسية دائمة.", score: 3, feedback: "المؤسسات تبقى.", type: "positive", next: "end" },
        { text: "التعاقد مع شركة أجنبية.", score: 0, feedback: "يمنع بناء القدرات.", type: "negative", next: "end" }
      ]
    }
  },
  endings: [
    { minScore: 10, icon: "🏆", title: "مستشار بارع", desc: "رؤية متكاملة للحوكمة." },
    { minScore: 6, icon: "👍", title: "مستشار جيد", desc: "قرارات سليمة." },
    { minScore: 3, icon: "⚠️", title: "مستشار متوسط", desc: "بعض الفجوات." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "حلول سريعة." }
  ]
};

SCENARIOS.strategic = {
  title: "التخطيط الاستراتيجي",
  startScene: "s1",
  scenes: {
    s1: { char: { avatar: "🏢", name: "رئيس الإدارة", role: "شركة حكومية" },
      speech: "نحتاج خطة استراتيجية. من أين نبدأ؟",
      choices: [
        { text: "تحليل البيئة SWOT.", score: 3, feedback: "أساس أي خطة.", type: "positive", next: "s2" },
        { text: "الأهداف المالية.", score: 1, feedback: "قد تكون غير واقعية.", type: "neutral", next: "s2" },
        { text: "تقليد المنافسين.", score: 0, feedback: "التقليد الأعمى فشل.", type: "negative", next: "s2" }
      ]
    },
    s2: { char: { avatar: "📊", name: "مدير التخطيط", role: "التخطيط" },
      speech: "3 نقاط ضعف: ضعف رقمي، غياب ابتكار، بطء قرار.",
      choices: [
        { text: "القدرات الرقمية أولا.", score: 3, feedback: "قرار استراتيجي!", type: "positive", next: "s3" },
        { text: "ثقافة الابتكار.", score: 2, feedback: "يحتاج أدوات.", type: "positive", next: "s3" },
        { text: "سرعة القرار.", score: 1, feedback: "قد تكون متسرعة.", type: "neutral", next: "s3" }
      ]
    },
    s3: { char: { avatar: "💰", name: "المدير المالي", role: "المالية" },
      speech: "الميزانية 30% فقط.",
      choices: [
        { text: "تأجيل الخطة.", score: 0, feedback: "خسارة الفرصة.", type: "negative", next: "end" },
        { text: "تنفيذ مرحلي.", score: 3, feedback: "قرار حكيم!", type: "positive", next: "end" },
        { text: "تقليل النطاق.", score: 1, feedback: "يضعف الأثر.", type: "neutral", next: "end" }
      ]
    }
  },
  endings: [
    { minScore: 8, icon: "🏆", title: "استراتيجي بارع", desc: "رؤية متكاملة." },
    { minScore: 5, icon: "👍", title: "استراتيجي جيد", desc: "قرارات صحيحة." },
    { minScore: 2, icon: "⚠️", title: "مبتدئ", desc: "بعض التسرع." },
    { minScore: 0, icon: "😕", title: "يحتاج تطوير", desc: "قرارات سطحية." }
  ]
};

SCENARIOS.sustainability = {
  title: "التنمية المستدامة",
  startScene: "s1",
  scenes: {
    s1: { char: { avatar: "🌍", name: "وزير البيئة", role: "وزارة البيئة" },
      speech: "رؤية 2030 للتنمية المستدامة. من أين نبدأ؟",
      choices: [
        { text: "حملة توعية.", score: 1, feedback: "قد تبقى شعارات.", type: "neutral", next: "s2" },
        { text: "قياس البصمة البيئية.", score: 3, feedback: "قرار علمي!", type: "positive", next: "s2" },
        { text: "فرض غرامات.", score: 0, feedback: "يخلق مقاومة.", type: "negative", next: "s2" }
      ]
    },
    s2: { char: { avatar: "🏭", name: "مدير مصنع", role: "الصناعة" },
      speech: "التحول مكلف. 50 مليون لمصنعي.",
      choices: [
        { text: "تمويل ميسر.", score: 3, feedback: "قرار ممتاز!", type: "positive", next: "s3" },
        { text: "الاستدامة استثمار.", score: 1, feedback: "بدون دعم لن يقتنع.", type: "neutral", next: "s3" },
        { text: "إعفاء ضريبي.", score: 3, feedback: "قرار حكيم!", type: "positive", next: "s3" }
      ]
    },
    s3: { char: { avatar: "👨‍🌾", name: "ممثل المزارعين", role: "النقابة" },
      speech: "المزارعون يعانون من شح المياه.",
      choices: [
        { text: "نظام ري بالالزام.", score: 1, feedback: "قد يفشل.", type: "neutral", next: "end" },
        { text: "شراكة مع القطاع الخاص.", score: 3, feedback: "قرار متكامل!", type: "positive", next: "end" },
        { text: "تغيير المحاصيل.", score: 2, feedback: "قد يقابل بمقاومة.", type: "positive", next: "end" }
      ]
    }
  },
  endings: [
    { minScore: 8, icon: "🏆", title: "خبير استدامة", desc: "رؤية متكاملة." },
    { minScore: 5, icon: "🌱", title: "صديق البيئة", desc: "قرارات متوازنة." },
    { minScore: 2, icon: "⚠️", title: "مبتدئ", desc: "جانب واحد." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "بدون رؤية." }
  ]
};

SCENARIOS.leadership = {
  title: "القيادة وإدارة الفرق",
  startScene: "s1",
  scenes: {
    s1: { char: { avatar: "👔", name: "المدير التنفيذي", role: "شركة خدمات" },
      speech: "تم تعيينك لقيادة فريق. كيف ستبدأ؟",
      choices: [
        { text: "اجتماع تعريفي.", score: 3, feedback: "قرار قيادي سليم!", type: "positive", next: "s2" },
        { text: "البدء مباشرة.", score: 1, feedback: "تداخل المهام.", type: "neutral", next: "s2" },
        { text: "تركهم ينظمون أنفسهم.", score: 0, feedback: "قد يؤدي للفوضى.", type: "negative", next: "s2" }
      ]
    },
    s2: { char: { avatar: "👩‍💻", name: "سارة", role: "مطورة" },
      speech: "مش مرتاحة في الاجتماعات.",
      choices: [
        { text: "التكيف مع الفريق.", score: 0, feedback: "قد تفقدك موهبة.", type: "negative", next: "s3" },
        { text: "مساحة للعمل المستقل.", score: 3, feedback: "قرار ذكي!", type: "positive", next: "s3" },
        { text: "قيادة اجتماع.", score: 2, feedback: "قد يكون مرهقا.", type: "positive", next: "s3" }
      ]
    },
    s3: { char: { avatar: "👨‍💼", name: "خالد", role: "موظف قديم" },
      speech: "شفت فرق بتفشل. إيه المختلف؟",
      choices: [
        { text: "الفريق فرصة لك.", score: 2, feedback: "يحتاج دليلا.", type: "positive", next: "end" },
        { text: "منحه دور قيادي.", score: 3, feedback: "تحويل المقاوم لشريك!", type: "positive", next: "end" },
        { text: "تجاهله.", score: 0, feedback: "مشاكل مستقبلية.", type: "negative", next: "end" }
      ]
    }
  },
  endings: [
    { minScore: 8, icon: "🏆", title: "قائد استثنائي", desc: "نموذج راق." },
    { minScore: 5, icon: "🌟", title: "قائد جيد", desc: "قرارات متوازنة." },
    { minScore: 2, icon: "⚠️", title: "قائد مبتدئ", desc: "قرارات تقليدية." },
    { minScore: 0, icon: "😕", title: "يحتاج تطوير", desc: "ركز على المهام." }
  ]
};

SCENARIOS.decision = {
  title: "اتخاذ القرار",
  startScene: "s1",
  scenes: {
    s1: { char: { avatar: "🚨", name: "مدير الأزمات", role: "العمليات" },
      speech: "أزمة عاجلة: انقطاع كهرباء. 6 ساعات فقط.",
      choices: [
        { text: "انتظار تقرير.", score: 0, feedback: "الوقت حاسم.", type: "negative", next: "s2" },
        { text: "احتواء فوري + جمع معلومات.", score: 3, feedback: "قرار حكيم!", type: "positive", next: "s2" },
        { text: "إعلان طوارئ.", score: 1, feedback: "يخلق هلعا.", type: "neutral", next: "s2" }
      ]
    },
    s2: { char: { avatar: "📊", name: "رئيس التحليل", role: "البيانات" },
      speech: "3 احتمالات: عطل، نقص وقود، هجوم.",
      choices: [
        { text: "تحليل أعمق.", score: 1, feedback: "الوقت ضيق.", type: "neutral", next: "s3" },
        { text: "التعامل مع الثلاثة بالتوازي.", score: 3, feedback: "قرار ذكي!", type: "positive", next: "s3" },
        { text: "اختيار الأكثر ترجيحا.", score: 1, feedback: "قد يكون متسرعا.", type: "neutral", next: "s3" }
      ]
    },
    s3: { char: { avatar: "📢", name: "مدير الإعلام", role: "المتحدث" },
      speech: "الإعلام يتصل. الرسالة الرسمية؟",
      choices: [
        { text: "كل شيء تحت السيطرة.", score: 0, feedback: "تضليل.", type: "negative", next: "end" },
        { text: "الشفافية الكاملة.", score: 3, feedback: "قرار شجاع!", type: "positive", next: "end" },
        { text: "تأجيل المؤتمر.", score: 1, feedback: "الصمت يخلق فراغا.", type: "neutral", next: "end" }
      ]
    }
  },
  endings: [
    { minScore: 8, icon: "🏆", title: "قائد أزمات محترف", desc: "مهارات استثنائية." },
    { minScore: 5, icon: "🎯", title: "متخذ قرار جيد", desc: "قرارات صحيحة." },
    { minScore: 2, icon: "⚠️", title: "تحت التطوير", desc: "بعض التردد." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "بدون توازن." }
  ]
};

function startModule(id) {
  if (!SCENARIOS[id]) { alert("قريبا"); return; }
  currentModule = SCENARIOS[id];
  currentScene = currentModule.startScene;
  currentScore = 0; sceneCount = 0;
  totalScenes = Object.keys(currentModule.scenes).length;
  document.getElementById("scenarioTitle").innerText = currentModule.title;
  document.getElementById("scenarioScore").innerText = "0";
  document.getElementById("scenarioProgressFill").style.width = "0%";
  document.getElementById("scenarioOverlay").classList.add("show");
  renderScene(currentScene);
}

function renderScene(sceneId) {
  var scene = currentModule.scenes[sceneId];
  if (!scene) { showEnding(); return; }
  currentScene = sceneId;
  sceneCount++;
  var pct = (sceneCount / totalScenes) * 100;
  document.getElementById("scenarioProgressFill").style.width = Math.min(pct, 100) + "%";
  var html = "";
  html += "<div class='char-area'><div class='char-avatar'>" + scene.char.avatar + "</div>";
  html += "<div class='char-name'>" + scene.char.name + "</div>";
  html += "<div class='char-role'>" + scene.char.role + "</div></div>";
  html += "<div class='speech'><button class='voice-btn' id='speakBtn'>🔊</button>";
  html += "<div class='speech-text'>" + scene.speech + "</div></div>";
  html += "<div class='feedback' id='feedbackArea'></div>";
  html += "<div class='choices' id='choicesArea'>";
  for (var i = 0; i < scene.choices.length; i++) {
    html += "<button class='choice-btn' data-choice='" + i + "'>";
    html += "<span class='choice-num'>" + (i+1) + "</span>";
    html += "<span class='choice-text'>" + scene.choices[i].text + "</span></button>";
  }
  html += "</div>";
  html += "<div style='text-align:center;'><button class='continue-btn' id='continueBtn' style='display:none;'>التالي</button></div>";
  document.getElementById("scenarioContent").innerHTML = html;
  var btns = document.querySelectorAll(".choice-btn");
  for (var j = 0; j < btns.length; j++) btns[j].addEventListener("click", handleChoice);
  var sb = document.getElementById("speakBtn");
  if (sb) sb.addEventListener("click", function(e) { e.stopPropagation(); speakText(scene.speech); });
  if (voiceEnabled) setTimeout(function() { speakText(scene.speech); }, 400);
  window.scrollTo(0, 0);
}

function handleChoice(e) {
  stopSpeaking();
  var btn = e.currentTarget;
  var idx = parseInt(btn.getAttribute("data-choice"));
  var scene = currentModule.scenes[currentScene];
  var choice = scene.choices[idx];
  currentScore += choice.score;
  document.getElementById("scenarioScore").innerText = currentScore;
  var fb = document.getElementById("feedbackArea");
  var icon = choice.type === "positive" ? "✅" : (choice.type === "negative" ? "❌" : "💡");
  fb.className = "feedback show " + choice.type;
  fb.innerHTML = "<strong>" + icon + "</strong> " + choice.feedback;
  var btns = document.querySelectorAll(".choice-btn");
  for (var i = 0; i < btns.length; i++) { btns[i].disabled = true; btns[i].style.opacity = "0.4"; }
  btn.style.opacity = "1";
  var cb = document.getElementById("continueBtn");
  cb.style.display = "inline-block";
  cb.setAttribute("data-next", choice.next);
  cb.addEventListener("click", goNext);
}

function goNext() {
  var next = document.getElementById("continueBtn").getAttribute("data-next");
  if (next === "end" || !currentModule.scenes[next]) { showEnding(); return; }
  renderScene(next);
}

function showEnding() {
  stopSpeaking();
  var ending = null;
  for (var i = 0; i < currentModule.endings.length; i++) {
    if (currentScore >= currentModule.endings[i].minScore) { ending = currentModule.endings[i]; break; }
  }
  if (!ending) ending = currentModule.endings[currentModule.endings.length - 1];
  var maxScore = totalScenes * 3;
  var pct = Math.round((currentScore / maxScore) * 100);
  if (pct > 100) pct = 100;
  var html = "";
  html += "<div class='ending-area'>";
  html += "<div class='ending-icon'>" + ending.icon + "</div>";
  html += "<div class='ending-title'>" + ending.title + "</div>";
  html += "<div class='ending-desc'>" + ending.desc + "</div>";
  html += "<div class='final-score-box'><div class='final-score-label'>مجموع نقاطك</div>";
  html += "<div class='final-score-value'>" + currentScore + " / " + maxScore + "</div>";
  html += "<div class='final-score-label'>" + pct + "%</div></div>";
  html += "<div><button class='action-btn' id='restartBtn'>إعادة</button>";
  html += "<button class='action-btn share' id='shareBtn'>شارك النتيجة</button>";
  html += "<button class='action-btn secondary' id='backBtn'>الرئيسية</button></div></div>";
  document.getElementById("scenarioContent").innerHTML = html;
  document.getElementById("scenarioProgressFill").style.width = "100%";
  var moduleId = findModuleIdByTitle(currentModule.title);
  if (moduleId) {
    if (state.completed.indexOf(moduleId) < 0) state.completed.push(moduleId);
    state.scores[moduleId] = pct;
    saveState();
    renderModules();
  }
  document.getElementById("restartBtn").addEventListener("click", function() { startModule(moduleId); });
  document.getElementById("shareBtn").addEventListener("click", function() {
    var text = "أكملت وحدة " + currentModule.title + " - نتيجتي: " + currentScore + "/" + maxScore;
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
  });
  document.getElementById("backBtn").addEventListener("click", closeScenario);
}

function findModuleIdByTitle(title) {
  for (var i = 0; i < MODULES.length; i++) if (MODULES[i].title === title) return MODULES[i].id;
  return null;
}

function closeScenario() {
  stopSpeaking();
  document.getElementById("scenarioOverlay").classList.remove("show");
  document.getElementById("scenarioContent").innerHTML = "";
}

var ACCESS_PASSWORD = "academy2026";

function checkPassword() {
  var entered = document.getElementById("accessPassword").value;
  if (entered === ACCESS_PASSWORD) {
    sessionStorage.setItem("khodair_academy_auth", "true");
    document.getElementById("loginOverlay").style.display = "none";
  } else {
    document.getElementById("loginError").classList.add("show");
    document.getElementById("accessPassword").value = "";
  }
}

function checkAuthOnLoad() {
  if (sessionStorage.getItem("khodair_academy_auth") === "true") document.getElementById("loginOverlay").style.display = "none";
}

function openAbout() { document.getElementById("aboutModal").classList.add("show"); }
function closeAbout() { document.getElementById("aboutModal").classList.remove("show"); }

window.addEventListener("load", function() {
  checkAuthOnLoad();
  loadState();
  renderModules();
  initVoice();
  var pw = document.getElementById("accessPassword");
  var lb = document.getElementById("loginBtn");
  var ab = document.getElementById("aboutBtn");
  var rb = document.getElementById("resetBtn");
  var cb = document.getElementById("closeAboutBtn");
  var scb = document.getElementById("scenarioCloseBtn");
  var vg = document.getElementById("voiceGlobal");
  if (pw) pw.addEventListener("keydown", function(e) { if (e.key === "Enter") { e.preventDefault(); checkPassword(); } });
  if (lb) lb.addEventListener("click", checkPassword);
  if (ab) ab.addEventListener("click", openAbout);
  if (rb) rb.addEventListener("click", resetAll);
  if (cb) cb.addEventListener("click", closeAbout);
  if (scb) scb.addEventListener("click", closeScenario);
  if (vg) vg.addEventListener("click", toggleVoice);
});
</script>
</body>
</html>`);
});
app.listen(PORT, "0.0.0.0", () => { console.log("KHODAIR ACADEMY running on port " + PORT); });