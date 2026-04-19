/* ========== TOKENS ========== */
:root{
  --font-sans:"Space Grotesk",system-ui,sans-serif;
  --font-display:"Bricolage Grotesque",system-ui,sans-serif;
  --font-mono:"JetBrains Mono",ui-monospace,monospace;

  /* PALETTE "candy" (default) */
  --p1:#ff7a59;   /* coral */
  --p2:#ffb84d;   /* amber */
  --p3:#8b5cf6;   /* violet */
  --p4:#22d3ee;   /* cyan */
  --p5:#f472b6;   /* pink */
  --ok:#10b981;
  --bad:#f43f5e;
  --warn:#f59e0b;

  --ink:#1a1530;
  --ink-2:#4a4568;
  --ink-3:#8a85a8;
  --paper:#fbf7f2;
  --paper-2:#f3ece1;
  --card:#ffffff;
  --line:rgba(26,21,48,0.08);
  --line-2:rgba(26,21,48,0.14);
}
/* Palette: "aurora" */
.pal-aurora{
  --p1:#7c3aed; --p2:#06b6d4; --p3:#ec4899; --p4:#14b8a6; --p5:#f97316;
  --ink:#0a0f1f; --ink-2:#2d3754; --ink-3:#6b7691;
  --paper:#f4f2ff; --paper-2:#ebe6ff; --card:#ffffff;
  --line:rgba(10,15,31,0.08); --line-2:rgba(10,15,31,0.14);
}
/* Palette: "matcha" */
.pal-matcha{
  --p1:#84cc16; --p2:#f59e0b; --p3:#059669; --p4:#f43f5e; --p5:#0ea5e9;
  --ink:#14261a; --ink-2:#3e5244; --ink-3:#7a8c81;
  --paper:#f2f5ea; --paper-2:#e6ecd7; --card:#ffffff;
  --line:rgba(20,38,26,0.08); --line-2:rgba(20,38,26,0.14);
}

/* Dark modifier */
.dark{
  --ink:#f4f0ff; --ink-2:#c4bcdf; --ink-3:#837ba0;
  --paper:#0c0a18; --paper-2:#141127; --card:#1a1634;
  --line:rgba(255,255,255,0.08); --line-2:rgba(255,255,255,0.14);
}
.dark.pal-aurora{ --paper:#050813; --paper-2:#0d1228; --card:#141a33; }
.dark.pal-matcha{ --paper:#0a1410; --paper-2:#11241a; --card:#17321f; }

*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--paper);color:var(--ink);font-family:var(--font-sans);-webkit-font-smoothing:antialiased;overscroll-behavior:none}
body{min-height:100vh;min-height:100dvh;position:relative;overflow-x:hidden;transition:background .4s}
button{font:inherit;border:none;background:none;color:inherit;cursor:pointer}
h1,h2,h3,h4{font-family:var(--font-display);font-weight:800;letter-spacing:-0.02em;margin:0}

/* ===================================================================
   AURORA BG (shared, reacts to palette)
   =================================================================== */
.aurora{
  position:fixed;inset:-20%;z-index:0;pointer-events:none;
  filter:blur(80px) saturate(1.2);opacity:.65;
  transition:opacity .6s;
}
.dark .aurora{opacity:.55}
.aurora::before,.aurora::after{
  content:"";position:absolute;border-radius:50%;
  animation:float 18s ease-in-out infinite;
}
.aurora::before{
  width:55%;height:55%;left:-5%;top:10%;
  background:radial-gradient(circle,var(--p1),transparent 60%);
}
.aurora::after{
  width:50%;height:50%;right:-5%;top:40%;
  background:radial-gradient(circle,var(--p3),transparent 60%);
  animation-delay:-9s;
}
.aurora i{
  position:absolute;width:45%;height:45%;left:30%;top:60%;
  border-radius:50%;
  background:radial-gradient(circle,var(--p4),transparent 60%);
  animation:float 22s ease-in-out infinite;animation-delay:-4s;
}
@keyframes float{
  0%,100%{transform:translate(0,0) scale(1)}
  33%{transform:translate(8%,-6%) scale(1.08)}
  66%{transform:translate(-6%,8%) scale(.95)}
}

/* Variant: bento hides the aurora and uses flat paper */
.variant-bento .aurora{opacity:.18}
.dark.variant-bento .aurora{opacity:.25}

/* ===================================================================
   TOPBAR
   =================================================================== */
.topbar{
  position:sticky;top:0;z-index:50;
  padding:14px 20px;
  display:flex;align-items:center;justify-content:space-between;gap:12px;
  background:color-mix(in oklab,var(--paper) 75%,transparent);
  backdrop-filter:blur(18px) saturate(1.4);
  -webkit-backdrop-filter:blur(18px) saturate(1.4);
  border-bottom:1px solid var(--line);
}
.brand{display:flex;align-items:center;gap:12px;min-width:0;cursor:pointer}
.brand-poo{
  font-size:30px;display:inline-block;
  filter:drop-shadow(0 4px 8px rgba(0,0,0,.18));
  animation:wobble 3s ease-in-out infinite;
  transform-origin:50% 70%;
}
@keyframes wobble{
  0%,100%{transform:rotate(-4deg) scale(1)}
  50%{transform:rotate(5deg) scale(1.05)}
}
.brand-txt{min-width:0}
.brand-txt small{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:var(--ink-3);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:46vw}
.brand-txt h1{
  font-size:clamp(18px,2.5vw,24px);line-height:1;
  background:linear-gradient(95deg,var(--p1) 0%,var(--p3) 55%,var(--p4) 100%);
  -webkit-background-clip:text;background-clip:text;color:transparent;
}
.tb-actions{display:flex;gap:6px;align-items:center}
.icon-btn{
  width:40px;height:40px;border-radius:14px;
  display:inline-flex;align-items:center;justify-content:center;
  background:var(--card);border:1px solid var(--line);
  box-shadow:0 2px 6px rgba(0,0,0,.04);
  transition:transform .18s ease,background .2s;
  font-size:18px;
}
.icon-btn:hover{transform:translateY(-2px)}
.icon-btn:active{transform:translateY(0)}

/* ===================================================================
   APP SHELL
   =================================================================== */
.app{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:20px 20px 120px}

/* ===================================================================
   CARDS — 3 variants share logic, only the card style changes
   =================================================================== */
.card{
  border-radius:26px;padding:22px;position:relative;
  background:var(--card);border:1px solid var(--line);
  box-shadow:0 4px 20px rgba(0,0,0,.04);
  transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s,border-color .3s;
}

/* ---- Glass variant ---- */
.variant-glass .card{ background:var(--card); }
.dark.variant-glass .card{ background:var(--card); }

/* ---- Clay variant ---- */
.variant-clay .card{
  background:var(--card);border:none;border-radius:28px;
  box-shadow:
    -8px -8px 20px color-mix(in oklab,var(--paper) 80%,white),
    8px 8px 24px rgba(0,0,0,.08),
    inset 0 1px 0 rgba(255,255,255,.6);
}
.dark.variant-clay .card{
  box-shadow:
    -6px -6px 16px rgba(255,255,255,.02),
    10px 10px 28px rgba(0,0,0,.55),
    inset 0 1px 0 rgba(255,255,255,.05);
}

