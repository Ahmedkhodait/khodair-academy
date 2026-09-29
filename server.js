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
<<<<<<< HEAD
<title>KHODAIR ACADEMY</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; background: #f5efd5; color: #2a2418; min-height: 100vh; }
header { background: #d6b85a; border-bottom: 3px solid #8b6f1f; padding: 15px 25px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; box-shadow: 0 4px 20px rgba(139,111,31,0.2); }
.header-left { display: flex; align-items: center; gap: 15px; }
.logo-icon { width: 65px; height: 65px; flex-shrink: 0; }
.logo-text { color: #1a1509; font-size: 22px; font-weight: bold; }
.subtitle { margin-top: 3px; color: #3a3020; font-size: 12px; }
.header-actions { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.header-actions button { padding: 8px 14px; font-size: 12px; background: #1a1509; color: #d6b85a; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: inherit; }
.header-actions button:hover { background: #8b6f1f; color: #f5efd5; }
.contact-btn { background: #25D366 !important; color: #ffffff !important; padding: 8px 14px; font-size: 12px; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: inherit; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; }
.contact-btn:hover { background: #1ebe5b !important; }
.email-btn { background: #ea4335 !important; color: #ffffff !important; padding: 8px 14px; font-size: 12px; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: inherit; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; }
.email-btn:hover { background: #c5221f !important; }
main { max-width: 1200px; margin: 0 auto; padding: 35px 20px; }
.welcome { text-align: center; margin-bottom: 40px; }
.welcome h1 { color: #8b6f1f; font-size: 32px; margin-bottom: 12px; }
.welcome p { color: #3a3020; font-size: 16px; line-height: 1.8; max-width: 700px; margin: 0 auto; }
.progress-overview { background: #ffffff; border: 2px solid #d6b85a; border-radius: 12px; padding: 22px; margin-bottom: 35px; text-align: center; box-shadow: 0 4px 20px rgba(139,111,31,0.1); }
.progress-overview h3 { color: #8b6f1f; font-size: 15px; margin-bottom: 12px; }
.progress-bar-main { background: #e8dcc0; height: 24px; border-radius: 12px; overflow: hidden; margin-bottom: 10px; }
.progress-fill-main { height: 100%; background: linear-gradient(90deg, #b8963d, #d6b85a); width: 0%; transition: width 0.8s ease; border-radius: 12px; }
.progress-text { color: #2a2418; font-size: 13px; }
.progress-text strong { color: #8b6f1f; font-size: 16px; }
.badges-row { display: flex; justify-content: center; gap: 12px; margin-top: 15px; flex-wrap: wrap; }
.badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: bold; border: 2px solid #cccccc; background: #f0f0f0; color: #999999; opacity: 0.5; }
.badge.unlocked { background: #d5f5e0; color: #1e5a3a; border-color: #4a9d6e; opacity: 1; }
.modules-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 22px; margin-bottom: 35px; }
.module-card { background: #ffffff; border: 2px solid #d6b85a; border-radius: 15px; padding: 25px; cursor: pointer; transition: all 0.4s; position: relative; overflow: hidden; }
.module-card:hover { background: #fdf9ea; border-color: #8b6f1f; transform: translateY(-5px); box-shadow: 0 15px 40px rgba(139,111,31,0.25); }
.module-card.completed { border-color: #4a9d6e; }
.module-card.completed::after { content: '✓'; position: absolute; top: 12px; left: 12px; background: #4a9d6e; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 16px; }
.module-icon { font-size: 45px; margin-bottom: 12px; display: block; }
.module-title { color: #8b6f1f; font-size: 18px; font-weight: bold; margin-bottom: 6px; }
.module-desc { color: #3a3020; font-size: 13px; line-height: 1.6; margin-bottom: 12px; }
.module-meta { display: flex; justify-content: space-between; color: #7a6a3a; font-size: 12px; margin-bottom: 12px; padding-top: 12px; border-top: 1px dashed #d6b85a; }
.module-start-btn { background: #d6b85a; color: #1a1509; border: none; padding: 11px 22px; border-radius: 8px; font-weight: bold; font-size: 13px; font-family: inherit; cursor: pointer; width: 100%; }
.module-start-btn:hover { background: #b8963d; }
footer { text-align: center; padding: 25px 20px; color: #7a6a3a; font-size: 12px; border-top: 1px solid #d6b85a; }
footer strong { color: #8b6f1f; }
.modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(26,21,9,0.75); display: none; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
.modal-overlay.show { display: flex; }
.modal-box { background: #ffffff; border: 3px solid #d6b85a; border-radius: 15px; padding: 32px; max-width: 560px; width: 100%; text-align: center; max-height: 90vh; overflow-y: auto; }
.modal-box h2 { color: #8b6f1f; font-size: 22px; margin-bottom: 12px; }
.modal-box p { color: #3a3020; line-height: 1.7; margin-bottom: 12px; }
.modal-box .about-section { background: #f5efd5; border: 1px solid #d6b85a; border-radius: 10px; padding: 16px; margin-top: 12px; text-align: right; }
.modal-box .about-section h3 { color: #8b6f1f; font-size: 14px; margin-bottom: 8px; }
.modal-box .about-section p { font-size: 13px; margin: 5px 0; color: #2a2418; }
.modal-close { background: #d6b85a; color: #1a1509; border: none; padding: 11px 30px; border-radius: 8px; font-weight: bold; font-size: 14px; font-family: inherit; cursor: pointer; margin-top: 15px; }
.login-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #f5efd5; display: flex; align-items: center; justify-content: center; z-index: 9999; }
.login-box { background: #ffffff; border: 3px solid #d6b85a; border-radius: 15px; padding: 40px 35px; max-width: 420px; width: 90%; text-align: center; box-shadow: 0 20px 60px rgba(139,111,31,0.3); }
.login-box h1 { color: #8b6f1f; font-size: 22px; margin-bottom: 8px; }
.login-box p { color: #3a3020; font-size: 13px; margin-bottom: 22px; }
.login-box input { width: 100%; padding: 14px; font-size: 15px; text-align: center; letter-spacing: 2px; margin-bottom: 12px; background: #f5efd5; color: #2a2418; border: 2px solid #d6b85a; border-radius: 8px; font-family: inherit; }
.login-box input:focus { outline: none; border-color: #8b6f1f; }
.login-box button { width: 100%; padding: 14px; background: #d6b85a; color: #1a1509; border: none; border-radius: 8px; font-weight: bold; font-size: 15px; font-family: inherit; cursor: pointer; }
.login-box button:hover { background: #b8963d; }
.login-error { color: #c0392b; font-size: 13px; margin-top: 10px; display: none; }
.login-error.show { display: block; }
.scenario-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #f5efd5; display: none; z-index: 5000; overflow-y: auto; padding: 15px; }
.scenario-overlay.show { display: block; }
.scenario-container { max-width: 780px; margin: 0 auto; padding: 25px 15px 60px; }
.scenario-topbar { display: flex; justify-content: space-between; align-items: center; background: #ffffff; border: 2px solid #d6b85a; border-radius: 10px; padding: 10px 18px; margin-bottom: 20px; }
.scenario-title { color: #8b6f1f; font-weight: bold; font-size: 14px; }
.scenario-score { background: #f5efd5; padding: 5px 12px; border-radius: 15px; font-size: 12px; color: #2a2418; }
.scenario-score strong { color: #8b6f1f; font-size: 15px; }
.scenario-close { background: none; border: 2px solid #8b6f1f; color: #8b6f1f; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 15px; font-weight: bold; font-family: inherit; }
.scenario-close:hover { background: #8b6f1f; color: #ffffff; }
.scenario-progress { width: 100%; height: 4px; background: #e8dcc0; border-radius: 2px; margin-bottom: 25px; overflow: hidden; }
.scenario-progress-fill { height: 100%; background: linear-gradient(90deg, #d6b85a, #8b6f1f); width: 0%; transition: width 0.5s; }
.char-area { text-align: center; margin-bottom: 18px; }
.char-avatar { font-size: 80px; display: inline-block; animation: popIn 0.5s; filter: drop-shadow(0 6px 15px rgba(139,111,31,0.3)); }
.char-name { color: #8b6f1f; font-size: 18px; font-weight: bold; margin-top: 8px; }
.char-role { color: #3a3020; font-size: 12px; margin-top: 3px; }
.speech { background: #ffffff; border: 2px solid #d6b85a; border-radius: 15px; padding: 22px 25px; position: relative; margin: 22px 0; animation: slideUp 0.6s; }
.speech::before { content: ''; position: absolute; top: -12px; right: 50%; transform: translateX(50%); width: 0; height: 0; border-left: 12px solid transparent; border-right: 12px solid transparent; border-bottom: 12px solid #d6b85a; }
.speech-text { color: #2a2418; font-size: 15px; line-height: 1.9; text-align: right; padding-top: 10px; }
.speech-text strong { color: #8b6f1f; }
.voice-btn { position: absolute; top: 8px; left: 8px; background: #d6b85a; color: #1a1509; border: none; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; font-size: 16px; }
.voice-btn:hover { background: #b8963d; }
.choices { display: flex; flex-direction: column; gap: 10px; margin-top: 18px; }
.choice-btn { background: #ffffff; border: 2px solid #d6b85a; color: #2a2418; padding: 14px 18px; border-radius: 10px; text-align: right; font-size: 14px; font-family: inherit; cursor: pointer; transition: all 0.3s; line-height: 1.6; display: flex; align-items: flex-start; gap: 10px; }
.choice-btn:hover { background: #fdf9ea; border-color: #8b6f1f; transform: translateX(-5px); }
.choice-num { display: inline-block; background: #d6b85a; color: #1a1509; width: 24px; height: 24px; line-height: 24px; text-align: center; border-radius: 50%; font-weight: bold; flex-shrink: 0; font-size: 12px; }
.choice-text { flex: 1; }
.feedback { margin-top: 18px; padding: 14px 18px; border-radius: 10px; font-size: 14px; line-height: 1.7; display: none; animation: slideUp 0.4s; }
=======
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
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
.feedback.show { display: block; }
.feedback.positive { background: #d5f5e0; border-right: 5px solid #4a9d6e; color: #1e5a3a; }
.feedback.negative { background: #fadbd8; border-right: 5px solid #c0392b; color: #7b241c; }
.feedback.neutral { background: #fdf3d0; border-right: 5px solid #d6b85a; color: #7a5c0f; }
<<<<<<< HEAD
.continue-btn { background: #d6b85a; color: #1a1509; border: none; padding: 13px 35px; border-radius: 8px; font-size: 14px; font-weight: bold; font-family: inherit; cursor: pointer; margin-top: 18px; }
.continue-btn:hover { background: #b8963d; }
.ending-area { text-align: center; padding: 25px 15px; }
.ending-icon { font-size: 90px; margin: 15px 0; animation: popIn 0.8s; }
.ending-title { color: #8b6f1f; font-size: 24px; font-weight: bold; margin: 12px 0; }
.ending-desc { color: #2a2418; font-size: 15px; line-height: 1.9; max-width: 620px; margin: 0 auto 20px; padding: 18px; background: #ffffff; border-radius: 12px; border-right: 5px solid #d6b85a; text-align: right; }
.final-score-box { display: inline-block; background: #ffffff; border: 3px solid #d6b85a; padding: 18px 40px; border-radius: 15px; margin: 18px 0; }
.final-score-label { color: #3a3020; font-size: 12px; margin-bottom: 6px; }
.final-score-value { color: #8b6f1f; font-size: 38px; font-weight: bold; }
.action-btn { background: #d6b85a; color: #1a1509; border: none; padding: 12px 30px; border-radius: 8px; font-size: 14px; font-weight: bold; font-family: inherit; cursor: pointer; margin: 15px 5px 0; }
.action-btn:hover { background: #b8963d; }
.action-btn.secondary { background: transparent; color: #8b6f1f; border: 2px solid #8b6f1f; }
.action-btn.secondary:hover { background: #8b6f1f; color: #ffffff; }
.action-btn.share { background: #25D366; color: #ffffff; }
.action-btn.share:hover { background: #1ebe5b; }
.certificate-box { background: #fffdf5; border: 4px double #8b6f1f; border-radius: 15px; padding: 35px; max-width: 700px; margin: 20px auto; text-align: center; }
.certificate-box h1 { color: #8b6f1f; font-size: 28px; margin-bottom: 15px; letter-spacing: 2px; }
.certificate-box .cert-line { width: 80%; margin: 15px auto; border-top: 1px solid #d6b85a; }
.certificate-box .cert-name { color: #2a2418; font-size: 26px; font-weight: bold; margin: 15px 0; padding: 15px; border-bottom: 2px solid #d6b85a; border-top: 2px solid #d6b85a; display: inline-block; min-width: 300px; }
.certificate-box .cert-text { color: #3a3020; font-size: 15px; line-height: 1.8; margin: 15px 0; }
.certificate-box .cert-score { color: #8b6f1f; font-size: 20px; font-weight: bold; margin: 15px 0; }
.certificate-box .cert-date { color: #7a6a3a; font-size: 13px; margin-top: 20px; }
.badge-popup { position: fixed; top: 30px; left: 50%; transform: translateX(-50%) translateY(-200px); background: #ffffff; border: 3px solid #4a9d6e; border-radius: 15px; padding: 20px 30px; text-align: center; z-index: 99999; box-shadow: 0 15px 40px rgba(74,157,110,0.4); transition: transform 0.5s; }
.badge-popup.show { transform: translateX(-50%) translateY(0); }
.badge-popup .bp-icon { font-size: 50px; }
.badge-popup .bp-title { color: #4a9d6e; font-weight: bold; font-size: 18px; margin: 8px 0; }
.badge-popup .bp-text { color: #3a3020; font-size: 13px; }
.voice-global { position: fixed; bottom: 20px; left: 20px; background: #d6b85a; color: #1a1509; border: 2px solid #8b6f1f; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; font-size: 20px; z-index: 9997; }
.voice-global:hover { background: #b8963d; }
.voice-global.muted { background: #cccccc; color: #888888; }
@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes popIn { 0% { opacity: 0; transform: scale(0.5); } 100% { opacity: 1; transform: scale(1); } }
@media (max-width: 700px) {
  .welcome h1 { font-size: 24px; }
  main { padding: 20px 12px; }
  .modules-grid { grid-template-columns: 1fr; }
  .header-left { flex-direction: column; align-items: flex-start; }
  .logo-text { font-size: 17px; }
  .logo-icon { width: 50px; height: 50px; }
  .char-avatar { font-size: 65px; }
  .speech-text { font-size: 14px; }
=======
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
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
}
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
<<<<<<< HEAD
          <stop offset="0%" style="stop-color:#f5d98b"/>
          <stop offset="50%" style="stop-color:#d6b85a"/>
          <stop offset="100%" style="stop-color:#8b6f1f"/>
=======
          <stop offset="0%" style="stop-color:#f5d98b;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#d6b85a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b6f1f;stop-opacity:1" />
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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
    <button id="aboutBtn">ℹ️ عن التطبيق</button>
<<<<<<< HEAD
    <a class="contact-btn" href="https://wa.me/201061396019" target="_blank">💬 واتساب</a>
    <a class="email-btn" href="mailto:ahmedkhodair33@gmail.com?subject=استفسار%20عن%20KHODAIR%20ACADEMY">📧 إيميل</a>
=======
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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
<<<<<<< HEAD
    <div class="badges-row">
      <div class="badge" id="badge1">🌱 مبتدئ</div>
      <div class="badge" id="badge3">🎯 محترف</div>
      <div class="badge" id="badge5">🏆 خبير</div>
    </div>
  </div>

  <div class="modules-grid" id="modulesGrid"></div>

  <div style="text-align:center; margin: 30px 0;">
    <button class="action-btn" id="certificateBtn" style="display:none;">🏅 عرض شهادة الإتمام</button>
  </div>
=======
  </div>

  <div class="modules-grid" id="modulesGrid"></div>
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
</main>

<footer>
  <p>KHODAIR ACADEMY — <strong>أكاديمية الحوكمة والقيادة التفاعلية</strong></p>
<<<<<<< HEAD
  <p style="margin-top:6px;">© 2026 أحمد محروس خضير — جميع الحقوق محفوظة</p>
=======
  <p style="margin-top:8px;">تطوير: <strong>أحمد محروس خضير</strong> — 2026</p>
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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
<<<<<<< HEAD
      <p>أكاديمية تفاعلية تستخدم <strong>السيناريوهات الواقعية</strong> لتعليم مبادئ الحوكمة، والتخطيط الاستراتيجي، والتنمية المستدامة، والقيادة، واتخاذ القرار.</p>
=======
      <p>أكاديمية تفاعلية تستخدم السيناريوهات الواقعية لتعليم مبادئ الحوكمة، والتخطيط الاستراتيجي، والتنمية المستدامة، والقيادة، واتخاذ القرار.</p>
      <p>في كل وحدة، ستلعب دور <strong>المستشار</strong> الذي يواجه مواقف واقعية، ويقابل شخصيات مختلفة، ويتخذ قرارات تؤثر على النتيجة النهائية.</p>
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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
<<<<<<< HEAD
      <p style="margin-top:10px; color:#8b6f1f;"><strong>💼 للاستفسار والشراء:</strong></p>
      <p>💬 واتساب: 01061396019</p>
      <p>📧 ahmedkhodair33@gmail.com</p>
=======
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
    </div>
    <button class="modal-close" id="closeAboutBtn">إغلاق</button>
  </div>
</div>

<<<<<<< HEAD
<div class="modal-overlay" id="certificateModal">
  <div class="modal-box" style="max-width: 750px;">
    <div id="certificateContent"></div>
    <button class="modal-close" id="closeCertBtn">إغلاق</button>
  </div>
</div>

<div class="badge-popup" id="badgePopup">
  <div class="bp-icon" id="bpIcon">🏆</div>
  <div class="bp-title" id="bpTitle">شارة جديدة!</div>
  <div class="bp-text" id="bpText">لقد حققت إنجازاً جديداً</div>
</div>

<script>
var MODULES = [
  { id: "governance", icon: "🏛️", title: "الحوكمة والشفافية", desc: "اختبار تفاعلي لقياس مبادئ الحوكمة الرشيدة", duration: "15 دقيقة" },
  { id: "strategic", icon: "📊", title: "التخطيط الاستراتيجي", desc: "رحلة تفاعلية في بناء الرؤية والتحليل الاستراتيجي", duration: "20 دقيقة" },
  { id: "sustainability", icon: "🌍", title: "التنمية المستدامة", desc: "قرارات مصيرية في مواجهة تحديات الاستدامة", duration: "18 دقيقة" },
  { id: "leadership", icon: "🤝", title: "القيادة وإدارة الفرق", desc: "سيناريو تفاعلي لاكتشاف نمطك القيادي", duration: "20 دقيقة" },
  { id: "decision", icon: "🎯", title: "اتخاذ القرار", desc: "مواقف حرجة تحتاج قرارات صعبة", duration: "15 دقيقة" }
];

var STATE_KEY = "khodair_academy_state";
var state = { completed: [], scores: {}, badges: [] };
=======
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
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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
<<<<<<< HEAD
    if (!state.badges) state.badges = [];
=======
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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
<<<<<<< HEAD
  updateBadges();
  updateCertificateButton();
=======
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
}

function updateProgress() {
  var total = MODULES.length;
  var done = state.completed.length;
  var percent = Math.round((done / total) * 100);
  document.getElementById("modulesCompleted").innerText = done;
  document.getElementById("overallPercent").innerText = percent + "%";
  document.getElementById("mainProgressFill").style.width = percent + "%";
}

<<<<<<< HEAD
function updateBadges() {
  var count = state.completed.length;
  if (count >= 1) document.getElementById("badge1").classList.add("unlocked");
  if (count >= 3) document.getElementById("badge3").classList.add("unlocked");
  if (count >= 5) document.getElementById("badge5").classList.add("unlocked");
}

function checkNewBadge(oldCount, newCount) {
  if (oldCount < 1 && newCount >= 1 && state.badges.indexOf("badge1") < 0) {
    state.badges.push("badge1");
    showBadgePopup("🌱", "شارة المبتدئ!", "لقد أكملت أول وحدة بنجاح");
  } else if (oldCount < 3 && newCount >= 3 && state.badges.indexOf("badge3") < 0) {
    state.badges.push("badge3");
    showBadgePopup("🎯", "شارة المحترف!", "لقد أكملت 3 وحدات");
  } else if (oldCount < 5 && newCount >= 5 && state.badges.indexOf("badge5") < 0) {
    state.badges.push("badge5");
    showBadgePopup("🏆", "شارة الخبير!", "لقد أكملت كل الوحدات الخمس!");
  }
}

function showBadgePopup(icon, title, text) {
  var popup = document.getElementById("badgePopup");
  document.getElementById("bpIcon").innerText = icon;
  document.getElementById("bpTitle").innerText = title;
  document.getElementById("bpText").innerText = text;
  popup.classList.add("show");
  setTimeout(function() { popup.classList.remove("show"); }, 4000);
}

function updateCertificateButton() {
  var btn = document.getElementById("certificateBtn");
  if (state.completed.length >= 5) btn.style.display = "inline-block";
  else btn.style.display = "none";
}

function resetAll() {
  if (!confirm("هل أنت متأكد من إعادة تعيين كل التقدم؟")) return;
  state = { completed: [], scores: {}, badges: [] };
=======
function resetAll() {
  if (!confirm("هل أنت متأكد من إعادة تعيين كل التقدم؟")) return;
  state = { completed: [], scores: {} };
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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
<<<<<<< HEAD
      speech: "أهلاً بك يا مستشار. تم استدعاؤك لمساعدتنا في مشكلة خطيرة. هناك شبهات فساد في إحدى الإدارات. <strong>من أين نبدأ؟</strong>",
      choices: [
        { text: "نبدأ بمراجعة الميزانيات والحسابات.", score: 1, feedback: "المراجعة المالية مهمة، لكن المشكلة قد تكون أعمق.", type: "neutral", next: "s2" },
        { text: "نبدأ بتقييم منظومة الحوكمة: الشفافية، المساءلة، سيادة القانون.", score: 3, feedback: "قرار ممتاز! الحوكمة هي الأساس.", type: "positive", next: "s2" },
        { text: "نبدأ فوراً بإقالة المتورطين.", score: 0, feedback: "التسرع بدون أدلة قد يزيد المشكلة.", type: "negative", next: "s2" }
      ]
    },
    s2: {
      char: { avatar: "💼", name: "مدير المراجعة", role: "إدارة المراجعة" },
      speech: "المشكلة في ثلاث حاجات: غياب الفصل بين السلطات، غياب الشفافية، وضعف المساءلة. <em>بأي واحدة نبدأ؟</em>",
      choices: [
        { text: "الفصل بين السلطات - من يوافق لا ينفذ ولا يراقب.", score: 3, feedback: "أحسنت! حجر الأساس.", type: "positive", next: "s3" },
        { text: "الشفافية - ننشر كل المعاملات.", score: 2, feedback: "خطوة جيدة، لكن الشفافية بدون مساءلة قد تبقى حبراً.", type: "positive", next: "s3" },
        { text: "المساءلة - عقوبات صارمة لكل مخالفة.", score: 1, feedback: "بدون شفافية قد تصبح أداة للانتقام.", type: "neutral", next: "s3" }
      ]
    },
    s3: {
      char: { avatar: "👨‍💼", name: "أحمد", role: "موظف قديم - 20 سنة" },
      speech: "شفت لجان ومبادرات كتير وكلها انتهت بنفس النتيجة. <strong>الموظفين مش هيصدقوا إن فيه تغيير حقيقي</strong> إلا لو شافوا بأعينهم.",
      choices: [
        { text: "نطلق حملة توعية شاملة.", score: 1, feedback: "الكلام لا يكفي. يريدون أفعالاً.", type: "neutral", next: "s4" },
        { text: "نبدأ بمشروع صغير ناجح خلال 90 يوم.", score: 3, feedback: "Quick Win! النجاح المبكر يبني الثقة.", type: "positive", next: "s4" },
        { text: "نجبرهم على التوقيع على تعهدات.", score: 0, feedback: "الإجبار يخلق مقاومة لا التزام.", type: "negative", next: "s4" }
=======
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
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s4: {
      char: { avatar: "👩‍⚖️", name: "المستشارة القانونية", role: "الإدارة القانونية" },
<<<<<<< HEAD
      speech: "أي إصلاح لازم يكون له <strong>سند قانوني واضح</strong>. قانون 2004 قديم جداً.",
      choices: [
        { text: "نعمل بالقانون الحالي مؤقتاً.", score: 1, feedback: "الاجتهاد قد يفتح باباً للطعن.", type: "neutral", next: "s5" },
        { text: "نعد قانون جديد سريعاً.", score: 2, feedback: "قرار سليم، لكن يحتاج وقتاً.", type: "positive", next: "s5" },
        { text: "قانون مؤقت + إعداد قانون شامل بالتوازي.", score: 3, feedback: "استراتيجية ذكية!", type: "positive", next: "s5" }
      ]
    },
    s5: {
      char: { avatar: "🎓", name: "خبير دولي", role: "مستشار البنك الدولي" },
      speech: "الحوكمة ليست حدثاً، بل <strong>ثقافة</strong>. <em>كيف تضمنون الاستدامة؟</em>",
      choices: [
        { text: "نعتمد على القيادة الحالية.", score: 1, feedback: "الاعتماد على أشخاص خطر.", type: "neutral", next: "s6" },
        { text: "نبني منظومة مؤسسية دائمة.", score: 3, feedback: "المؤسسات تبقى، الأشخاص يرحلون.", type: "positive", next: "s6" },
        { text: "نتعاقد مع شركة أجنبية لإدارة الملف.", score: 0, feedback: "يمنع بناء قدرات داخلية.", type: "negative", next: "s6" }
      ]
    },
    s6: {
      char: { avatar: "🎩", name: "معالي الوزير", role: "وزير المالية" },
      speech: "ممتاز يا مستشار. <strong>ما أهم توصية واحدة</strong> لضمان نجاح الإصلاح؟",
      choices: [
        { text: "الثقة تُبنى بالشفافية، والشفافية تحتاج أنظمة لا وعوداً.", score: 3, feedback: "توصية عميقة. جوهر الحوكمة.", type: "positive", next: "end" },
        { text: "قيادة قوية تدفع الإصلاح.", score: 2, feedback: "القيادة وحدها لا تكفي.", type: "neutral", next: "end" },
        { text: "الشعب يستحق حكومة نظيفة.", score: 1, feedback: "شعار جميل، لكن التوصية تحتاج عمقاً.", type: "neutral", next: "end" }
=======
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
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    }
  },
  endings: [
<<<<<<< HEAD
    { minScore: 15, icon: "🏆", title: "مستشار حوكمة بارع", desc: "قدمت رؤية متكاملة: فصل السلطات، الشفافية، المساءلة، البناء المؤسسي. تجربتك نموذج يحتذى به." },
    { minScore: 10, icon: "👍", title: "مستشار جيد", desc: "قراراتك سليمة بشكل عام، لكن كان هناك مجال لتعميق بعض الجوانب." },
    { minScore: 5, icon: "⚠️", title: "مستشار متوسط", desc: "بعض القرارات صحيحة، لكن هناك فجوات في الرؤية الاستراتيجية." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "قراراتك ركزت على الحلول السريعة بدلاً من معالجة الجذور." }
=======
    { minScore: 17, icon: "🏆", title: "مستشار حوكمة بارع", desc: "قدمت رؤية متكاملة للحوكمة: فصل السلطات، الشفافية، المساءلة، البناء المؤسسي." },
    { minScore: 12, icon: "👍", title: "مستشار جيد", desc: "قراراتك كانت سليمة بشكل عام، لكن كان هناك مجال لتعميق بعض الجوانب." },
    { minScore: 7, icon: "⚠️", title: "مستشار متوسط", desc: "اتخذت بعض القرارات الصحيحة، لكن هناك فجوات في الرؤية الاستراتيجية." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "قراراتك ركزت على الحلول السريعة بدلاً من معالجة جذور المشكلة." }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
  ]
};

SCENARIOS.strategic = {
  title: "التخطيط الاستراتيجي",
  startScene: "s1",
  scenes: {
    s1: {
<<<<<<< HEAD
      char: { avatar: "🏢", name: "رئيس مجلس الإدارة", role: "شركة حكومية" },
      speech: "الشركة تواجه منافسة شرسة. نحتاج <strong>خطة استراتيجية جديدة</strong>. من أين نبدأ؟",
      choices: [
        { text: "تحليل البيئة الداخلية والخارجية (SWOT).", score: 3, feedback: "قرار سليم! أساس أي خطة ناجحة.", type: "positive", next: "s2" },
        { text: "الأهداف المالية للسنوات الخمس.", score: 1, feedback: "مهمة، لكن بدون فهم البيئة قد تكون غير واقعية.", type: "neutral", next: "s2" },
        { text: "تقليد أفضل الممارسات.", score: 0, feedback: "التقليد الأعمى فشل كثير من الشركات.", type: "negative", next: "s2" }
      ]
    },
    s2: {
      char: { avatar: "📊", name: "مدير التخطيط", role: "إدارة التخطيط" },
      speech: "التحليل أظهر <strong>3 نقاط ضعف</strong>: ضعف رقمي، غياب الابتكار، بطء القرار.",
      choices: [
        { text: "القدرات الرقمية أولاً.", score: 3, feedback: "قرار استراتيجي!", type: "positive", next: "s3" },
        { text: "ثقافة الابتكار أولاً.", score: 2, feedback: "الناس مهمة، لكن بدون أدوات رقمية الابتكار محدود.", type: "positive", next: "s3" },
        { text: "سرعة اتخاذ القرار.", score: 1, feedback: "قد تؤدي لقرارات متسرعة.", type: "neutral", next: "s3" }
=======
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
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s3: {
      char: { avatar: "👥", name: "مدير الموارد البشرية", role: "الموارد البشرية" },
<<<<<<< HEAD
      speech: "محتاجين <strong>كفاءات جديدة</strong>. تعيين خارجي؟ تدريب الحاليين؟ مزيج؟",
      choices: [
        { text: "تعيين من الخارج فوراً.", score: 1, feedback: "قد يحل مشكلة مؤقتة.", type: "neutral", next: "s4" },
        { text: "تدريب الموظفين الحاليين.", score: 2, feedback: "جيد لكن يحتاج وقتاً.", type: "positive", next: "s4" },
        { text: "مزيج: خبراء + تدريب.", score: 3, feedback: "استراتيجية متوازنة!", type: "positive", next: "s4" }
=======
      speech: "عشان ننفذ الخطة، محتاجين <strong>كفاءات جديدة</strong>. فيه 3 خيارات: تعيين من الخارج، تدريب الحاليين، أو مزيج.",
      choices: [
        { text: "تعيين خبراء من الخارج فوراً لتحقيق نتائج سريعة.", score: 1, feedback: "التعيين السريع قد يحل مشكلة مؤقتة.", type: "neutral", next: "s4" },
        { text: "التركيز على تدريب الموظفين الحاليين.", score: 2, feedback: "قرار جيد، لكن قد يستغرق وقتاً طويلاً.", type: "positive", next: "s4" },
        { text: "مزيج: خبراء خارجيون + تدريب مكثف للداخل.", score: 3, feedback: "استراتيجية متوازنة!", type: "positive", next: "s4" }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s4: {
      char: { avatar: "💰", name: "المدير المالي", role: "الإدارة المالية" },
<<<<<<< HEAD
      speech: "الخطة جاهزة لكن <strong>الميزانية محدودة</strong>. عندنا 30% فقط.",
      choices: [
        { text: "نؤجل حتى تتوفر الميزانية.", score: 0, feedback: "خسارة الفرصة.", type: "negative", next: "s5" },
        { text: "تنفيذ مرحلي + طلب تمويل إضافي.", score: 3, feedback: "قرار حكيم!", type: "positive", next: "s5" },
        { text: "تقليل النطاق.", score: 1, feedback: "قد يضعف الأثر.", type: "neutral", next: "s5" }
      ]
    },
    s5: {
      char: { avatar: "🎯", name: "مدير الأداء", role: "مكتب المشروعات" },
      speech: "كيف سنقيس <strong>النجاح</strong>؟ بدون مؤشرات واضحة لن نعرف.",
      choices: [
        { text: "المؤشرات المالية فقط.", score: 1, feedback: "لا تكفي وحدها.", type: "neutral", next: "s6" },
        { text: "Balanced Scorecard بأبعادها الأربعة.", score: 3, feedback: "ممتاز! صورة شاملة.", type: "positive", next: "s6" },
        { text: "رضا الموظفين فقط.", score: 0, feedback: "ليس المؤشر الوحيد.", type: "negative", next: "s6" }
      ]
    },
    s6: {
      char: { avatar: "🏢", name: "رئيس مجلس الإدارة", role: "شركة حكومية" },
      speech: "ما أهم توصية لضمان نجاح الخطة؟",
      choices: [
        { text: "الخطة وثيقة حيّة تُراجَع كل 6 شهور.", score: 3, feedback: "توصية عميقة!", type: "positive", next: "end" },
        { text: "الالتزام الكامل بدون تغيير.", score: 1, feedback: "قد تفشل بدون مرونة.", type: "neutral", next: "end" },
        { text: "الميزانية هي المفتاح.", score: 1, feedback: "الرؤية والتنفيذ أهم.", type: "neutral", next: "end" }
=======
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
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    }
  },
  endings: [
    { minScore: 15, icon: "🏆", title: "استراتيجي بارع", desc: "قدمت رؤية استراتيجية متكاملة." },
<<<<<<< HEAD
    { minScore: 10, icon: "👍", title: "استراتيجي جيد", desc: "قراراتك في الاتجاه الصحيح." },
    { minScore: 5, icon: "⚠️", title: "استراتيجي مبتدئ", desc: "بعض القرارات متسرعة." },
    { minScore: 0, icon: "😕", title: "يحتاج تطوير", desc: "القرارات سطحية." }
=======
    { minScore: 10, icon: "👍", title: "استراتيجي جيد", desc: "قراراتك كانت في الاتجاه الصحيح." },
    { minScore: 5, icon: "⚠️", title: "استراتيجي مبتدئ", desc: "بعض القرارات كانت متسرعة." },
    { minScore: 0, icon: "😕", title: "يحتاج تطوير", desc: "القرارات ركزت على حلول سطحية." }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
  ]
};

SCENARIOS.sustainability = {
  title: "التنمية المستدامة",
  startScene: "s1",
  scenes: {
    s1: {
      char: { avatar: "🌍", name: "وزير البيئة", role: "وزارة البيئة" },
<<<<<<< HEAD
      speech: "مصر تبنت <strong>رؤية 2030</strong> لكن التطبيق بطيء. من أين نبدأ؟",
      choices: [
        { text: "حملة توعية شاملة.", score: 1, feedback: "قد تبقى شعارات.", type: "neutral", next: "s2" },
        { text: "قياس البصمة البيئية أولاً.", score: 3, feedback: "قرار علمي!", type: "positive", next: "s2" },
        { text: "فرض غرامات على غير الملتزمين.", score: 0, feedback: "قبل التوعية يخلق مقاومة.", type: "negative", next: "s2" }
      ]
    },
    s2: {
      char:         { text: "مصنعي يحتاج 50 مليون جنيه لتحديث المعدات.", score: 3, feedback: "قرار ممتاز!", type: "positive", next: "s3" },
        { text: "الاستدامة استثمار وليست تكلفة.", score: 1, feedback: "لن يقتنع بدون دعم ملموس.", type: "neutral", next: "s3" },
        { text: "نمنحك إعفاء ضريبيا مقابل الالتزام بالمعايير البيئية.", score: 3, feedback: "قرار حكيم!", type: "positive", next: "s3" }
    s3: {
      char: { avatar: "👩‍🔬", name: "خبيرة الاستدامة", role: "مركز البحوث" },
      speech: "عندنا <strong>17 هدفاً</strong>. لا يمكن التركيز على كلها.",
      choices: [
        { text: "الأهداف الاقتصادية أولاً.", score: 2, feedback: "قد يؤخر البيئي.", type: "positive", next: "s4" },
        { text: "تحليل السياق الوطني والأولويات.", score: 3, feedback: "قرار استراتيجي!", type: "positive", next: "s4" },
        { text: "كل الأهداف بالتساوي.", score: 0, feedback: "ضعف التركيز.", type: "negative", next: "s4" }
=======
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
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s4: {
      char: { avatar: "👨‍🌾", name: "ممثل المزارعين", role: "النقابة الزراعية" },
<<<<<<< HEAD
      speech: "المزارعون يعانون من <strong>شح المياه</strong>.",
      choices: [
        { text: "فرض نظام ري حديث بالإلزام.", score: 1, feedback: "قد يفشل بدون دعم.", type: "neutral", next: "s5" },
        { text: "دعم التحول للري بالشراكة مع القطاع الخاص.", score: 3, feedback: "قرار متكامل!", type: "positive", next: "s5" },
        { text: "تغيير نمط المحاصيل.", score: 2, feedback: "قد يقابل بمقاومة.", type: "positive", next: "s5" }
=======
      speech: "المزارعون يعانون من <strong>شح المياه</strong>. كفاءة الري منخفضة.",
      choices: [
        { text: "نفرض نظام ري حديث بالإلزام.", score: 1, feedback: "الإلزام قد يفشل بدون دعم.", type: "neutral", next: "s5" },
        { text: "ندعم التحول للري الحديث بالشراكة مع القطاع الخاص.", score: 3, feedback: "قرار متكامل!", type: "positive", next: "s5" },
        { text: "نغير نمط المحاصيل.", score: 2, feedback: "قرار استراتيجي، لكن قد يقابل بمقاومة.", type: "positive", next: "s5" }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s5: {
      char: { avatar: "💼", name: "رئيس اتحاد الصناعات", role: "القطاع الخاص" },
<<<<<<< HEAD
      speech: "الشركات الصغيرة <strong>مش قادرة</strong> على التكاليف.",
      choices: [
        { text: "فترة سماح 5 سنوات.", score: 1, feedback: "قد تؤجل التغيير.", type: "neutral", next: "s6" },
        { text: "صندوق لدعم التحول الأخضر.", score: 3, feedback: "قرار ممتاز!", type: "positive", next: "s6" },
        { text: "استثناء مؤقت.", score: 1, feedback: "يجب أن يكون بخطة تحول.", type: "neutral", next: "s6" }
=======
      speech: "الشركات الصغيرة <strong>مش قادرة تتحمل تكاليف الاستدامة</strong>.",
      choices: [
        { text: "نعطيها فترة سماح 5 سنوات.", score: 1, feedback: "قد تؤجل التغيير أكثر من اللازم.", type: "neutral", next: "s6" },
        { text: "ننشئ صندوقاً لدعم التحول الأخضر.", score: 3, feedback: "قرار ممتاز!", type: "positive", next: "s6" },
        { text: "نستثنيها مؤقتاً لحماية التوظيف.", score: 1, feedback: "يجب أن يكون مرهوناً بخطة تحول.", type: "neutral", next: "s6" }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s6: {
      char: { avatar: "🌍", name: "وزير البيئة", role: "وزارة البيئة" },
<<<<<<< HEAD
      speech: "ما أهم توصية؟",
      choices: [
        { text: "الاستدامة رحلة وليست مشروعاً.", score: 3, feedback: "توصية عميقة!", type: "positive", next: "end" },
        { text: "التكنولوجيا هي المفتاح.", score: 2, feedback: "العامل البشري أهم.", type: "positive", next: "end" },
        { text: "مسؤولية الحكومات فقط.", score: 0, feedback: "شراكة بين الجميع.", type: "negative", next: "end" }
=======
      speech: "ممتاز يا مستشار. <strong>ما أهم توصية</strong> لضمان نجاح التحول؟",
      choices: [
        { text: "الاستدامة رحلة وليست مشروعاً.", score: 3, feedback: "توصية عميقة!", type: "positive", next: "end" },
        { text: "بدون التكنولوجيا لا يمكن تحقيق الاستدامة.", score: 2, feedback: "التكنولوجيا مهمة، لكن العامل البشري أهم.", type: "positive", next: "end" },
        { text: "الاستدامة مسؤولية الحكومات فقط.", score: 0, feedback: "الاستدامة شراكة بين الحكومة والقطاع والمجتمع.", type: "negative", next: "end" }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    }
  },
  endings: [
<<<<<<< HEAD
    { minScore: 15, icon: "🏆", title: "خبير استدامة", desc: "رؤية متكاملة للتنمية المستدامة." },
    { minScore: 10, icon: "🌱", title: "صديق البيئة", desc: "قراراتك متوازنة." },
    { minScore: 5, icon: "⚠️", title: "مبتدئ", desc: "ركزت على جانب واحد." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "افتقدت للرؤية الشمولية." }
=======
    { minScore: 15, icon: "🏆", title: "خبير استدامة", desc: "قدمت رؤية متكاملة للتنمية المستدامة." },
    { minScore: 10, icon: "🌱", title: "صديق البيئة", desc: "قراراتك كانت متوازنة." },
    { minScore: 5, icon: "⚠️", title: "مبتدئ", desc: "بعض القرارات ركزت على جانب واحد." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "القرارات افتقدت للرؤية الشمولية." }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
  ]
};

SCENARIOS.leadership = {
  title: "القيادة وإدارة الفرق",
  startScene: "s1",
  scenes: {
    s1: {
<<<<<<< HEAD
      char: { avatar: "👔", name: "المدير التنفيذي", role: "شركة خدمات" },
      speech: "تم تعيينك لقيادة فريق جديد من 8 أشخاص. <strong>كيف ستبدأ؟</strong>",
      choices: [
        { text: "اجتماع تعريفي لتوضيح المهمة والأدوار.", score: 3, feedback: "قرار قيادي سليم!", type: "positive", next: "s2" },
        { text: "البدء بالعمل مباشرة.", score: 1, feedback: "تداخل المهام.", type: "neutral", next: "s2" },
        { text: "ترك الفريق ينظم نفسه.", score: 0, feedback: "قد يؤدي للفوضى.", type: "negative", next: "s2" }
=======
      char: { avatar: "👔", name: "المدير التنفيذي", role: "شركة خدمات حكومية" },
      speech: "أهلاً يا مستشار. تم تعيينك مستشاراً لقيادة فريق جديد مهمته <strong>تطوير خدمات الشركة</strong>. كيف ستبدأ؟",
      choices: [
        { text: "أعقد اجتماعاً تعريفياً لتوضيح المهمة وتوزيع الأدوار.", score: 3, feedback: "قرار قيادي سليم!", type: "positive", next: "s2" },
        { text: "أبدأ بالعمل مباشرة ونحدد الأدوار لاحقاً.", score: 1, feedback: "العمل بدون وضوح الأدوار يؤدي لتداخل المهام.", type: "neutral", next: "s2" },
        { text: "أترك الفريق ينظم نفسه بنفسه.", score: 0, feedback: "الفرق تحتاج توجيهاً في البداية.", type: "negative", next: "s2" }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s2: {
      char: { avatar: "👩‍💻", name: "سارة", role: "مطورة برمجيات - انطوائية" },
<<<<<<< HEAD
      speech: "مش مرتاحة في اجتماعات الفريق.",
      choices: [
        { text: "التكيّف مع أسلوب الفريق.", score: 0, feedback: "قد تفقدك موهبة.", type: "negative", next: "s3" },
        { text: "مساحة للعمل المستقل مع مشاركتها في القرارات الحرجة.", score: 3, feedback: "قرار ذكي!", type: "positive", next: "s3" },
        { text: "قيادة اجتماع واحد.", score: 2, feedback: "قد يكون مرهقاً.", type: "positive", next: "s3" }
      ]
    },
    s3: {
      char: { avatar: "👨‍💼", name: "خالد", role: "موظف قديم" },
      speech: "شفت فرق كتير بتفشل. <strong>إيه المختلف؟</strong>",
      choices: [
        { text: "الفريق فرصة لإثبات نفسه.", score: 2, feedback: "يحتاج دليلاً.", type: "positive", next: "s4" },
        { text: "منحه دوراً قيادياً فرعياً.", score: 3, feedback: "تحويل المقاوم إلى شريك.", type: "positive", next: "s4" },
        { text: "تجاهله.", score: 0, feedback: "يخلق مشاكل مستقبلية.", type: "negative", next: "s4" }
=======
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
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s4: {
      char: { avatar: "🔥", name: "محمد", role: "عضو شاب - متهور" },
<<<<<<< HEAD
      speech: "عندي فكرة ثورية! نطبقها بكرة؟",
      choices: [
        { text: "موافقة فورية.", score: 0, feedback: "قرار متسرع.", type: "negative", next: "s5" },
        { text: "تحويل الفكرة لخطة تجريبية.", score: 3, feedback: "قرار متوازن!", type: "positive", next: "s5" },
        { text: "رفض فوري.", score: 1, feedback: "يقتل روح المبادرة.", type: "neutral", next: "s5" }
      ]
    },
    s5: {
      char: { avatar: "⚔️", name: "نورا", role: "عضو فريق - صراع" },
      speech: "أنا وزميلي في صراع شخصي.",
      choices: [
        { text: "فرض حل وسط.", score: 1, feedback: "حل مؤقت.", type: "neutral", next: "s6" },
        { text: "اجتماع فردي ثم ثلاثي.", score: 3, feedback: "قرار احترافي!", type: "positive", next: "s6" },
        { text: "فصلهم في مهام منفصلة.", score: 0, feedback: "هروب من المشكلة.", type: "negative", next: "s6" }
      ]
    },
    s6: {
      char: { avatar: "👔", name: "المدير التنفيذي", role: "شركة خدمات" },
      speech: "الفريق وصل لمستوى عالٍ. <strong>ما أهم توصية؟</strong>",
      choices: [
        { text: "توثيق الدروس وبناء منظومة قيادة.", score: 3, feedback: "قرار استراتيجي!", type: "positive", next: "end" },
        { text: "الاحتفاظ بالفريق كما هو.", score: 1, feedback: "يحتاج تطويراً.", type: "neutral", next: "end" },
=======
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
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
        { text: "تكليف كل عضو بمشروع منفصل.", score: 1, feedback: "الفرق تحتاج العمل الجماعي.", type: "neutral", next: "end" }
      ]
    }
  },
  endings: [
<<<<<<< HEAD
    { minScore: 15, icon: "🏆", title: "قائد استثنائي", desc: "نموذج راقٍ في القيادة." },
    { minScore: 10, icon: "🌟", title: "قائد جيد", desc: "قراراتك متوازنة." },
    { minScore: 5, icon: "⚠️", title: "قائد مبتدئ", desc: "بعض القرارات تقليدية." },
    { minScore: 0, icon: "😕", title: "يحتاج تطوير", desc: "ركزت على المهام بدلاً من الأشخاص." }
=======
    { minScore: 15, icon: "🏆", title: "قائد استثنائي", desc: "قدمت نموذجاً راقياً في القيادة." },
    { minScore: 10, icon: "🌟", title: "قائد جيد", desc: "قراراتك كانت متوازنة." },
    { minScore: 5, icon: "⚠️", title: "قائد مبتدئ", desc: "بعض القرارات كانت تقليدية." },
    { minScore: 0, icon: "😕", title: "يحتاج تطوير", desc: "القرارات ركزت على إدارة المهام بدلاً من قيادة الأشخاص." }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
  ]
};

SCENARIOS.decision = {
  title: "اتخاذ القرار",
  startScene: "s1",
  scenes: {
    s1: {
      char: { avatar: "🚨", name: "مدير الأزمات", role: "غرفة العمليات" },
<<<<<<< HEAD
      speech: "<strong>أزمة عاجلة</strong>: انقطاع كهرباء في 3 محافظات. 6 ساعات فقط.",
      choices: [
        { text: "انتظار تقرير كامل.", score: 0, feedback: "الوقت حاسم.", type: "negative", next: "s2" },
        { text: "احتواء فوري + جمع معلومات بالتوازي.", score: 3, feedback: "قرار حكيم!", type: "positive", next: "s2" },
        { text: "إعلان طوارئ شاملة.", score: 1, feedback: "يخلق هلعاً.", type: "neutral", next: "s2" }
      ]
    },
    s2: {
      char: { avatar: "📊", name: "رئيس التحليل", role: "مركز البيانات" },
      speech: "3 احتمالات: عطل تقني، نقص وقود، هجوم إلكتروني.",
      choices: [
        { text: "تحليل أعمق.", score: 1, feedback: "الوقت ضيق.", type: "neutral", next: "s3" },
        { text: "التعامل مع الثلاثة بالتوازي.", score: 3, feedback: "قرار ذكي!", type: "positive", next: "s3" },
        { text: "اختيار الأكثر ترجيحاً.", score: 1, feedback: "قد يكون متسرعاً.", type: "neutral", next: "s3" }
=======
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
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s3: {
      char: { avatar: "📢", name: "مدير الإعلام", role: "المتحدث الرسمي" },
<<<<<<< HEAD
      speech: "الإعلام يتصل. <strong>الرسالة الرسمية؟</strong>",
      choices: [
        { text: "كل شيء تحت السيطرة.", score: 0, feedback: "تضليل الجمهور.", type: "negative", next: "s4" },
        { text: "الشفافية: نشرح ما نعرفه وما لا نعرفه.", score: 3, feedback: "قرار شجاع!", type: "positive", next: "s4" },
        { text: "تأجيل المؤتمر لحل الأزمة.", score: 1, feedback: "الصمت يخلق فراغاً.", type: "neutral", next: "s4" }
=======
      speech: "الإعلام يتصل بنا. <strong>إيه الرسالة الرسمية؟</strong>",
      choices: [
        { text: "نعلن أن كل شيء تحت السيطرة.", score: 0, feedback: "تضليل الجمهور يخلق أزمة ثقة.", type: "negative", next: "s4" },
        { text: "نعلن بصراحة: الوضع خطير، ونشرح ما نعرفه.", score: 3, feedback: "قرار شجاع!", type: "positive", next: "s4" },
        { text: "نعقد مؤتمراً بعد حل الأزمة فقط.", score: 1, feedback: "الصمت يخلق فراغاً يملؤه الشك.", type: "neutral", next: "s4" }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s4: {
      char: { avatar: "⚡", name: "رئيس شركة الكهرباء", role: "الشركة القابضة" },
<<<<<<< HEAD
      speech: "خياران: <strong>قطع عن الصناعة</strong> أو <strong>شراء بثلاثة أضعاف</strong>.",
      choices: [
        { text: "قطع عن الصناعة.", score: 2, feedback: "قرار اجتماعي بتكلفة اقتصادية.", type: "positive", next: "s5" },
        { text: "شراء بغض النظر عن التكلفة.", score: 3, feedback: "الأرواح لا تُقدّر.", type: "positive", next: "s5" },
        { text: "خليط.", score: 3, feedback: "متوازن!", type: "positive", next: "s5" }
=======
      speech: "خياران: <strong>قطع الكهرباء عن الصناعة</strong>، أو <strong>شراء من الشبكة المجاورة</strong> بتكلفة 3 أضعاف.",
      choices: [
        { text: "قطع الكهرباء عن الصناعة - الأولوية للناس.", score: 2, feedback: "قرار اجتماعي، لكن بتكلفة اقتصادية.", type: "positive", next: "s5" },
        { text: "شراء بغض النظر عن التكلفة.", score: 3, feedback: "الأرواح لا تُقدّر بثمن.", type: "positive", next: "s5" },
        { text: "خليط: قطع جزئي + شراء جزء.", score: 3, feedback: "قرار متوازن!", type: "positive", next: "s5" }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s5: {
      char: { avatar: "👨‍⚖️", name: "المستشار القانوني", role: "الإدارة القانونية" },
<<<<<<< HEAD
      speech: "قرار القطع قد يعرضنا <strong>لقضايا تعويضات</strong>.",
      choices: [
        { text: "تحمل المخاطر.", score: 1, feedback: "متهور.", type: "neutral", next: "s6" },
        { text: "لجنة قانونية فورية.", score: 3, feedback: "احترافي!", type: "positive", next: "s6" },
        { text: "استشارة جهة أعلى.", score: 1, feedback: "الأزمة تحتاج سرعة.", type: "neutral", next: "s6" }
=======
      speech: "قرار قطع الكهرباء قد يعرضنا <strong>قضايا تعويضات</strong>.",
      choices: [
        { text: "نتحمل المخاطر - الأولوية للنتائج.", score: 1, feedback: "قرار متهور.", type: "neutral", next: "s6" },
        { text: "نشكل لجنة قانونية فورية.", score: 3, feedback: "قرار احترافي!", type: "positive", next: "s6" },
        { text: "نستشير جهة أعلى.", score: 1, feedback: "الأزمة تحتاج قراراً سريعاً.", type: "neutral", next: "s6" }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
      ]
    },
    s6: {
      char: { avatar: "🚨", name: "مدير الأزمات", role: "غرفة العمليات" },
<<<<<<< HEAD
      speech: "الأزمة تحت السيطرة. <strong>ما أهم درس؟</strong>",
      choices: [
        { text: "الجاهزية أهم من سرعة الاستجابة.", score: 3, feedback: "درس عميق!", type: "positive", next: "end" },
        { text: "الشجاعة أهم من المعلومات.", score: 2, feedback: "صحيح جزئياً.", type: "positive", next: "end" },
=======
      speech: "الأزمة تحت السيطرة. <strong>ما أهم درس</strong> من هذه التجربة؟",
      choices: [
        { text: "الجاهزية والاستباقية أهم من سرعة الاستجابة.", score: 3, feedback: "درس عميق!", type: "positive", next: "end" },
        { text: "الشجاعة في القرار أهم من المعلومات الكاملة.", score: 2, feedback: "صحيح جزئياً.", type: "positive", next: "end" },
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
        { text: "الأزمات لا يمكن التخطيط لها.", score: 0, feedback: "منطق خاطئ.", type: "negative", next: "end" }
      ]
    }
  },
  endings: [
<<<<<<< HEAD
    { minScore: 15, icon: "🏆", title: "قائد أزمات محترف", desc: "مهارات استثنائية تحت ضغط." },
    { minScore: 10, icon: "🎯", title: "متخذ قرار جيد", desc: "قراراتك في الاتجاه الصحيح." },
    { minScore: 5, icon: "⚠️", title: "تحت التطوير", desc: "بعض التردد أو التسرع." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "افتقدت للتوازن." }
=======
    { minScore: 15, icon: "🏆", title: "قائد أزمات محترف", desc: "أثبتت مهارات استثنائية في اتخاذ القرار تحت ضغط." },
    { minScore: 10, icon: "🎯", title: "متخذ قرار جيد", desc: "قراراتك كانت في الاتجاه الصحيح." },
    { minScore: 5, icon: "⚠️", title: "تحت التطوير", desc: "بعض القرارات اتسمت بالتردد." },
    { minScore: 0, icon: "😕", title: "يحتاج مراجعة", desc: "القرارات افتقدت للتوازن." }
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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
<<<<<<< HEAD
=======

>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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
<<<<<<< HEAD
=======

>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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
<<<<<<< HEAD
  html += "<div class='final-score-label' style='margin-top:6px;'>" + percent + "%</div>";
  html += "</div>";
  html += "<div>";
  html += "<button class='action-btn' id='restartScenarioBtn'>🔄 إعادة</button>";
  html += "<button class='action-btn share' id='shareResultBtn'>📤 شارك النتيجة</button>";
  html += "<button class='action-btn secondary' id='backToDashBtn'>🏠 الرئيسية</button>";
=======
  html += "<div class='final-score-label' style='margin-top:8px;'>" + percent + "%</div>";
  html += "</div>";
  html += "<div>";
  html += "<button class='restart-btn' id='restartScenarioBtn'>🔄 إعادة</button>";
  html += "<button class='back-dashboard-btn' id='backToDashBtn'>🏠 العودة للرئيسية</button>";
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
  html += "</div>";
  html += "</div>";

  document.getElementById("scenarioContent").innerHTML = html;
  document.getElementById("scenarioProgressFill").style.width = "100%";

  var moduleId = findModuleIdByTitle(currentModule.title);
<<<<<<< HEAD
  var oldCount = state.completed.length;
  if (moduleId) {
    if (state.completed.indexOf(moduleId) < 0) state.completed.push(moduleId);
    state.scores[moduleId] = percent;
    var newCount = state.completed.length;
    saveState();
    renderModules();
    checkNewBadge(oldCount, newCount);
  }

  document.getElementById("restartScenarioBtn").addEventListener("click", function() { startModule(moduleId); });
  document.getElementById("shareResultBtn").addEventListener("click", function() { shareResult(currentModule.title, currentScore, maxScore, percent); });
  document.getElementById("backToDashBtn").addEventListener("click", closeScenario);
}

function shareResult(moduleTitle, score, max, percent) {
  var text = "🎓 أكملت وحدة " + moduleTitle + " في KHODAIR ACADEMY\n";
  text += "⭐ نتيجتي: " + score + " / " + max + " (" + percent + "%)\n";
  text += "🔗 جرب التطبيق: https://khodair-academy-vercel.vercel.app/";
  var url = "https://wa.me/?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}

=======
  if (moduleId) {
    if (state.completed.indexOf(moduleId) < 0) state.completed.push(moduleId);
    state.scores[moduleId] = percent;
    saveState();
    renderModules();
  }

  document.getElementById("restartScenarioBtn").addEventListener("click", function() { startModule(moduleId); });
  document.getElementById("backToDashBtn").addEventListener("click", closeScenario);
}

>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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

<<<<<<< HEAD
// ========== CERTIFICATE ==========
function showCertificate() {
  if (state.completed.length < 5) {
    alert("أكمل الوحدات الخمس أولاً للحصول على الشهادة");
    return;
  }
  var name = prompt("أدخل اسمك للحصول على الشهادة:", "");
  if (!name || name.trim() === "") return;
  name = name.trim();

  var totalScore = 0;
  var count = 0;
  for (var id in state.scores) {
    totalScore += state.scores[id];
    count++;
  }
  var avg = count > 0 ? Math.round(totalScore / count) : 0;

  var date = new Date();
  var dateStr = date.toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" });

  var html = "";
  html += "<div class='certificate-box'>";
  html += "<h1>🏅 شهادة إتمام</h1>";
  html += "<div class='cert-line'></div>";
  html += "<p class='cert-text'>تشهد أكاديمية الحوكمة والقيادة بأن</p>";
  html += "<div class='cert-name'>" + name + "</div>";
  html += "<p class='cert-text'>قد أتم بنجاح جميع الوحدات الخمس للبرنامج التدريبي:</p>";
  html += "<p class='cert-text' style='color:#8b6f1f; font-weight:bold;'>🏛️ الحوكمة • 📊 التخطيط • 🌍 الاستدامة • 🤝 القيادة • 🎯 القرار</p>";
  html += "<p class='cert-score'>بمتوسط أداء " + avg + "%</p>";
  html += "<div class='cert-line'></div>";
  html += "<p class='cert-date'>" + dateStr + "</p>";
  html += "<p class='cert-date' style='margin-top:15px; color:#8b6f1f;'>أحمد محروس خضير — مطوّر الأكاديمية</p>";
  html += "</div>";
  html += "<div style='text-align:center; margin-top:15px;'>";
  html += "<button class='action-btn' onclick='window.print()'>🖨️ طباعة الشهادة</button>";
  html += "</div>";

  document.getElementById("certificateContent").innerHTML = html;
  document.getElementById("certificateModal").classList.add("show");
}

=======
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
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
<<<<<<< HEAD
function closeCert() { document.getElementById("certificateModal").classList.remove("show"); }
=======
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628

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
<<<<<<< HEAD
  var closeCertBtn = document.getElementById("closeCertBtn");
  var scenarioCloseBtn = document.getElementById("scenarioCloseBtn");
  var voiceGlobal = document.getElementById("voiceGlobal");
  var certificateBtn = document.getElementById("certificateBtn");
=======
  var scenarioCloseBtn = document.getElementById("scenarioCloseBtn");
  var voiceGlobal = document.getElementById("voiceGlobal");
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628

  if (pwInput) pwInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") { e.preventDefault(); checkPassword(); }
  });
  if (loginBtn) loginBtn.addEventListener("click", checkPassword);
  if (aboutBtn) aboutBtn.addEventListener("click", openAbout);
  if (resetBtn) resetBtn.addEventListener("click", resetAll);
  if (closeAboutBtn) closeAboutBtn.addEventListener("click", closeAbout);
<<<<<<< HEAD
  if (closeCertBtn) closeCertBtn.addEventListener("click", closeCert);
  if (scenarioCloseBtn) scenarioCloseBtn.addEventListener("click", closeScenario);
  if (voiceGlobal) voiceGlobal.addEventListener("click", toggleVoice);
  if (certificateBtn) certificateBtn.addEventListener("click", showCertificate);
=======
  if (scenarioCloseBtn) scenarioCloseBtn.addEventListener("click", closeScenario);
  if (voiceGlobal) voiceGlobal.addEventListener("click", toggleVoice);
>>>>>>> 7f0201d5739912a8c2c400788e67da808df01628
});
</script>

</body>
</html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log("KHODAIR ACADEMY running on port " + PORT);
});