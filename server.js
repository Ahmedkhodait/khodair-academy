const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>KHODAIR Academy</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; background: #f5efd5; color: #2a2418; min-height: 100vh; }
header { background: #d6b85a; border-bottom: 3px solid #8b6f1f; padding: 18px 30px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; box-shadow: 0 4px 20px rgba(139, 111, 31, 0.2); }
.header-left { display: flex; align-items: center; gap: 18px; }
.logo-icon { width: 75px; height: 75px; flex-shrink: 0; }
.logo-text { color: #1a1509; font-size: 24px; font-weight: bold; letter-spacing: 1px; }
.subtitle { margin-top: 4px; color: #3a3020; font-size: 13px; }
.header-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.header-actions button { padding: 9px 16px; font-size: 13px; background: #1a1509; color: #d6b85a; border: 1px solid #1a1509; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: inherit; }
.header-actions button:hover { background: #8b6f1f; color: #f5efd5; }
main { max-width: 1200px; margin: 0 auto; padding: 40px 25px; }
.welcome { text-align: center; margin-bottom: 50px; }
.welcome h1 { color: #8b6f1f; font-size: 34px; margin-bottom: 15px; }
.welcome p { color: #3a3020; font-size: 17px; line-height: 1.8; max-width: 700px; margin: 0 auto; }
.progress-overview { background: #ffffff; border: 2px solid #d6b85a; border-radius: 12px; padding: 25px; margin-bottom: 40px; text-align: center; box-shadow: 0 4px 20px rgba(139, 111, 31, 0.1); }
.progress-overview h3 { color: #8b6f1f; font-size: 16px; margin-bottom: 15px; }
.progress-bar-main { background: #e8dcc0; height: 26px; border-radius: 13px; overflow: hidden; margin-bottom: 12px; }
.progress-fill-main { height: 100%; background: linear-gradient(90deg, #b8963d, #d6b85a); width: 0%; transition: width 0.8s ease; border-radius: 13px; }
.progress-text { color: #2a2418; font-size: 14px; }
.progress-text strong { color: #8b6f1f; font-size: 18px; }
.modules-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-bottom: 40px; }
.module-card { background: #ffffff; border: 2px solid #d6b85a; border-radius: 15px; padding: 28px; cursor: pointer; transition: all 0.4s; position: relative; overflow: hidden; }
.module-card:hover { background: #fdf9ea; border-color: #8b6f1f; transform: translateY(-5px); box-shadow: 0 15px 40px rgba(139, 111, 31, 0.25); }
.module-card.completed { border-color: #4a9d6e; }
.module-card.completed::after { content: '✓'; position: absolute; top: 15px; left: 15px; background: #4a9d6e; color: #ffffff; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; }
.module-icon { font-size: 50px; margin-bottom: 15px; display: block; }
.module-title { color: #8b6f1f; font-size: 20px; font-weight: bold; margin-bottom: 8px; }
.module-desc { color: #3a3020; font-size: 14px; line-height: 1.7; margin-bottom: 15px; }
.module-meta { display: flex; justify-content: space-between; color: #7a6a3a; font-size: 12px; margin-bottom: 15px; padding-top: 15px; border-top: 1px dashed #d6b85a; }
.module-start-btn { background: #d6b85a; color: #1a1509; border: none; padding: 12px 25px; border-radius: 8px; font-weight: bold; font-size: 14px; font-family: inherit; cursor: pointer; width: 100%; }
.module-start-btn:hover { background: #b8963d; }
footer { text-align: center; padding: 30px 20px; color: #7a6a3a; font-size: 13px; border-top: 1px solid #d6b85a; }
footer strong { color: #8b6f1f; }
.modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(26, 21, 9, 0.75); display: none; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
.modal-overlay.show { display: flex; }
.modal-box { background: #ffffff; border: 3px solid #d6b85a; border-radius: 15px; padding: 40px; max-width: 560px; width: 100%; text-align: center; max-height: 90vh; overflow-y: auto; }
.modal-box h2 { color: #8b6f1f; font-size: 24px; margin-bottom: 15px; }
.modal-box p { color: #3a3020; line-height: 1.8; margin-bottom: 15px; }
.modal-box .about-section { background: #f5efd5; border: 1px solid #d6b85a; border-radius: 10px; padding: 20px; margin-top: 15px; text-align: right; }
.modal-box .about-section h3 { color: #8b6f1f; font-size: 15px; margin-bottom: 10px; }
.modal-box .about-section p { font-size: 14px; margin: 6px 0; color: #2a2418; }
.modal-close { background: #d6b85a; color: #1a1509; border: none; padding: 12px 35px; border-radius: 8px; font-weight: bold; font-size: 15px; font-family: inherit; cursor: pointer; margin-top: 20px; }
.login-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #f5efd5; display: flex; align-items: center; justify-content: center; z-index: 9999; }
.login-box { background: #ffffff; border: 3px solid #d6b85a; border-radius: 15px; padding: 45px 40px; max-width: 440px; width: 90%; text-align: center; box-shadow: 0 20px 60px rgba(139, 111, 31, 0.3); }
.login-box h1 { color: #8b6f1f; font-size: 22px; margin-bottom: 10px; }
.login-box p { color: #3a3020; font-size: 13px; margin-bottom: 25px; }
.login-box input { width: 100%; padding: 15px; font-size: 15px; text-align: center; letter-spacing: 2px; margin-bottom: 15px; background: #f5efd5; color: #2a2418; border: 2px solid #d6b85a; border-radius: 8px; font-family: inherit; }
.login-box input:focus { outline: none; border-color: #8b6f1f; }
.login-box button { width: 100%; padding: 15px; background: #d6b85a; color: #1a1509; border: none; border-radius: 8px; font-weight: bold; font-size: 15px; font-family: inherit; cursor: pointer; }
.login-box button:hover { background: #b8963d; }
.login-error { color: #c0392b; font-size: 13px; margin-top: 12px; display: none; }
.login-error.show { display: block; }
.scenario-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #f5efd5; display: none; z-index: 5000; overflow-y: auto; padding: 20px; }
.scenario-overlay.show { display: block; }
.scenario-container { max-width: 800px; margin: 0 auto; padding: 30px 20px 60px; }
.scenario-topbar { display: flex; justify-content: space-between; align-items: center; background: #ffffff; border: 2px solid #d6b85a; border-radius: 10px; padding: 12px 20px; margin-bottom: 25px; position: sticky; top: 0; z-index: 10; }
.scenario-title { color: #8b6f1f; font-weight: bold; font-size: 15px; }
.scenario-score { background: #f5efd5; padding: 6px 14px; border-radius: 15px; font-size: 13px; color: #2a2418; }
.scenario-score strong { color: #8b6f1f; font-size: 16px; }
.scenario-close { background: none; border: 2px solid #8b6f1f; color: #8b6f1f; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; font-size: 16px; font-weight: bold; font-family: inherit; }
.scenario-close:hover { background: #8b6f1f; color: #ffffff; }
.scenario-progress { width: 100%; height: 4px; background: #e8dcc0; border-radius: 2px; margin-bottom: 30px; overflow: hidden; }
.scenario-progress-fill { height: 100%; background: linear-gradient(90deg, #d6b85a, #8b6f1f); width: 0%; transition: width 0.5s; }
.char-area { text-align: center; margin-bottom: 20px; }
.char-avatar { font-size: 90px; display: inline-block; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); filter: drop-shadow(0 6px 15px rgba(139, 111, 31, 0.3)); }
.char-name { color: #8b6f1f; font-size: 20px; font-weight: bold; margin-top: 10px; }
.char-role { color: #3a3020; font-size: 13px; margin-top: 4px; }
.speech { background: #ffffff; border: 2px solid #d6b85a; border-radius: 15px; padding: 25px 28px; position: relative; margin: 25px 0; animation: slideUp 0.6s ease; box-shadow: 0 8px 30px rgba(139, 111, 31, 0.15); }
.speech::before { content: ''; position: absolute; top: -12px; right: 50%; transform: translateX(50%); width: 0; height: 0; border-left: 12px solid transparent; border-right: 12px solid transparent; border-bottom: 12px solid #d6b85a; }
.speech-text { color: #2a2418; font-size: 16px; line-height: 1.9; text-align: right; padding-top: 15px; }
.speech-text strong { color: #8b6f1f; }
.voice-btn { position: absolute; top: 10px; left: 10px; background: #d6b85a; color: #1a1509; border: none; width: 38px; height: 38px; border-radius: 50%; cursor: pointer; font-size: 18px; transition: all 0.3s; }
.voice-btn:hover { background: #b8963d; transform: scale(1.1); }
.choices { display: flex; flex-direction: column; gap: 12px; margin-top: 20px; }
.choice-btn { background: #ffffff; border: 2px solid #d6b85a; color: #2a2418; padding: 16px 20px; border-radius: 10px; text-align: right; font-size: 15px; font-family: inherit; cursor: pointer; transition: all 0.3s; line-height: 1.6; display: flex; align-items: flex-start; gap: 12px; }
.choice-btn:hover { background: #fdf9ea; border-color: #8b6f1f; transform: translateX(-5px); }
.choice-num { display: inline-block; background: #d6b85a; color: #1a1509; width: 26px; height: 26px; line-height: 26px; text-align: center; border-radius: 50%; font-weight: bold; flex-shrink: 0; font-size: 13px; }
.choice-text { flex: 1; }
.feedback { margin-top: 20px; padding: 15px 20px; border-radius: 10px; font-size: 14px; line-height: 1.7; display: none; animation: slideUp 0.4s ease; }
.feedback.show { display: block; }
.feedback.positive { background: #d5f5e0; border-right: 5px solid #4a9d6e; color: #1e5a3a; }
.feedback.negative { background: #fadbd8; border-right: 5px solid #c0392b; color: #7b241c; }
.feedback.neutral { background: #fdf3d0; border-right: 5px solid #d6b85a; color: #7a5c0f; }
.continue-btn { background: #d6b85a; color: #1a1509; border: none; padding: 14px 40px; border-radius: 8px; font-size: 15px; font-weight: bold; font-family: inherit; cursor: pointer; margin-top: 20px; display: inline-block; }
.continue-btn:hover { background: #b8963d; }
.ending-area { text-align: center; padding: 30px 20px; }
.ending-icon { font-size: 100px; margin: 20px 0; animation: popIn 0.8s; }
.ending-title { color: #8b6f1f; font-size: 26px; font-weight: bold; margin: 15px 0; }
.ending-desc { color: #2a2418; font-size: 16px; line-height: 1.9; max-width: 650px; margin: 0 auto 25px; padding: 20px; background: #ffffff; border-radius: 12px; border-right: 5px solid #d6b85a; text-align: right; }
.final-score-box { display: inline-block; background: #ffffff; border: 3px solid #d6b85a; padding: 20px 45px; border-radius: 15px; margin: 20px 0; }
.final-score-label { color: #3a3020; font-size: 13px; margin-bottom: 8px; }
.final-score-value { color: #8b6f1f; font-size: 42px; font-weight: bold; }
.restart-btn { background: #d6b85a; color: #1a1509; border: none; padding: 14px 40px; border-radius: 8px; font-size: 15px; font-weight: bold; font-family: inherit; cursor: pointer; margin-top: 20px; margin-right: 10px; }
.restart-btn:hover { background: #b8963d; }
.back-dashboard-btn { background: transparent; color: #8b6f1f; border: 2px solid #8b6f1f; padding: 12px 35px; border-radius: 8px; font-size: 14px; font-weight: bold; font-family: inherit; cursor: pointer; margin-top: 20px; }
.back-dashboard-btn:hover { background: #8b6f1f; color: #ffffff; }
.voice-global { position: fixed; bottom: 20px; left: 20px; background: #d6b85a; color: #1a1509; border: 2px solid #8b6f1f; width: 50px; height: 50px; border-radius: 50%; cursor: pointer; font-size: 22px; z-index: 9997; box-shadow: 0 4px 15px rgba(139, 111, 31, 0.4); }
.voice-global:hover { background: #b8963d; transform: scale(1.05); }
.voice-global.muted { background: #cccccc; color: #888888; border-color: #999999; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes popIn { 0% { opacity: 0; transform: scale(0.5); } 100% { opacity: 1; transform: scale(1); } }
@media (max-width: 700px) {
  .welcome h1 { font-size: 26px; }
  main { padding: 25px 15px; }
  .modules-grid { grid-template-columns: 1fr; }
  .header-left { flex-direction: column; align-items: flex-start; }
  .logo-text { font-size: 18px; }
  .logo-icon { width: 55px; height: 55px; }
  .char-avatar { font-size: 70px; }
  .speech-text { font-size: 15px; }
}.contact-btn { background: #25D366; color: #ffffff; border: none; padding: 9px 16px; font-size: 13px; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: inherit; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; }
.contact-btn:hover { background: #1ebe5b; color: #ffffff; }
.email-btn { background: #ea4335; color: #ffffff; border: none; padding: 9px 16px; font-size: 13px; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: inherit; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; }
.email-btn:hover { background: #c5221f; color: #ffffff; }
</style>
</head>
<body>

<button class="voice-global" id="voiceGlobal" title="تفعيل/إلغاء الصوت">🔊</button>

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
  <div class="header-left">
    <svg class="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f5d98b;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#d6b85a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b6f1f;stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="#1a1509" stroke="url(#goldGrad)" stroke-width="3"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.5"/>
      <text x="50" y="46" font-family="Georgia, serif" font-size="38" font-weight="bold" fill="url(#goldGrad)" text-anchor="middle" dominant-baseline="central">K</text>
      <path d="M 32 66 Q 41 61, 50 66 Q 59 61, 68 66 L 68 74 Q 59 69, 50 74 Q 41 69, 32 74 Z" fill="url(#goldGrad)"/>
      <line x1="50" y1="66" x2="50" y2="74" stroke="#1a1509" stroke-width="0.8"/>
      <polygon points="50,8 51.8,14 58,14 53,18 55,24 50,20 45,24 47,18 42,14 48.2,14" fill="url(#goldGrad)"/>
    </svg>
    <div>
      <div class="logo-text">KHODAIR ACADEMY</div>
      <div class="subtitle">أكاديمية الحوكمة والقيادة التفاعلية</div>
    </div>
  </div>
  <div class="header-actions">
    <button id="aboutBtn">ℹ️ عن التطبيق</button>    <a class="contact-btn" href="https://wa.me/201061396019?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%20KHODAIR%20ACADEMY" target="_blank">💬 واتساب</a>
    <a class="email-btn" href="mailto:ahmedkhodair33@gmail.com?subject=%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20KHODAIR%20ACADEMY&body=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%20KHODAIR%20ACADEMY%0A%0A%D8%A7%D9%84%D8%A7%D8%B3%D9%85%3A%20%0A%D8%A7%D9%84%D8%AC%D9%87%D8%A9%3A%20%0A%D8%A7%D9%84%D8%B1%D8%B3%D8%A7%D9%84%D8%A9%3A%20">📧 إيميل</a>
    <button id="resetBtn">🔄 إعادة تعيين</button>
  </div>
</header>

<main>
  <div class="welcome">
    <h1>🎯 رحلتك التعليمية التفاعلية</h1>
    <p>خمس وحدات تفاعلية تأخذك في رحلة عبر الحوكمة، والتخطيط الاستراتيجي، والتنمية المستدامة، والقيادة، واتخاذ القرار.</p>
  </div>

  <div class="progress-overview">
    <h3>📊 تقدمك الإجمالي</h3>
    <div class="progress-bar-main">
      <div class="progress-fill-main" id="mainProgressFill"></div>
    </div>
    <div class="progress-text">
      أكملت <strong id="modulesCompleted">0</strong> من <strong>5</strong> وحدات — <span id="overallPercent">0%</span>
    </div>
  </div>

  <div class="modules-grid" id="modulesGrid"></div>
</main>

<footer>
  <p>KHODAIR ACADEMY — <strong>أكاديمية الحوكمة والقيادة التفاعلية</strong></p>
  <p style="margin-top:8px;">تطوير: <strong>أحمد محروس خضير</strong> — 2026</p>
</footer>

<div class="scenario-overlay" id="scenarioOverlay">
  <div class="scenario-container">
    <div class="scenario-topbar">
      <div class="scenario-title" id="scenarioTitle">وحدة تفاعلية</div>
      <div class="scenario-score">النقاط: <strong id="scenarioScore">0</strong></div>
      <button class="scenario-close" id="scenarioCloseBtn">✕</button>
    </div>
    <div class="scenario-progress"><div class="scenario-progress-fill" id="scenarioProgressFill"></div></div>
    <div id="scenarioContent"></div>
  </div>
</div>

<div class="modal-overlay" id="aboutModal">
  <div class="modal-box">
    <h2>KHODAIR ACADEMY</h2>
    <p style="font-style:italic;">أكاديمية الحوكمة والقيادة التفاعلية</p>
    <div class="about-section">
      <h3>عن الأكاديمية</h3>
      <p>أكاديمية تفاعلية تستخدم السيناريوهات الواقعية لتعليم مبادئ الحوكمة، والتخطيط الاستراتيجي، والتنمية المستدامة، والقيادة، واتخاذ القرار.</p>
      <p>في كل وحدة، ستلعب دور <strong>المستشار</strong> الذي يواجه مواقف واقعية، ويقابل شخصيات مختلفة، ويتخذ قرارات تؤثر على النتيجة النهائية.</p>
    </div>
    <div class="about-section">
      <h3>الوحدات الخمس</h3>
      <p>🏛️ <strong>الحوكمة والشفافية</strong></p>
      <p>📊 <strong>التخطيط الاستراتيجي</strong></p>
      <p>🌍 <strong>التنمية المستدامة</strong></p>
      <p>🤝 <strong>القيادة وإدارة الفرق</strong></p>
      <p>🎯 <strong>اتخاذ القرار</strong></p>
    </div>
    <div class="about-section">
      <h3>المطور</h3>
      <p><strong>أحمد محروس خضير</strong></p>
      <p>كلية السياحة والفنادق — جامعة مدينة السادات</p>
    </div>
    <button class="modal-close" id="closeAboutBtn">إغلاق</button>
  </div>
</div>

<script>
var MODULES = [
  { id: "governance", icon: "🏛️", title: "الحوكمة والشفافية", desc: "اختبار تفاعلي لقياس مبادئ الحوكمة الرشيدة في مؤسستك", duration: "15 دقيقة" },
  { id: "strategic", icon: "📊", title: "التخطيط الاستراتيجي", desc: "رحلة تفاعلية في بناء الرؤية والتحليل الاستراتيجي", duration: "20 دقيقة" },
  { id: "sustainability", icon: "🌍", title: "التنمية المستدامة", desc: "قرارات مصيرية في مواجهة تحديات الاستدامة", duration: "18 دقيقة" },
  { id: "leadership", icon: "🤝", title: "القيادة وإدارة الفرق", desc: "سيناريو تفاعلي لاكتشاف نمطك القيادي", duration: "20 دقيقة" },
  { id: "decision", icon: "🎯", title: "اتخاذ القرار", desc: "مواقف حرجة تحتاج قرارات صعبة ومصيرية", duration: "15 دقيقة" }
];

var STATE_KEY = "khodair_academy_state";
var state = { completed: [], scores: {} };
var voiceEnabled = true;
var arabicVoice = null;
var currentModule = null;
var currentScene = null;
var currentScore = 0;
var sceneCount = 0;
var totalScenes = 0;

function loadState() {
  try {
    var saved = localStorage.getItem(STATE_KEY);
    if (saved) state = JSON.parse(saved);
  } catch(e) {}
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch(e) {}
}

function renderModules() {
  var grid = document.getElementById("modulesGrid");
  var html = "";
  for (var i = 0; i < MODULES.length; i++) {
    var m = MODULES[i];
    var isCompleted = state.completed.indexOf(m.id) >= 0;
    var score = state.scores[m.id] || null;
    html += "<div class='module-card " + (isCompleted ? "completed" : "") + "' data-module='" + m.id + "'>";
    html += "<div class='module-icon'>" + m.icon + "</div>";
    html += "<div class='module-title'>" + m.title + "</div>";
    html += "<div class='module-desc'>" + m.desc + "</div>";
    html += "<div class='module-meta'>";
    html += "<span>⏱️ " + m.duration + "</span>";
    if (score !== null) html += "<span>⭐ " + score + "%</span>";
    html += "</div>";
    html += "<button class='module-start-btn'>" + (isCompleted ? "🔄 إعادة" : "▶️ ابدأ") + "</button>";
    html += "</div>";
  }
  grid.innerHTML = html;
  var cards = grid.querySelectorAll(".module-card");
  for (var j = 0; j < cards.length; j++) {
    cards[j].addEventListener("click", function() {
      startModule(this.getAttribute("data-module"));
    });
  }
  updateProgress();
}

function updateProgress() {
  var total = MODULES.length;
  var done = state.completed.length;
  var percent = Math.round((done / total) * 100);
  document.getElementById("modulesCompleted").innerText = done;
  document.getElementById("overallPercent").innerText = percent + "%";
  document.getElementById("mainProgressFill").style.width = percent + "%";
}

function resetAll() {
  if (!confirm("هل أنت متأكد من إعادة تعيين كل التقدم؟")) return;
  state = { completed: [], scores: {} };
  saveState();
  renderModules();
}

// ========== VOICE ==========
function initVoice() {
  if (!('speechSynthesis' in window)) return;
  function loadVoices() {
    var voices = speechSynthesis.getVoices();
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].lang.indexOf('ar') === 0) {
        arabicVoice = voices[i];
        break;
      }
    }
  }
  loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }
}

function speakText(text) {
  if (!voiceEnabled || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  var cleanText = text.replace(/<[^>]*>/g, '');
  var utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ar-EG';
  utterance.rate = 0.95;
  utterance.pitch = 1;
  if (arabicVoice) utterance.voice = arabicVoice;
  speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}

function toggleVoice() {
  voiceEnabled = !voiceEnabled;
  var btn = document.getElementById("voiceGlobal");
  if (voiceEnabled) {
    btn.innerText = "🔊";
    btn.classList.remove("muted");
  } else {
    btn.innerText = "🔇";
    btn.classList.add("muted");
    stopSpeaking();
  }
}

// ========== SCENARIOS ==========
var SCENARIOS = {};

SCENARIOS.governance = {
  title: "الحوكمة والشفافية",
  startScene: "s1",
  scenes: {
    s1: {
      char: { avatar: "🎩", name: "معالي الوزير", role: "وزير المالية" },
      speech: "أهلاً بك يا مستشار. تم استدعاؤك لمساعدتنا في مشكلة خطيرة. هناك شبهات فساد في إحدى الإدارات، والثقة في الوزارة تتآكل. <strong>من أين نبدأ؟</strong>",
      choices: [
        { text: "نبدأ بمراجعة الميزانيات والحسابات للتأكد من عدم وجود تسريب مالي.", score: 1, feedback: "المراجعة المالية مهمة، لكن المشكلة قد تكون أعمق من المال.", type: "neutral", next: "s2" },
        { text: "نبدأ بتقييم منظومة الحوكمة الحالية: الشفافية، المساءلة، سيادة القانون.", score: 3, feedback: "قرار ممتاز! الحوكمة هي الأساس.", type: "positive", next: "s2" },
        { text: "نبدأ فوراً بإقالة المتورطين وإعلان ذلك للإعلام.", score: 0, feedback: "التسرع في الإقالات بدون أدلة قد يزيد المشكلة.", type: "negative", next: "s2" }
      ]
    },
    s2: {
      char: { avatar: "💼", name: "مدير المراجعة الداخلية", role: "إدارة المراجعة" },
      speech: "معالي الوزير أوصلك بي. أنا من 15 سنة في المراجعة الداخلية. <strong>المشكلة في ثلاث حاجات:</strong> غياب الفصل بين السلطات، غياب الشفافية، وضعف المساءلة.",
      choices: [
        { text: "نبدأ بالفصل بين السلطات - من يوافق لا ينفذ ولا يراقب.", score: 3, feedback: "أحسنت! الفصل بين السلطات هو حجر الأساس.", type: "positive", next: "s3" },
        { text: "نبدأ بالشفافية - ننشر كل المعاملات على البوابة الإلكترونية.", score: 2, feedback: "خطوة جيدة، لكن الشفافية بدون مساءلة قد تبقى حبراً على ورق.", type: "positive", next: "s3" },
        { text: "نبدأ بالمساءلة - نضع عقوبات صارمة لكل مخالفة.", score: 1, feedback: "المساءلة مهمة، لكن بدون شفافية قد تصبح أداة للانتقام.", type: "neutral", next: "s3" }
      ]
    },
    s3: {
      char: { avatar: "👨‍💼", name: "أحمد", role: "موظف قديم - 20 سنة خبرة" },
      speech: "بصراحة يا مستشار، أنا شفت لجان ومبادرات كتير آخر 20 سنة، وكلها انتهت بنفس النتيجة. <strong>الموظفين مش هيصدقوا إن فيه تغيير حقيقي</strong> إلا لو شافوا بأعينهم.",
      choices: [
        { text: "نطلق حملة توعية شاملة أولاً.", score: 1, feedback: "الكلام لا يكفي. الموظفون يريدون أفعالاً.", type: "neutral", next: "s4" },
        { text: "نبدأ بمشروع صغير وناجح خلال 90 يوم، ونعلن نتائجه.", score: 3, feedback: "استراتيجية Quick Win! النجاح المبكر يبني الثقة.", type: "positive", next: "s4" },
        { text: "نجبرهم على التوقيع على تعهدات بالالتزام.", score: 0, feedback: "الإجبار يخلق مقاومة، لا التزام.", type: "negative", next: "s4" }
      ]
    },
    s4: {
      char: { avatar: "👩‍⚖️", name: "المستشارة القانونية", role: "الإدارة القانونية" },
      speech: "أي إصلاح في الحوكمة لازم يكون له <strong>سند قانوني واضح</strong>. حالياً عندنا قانون 2004، وقديم جداً.",
      choices: [
        { text: "نعمل بقانون 2004 مؤقتاً ونتعامل مع الثغرات اجتهادياً.", score: 1, feedback: "الاجتهاد قد يفتح باباً للطعن.", type: "neutral", next: "s5" },
        { text: "نعدّ مشروع قانون جديد ونمرره بأسرع وقت.", score: 2, feedback: "قرار سليم، لكن يحتاج وقتاً.", type: "positive", next: "s5" },
        { text: "نجمع بين قانون مؤقت للحوكمة + إعداد قانون شامل بالتوازي.", score: 3, feedback: "استراتيجية ذكية! حل فوري + حل مستدام.", type: "positive", next: "s5" }
      ]
    },
    s5: {
      char: { avatar: "📰", name: "رئيس التحرير", role: "صحفي - صحيفة كبيرة" },
      speech: "عندي معلومات من مصدر موثوق إن فيه شبهات فساد كبيرة، ومستعد أنشرها بكرة. <strong>لكن</strong> أعطيك فرصة قبل النشر.",
      choices: [
        { text: "طلبنا منك تأجيل النشر حتى استكمال التحقيقات الداخلية.", score: 2, feedback: "التأجيل قد يعطيك وقتاً، لكن قد يبدو كتمويه.", type: "neutral", next: "s6" },
        { text: "نعطيك القصة كاملة بأيدينا، ونعلن خطة الإصلاح للعلن.", score: 3, feedback: "قرار شجاع! الشفافية الاستباقية تبني الثقة.", type: "positive", next: "s6" },
        { text: "نرفض التعليق ونتركهم ينشرون ما يشاؤون.", score: 0, feedback: "الصمت في مواجهة الأزمة يفسّر على أنه اعتراف.", type: "negative", next: "s6" }
      ]
    },
    s6: {
      char: { avatar: "🎓", name: "خبير الحوكمة الدولي", role: "مستشار البنك الدولي" },
      speech: "أنا بتابع تجربتكم من أسبوع. لكن الحوكمة ليست حدثاً، بل <strong>ثقافة</strong>. <em>كيف ستضمنون الاستدامة؟</em>",
      choices: [
        { text: "نعتمد على القيادة الحالية لدفع الإصلاح.", score: 1, feedback: "الاعتماد على أشخاص خطر.", type: "neutral", next: "s7" },
        { text: "نبني منظومة مؤسسية: تدريب، أدلة إجراءات، ورقابة مستقلة دائمة.", score: 3, feedback: "قرار استراتيجي! المؤسسات تبقى، الأشخاص يرحلون.", type: "positive", next: "s7" },
        { text: "نكتفي بالتعاقد مع شركة استشارات أجنبية لإدارة الملف.", score: 0, feedback: "الاعتماد على الشركات الأجنبية يمنع بناء قدرات داخلية.", type: "negative", next: "s7" }
      ]
    },
    s7: {
      char: { avatar: "🎩", name: "معالي الوزير", role: "وزير المالية" },
      speech: "يا مستشار، أنا سعيد باللي وصلنا له. آخر سؤال: <strong>ما هي أهم توصية واحدة تحب أن تتركها لنا؟</strong>",
      choices: [
        { text: "الثقة تُبنى بالشفافية، والشفافية تحتاج أنظمة لا وعوداً.", score: 3, feedback: "توصية عميقة. هذا هو جوهر الحوكمة الرشيدة.", type: "positive", next: "end" },
        { text: "لا بد من قيادة قوية تدفع الإصلاح حتى النهاية.", score: 2, feedback: "صحيح جزئياً، لكن القيادة وحدها لا تكفي.", type: "neutral", next: "end" },
        { text: "الشعب المصري يستحق حكومة نظيفة شفافة.", score: 1, feedback: "شعار جميل، لكن التوصية تحتاج عمقاً تقنياً.", type: "neutral", next: "end" }
      ]
    }
  },
  endings: [
    { minScore: 17, icon: "🏆", title: "مستشار حوكمة بارع", desc: "قدمت رؤية متكاملة للحوكمة: فصل السلطات، الشفافية، المساءلة، البناء المؤسسي." },
    { minScore: 12, icon: "👍", title: "مستشار جيد", desc: "قراراتك كانت سليمة بشكل عام، لكن كان هناك مجال لتعميق بعض الجوانب." },
    { minScore: 7, icon: "⚠️", title: "مستشار متوسط", desc: "اتخذت بعض القرارات الصحيحة، لكن هناك فجوات في الرؤية الاستراتيجية." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "قراراتك ركزت على الحلول السريعة بدلاً من معالجة جذور المشكلة." }
  ]
};

SCENARIOS.strategic = {
  title: "التخطيط الاستراتيجي",
  startScene: "s1",
  scenes: {
    s1: {
      char: { avatar: "🏢", name: "رئيس مجلس الإدارة", role: "شركة حكومية كبرى" },
      speech: "أهلاً يا مستشار. الشركة تواجه منافسة شرسة من القطاع الخاص، ونحتاج <strong>خطة استراتيجية جديدة</strong>. من أين نبدأ؟",
      choices: [
        { text: "نبدأ بتحليل البيئة الداخلية والخارجية (SWOT).", score: 3, feedback: "قرار سليم! التحليل الاستراتيجي هو أساس أي خطة ناجحة.", type: "positive", next: "s2" },
        { text: "نبدأ بتحديد الأهداف المالية للسنوات الخمس القادمة.", score: 1, feedback: "الأهداف المالية مهمة، لكن بدون فهم البيئة قد تكون غير واقعية.", type: "neutral", next: "s2" },
        { text: "نبدأ بتقليد أفضل الممارسات من الشركات الرائدة.", score: 0, feedback: "التقليد الأعمى فشل كثير من الشركات.", type: "negative", next: "s2" }
      ]
    },
    s2: {
      char: { avatar: "📊", name: "مدير التخطيط", role: "إدارة التخطيط الاستراتيجي" },
      speech: "التحليل الأولي أظهر <strong>3 نقاط ضعف رئيسية</strong>: ضعف القدرات الرقمية، غياب ثقافة الابتكار، بطء اتخاذ القرار.",
      choices: [
        { text: "نبدأ بالقدرات الرقمية - هي الأساس لكل تطور.", score: 3, feedback: "قرار استراتيجي!", type: "positive", next: "s3" },
        { text: "نبدأ بثقافة الابتكار - الناس أهم من التكنولوجيا.", score: 2, feedback: "الناس مهمة، لكن بدون أدوات رقمية، الابتكار محدود.", type: "positive", next: "s3" },
        { text: "نبدأ بسرعة اتخاذ القرار - هي أسهل تغيير.", score: 1, feedback: "سرعة القرار بدون قدرات رقمية قد تؤدي لقرارات متسرعة.", type: "neutral", next: "s3" }
      ]
    },
    s3: {
      char: { avatar: "👥", name: "مدير الموارد البشرية", role: "الموارد البشرية" },
      speech: "عشان ننفذ الخطة، محتاجين <strong>كفاءات جديدة</strong>. فيه 3 خيارات: تعيين من الخارج، تدريب الحاليين، أو مزيج.",
      choices: [
        { text: "تعيين خبراء من الخارج فوراً لتحقيق نتائج سريعة.", score: 1, feedback: "التعيين السريع قد يحل مشكلة مؤقتة.", type: "neutral", next: "s4" },
        { text: "التركيز على تدريب الموظفين الحاليين.", score: 2, feedback: "قرار جيد، لكن قد يستغرق وقتاً طويلاً.", type: "positive", next: "s4" },
        { text: "مزيج: خبراء خارجيون + تدريب مكثف للداخل.", score: 3, feedback: "استراتيجية متوازنة!", type: "positive", next: "s4" }
      ]
    },
    s4: {
      char: { avatar: "💰", name: "المدير المالي", role: "الإدارة المالية" },
      speech: "الخطة جاهزة، لكن <strong>الميزانية محدودة</strong>. عندنا 30% فقط من المبلغ المطلوب.",
      choices: [
        { text: "نؤجل الخطة حتى تتوفر الميزانية الكاملة.", score: 0, feedback: "التأجيل يعني خسارة الفرصة.", type: "negative", next: "s5" },
        { text: "ننفذ على مراحل حسب الأولوية، ونطلب تمويلاً إضافياً.", score: 3, feedback: "قرار حكيم! التنفيذ المرحلي يبني المصداقية.", type: "positive", next: "s5" },
        { text: "نقلل النطاق ونكتفي بتحقيق أهداف أقل.", score: 1, feedback: "تقليل النطاق قد يضعف الأثر.", type: "neutral", next: "s5" }
      ]
    },
    s5: {
      char: { avatar: "🎯", name: "مدير الأداء", role: "مكتب إدارة المشروعات" },
      speech: "كيف سنقيس <strong>نجاح الخطة</strong>؟ بدون مؤشرات واضحة، لن نعرف هل نتحرك في الاتجاه الصحيح.",
      choices: [
        { text: "نعتمد على المؤشرات المالية فقط.", score: 1, feedback: "المؤشرات المالية لا تكفي لقياس النجاح الاستراتيجي.", type: "neutral", next: "s6" },
        { text: "نستخدم Balanced Scorecard بأبعادها الأربعة.", score: 3, feedback: "ممتاز! بطاقة الأداء المتوازن تعطي صورة شاملة.", type: "positive", next: "s6" },
        { text: "نقيس رضا الموظفين فقط.", score: 0, feedback: "رضا الموظفين مهم، لكنه ليس المؤشر الوحيد.", type: "negative", next: "s6" }
      ]
    },
    s6: {
      char: { avatar: "🏢", name: "رئيس مجلس الإدارة", role: "شركة حكومية كبرى" },
      speech: "ممتاز يا مستشار. <strong>ما أهم توصية واحدة</strong> لضمان نجاح هذه الخطة؟",
      choices: [
        { text: "الخطة الاستراتيجية يجب أن تكون وثيقة حيّة تُراجَع كل 6 شهور.", score: 3, feedback: "توصية عميقة!", type: "positive", next: "end" },
        { text: "الالتزام بالخطة حتى النهاية بدون تغيير.", score: 1, feedback: "الالتزام مهم، لكن دون مرونة قد تفشل الخطة.", type: "neutral", next: "end" },
        { text: "الميزانية هي المفتاح.", score: 1, feedback: "الميزانية مهمة، لكن الرؤية والتنفيذ أهم.", type: "neutral", next: "end" }
      ]
    }
  },
  endings: [
    { minScore: 15, icon: "🏆", title: "استراتيجي بارع", desc: "قدمت رؤية استراتيجية متكاملة." },
    { minScore: 10, icon: "👍", title: "استراتيجي جيد", desc: "قراراتك كانت في الاتجاه الصحيح." },
    { minScore: 5, icon: "⚠️", title: "استراتيجي مبتدئ", desc: "بعض القرارات كانت متسرعة." },
    { minScore: 0, icon: "😕", title: "يحتاج تطوير", desc: "القرارات ركزت على حلول سطحية." }
  ]
};

SCENARIOS.sustainability = {
  title: "التنمية المستدامة",
  startScene: "s1",
  scenes: {
    s1: {
      char: { avatar: "🌍", name: "وزير البيئة", role: "وزارة البيئة" },
      speech: "أهلاً يا مستشار. مصر تبنت <strong>رؤية 2030</strong> للتنمية المستدامة، لكن التطبيق بطيء. من أين نبدأ؟",
      choices: [
        { text: "نبدأ بحملة توعية شاملة.", score: 1, feedback: "التوعية مهمة، لكن بدون أدوات عملية قد تبقى شعارات.", type: "neutral", next: "s2" },
        { text: "نبدأ بقياس البصمة البيئية للجهات الحكومية.", score: 3, feedback: "قرار علمي!", type: "positive", next: "s2" },
        { text: "نفرض غرامات على الجهات غير الملتزمة.", score: 0, feedback: "الغرامات قبل التوعية تخلق مقاومة.", type: "negative", next: "s2" }
      ]
    },
    s2: {
      char: { avatar: "🏭", name: "مدير مصنع حكومي", role: "قطاع الصناعة" },
      speech: "بصراحة يا مستشار، التحول للاستدامة <strong>مكلف جداً</strong>. مصنعي يحتاج 50 مليون جنيه لتحديث المعدات.",
      choices: [
        { text: "نوفر لك تمويلاً ميسراً من صندوق البيئة الأخضر.", score: 3, feedback: "قرار ممتاز!", type: "positive", next: "s3" },
        { text: "الاستدامة استثمار وليست تكلفة.", score: 1, feedback: "الرسالة صحيحة، لكن دون دعم ملموس لن يقتنع.", type: "neutral", next: "s3" },
        { text: "نمنحك إعفاءً ضريبياً مقابل الالتزام بالمعايير.", score: 3, feedback: "قرار حكيم!", type: "positive", next: "s3" }
      ]
    },
    s3: {
      char: { avatar: "👩‍🔬", name: "خبيرة الاستدامة", role: "مركز البحوث البيئية" },
      speech: "عندنا <strong>17 هدفاً من أهداف التنمية المستدامة</strong>. لا يمكن التركيز على كلها في وقت واحد.",
      choices: [
        { text: "نركز على الأهداف المرتبطة بالاقتصاد أولاً.", score: 2, feedback: "منطقي، لكن قد يؤخر الأهداف البيئية.", type: "positive", next: "s4" },
        { text: "نحدد الأولويات بناءً على تحليل السياق الوطني.", score: 3, feedback: "قرار استراتيجي!", type: "positive", next: "s4" },
        { text: "نطبق كل الأهداف بالتساوي.", score: 0, feedback: "التساوي يعني ضعف التركيز.", type: "negative", next: "s4" }
      ]
    },
    s4: {
      char: { avatar: "👨‍🌾", name: "ممثل المزارعين", role: "النقابة الزراعية" },
      speech: "المزارعون يعانون من <strong>شح المياه</strong>. كفاءة الري منخفضة.",
      choices: [
        { text: "نفرض نظام ري حديث بالإلزام.", score: 1, feedback: "الإلزام قد يفشل بدون دعم.", type: "neutral", next: "s5" },
        { text: "ندعم التحول للري الحديث بالشراكة مع القطاع الخاص.", score: 3, feedback: "قرار متكامل!", type: "positive", next: "s5" },
        { text: "نغير نمط المحاصيل.", score: 2, feedback: "قرار استراتيجي، لكن قد يقابل بمقاومة.", type: "positive", next: "s5" }
      ]
    },
    s5: {
      char: { avatar: "💼", name: "رئيس اتحاد الصناعات", role: "القطاع الخاص" },
      speech: "الشركات الصغيرة <strong>مش قادرة تتحمل تكاليف الاستدامة</strong>.",
      choices: [
        { text: "نعطيها فترة سماح 5 سنوات.", score: 1, feedback: "قد تؤجل التغيير أكثر من اللازم.", type: "neutral", next: "s6" },
        { text: "ننشئ صندوقاً لدعم التحول الأخضر.", score: 3, feedback: "قرار ممتاز!", type: "positive", next: "s6" },
        { text: "نستثنيها مؤقتاً لحماية التوظيف.", score: 1, feedback: "يجب أن يكون مرهوناً بخطة تحول.", type: "neutral", next: "s6" }
      ]
    },
    s6: {
      char: { avatar: "🌍", name: "وزير البيئة", role: "وزارة البيئة" },
      speech: "ممتاز يا مستشار. <strong>ما أهم توصية</strong> لضمان نجاح التحول؟",
      choices: [
        { text: "الاستدامة رحلة وليست مشروعاً.", score: 3, feedback: "توصية عميقة!", type: "positive", next: "end" },
        { text: "بدون التكنولوجيا لا يمكن تحقيق الاستدامة.", score: 2, feedback: "التكنولوجيا مهمة، لكن العامل البشري أهم.", type: "positive", next: "end" },
        { text: "الاستدامة مسؤولية الحكومات فقط.", score: 0, feedback: "الاستدامة شراكة بين الحكومة والقطاع والمجتمع.", type: "negative", next: "end" }
      ]
    }
  },
  endings: [
    { minScore: 15, icon: "🏆", title: "خبير استدامة", desc: "قدمت رؤية متكاملة للتنمية المستدامة." },
    { minScore: 10, icon: "🌱", title: "صديق البيئة", desc: "قراراتك كانت متوازنة." },
    { minScore: 5, icon: "⚠️", title: "مبتدئ", desc: "بعض القرارات ركزت على جانب واحد." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "القرارات افتقدت للرؤية الشمولية." }
  ]
};

SCENARIOS.leadership = {
  title: "القيادة وإدارة الفرق",
  startScene: "s1",
  scenes: {
    s1: {
      char: { avatar: "👔", name: "المدير التنفيذي", role: "شركة خدمات حكومية" },
      speech: "أهلاً يا مستشار. تم تعيينك مستشاراً لقيادة فريق جديد مهمته <strong>تطوير خدمات الشركة</strong>. كيف ستبدأ؟",
      choices: [
        { text: "أعقد اجتماعاً تعريفياً لتوضيح المهمة وتوزيع الأدوار.", score: 3, feedback: "قرار قيادي سليم!", type: "positive", next: "s2" },
        { text: "أبدأ بالعمل مباشرة ونحدد الأدوار لاحقاً.", score: 1, feedback: "العمل بدون وضوح الأدوار يؤدي لتداخل المهام.", type: "neutral", next: "s2" },
        { text: "أترك الفريق ينظم نفسه بنفسه.", score: 0, feedback: "الفرق تحتاج توجيهاً في البداية.", type: "negative", next: "s2" }
      ]
    },
    s2: {
      char: { avatar: "👩‍💻", name: "سارة", role: "مطورة برمجيات - انطوائية" },
      speech: "المدير، أنا مش مرتاحة في اجتماعات الفريق. بحب أشتغل لوحدي.",
      choices: [
        { text: "أنصحها بالتكيّف مع أسلوب الفريق.", score: 0, feedback: "قد تفقدك موهبة مهمة.", type: "negative", next: "s3" },
        { text: "أعطيها مساحة للعمل المستقل مع مشاركتها في القرارات الحرجة.", score: 3, feedback: "قرار قيادي ذكي!", type: "positive", next: "s3" },
        { text: "أطلب منها قيادة اجتماع واحد.", score: 2, feedback: "قرار جيد لكن قد يكون مرهقاً.", type: "positive", next: "s3" }
      ]
    },
    s3: {
      char: { avatar: "👨‍💼", name: "خالد", role: "موظف قديم - 15 سنة خبرة" },
      speech: "بصراحة يا مستشار، شفت فرق كتير بتفشل. <strong>إيه اللي هيخلي الفريق ده مختلف</strong>؟",
      choices: [
        { text: "أخبره بأن الفريق فرصة لإثبات نفسه.", score: 2, feedback: "رسالة جيدة، لكنها تحتاج دليلاً.", type: "positive", next: "s4" },
        { text: "أمنحه دوراً قيادياً فرعياً.", score: 3, feedback: "قرار قيادي بارع! تحويل المقاوم إلى شريك.", type: "positive", next: "s4" },
        { text: "أتجاهله وأركّز على المتحمسين.", score: 0, feedback: "تجاهل الأصوات القديمة يخلق مشاكل.", type: "negative", next: "s4" }
      ]
    },
    s4: {
      char: { avatar: "🔥", name: "محمد", role: "عضو شاب - متهور" },
      speech: "المدير، عندي فكرة ثورية! ممكن نطبقها بكرة.",
      choices: [
        { text: "أوافق فوراً - الحماس لا يُقدّر بثمن.", score: 0, feedback: "القرار المتسرع قد يكلف الفريق.", type: "negative", next: "s5" },
        { text: "أعمل معه على تحويل الفكرة إلى خطة تجريبية.", score: 3, feedback: "قرار قيادي متوازن!", type: "positive", next: "s5" },
        { text: "أرفض الفكرة فوراً.", score: 1, feedback: "الرفض يقتل روح المبادرة.", type: "neutral", next: "s5" }
      ]
    },
    s5: {
      char: { avatar: "⚔️", name: "نورا", role: "عضو فريق - في صراع" },
      speech: "المدير، أنا وزميلي اختلفنا وتطور لصراع شخصي.",
      choices: [
        { text: "أجلس معهم معاً وأفرض حل وسط.", score: 1, feedback: "الفرض قد يحل المشكلة مؤقتاً.", type: "neutral", next: "s6" },
        { text: "أجلس مع كلاً منهما منفرداً، ثم اجتماع ثلاثي.", score: 3, feedback: "قرار قيادي احترافي!", type: "positive", next: "s6" },
        { text: "أفصلهم في مهام منفصلة.", score: 0, feedback: "الفصل حل مؤقت.", type: "negative", next: "s6" }
      ]
    },
    s6: {
      char: { avatar: "👔", name: "المدير التنفيذي", role: "شركة خدمات حكومية" },
      speech: "الفريق وصل لمستوى عالٍ. <strong>ما أهم توصية</strong> لاستمرار النجاح؟",
      choices: [
        { text: "توثيق الدروس وبناء منظومة قيادة داخل الفريق.", score: 3, feedback: "قرار استراتيجي!", type: "positive", next: "end" },
        { text: "الاحتفاظ بالفريق كما هو.", score: 1, feedback: "الفريق يحتاج تطويراً مستمراً.", type: "neutral", next: "end" },
        { text: "تكليف كل عضو بمشروع منفصل.", score: 1, feedback: "الفرق تحتاج العمل الجماعي.", type: "neutral", next: "end" }
      ]
    }
  },
  endings: [
    { minScore: 15, icon: "🏆", title: "قائد استثنائي", desc: "قدمت نموذجاً راقياً في القيادة." },
    { minScore: 10, icon: "🌟", title: "قائد جيد", desc: "قراراتك كانت متوازنة." },
    { minScore: 5, icon: "⚠️", title: "قائد مبتدئ", desc: "بعض القرارات كانت تقليدية." },
    { minScore: 0, icon: "😕", title: "يحتاج تطوير", desc: "القرارات ركزت على إدارة المهام بدلاً من قيادة الأشخاص." }
  ]
};

SCENARIOS.decision = {
  title: "اتخاذ القرار",
  startScene: "s1",
  scenes: {
    s1: {
      char: { avatar: "🚨", name: "مدير الأزمات", role: "غرفة العمليات" },
      speech: "عندنا <strong>أزمة عاجلة</strong>: انقطاع الكهرباء في 3 محافظات، ومليون مواطن متأثر. لدينا 6 ساعات فقط.",
      choices: [
        { text: "ننتظر تقريراً كاملاً قبل التحرك.", score: 0, feedback: "في الأزمات، الوقت حاسم.", type: "negative", next: "s2" },
        { text: "نبدأ فوراً بإجراءات احتواء بالتوازي مع جمع المعلومات.", score: 3, feedback: "قرار قيادي حكيم!", type: "positive", next: "s2" },
        { text: "نعلن حالة الطوارئ في كل الجمهورية.", score: 1, feedback: "إعلان الطوارئ يخلق هلعاً.", type: "neutral", next: "s2" }
      ]
    },
    s2: {
      char: { avatar: "📊", name: "رئيس فريق التحليل", role: "مركز البيانات" },
      speech: "التقارير تشير إلى <strong>3 احتمالات</strong>: عطل تقني، نقص وقود، هجوم إلكتروني.",
      choices: [
        { text: "نعيد البيانات لتحليل أعمق.", score: 1, feedback: "الوقت ضيق.", type: "neutral", next: "s3" },
        { text: "نتعامل مع الاحتمالات الثلاثة بالتوازي.", score: 3, feedback: "قرار ذكي!", type: "positive", next: "s3" },
        { text: "نختار الاحتمال الأكثر ترجيحاً.", score: 1, feedback: "قد يكون القرار متسرعاً.", type: "neutral", next: "s3" }
      ]
    },
    s3: {
      char: { avatar: "📢", name: "مدير الإعلام", role: "المتحدث الرسمي" },
      speech: "الإعلام يتصل بنا. <strong>إيه الرسالة الرسمية؟</strong>",
      choices: [
        { text: "نعلن أن كل شيء تحت السيطرة.", score: 0, feedback: "تضليل الجمهور يخلق أزمة ثقة.", type: "negative", next: "s4" },
        { text: "نعلن بصراحة: الوضع خطير، ونشرح ما نعرفه.", score: 3, feedback: "قرار شجاع!", type: "positive", next: "s4" },
        { text: "نعقد مؤتمراً بعد حل الأزمة فقط.", score: 1, feedback: "الصمت يخلق فراغاً يملؤه الشك.", type: "neutral", next: "s4" }
      ]
    },
    s4: {
      char: { avatar: "⚡", name: "رئيس شركة الكهرباء", role: "الشركة القابضة" },
      speech: "خياران: <strong>قطع الكهرباء عن الصناعة</strong>، أو <strong>شراء من الشبكة المجاورة</strong> بتكلفة 3 أضعاف.",
      choices: [
        { text: "قطع الكهرباء عن الصناعة - الأولوية للناس.", score: 2, feedback: "قرار اجتماعي، لكن بتكلفة اقتصادية.", type: "positive", next: "s5" },
        { text: "شراء بغض النظر عن التكلفة.", score: 3, feedback: "الأرواح لا تُقدّر بثمن.", type: "positive", next: "s5" },
        { text: "خليط: قطع جزئي + شراء جزء.", score: 3, feedback: "قرار متوازن!", type: "positive", next: "s5" }
      ]
    },
    s5: {
      char: { avatar: "👨‍⚖️", name: "المستشار القانوني", role: "الإدارة القانونية" },
      speech: "قرار قطع الكهرباء قد يعرضنا <strong>قضايا تعويضات</strong>.",
      choices: [
        { text: "نتحمل المخاطر - الأولوية للنتائج.", score: 1, feedback: "قرار متهور.", type: "neutral", next: "s6" },
        { text: "نشكل لجنة قانونية فورية.", score: 3, feedback: "قرار احترافي!", type: "positive", next: "s6" },
        { text: "نستشير جهة أعلى.", score: 1, feedback: "الأزمة تحتاج قراراً سريعاً.", type: "neutral", next: "s6" }
      ]
    },
    s6: {
      char: { avatar: "🚨", name: "مدير الأزمات", role: "غرفة العمليات" },
      speech: "الأزمة تحت السيطرة. <strong>ما أهم درس</strong> من هذه التجربة؟",
      choices: [
        { text: "الجاهزية والاستباقية أهم من سرعة الاستجابة.", score: 3, feedback: "درس عميق!", type: "positive", next: "end" },
        { text: "الشجاعة في القرار أهم من المعلومات الكاملة.", score: 2, feedback: "صحيح جزئياً.", type: "positive", next: "end" },
        { text: "الأزمات لا يمكن التخطيط لها.", score: 0, feedback: "منطق خاطئ.", type: "negative", next: "end" }
      ]
    }
  },
  endings: [
    { minScore: 15, icon: "🏆", title: "قائد أزمات محترف", desc: "أثبتت مهارات استثنائية في اتخاذ القرار تحت ضغط." },
    { minScore: 10, icon: "🎯", title: "متخذ قرار جيد", desc: "قراراتك كانت في الاتجاه الصحيح." },
    { minScore: 5, icon: "⚠️", title: "تحت التطوير", desc: "بعض القرارات اتسمت بالتردد." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "القرارات افتقدت للتوازن." }
  ]
};

// ========== ENGINE ==========
function startModule(id) {
  if (!SCENARIOS[id]) { alert("هذه الوحدة ستضاف قريباً"); return; }
  currentModule = SCENARIOS[id];
  currentScene = currentModule.startScene;
  currentScore = 0;
  sceneCount = 0;
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
  var percent = (sceneCount / totalScenes) * 100;
  document.getElementById("scenarioProgressFill").style.width = Math.min(percent, 100) + "%";

  var html = "";
  html += "<div class='char-area'>";
  html += "<div class='char-avatar'>" + scene.char.avatar + "</div>";
  html += "<div class='char-name'>" + scene.char.name + "</div>";
  html += "<div class='char-role'>" + scene.char.role + "</div>";
  html += "</div>";
  html += "<div class='speech'>";
  html += "<button class='voice-btn' id='speakBtn' title='اسمع الحوار'>🔊</button>";
  html += "<div class='speech-text'>" + scene.speech + "</div>";
  html += "</div>";
  html += "<div class='feedback' id='feedbackArea'></div>";
  html += "<div class='choices' id='choicesArea'>";
  for (var i = 0; i < scene.choices.length; i++) {
    html += "<button class='choice-btn' data-choice='" + i + "'>";
    html += "<span class='choice-num'>" + (i + 1) + "</span>";
    html += "<span class='choice-text'>" + scene.choices[i].text + "</span>";
    html += "</button>";
  }
  html += "</div>";
  html += "<div style='text-align:center;'><button class='continue-btn' id='continueBtn' style='display:none;'>التالي ➜</button></div>";

  document.getElementById("scenarioContent").innerHTML = html;

  var choiceBtns = document.querySelectorAll(".choice-btn");
  for (var j = 0; j < choiceBtns.length; j++) {
    choiceBtns[j].addEventListener("click", handleChoice);
  }

  var speakBtn = document.getElementById("speakBtn");
  if (speakBtn) {
    speakBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      speakText(scene.speech);
    });
  }
  if (voiceEnabled) {
    setTimeout(function() { speakText(scene.speech); }, 400);
  }

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

  var feedbackArea = document.getElementById("feedbackArea");
  var icon = choice.type === "positive" ? "✅" : (choice.type === "negative" ? "❌" : "💡");
  var scoreText = choice.score > 0 ? "(+" + choice.score + ")" : (choice.score < 0 ? "(" + choice.score + ")" : "(0)");
  feedbackArea.className = "feedback show " + choice.type;
  feedbackArea.innerHTML = "<strong>" + icon + " " + scoreText + "</strong> " + choice.feedback;

  var choiceBtns = document.querySelectorAll(".choice-btn");
  for (var i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].disabled = true;
    choiceBtns[i].style.opacity = "0.4";
    choiceBtns[i].style.cursor = "not-allowed";
  }
  btn.style.opacity = "1";
  btn.style.borderColor = "#8b6f1f";

  var continueBtn = document.getElementById("continueBtn");
  continueBtn.style.display = "inline-block";
  continueBtn.setAttribute("data-next", choice.next);
  continueBtn.addEventListener("click", goNext);
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
  var percent = Math.round((currentScore / maxScore) * 100);
  if (percent > 100) percent = 100;

  var html = "";
  html += "<div class='ending-area'>";
  html += "<div class='ending-icon'>" + ending.icon + "</div>";
  html += "<div class='ending-title'>" + ending.title + "</div>";
  html += "<div class='ending-desc'>" + ending.desc + "</div>";
  html += "<div class='final-score-box'>";
  html += "<div class='final-score-label'>مجموع نقاطك</div>";
  html += "<div class='final-score-value'>" + currentScore + " / " + maxScore + "</div>";
  html += "<div class='final-score-label' style='margin-top:8px;'>" + percent + "%</div>";
  html += "</div>";
  html += "<div>";
  html += "<button class='restart-btn' id='restartScenarioBtn'>🔄 إعادة</button>";
  html += "<button class='back-dashboard-btn' id='backToDashBtn'>🏠 العودة للرئيسية</button>";
  html += "</div>";
  html += "</div>";

  document.getElementById("scenarioContent").innerHTML = html;
  document.getElementById("scenarioProgressFill").style.width = "100%";

  var moduleId = findModuleIdByTitle(currentModule.title);
  if (moduleId) {
    if (state.completed.indexOf(moduleId) < 0) state.completed.push(moduleId);
    state.scores[moduleId] = percent;
    saveState();
    renderModules();
  }

  document.getElementById("restartScenarioBtn").addEventListener("click", function() { startModule(moduleId); });
  document.getElementById("backToDashBtn").addEventListener("click", closeScenario);
}

function findModuleIdByTitle(title) {
  for (var i = 0; i < MODULES.length; i++) {
    if (MODULES[i].title === title) return MODULES[i].id;
  }
  return null;
}

function closeScenario() {
  stopSpeaking();
  document.getElementById("scenarioOverlay").classList.remove("show");
  document.getElementById("scenarioContent").innerHTML = "";
}

// ========== LOGIN ==========
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
  if (sessionStorage.getItem("khodair_academy_auth") === "true") {
    document.getElementById("loginOverlay").style.display = "none";
  }
}

function openAbout() { document.getElementById("aboutModal").classList.add("show"); }
function closeAbout() { document.getElementById("aboutModal").classList.remove("show"); }

// ========== INIT ==========
window.addEventListener("load", function() {
  checkAuthOnLoad();
  loadState();
  renderModules();
  initVoice();

  var pwInput = document.getElementById("accessPassword");
  var loginBtn = document.getElementById("loginBtn");
  var aboutBtn = document.getElementById("aboutBtn");
  var resetBtn = document.getElementById("resetBtn");
  var closeAboutBtn = document.getElementById("closeAboutBtn");
  var scenarioCloseBtn = document.getElementById("scenarioCloseBtn");
  var voiceGlobal = document.getElementById("voiceGlobal");

  if (pwInput) pwInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") { e.preventDefault(); checkPassword(); }
  });
  if (loginBtn) loginBtn.addEventListener("click", checkPassword);
  if (aboutBtn) aboutBtn.addEventListener("click", openAbout);
  if (resetBtn) resetBtn.addEventListener("click", resetAll);
  if (closeAboutBtn) closeAboutBtn.addEventListener("click", closeAbout);
  if (scenarioCloseBtn) scenarioCloseBtn.addEventListener("click", closeScenario);
  if (voiceGlobal) voiceGlobal.addEventListener("click", toggleVoice);
});
</script>

</body>
</html>
  `);
});

module.exports = app;
  console.log("KHODAIR ACADEMY running on port " + PORT);
});