/* ---- Bento variant ---- */
.variant-bento .card{
  background:var(--card);
  border:1.5px solid var(--ink);
  border-radius:20px;
  box-shadow:6px 6px 0 var(--ink);
  transition:transform .2s,box-shadow .2s;
}
.variant-bento .card:hover{
  transform:translate(-2px,-2px);
  box-shadow:8px 8px 0 var(--ink);
}
.dark.variant-bento .card{
  border-color:var(--ink);
  box-shadow:6px 6px 0 color-mix(in oklab,var(--p3) 70%,transparent);
}

/* ===================================================================
   HOME / SUBJECT GRID
   =================================================================== */
.hero{
  padding:28px 22px 22px;border-radius:30px;margin-bottom:22px;position:relative;overflow:hidden;
}
.hero h2{font-size:clamp(26px,4vw,44px);line-height:1.02;margin-bottom:10px;max-width:20ch}
.hero h2 .accent{
  background:linear-gradient(95deg,var(--p1),var(--p3));
  -webkit-background-clip:text;background-clip:text;color:transparent;
}
.hero-sub{color:var(--ink-2);max-width:52ch;font-size:15px;margin-bottom:18px}
.hero-stats{display:flex;gap:10px;flex-wrap:wrap}
.hero-chip{
  display:inline-flex;align-items:center;gap:8px;
  padding:8px 14px;border-radius:999px;
  background:color-mix(in oklab,var(--p1) 14%,var(--card));
  border:1px solid color-mix(in oklab,var(--p1) 25%,transparent);
  font-weight:600;font-size:13px;
}
.hero-chip b{color:var(--p1)}
.exam-countdown{
  margin-bottom:18px;padding:16px 18px;border-radius:24px;
  background:linear-gradient(135deg,
    color-mix(in oklab,var(--p3) 12%,var(--card)),
    color-mix(in oklab,var(--p1) 10%,var(--card)));
  border:1px solid color-mix(in oklab,var(--p3) 22%,transparent);
  box-shadow:0 10px 28px rgba(0,0,0,.06);
}
.exam-countdown.is-live{
  background:linear-gradient(135deg,
    color-mix(in oklab,var(--ok) 16%,var(--card)),
    color-mix(in oklab,var(--p4) 10%,var(--card)));
  border-color:color-mix(in oklab,var(--ok) 28%,transparent);
}
.exam-countdown-top{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:14px}
.exam-countdown-label{
  font-family:var(--font-mono);font-size:11px;font-weight:700;
  letter-spacing:.12em;text-transform:uppercase;color:var(--p3);margin-bottom:6px;
}
.exam-countdown-date{font-size:14px;font-weight:700;color:var(--ink)}
.exam-countdown-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.exam-countdown-box{
  padding:14px 10px;border-radius:18px;text-align:center;
  background:color-mix(in oklab,var(--card) 82%,transparent);
  border:1px solid var(--line);
}
.exam-countdown-num{
  font-family:var(--font-display);font-weight:800;
  font-size:clamp(28px,5vw,42px);line-height:1;letter-spacing:-.03em;color:var(--ink);
}
.exam-countdown-unit{
  margin-top:6px;font-family:var(--font-mono);font-size:11px;font-weight:700;
  letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3);
}
.exam-countdown-status{margin-top:12px;font-size:13px;color:var(--ink-2);font-weight:600}

.section-head{display:flex;align-items:end;justify-content:space-between;margin:24px 4px 14px;gap:12px}
.section-head h3{font-size:20px}
.section-head small{color:var(--ink-3);font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:.1em}

.subject-grid{
  display:grid;gap:14px;
  grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
}

.subject{
  position:relative;
  text-align:left;padding:18px;border-radius:24px;
  transition:transform .25s cubic-bezier(.2,.9,.3,1);
  cursor:pointer;overflow:hidden;
  display:flex;flex-direction:column;gap:12px;
  min-height:190px;
}
.subject:hover{transform:translateY(-5px) rotate(-.3deg)}
.subject:active{transform:translateY(-2px)}

/* Colored stripe + blob */
.subject::before{
  content:"";position:absolute;top:0;left:0;right:0;height:6px;
  background:var(--subject);opacity:.9;
}
.subject::after{
  content:"";position:absolute;right:-30px;bottom:-30px;
  width:140px;height:140px;border-radius:50%;
  background:radial-gradient(circle,var(--subject),transparent 70%);
  opacity:.22;
}
.variant-bento .subject::before{height:0}
.variant-bento .subject{border-top:6px solid var(--subject)}

.subj-row1{display:flex;justify-content:space-between;align-items:start;gap:10px;position:relative;z-index:1}
.subj-icon{
  width:54px;height:54px;border-radius:18px;
  display:inline-flex;align-items:center;justify-content:center;
  font-size:28px;
  background:color-mix(in oklab,var(--subject) 18%,var(--card));
  border:1px solid color-mix(in oklab,var(--subject) 30%,transparent);
  transition:transform .35s;
}
.subject:hover .subj-icon{transform:rotate(-8deg) scale(1.08)}
.subj-emoji-float{
  font-size:40px;opacity:.14;line-height:1;
  filter:grayscale(.2);
}
.subj-tag{
  display:inline-block;font-family:var(--font-mono);font-size:10px;
  letter-spacing:.1em;text-transform:uppercase;font-weight:700;
  padding:4px 8px;border-radius:999px;
  background:color-mix(in oklab,var(--subject) 18%,transparent);
  color:var(--subject);
  margin-bottom:4px;
}
.subj-name{font-weight:700;font-size:15px;line-height:1.25;color:var(--ink);margin:0;font-family:var(--font-display)}
.subj-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:auto;position:relative;z-index:1}
.subj-progress{flex:1;height:6px;background:color-mix(in oklab,var(--ink) 10%,transparent);border-radius:999px;overflow:hidden}
.subj-progress span{display:block;height:100%;background:var(--subject);border-radius:999px;transition:width .6s cubic-bezier(.2,.9,.3,1)}
.subj-pct{font-family:var(--font-mono);font-size:11px;font-weight:700;color:var(--ink-2);min-width:32px;text-align:right}
.subj-locked{position:absolute;inset:0;background:color-mix(in oklab,var(--paper) 65%,transparent);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;font-size:28px;border-radius:inherit;z-index:2}

/* ===================================================================
   QUIZ SCREEN
   =================================================================== */
.quiz-top{
  display:flex;align-items:center;justify-content:space-between;
  padding:10px 4px 18px;gap:10px;flex-wrap:wrap;
}
.quiz-crumb{
  display:inline-flex;align-items:center;gap:8px;font-family:var(--font-mono);
  font-size:12px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.1em;
}
.quiz-crumb b{color:var(--subject,var(--p1))}
.quiz-ring-wrap{display:flex;align-items:center;gap:14px}
.quiz-combo{
  display:inline-flex;align-items:center;gap:6px;font-weight:700;font-size:13px;
  padding:6px 12px;border-radius:999px;background:color-mix(in oklab,var(--p2) 18%,var(--card));
  border:1px solid color-mix(in oklab,var(--p2) 30%,transparent);color:var(--p2);
  opacity:0;transform:scale(.85);transition:all .3s cubic-bezier(.3,1.5,.5,1);
}
.quiz-combo.show{opacity:1;transform:scale(1)}

