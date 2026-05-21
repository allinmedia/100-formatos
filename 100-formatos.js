(function(){
  var target=document.getElementById('allin-formatos')||document.currentScript&&document.currentScript.parentNode;
  if(!target)return;
  var css=`.popout.lesson__completion,[id^="popout_course_"]{display:none!important}
.lg\\:col-span-2{grid-column:span 3/span 3!important}
.allin-cards-wrapper{width:100%;max-width:100%;margin:24px auto;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text","Inter","Helvetica Neue",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
.allin-cards-grid{display:grid !important;grid-template-columns:repeat(5,1fr) !important;column-gap:16px !important;row-gap:16px !important;gap:16px !important;width:100%}
.allin-card{background:#fff;border-radius:18px;aspect-ratio:1/1;box-shadow:0 1px 2px rgba(0,0,0,.04),0 4px 12px rgba(0,0,0,.08);transition:transform .5s cubic-bezier(.16,1,.3,1),box-shadow .5s cubic-bezier(.16,1,.3,1);box-sizing:border-box;position:relative;overflow:hidden}
.allin-card:hover{transform:translateY(-4px);box-shadow:0 4px 8px rgba(0,0,0,.06),0 16px 32px rgba(0,0,0,.12)}
.allin-card-cover{cursor:pointer;background:#fafafa;border:1px solid rgba(0,0,0,.06)}
.allin-cover{position:relative;width:100%;height:100%;padding:18px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;background:linear-gradient(180deg,#fff 0%,#f5f5f7 100%);overflow:hidden}
.allin-cover-watermark{position:absolute;bottom:-18%;right:-8%;font-size:clamp(120px,13vw,180px);font-weight:700;line-height:.85;letter-spacing:-.06em;color:#1d1d1f;opacity:.04;font-variant-numeric:tabular-nums;pointer-events:none;user-select:none;z-index:0;transition:opacity .5s cubic-bezier(.16,1,.3,1),transform .5s cubic-bezier(.16,1,.3,1)}
.allin-card-cover:hover .allin-cover-watermark{opacity:.07;transform:translate(-4px,-4px)}
.allin-cover-header{display:flex;align-items:center;justify-content:space-between;gap:8px;position:relative;z-index:1}
.allin-cover-badge{width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:#fff;border-radius:50%;background:#1d1d1f;box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 1px 2px rgba(0,0,0,.12);font-variant-numeric:tabular-nums;flex-shrink:0}
.allin-cover-tag{font-size:9px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#86868b;padding:4px 8px;border:1px solid rgba(0,0,0,.08);border-radius:999px;background:rgba(255,255,255,.6);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.allin-cover-footer{position:relative;z-index:1;display:flex;flex-direction:column;gap:14px}
.allin-cover-name{font-size:clamp(14px,1.4vw,19px);font-weight:600;line-height:1.15;letter-spacing:-.022em;color:#1d1d1f;padding-right:4px}
.allin-cover-cta{position:relative;display:flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:#6e6e73;padding-top:12px;transition:color .3s cubic-bezier(.16,1,.3,1),gap .3s cubic-bezier(.16,1,.3,1)}
.allin-cover-cta::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,rgba(0,0,0,.1) 0%,rgba(0,0,0,.04) 60%,transparent 100%)}
.allin-cover-cta svg{width:14px;height:14px;transition:transform .3s cubic-bezier(.16,1,.3,1)}
.allin-card-cover:hover .allin-cover-cta{color:#1d1d1f;gap:10px}
.allin-card-cover:hover .allin-cover-cta svg{transform:translateX(2px)}
.allin-buttons-grid{display:flex !important;flex-direction:row !important;flex-wrap:nowrap !important;width:100%;margin-top:16px;align-items:stretch}

/* Botões pequenos (compartilhado) */
.allin-btn{position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;gap:14px;padding:20px;border-radius:18px;text-decoration:none;cursor:pointer;transition:all .5s cubic-bezier(.16,1,.3,1);box-sizing:border-box;flex:1 1 0;min-width:0;aspect-ratio:1/1;overflow:hidden;border:1px solid rgba(255,255,255,.06);box-shadow:0 1px 2px rgba(0,0,0,.2),0 8px 24px rgba(0,0,0,.15);margin-right:16px}
.allin-btn-icon-wrap{width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:rgba(255,255,255,.12);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.08);flex-shrink:0;transition:transform .4s cubic-bezier(.16,1,.3,1)}
.allin-btn-icon-wrap svg{width:20px;height:20px;color:#fff}
.allin-btn-text{display:flex;flex-direction:column;gap:4px;width:100%}
.allin-btn-title{font-size:15px;font-weight:600;color:#fff;letter-spacing:-.015em;line-height:1.2}
.allin-btn-sub{font-size:11px;font-weight:500;color:rgba(255,255,255,.6);letter-spacing:.01em;line-height:1.3}
.allin-btn:hover{transform:translateY(-4px);box-shadow:0 4px 12px rgba(0,0,0,.3),0 16px 40px rgba(0,0,0,.25)}
.allin-btn:hover .allin-btn-icon-wrap{transform:scale(1.08)}

/* Swipe Files — azul biblioteca + acento dourado */
.allin-btn-swipe{background:linear-gradient(135deg,#1e3a5f 0%,#15294a 50%,#0f1f3a 100%)}
.allin-btn-swipe::before{content:"";position:absolute;top:-50%;right:-30%;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(201,168,76,.18) 0%,transparent 70%);pointer-events:none}
.allin-btn-swipe .allin-btn-icon-wrap{background:rgba(201,168,76,.15);border-color:rgba(201,168,76,.25)}
.allin-btn-swipe .allin-btn-icon-wrap svg{color:#c9a84c}

/* WhatsApp — verde oficial */
.allin-btn-whats{background:linear-gradient(135deg,#25D366 0%,#128C7E 100%)}
.allin-btn-whats::before{content:"";position:absolute;bottom:-40%;left:-20%;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.12) 0%,transparent 70%);pointer-events:none}
.allin-btn-whats .allin-btn-icon-wrap{background:rgba(255,255,255,.2);border-color:rgba(255,255,255,.15)}

/* Botão Premium — Conta com a gente */
.allin-btn-premium{position:relative;flex:3 1 0;min-width:0;height:auto;display:flex;flex-direction:column;justify-content:center;padding:28px 32px;background:linear-gradient(135deg,#1a1a1c 0%,#0a0a0a 100%);border:1px solid rgba(201,168,76,.2);color:#fff;text-decoration:none;border-radius:18px;box-shadow:0 1px 2px rgba(0,0,0,.2),0 8px 24px rgba(0,0,0,.15),inset 0 1px 0 rgba(255,255,255,.04);cursor:pointer;transition:all .5s cubic-bezier(.16,1,.3,1);box-sizing:border-box;overflow:hidden}
.allin-btn-premium::before{content:"";position:absolute;top:-50%;right:-20%;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(201,168,76,.08) 0%,transparent 60%);pointer-events:none;transition:opacity .5s}
.allin-btn-premium-content{position:relative;z-index:1;display:flex;flex-direction:column;gap:10px;height:100%;justify-content:center}
.allin-btn-premium-brand{display:flex;align-items:center;gap:12px;margin-bottom:4px}
.allin-btn-premium-logo{height:36px;width:auto;color:#fff}
.allin-btn-premium-tag{font-size:9px;font-weight:600;letter-spacing:.18em;color:#c9a84c;padding:4px 10px;border:1px solid rgba(201,168,76,.2);border-radius:999px;background:rgba(201,168,76,.06)}
.allin-btn-premium-headline{font-size:22px;font-weight:600;letter-spacing:-.025em;line-height:1.1;color:#fff}
.allin-btn-premium-desc{font-size:13px;line-height:1.5;color:rgba(255,255,255,.65);letter-spacing:-.01em;max-width:520px}
.allin-btn-premium-cta{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:#0a0a0a;padding:11px 22px;background:linear-gradient(180deg,#d4b057 0%,#c9a84c 100%);border:1px solid rgba(201,168,76,.5);border-radius:999px;transition:all .3s cubic-bezier(.16,1,.3,1);margin-top:8px;align-self:flex-start;box-shadow:0 2px 8px rgba(201,168,76,.15)}
.allin-btn-premium-cta svg{width:14px;height:14px;transition:transform .3s cubic-bezier(.16,1,.3,1)}
.allin-btn-premium:hover{transform:translateY(-4px);box-shadow:0 4px 12px rgba(0,0,0,.4),0 24px 48px rgba(201,168,76,.12);border-color:rgba(201,168,76,.35)}
.allin-btn-premium:hover .allin-btn-premium-cta{background:linear-gradient(180deg,#e0bc63 0%,#d4b057 100%);gap:10px;box-shadow:0 4px 12px rgba(201,168,76,.25)}
.allin-btn-premium:hover .allin-btn-premium-cta svg{transform:translateX(3px)}
.allin-modal{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;display:none;align-items:center;justify-content:center;padding:24px;box-sizing:border-box;font-family:inherit;-webkit-font-smoothing:antialiased}
.allin-modal.allin-modal-active{display:flex}
@keyframes aFI{from{opacity:0}to{opacity:1}}
.allin-modal-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);cursor:pointer}
.allin-modal-box{position:relative;z-index:1;width:100%;max-width:460px;max-height:88vh;background:linear-gradient(180deg,#fff 0%,#fafafa 100%);border-radius:20px;padding:24px 30px 28px;box-sizing:border-box;color:#1d1d1f;box-shadow:0 0 0 1px rgba(0,0,0,.05),0 24px 64px rgba(0,0,0,.35);animation:aSU .5s cubic-bezier(.16,1,.3,1);display:flex;flex-direction:column;overflow:hidden}
@keyframes aSU{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}
.allin-modal-close{position:absolute;top:12px;right:12px;width:28px;height:28px;background:rgba(0,0,0,.05);border:none;border-radius:50%;color:#1d1d1f;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .3s;z-index:2}
.allin-modal-close svg{width:14px;height:14px}
.allin-modal-close:hover{background:rgba(0,0,0,.1)}
.allin-modal-header{display:flex;align-items:center;gap:10px;margin:0 0 10px 0;flex-shrink:0}
.allin-modal-badge{flex-shrink:0;width:34px;height:34px;background:#1d1d1f;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 1px 2px rgba(0,0,0,.12)}
.allin-modal-title{margin:0;font-size:19px;font-weight:600;color:#1d1d1f;line-height:1.1;letter-spacing:-.025em}
.allin-modal-desc{font-size:13px;line-height:1.5;color:#6e6e73;margin:0 0 14px 0;letter-spacing:-.01em;flex-shrink:0}
.allin-modal-label{font-size:11px;font-weight:600;color:#86868b;margin:0 0 10px 0;text-transform:uppercase;letter-spacing:.08em}
.allin-modal-video-container{position:relative;width:100%;max-width:400px;margin:0 auto 14px;aspect-ratio:4/3;background:#000;border-radius:10px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,.12);flex-shrink:0}.allin-modal-video-container iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0}


.allin-modal-dots{display:flex;justify-content:center;gap:6px;margin:4px 0 14px 0;flex-shrink:0}
.allin-dot{width:6px;height:6px;border-radius:50%;background:#d2d2d7;transition:all .3s}
.allin-dot.allin-dot-active{background:#1d1d1f;transform:scale(1.2)}
.allin-modal-tabs{display:flex;justify-content:center;gap:8px;flex-wrap:wrap}
.allin-tab{background:rgba(0,0,0,.04);border:none;color:#6e6e73;padding:7px 14px;border-radius:999px;font-size:11px;font-weight:500;letter-spacing:-.01em;cursor:pointer;transition:all .3s cubic-bezier(.16,1,.3,1);font-family:inherit}
.allin-tab:hover:not(:disabled){background:rgba(0,0,0,.08);color:#1d1d1f}
.allin-tab.allin-tab-active{background:#1d1d1f;color:#fff}
.allin-tab:disabled{opacity:.35;cursor:not-allowed}

.allin-buttons-grid > a:last-child{margin-right:0}
@media (max-width:900px){.allin-cards-grid{grid-template-columns:repeat(4,1fr);gap:14px}}
@media (max-width:720px){.allin-cards-grid{grid-template-columns:repeat(3,1fr);gap:12px}.allin-buttons-grid{flex-wrap:wrap !important}.allin-btn{aspect-ratio:auto;padding:18px;min-height:120px;flex:1 1 calc(50% - 16px);margin-right:12px}.allin-btn-premium{flex:1 1 100%;padding:22px 24px;margin-right:0}.allin-btn-premium-headline{font-size:20px}.allin-btn-premium-logo{height:32px}.allin-cover{padding:14px}.allin-cover-badge{width:26px;height:26px;font-size:10px}.allin-cover-tag{font-size:8px;padding:3px 6px}.allin-cover-watermark{font-size:120px}.allin-modal-box{position:relative;z-index:1;width:100%;max-width:460px;max-height:88vh;background:linear-gradient(180deg,#fff 0%,#fafafa 100%);border-radius:20px;padding:24px 30px 28px;box-sizing:border-box;color:#1d1d1f;box-shadow:0 0 0 1px rgba(0,0,0,.05),0 24px 64px rgba(0,0,0,.35);animation:aSU .5s cubic-bezier(.16,1,.3,1);display:flex;flex-direction:column;overflow:hidden}.allin-modal-title{margin:0;font-size:19px;font-weight:600;color:#1d1d1f;line-height:1.1;letter-spacing:-.025em}.allin-modal-body{flex-direction:column;gap:20px}.allin-modal-right{flex:0 0 auto}.allin-modal-video-container{position:relative;width:100%;max-width:400px;margin:0 auto 14px;aspect-ratio:4/3;background:#000;border-radius:10px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,.12);flex-shrink:0}}
@media (max-width:480px){.allin-cards-grid{grid-template-columns:repeat(2,1fr);gap:10px}.allin-buttons-grid{flex-direction:column !important;flex-wrap:nowrap !important}.allin-btn{aspect-ratio:auto;padding:16px;min-height:auto;flex-direction:row;align-items:center;justify-content:flex-start;flex:1 1 100%;margin-right:0;margin-bottom:10px}.allin-btn-icon-wrap{width:38px;height:38px}.allin-btn-text{flex:1}.allin-btn-premium{flex:1 1 100%;padding:22px 20px;margin-right:0}.allin-btn-premium-headline{font-size:18px}.allin-btn-premium-logo{height:28px}}`;
  var html=`<div class="allin-cards-wrapper"><div class="allin-cards-grid">
<div class="allin-card allin-card-cover" onclick="allinOpen(0)">
<div class="allin-cover">
<div class="allin-cover-watermark">01</div>
<div class="allin-cover-header"><div class="allin-cover-badge">01</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Cinema</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(1)">
<div class="allin-cover">
<div class="allin-cover-watermark">02</div>
<div class="allin-cover-header"><div class="allin-cover-badge">02</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Caixinha de Perguntas</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(2)">
<div class="allin-cover">
<div class="allin-cover-watermark">03</div>
<div class="allin-cover-header"><div class="allin-cover-badge">03</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Bate-bola</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(3)">
<div class="allin-cover">
<div class="allin-cover-watermark">04</div>
<div class="allin-cover-header"><div class="allin-cover-badge">04</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Central do Atendimento</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(4)">
<div class="allin-cover">
<div class="allin-cover-watermark">05</div>
<div class="allin-cover-header"><div class="allin-cover-badge">05</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Reels Dark Clássico</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(5)">
<div class="allin-cover">
<div class="allin-cover-watermark">06</div>
<div class="allin-cover-header"><div class="allin-cover-badge">06</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Reels Dark Tela Dividida</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(6)">
<div class="allin-cover">
<div class="allin-cover-watermark">07</div>
<div class="allin-cover-header"><div class="allin-cover-badge">07</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Corte de Podcast</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(7)">
<div class="allin-cover">
<div class="allin-cover-watermark">08</div>
<div class="allin-cover-header"><div class="allin-cover-badge">08</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Entrevista</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(8)">
<div class="allin-cover">
<div class="allin-cover-watermark">09</div>
<div class="allin-cover-header"><div class="allin-cover-badge">09</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Musical</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(9)">
<div class="allin-cover">
<div class="allin-cover-watermark">10</div>
<div class="allin-cover-header"><div class="allin-cover-badge">10</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Corte de Palestra</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(10)">
<div class="allin-cover">
<div class="allin-cover-watermark">11</div>
<div class="allin-cover-header"><div class="allin-cover-badge">11</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Quadro Branco</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(11)">
<div class="allin-cover">
<div class="allin-cover-watermark">12</div>
<div class="allin-cover-header"><div class="allin-cover-badge">12</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Clone</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(12)">
<div class="allin-cover">
<div class="allin-cover-watermark">13</div>
<div class="allin-cover-header"><div class="allin-cover-badge">13</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Edição PRO</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(13)">
<div class="allin-cover">
<div class="allin-cover-watermark">14</div>
<div class="allin-cover-header"><div class="allin-cover-badge">14</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Lo-fi Estático</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(14)">
<div class="allin-cover">
<div class="allin-cover-watermark">15</div>
<div class="allin-cover-header"><div class="allin-cover-badge">15</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Lo-fi Modo Selfie</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(15)">
<div class="allin-cover">
<div class="allin-cover-watermark">16</div>
<div class="allin-cover-header"><div class="allin-cover-badge">16</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Reunião Online</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(16)">
<div class="allin-cover">
<div class="allin-cover-watermark">17</div>
<div class="allin-cover-header"><div class="allin-cover-badge">17</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">POV Falado</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(17)">
<div class="allin-cover">
<div class="allin-cover-watermark">18</div>
<div class="allin-cover-header"><div class="allin-cover-badge">18</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Aula no iPad</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(18)">
<div class="allin-cover">
<div class="allin-cover-watermark">19</div>
<div class="allin-cover-header"><div class="allin-cover-badge">19</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">POV em Texto</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(19)">
<div class="allin-cover">
<div class="allin-cover-watermark">20</div>
<div class="allin-cover-header"><div class="allin-cover-badge">20</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Texto na Tela</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(20)">
<div class="allin-cover">
<div class="allin-cover-watermark">21</div>
<div class="allin-cover-header"><div class="allin-cover-badge">21</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Leia a Legenda</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(21)">
<div class="allin-cover">
<div class="allin-cover-watermark">22</div>
<div class="allin-cover-header"><div class="allin-cover-badge">22</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Texto Minimalista</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(22)">
<div class="allin-cover">
<div class="allin-cover-watermark">23</div>
<div class="allin-cover-header"><div class="allin-cover-badge">23</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Tierlist</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(23)">
<div class="allin-cover">
<div class="allin-cover-watermark">24</div>
<div class="allin-cover-header"><div class="allin-cover-badge">24</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Animação</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(24)">
<div class="allin-cover">
<div class="allin-cover-watermark">25</div>
<div class="allin-cover-header"><div class="allin-cover-badge">25</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Sim ou Não</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(25)">
<div class="allin-cover">
<div class="allin-cover-watermark">26</div>
<div class="allin-cover-header"><div class="allin-cover-badge">26</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Ranking</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(26)">
<div class="allin-cover">
<div class="allin-cover-watermark">27</div>
<div class="allin-cover-header"><div class="allin-cover-badge">27</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Duelo</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(27)">
<div class="allin-cover">
<div class="allin-cover-watermark">28</div>
<div class="allin-cover-header"><div class="allin-cover-badge">28</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Tela Dividida</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(28)">
<div class="allin-cover">
<div class="allin-cover-watermark">29</div>
<div class="allin-cover-header"><div class="allin-cover-badge">29</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Dinamismo</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(29)">
<div class="allin-cover">
<div class="allin-cover-watermark">30</div>
<div class="allin-cover-header"><div class="allin-cover-badge">30</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Trivial</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(30)">
<div class="allin-cover">
<div class="allin-cover-watermark">31</div>
<div class="allin-cover-header"><div class="allin-cover-badge">31</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Narrado</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(31)">
<div class="allin-cover">
<div class="allin-cover-watermark">32</div>
<div class="allin-cover-header"><div class="allin-cover-badge">32</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">The Office</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(32)">
<div class="allin-cover">
<div class="allin-cover-watermark">33</div>
<div class="allin-cover-header"><div class="allin-cover-badge">33</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Conversa no Carro</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(33)">
<div class="allin-cover">
<div class="allin-cover-watermark">34</div>
<div class="allin-cover-header"><div class="allin-cover-badge">34</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Série</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(34)">
<div class="allin-cover">
<div class="allin-cover-watermark">35</div>
<div class="allin-cover-header"><div class="allin-cover-badge">35</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Bastidores</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(35)">
<div class="allin-cover">
<div class="allin-cover-watermark">36</div>
<div class="allin-cover-header"><div class="allin-cover-badge">36</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Tela Verde</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(36)">
<div class="allin-cover">
<div class="allin-cover-watermark">37</div>
<div class="allin-cover-header"><div class="allin-cover-badge">37</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">IA Realista</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(37)">
<div class="allin-cover">
<div class="allin-cover-watermark">38</div>
<div class="allin-cover-header"><div class="allin-cover-badge">38</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Tutorial Falado</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(38)">
<div class="allin-cover">
<div class="allin-cover-watermark">39</div>
<div class="allin-cover-header"><div class="allin-cover-badge">39</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Corte YouTube</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(39)">
<div class="allin-cover">
<div class="allin-cover-watermark">40</div>
<div class="allin-cover-header"><div class="allin-cover-badge">40</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Troque Isso por Isso</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(40)">
<div class="allin-cover">
<div class="allin-cover-watermark">41</div>
<div class="allin-cover-header"><div class="allin-cover-badge">41</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">RayBan Meta</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(41)">
<div class="allin-cover">
<div class="allin-cover-watermark">42</div>
<div class="allin-cover-header"><div class="allin-cover-badge">42</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Interações na Rua</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(42)">
<div class="allin-cover">
<div class="allin-cover-watermark">43</div>
<div class="allin-cover-header"><div class="allin-cover-badge">43</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Entrevistas na Rua</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(43)">
<div class="allin-cover">
<div class="allin-cover-watermark">44</div>
<div class="allin-cover-header"><div class="allin-cover-badge">44</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Palestrinha</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(44)">
<div class="allin-cover">
<div class="allin-cover-watermark">45</div>
<div class="allin-cover-header"><div class="allin-cover-badge">45</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Áudio Viral Motivacional</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(45)">
<div class="allin-cover">
<div class="allin-cover-watermark">46</div>
<div class="allin-cover-header"><div class="allin-cover-badge">46</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Corte de Podcast Cinema</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(46)">
<div class="allin-cover">
<div class="allin-cover-watermark">47</div>
<div class="allin-cover-header"><div class="allin-cover-badge">47</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Filtros de Ranking</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(47)">
<div class="allin-cover">
<div class="allin-cover-watermark">48</div>
<div class="allin-cover-header"><div class="allin-cover-badge">48</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Tutorial em Texto</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(48)">
<div class="allin-cover">
<div class="allin-cover-watermark">49</div>
<div class="allin-cover-header"><div class="allin-cover-badge">49</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Unboxing</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(49)">
<div class="allin-cover">
<div class="allin-cover-watermark">50</div>
<div class="allin-cover-header"><div class="allin-cover-badge">50</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Trechos de Filmes</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(50)">
<div class="allin-cover">
<div class="allin-cover-watermark">51</div>
<div class="allin-cover-header"><div class="allin-cover-badge">51</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Papel e Caneta</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(51)">
<div class="allin-cover">
<div class="allin-cover-watermark">52</div>
<div class="allin-cover-header"><div class="allin-cover-badge">52</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Tela Dividida Vertical</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(52)">
<div class="allin-cover">
<div class="allin-cover-watermark">53</div>
<div class="allin-cover-header"><div class="allin-cover-badge">53</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Comparativo em Texto</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(53)">
<div class="allin-cover">
<div class="allin-cover-watermark">54</div>
<div class="allin-cover-header"><div class="allin-cover-badge">54</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Trabalho na Prática</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(54)">
<div class="allin-cover">
<div class="allin-cover-watermark">55</div>
<div class="allin-cover-header"><div class="allin-cover-badge">55</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Esquete</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(55)">
<div class="allin-cover">
<div class="allin-cover-watermark">56</div>
<div class="allin-cover-header"><div class="allin-cover-badge">56</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Rotina</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(56)">
<div class="allin-cover">
<div class="allin-cover-watermark">57</div>
<div class="allin-cover-header"><div class="allin-cover-badge">57</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">A, B, C, D e E</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(57)">
<div class="allin-cover">
<div class="allin-cover-watermark">58</div>
<div class="allin-cover-header"><div class="allin-cover-badge">58</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Vlog</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(58)">
<div class="allin-cover">
<div class="allin-cover-watermark">59</div>
<div class="allin-cover-header"><div class="allin-cover-badge">59</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Certo x Errado</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(59)">
<div class="allin-cover">
<div class="allin-cover-watermark">60</div>
<div class="allin-cover-header"><div class="allin-cover-badge">60</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Tela Dividida com Imagem</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(60)">
<div class="allin-cover">
<div class="allin-cover-watermark">61</div>
<div class="allin-cover-header"><div class="allin-cover-badge">61</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Animação Explicativa</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(61)">
<div class="allin-cover">
<div class="allin-cover-watermark">62</div>
<div class="allin-cover-header"><div class="allin-cover-badge">62</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Faz e Escreve</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(62)">
<div class="allin-cover">
<div class="allin-cover-watermark">63</div>
<div class="allin-cover-header"><div class="allin-cover-badge">63</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Chroma Key</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(63)">
<div class="allin-cover">
<div class="allin-cover-watermark">64</div>
<div class="allin-cover-header"><div class="allin-cover-badge">64</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Autoridade Roubada</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(64)">
<div class="allin-cover">
<div class="allin-cover-watermark">65</div>
<div class="allin-cover-header"><div class="allin-cover-badge">65</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">React Clássico</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(65)">
<div class="allin-cover">
<div class="allin-cover-watermark">66</div>
<div class="allin-cover-header"><div class="allin-cover-badge">66</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Diálogo de Gêmeos</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(66)">
<div class="allin-cover">
<div class="allin-cover-watermark">67</div>
<div class="allin-cover-header"><div class="allin-cover-badge">67</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Take + Vídeo Viral</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(67)">
<div class="allin-cover">
<div class="allin-cover-watermark">68</div>
<div class="allin-cover-header"><div class="allin-cover-badge">68</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Reunião Presencial</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(68)">
<div class="allin-cover">
<div class="allin-cover-watermark">69</div>
<div class="allin-cover-header"><div class="allin-cover-badge">69</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Análise</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(69)">
<div class="allin-cover">
<div class="allin-cover-watermark">70</div>
<div class="allin-cover-header"><div class="allin-cover-badge">70</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Analogia</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(70)">
<div class="allin-cover">
<div class="allin-cover-watermark">71</div>
<div class="allin-cover-header"><div class="allin-cover-badge">71</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Infográfico</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(71)">
<div class="allin-cover">
<div class="allin-cover-watermark">72</div>
<div class="allin-cover-header"><div class="allin-cover-badge">72</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Estático em Vídeo</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(72)">
<div class="allin-cover">
<div class="allin-cover-watermark">73</div>
<div class="allin-cover-header"><div class="allin-cover-badge">73</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">ASMR</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(73)">
<div class="allin-cover">
<div class="allin-cover-watermark">74</div>
<div class="allin-cover-header"><div class="allin-cover-badge">74</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Revelação no Papel</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(74)">
<div class="allin-cover">
<div class="allin-cover-watermark">75</div>
<div class="allin-cover-header"><div class="allin-cover-badge">75</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Para Isso, Indico Isso</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(75)">
<div class="allin-cover">
<div class="allin-cover-watermark">76</div>
<div class="allin-cover-header"><div class="allin-cover-badge">76</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Analogia em Texto</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(76)">
<div class="allin-cover">
<div class="allin-cover-watermark">77</div>
<div class="allin-cover-header"><div class="allin-cover-badge">77</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Significado nos Comentários</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(77)">
<div class="allin-cover">
<div class="allin-cover-watermark">78</div>
<div class="allin-cover-header"><div class="allin-cover-badge">78</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">3 Coisas, 3 Categorias</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(78)">
<div class="allin-cover">
<div class="allin-cover-watermark">79</div>
<div class="allin-cover-header"><div class="allin-cover-badge">79</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Bom e Ruim</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(79)">
<div class="allin-cover">
<div class="allin-cover-watermark">80</div>
<div class="allin-cover-header"><div class="allin-cover-badge">80</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Falado em Público</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(80)">
<div class="allin-cover">
<div class="allin-cover-watermark">81</div>
<div class="allin-cover-header"><div class="allin-cover-badge">81</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Comparativo Falado</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(81)">
<div class="allin-cover">
<div class="allin-cover-watermark">82</div>
<div class="allin-cover-header"><div class="allin-cover-badge">82</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Gêmea Boa e Ruim</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(82)">
<div class="allin-cover">
<div class="allin-cover-watermark">83</div>
<div class="allin-cover-header"><div class="allin-cover-badge">83</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Não Faça Isso, Faça Isso</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(83)">
<div class="allin-cover">
<div class="allin-cover-watermark">84</div>
<div class="allin-cover-header"><div class="allin-cover-badge">84</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Diálogo com Famoso</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(84)">
<div class="allin-cover">
<div class="allin-cover-watermark">85</div>
<div class="allin-cover-header"><div class="allin-cover-badge">85</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Fundo Narrativo em Destaque</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(85)">
<div class="allin-cover">
<div class="allin-cover-watermark">86</div>
<div class="allin-cover-header"><div class="allin-cover-badge">86</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Trigêmeos</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(86)">
<div class="allin-cover">
<div class="allin-cover-watermark">87</div>
<div class="allin-cover-header"><div class="allin-cover-badge">87</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Se Você Quer Isso, Faça Isso</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(87)">
<div class="allin-cover">
<div class="allin-cover-watermark">88</div>
<div class="allin-cover-header"><div class="allin-cover-badge">88</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Bastidores dos Conteúdos</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(88)">
<div class="allin-cover">
<div class="allin-cover-watermark">89</div>
<div class="allin-cover-header"><div class="allin-cover-badge">89</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Antes e Depois Lo-fi</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(89)">
<div class="allin-cover">
<div class="allin-cover-watermark">90</div>
<div class="allin-cover-header"><div class="allin-cover-badge">90</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Narrado com IA</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(90)">
<div class="allin-cover">
<div class="allin-cover-watermark">91</div>
<div class="allin-cover-header"><div class="allin-cover-badge">91</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">React na TV</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(91)">
<div class="allin-cover">
<div class="allin-cover-watermark">92</div>
<div class="allin-cover-header"><div class="allin-cover-badge">92</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Antes e Depois em Texto</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(92)">
<div class="allin-cover">
<div class="allin-cover-watermark">93</div>
<div class="allin-cover-header"><div class="allin-cover-badge">93</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Pergunta e Responde</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(93)">
<div class="allin-cover">
<div class="allin-cover-watermark">94</div>
<div class="allin-cover-header"><div class="allin-cover-badge">94</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Conversa de Bar</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(94)">
<div class="allin-cover">
<div class="allin-cover-watermark">95</div>
<div class="allin-cover-header"><div class="allin-cover-badge">95</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Narrador</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(95)">
<div class="allin-cover">
<div class="allin-cover-watermark">96</div>
<div class="allin-cover-header"><div class="allin-cover-badge">96</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Telepatia</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(96)">
<div class="allin-cover">
<div class="allin-cover-watermark">97</div>
<div class="allin-cover-header"><div class="allin-cover-badge">97</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">UGC em Primeira Pessoa</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(97)">
<div class="allin-cover">
<div class="allin-cover-watermark">98</div>
<div class="allin-cover-header"><div class="allin-cover-badge">98</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">UGC em Terceira Pessoa</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(98)">
<div class="allin-cover">
<div class="allin-cover-watermark">99</div>
<div class="allin-cover-header"><div class="allin-cover-badge">99</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Google Meet</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
<div class="allin-card allin-card-cover" onclick="allinOpen(99)">
<div class="allin-cover">
<div class="allin-cover-watermark">100</div>
<div class="allin-cover-header"><div class="allin-cover-badge">100</div><div class="allin-cover-tag">Formato</div></div>
<div class="allin-cover-footer"><div class="allin-cover-name">Lista</div><div class="allin-cover-cta"><span>Ver formato</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
</div></div>
</div>
<div class="allin-buttons-grid">
<a href="#" target="_blank" rel="noopener noreferrer" class="allin-btn allin-btn-swipe">
<div class="allin-btn-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h4l2 2h7A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-10z"/><path d="M7 12h10M7 15.5h6"/></svg></div>
<div class="allin-btn-text">
<div class="allin-btn-title">Swipe Files</div>
<div class="allin-btn-sub">Biblioteca de referências</div>
</div>
</a>
<a href="#" target="_blank" rel="noopener noreferrer" class="allin-btn allin-btn-whats">
<div class="allin-btn-icon-wrap"><svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.379.692 4.595 1.886 6.466L4 29l7.752-1.852A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16.001 3zm0 21.818c-1.755 0-3.4-.473-4.815-1.296l-.345-.205-4.082.975.965-3.987-.224-.357A9.764 9.764 0 0 1 6.182 15c0-5.42 4.4-9.818 9.819-9.818 5.42 0 9.818 4.4 9.818 9.818 0 5.42-4.4 9.818-9.818 9.818zm5.39-7.347c-.295-.148-1.746-.862-2.017-.96-.27-.099-.467-.148-.665.148-.197.295-.762.96-.935 1.158-.172.197-.345.222-.64.074-.295-.148-1.247-.46-2.376-1.466-.878-.783-1.47-1.75-1.643-2.045-.172-.295-.018-.455.13-.602.133-.132.295-.345.443-.517.148-.172.197-.295.295-.492.099-.197.05-.37-.025-.517-.074-.148-.665-1.605-.911-2.198-.24-.578-.484-.5-.665-.51l-.566-.01c-.197 0-.517.074-.787.37-.27.295-1.034 1.01-1.034 2.463 0 1.454 1.058 2.858 1.205 3.054.148.197 2.083 3.181 5.045 4.46.706.305 1.256.487 1.685.624.708.225 1.353.193 1.863.117.568-.085 1.746-.713 1.991-1.4.246-.689.246-1.28.172-1.4-.074-.122-.27-.197-.566-.345z"/></svg></div>
<div class="allin-btn-text">
<div class="allin-btn-title">Grupo de Alunos</div>
<div class="allin-btn-sub">Comunidade no WhatsApp</div>
</div>
</a>
<a href="#" target="_blank" rel="noopener noreferrer" class="allin-btn-premium">
<div class="allin-btn-premium-content">
<div class="allin-btn-premium-brand">
<svg class="allin-btn-premium-logo" viewBox="0 0 200 75" xmlns="http://www.w3.org/2000/svg">
<text x="100" y="55" text-anchor="middle" font-family="Brush Script MT, cursive" font-size="56" font-weight="400" fill="currentColor" font-style="italic">All In</text>
</svg>
<div class="allin-btn-premium-tag">SERVIÇO</div>
</div>
<div class="allin-btn-premium-headline">Conta com a gente</div>
<div class="allin-btn-premium-desc">Nossa equipe escolhe os formatos certos pro seu perfil, edita, acompanha os dados e ajusta a estratégia com você.</div>
<div class="allin-btn-premium-cta"><span>Falar com a equipe</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg></div>
</div>
</a>
</div>

<div class="allin-modal" id="allinModal">
<div class="allin-modal-overlay" onclick="allinClose()"></div>
<div class="allin-modal-box">
<button class="allin-modal-close" onclick="allinClose()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6L6 18M6 6l12 12" stroke-linecap="round"/></svg></button>
<div class="allin-modal-header"><div class="allin-modal-badge" id="aMB">01</div><h2 class="allin-modal-title" id="aMT"></h2></div>
<p class="allin-modal-desc" id="aMD"></p>
<div class="allin-modal-video-container"><iframe id="aMI" src="" frameborder="0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe></div>
<div class="allin-modal-dots" id="aDots"><span class="allin-dot allin-dot-active"></span><span class="allin-dot"></span><span class="allin-dot"></span><span class="allin-dot"></span><span class="allin-dot"></span></div>
<div class="allin-modal-tabs"><button class="allin-tab allin-tab-active" onclick="allinSwitch(1)">Exemplo 1</button><button class="allin-tab" onclick="allinSwitch(2)">Exemplo 2</button><button class="allin-tab" onclick="allinSwitch(3)">Exemplo 3</button><button class="allin-tab" onclick="allinSwitch(4)">Exemplo 4</button><button class="allin-tab" onclick="allinSwitch(5)">Exemplo 5</button></div>
</div>
</div></div>`;
  var style=document.createElement('style');
  style.textContent=css;
  document.head.appendChild(style);
  target.innerHTML=html;
  // JS de comportamento
  var allinFormats=[{"n":"01","t":"Cinema","d":"O vídeo é editado no formato horizontal, remetendo a uma tela de cinema, com bordas arredondadas aplicadas na edição. Pode ter legendas minimalistas, elaboradas ou nenhuma. É possível adicionar camadas visuais que conversam com o que está sendo dito, criando profundidade e enriquecendo a narrativa. Um formato que eleva a percepção de valor e transforma qualquer mensagem em uma experiência visual marcante.","v":["1xbTFTgZBOaGH4YjKGgD8pN4fP5umfZQM","1mC7a4b1FR78Zksx_FVtjZKVtobiA-Xxh","1WTZkEwnTC3tZ9ctjj0_FLiY4FnI6A0SQ","",""]},{"n":"02","t":"Caixinha de Perguntas","d":"O criador responde a uma pergunta exibida na parte superior do vídeo, simulando a caixinha de perguntas do Instagram. A edição é simples, sem elementos visuais elaborados e no máximo uma legenda do que está sendo respondido. O segredo desse formato está na pergunta: quanto mais polêmica ou provocativa, maior o potencial de engajamento e alcance.","v":["1huH29TJiGCO1-xwPCny7qFG1vQlXrxVw","1DhXc9mCbUAp7pnOYWKeoXUuLYpM_CrJe","","",""]},{"n":"03","t":"Bate-bola","d":"O criador aparece ao lado de um coadjuvante que apresenta situações rápidas, uma após a outra, enquanto o especialista responde de forma objetiva escolhendo entre duas opções. O formato é extremamente dinâmico e funciona muito bem por despertar curiosidade sobre o que vem a seguir. Quanto mais diretas e sem rodeios forem as respostas, melhor performa.","v":["1XNLtKdKIGD5YQzAaYMU98U-FhSRZDSoa","","","",""]},{"n":"04","t":"Central do Atendimento","d":"Uma pessoa liga para o criador pedindo ajuda com uma dor específica. Essa pessoa pode ser um coadjuvante, um amigo ou o próprio criador interpretando um personagem. O criador atende como se fosse um suporte, resolvendo o problema durante a ligação. O formato usa a familiaridade da situação para prender a atenção e entregar valor de forma dinâmica e envolvente.","v":["1dsvXu4AyezFaOGE1iL9vRIhJi8FNFGpP","","","",""]},{"n":"05","t":"Reels Dark Clássico","d":"Utiliza um vídeo ou take viral como pano de fundo e coloca uma headline impactante na parte superior. Quanto mais forte e provocativa a headline, melhor o vídeo performa. O formato pode ter tanto um tom de meme quanto inspiracional. Na parte inferior fica o nome do expert, o @ e a foto, como uma espécie de assinatura do conteúdo.","v":["1qHo-Ff1FVgaT8w5yC6WFXDaDbj5CN8bu","1WXe6yzUtaneggWvlTZSyFgF5thpCh5ox","","",""]},{"n":"06","t":"Reels Dark Tela Dividida","d":"Funciona como o reels dark clássico, mas com a tela dividida na horizontal. Na parte superior fica o vídeo ou take viral e na parte inferior uma foto do criador que condiz com o conteúdo. No meio das duas telas fica a headline que conecta os dois elementos. O @ do criador aparece como assinatura. É um formato poderoso para viralizar e ao mesmo tempo fixar a imagem do criador na cabeça de quem assiste.","v":["1zjbHLWSWeAw3pHN7bXMWRCwNBpsa18fY","1jqvb8Dy9QsxD4vNBO5dlG85urzX42Jbz","","",""]},{"n":"07","t":"Corte de Podcast","d":"Um trecho extraído de um podcast onde o criador responde a uma pergunta ou desenvolve um raciocínio de forma aprofundada. Pode aparecer apenas o criador falando ou o entrevistador fazendo a pergunta antes da resposta, o que torna o conteúdo ainda mais dinâmico. É um formato excelente para gerar autoridade pois posiciona o criador como especialista sendo entrevistado, transmitindo credibilidade de forma natural. Funciona muito bem com trechos polêmicos, reveladores ou que gerem identificação imediata.","v":["1kymHfW545TZIBUn3TRuXnFSJum72dbA7","1IsiLFY6YPcSO84-CLY-UFfcYmJZmneAd","12QW2xXH8_DDbb0QcRiNWXP-n7a6LVdnL","",""]},{"n":"08","t":"Entrevista","d":"Uma pessoa faz uma pergunta ao criador, abrindo espaço para uma resposta mais aprofundada e desenvolvida. O entrevistador pode ou não dar uma réplica ao final, comentando ou reagindo à resposta. A câmera foca sempre em quem está falando, o que torna o conteúdo mais dinâmico e mantém a atenção de quem assiste. É um formato que gera autoridade de forma natural, pois coloca o criador no papel de quem é procurado para falar sobre o assunto.","v":["1xOmNriK_ekL0BoON3jvKHxK4p10OYNg4","","","",""]},{"n":"09","t":"Musical","d":"O criador explica um assunto através de uma música gerada por IA. O ouro do formato está no áudio, a letra precisa ser envolvente e precisa. As imagens que aparecem no vídeo conversam com o que está sendo cantado, criando uma experiência visual e sonora integrada.","v":["14zCFrJjbh52wHTNHaFUjjrTZQGmhiRoH","","","",""]},{"n":"10","t":"Corte de Palestra","d":"Um trecho extraído de uma palestra do criador, editado para destacar um momento de alto impacto e valor. Quanto mais revelador ou transformador o trecho, melhor o resultado. Uma boa música de fundo potencializa o efeito. É um formato excepcional para criadores que palestram, pois gera autoridade de forma imediata e posiciona o criador como referência no seu nicho.","v":["1uGYq6W4RVRQy_d8llZJY-_k0NIGgWvJi","1IGqPUuiM6bxjUWhR03PCndVG7WYFIl1E","","",""]},{"n":"11","t":"Quadro Branco","d":"O criador dá uma espécie de aula escrevendo em um quadro branco com canetão enquanto explica o conteúdo. Pode olhar diretamente para a câmera como se estivesse explicando para o viewer, ou ignorar completamente a câmera como se estivesse explicando para outra pessoa presente na cena. É um formato que transmite didatismo e autoridade de forma natural, como se o espectador estivesse assistindo a uma aula ao vivo.","v":["1gGExNRFFCQ6RFExd9rw-2w50mR6I6yHV","1KI0XBohRe-UmD5BUv76QQA7yzsn2THtf","1o595NDByCA7zPquNFY7Tp7cFMqZBSYxn","",""]},{"n":"12","t":"Clone","d":"O criador aparece duas vezes na mesma tela, como se tivesse sido clonado. Cada clone representa um lado de uma dualidade, como certo e errado, bom e ruim. Os dois alternam falas durante o vídeo, onde um age de uma forma e o outro age de forma oposta. É um formato que gera identificação imediata por mostrar dois comportamentos contrastantes de forma visual e dinâmica.","v":["13ysP240BrMPbRVjXNUD4TcUEq2WYkGsv","12kuR4ZPh-97p5cQeJWrEaLFDe8PEE1Cm","122QwSe-HxsSshfpgMRmpjjboXPNKbON4","",""]},{"n":"13","t":"Edição PRO","d":"O criador fala, mas a mágica está na edição. Letterings, legendas dinâmicas, b-rolls com takes de filmes, sons estratégicos, recortes e prints na tela e uma trilha sonora envolvente transformam o conteúdo em uma experiência visual de altíssimo nível. É um formato que eleva a percepção de valor e prende a atenção do início ao fim.","v":["1MSKh08zyZGs7HPoZ8NCUrOKOWRH615U4","","","",""]},{"n":"14","t":"Lo-fi Estático","d":"Um formato democrático e acessível. O criador apoia a câmera em algum lugar e fala, sem edição elaborada e sem produção complexa. O que sustenta o vídeo é a força da mensagem. Pode ter legenda ou não, pode conter uma headline de impacto ou não, pode ter música de fundo ou não. Aqui a simplicidade é a estratégia e o poder está no que é dito.","v":["1vfWThWe_fB7QjV9W9i6X0eNmSZ9qAs8m","1uBejsITn_T7g12-7maI4mvc53pUkWAYj","1VRY4jwTkvd5S5S0wQp48BywE15m3J9u3","17E2iY4ACB348MuwsX0fXmJWxsccMPb-h",""]},{"n":"15","t":"Lo-fi Modo Selfie","d":"O criador liga o modo selfie e fala diretamente para a câmera segurando o celular. Sem edição elaborada, sem produção complexa. O que sustenta o vídeo é a força da mensagem. Pode ter legenda ou não, pode abrir com uma headline de impacto ou ir direto ao ponto, pode ter música de fundo ou não. Transmite proximidade e autenticidade por ser gravado na perspectiva do criador.","v":["1MaA4CQ3Bvyr3_-qm2uCwHIJ6AQq3vNKx","1Hp-gZG5HQWJy427VlPxR0MgFfbBUCcWG","","",""]},{"n":"16","t":"Reunião Online","d":"O criador aparece na frente do computador ou tablet como se estivesse em uma reunião online com um mentorado. A câmera capta essa cena de forma natural e o criador entrega uma mensagem de valor como se estivesse orientando alguém na prática. É um formato que gera autoridade de forma sutil, pois mostra o criador no exercício do seu trabalho, sem precisar declarar isso explicitamente.","v":["1lZwkwsmjiXD59jt9EIDjddbh63thCsZM","","","",""]},{"n":"17","t":"POV Falado","d":"O criador se coloca em uma cena e fala diretamente para a câmera como se o viewer estivesse vivendo aquele momento junto com ele. O POV é declarado no início do vídeo, geralmente em texto na tela, e o que vem depois é o criador dentro daquela situação. Pode mostrar uma conquista, uma dor, um bastidor ou uma virada. Pode ser também mais descontraído, onde o criador interpreta um personagem relacionado ao seu nicho. Quanto mais o viewer se identificar com o cenário, mais o vídeo performa.","v":["1ss5uMqUPbyJ_GFFiTH7egYwyVV5VDGyK","1E34UcT6V73eiqeIdZuy_vJiGCZltjvst","1SfU-cWRwb9c57YgwmkQYbqZoZcToGrsn","1SAMM1lhlE0N7Ns1Vqc9_O9WJ8BgTrtEC",""]},{"n":"18","t":"Aula no iPad","d":"O criador explica um conteúdo enquanto desenha ou escreve no iPad em tempo real. A tela é dividida na horizontal com o criador em uma metade e o que está sendo produzido no tablet na outra. A legenda fica no meio, entre as duas telas. É um formato didático e envolvente que prende a atenção por mostrar o raciocínio do criador sendo construído ao vivo.","v":["1jBUgr8yqydrizdCaQ-iX7WT9iSshCKAp","11fsxX2YkTtxy_Lfgwd-zgSTIRWIPeT_I","","",""]},{"n":"19","t":"POV em Texto","d":"O POV é declarado em texto na tela e o que vem depois são takes do criador dentro daquela situação, sem narração. Uma música envolvente carrega o vídeo do início ao fim. Quanto mais cinematográficos e autênticos os takes, mais imersiva a experiência.","v":["1vxIOsHbnNQyBcbCYZTSvP4y-xK5kKuu3","","","",""]},{"n":"20","t":"Texto na Tela","d":"O conteúdo é entregue inteiramente em texto que vai aparecendo na tela ao longo dos takes do criador, sem nenhuma fala. Uma música de fundo conduz o ritmo do vídeo. O viewer lê enquanto assiste, tornando o consumo rápido e fluido. É um formato excelente para conteúdos reflexivos.","v":["1LYAKLwMnFtvm-0-aU1R5G0jgxXWuG2AT","1HSlSq98aKBkn7TihYIIpW7wpprhO1nQX","","",""]},{"n":"21","t":"Leia a Legenda","d":"O vídeo abre com um gancho em texto na tela, geralmente uma situação hipotética ou um número chamativo, que direciona o viewer a ler a legenda. Um take de fundo sustenta a atenção enquanto o conteúdo principal está na legenda. O vídeo deve ter menos de 7 segundos, o suficiente para entregar o gancho e empurrar o viewer para a legenda. É um formato que funciona muito bem para listas e conteúdos educativos, pois combina o alcance do vídeo com a profundidade do texto.","v":["1Sl64QXnU3R_PDrPeS7XJ4nt7kU9LbAVu","1W0IuTTo0rhAltk6nMR4xUCSLTwzpawAG","1x-2gC9GHRa2tdOScJ11ckXtEja9PdD1K","",""]},{"n":"22","t":"Texto Minimalista","d":"Um texto curto e impactante aparece sobre takes cinematográficos de fundo. Sem fala, sem elementos visuais extras. O que sustenta o formato é a qualidade dos takes e uma trilha sonora que esteja em total harmonia com a mensagem. Quando esses três elementos se alinham, o resultado é um conteúdo elegante e marcante.","v":["1GQ81xBgnkMghCXU2gwpjKqWyAZ0-ofdT","1T2alROz97qH4rrtzlpvSsM1TEZIHPZck","","",""]},{"n":"23","t":"Tierlist","d":"O criador escolhe um tema central e cria categorias personalizadas para classificar itens relacionados a esse tema. Ao longo do vídeo ele vai encaixando cada item em uma categoria, explicando o raciocínio. É um formato dinâmico, divertido e que gera muito engajamento, pois provoca o viewer a concordar ou discordar das escolhas feitas.","v":["1om-r5fTipux05Fsu4TTnNiyQYnjKyf7k","1smC80utMlcgsyF-ZivBCqL-xgwfirP2e","","",""]},{"n":"24","t":"Animação","d":"Animações simples, objetivas e visualmente intuitivas que transmitem uma ideia ou provocam uma reflexão sem precisar de palavras. O poder do formato está na clareza da mensagem visual, o viewer entende a proposta em segundos. Funciona muito bem para comparativos, conceitos e verdades que são mais fáceis de mostrar do que de explicar.","v":["1hNGtaJHjvUpOxC_ckom1eqDvNmQiQJka","1oEmY4uH30wgFG_EiA1stx6r242bhEVCP","","",""]},{"n":"25","t":"Sim ou Não","d":"Uma voz de fundo apresenta itens relacionados a um tema central e o criador responde sim ou não, justificando rapidamente cada escolha. Imagens dos itens aparecem na tela para dar dinamismo e contextualizar o viewer. É um formato ágil, opinativo e que gera muito engajamento por provocar concordância ou discordância de quem assiste.","v":["1YuNTpO-54XUViPaQOEmhfrQyndGSxM8I","","","",""]},{"n":"26","t":"Ranking","d":"Define-se um número para o ranking e uma voz de fundo vai apresentando os itens um a um. O criador posiciona cada item sem saber o que vem a seguir, o que torna o formato imprevisível e divertido. A graça está exatamente nisso: o ranking vai sendo montado ao vivo, sem ordem pré-definida, gerando reações genuínas e mantendo o viewer curioso até o fim.","v":["1ZxR0X1lW4wYZx83G6KzvfGJOejtNyqlz","1Ec0We-BX-NbSmmbuX30cizIbdp9ww3Hr","","",""]},{"n":"27","t":"Duelo","d":"Define-se um tema central e a voz de fundo apresenta dois itens que disputam entre si. O criador escolhe um vencedor e esse item permanece na disputa, enfrentando o próximo que a voz de fundo trouxer. Assim vai até acabarem os itens e restar apenas um campeão. É um formato dinâmico e viciante que mantém o viewer engajado até o fim.","v":["11oIV-kZaAdF9v8ZoRE7-kbeUSpXTFyyu","1hrEmChc71beZTJm3p2yUXrlaO0fI0iZ9","","",""]},{"n":"28","t":"Tela Dividida","d":"A tela é dividida na horizontal com o criador falando na parte inferior e imagens que conversam com o conteúdo aparecendo na parte superior. Essas imagens podem ser de filmes, famosos, outros vídeos ou qualquer referência visual que reforce o que está sendo dito. Pode ter uma headline fixa ao centro ou apenas no início para prender a atenção. É um formato que enriquece a narrativa visualmente e mantém o viewer estimulado durante toda a fala.","v":["1M2PfaFkgDPysuR7wFGJ4WkDlUIWtODER","1wwuit7Y7C91343Yq8NbbKhXykf7jvZGX","","",""]},{"n":"29","t":"Dinamismo","d":"O criador usa todos os recursos disponíveis para tornar o vídeo visualmente imprevisível e envolvente. Mudanças de ângulo, troca de cenários, fantasias, objetos que ilustram o que está sendo dito, outros personagens e diferentes estilos de gravação. Tudo acontece de forma rápida e inesperada, criando um conteúdo que prende a atenção do início ao fim. O segredo do formato está na criatividade da execução.","v":["1x3oGPqA_WcAC2rr8rBQbr1elR0i-OvFf","1tbAqgx3ynwMYGQ7R7ifE06mNkeXJ8fi5","1cyn21I6j48jbFt53bYx8dqlh9_AhE8sX","",""]},{"n":"30","t":"Trivial","d":"O criador faz algo aleatório do dia a dia enquanto fala, descascar uma fruta, tirar o esmalte, dobrar roupas, preparar um café. A ação não tem relação com o conteúdo, ela existe para criar uma sensação de naturalidade e proximidade. É um formato que transmite autenticidade e faz o viewer sentir que está tendo uma conversa informal com o criador.","v":["1SU8nidu_aKxTG6MLBzN4lzieLy1upBDi","1NP3fIBrqA8BX1jXNaBvsqAUe3LeltkZv","","",""]},{"n":"31","t":"Narrado","d":"O criador narra em voz off enquanto takes ilustram o que está sendo dito. Pode ser uma experiência que viveu, uma mensagem que quer passar ou até mesmo algo que está fazendo naquele momento. O criador não aparece falando diretamente para a câmera. O conteúdo se sustenta pela força da narrativa e pela qualidade dos takes escolhidos.","v":["19WEWVbPQF7twcLDV9x969VsFg1ju02xU","1rdk88UiqP-VXHYR5HUBuIMc3grV6fh94","1rWhJZZ8petFsjMxtrPmjlm-vDhtEvQWU","",""]},{"n":"32","t":"The Office","d":"Simula o estilo de falso documentário, onde o criador olha diretamente para a câmera como se estivesse num confessionário comentando uma situação do dia a dia. O tom é irônico, exagerado ou bem-humorado. É um formato que humaniza o criador e cria proximidade com o viewer de forma leve e divertida.","v":["1iDSjnQ4dBqP8qNBzV6-GCpk4RWgOlxD5","1MQKa-aViYPLap3DspzjNS9lO-KIi5MoT","","",""]},{"n":"33","t":"Conversa no Carro","d":"O criador grava dentro do carro e fala diretamente para a câmera. Com o carro parado, a gravação pode ser em selfie. Em movimento o celular pode ficar fixo no suporte ou ser segurado por um copiloto. É um dos formatos mais naturais e descompromissados, o ambiente do carro cria uma sensação de conversa íntima que aproxima o criador do viewer.","v":["1TGfU7i8DTAY7r0Ol5QQhIhVvdJnJz0J3","1DBAt7vBq_3nU1ZYrFF47e7bcZPhMNSfw","1aj8-5aaAprBtMxc1lQOzPJVz_vnLIgDG","",""]},{"n":"34","t":"Série","d":"O conteúdo é apresentado como um episódio de uma série, com numeração na tela indicando em qual parte o viewer está. É um formato que cria hábito de consumo, fideliza o viewer e constrói um arco narrativo ao longo do tempo.","v":["1WT590vkA-HddNWUy7jVl0fzGLTcHb0FK","","","",""]},{"n":"35","t":"Bastidores","d":"O criador abre as portas do seu negócio e mostra o que acontece por trás das câmeras. Decisões, situações reais, aprendizados e momentos do dia a dia da operação. É um formato muito poderoso para empresários pois humaniza a marca, gera identificação e constrói autoridade de forma genuína, sem precisar parecer que está tentando impressionar.","v":["1qxt81Vqvk2P--LNOyk1sUAErAn93luKE","","","",""]},{"n":"36","t":"Tela Verde","d":"O criador usa o chroma key para aparecer sobre imagens ou vídeos inseridos na edição. Pode ser usado para reagir a um conteúdo que aparece ao fundo ou ilustrar o que está sendo dito com imagens e referências visuais na tela. É um formato extremamente versátil que enriquece visualmente qualquer tipo de conteúdo.","v":["1rk3LBx9To-kbnHYVj2qiCbMGCV5zSU_0","1iZTqpVW-kXd9piJq74Whmypgp7gfp04y","1Ww7XTmrdSgbAp66n9_OX8u6NgOwtwJIM","",""]},{"n":"37","t":"IA Realista","d":"Vídeos gerados por inteligência artificial com aparência realista. O conteúdo é produzido inteiramente por IA, sem necessidade de gravação tradicional. É um formato inovador que chama atenção pela novidade e pelo nível de realismo que a tecnologia já permite entregar.","v":["12lMI9DgT5tCdXCrTm5ba6C7RWOD3bL73","1dZz0bQ6cUzqRqf5ce2rfQOdxGi5QyMBj","","",""]},{"n":"38","t":"Tutorial Falado","d":"O criador mostra na prática como fazer algo, começando com um gancho que prende a atenção. O conteúdo é entregue de forma direta e didática, com o criador falando enquanto demonstra o passo a passo. É um formato que gera muito valor e posiciona o criador como referência no que ensina.","v":["1sVVH1-4ZUB1PmuV3I7cimHa3zrZU7zU9","1fy0pue1Cuf3Yh97QnfR7MeZRe8lC97pg","","",""]},{"n":"39","t":"Corte YouTube","d":"Um trecho extraído de um vídeo longo do YouTube do criador. Aproveita-se um momento de alto valor ou impacto para distribuir no formato curto. Pode ter uma headline para potencializar o desempenho. É uma forma inteligente de reaproveitar conteúdo já produzido e ampliar o alcance do que foi dito.","v":["1jpM4vf_Rdv4s3e-XHW_Fwo6UasfZJVkD","","","",""]},{"n":"40","t":"Troque Isso por Isso","d":"O criador apresenta trocas que devem ser feitas, usando as mãos para dar dinamismo à fala. Na edição aparecem elementos visuais que reforçam o que está sendo dito. É um formato direto e de fácil consumo que gera identificação imediata por mostrar comportamentos ou hábitos que o viewer pode substituir na prática.","v":["1H_nwFdVJih_yiYONo4C_w8h-b_iVIZuT","","","",""]},{"n":"41","t":"RayBan Meta","d":"O criador grava usando os óculos RayBan Meta, que captam tudo pela perspectiva do seu próprio olhar. O viewer vive a experiência como se fosse o próprio criador, vendo a rotina, momentos do dia, interações e situações do jeito que o criador vê. É um formato que gera imersão e proximidade de forma muito natural e autêntica.","v":["1xxGq2q45UCJCfVUV8Qm1KxTqK-O53qIu","1bdGFri9VKa-yRQfAAuNHUnoTazOEClgz","","",""]},{"n":"42","t":"Interações na Rua","d":"O criador vai até pessoas na rua e propõe situações, desafios ou pedidos inusitados enquanto uma câmera acompanha tudo. As reações genuínas das pessoas são o coração do formato. Ver pessoas reais em situações inesperadas é o que torna o conteúdo altamente assistível e compartilhável.","v":["12Y5kWaNY4JnD0aVxCR04Mv2Ms_hkg_iK","1t_Lhuz2ycyq1YHK28laPgKbArvaPq88t","1cIhFqMbCR7hdP4LBft3IW4sEzFeUdOrU","",""]},{"n":"43","t":"Entrevistas na Rua","d":"O criador aborda pessoas na rua e faz perguntas sobre um tema central. Pode entrevistar uma única pessoa ou várias ao longo do mesmo vídeo. As respostas reais e espontâneas são o que torna o formato envolvente.","v":["1hnEpGy05KCcWZ6_PBLzxIzDLKsXlvr9m","1DzV99WeqqKbh7UizRnB8BKIdcugp2DGq","1hTJtPTFXJqGVTwErFHVcZ-aywu1j2VpZ","",""]},{"n":"44","t":"Palestrinha","d":"O criador apresenta um conteúdo usando slides exibidos no computador ou na TV, simulando uma palestra. O formato combina a autoridade de uma apresentação estruturada com a informalidade de um vídeo curto. É dinâmico, didático e funciona muito bem para listas, conceitos e conteúdos que se beneficiam de apoio visual.","v":["1TsObrABC_wBQFCX4CErrdkRK7KrdHBHi","1jI46IHTe_8O0-kJzDIb0hQtXB2u2Un4g","16CJcx6KJi__4G6fhwvL_8VfbgJMmPRQL","1Xr3MVWuGe2uB4aIFUjcExBXqKavC45Af","1qFzJDAeVx4iYS--tIjZNYNIO5tbp2Eu1"]},{"n":"45","t":"Áudio Viral Motivacional","d":"O criador aparece em um take enquanto um áudio motivacional viral toca de fundo. A força do formato está na combinação entre a imagem do criador e uma fala ou mensagem. Quando o áudio ressoa com o posicionamento do criador, o conteúdo ganha autoridade e identificação de forma imediata.","v":["1MXS2kMdDXxaEKPx07-k5vDiqIX9VH46-","","","",""]},{"n":"46","t":"Corte de Podcast Cinema","d":"Um corte de podcast editado com bordas arredondadas, legendas dinâmicas com fontes variadas e efeitos visuais que elevam a produção. É a combinação da autoridade do formato podcast com a estética cinematográfica, tornando o conteúdo mais impactante e visualmente marcante.","v":["1NThxn3YrOpnqxaCe49U5zzDJShiL4syR","16NrzNjt6GATpql-UBUGq5T0oeI7o5XoZ","","",""]},{"n":"47","t":"Filtros de Ranking","d":"O criador usa filtros de ranking disponíveis dentro do próprio TikTok para classificar itens em tempo real, sem saber qual vem a seguir. Os filtros precisam ser pesquisados na plataforma, pois existem milhares de opções. É um formato nativo do TikTok, dinâmico e divertido.","v":["14mzpKugF8yAsE8fEP-mbpJmY9VhEUx0L","","","",""]},{"n":"48","t":"Tutorial em Texto","d":"O criador ensina como fazer algo sem precisar falar. As instruções aparecem escritas na tela ao longo dos takes de apoio que ilustram o passo a passo. É um formato acessível e de fácil consumo, ideal para quem prefere ensinar sem aparecer falando diretamente para a câmera.","v":["1UmFSOM_7OwU7zybjMv1u-JyJu1H9Wefs","","","",""]},{"n":"49","t":"Unboxing","d":"O criador abre um produto na câmera e o apresenta. Pode falar sobre ele ou deixar a experiência visual falar por si. É um formato que gera curiosidade e proximidade, pois o viewer acompanha o momento junto com o criador.","v":["1XrYGS39FfV2fB3h9ABbknlZsnbWe22s7","1NxNlXpIhnBI0f39oR2CbfdUL-yOMAUBp","","",""]},{"n":"50","t":"Trechos de Filmes","d":"Cenas marcantes de filmes que carregam uma reflexão poderosa. O trecho escolhido fala por si, sem necessidade de muita edição. O segredo está na curadoria, quanto mais a cena ressoar com o público, maior o impacto e o alcance do conteúdo.","v":["1kTAYx8Mwi_kjuo0OYJTyR4F4HSgK4TZy","","","",""]},{"n":"51","t":"Papel e Caneta","d":"O criador explica um assunto escrevendo em papel com caneta em tempo real. Pode aparecer no vídeo ou mostrar apenas as mãos e o papel. É um formato simples e didático que transmite clareza e proximidade, como se o criador estivesse explicando algo pessoalmente para o viewer.","v":["1DDl7-a8jg7cJHKj4tC7YQmV8_9VTDsUV","","","",""]},{"n":"52","t":"Tela Dividida Vertical","d":"Uma headline impactante aparece na parte superior do vídeo. Abaixo, a tela é dividida na vertical com o criador falando do lado esquerdo e uma imagem que remete ao assunto do lado direito. Na parte inferior fica o @ do criador como assinatura. A imagem de apoio reforça visualmente a mensagem e torna o conteúdo mais dinâmico e chamativo.","v":["1V3jrXRzl6youC7odF-GqaYouiMRKm1Qb","","","",""]},{"n":"53","t":"Comparativo em Texto","d":"Dois elementos são comparados lado a lado com textos na tela. Sem necessidade de fala, o conteúdo se sustenta pelos textos e pela força do comparativo.","v":["1q_f5PPLdt6CW2EHp6n3pw7cAhHncA_jN","","","",""]},{"n":"54","t":"Trabalho na Prática","d":"O criador grava a si mesmo exercendo seu trabalho no dia a dia, seja atendendo um cliente, realizando um procedimento ou executando qualquer atividade da sua área. É um formato que gera autoridade de forma genuína, pois mostra o criador em ação sem precisar declarar sua competência.","v":["1akSkhJ9D7t7fupYc5aSMM0bZ2hMMCcGK","","","",""]},{"n":"55","t":"Esquete","d":"Uma cena curta e bem humorada que exagera a dor ou o problema do público. O criador interpreta personagens dentro de uma situação cômica relacionada ao seu nicho. O humor é o que prende a atenção e cria identificação, tornando a mensagem muito mais fácil de consumir e compartilhar.","v":["1eB7BYyT-sMj0XgwcEmtBFPKmPLcJxRWm","1COku5LOjgM4ysLR_iTu5f2A7hdDj6dtm","1Ea_PgQjnJpavQNuQQTB7MblVRdjoImag","",""]},{"n":"56","t":"Rotina","d":"O criador mostra o seu dia do início ao fim, com takes do que acontece ao longo das horas. É um formato que gera proximidade e identificação, pois o viewer acompanha a vida real do criador e se conecta com ela de forma natural.","v":["1kPkc6UqlhocCihnZzUlSG9OVqEZYpm1w","","","",""]},{"n":"57","t":"A, B, C, D e E","d":"Uma voz de fundo vai apresentando itens relacionados a um tema e o criador classifica cada um em categorias de A até E, sendo A o melhor e E o pior. É um formato opinativo e dinâmico que gera muito engajamento pois provoca o viewer a concordar ou discordar das classificações feitas.","v":["1h8MzUd5vLj_UwxhrfxvjndmOPjrhfuZv","1MNmwu0xmqmOelnX4z8wWUp3VYCH0Lw6B","10bYuHN_EQnfSF67yfFV882YY4IOQqVaT","19shmPQ5a8KTGIY1hj32xG-uFKuia-PFS",""]},{"n":"58","t":"Vlog","d":"O criador registra um momento, seja uma viagem, um passeio ou um dia de trabalho, com takes do que acontece ao longo da experiência. Normalmente é narrado em voz off, mas pode ter falas naturais captadas durante a gravação. É um formato que gera muita proximidade pois o viewer acompanha o criador de forma imersiva e autêntica.","v":["1BDvKuHAz1fxS0TqhyNa9rYfdrLf9XR2I","1pE68rItrTyPgqzZ4OGiC-t9LHOsDHMNP","1_bA2kj0b0rhGW8v871fW6QQwEzrWkz5Z","",""]},{"n":"59","t":"Certo x Errado","d":"Mostra-se através de takes o que é certo e o que é errado sobre determinado tema. O conteúdo é entregue apenas em texto na tela, sem necessidade de fala. É um formato direto e de fácil consumo.","v":["1U8-rAbSbq7LOXntMnzDRcJimobt0pX0E","1ZAqKrpNwSpuCWrGDQ3e8mOwcQf45V2cC","","",""]},{"n":"60","t":"Tela Dividida com Imagem","d":"A tela é dividida na horizontal com o criador falando na parte superior e uma imagem que remete ao assunto na parte inferior. A legenda fica centralizada entre as duas telas. É um formato que enriquece visualmente o conteúdo e reforça a mensagem do criador com uma referência visual direta ao tema.","v":["1_EiBgSuRyqosxAZt88bvQpjC8_vz-E7N","","","",""]},{"n":"61","t":"Animação Explicativa","d":"Animações que ilustram conceitos enquanto a narração ou texto guia o viewer. O formato funciona muito bem para temas que precisam de apoio visual para serem compreendidos com clareza.","v":["1hGIyq8CAs0Ulfk8WXbXX3L86x3Q7iy5j","","","",""]},{"n":"62","t":"Faz e Escreve","d":"O criador realiza uma ação enquanto escreve mensagens ou explicações na tela. A combinação entre o que está sendo feito e o que está sendo escrito cria uma camada extra de comunicação e dinamismo.","v":["137vINKeczj25vcT1ctSLK2nUmUwAoRSv","","","",""]},{"n":"63","t":"Chroma Key","d":"O criador grava com um fundo verde e na edição insere imagens, vídeos ou cenários no lugar do fundo. É um formato versátil que permite colocar qualquer elemento visual atrás do criador, enriquecendo o conteúdo sem precisar de produção elaborada no momento da gravação.","v":["1JbRVtvlS-lwuTS-KyvsXnUZ4iESXxIe4","","","",""]},{"n":"64","t":"Autoridade Roubada","d":"O criador insere uma foto ou vídeo de uma pessoa famosa no conteúdo, seja de forma aleatória ou simulando que o famoso reagiu ao que está sendo dito. O viewer reconhece o famoso e isso transfere credibilidade para o criador de forma indireta. É um formato especialmente poderoso para contas menores que ainda estão construindo autoridade no nicho.","v":["1FdiGcrcVJljMMbqBFOpo7rT_JqBJBQ-s","1iULgJpAc4dU_YLSDt2HYwts7BlvtkCEx","1iS-FMrpcQSD_s917PWcY8fQ7zBkQbj50","",""]},{"n":"65","t":"React Clássico","d":"A tela é dividida na horizontal com o vídeo original na parte superior e o criador reagindo na parte inferior. Pode ter uma headline no meio ou não. Ao final do vídeo, o criador comenta o que viu e entrega sua perspectiva sobre o assunto. É um formato que gera engajamento pois o viewer acompanha a reação em tempo real e fica curioso para saber o que o criador vai falar no final.","v":["1Lh9pll-QPRyWD3ROjv5uWTpmtsU5klvl","194LFEfnIdfThd620HDDkqNbCjQQbLB41","1oeqnyj19u1EnSAYspP_XlFpCNhu3pDPM","",""]},{"n":"66","t":"Diálogo de Gêmeos","d":"O criador interpreta dois personagens sozinho, podendo usar roupas ou acessórios diferentes para diferenciar cada um. Os dois travam um diálogo como se fosse uma conversa real, o que torna o formato dinâmico e divertido. É muito bom para responder dúvidas, apresentar pontos de vista opostos ou explicar conceitos de forma leve e envolvente.","v":["14OpiPCMVR0dwIpJbpP9xkvavMhMTgKh4","1FRd84o3iwNefNCfDmfnytEhJdcP-oYmH","","",""]},{"n":"67","t":"Take + Vídeo Viral","d":"O criador aparece em um take com uma chamada escrita na tela, sem falar nada, que direciona o viewer para o que vem a seguir. Em seguida corta para um vídeo viral de outro criador, um trecho de filme, podcast ou palestra que entrega a reflexão ou mensagem prometida. É um formato que usa a curiosidade como gatilho e aproveita o alcance de conteúdos já validados para engajar o viewer.","v":["1rZQpw01DWKqrrrn1ToWTZi2DiiZBPNw3","1n2UtJsUOQE3HQF6PlPPFiV0TL9a6upVI","","",""]},{"n":"68","t":"Reunião Presencial","d":"O criador aparece em uma reunião presencial, num escritório ou sala de reunião, falando ou passando uma visão. É um formato que transmite autoridade e profissionalismo de forma natural, pois mostra o criador no ambiente de trabalho sem precisar declarar sua relevância.","v":["107tvfLm15ygpLjeYp1LljolbvXnP-sAm","","","",""]},{"n":"69","t":"Análise","d":"O criador analisa algo do seu nicho em profundidade, demonstrando domínio completo sobre o assunto. É um formato que posiciona o criador como autoridade de forma genuína, pois o viewer percebe o nível de conhecimento pela qualidade da análise.","v":["1bp6ANYFq7whgAOF-Mz_otoykYUK0P67V","1bXiPboX07w_hD2inWVc1GUfdQmOj983j","","",""]},{"n":"70","t":"Analogia","d":"O criador explica um conceito do seu nicho através de comparações com situações ou objetos do cotidiano, sem abordar o assunto de forma direta. A analogia facilita o entendimento e torna a mensagem mais fácil de absorver e lembrar. Quanto mais criativa e inesperada a comparação, mais o formato tende a engajar.","v":["1OBjk9wsammcYcsc4hEi35fRIUCLnyP3G","1jr3sdtXe3xGmqhvXJB0s9xflhi7eVNYM","1Smc0D4Tqy363ew_KcKEzUhtkf768_V0o","199OT55tFZTXmnkIoAC_R7UjgRMevjgSc",""]},{"n":"71","t":"Infográfico","d":"Um elemento visual que ilustra uma ideia ou conceito aparece sobre um take do criador ao fundo, com uma música que combina com a proposta. O infográfico organiza a informação de forma visual e intuitiva, tornando mensagens complexas fáceis de entender em poucos segundos.","v":["1KPzpr6BOYgSWVKPgXTwAS3TgJJ0LmeBO","1G_2qsclGTzHuaSoSaqsSm8swrRFtFFzj","","",""]},{"n":"72","t":"Estático em Vídeo","d":"Uma imagem estática é publicada como vídeo com um efeito de fade no início. Uma headline acompanha a imagem. É um formato simples e rápido de produzir que funciona bem para frases de impacto, reflexões e conteúdos que não precisam de movimento para transmitir a mensagem.","v":["1omIR5TSkrzoJrBAMryBeOo4ma8JV4EfF","1MCwy0c1aj78AWhIzZg0MoIjWXcKpdDoT","","",""]},{"n":"73","t":"ASMR","d":"O criador mostra seu trabalho no dia a dia capturando os sons do ambiente de forma intencional. Sem narração, o conteúdo se sustenta pelos sons e pelas imagens do processo. É um formato relaxante e hipnótico que prende a atenção de forma sutil.","v":["1z6E4G6TTs59pY4pdlNvuFdAg1TIludqC","18qvWWxbCODTMGRwg6mApTa_h-0Ogkj2p","1xWRGhAvbBM63kdfDda6V0iAXs1mcZoCv","1H-P0xBtF6nfyQCX4r77f4gutPbkLJ3ia",""]},{"n":"74","t":"Revelação no Papel","d":"O criador segura uma folha com perguntas ou tópicos e vai revelando as respostas uma a uma, removendo algo que as cobria. O suspense de cada revelação é o que prende a atenção e mantém o viewer assistindo até o fim. É um formato simples de produzir.","v":["1B8mA3xoRyHQYZWcj1rSUnQ0CALYNZL-D","","","",""]},{"n":"75","t":"Para Isso, Indico Isso","d":"Uma voz de fundo apresenta uma situação ou necessidade e o criador responde com uma indicação direta e objetiva. É um formato ágil e dinâmico que posiciona o criador como referência no seu nicho, pois demonstra repertório e autoridade a cada resposta.","v":["1F3mv16jyoa-2cl4-HHqEXvvEyweB5lSQ","","","",""]},{"n":"76","t":"Analogia em Texto","d":"O criador aparece de fundo com expressões e objetos que compõem a cena enquanto textos na tela entregam a mensagem através de uma analogia. Sem narração, o conteúdo se sustenta pela combinação entre a expressão do criador, os elementos visuais e o texto. É um formato elegante e criativo que facilita o entendimento de conceitos complexos de forma visual e intuitiva.","v":["1Eo8B0GVcKYHu4myBvFXPgHWxsaxBKj7J","16icFMAH4MlzcgISGGgh-Qhs1RGocLAJB","","",""]},{"n":"77","t":"Significado nos Comentários","d":"O criador apresenta uma escolha na tela pedindo para o viewer selecionar uma opção sem entender muito bem o que cada uma significa. A explicação e o significado de cada escolha estão na legenda do post. É um formato que gera retenção, pois as pessoas ficam lendo a legenda para entender o resultado da sua escolha, e tende a gerar muitos comentários pois o viewer quer compartilhar o que escolheu.","v":["1fYCR6E7Lwd5hp_Kmi0Z5Hl63ujRQKtjm","1DPo-Uelu-OEC3ZatKShNa4l8MilRmv8X","","",""]},{"n":"78","t":"3 Coisas, 3 Categorias","d":"O criador apresenta três itens classificados em três categorias definidas por ele. Enquanto fala, usa gestos e aponta para cada item que aparece na edição ao lado dele. É um formato direto e opinativo que gera muito engajamento pois provoca o viewer a concordar ou discordar das escolhas feitas.","v":["1Yd_8ogeje9wNq4UNzEMnLhqCiTPeDxhg","126uBUAZPYApCSrKGC_qwmF94iRC9HO6I","1Gnv4d0eyUd0kPngFvdi2LYl8onvhXpJa","",""]},{"n":"79","t":"Bom e Ruim","d":"Uma voz de fundo apresenta dois itens da mesma categoria e o criador explica o motivo de um ser bom e o outro ruim. Na edição aparecem os itens na tela para ilustrar o que está sendo dito. É um formato direto e opinativo que gera identificação e debate, pois o viewer muitas vezes usa ou conhece os itens apresentados.","v":["1SUyLFEviwd_ryT4QHhfipOqfJzmwVqbl","","","",""]},{"n":"80","t":"Falado em Público","d":"O criador fala sobre seu assunto enquanto está em um ambiente público, como um shopping ou uma praça, completamente alheio ao movimento ao redor. As outras pessoas se tornam figurantes da cena. Uma pessoa grava enquanto ele anda e fala. É um formato que transmite naturalidade e confiança, pois mostra o criador totalmente à vontade independente do ambiente.","v":["1X7w7mhYH1j9mzil8z41um_1GUUlYWFtd","","","",""]},{"n":"81","t":"Comparativo Falado","d":"O criador fala sobre dois lados de um mesmo tema enquanto imagens aparecem na tela para ilustrar o que está sendo dito. É um formato dinâmico e provocativo que gera muita identificação e debate, pois coloca o viewer para refletir sobre qual lado se encaixa na sua realidade.","v":["1ZaVulQSbe5mqwIUzYOblX5qfBTZF63QE","","","",""]},{"n":"82","t":"Gêmea Boa e Ruim","d":"A tela é dividida na vertical com o criador interpretando dois personagens ao mesmo tempo, um representando o comportamento certo e o outro o errado. É um formato que mostra dualidade de forma visual e direta, pois o viewer consegue comparar os dois lados na mesma tela.","v":["1sBrdpjo9ZwzPPpuxioLKVChkFkguUbQD","1HGccUyAflQRiyzeA_PI00bEmumpAy-e0","","",""]},{"n":"83","t":"Não Faça Isso, Faça Isso","d":"O criador propõe substituições diretas, apresentando o comportamento ou atitude errada e a versão correta no lugar. As trocas aparecem na edição de forma visual e organizada enquanto o criador fala. É um formato prático e de alto valor que gera identificação imediata pois o viewer reconhece os comportamentos que precisa mudar.","v":["18ooaiMf9r1GXma_yhTjyGcjOee5urHaS","","","",""]},{"n":"84","t":"Diálogo com Famoso","d":"O criador interage com a imagem ou vídeo de um famoso na edição, simulando um diálogo. O formato combina humor, identificação e o reconhecimento do famoso para criar conteúdos memoráveis e altamente compartilháveis.","v":["112zlXaC57aOJcfZVkEiukMSf5I04uZaB","","","",""]},{"n":"85","t":"Fundo Narrativo em Destaque","d":"O criador aparece pequeno e centralizado na tela enquanto imagens e vídeos de fundo dominam o espaço visual. A legenda acompanha o que está sendo dito. O foco não é o rosto do criador mas sim as imagens que ilustram e dão dinamismo à mensagem.","v":["1F0h41YxKNK33B4ViRV-_9o1WQnSVPz9Q","","","",""]},{"n":"86","t":"Trigêmeos","d":"O criador aparece três vezes na mesma tela interpretando três versões diferentes de si mesmo. Cada uma traz uma perspectiva ou comportamento distinto, criando um diálogo entre os três. É um formato divertido e visualmente rico que multiplica a presença do criador na cena.","v":["1K5Cd3N9_3JsqqSb2M0kM3Qv0s0aCrf-X","1nQnIy8s-_dvvMkDwFP9meHdEWuBwEuP3","","",""]},{"n":"87","t":"Se Você Quer Isso, Faça Isso","d":"O criador apresenta uma lógica direta de causa e consequência: se você faz ou quer determinada coisa, o caminho é esse. Mapas mentais e infográficos aparecem na parte superior para apoiar visualmente a explicação. É um formato prático e objetivo que entrega valor de forma clara e direta.","v":["10XzKdZCvchREcVpdQdQ-ZT8V2VbZv6X8","","","",""]},{"n":"88","t":"Bastidores dos Conteúdos","d":"O criador mostra como produz seus conteúdos por trás das câmeras. Uma câmera registra o processo de gravação, os equipamentos, a preparação e tudo que acontece antes do resultado final aparecer na tela. É um formato que gera curiosidade e proximidade, pois o viewer tem acesso a algo que normalmente não vê.","v":["1jp-c8b2UipxurUlrB0kEXgq11BotKvk-","","","",""]},{"n":"89","t":"Antes e Depois Lo-fi","d":"O criador mostra o antes e o depois de uma transformação do seu trabalho de forma simples e direta, com um áudio de fundo. As transições entre os dois momentos podem ser criativas e dinâmicas para quebrar o padrão. É um formato muito poderoso para nichos onde a transformação visual é o produto, pois o resultado fala por si.","v":["1vg5DXljB4BnBRBQ1izrPXuxKOPHRWdoK","","","",""]},{"n":"90","t":"Narrado com IA","d":"O vídeo é gerado e narrado inteiramente por inteligência artificial. As imagens e animações explicativas de fundo são criadas por IA e a narração também. É um formato que permite criar conteúdos visualmente impressionantes e didáticos sobre qualquer assunto sem precisar aparecer ou falar.","v":["1p4TQvLJeRHDHZ8BQWPTxo4I_PeBZ4a-b","","","",""]},{"n":"91","t":"React na TV","d":"O criador assiste a um vídeo em uma TV real enquanto é gravado. Ao final, pausa o vídeo e faz seu comentário sobre o que assistiu. É uma versão mais imersiva e cinematográfica do react convencional, pois o ambiente e a TV real criam uma cena mais natural e envolvente.","v":["1oljDR9vlaI16HNKApWadOi85fYuDJhlW","","","",""]},{"n":"92","t":"Antes e Depois em Texto","d":"O criador aponta para os elementos que aparecem na edição sem precisar falar. O antes e o depois são apresentados visualmente na tela enquanto o criador apenas gesticula. É um formato clean e eficiente que entrega o comparativo de forma rápida e direta.","v":["","","","",""]},{"n":"93","t":"Pergunta e Responde","d":"O criador é filmado fazendo algo do cotidiano quando o cameraman chega e faz uma pergunta sobre o nicho. O criador responde de forma natural. É um formato que transmite muita autenticidade e proximidade pois captura o criador em um momento real e descontraído.","v":["1FOiTrdpbH07ode6YlpYPMOF6GPfrIMwO","","","",""]},{"n":"94","t":"Conversa de Bar","d":"A câmera é posicionada como se fosse mais uma pessoa na roda. O criador troca ideia com alguém ou fala como se estivesse em uma conversa em grupo, sem olhar diretamente para a câmera. O viewer tem a sensação de estar presente na conversa, como se fosse um integrante da roda. É um formato que gera proximidade e autenticidade de forma muito natural.","v":["13VnU-M_W_f97-avRYkL8wb2z-10SFOnt","","","",""]},{"n":"95","t":"Narrador","d":"Uma voz de narrador gerada por IA conta uma história sobre o criador enquanto takes ilustram o que está sendo narrado. O criador interage com o narrador como se ele fosse uma pessoa real, reagindo, concordando ou discordando do que está sendo dito. É um formato criativo e divertido que cria uma dinâmica inusitada e prende a atenção pela imprevisibilidade.","v":["1toOMsEnGX0oFYl8M3ypXFsoYd97bTG1h","1bY5RMAtLwtU7Kcpy1U8sOB-jx_ONmnSD","1ITRZBYeMaA7cs0I0vecm6h3R3FOTHoKa","",""]},{"n":"96","t":"Telepatia","d":"O criador se grava em silêncio, usando apenas expressões e linguagem corporal, e adiciona uma narração por cima como se fosse o pensamento interno dele acontecendo em tempo real. O viewer acompanha o raciocínio e os sentimentos do criador de forma íntima e divertida. É um formato que gera muita identificação pois simula algo que todos vivem mas raramente compartilham.","v":["1DL-d4Zsu0OrzkBOJ7JDiP3YzwwW2hPnn","","","",""]},{"n":"97","t":"UGC em Primeira Pessoa","d":"O criador não aparece no vídeo. A câmera fica na perspectiva do seu olhar enquanto apresenta um item, como se o viewer estivesse segurando o produto nas próprias mãos. O tom é natural e informal, como uma recomendação sincera de alguém que realmente usou. É um formato que gera muita confiança pela autenticidade.","v":["1-zF9P-JpgM3n9ZKr7gA-sLTWOzvi6bUw","1ynV9njQUU0m2yb2QFdQVDZHDIBbYbwC3","1qnpYJ_m8zTL9GByBCRkq6On1QMYhWpWK","",""]},{"n":"98","t":"UGC em Terceira Pessoa","d":"O criador se filma com o celular falando diretamente para a câmera, como se estivesse dando uma dica sincera para um amigo. O tom é informal e autêntico, sem produção elaborada. Parece uma recomendação genuína de quem realmente usou ou viveu aquilo que está sendo dito.","v":["1rg3gEbYpcR6vKxHoJ4CncOBEs4YckbHI","18pU73vfPzOCuPrMvZx-Y7SmHEjeS0SML","","",""]},{"n":"99","t":"Google Meet","d":"O criador se grava no Google Meet enquanto explica um assunto. Na parte superior aparecem imagens e takes que ilustram o que está sendo dito. Pode ter uma headline ou não. É um formato que transmite autoridade, proximidade e seriedade pelo ambiente de reunião, como se o criador estivesse apresentando algo importante para o viewer.","v":["1fa_oxHq9LoVkYzVM01FxXkt-x1Exwl-y","","","",""]},{"n":"100","t":"Lista","d":"O criador apresenta uma lista sobre um tema central enquanto os itens vão aparecendo na edição conforme ele fala. É um formato simples, direto e de alto valor que funciona muito bem para conteúdos educativos.","v":["12ajJq79C0cM66mnSfNCjWcl6izlnn2RK","","","",""]}];
var allinCV=['','',''];
window.allinOpen=function(i){var f=allinFormats[i];if(!f)return;document.getElementById('aMB').textContent=f.n;document.getElementById('aMT').textContent=f.t;document.getElementById('aMD').textContent=f.d;allinCV=f.v;var ts=document.querySelectorAll('.allin-tab'),ds=document.querySelectorAll('.allin-dot');for(var j=0;j<ts.length;j++){if(allinCV[j]){ts[j].style.display='';ds[j].style.display=''}else{ts[j].style.display='none';ds[j].style.display='none'}}if(allinCV[0]){allinSwitch(1)}else{document.getElementById('aMI').src=''}document.getElementById('allinModal').classList.add('allin-modal-active');document.body.style.overflow='hidden'}
window.allinSwitch=function(n){var v=allinCV[n-1];if(!v)return;document.getElementById('aMI').src='https://drive.google.com/file/d/'+v+'/preview';var ts=document.querySelectorAll('.allin-tab'),ds=document.querySelectorAll('.allin-dot');for(var j=0;j<ts.length;j++){ts[j].classList.remove('allin-tab-active');ds[j].classList.remove('allin-dot-active')}ts[n-1].classList.add('allin-tab-active');ds[n-1].classList.add('allin-dot-active')}
window.allinClose=function(){document.getElementById('allinModal').classList.remove('allin-modal-active');document.getElementById('aMI').src='';document.body.style.overflow=''}
document.addEventListener('keydown',function(e){if(e.key==='Escape')allinClose()});
})();