.ring{--val:0;width:44px;height:44px;position:relative}
.ring svg{width:100%;height:100%;transform:rotate(-90deg)}
.ring circle{fill:none;stroke-width:5}
.ring .track{stroke:color-mix(in oklab,var(--ink) 10%,transparent)}
.ring .bar{stroke:var(--subject);stroke-linecap:round;stroke-dasharray:113;stroke-dashoffset:calc(113 - 113 * var(--val));transition:stroke-dashoffset .5s}
.ring span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:11px;font-weight:700}

/* ---- Card stack & flip ---- */
.qstage{
  position:relative;perspective:1400px;
  min-height:360px;
  margin-bottom:20px;
}
.qcard{
  width:100%;border-radius:26px;
  transform-style:preserve-3d;
  transition:transform .7s cubic-bezier(.2,.8,.2,1),opacity .4s;
  position:relative;
}
.qcard.flipped{transform:rotateY(180deg)}
.qface{
  position:relative;
  backface-visibility:hidden;-webkit-backface-visibility:hidden;
  padding:26px;
  border-radius:26px;
}
.qfront{}
.qback{
  position:absolute;top:0;left:0;right:0;
  transform:rotateY(180deg);
}

/* Stacked ghost card behind */
.qghost{
  position:absolute;inset:14px -14px -14px 14px;
  border-radius:26px;
  background:color-mix(in oklab,var(--subject) 10%,var(--card));
  border:1px solid var(--line);
  z-index:-1;opacity:.55;
  transform:scale(.96) translateY(10px);
  pointer-events:none;
}

.q-section{font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:var(--ink-3);font-weight:700;margin-bottom:10px}
.q-text{font-family:var(--font-display);font-size:clamp(20px,2.5vw,26px);font-weight:700;line-height:1.25;margin-bottom:22px;color:var(--ink)}

.q-opts{display:flex;flex-direction:column;gap:10px}
.q-opt{
  display:flex;align-items:center;gap:14px;
  padding:14px 16px;border-radius:18px;
  background:var(--card);
  border:1.5px solid var(--line);
  text-align:left;font-size:15px;font-weight:500;color:var(--ink);
  transition:all .18s cubic-bezier(.2,.9,.3,1);
  position:relative;overflow:hidden;
}
.q-opt:hover{border-color:var(--subject);transform:translateX(3px)}
.q-opt .dot{
  width:28px;height:28px;border-radius:10px;
  background:color-mix(in oklab,var(--ink) 8%,transparent);
  display:inline-flex;align-items:center;justify-content:center;
  font-family:var(--font-mono);font-weight:700;font-size:12px;
  flex-shrink:0;color:var(--ink-2);
  transition:all .18s;
}
.q-opt:hover .dot{background:var(--subject);color:white}
.q-opt.correct{border-color:var(--ok);background:color-mix(in oklab,var(--ok) 10%,var(--card));color:var(--ok)}
.q-opt.correct .dot{background:var(--ok);color:white}
.q-opt.wrong{border-color:var(--bad);background:color-mix(in oklab,var(--bad) 10%,var(--card));color:var(--bad)}
.q-opt.wrong .dot{background:var(--bad);color:white}
.q-opt.disabled{pointer-events:none;opacity:.55}
.q-opt.wrong{animation:shake .5s}
@keyframes shake{
  0%,100%{transform:translateX(0)}
  20%{transform:translateX(-6px)}
  40%{transform:translateX(6px)}
  60%{transform:translateX(-4px)}
  80%{transform:translateX(4px)}
}

/* Back of card (feedback) */
.qback .gif-slot{
  width:100%;max-width:240px;margin:0 auto 16px;
  aspect-ratio:1;border-radius:22px;
  background:
    repeating-linear-gradient(45deg,color-mix(in oklab,var(--subject) 22%,transparent) 0 10px,transparent 10px 20px),
    color-mix(in oklab,var(--subject) 14%,var(--card));
  display:flex;align-items:center;justify-content:center;
  font-family:var(--font-mono);font-size:10px;color:var(--ink-3);
  letter-spacing:.1em;text-transform:uppercase;text-align:center;padding:14px;
  position:relative;overflow:hidden;
}
.qback .gif-slot::after{
  content:"";position:absolute;inset:0;
  background:radial-gradient(circle at 50% 60%,color-mix(in oklab,var(--subject) 40%,transparent),transparent 60%);
  opacity:.6;pointer-events:none;
}
.qback .emoji-huge{font-size:96px;line-height:1;filter:drop-shadow(0 8px 14px rgba(0,0,0,.15));animation:bounce .8s cubic-bezier(.3,1.5,.5,1);position:relative;z-index:1}
@keyframes bounce{
  0%{transform:scale(0) rotate(-20deg)}
  60%{transform:scale(1.15) rotate(5deg)}
  100%{transform:scale(1) rotate(0)}
}
.qback h3{font-size:22px;text-align:center;margin:10px 0 6px}
.qback .explain{color:var(--ink-2);text-align:center;font-size:14px;margin-bottom:18px;max-width:48ch;margin-left:auto;margin-right:auto;line-height:1.5}
.qback-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}

/* ===================================================================
   PROGRESS BAR (thick, playful)
   =================================================================== */
.qprog{
  height:14px;border-radius:999px;overflow:hidden;
  background:color-mix(in oklab,var(--ink) 8%,transparent);
  border:1px solid var(--line);
  margin:0 0 18px;position:relative;
}
.qprog span{
  display:block;height:100%;border-radius:999px;
  background:linear-gradient(95deg,var(--p1),var(--p3),var(--p4));
  background-size:200% 100%;
  animation:shimmer 3s linear infinite;
  transition:width .5s cubic-bezier(.3,1,.3,1);
}
@keyframes shimmer{0%{background-position:0 0}100%{background-position:200% 0}}
.qprog-dots{position:absolute;inset:0;display:flex;align-items:center;padding:0 6px;gap:4px;pointer-events:none}

/* ===================================================================
   QUIZ CONTROLS
   =================================================================== */
.controls-row{display:flex;gap:10px;justify-content:space-between;align-items:center;flex-wrap:wrap;margin-top:10px}
.btn{
  display:inline-flex;align-items:center;gap:8px;
  padding:11px 18px;border-radius:14px;font-weight:700;font-size:14px;
  background:var(--card);color:var(--ink);
  border:1px solid var(--line-2);
  transition:transform .15s,box-shadow .2s,background .2s;
  font-family:var(--font-sans);
}
.btn:hover{transform:translateY(-2px);box-shadow:0 6px 16px rgba(0,0,0,.08)}
.btn:active{transform:translateY(0)}
.btn.primary{
  background:linear-gradient(135deg,var(--p1),var(--p3));color:#fff;border:none;
  box-shadow:0 4px 14px color-mix(in oklab,var(--p1) 40%,transparent);
}
.btn.primary:hover{box-shadow:0 8px 22px color-mix(in oklab,var(--p1) 50%,transparent)}
.btn.ghost{background:transparent}
.btn.danger{color:var(--bad);border-color:color-mix(in oklab,var(--bad) 30%,transparent)}
.btn:disabled{opacity:.45;pointer-events:none}

.variant-bento .btn{border-radius:10px;border:1.5px solid var(--ink);box-shadow:3px 3px 0 var(--ink)}
.variant-bento .btn:hover{transform:translate(-1px,-1px);box-shadow:4px 4px 0 var(--ink)}
.variant-bento .btn.primary{border:1.5px solid var(--ink);color:#fff}

/* ===================================================================
   RESULT SCREEN
   =================================================================== */
.result-hero{
  text-align:center;padding:38px 24px;position:relative;overflow:hidden;
  margin-bottom:18px;
}
.result-hero h2{font-size:clamp(30px,5vw,48px);margin:14px 0 8px}
.result-hero .big-score{
  font-size:clamp(72px,14vw,140px);font-family:var(--font-display);font-weight:800;line-height:1;
  background:linear-gradient(135deg,var(--p1),var(--p3),var(--p4));
  -webkit-background-clip:text;background-clip:text;color:transparent;
  letter-spacing:-0.04em;
}
.result-hero .over{font-family:var(--font-mono);color:var(--ink-3);font-size:14px;margin-top:4px}
.result-hero .gif-slot{
  width:180px;aspect-ratio:1;margin:18px auto 10px;
}
.result-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:18px}
.stat-card{padding:18px;text-align:center}
.stat-card .v{font-family:var(--font-display);font-weight:800;font-size:32px;line-height:1}
.stat-card .l{font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink-3);margin-top:6px}
.stat-card.ok .v{color:var(--ok)}
.stat-card.bad .v{color:var(--bad)}

/* confetti */
.confetti{position:fixed;pointer-events:none;inset:0;z-index:80;overflow:hidden}
.confetti i{
  position:absolute;top:-10px;width:10px;height:16px;border-radius:2px;
  animation:fall linear forwards;
}
@keyframes fall{
  to{transform:translateY(110vh) rotate(720deg)}
}

/* ===================================================================
   PROGRESS / STATS SCREEN
   =================================================================== */
.prog-grid{
  display:grid;gap:14px;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  margin-bottom:18px;
}
.bignum{
  font-family:var(--font-display);font-size:48px;font-weight:800;line-height:1;letter-spacing:-.03em;
}
.subtle{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px}

.heatmap{display:grid;grid-template-columns:repeat(14,1fr);gap:4px;margin-top:10px}
.heatmap i{aspect-ratio:1;border-radius:4px;background:color-mix(in oklab,var(--ink) 6%,transparent)}
.heatmap i.l1{background:color-mix(in oklab,var(--p3) 25%,var(--card))}
.heatmap i.l2{background:color-mix(in oklab,var(--p3) 55%,var(--card))}
.heatmap i.l3{background:var(--p3)}

.subj-rank{display:flex;flex-direction:column;gap:10px;margin-top:8px}
.rank-row{display:flex;align-items:center;gap:12px}
.rank-row .chip{width:40px;height:40px;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;font-size:20px;background:color-mix(in oklab,var(--subject) 18%,var(--card));flex-shrink:0}
.rank-row .name{flex:1;font-weight:600;font-size:13px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rank-row .bar{flex:2;height:10px;background:color-mix(in oklab,var(--ink) 8%,transparent);border-radius:999px;overflow:hidden}
.rank-row .bar span{display:block;height:100%;background:var(--subject);border-radius:999px}
.rank-row .pct{font-family:var(--font-mono);font-weight:700;font-size:12px;min-width:40px;text-align:right}

/* ===================================================================
   TWEAKS PANEL
   =================================================================== */
.tweaks{
  position:fixed;right:16px;bottom:16px;z-index:90;
  width:320px;max-width:calc(100vw - 32px);
  background:var(--card);border:1px solid var(--line-2);
  border-radius:22px;padding:18px;
  box-shadow:0 20px 60px rgba(0,0,0,.25);
  font-size:13px;
  transform:translateY(calc(100% + 24px));transition:transform .4s cubic-bezier(.2,.9,.3,1);
}
.tweaks.show{transform:translateY(0)}
.tweaks h4{font-size:14px;margin-bottom:4px;display:flex;align-items:center;gap:8px}
.tweaks small{color:var(--ink-3);font-size:11px;display:block;margin-bottom:14px}
.tweaks-row{margin-bottom:14px}
.tweaks-row>label{display:block;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink-3);margin-bottom:6px}
.seg{display:flex;gap:4px;padding:4px;background:color-mix(in oklab,var(--ink) 6%,transparent);border-radius:12px}
.seg button{flex:1;padding:8px 10px;border-radius:9px;font-size:12px;font-weight:600;color:var(--ink-2);transition:all .2s}
.seg button.active{background:var(--card);color:var(--ink);box-shadow:0 1px 4px rgba(0,0,0,.1)}
.pal-swatches{display:flex;gap:8px}
.pal-swatch{
  width:44px;height:44px;border-radius:14px;border:2px solid var(--line);
  display:flex;overflow:hidden;cursor:pointer;transition:transform .2s,border-color .2s;
  position:relative;
}
.pal-swatch:hover{transform:scale(1.08)}
.pal-swatch.active{border-color:var(--ink)}
.pal-swatch i{flex:1;height:100%}
.pal-swatch b{position:absolute;bottom:-18px;left:0;right:0;text-align:center;font-size:9px;font-family:var(--font-mono);font-weight:600;color:var(--ink-3);letter-spacing:.05em}

/* ===================================================================
   MODE SELECT SCREEN
   =================================================================== */
.mode-grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));margin-top:4px}
.mode-card{
  position:relative;text-align:left;padding:20px;border-radius:22px;
  cursor:pointer;overflow:hidden;
  display:flex;flex-direction:column;gap:10px;min-height:200px;
  transition:transform .25s cubic-bezier(.2,.9,.3,1);
}
.mode-card:hover{transform:translateY(-4px) rotate(.3deg)}
.mode-card::after{
  content:"";position:absolute;right:-40px;bottom:-40px;width:160px;height:160px;border-radius:50%;
  background:radial-gradient(circle,var(--mode-color),transparent 70%);opacity:.22;pointer-events:none;
}
.mode-card .m-ico{
  width:58px;height:58px;border-radius:18px;
  display:inline-flex;align-items:center;justify-content:center;
  font-size:30px;
  background:color-mix(in oklab,var(--mode-color) 20%,var(--card));
  border:1px solid color-mix(in oklab,var(--mode-color) 30%,transparent);
  transition:transform .35s;align-self:flex-start;
}
.mode-card:hover .m-ico{transform:rotate(-8deg) scale(1.1)}
.mode-card .m-tag{
  display:inline-block;font-family:var(--font-mono);font-size:10px;
  letter-spacing:.1em;text-transform:uppercase;font-weight:700;
  padding:4px 8px;border-radius:999px;
  background:color-mix(in oklab,var(--mode-color) 18%,transparent);color:var(--mode-color);
  align-self:flex-start;
}
.mode-card h4{font-family:var(--font-display);font-size:18px;color:var(--ink);margin:0;position:relative;z-index:1}
.mode-card p{color:var(--ink-2);font-size:13px;line-height:1.45;margin:0;flex:1;position:relative;z-index:1}
.mode-card .m-stats{display:flex;align-items:center;gap:12px;font-family:var(--font-mono);font-size:11px;color:var(--ink-3);padding-top:8px;border-top:1px solid var(--line);position:relative;z-index:1}
.mode-card .m-stats b{color:var(--mode-color);font-weight:700}

/* ===================================================================
   LOGIN MODAL
   =================================================================== */
.modal-wrap{
  position:fixed;inset:0;z-index:100;
  display:flex;align-items:center;justify-content:center;padding:20px;
  background:color-mix(in oklab,var(--ink) 55%,transparent);
  backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
}
.modal{
  width:100%;max-width:420px;padding:28px;border-radius:26px;
  background:var(--card);border:1px solid var(--line-2);
  box-shadow:0 30px 80px rgba(0,0,0,.3);position:relative;
  animation:modalIn .4s cubic-bezier(.2,.9,.3,1);
}
@keyframes modalIn{from{opacity:0;transform:translateY(20px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}
.modal h3{font-size:22px;margin-bottom:4px}
.modal .mp{color:var(--ink-2);font-size:14px;margin:0 0 20px;line-height:1.5}
.modal label{display:block;font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink-3);margin-bottom:6px;font-weight:700}
.modal input{
  width:100%;padding:12px 14px;border-radius:14px;
  border:1.5px solid var(--line-2);background:var(--paper-2);
  font:inherit;color:var(--ink);margin-bottom:14px;
  transition:border-color .2s,box-shadow .2s;
}
.modal input:focus{outline:none;border-color:var(--p3);box-shadow:0 0 0 3px color-mix(in oklab,var(--p3) 20%,transparent)}
.modal .or{display:flex;align-items:center;gap:10px;margin:16px 0;color:var(--ink-3);font-size:11px;font-family:var(--font-mono);text-transform:uppercase;letter-spacing:.1em}
.modal .or::before,.modal .or::after{content:"";flex:1;height:1px;background:var(--line)}
.modal .close-x{position:absolute;top:14px;right:14px;width:32px;height:32px}
.modal .sync-note{padding:12px;border-radius:12px;background:color-mix(in oklab,var(--p3) 10%,transparent);border:1px solid color-mix(in oklab,var(--p3) 20%,transparent);font-size:12px;color:var(--ink-2);margin-top:10px;line-height:1.5}

/* ===================================================================
   RESPONSIVE
   =================================================================== */
@media(max-width:640px){
  .app{padding:16px 14px 120px}
  .hero{padding:22px 18px}
  .qface{padding:20px}
  .tweaks{right:10px;bottom:10px;left:10px;width:auto}
  .exam-countdown-grid{grid-template-columns:repeat(3,minmax(80px,1fr))}
}

/* ===================================================================
   SWIPE TRANSITIONS
   =================================================================== */
.qstage.swipe-out-left .qcard{transform:translateX(-120%) rotate(-6deg);opacity:0}
.qstage.swipe-in-right .qcard{animation:slideInR .45s cubic-bezier(.2,.9,.3,1)}
@keyframes slideInR{from{transform:translateX(40%) rotate(4deg);opacity:0}to{transform:translateX(0) rotate(0);opacity:1}}

/* screen transition */
.screen{animation:fadeUp .5s cubic-bezier(.2,.9,.3,1)}
@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}

/* pulse glow on active streak */
.glow-ok{box-shadow:0 0 0 0 var(--ok);animation:pulseOk 1.2s}
@keyframes pulseOk{0%{box-shadow:0 0 0 0 color-mix(in oklab,var(--ok) 60%,transparent)}100%{box-shadow:0 0 0 24px transparent}}
/* =========================================================
   COMPATIBILITY LAYER — original JS class names → new design
   ========================================================= */
.panel{border-radius:26px;padding:22px;position:relative;background:var(--card);border:1px solid var(--line);box-shadow:0 4px 20px rgba(0,0,0,.04)}
.small{font-size:13.5px;color:var(--ink-3);line-height:1.55}
.badge{display:inline-block;padding:4px 11px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.02em}
.badge.ok{background:color-mix(in oklab,var(--ok) 15%,transparent);color:var(--ok)}
.badge.soon{background:color-mix(in oklab,var(--warn) 15%,transparent);color:var(--warn)}
.badge.mode{background:color-mix(in oklab,var(--p3) 15%,transparent);color:var(--p3);font-size:11px}
.score-fail{color:var(--bad)!important;background:color-mix(in oklab,var(--bad) 12%,transparent);border-radius:8px;padding:3px 10px;display:inline-block;font-weight:700}
.score-pass-just{color:var(--warn)!important;background:color-mix(in oklab,var(--warn) 12%,transparent);border-radius:8px;padding:3px 10px;display:inline-block;font-weight:700}
.score-pass-good{color:var(--ok)!important;background:color-mix(in oklab,var(--ok) 12%,transparent);border-radius:8px;padding:3px 10px;display:inline-block;font-weight:700}
.option{display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:18px;background:var(--card);border:1.5px solid var(--line);text-align:left;font-size:15px;font-weight:500;color:var(--ink);transition:all .18s cubic-bezier(.2,.9,.3,1);cursor:pointer;width:100%;position:relative}
.option:hover:not(.correct):not(.wrong){border-color:var(--subject,var(--p1));transform:translateX(3px)}
.option.correct{border-color:var(--ok);background:color-mix(in oklab,var(--ok) 10%,var(--card));color:var(--ok);font-weight:700}
.option.wrong{border-color:var(--bad);background:color-mix(in oklab,var(--bad) 10%,var(--card));color:var(--bad);font-weight:700;animation:shake .5s}
.option:disabled{cursor:default;opacity:.6}
.subject-switch{display:flex;gap:6px;flex-wrap:wrap}
.subject-switch .btn.active{background:linear-gradient(135deg,var(--p1),var(--p3));color:#fff;border-color:transparent}
.checkbox-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px}
.checkbox-card{border:1.5px solid var(--line);border-radius:14px;padding:11px 14px;background:var(--paper-2);cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:8px;font-size:13.5px;min-height:44px}
.checkbox-card:hover{border-color:var(--p3);background:color-mix(in oklab,var(--p3) 6%,var(--paper-2));z-index:2}
.checkbox-card:hover .cb-label{white-space:normal;overflow:visible;text-overflow:clip}
.checkbox-card:has(input:checked){border-color:var(--p3);background:color-mix(in oklab,var(--p3) 10%,var(--paper-2))}
.checkbox-card:has(input:checked) .cb-label{white-space:normal;overflow:visible;text-overflow:clip}
.checkbox-card .cb-label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.35}
.checkbox-card .cb-count{opacity:.6;flex-shrink:0}
.checkbox-card input[type=checkbox]{accent-color:var(--p3);width:15px;height:15px;flex-shrink:0}
textarea.share-preview{width:100%;min-height:160px;padding:14px;border-radius:14px;border:1px solid var(--line);background:var(--paper-2);color:var(--ink);font-size:13px;resize:vertical;font-family:var(--font-mono)}
textarea.share-preview:focus{outline:none;border-color:var(--p3)}
.progress{height:14px;border-radius:999px;overflow:hidden;background:color-mix(in oklab,var(--ink) 8%,transparent);border:1px solid var(--line);margin-bottom:18px}
.progress>div{height:100%;width:0;background:linear-gradient(95deg,var(--p1),var(--p3),var(--p4));border-radius:999px;transition:width .5s}
.question-list-item{padding:18px 0;border-bottom:1px solid var(--line)}
.question-list-item:last-child{border-bottom:0}
.question-list-item ol{margin:10px 0 0 20px;padding:0;font-size:13.5px}
.question-list-item li{margin:5px 0;color:var(--ink-3)}
.question-list-item li.correct-answer{font-weight:700;color:var(--ok)}
.history-item,.weak-item{padding:14px 0;border-bottom:1px solid var(--line)}
.history-item:last-child,.weak-item:last-child{border-bottom:0}
.mistake{border-bottom:1px solid var(--line);padding:18px 0}
.mistake:last-child{border-bottom:0}
.review-option{padding:10px 14px;border-radius:14px;border:1px solid var(--line);margin-top:8px;font-size:14px}
.review-option.correct{background:color-mix(in oklab,var(--ok) 10%,var(--card));border-color:var(--ok);color:var(--ok);font-weight:700}
.review-option.wrong{background:color-mix(in oklab,var(--bad) 10%,var(--card));border-color:var(--bad);color:var(--bad);font-weight:700}
.empty{padding:20px;border:1.5px dashed var(--line);border-radius:14px;color:var(--ink-3);background:var(--paper-2);text-align:center;font-size:14px}
.statement{white-space:pre-wrap;line-height:1.65;font-size:13.5px;color:var(--ink-3)}
.screen{display:none}
.screen.active{display:block;animation:fadeUp .5s cubic-bezier(.2,.9,.3,1)}
.inline-score{font-weight:700}
.inline-score.empty{color:var(--ink-3)}
.exam-score-line{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:8px;font-size:13.5px;color:var(--ink-3)}
.legend-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.info-box{display:none;border:1px solid var(--line);border-radius:14px;background:var(--card);padding:16px;margin-top:8px}
.info-box.active{display:block}
.auth-login-btn{background:linear-gradient(135deg,#16a34a,#15803d)!important;border-color:transparent!important;color:#fff!important;box-shadow:0 3px 14px rgba(22,163,74,.28)!important}
.auth-login-btn:hover{box-shadow:0 5px 20px rgba(22,163,74,.35)!important}
#homeStatsSection{margin-top:24px}
#homeStatsSection h3{font-family:var(--font-display);font-size:16px;font-weight:700;margin:0 0 14px;color:var(--ink)}
.home-stats-grid{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(190px,1fr))}
.home-stat-card{border:1px solid var(--line);border-radius:18px;padding:14px 16px;background:var(--paper-2);border-top:3px solid var(--sub-color,var(--p1));transition:all .2s}
.home-stat-card:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.06)}
.home-stat-header{display:flex;align-items:center;gap:8px;margin-bottom:10px}
.home-stat-icon{font-size:18px;flex-shrink:0}
.home-stat-name{font-family:var(--font-display);font-weight:700;font-size:12.5px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--ink)}
.home-stat-score{font-size:12px;font-weight:700;padding:2px 7px;border-radius:999px;flex-shrink:0}
.home-stat-body{display:grid;gap:3px}
.home-stat-row{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--ink-3)}
.home-stat-row strong{color:var(--ink);font-weight:700}
.home-stat-empty{font-size:12px;color:var(--ink-3);font-style:italic;padding:4px 0 0}
.alert-icon{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:999px;background:var(--bad);color:#fff;font-size:12px;font-weight:900;flex-shrink:0}
.help-stack{display:grid;gap:12px}
.help-card{padding:20px;background:var(--card);border:1px solid var(--line);border-radius:18px}
.help-card h3{margin:0 0 8px;font-family:var(--font-display);font-weight:700;font-size:15px}
.help-card ul{margin:8px 0 0 18px;padding:0}
.help-card li{margin:5px 0;font-size:13.5px;color:var(--ink-3)}
#sectionTag{font-size:12px;color:var(--p3);font-weight:600;background:color-mix(in oklab,var(--p3) 12%,transparent);border-radius:6px;display:inline-block;padding:3px 10px;margin-bottom:10px}
.score-reaction-gif{display:block;max-width:min(100%,280px);max-height:200px;width:auto;height:auto;margin:14px auto 0;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.12)}
.stats-grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr))}
.stat-card{border:1px solid var(--line);background:var(--card);border-radius:18px;padding:18px 20px;transition:all .2s}
.stat-card:hover{border-color:var(--p3);transform:translateY(-1px)}
.stat-card .n{font-family:var(--font-display);font-size:32px;font-weight:800;color:var(--p3);margin-top:4px}
.stat-card>div:first-child{font-size:12px;font-weight:600;color:var(--ink-3);text-transform:uppercase;letter-spacing:.06em}
.mode-card{position:relative;text-align:left;padding:20px;border-radius:22px;cursor:pointer;overflow:hidden;display:flex;flex-direction:column;gap:10px;min-height:170px;transition:transform .25s cubic-bezier(.2,.9,.3,1);background:var(--card);border:1px solid var(--line);box-shadow:0 4px 20px rgba(0,0,0,.04)}
.mode-card:hover{transform:translateY(-4px) rotate(.3deg);box-shadow:0 12px 32px rgba(0,0,0,.1)}
.mode-card h3{font-family:var(--font-display);font-size:16px;font-weight:700;margin:0;color:var(--ink)}
.mode-card p.small{color:var(--ink-2);font-size:13px;line-height:1.45;flex:1}
.mode-card.purple{background:linear-gradient(135deg,#7c3aed,#5b21b6);color:#fff;border-color:transparent;box-shadow:0 4px 18px rgba(124,58,237,.3)}
.mode-card.purple h3{color:#fff}
.mode-card.purple:hover{box-shadow:0 8px 28px rgba(124,58,237,.45)}
.mode-card.purple .small,.mode-card.purple .badge.mode{color:rgba(255,255,255,.75);background:rgba(255,255,255,.14)}
.mode-card-icon{width:100%;height:44px;display:flex;align-items:center;justify-content:flex-start;font-size:32px;line-height:1;margin-bottom:4px}
.mode-card-wrap{display:grid;gap:6px}
.mode-info-row{display:flex;justify-content:flex-end;margin-bottom:4px}
.mode-info-btn{width:26px;height:26px;border:none;border-radius:999px;background:var(--bad);color:#fff;font-weight:900;font-size:13px;display:flex;align-items:center;justify-content:center;cursor:pointer}
.menu{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));margin-top:16px}
.gif-legend{display:grid;gap:10px;margin-top:14px}
.gif-legend-item{display:flex;align-items:center;gap:12px;padding:10px 12px;border:1px solid var(--line);border-radius:14px;background:var(--paper-2)}
.gif-legend-item img{width:68px;height:68px;object-fit:contain;border-radius:12px;flex-shrink:0}
.gif-legend-item span{font-size:13.5px;color:var(--ink);font-weight:600}
.qstage{position:relative;margin-bottom:20px}
.qface.qfront{background:var(--card);border:1px solid var(--line);border-radius:26px;padding:26px;box-shadow:0 4px 20px rgba(0,0,0,.04)}
.qghost{position:absolute;inset:14px -14px -14px 14px;border-radius:26px;background:color-mix(in oklab,var(--subject,var(--p1)) 10%,var(--card));border:1px solid var(--line);z-index:-1;opacity:.55;pointer-events:none}
.question{font-size:clamp(16px,2.2vw,22px);line-height:1.45;margin:4px 0 20px;font-family:var(--font-display);font-weight:600;color:var(--ink)}
.subject-score-pill{display:inline-flex;align-items:center;justify-content:center;gap:5px;padding:6px 10px;border-radius:12px;background:var(--paper-2);border:1px solid var(--line);color:var(--ink);font-size:13px;font-weight:700;white-space:nowrap;flex:1 1 0;min-width:0}
.subject-score-pill>.pill-ico{font-size:16px;line-height:1}
.subject-best-scores{display:flex;gap:6px;width:100%;flex-wrap:nowrap}
.subject-score-pill.empty{opacity:.65}
.subject-score-pill.score-fail{background:color-mix(in oklab,var(--bad) 12%,transparent);border-color:color-mix(in oklab,var(--bad) 25%,transparent);color:var(--bad)}
.subject-score-pill.score-pass-just{background:color-mix(in oklab,var(--warn) 12%,transparent);border-color:color-mix(in oklab,var(--warn) 25%,transparent);color:var(--warn)}
.subject-score-pill.score-pass-good{background:color-mix(in oklab,var(--ok) 12%,transparent);border-color:color-mix(in oklab,var(--ok) 25%,transparent);color:var(--ok)}
.prog-grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:18px}
.bignum{font-family:var(--font-display);font-size:48px;font-weight:800;line-height:1;letter-spacing:-.03em}
.subtle{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px}
.btn.small{padding:8px 13px;font-size:13px}
@media(max-width:640px){
  .tb-actions{flex-wrap:wrap;justify-content:flex-end;gap:4px}
}
@media(max-width:700px){
  .app{padding:12px 12px 80px}
  .subject-grid,.menu,.mode-grid{grid-template-columns:1fr}
  .home-stats-grid{grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:8px}
}
/* Tweaks panel override of dark toggle (legacy) */
body.auth-logged-in{}
body.auth-logged-out{}
body.quiz-active{}

/* ========== REGISTRO (redesign) ========== */
.r-grid{display:grid;grid-template-columns:320px 1fr;gap:20px;align-items:start}
@media(max-width:900px){.r-grid{grid-template-columns:1fr}}
.subj-list{padding:10px;margin-bottom:14px}
.subj-list-title{font-family:var(--font-mono);font-size:10px;font-weight:700;letter-spacing:.12em;color:var(--ink-3);padding:8px 12px 10px;text-transform:uppercase}
.subj-row{display:flex;align-items:center;gap:4px;border-radius:10px;margin-bottom:2px;transition:background .15s}
.subj-row:hover{background:color-mix(in oklab,var(--p3) 8%,transparent)}
.subj-row.active{background:linear-gradient(90deg,var(--p1),var(--p3));box-shadow:0 4px 12px color-mix(in oklab,var(--p3) 30%,transparent)}
.subj-row.active .subj-item,.subj-row.active .subj-share{color:#fff;}
.subj-item{flex:1;text-align:left;padding:12px 14px;border:0;background:transparent;color:var(--ink);font-family:inherit;font-size:14px;font-weight:700;border-radius:10px;cursor:pointer;}
.subj-share{flex:0 0 auto;width:34px;height:34px;margin-right:6px;display:inline-flex;align-items:center;justify-content:center;border:0;background:transparent;color:color-mix(in oklab,var(--ink) 55%,transparent);border-radius:8px;cursor:pointer;font-size:16px;transition:background .15s,color .15s,transform .15s;}
.subj-share:hover{background:color-mix(in oklab,var(--p3) 14%,transparent);color:var(--p3);transform:translateY(-1px);}
.subj-row.active .subj-share:hover{background:rgba(255,255,255,.18);color:#fff;}
.r-kpi-list{padding:6px 18px}
.r-kpi-list .item{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--line)}
.r-kpi-list .item:last-child{border-bottom:0}
.r-kpi-list .l{color:var(--ink-3);font-size:13px;font-family:var(--font-mono);text-transform:uppercase;letter-spacing:.05em}
.r-kpi-list .v{font-family:var(--font-display);font-size:22px;font-weight:800}
.r-streak{padding:14px 16px;background:linear-gradient(135deg,color-mix(in oklab,var(--ok) 22%,var(--card)),color-mix(in oklab,var(--ok) 10%,var(--card)));border-radius:14px;border:1px solid color-mix(in oklab,var(--ok) 28%,transparent);margin-top:14px}
.r-streak .t{font-size:12px;color:var(--ink-3);font-weight:700;font-family:var(--font-mono);text-transform:uppercase;letter-spacing:.05em}
.r-streak .v{font-family:var(--font-display);font-size:26px;font-weight:900;color:var(--ok);margin-top:4px}
.r-hero-chart{background:linear-gradient(135deg,color-mix(in oklab,var(--p3) 14%,var(--card)),color-mix(in oklab,var(--p1) 10%,var(--card)));border:1px solid color-mix(in oklab,var(--p3) 22%,transparent);border-radius:16px;padding:20px;margin-bottom:14px}
.r-hero-chart .head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px}
.r-hero-chart h3{margin:0;font-size:17px;font-family:var(--font-display)}
.r-hero-chart .chart-chips{display:flex;gap:6px;flex-wrap:wrap}
.r-chip{display:inline-flex;align-items:center;gap:4px;padding:5px 11px;border-radius:99px;border:1px solid var(--line);background:var(--paper-2);font-size:12px;font-weight:700;color:var(--ink);cursor:pointer;font-family:inherit;transition:all .15s}
.r-chip:hover{border-color:var(--p3)}
.r-chip.active{background:linear-gradient(90deg,var(--p1),var(--p3));border-color:transparent;color:#fff}
.r-sparkline{min-height:140px;background:var(--paper-2);border-radius:12px;padding:12px;position:relative}
.r-sparkline.line-mode{height:140px}
.r-sparkline.line-mode svg{width:100%;height:100%;display:block;overflow:visible}
.r-sparkline .yaxis,.r-sparkline .axis-max,.r-sparkline .axis-min{position:absolute;font-size:10px;color:var(--ink-3);font-family:var(--font-mono)}
.r-sparkline .yaxis{top:12px;left:14px}
.r-sparkline .axis-max{top:12px;right:14px}
.r-sparkline .axis-min{bottom:12px;right:14px}
.r-sparkline .empty-msg{min-height:116px;display:flex;align-items:center;justify-content:center;color:var(--ink-3);font-size:13px;font-style:italic}
.r-bars7{position:relative;padding-top:6px}
.r-bars7 .max-lbl{position:absolute;top:0;left:2px;font-size:10px;color:var(--ink-3);font-family:var(--font-mono);font-weight:700}
.r-bars7 .bars{display:grid;grid-template-columns:repeat(7,1fr);gap:10px;height:110px;align-items:end;margin-top:16px;padding:0 4px}
.r-bars7 .col{position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%;justify-content:flex-end;cursor:default}
.r-bars7 .val{font-size:11px;font-weight:800;color:var(--ink);line-height:1;min-height:12px}
.r-bars7 .bar{width:100%;max-width:42px;background:linear-gradient(180deg,var(--p1),var(--p3));border-radius:6px 6px 2px 2px;min-height:2px;transition:filter .15s}
.r-bars7 .bar.zero{background:color-mix(in oklab,var(--ink-3) 40%,transparent);opacity:.45;min-height:4px}
.r-bars7 .bar.today{background:linear-gradient(180deg,#fff 0%,var(--p1) 40%,var(--p3));box-shadow:0 0 14px color-mix(in oklab,var(--p1) 55%,transparent)}
.r-bars7 .col:hover .bar{filter:brightness(1.15)}
.r-bars7 .tip{position:absolute;bottom:calc(100% + 4px);left:50%;transform:translateX(-50%);background:var(--ink);color:var(--paper);padding:5px 9px;border-radius:6px;font-size:11px;font-weight:700;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;z-index:5}
.r-bars7 .col:hover .tip{opacity:1}
.r-bars7 .tip::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:4px solid transparent;border-top-color:var(--ink)}
.r-bars7 .day-labels{display:grid;grid-template-columns:repeat(7,1fr);gap:10px;margin-top:8px;padding:0 4px}
.r-bars7 .day-labels span{text-align:center;font-size:13px;font-weight:800;color:var(--ink-3)}
.r-bars7 .day-labels span.today{color:var(--p1)}
.r-bars7 .week-lbl{margin-top:10px;padding-top:8px;border-top:1px solid var(--line);text-align:center;font-size:12px;color:var(--ink-3);font-weight:700;letter-spacing:.02em}
.r-section{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:20px;margin-bottom:14px}
.r-section h3{margin:0 0 14px;font-size:16px;font-family:var(--font-display)}
.exam-table{width:100%;border-collapse:collapse;font-size:13px}
.exam-table th{text-align:left;padding:10px 12px;color:var(--ink-3);font-weight:700;font-size:11px;letter-spacing:.06em;text-transform:uppercase;border-bottom:1px solid var(--line);font-family:var(--font-mono)}
.exam-table td{padding:12px;border-bottom:1px solid var(--line)}
.exam-table tr:last-child td{border-bottom:0}
.exam-table .tipo{font-weight:800;font-size:14px}
.exam-table .intentos{color:var(--ink-3)}
.exam-table .best{color:var(--ok);font-weight:800}
.exam-table .avg{font-weight:700}
.exam-table .ultimas{font-family:var(--font-mono);font-size:12px;color:var(--ink-3)}
.exam-table .ultimas span.nota{display:inline-block;padding:2px 6px;margin:0 2px;border-radius:4px;background:var(--paper-2);color:var(--ink);font-weight:700}
.exam-table .empty{color:var(--ink-3);font-style:italic}
.mode-row{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;background:var(--paper-2);border-radius:10px;margin-bottom:8px;gap:10px;flex-wrap:wrap}
.mode-row:last-child{margin-bottom:0}
.mode-row .l{font-weight:700}
.mode-row .stats{font-size:13px;color:var(--ink-3);font-family:var(--font-mono)}
.sess-row{display:grid;grid-template-columns:auto 1fr auto;gap:12px;padding:10px 12px;border-bottom:1px solid var(--line);align-items:center;font-size:13px}
.sess-row:last-child{border-bottom:0}
.sess-row .mode-pill{padding:3px 9px;border-radius:99px;background:color-mix(in oklab,var(--p3) 18%,transparent);color:var(--p3);font-size:11px;font-weight:800;white-space:nowrap}
.sess-row .when{color:var(--ink-3);font-family:var(--font-mono);font-size:12px}
.sess-row .stats-mid{color:var(--ink-2);font-size:13px}
.share-float-wrap{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:18px}
.share-step{margin-bottom:22px}
.share-step h4{margin:0 0 10px;font-size:12px;color:var(--ink-3);letter-spacing:.06em;text-transform:uppercase;font-weight:800;display:flex;align-items:center;gap:8px;font-family:var(--font-mono)}
.step-num{display:inline-flex;width:22px;height:22px;border-radius:50%;background:linear-gradient(90deg,var(--p1),var(--p3));color:#fff;font-size:12px;align-items:center;justify-content:center;font-weight:900;font-family:var(--font-display)}
.cbox{display:flex;gap:8px;align-items:center;padding:10px 14px;background:var(--paper-2);border:1px solid var(--line);border-radius:10px;font-size:13px;cursor:pointer;transition:all .15s}
.cbox:hover{border-color:var(--p3)}
.cbox input{accent-color:var(--p3);width:15px;height:15px}
.cbox:has(input:checked){border-color:var(--p3);background:color-mix(in oklab,var(--p3) 8%,var(--paper-2))}
.cbox-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px}
.cbox-group{margin-bottom:14px}
.cbox-group .g-title{font-size:11px;font-weight:800;color:var(--ink-3);letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;font-family:var(--font-mono)}
.preview-box{background:var(--paper-2);border:1px solid var(--line);border-radius:12px;padding:16px;font-family:var(--font-mono);font-size:12px;color:var(--ink-2);white-space:pre-wrap;line-height:1.6;min-height:120px;max-height:400px;overflow:auto}
.share-chip{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:99px;border:1px solid var(--line);background:var(--paper-2);font-size:13px;font-weight:700;color:var(--ink);cursor:pointer;font-family:inherit;transition:all .15s}
.share-chip:hover{border-color:var(--p3)}
.share-chip.active{background:linear-gradient(90deg,var(--p1),var(--p3));border-color:transparent;color:#fff}
.r-title-gradient{background:linear-gradient(90deg,var(--p1),var(--p3));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-family:var(--font-display);font-weight:900}

/* ========== PWA UPDATE TOAST ========== */
.pwa-update-toast{
  position:fixed;
  left:16px;
  right:16px;
  bottom:16px;
  z-index:120;
  max-width:420px;
  margin-left:auto;
  background:var(--card);
  color:var(--ink);
  border:1px solid var(--line-2);
  border-radius:20px;
  padding:16px;
  box-shadow:0 20px 50px rgba(0,0,0,.25);
  transform:translateY(calc(100% + 24px));
  transition:transform .3s ease;
}
.pwa-update-toast.show{transform:translateY(0)}
.pwa-update-title{
  font-family:var(--font-display);
  font-size:16px;
  font-weight:800;
  margin-bottom:6px;
}
.pwa-update-text{
  color:var(--ink-2);
  font-size:13px;
  line-height:1.45;
}
.pwa-update-actions{
  display:flex;
  gap:8px;
  margin-top:12px;
  flex-wrap:wrap;
}
