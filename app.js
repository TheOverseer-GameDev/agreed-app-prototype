(() => {
"use strict";
const I = {
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 subs:'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 file:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
 shieldc:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
 bell:'<path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
 chev:'<path d="m9 18 6-6-6-6"/>', chevL:'<path d="m15 18-6-6 6-6"/>',
 alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
 check:'<path d="M20 6 9 17l-5-5"/>', checkc:'<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
 trend:'<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
 diff:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 14h6"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 hourglass:'<path d="M6 2h12M6 22h12M7 2v4a5 5 0 0 0 10 0V2M7 22v-4a5 5 0 0 1 10 0v4"/>',
 ret:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
 pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
 phone:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
 rotate:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
 camera:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3.5"/>',
 mail:'<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/>',
 bank:'<path d="M3 21h18M5 21V10M19 21V10M9.5 21V10M14.5 21V10M2 10l10-7 10 7z"/>',
 spark:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/>',
 x:'<path d="M18 6 6 18M6 6l12 12"/>',
 play:'<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
 cloud:'<path d="M17.5 19H8a6 6 0 1 1 5.7-7.9A4.5 4.5 0 1 1 17.5 19z" fill="currentColor" stroke="none"/>',
 homeF:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" fill="currentColor" stroke="none"/>',
 headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z" fill="currentColor"/>',
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
 download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
 lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 dollar:'<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
 msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
 book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V21h16"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
 pencil:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
 cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'
};
const ic = (n, cls="") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${I[n]||""}</svg>`;
const KEY = "agreed.state.v1";
const clone = o => JSON.parse(JSON.stringify(o));
let S;
try { S = JSON.parse(localStorage.getItem(KEY)); } catch(e) {}
if (!S || S.version !== SEED.version) S = Object.assign(clone(SEED), {theme:"dark",onboarded:false,period:"mo",imported:false,prefs:{trial:true,price:true,ret:true,digest:true,share:false,lock:true}});
const save = () => localStorage.setItem(KEY, JSON.stringify(S));

const $ = s => document.querySelector(s);
const app = $("#app");
const cad = new Intl.NumberFormat("en-CA",{style:"currency",currency:"CAD"});
const money = n => cad.format(n).replace("CA","");
const today = new Date(); today.setHours(0,0,0,0);
const dOff = n => new Date(today.getTime() + n*864e5);
const fdate = (n, opt={month:"short",day:"numeric"}) => dOff(n).toLocaleDateString("en-CA",opt);
const rel = n => n===0?"Today":n===1?"Tomorrow":n<0?`${-n} days ago`:n<14?`In ${n} days`:n<60?`In ${Math.round(n/7)} weeks`:`In ${Math.round(n/30)} months`;
const ago = n => n===0?"Today":n===-1?"Yesterday":`${-n} days ago`;
const monthly = it => it.cycle==="yr" ? it.price/12 : it.price;
const all = () => [...S.subs, ...S.contracts];
const find = id => all().find(x=>x.id===id) || S.stuff.find(x=>x.id===id);
const mono = (it, size="") => {
  const m = it.mono||it.name[0];
  const inner = m.startsWith("@") ? ic({"@play":"play","@cloud":"cloud","@home":"homeF","@headphones":"headphones","@phone":"phone"}[m]) : m;
  return `<div class="mono ${size}" style="background:${it.bg||it.color}${it.fg?`;color:${it.fg}`:""}">${m.startsWith("@")?`<span style="width:46%;height:46%;display:grid">${inner}</span>`:inner}</div>`;
};
const CATS = {Streaming:"#FF5C8A",Music:"#2ED39A",Gaming:"#7CF06B",Cloud:"#4DA3FF",Shopping:"#FFB547",Food:"#C9A3FF",Home:"#A592FF",Phone:"#5CE1E6",Fitness:"#FF8A5C",Insurance:"#FFD95C"};
const totals = () => {
  const m = all().reduce((a,x)=>a+monthly(x),0);
  const cats = {};
  all().forEach(x=>{const k = ["Music","Gaming","Cloud","Shopping","Food"].includes(x.cat)?"Apps & more":x.cat; cats[k]=(cats[k]||0)+monthly(x)});
  return {m, cats};
};
const GROUPCOL = {"Home":"#B9A8FF","Streaming":"#FF7AA2","Insurance":"#FFD36E","Phone":"#6FE7EC","Fitness":"#FF9F7A","Apps & more":"#8CF0B4"};

/* ---------- rewards v1 ---------- */
const PTS_RATE=100, REDEEM_COST=600, REDEEM_YEAR_CAP=6;
const LEVELS=[
  {id:"clear",name:"Clear",at:0,gift:0,blurb:"The app as it is, plus a running You saved total"},
  {id:"steady",name:"Steady",at:500,gift:0,blurb:"Custom alert lead times, 1 household member, and PDF/export"},
  {id:"anchored",name:"Anchored",at:1500,gift:1,blurb:"Terms-change watch, agreement scripts, and 1 month of Pro"},
  {id:"assured",name:"Assured",at:3500,gift:3,blurb:"2 household members, claim checklist, and 3 months of Pro"},
  {id:"kept",name:"Kept",at:7000,gift:12,blurb:"12 months of Pro this year, and a year-in-agreements report"}
];
const emptyRewards=()=>({lifetime:0,available:0,ledger:[],proMonths:0,proGiftedThisYear:0,levelGifts:{},cooldown:{},done:{},year:new Date().getFullYear()});
const sampleRewards=()=>({
  lifetime:1595,available:1595,proMonths:1,proGiftedThisYear:0,year:new Date().getFullYear(),
  levelGifts:{anchored:true},
  cooldown:{"adobe creative cloud":-84,"the athletic":-62},
  done:{"cancel:adobe":1,"cancel:athletic":1,"deadline:oldlease":1,"deadline:oldreturn":1,"warranty:dyson":1,"warranty:iphone":1,"review:rogers":1,"review:goodlife":1,"review:lease":1,"setup":1},
  ledger:[
    {id:"rw1",type:"cancel",key:"cancel:adobe",title:"Cancelled Adobe Creative Cloud",pts:500,saved:359.88,when:-84},
    {id:"rw2",type:"cancel",key:"cancel:athletic",title:"Cancelled The Athletic",pts:320,saved:119.88,when:-62},
    {id:"rw3",type:"deadline",key:"deadline:oldlease",title:"Beat a moving-out notice",pts:150,saved:0,when:-48},
    {id:"rw4",type:"deadline",key:"deadline:oldreturn",title:"Beat a return deadline",pts:150,saved:0,when:-40},
    {id:"rw5",type:"warranty",key:"warranty:dyson",title:"Logged Dyson V15 Detect warranty",pts:100,saved:0,when:-33},
    {id:"rw6",type:"warranty",key:"warranty:iphone",title:"Logged iPhone 16 Pro warranty",pts:100,saved:0,when:-30},
    {id:"rw7",type:"review",key:"review:rogers",title:"Reviewed Rogers Infinite fine print",pts:75,saved:0,when:-21},
    {id:"rw8",type:"review",key:"review:goodlife",title:"Reviewed GoodLife Fitness fine print",pts:75,saved:0,when:-18},
    {id:"rw9",type:"review",key:"review:lease",title:"Reviewed apartment lease fine print",pts:75,saved:0,when:-14},
    {id:"rw0",type:"setup",key:"setup",title:"Finished household setup",pts:50,saved:0,when:-90}
  ]
});
function migrateRewards(){
  if(!S.rewards){
    const n=((S.subs||[]).length+(S.contracts||[]).length+(S.stuff||[]).length);
    const seeded=(S.subs||[]).some(x=>x.id==="netflix")&&(S.contracts||[]).some(x=>x.id==="bell")&&n>=18;
    S.rewards=seeded?sampleRewards():emptyRewards();
    save();
  }
  const r=S.rewards, e=emptyRewards();
  for(const k of Object.keys(e)) if(r[k]==null) r[k]=e[k];
  if(r.year!==new Date().getFullYear()){ r.year=new Date().getFullYear(); r.proGiftedThisYear=0; }
}
migrateRewards();
const rSaved=()=>S.rewards.ledger.reduce((a,x)=>a+(x.saved||0),0);
const rLevel=()=>{ let c=LEVELS[0]; for(const L of LEVELS) if(S.rewards.lifetime>=L.at) c=L; return c; };
const ptsMoney=n=>`${Number(n).toLocaleString("en-CA")} pts (${money(n/PTS_RATE)})`;
const merch=s=>(s||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
const rCan=key=>!S.rewards.done[key];
function rCool(name){ const d=S.rewards.cooldown[merch(name)]; return d!=null && d<=0 && -d<365; }
function grantLevelGifts(){
  const r=S.rewards; let hit=null;
  for(const L of LEVELS){ if(L.gift && r.lifetime>=L.at && !r.levelGifts[L.id]){ r.levelGifts[L.id]=true; r.proMonths+=L.gift; hit=L; } }
  return hit;
}
function rEarn({type,key,title,pts,saved=0,merchant,silent}){
  const r=S.rewards;
  if(key && r.done[key]) return 0;
  if(merchant && rCool(merchant)) return 0;
  pts=Math.max(0,Math.round(pts));
  if(!pts) return 0;
  r.ledger.unshift({id:"rw"+Date.now(),type,key,title,pts,saved:+(+saved).toFixed(2),when:0});
  r.lifetime+=pts; r.available+=pts;
  if(key) r.done[key]=1;
  if(merchant) r.cooldown[merch(merchant)]=0;
  const leveled=grantLevelGifts();
  save();
  if(!silent){
    const bits=[`+${pts.toLocaleString("en-CA")} pts`];
    if(saved) bits.push(`${money(saved)} saved`);
    if(leveled) bits.push("Level "+leveled.name);
    toast(bits.join(" · "));
  }
  return pts;
}
function rCancelPts(it){
  if(!it) return 0;
  const key="cancel:"+it.id;
  if(!rCan(key) || rCool(it.name)) return 0;
  const saved=Math.round(monthly(it)*12*100)/100;
  return rEarn({type:"cancel",key,title:`Cancelled ${it.name}`,pts:Math.min(500,200+Math.round(saved)),saved,merchant:it.name,silent:true});
}
function rHike(it,saved,silent){
  if(!it||!rCan("hike:"+it.id)) return 0;
  saved=Math.max(0,saved||0);
  return rEarn({type:"hike",key:"hike:"+it.id,title:`Reviewed ${it.name} price change`,pts:Math.min(400,150+Math.round(saved)),saved,silent});
}
function rWarrantyLog(it){ if(it&&rCan("warranty:"+it.id)) rEarn({type:"warranty",key:"warranty:"+it.id,title:`Logged ${it.name} warranty`,pts:100,silent:true}); }
function rWarrantyUse(it){
  if(!it||!rCan("warrantyuse:"+it.id)) return 0;
  const already=S.rewards.ledger.filter(x=>x.key==="warranty:"+it.id||x.key==="warrantyuse:"+it.id).reduce((a,x)=>a+x.pts,0);
  const pts=Math.min(200,Math.max(0,500-already));
  if(!pts) return 0;
  return rEarn({type:"warranty",key:"warrantyuse:"+it.id,title:it.ret?`Started a ${it.name} return`:`Started a ${it.name} claim`,pts});
}
function rReview(it){ if(it&&rCan("review:"+it.id)) return rEarn({type:"review",key:"review:"+it.id,title:`Reviewed ${it.name} fine print`,pts:75}); return 0; }
function rSetup(){ if(rCan("setup")) rEarn({type:"setup",key:"setup",title:"Finished household setup",pts:50,silent:true}); }
function rNegotiate(it,newPrice){
  if(!it||!rCan("negotiate:"+it.id)) return 0;
  const saved=Math.max(0,Math.round((it.price-newPrice)*12*100)/100);
  return rEarn({type:"negotiate",key:"negotiate:"+it.id,title:`Negotiated a new ${it.name} rate`,pts:Math.min(800,300+Math.round(saved)),saved,silent:true});
}
function rRedeem(){
  const r=S.rewards;
  if(r.available<REDEEM_COST) return "Need 600 pts ($6.00) to redeem a month of Pro.";
  if(r.proGiftedThisYear>=REDEEM_YEAR_CAP) return "You've redeemed the 6-month maximum for this year.";
  r.available-=REDEEM_COST; r.proMonths+=1; r.proGiftedThisYear+=1;
  r.ledger.unshift({id:"rw"+Date.now(),type:"redeem",title:"Redeemed 1 month of Pro",pts:-REDEEM_COST,saved:0,when:0});
  save(); toast("1 month of Pro added"); return true;
}
const RICO={cancel:"x",hike:"trend",deadline:"clock",warranty:"shield",negotiate:"msg",review:"book",setup:"home",redeem:"spark"};
let redeemAsk=false;
function rewardsBody(){
  const r=S.rewards, life=r.lifetime, avail=r.available, saved=rSaved(), L=rLevel();
  const [w,cents]=saved.toFixed(2).split(".");
  const next=LEVELS.find(x=>x.at>life);
  const ledger=[...r.ledger].sort((a,b)=>b.when-a.when);
  const pro = r.proMonths?`${r.proMonths} month${r.proMonths===1?"":"s"} of Pro`:"No Pro months yet";
  const canRedeem=avail>=REDEEM_COST && r.proGiftedThisYear<REDEEM_YEAR_CAP;
  const rows=ledger.map(e=>`<div class="row rled"><div class="aico" style="background:var(--green-soft);color:var(--green)">${ic(RICO[e.type]||"spark")}</div><div class="row-main"><div class="row-title">${e.title}</div><div class="row-sub">${e.when===0?"Today":ago(e.when)}${e.saved?` · ${money(e.saved)} saved`:""}</div></div><div class="row-end"><div class="row-amt num" style="color:${e.pts<0?"var(--text-2)":"var(--green)"}">${e.pts>0?"+":""}${e.pts.toLocaleString("en-CA")}</div><div class="row-cyc">pts</div></div></div>`).join("");
  const lv=LEVELS.map((lv,i)=>{
    const on=L.id===lv.id, got=life>=lv.at, last=i===LEVELS.length-1;
    return `<div class="lv ${on?"on":got?"got":""}"><div class="lv-rail"><i></i>${last?"":"<b></b>"}</div><div class="lv-body"><div class="lv-top"><div class="lv-name">${lv.name}</div><div class="lv-at num">${lv.at.toLocaleString("en-CA")} pts${on?` · you`:got?" · reached":""}</div></div><div class="lv-blurb">${lv.blurb}</div></div></div>`;
  }).join("");
  return `<div class="sheet-head saved-head"><div class="mono lg" style="background:linear-gradient(145deg,#2ED39A,#0b8a5e)"><span style="width:46%;height:46%;display:grid">${ic("dollar")}</span></div><div class="eyebrow" style="color:var(--green);opacity:.9">You saved</div><div class="saved-amt num"><span class="cur">$</span><span id="saved-count" data-to="${saved}">${Number(w).toLocaleString("en-CA")}</span><span class="cents">.${cents}</span></div><div class="muted" style="max-width:300px">Money back in your pocket. Points are a thank-you on top, always at 100 pts = $1.</div></div>
  <div class="card pad saved-stat"><div class="saved-lvl">Level ${L.name}</div><div class="muted">${life.toLocaleString("en-CA")} earned · ${avail.toLocaleString("en-CA")} available</div><div class="saved-pts num">${ptsMoney(avail)}</div><div class="muted small" style="margin-top:8px">${pro}${next?` · ${ (next.at-life).toLocaleString("en-CA")} pts to ${next.name}`:""}</div></div>
  ${redeemAsk?`<div class="redeemask"><p>Redeem <b>600 pts ($6.00)</b> for 1 month of Pro? Your level stays the same, and points don't expire if you wait.</p><button class="btn btn-primary" data-redeemyes>${ic("spark")}Redeem 1 month</button><button class="btn btn-ghost" data-redeemno>Not now</button></div>`
   :`<div class="actions" style="margin-top:16px"><button class="btn ${canRedeem?"btn-primary":"btn-ghost"}" data-redeem ${canRedeem?"":"disabled"}>${ic("spark")}Redeem 1 month of Pro</button></div><p class="muted small" style="text-align:center;margin:8px 0 0">600 pts = $6.00 · your level does not drop</p>`}
  <div class="h3">Activity</div>
  <div class="list">${rows||`<div class="row"><div class="row-main"><div class="row-title">No activity yet</div><div class="row-sub">Points are earned when you cancel, review a hike, beat a deadline or log a warranty.</div></div></div>`}</div>
  <div class="h3">Levels</div>
  <div class="card pad lv-card">${lv}</div>
  <p class="muted small" style="text-align:center;margin:18px 0 4px">100 pts = $1.00, always. Points don't expire. We don't take a cut of what you save.</p>`;
}
function rewardsSheet(){ redeemAsk=false; return `<div data-rsheet>${rewardsBody()}</div>`; }
function refreshRewards(){ const n=$("[data-rsheet]"); if(!n) return; const sc=sheetEl().scrollTop; n.innerHTML=rewardsBody(); sheetEl().scrollTop=sc; }
function openRewards(){ openSheet(rewardsSheet()); const cu=$("#saved-count"); if(cu) countUp(cu); }
window.agreedSaved=openRewards;
window.agreedRewards=()=>S.rewards;


/* ---------- toast ---------- */
let tt, pendingUndo=null;
function toast(msg, undo){ let t=$(".toast"); t.innerHTML=ic("checkc")+`<span>${msg}</span>`+(undo?`<button data-undo>Undo</button>`:""); t.classList.toggle("undo",!!undo); t.classList.add("show"); clearTimeout(tt); tt=setTimeout(()=>{t.classList.remove("show","undo"); if(undo) pendingUndo=null;}, undo?5000:2200); }
const bucket = it => S.subs.includes(it)?"subs":S.contracts.includes(it)?"contracts":"stuff";
function deleteItem(id){
  const it=find(id); if(!it) return;
  const key=bucket(it), idx=S[key].findIndex(x=>x.id===id);
  pendingUndo={key,idx,it,alerts:S.alerts.filter(a=>a.item===id),savings:S.savings.filter(x=>x.item===id)};
  S[key]=S[key].filter(x=>x.id!==id);
  S.alerts=S.alerts.filter(a=>a.item!==id);
  S.savings=S.savings.filter(x=>x.item!==id);
  save(); closeSheet(); render(); toast(`Deleted ${it.name}`, true);
}
function undoDelete(){
  const u=pendingUndo; if(!u) return; pendingUndo=null;
  S[u.key].splice(u.idx,0,u.it); S.alerts.push(...u.alerts); S.savings.push(...u.savings);
  save(); render(); toast(`Restored ${u.it.name}`);
}

/* ---------- screens ---------- */
function header(title, eyebrow, extra=""){
  const unread = S.alerts.filter(a=>a.unread).length;
  return `<div class="top"><div class="eyebrow">${eyebrow||""}</div><div class="top-actions">${extra}<button class="icon-btn" data-go="alerts" aria-label="Alerts">${ic("bell")}${unread?'<span class="dot"></span>':""}</button><button class="avatar" data-go="settings" aria-label="Settings">AM</button></div></div><h1 class="title">${title}</h1>`;
}
function emptyState(icon,title,body,cta=""){
  return `<div class="empty2"><div class="e-art"><span class="e-ring r1"></span><span class="e-ring r2"></span><span class="e-ring r3"></span><div class="e-ic">${ic(icon)}</div></div><h3>${title}</h3><p>${body}</p>${cta}</div>`;
}
const swipeRow = (inner, acts) => `<div class="swipe"><div class="swipe-acts">${acts}</div>${inner}</div>`;
const sa = (cls,icon,label,data) => `<button class="sa ${cls}" ${data}>${ic(icon)}<span>${label}</span></button>`;
function greeting(){ const h=new Date().getHours(); return h<5?"Good evening":h<12?"Good morning":h<18?"Good afternoon":"Good evening"; }

function Home(){
  const {m,cats} = totals();
  const amt = S.period==="yr" ? m*12 : m;
  const order = Object.entries(cats).sort((a,b)=>b[1]-a[1]);
  const bars = order.map(([k,v],i)=>`<span style="flex:${v};background:${GROUPCOL[k]||"#fff"};animation-delay:${i*.06}s"></span>`).join("");
  const legend = order.map(([k,v])=>`<span><i style="background:${GROUPCOL[k]}"></i>${k} <b style="font-weight:650">${money(S.period==="yr"?v*12:v).replace(/\.\d\d$/,"")}</b></span>`).join("");
  const urgent = S.alerts.filter(a=>["trial","price","terms","return"].includes(a.type)).slice(0,4);
  const tone = {trial:["amber","hourglass","Trial ending"],price:["red","trend","Price hike"],terms:["blue","diff","Terms changed"],return:["amber","ret","Return window"]};
  const glow = {amber:"#FFB547",red:"#FF5C7A",blue:"#4DA3FF"};
  const cards = urgent.map(a=>{const [c,i,l]=tone[a.type]; const it=find(a.item);
    return `<button class="alert-card" data-open="${a.item}"><div class="glow" style="background:${glow[c]}"></div><div style="display:flex;justify-content:space-between;align-items:center">${mono(it,"sm")}<span class="pill p-${c}">${ic(i)}${l}</span></div><h4>${a.title}</h4><p>${a.body}</p></button>`}).join("");
  const ev = [];
  S.subs.forEach(s=>s.due<=21&&ev.push({d:s.due,it:s,t:s.trial?"Trial converts":"Renews",amt:money(s.price),c:s.trial?"amber":""}));
  S.contracts.forEach(c=>c.cancelBy&&c.cancelBy<=60&&ev.push({d:c.cancelBy,it:c,t:"Cancel-by deadline",amt:"",c:"violet"}));
  S.stuff.forEach(w=>w.ret&&w.ret<=21&&ev.push({d:w.ret,it:w,t:"Return window closes",amt:"",c:"amber"}));
  ev.sort((a,b)=>a.d-b.d);
  const tl = ev.slice(0,5).map(e=>`<button class="tl-item" data-open="${e.it.id}"><div class="tl-date"><b class="num">${dOff(e.d).getDate()}</b><span>${fdate(e.d,{month:"short"})}</span></div><div class="tl-body">${mono(e.it,"sm")}<div class="row-main"><div class="row-title" style="font-size:14.5px">${e.it.name}</div><div class="row-sub" style="font-size:12.5px">${e.t} · ${rel(e.d).toLowerCase()}</div></div>${e.amt?`<div class="row-amt num" style="font-size:14.5px">${e.amt}</div>`:`<span class="pill p-${e.c}">${e.d} day${e.d===1?"":"s"}</span>`}</div></button>`).join("");
  const sv = S.savings.filter(s=>find(s.item));
  const svTot = sv.reduce((a,s)=>a+s.amt,0);
  const svIco = {pause:"pause",phone:"phone",rotate:"rotate",shield:"shield"};
  const [whole,cents] = amt.toFixed(2).split(".");
  const isEmpty = all().length===0 && S.stuff.length===0;
  const hasNf = !!find("netflix");
  return `<section class="screen stagger" data-screen="home">
  ${header(greeting(), fdate(0,{weekday:"long",month:"long",day:"numeric"}))}
  <div class="hero">
    <div class="hero-row"><div class="hero-label">You've agreed to pay</div><div class="seg-mini"><button data-period="mo" class="${S.period==="mo"?"on":""}">Month</button><button data-period="yr" class="${S.period==="yr"?"on":""}">Year</button></div></div>
    <div class="hero-amount num"><span class="cur">$</span><span id="countup" data-to="${amt}">${Number(whole).toLocaleString("en-CA")}</span><span class="cents">.${cents}</span></div>
    ${hasNf?`<div class="hero-sub"><span class="chip-up">${ic("trend","").replace('<svg','<svg style="width:12px;height:12px"')}+${money(S.period==="yr"?30:2.5)}</span><span>vs last ${S.period==="yr"?"year":"month"} · Netflix went up</span></div>`:`<div class="hero-sub">${isEmpty?"Nothing tracked yet":"Across everything you track"}</div>`}
    <div class="stackbar">${bars||'<span style="flex:1;background:rgba(255,255,255,.22)"></span>'}</div>
    <div class="legend">${legend}</div>
  </div>
  ${!S.imported?`<button class="banner" data-sheet="found"><div class="bi">${ic("spark")}</div><div class="row-main"><div class="row-title">We found 3 more recurring charges</div><div class="row-sub">From your bank and inbox · tap to review</div></div>${ic("chev","chev").replace('<svg','<svg style="width:18px;height:18px;color:var(--text-3)"')}</button>`:""}
  ${isEmpty?`<div class="section">${emptyState("spark","Let's find what you've agreed to","Connect a bank or forward a receipt and we'll fill this in for you. Most people are set up in under a minute.",`<button class="btn btn-primary e-cta" data-go="add">${ic("plus")}Find my subscriptions</button>`)}</div>`:`
  ${cards?`<div class="section"><div class="sec-head"><div class="sec-title">Needs your attention</div><button class="sec-link" data-go="alerts">See all</button></div><div class="hscroll">${cards}</div></div>`:""}
  ${tl?`<div class="section"><div class="sec-head"><div class="sec-title">Coming up</div><span class="muted small" data-go="calendar" role="button">Next 3 weeks</span></div><div class="tl"><div class="tl-rail"></div>${tl}</div></div>`:""}
  ${sv.length?`<div class="section"><div class="save-card"><div class="sec-head" style="margin-bottom:2px" data-sheet="saved"><div><div class="eyebrow" style="color:var(--green);opacity:.9">Ways to save</div><div class="save-amt num">${money(svTot)}<span style="font-size:15px;font-weight:600;opacity:.8">/mo</span></div></div><span class="pill p-green">≈ ${money(svTot*12).replace(/\.\d\d$/,"")}/yr</span></div>
    ${sv.map(s=>`<button class="save-item" data-open="${s.item}"><div class="save-ico">${ic(svIco[s.icon])}</div><div class="row-main"><div class="row-title" style="font-size:14.5px">${s.title}</div><div class="row-sub" style="font-size:12.5px;white-space:normal">${s.body}</div></div><div class="row-amt num" style="color:var(--green);font-size:14px">−${money(s.amt)}</div></button>`).join("")}
  </div></div>`:""}`}
  </section>`;
}

let subFilter = "All";
function Subs(){
  const cats = ["All","Streaming","Trials","Music","Gaming","Cloud","Shopping","Food"].filter(c=>c==="All"||c==="Trials"?true:S.subs.some(s=>s.cat===c));
  let list = S.subs.slice().sort((a,b)=>a.due-b.due);
  if (subFilter==="Trials") list = list.filter(s=>s.trial); else if (subFilter!=="All") list=list.filter(s=>s.cat===subFilter);
  const m = S.subs.reduce((a,x)=>a+monthly(x),0);
  return `<section class="screen stagger" data-screen="subs">
  ${header("Subscriptions","Recurring")}
  <div class="strip"><div class="stat"><b class="num">${money(m).replace(/\.\d\d$/,"")}</b><span>per month</span></div><div class="stat"><b class="num">${money(m*12).replace(/\.\d\d$/,"")}</b><span>per year</span></div><div class="stat"><b class="num">${S.subs.length}</b><span>active</span></div></div>
  <div class="pills">${cats.map(c=>`<button class="fpill ${c===subFilter?"on":""}" data-subf="${c}">${c}</button>`).join("")}</div>
  ${list.length?`<div class="list">${list.map(s=>swipeRow(`<button class="row swipe-fg" data-open="${s.id}">${mono(s)}<div class="row-main"><div class="row-title">${s.name}</div><div class="row-sub">${s.trial?`<span style="color:var(--amber);font-weight:600">Trial ends ${rel(s.due).toLowerCase()}</span>`:s.priceChange?`<span style="color:var(--red);font-weight:600">Price up ${Math.round((s.priceChange.to/s.priceChange.from-1)*100)}%</span> · ${rel(s.due).toLowerCase()}`:s.unused?`<span style="color:var(--text-2)">Unused 7 weeks</span> · ${rel(s.due).toLowerCase()}`:`Renews ${rel(s.due).toLowerCase()}`}</div></div><div class="row-end"><div class="row-amt num">${money(s.price)}</div><div class="row-cyc">${s.cycle==="yr"?"per year":"per month"}</div></div></button>`, sa("sa-blue","bell","Remind",`data-remind="${s.id}"`)+sa("sa-red","x","Cancel",`data-cancel="${s.id}"`))).join("")}</div><p class="hint">${ic("chevL")}Swipe a row for quick actions</p>`:
   S.subs.length? emptyState(subFilter==="Trials"?"hourglass":"subs", subFilter==="Trials"?"No free trials running":`No ${subFilter.toLowerCase()} subscriptions`, subFilter==="Trials"?"When you start a trial, we'll warn you 2 days before it turns into a paid plan.":"Nothing in this category yet. Try another filter.", `<button class="btn btn-ghost e-cta" data-subf="All">Show all</button>`)
   : emptyState("subs","No subscriptions yet","Connect your bank and we'll find every Netflix, Spotify and app store charge for you.",`<button class="btn btn-primary e-cta" data-go="add">${ic("plus")}Find my subscriptions</button>`)}
  </section>`;
}

function Contracts(){
  const m = S.contracts.reduce((a,x)=>a+monthly(x),0);
  const flags = S.contracts.reduce((a,x)=>a+x.red.length,0);
  const next = S.contracts.filter(c=>c.cancelBy).sort((a,b)=>a.cancelBy-b.cancelBy)[0];
  return `<section class="screen stagger" data-screen="contracts">
  ${header("Agreements","Leases, plans & policies")}
  <div class="strip"><div class="stat"><b class="num">${money(m).replace(/\.\d\d$/,"")}</b><span>per month</span></div><div class="stat"><b class="num" style="color:var(--red)">${flags}</b><span>red flags</span></div><div class="stat"><b class="num">${next?next.cancelBy+"d":"—"}</b><span>next deadline</span></div></div>
  ${!S.contracts.length?emptyState("file","No contracts yet","Snap a photo of a lease, phone plan or insurance policy. We'll explain the fine print and flag anything risky.",`<button class="btn btn-primary e-cta" data-sheet="scan">${ic("camera")}Scan a contract</button>`):""}
  ${S.contracts.map(c=>{ const pct = c.end? Math.min(100,Math.round(-c.start/(c.end-c.start)*100)) : null;
   return `<button class="ccard" data-open="${c.id}"><div class="ccard-top">${mono(c)}<div class="row-main"><div class="row-title">${c.name}</div><div class="row-sub">${c.plan}</div></div><div class="row-end"><div class="row-amt num">${money(c.price).replace(/\.00$/,"")}</div><div class="row-cyc">/month</div></div></div>
   ${pct!==null?`<div class="progress"><i style="width:${pct}%"></i></div><div class="meta"><span>${fdate(c.start,{month:"short",year:"numeric"})}</span><span>${pct}% through · ends ${fdate(c.end,{month:"short",day:"numeric",year:"numeric"})}</span></div>`:`<div class="progress"><i style="width:100%;background:linear-gradient(90deg,var(--surface-2),var(--line-2))"></i></div><div class="meta"><span>Month-to-month</span><span>${c.notice} notice to cancel</span></div>`}
   <div class="ccard-foot">${c.cancelBy?`<span class="pill p-amber">${ic("clock")}Decide by ${fdate(c.cancelBy)}</span>`:""}${c.red.length?`<span class="pill p-red">${ic("alert")}${c.red.length} red flag${c.red.length>1?"s":""}</span>`:`<span class="pill p-green">${ic("checkc")}No red flags</span>`}</div></button>`}).join("")}
  </section>`;
}

function Stuff(){
  const rets = S.stuff.filter(w=>w.ret).sort((a,b)=>a.ret-b.ret);
  const ring = w => { const tot=Math.max(1,w.warEnd-w.bought), left=Math.max(0,w.warEnd), p=Math.min(1,left/tot); const C=2*Math.PI*22; const col = left<120?"var(--amber)":"var(--green)";
    return `<div class="ring"><svg viewBox="0 0 54 54"><circle class="bgc" cx="27" cy="27" r="22"/><circle class="fg" cx="27" cy="27" r="22" stroke="${col}" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-p)}" style="stroke-dasharray:${C};--o:${C*(1-p)}"/></svg><b class="num">${Math.round(p*100)}%</b></div>`; };
  const left = d => d>=365?`${(d/365).toFixed(1).replace(".0","")} yr left`:`${Math.round(d/30)} mo left`;
  return `<section class="screen stagger" data-screen="stuff">
  ${header("Warranties","Returns & protection")}
  ${!S.stuff.length?emptyState("shieldc","Nothing under warranty yet","Snap a receipt after you buy something. We'll track the return window, the warranty and any recalls.",`<button class="btn btn-primary e-cta" data-sheet="scan">${ic("camera")}Scan a receipt</button>`):""}
  ${rets.length?`<div class="sec-head"><div class="sec-title">Return windows</div><span class="muted small">${rets.length} open</span></div>
  ${rets.map(w=>`<button class="ret" data-open="${w.id}"><div class="count num">${w.ret}<small>days</small></div><div class="row-main"><div class="row-title">${w.name}</div><div class="row-sub">${w.store} · return by ${fdate(w.ret)}</div></div>${mono(w,"sm")}</button>`).join("")}`:""}
  ${S.stuff.length?`<div class="section" style="margin-top:22px"><div class="sec-head"><div class="sec-title">Under warranty</div><span class="muted small">${money(S.stuff.reduce((a,w)=>a+w.price,0)).replace(/\.\d\d$/,"")} protected</span></div>
  <div class="wgrid">${S.stuff.map(w=>`<button class="wcard" data-open="${w.id}"><div style="display:flex;justify-content:space-between;align-items:flex-start">${mono(w,"sm")}${ring(w)}</div><div><div class="wname">${w.name}</div><div class="wsub">${w.store}</div></div><span class="pill ${w.warEnd<120?"p-amber":"p-green"}" style="align-self:flex-start">${ic("shield")}${left(w.warEnd)}</span></button>`).join("")}</div></div>
  <div class="section"><div class="src">${ic("checkc")}No recalls on your items · checked against Health Canada today</div></div>`:""}
  </section>`;
}

let alertFilter="All";
const ATONE = {trial:["amber","hourglass"],price:["red","trend"],terms:["blue","diff"],return:["amber","ret"],deadline:["violet","clock"],unused:["green","eye"],recall:["green","checkc"]};
function Alerts(){
  const groups = {All:null,"Price & terms":["price","terms"],Deadlines:["trial","return","deadline"],Savings:["unused","recall"]};
  const list = S.alerts.filter(a=>!groups[alertFilter]||groups[alertFilter].includes(a.type));
  const unread = S.alerts.filter(a=>a.unread).length;
  const bg = {amber:"var(--amber-soft)",red:"var(--red-soft)",blue:"var(--blue-soft)",violet:"var(--accent-soft)",green:"var(--green-soft)"};
  const fg = {amber:"var(--amber)",red:"var(--red)",blue:"var(--blue)",violet:"#A592FF",green:"var(--green)"};
  return `<section class="screen stagger" data-screen="alerts">
  <div class="top"><button class="back" data-go="home">${ic("chevL")}Home</button>${unread?`<button class="sec-link" data-readall>Mark all read</button>`:""}</div>
  <h1 class="title">Alerts${unread?` <span class="pill p-violet" style="font-size:13px;vertical-align:6px">${unread} new</span>`:""}</h1>
  <div class="pills">${Object.keys(groups).map(g=>`<button class="fpill ${g===alertFilter?"on":""}" data-af="${g}">${g}</button>`).join("")}</div>
  ${list.length?`<div class="list">${list.map(a=>{const [c,i]=ATONE[a.type]; return swipeRow(`<button class="aitem swipe-fg ${a.unread?"unread":""}" data-alert="${a.id}"><div class="aico" style="background:${bg[c]};color:${fg[c]}">${ic(i)}</div><div class="row-main"><div class="atitle">${a.title}</div><div class="abody">${a.body}</div>${a.diff?`<div class="diff"><span class="old">${a.diff[0]}</span><span class="new">${a.diff[1]}</span></div>`:""}<div class="atime">${ago(a.when)} · ${find(a.item)?.name||""}</div></div></button>`, sa("sa-green","check","Done",`data-done="${a.id}"`)+sa("sa-red","trash","Delete",`data-del="${a.id}"`))}).join("")}</div>`:emptyState("bell","You're all caught up","We'll let you know before anything renews, a trial ends or a company changes its price or terms.")}
  <p class="muted small" style="text-align:center;margin-top:18px">We re-read every company's terms and prices weekly and tell you only what changed for you.</p>
  </section>`;
}

function Add(){
  return `<section class="screen stagger" data-screen="add">
  ${header("Add anything","Zero typing")}
  <p class="muted" style="margin:-8px 0 20px">Most people are set up in under a minute. We find your subscriptions and contracts for you.</p>
  <button class="add-opt" data-sheet="bank"><div class="oi" style="background:linear-gradient(145deg,#7C5CFF,#3D8BFF)">${ic("bank")}</div><div><h4>Connect your bank</h4><p>Finds every recurring charge from the last 12 months</p></div><span class="pill p-green tag-best">Fastest</span></button>
  <button class="add-opt" data-sheet="email"><div class="oi" style="background:linear-gradient(145deg,#FF5C8A,#FF8A5C)">${ic("mail")}</div><div><h4>Forward or connect email</h4><p>Pulls receipts, trial sign-ups and renewal notices</p></div>${ic("chev","chev")}</button>
  <button class="add-opt" data-sheet="scan"><div class="oi" style="background:linear-gradient(145deg,#2ED39A,#14A3C7)">${ic("camera")}</div><div><h4>Scan a contract or receipt</h4><p>Leases, phone plans, warranties — we read the fine print</p></div>${ic("chev","chev")}</button>
  <button class="manual-link" data-sheet="manual"><span>${ic("plus")}</span>Or add one yourself<small>Takes 10 seconds</small></button>
  <div class="section"><div class="card pad" style="display:flex;gap:12px;align-items:center">${ic("lock").replace('<svg','<svg style="width:22px;height:22px;color:var(--green);flex:none"')}<div class="small muted">Read-only access. We can never move money, and your documents are encrypted on your device.</div></div></div>
  </section>`;
}

function Settings(){
  const t = S.theme;
  const tog = k => `<button class="toggle ${S.prefs[k]?"on":""}" data-pref="${k}" aria-label="toggle"></button>`;
  const row = (bg,icon,lbl,end) => `<div class="set-row"><div class="si" style="background:${bg}">${ic(icon)}</div><div class="lbl">${lbl}</div>${end}</div>`;
  return `<section class="screen stagger" data-screen="settings">
  <div class="top"><button class="back" data-go="home">${ic("chevL")}Home</button></div>
  <h1 class="title">Settings</h1>
  <div class="card profile" data-sheet="saved"><div class="avatar">AM</div><div class="row-main"><div class="row-title" style="font-size:17px">Alex Morgan</div><div class="row-sub">${all().length+S.stuff.length} items · household of 2</div></div><span class="pill p-violet">Plus</span></div>
  <div class="set-group"><div class="h3" style="margin-top:0">Appearance</div><div class="seg">${["system","dark","light"].map(x=>`<button class="${t===x?"on":""}" data-theme="${x}">${x[0].toUpperCase()+x.slice(1)}</button>`).join("")}</div></div>
  <div class="set-group"><div class="h3">Alert me about</div><div class="list">
   ${row("#FFB547","hourglass","Free trials ending",tog("trial"))}${row("#FF5C7A","trend","Price & terms changes",tog("price"))}${row("#7C5CFF","ret","Return windows",tog("ret"))}${row("#2ED39A","msg","Sunday summary",tog("digest"))}
   ${row("#4DA3FF","clock","Remind me","<span class='val'>3 days before</span>")}</div></div>
  <div class="set-group"><div class="h3">Connected</div><div class="list">
   ${row("#005DAA","bank","RBC Chequing","<span class='pill p-green'>Synced</span>")}${row("#008A3E","bank","TD Visa","<span class='pill p-green'>Synced</span>")}${row("#FF5C8A","mail","Email forwarding","<span class='val'>On</span>")}</div></div>
  <div class="set-group"><div class="h3">Household & privacy</div><div class="list">
   ${row("#8B5CF6","users","Share with partner",tog("share"))}${row("#111","lock","Face ID lock",tog("lock"))}${row("#2ED39A","dollar","Currency","<span class='val'>CAD $</span>")}${row("#4DA3FF","download","Export everything","<span class='val'>PDF · CSV</span>")}</div></div>
  <div class="set-group"><div class="h3">You saved</div><div class="list">
   <button type="button" class="set-row" data-sheet="saved"><div class="si" style="background:linear-gradient(145deg,#2ED39A,#0b8a5e)">${ic("dollar")}</div><div class="lbl">You saved</div><span class="val num">${money(rSaved())} · ${S.rewards.available.toLocaleString("en-CA")} pts</span></button></div></div>
  <div class="actions" style="margin-top:0"><button class="btn btn-ghost" data-fresh>${ic("spark")}Start fresh (empty app)</button><button class="btn btn-danger" data-reset>${ic("rotate")}Reset demo data</button></div>
  <p class="muted small" style="text-align:center;margin-top:16px">Agreed · prototype v0.2 · sample data only</p>
  </section>`;
}

/* ---------- sheets ---------- */
function chart(h){
  const w=320,ht=100,max=Math.max(...h)*1.08||1,min=Math.max(0,Math.min(...h)*0.7);
  const pts=h.map((v,i)=>[i*(w/(h.length-1)), ht-((v-min)/(max-min))*ht+6]);
  const d=pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");
  return `<svg class="chart" viewBox="0 0 ${w} ${ht+14}" preserveAspectRatio="none"><defs><linearGradient id="cg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7C5CFF" stop-opacity=".45"/><stop offset="1" stop-color="#7C5CFF" stop-opacity="0"/></linearGradient></defs><path d="${d} L${w} ${ht+14} L0 ${ht+14}Z" fill="url(#cg)"/><path d="${d}" fill="none" stroke="#8F7BFF" stroke-width="2.5" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>${pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="#fff" stroke="#7C5CFF" stroke-width="2" vector-effect="non-scaling-stroke"/>`).join("")}</svg>`;
}
function subSheet(s){
  const years = ["2022","2023","2024","2025","Now"];
  return `<div class="sheet-head">${mono(s,"lg")}<div><h2>${s.name}</h2><div class="muted">${s.plan}</div></div><div class="big num">${money(s.price)}<span style="font-size:16px;font-weight:600;color:var(--text-2)"> /${s.cycle==="yr"?"year":"month"}</span></div>${s.trial?`<span class="pill p-amber">${ic("hourglass")}Free trial · converts ${fdate(s.due)}</span>`:`<span class="pill p-violet">${ic("clock")}Next charge ${rel(s.due).toLowerCase()}</span>`}</div>
  <div class="facts"><div class="fact"><span>Next charge</span><b>${fdate(s.due,{weekday:"short",month:"short",day:"numeric"})}</b></div><div class="fact"><span>Per year</span><b class="num">${money(s.cycle==="yr"?s.price:s.price*12)}</b></div><div class="fact"><span>Category</span><b>${s.cat}</b></div><div class="fact"><span>Billed</span><b>${s.cycle==="yr"?"Yearly":"Monthly"}</b></div></div>
  ${s.priceChange?`<div class="flag hi">${ic("trend")}<div><b>Price went up ${fdate(s.priceChange.when)}.</b> ${money(s.priceChange.from)} → ${money(s.priceChange.to)}. That's ${money((s.priceChange.to-s.priceChange.from)*12)} more a year.</div></div>`:""}
  ${s.unused?`<div class="flag med">${ic("eye")}<div><b>Not used in 7 weeks.</b> Pausing saves ${money(s.price*3)} over 3 months.</div></div>`:""}
  <div class="h3">Price history</div><div class="card" style="padding:14px 14px 8px">${chart(s.history)}<div class="meta" style="margin-top:4px">${years.map(y=>`<span>${y}</span>`).join("")}</div></div>
  <div class="h3">Where we found it</div><div class="src">${ic(s.src==="bank"?"bank":"mail")}${s.srcText}</div>
  <div class="actions"><button class="btn btn-primary" data-howcancel="${s.id}">${ic("book")}How to cancel</button><div id="howto"></div><button class="btn btn-ghost" data-remind="${s.id}">${ic("bell")}Remind me 3 days before</button><button class="btn btn-danger" data-cancel="${s.id}">${ic("x")}Mark as cancelled</button>${s.priceChange&&rCan("hike:"+s.id)?`<button class="btn btn-ghost" data-hikereview="${s.id}">${ic("checkc")}I've reviewed this price change</button><div id="hikebox"></div>`:""}<button class="btn btn-ghost" data-edit="${s.id}">${ic("pencil")}Edit</button><button class="btn btn-danger" data-delask="${s.id}">${ic("trash")}Delete</button></div>`;
}
function contractSheet(c){
  return `<div class="sheet-head">${mono(c,"lg")}<div><h2>${c.name}</h2><div class="muted">${c.plan}</div></div><div class="big num">${money(c.price).replace(/\.00$/,"")}<span style="font-size:16px;font-weight:600;color:var(--text-2)"> /month</span></div></div>
  <div class="facts"><div class="fact"><span>Term ends</span><b>${c.end?fdate(c.end,{month:"short",day:"numeric",year:"numeric"}):"Rolling"}</b></div><div class="fact"><span>Decide by</span><b style="color:${c.cancelBy?"var(--amber)":"inherit"}">${c.cancelBy?fdate(c.cancelBy):"Any time"}</b></div><div class="fact"><span>Notice to cancel</span><b>${c.notice}</b></div><div class="fact"><span>Per year</span><b class="num">${money(c.price*12).replace(/\.00$/,"")}</b></div></div>
  <div class="h3">In plain English</div><ul class="bullets">${c.summary.map(x=>`<li>${ic("checkc")}<span>${x}</span></li>`).join("")}</ul>
  <div class="h3">Red flags</div>${c.red.length?c.red.map(r=>`<div class="flag ${r.lvl}">${ic("alert")}<div>${r.t}</div></div>`).join(""):`<div class="src">${ic("checkc")}Nothing risky found yet. Add the document for a full check.</div>`}
  ${Object.keys(c.qa).length?`<div class="h3">Ask about this contract</div><div class="ask">${Object.keys(c.qa).map(q=>`<button data-q="${c.id}" data-qq="${q}">${q}</button>`).join("")}</div>`:""}<div id="ans"></div>
  <div class="actions">${c.red.length&&rCan("review:"+c.id)?`<button class="btn btn-ghost" data-finereview="${c.id}">${ic("book")}I've read the red flags</button>`:""}<button class="btn btn-primary" data-script="${c.id}">${ic("msg")}Get a negotiation script</button><button class="btn btn-ghost" data-toast="Original document opened">${ic("file")}View original document</button><button class="btn btn-ghost" data-edit="${c.id}">${ic("pencil")}Edit</button><button class="btn btn-danger" data-delask="${c.id}">${ic("trash")}Delete</button></div>`;
}
function stuffSheet(w){
  return `<div class="sheet-head">${mono(w,"lg")}<div><h2>${w.name}</h2><div class="muted">${w.store} · bought ${fdate(w.bought,{month:"short",day:"numeric",year:"numeric"})}</div></div><div class="big num">${money(w.price)}</div>${w.ret?`<span class="pill p-amber">${ic("ret")}Return window closes in ${w.ret} days</span>`:`<span class="pill p-green">${ic("shield")}Under warranty</span>`}</div>
  <div class="facts"><div class="fact"><span>Return by</span><b>${w.ret?fdate(w.ret):"Closed"}</b></div><div class="fact"><span>Warranty ends</span><b>${fdate(w.warEnd,{month:"short",year:"numeric"})}</b></div><div class="fact"><span>Recalls</span><b style="color:var(--green)">None found</b></div><div class="fact"><span>Resale value</span><b class="num">~${money(w.price*.62).replace(/\.\d\d$/,"")}</b></div></div>
  ${w.note?`<div class="src">${ic("spark")}${w.note}</div>`:""}
  <div class="actions">${w.ret?`<button class="btn btn-primary" data-toast="Return steps sent to your inbox" data-usereturn="${w.id}">${ic("ret")}Start a return</button>`:`<button class="btn btn-primary" data-toast="Warranty claim started" data-useclaim="${w.id}">${ic("shield")}Start a warranty claim</button>`}<button class="btn btn-ghost" data-toast="Receipt opened">${ic("file")}View receipt</button><button class="btn btn-ghost" data-toast="Manual opened">${ic("book")}Find the manual</button><button class="btn btn-ghost" data-edit="${w.id}">${ic("pencil")}Edit</button><button class="btn btn-danger" data-delask="${w.id}">${ic("trash")}Delete</button></div>`;
}
const BANKS=[["RBC","#005DAA","RBC Royal Bank"],["TD","#008A3E","TD Canada Trust"],["S","#EC111A","Scotiabank"],["BMO","#0079C1","BMO"],["CIBC","#C41F3E","CIBC"],["T","#F28500","Tangerine"],["D","#00874E","Desjardins"]];
let picks = {};
function foundSheet(){
  S.found.forEach(f=>{ if(picks[f.id]===undefined) picks[f.id]=true; });
  return `<div class="sheet-head"><div class="mono lg" style="background:var(--grad)"><span style="width:46%;height:46%;display:grid">${ic("spark")}</span></div><div><h2>We found ${S.found.length} more</h2><div class="muted">Recurring charges you weren't tracking yet</div></div></div>
  <div class="list">${S.found.map(f=>`<button class="bank found" data-pick="${f.id}">${mono(f,"sm")}<div class="row-main"><div class="row-title">${f.name}</div><div class="row-sub">${f.src}</div></div><div class="row-amt num" style="margin-right:10px">${money(f.price)}<span class="row-cyc">/${f.cycle}</span></div><div class="check ${picks[f.id]?"on":""}">${ic("check")}</div></button>`).join("")}</div>
  <div class="actions"><button class="btn btn-primary" data-import>${ic("plus")}Add ${Object.values(picks).filter(Boolean).length} to Agreed</button><button class="btn btn-ghost" data-close>Not now</button></div>`;
}
function bankSheet(){
  return `<div class="sheet-head"><h2>Connect your bank</h2><div class="muted">Read-only · bank-level encryption · disconnect anytime</div></div>
  <div class="list">${BANKS.map(b=>`<button class="bank" data-bank="${b[2]}"><div class="mono sm" style="background:${b[1]};font-size:${b[0].length>2?"10.5px":"13px"}">${b[0]}</div><div class="row-main"><div class="row-title">${b[2]}</div></div>${ic("chev").replace('<svg','<svg style="width:18px;height:18px;color:var(--text-3)"')}</button>`).join("")}</div>`;
}
function scanningSheet(what){ return `<div class="spinner"></div><div class="sheet-head"><h2>${what}</h2><div class="muted">Looking for subscriptions, trials and contracts…</div></div>`; }
function emailSheet(){
  return `<div class="sheet-head"><div class="mono lg" style="background:linear-gradient(145deg,#FF5C8A,#FF8A5C)"><span style="width:46%;height:46%;display:grid">${ic("mail")}</span></div><h2>Your private Agreed address</h2><div class="muted">Forward any receipt, contract or "your trial is ending" email here.</div></div>
  <div class="addr">alex.k7q2@in.agreed.app</div>
  <div class="actions"><button class="btn btn-primary" data-toast="Address copied">${ic("file")}Copy address</button><button class="btn btn-ghost" data-connect="Gmail">${ic("mail")}Connect Gmail instead</button><button class="btn btn-ghost" data-connect="Outlook">${ic("mail")}Connect Outlook instead</button></div>`;
}
function scanSheet(){
  return `<div class="viewfinder"><div class="doc">${"<i></i>".repeat(2)}<i style="width:60%"></i><i style="margin-top:16px"></i><i></i><i style="width:80%"></i><i></i><i style="width:45%"></i><i style="margin-top:16px;width:70%"></i><i></i></div>
  <span class="corner" style="top:24px;left:24px;border-right:0;border-bottom:0;border-radius:12px 0 0 0"></span><span class="corner" style="top:24px;right:24px;border-left:0;border-bottom:0;border-radius:0 12px 0 0"></span><span class="corner" style="bottom:24px;left:24px;border-right:0;border-top:0;border-radius:0 0 0 12px"></span><span class="corner" style="bottom:24px;right:24px;border-left:0;border-top:0;border-radius:0 0 12px 0"></span><div class="scanline"></div></div>
  <div id="scanres"><div class="sheet-head" style="margin-bottom:0"><h2 style="font-size:19px">Reading the fine print…</h2><div class="muted small">Hold steady — no need to line it up perfectly</div></div></div>`;
}
function scanDone(){
  return `<div class="found"><div class="card pad" style="display:flex;gap:12px;align-items:center;margin-bottom:12px"><div class="mono" style="background:linear-gradient(145deg,#7ee2c8,#139e8a)"><span style="width:46%;height:46%;display:grid">${ic("file")}</span></div><div class="row-main"><div class="row-title">Home insurance · Aviva</div><div class="row-sub">$46/month · renews Mar 1 · 2 red flags</div></div></div>
  <ul class="bullets small"><li>${ic("checkc")}<span>Extracted 7 key dates and amounts</span></li><li>${ic("checkc")}<span>Wrote a plain-English summary</span></li><li>${ic("checkc")}<span>Set a reminder 30 days before renewal</span></li></ul>
  <div class="actions"><button class="btn btn-primary" data-close data-toast="Added Aviva home insurance">${ic("plus")}Add to Agreed</button></div></div>`;
}

let formQ="";
const catalogAll = () => window.CATALOG || [];
function catalogFor(type, searching=false){
  const all=catalogAll();
  if(searching) return all;
  if(type==="stuff") return all.filter(p=>p.kind==="stuff"||p.cat==="Protection");
  // Subscription/Contract: browse every recurring service; picking one sets the type.
  return all.filter(p=>p.kind!=="stuff");
}
function catalogMatch(p,q){
  if(!q) return true;
  const s=q.toLowerCase();
  return p.name.toLowerCase().includes(s) || (p.cat||"").toLowerCase().includes(s) || (p.aka||[]).some(a=>a.toLowerCase().includes(s));
}
const CUSTOM_TILE = {id:"custom",name:"Custom",custom:true};
function catalogTile(p){
  const on=F.preset && (p.custom ? F.preset.custom : F.preset.id===p.id);
  if(p.custom) return `<button class="preset ${on?"on":""}" data-preset="custom"><div class="mono sm ghost-mono">${ic("plus")}</div><span>Custom</span></button>`;
  return `<button class="preset ${on?"on":""}" data-preset="${p.id}">${mono(p,"sm")}<span>${p.name}</span></button>`;
}
function catalogResultsHTML(){
  const t=F.type, q=formQ.trim(), items=catalogFor(t,!!q).filter(p=>catalogMatch(p,q));
  const order=["Streaming","Music","Gaming","Cloud","Apps","Productivity","News","Food","Fitness","Shopping","Phone","Internet","TV","Utilities","Insurance","Banking","Housing","Auto","Education","Security","Dating","Pets","Transit","Protection","Memberships","Charity","Health"];
  let html="";
  if(!q){
    const popular=catalogFor(t).filter(p=>p.popular);
    html+=`<div class="presets">${popular.map(catalogTile).join("")}${catalogTile(CUSTOM_TILE)}</div>`;
  }
  const cats=[...new Set(items.map(p=>p.cat))];
  cats.sort((a,b)=>(order.indexOf(a)<0?99:order.indexOf(a))-(order.indexOf(b)<0?99:order.indexOf(b))||a.localeCompare(b));
  for(const c of cats){
    const g=items.filter(p=>p.cat===c);
    if(!g.length) continue;
    html+=`<div class="h3">${c}</div><div class="presets">${g.map(catalogTile).join("")}</div>`;
  }
  if(q){
    if(!items.length) html+=`<div class="muted" style="margin:8px 0 16px">No matches. Try another name, or pick Custom.</div>`;
    html+=`<div class="h3">Or</div><div class="presets">${catalogTile(CUSTOM_TILE)}</div>`;
  }
  return html;
}
function catalogBlock(){
  if(F.editId) return "";
  return `<div class="h3">Pick a service</div>
  <div class="sbox">${ic("search")}<input id="q-cat" placeholder="Search services…" value="${formQ.replace(/"/g,"&quot;")}" autocomplete="off" enterkeyhint="search"><button class="sclr ${formQ?"":"off"}" data-catclr aria-label="Clear">${ic("x")}</button></div>
  <div id="cat-res">${catalogResultsHTML()}</div>`;
}
function applyCatalog(p){
  if(!p || p.custom){
    F.preset={id:"custom",name:"Custom",custom:true};
    F.name=""; F.price="";
    rerenderForm(); return;
  }
  F.preset=p; F.name=p.name;
  F.price=p.price!=null?Number(p.price).toFixed(2):"";
  F.cat=p.cat;
  if(p.cycle) F.cycle=p.cycle;
  if(p.kind==="contract") F.type="contract";
  else if(p.kind==="sub") F.type="sub";
  else if(p.kind==="stuff") F.type="stuff";
  rerenderForm();
}

const PAL = ["linear-gradient(145deg,#9d7bff,#4a2db0)","linear-gradient(145deg,#ff7a9c,#b0204a)","linear-gradient(145deg,#4dc3ff,#1559b8)","linear-gradient(145deg,#ffb84d,#b86a0a)","linear-gradient(145deg,#4de0a8,#0b8a5e)","linear-gradient(145deg,#8a8f99,#3b3f47)"];
const isoOff = n => { const d=dOff(n); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; };
const offIso = v => Math.round((new Date(v+"T00:00:00") - today)/864e5);
let F;
function resetForm(type="sub"){ formQ=""; F={type,name:"",price:"",cycle:"mo",date:isoOff(type==="stuff"?365:30),cat:type==="sub"?"Streaming":type==="contract"?"Phone":"Electronics",remind:true,preset:null}; }
function formLook(){ const p=F.preset; const n=F.name.trim(); if(p&&!p.custom&&p.name===n) return p; if(F.editId&&F.look&&n===(F.origName||n)) return F.look; return {name:n||"New item",bg:PAL[[...n].reduce((a,c)=>a+c.charCodeAt(0),0)%PAL.length],mono:n?n.replace(/[^A-Za-z0-9]/g,"").slice(0,1).toUpperCase()||"•":"@plus"}; }
function fillForm(it){
  const isSub=S.subs.includes(it), isCon=S.contracts.includes(it), type=isSub?"sub":isCon?"contract":"stuff";
  const off=isSub?it.due:isCon?(it.end??30):it.warEnd, date=isoOff(off);
  F={type,name:it.name,price:(it.price||0).toFixed(2),cycle:it.cycle||"mo",date,origDate:date,cat:it.cat||(type==="stuff"?"Electronics":"Home"),remind:true,preset:null,editId:it.id,origName:it.name,look:{name:it.name,bg:it.bg,fg:it.fg,mono:it.mono}};
}
function formPreview(){
  const lk=formLook(), d=offIso(F.date), price=parseFloat(F.price)||0;
  const lbl={sub:F.cycle==="yr"?"Renews":"Next charge",contract:"Term ends",stuff:"Warranty ends"}[F.type];
  const m = lk.mono==="@plus" ? `<div class="mono lg ghost-mono">${ic("plus")}</div>` : mono(lk,"lg");
  return `${m}<div class="pv-name">${F.name.trim()||({sub:"New subscription",contract:"New contract",stuff:"New purchase"}[F.type])}</div><div class="pv-sub">${lbl} ${isNaN(d)?"—":fdate(d,{month:"short",day:"numeric",year:"numeric"})}${F.type!=="stuff"&&price?` · ${money(F.cycle==="yr"&&F.type==="sub"?price*1:price*12).replace(/\.\d\d$/,"")}/yr`:""}</div>`;
}
function manualSheet(){
  const t=F.type, CAT={sub:["Streaming","Music","Gaming","Apps","Cloud","Food","Shopping","News","Fitness","Productivity"],contract:["Phone","Internet","TV","Home","Insurance","Fitness","Utilities","Banking","Auto"],stuff:["Electronics","Appliances","Furniture","Protection","Other"]}[t];
  if(F.cat&&!CAT.includes(F.cat)) CAT.unshift(F.cat);
  const typ=F.preset&&!F.preset.custom&&F.preset.typical&&F.preset.price!=null;
  return `<div class="mf">
  ${F.editId?`<div class="eyebrow" style="text-align:center;margin:4px 0 14px">Editing</div>`:`<div class="seg mf-seg">${[["sub","Subscription"],["contract","Contract"],["stuff","Warranty"]].map(([k,l])=>`<button class="${t===k?"on":""}" data-ftype="${k}">${l}</button>`).join("")}</div>`}
  <div class="pv" id="pv">${formPreview()}</div>
  <div class="amt"><span class="amt-cur">$</span><input id="f-price" class="num" inputmode="decimal" placeholder="0.00" value="${F.price}" aria-label="Amount" style="width:${amtW()}"></div>
  ${t==="sub"?`<div class="cyc"><div class="seg-mini mf-cyc"><button class="${F.cycle==="mo"?"on":""}" data-fcyc="mo">Monthly</button><button class="${F.cycle==="yr"?"on":""}" data-fcyc="yr">Yearly</button></div></div>`:`<div class="amt-hint">${t==="contract"?"per month":"price paid"}</div>`}
  ${typ?`<div class="amt-hint">Typical price · editable</div>`:""}
  ${catalogBlock()}
  <div class="h3">Details</div>
  <div class="list fields">
    <label class="field"><span>Name</span><input id="f-name" placeholder="${{sub:"e.g. Netflix",contract:"e.g. Rogers phone plan",stuff:"e.g. MacBook Air"}[t]}" value="${F.name.replace(/"/g,"&quot;")}" autocomplete="off"></label>
    <label class="field"><span>${{sub:"Next charge",contract:"Term ends",stuff:"Warranty ends"}[t]}</span><input id="f-date" type="date" value="${F.date}"></label>
    <div class="field"><span>Category</span><div class="catpills">${CAT.map(c=>`<button class="cp ${F.cat===c?"on":""}" data-fcat="${c}">${c}</button>`).join("")}</div></div>
    <div class="field"><span>Remind me 3 days before</span><button class="toggle ${F.remind?"on":""}" data-fremind aria-label="Reminder"></button></div>
  </div>
  <div class="actions"><button class="btn btn-primary" data-fsave ${F.name.trim()&&parseFloat(F.price)>0?"":"disabled"}>${ic("check")}${F.editId?"Save changes":"Save "+({sub:"subscription",contract:"contract",stuff:"item"})[t]}</button></div></div>`;
}
const amtW = () => ((F.price||"0.00").length*0.6+0.12)+"em";
function refreshForm(){ const ai=$("#f-price"); if(ai) ai.style.width=amtW(); const pv=$("#pv"); if(pv) pv.innerHTML=formPreview(); const b=$("[data-fsave]"); if(b) b.disabled=!(F.name.trim()&&parseFloat(F.price)>0); }
function rerenderForm(){ const sc=sheetEl().scrollTop; sheetEl().innerHTML=SHEET_CHROME()+manualSheet(); sheetEl().scrollTop=sc; }
function saveForm(){
  const lk=formLook(), d=Math.max(1,offIso(F.date)||30), price=Math.round(parseFloat(F.price)*100)/100, name=F.name.trim();
  const look={bg:lk.bg,fg:lk.fg,mono:lk.mono==="@plus"?"•":lk.mono,cat:F.cat,name,price};
  if(F.editId){
    const it=find(F.editId); if(!it) return;
    const oldPrice=it.price, hadHike=F.type==="sub"&&it.priceChange&&rCan("hike:"+it.id);
    Object.assign(it,look);
    if(F.type==="sub"){ it.cycle=F.cycle; it.due=d; if(it.plan==="Annual"||it.plan==="Monthly") it.plan=F.cycle==="yr"?"Annual":"Monthly"; }
    else if(F.type==="contract"){ if(F.date!==F.origDate || it.end!=null) it.end=d; }
    else it.warEnd=d;
    let extra="";
    if(hadHike){ const saved=Math.max(0,Math.round((oldPrice-it.price)*12*100)/100); const pts=rHike(it,saved,true); if(pts) extra=` · +${pts.toLocaleString("en-CA")} pts`; }
    save(); closeSheet(); render(); toast(`Updated ${name}`+extra); return;
  }
  const id="m"+Date.now(), base={id,...look};
  if(F.type==="sub") S.subs.push({...base,plan:F.cycle==="yr"?"Annual":"Monthly",cycle:F.cycle,due:d,src:"manual",srcText:"Added by you",history:[price,price,price,price,price]});
  else if(F.type==="contract") S.contracts.push({...base,plan:F.cat+" · added by you",cycle:"mo",start:-1,end:d,cancelBy:null,notice:"—",summary:["Add the document and we'll write a plain-English summary here."],red:[],qa:{}});
  else { S.stuff.push({...base,store:"Added by you",bought:0,ret:null,warEnd:d}); rWarrantyLog(S.stuff[S.stuff.length-1]); }
  S.imported=true; rSetup(); save(); closeSheet(); render(); toast(`Added ${name}`);
}
const SHEET_CHROME = () => `<div class="grab"></div><button class="sheet-x" data-close aria-label="Close">${ic("x")}</button>`;
const sheetEl = () => $(".sheet"), scrim = () => $(".scrim");
function openSheet(html){ if(openFg) closeFg(openFg); const s=sheetEl(); s.style.transform=""; s.innerHTML=SHEET_CHROME()+html; s.scrollTop=0; scrim().style.opacity=""; requestAnimationFrame(()=>{s.classList.add("show");scrim().classList.add("show");}); }
function closeSheet(){ const s=sheetEl(); s.classList.remove("show"); s.style.transform=""; scrim().classList.remove("show"); scrim().style.opacity=""; }
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
function openItem(id, srcEl){
  const it = find(id); if(!it) return;
  if (S.subs.includes(it)) openSheet(subSheet(it)); else if (S.contracts.includes(it)) openSheet(contractSheet(it)); else openSheet(stuffSheet(it));
  const src = srcEl && srcEl.querySelector(".mono"); const dst = sheetEl().querySelector(".sheet-head .mono");
  if (!src || !dst || reduced()) return;
  // shared-element: fly the row's icon into the sheet header while the sheet rises
  const sh = sheetEl(), a = src.getBoundingClientRect(), arect = app.getBoundingClientRect();
  const lift = sh.getBoundingClientRect().top - (arect.bottom - sh.offsetHeight);
  const b0 = dst.getBoundingClientRect(), b = {left:b0.left, top:b0.top - lift, width:b0.width, height:b0.height};
  const ghost = src.cloneNode(true); ghost.classList.add("ghost");
  Object.assign(ghost.style,{position:"absolute",left:(a.left-arect.left)+"px",top:(a.top-arect.top)+"px",width:a.width+"px",height:a.height+"px",margin:0,zIndex:60,transformOrigin:"top left",fontSize:getComputedStyle(src).fontSize,borderRadius:getComputedStyle(src).borderRadius});
  app.appendChild(ghost); dst.style.opacity=0; src.style.opacity=0;
  const sx=b.width/a.width, dx=b.left-a.left, dy=b.top-a.top;
  const anim = ghost.animate([{transform:"translate(0,0) scale(1)",boxShadow:"0 6px 14px -8px rgba(0,0,0,.5)"},{transform:`translate(${dx}px,${dy}px) scale(${sx})`,boxShadow:"0 20px 40px -12px rgba(0,0,0,.6)"}],{duration:460,easing:"cubic-bezier(.2,.9,.2,1)",fill:"forwards"});
  sh.querySelector(".sheet-head").classList.add("head-in");
  anim.onfinish = () => { dst.style.opacity=""; ghost.remove(); setTimeout(()=>{src.style.opacity="";},120); };
}
window.agreedOpen = openItem;
window.agreedSheet = k => ({manual:()=>{resetForm();openSheet(manualSheet());},found:()=>openSheet(foundSheet()),bank:()=>openSheet(bankSheet()),email:()=>openSheet(emailSheet()),scan:()=>startScan(),saved:()=>openRewards()})[k]();
function startScan(){ openSheet(scanSheet()); setTimeout(()=>{const r=$("#scanres"); if(r) r.innerHTML=scanDone(); const l=$(".scanline"); if(l) l.style.display="none";},2400); }
function runImport(label){ openSheet(scanningSheet(label)); setTimeout(()=>{ if(sheetEl().classList.contains("show")) sheetEl().innerHTML=`<div class="grab"></div>`+foundSheet(); },1700); }

/* ---------- router ---------- */

/* ---------- search ---------- */
let searchQ="", searchKind="All", from="home";
const hay = it => [it.name,it.plan,it.cat,it.store,it.srcText,it.note].filter(Boolean).join(" ").toLowerCase();
function searchResults(){
  const q=searchQ.trim().toLowerCase();
  const groups=[{k:"Subscriptions",items:S.subs},{k:"Agreements",items:S.contracts},{k:"Warranties",items:S.stuff}]
    .filter(g=>searchKind==="All"||searchKind===g.k)
    .map(g=>({...g,items:q?g.items.filter(it=>hay(it).includes(q)):g.items}))
    .filter(g=>g.items.length);
  const n=groups.reduce((a,g)=>a+g.items.length,0);
  if(!n) return emptyState("search", q?"No matches":"Search everything", q?"Nothing matches that. Try a name, category or store.":"Type a name, category or store to find anything you've agreed to.", q?`<button class="btn btn-ghost e-cta" data-qclr>Clear search</button>`:"");
  return groups.map(g=>`<div class="section" style="margin-top:18px"><div class="sec-head"><div class="sec-title">${g.k}</div><span class="muted small">${g.items.length}</span></div>
    <div class="list">${g.items.map(it=>`<button class="row" data-open="${it.id}">${mono(it)}<div class="row-main"><div class="row-title">${it.name}</div><div class="row-sub">${it.plan||it.store||it.cat||""}${it.price!=null?` · ${money(it.price)}`:""}</div></div></button>`).join("")}</div></div>`).join("");
}
function Search(){
  return `<section class="screen stagger" data-screen="search">
  <div class="top"><button class="back" data-go="${from}">${ic("chevL")}${({home:"Home",subs:"Subs",contracts:"Agreements",stuff:"Warranties",alerts:"Alerts",add:"Add",settings:"Settings"})[from]||"Back"}</button><button class="icon-btn" data-go="calendar" aria-label="Calendar">${ic("cal")}</button></div>
  <h1 class="title">Search</h1>
  <div class="sbox">${ic("search")}<input id="q-search" placeholder="Name, category, store…" value="${searchQ.replace(/"/g,"&quot;")}" autocomplete="off" enterkeyhint="search"><button class="sclr ${searchQ?"":"off"}" data-qclr aria-label="Clear">${ic("x")}</button></div>
  <div class="pills">${["All","Subscriptions","Agreements","Warranties"].map(k=>`<button class="fpill ${k===searchKind?"on":""}" data-sk="${k}">${k}</button>`).join("")}</div>
  <div id="q-res">${searchResults()}</div>
  </section>`;
}

/* ---------- calendar ---------- */
let calCursor=new Date(today.getFullYear(),today.getMonth(),1), calDay=null;
const ymd = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
function calEvents(y,m){
  const ev=[], inMo=(off)=>{const d=dOff(off); return d.getFullYear()===y&&d.getMonth()===m?d:null};
  S.subs.forEach(s=>{
    const base=dOff(s.due); let d;
    if(s.cycle==="yr"){ if(base.getMonth()!==m) return; d=new Date(y,m,base.getDate()); if(d.getMonth()!==m) return; }
    else d=new Date(y,m,Math.min(base.getDate(), new Date(y,m+1,0).getDate()));
    ev.push({d,it:s,t:s.trial?"Trial converts":"Renews",amt:money(s.price),c:s.trial?"amber":"violet"});
  });
  S.contracts.forEach(c=>{
    let d; if(c.end!=null&&(d=inMo(c.end))) ev.push({d,it:c,t:"Term ends",amt:money(c.price),c:"violet"});
    if(c.cancelBy!=null&&(d=inMo(c.cancelBy))) ev.push({d,it:c,t:"Decide by",amt:"",c:"amber"});
  });
  S.stuff.forEach(w=>{
    let d; if(w.ret!=null&&(d=inMo(w.ret))) ev.push({d,it:w,t:"Return window",amt:"",c:"amber"});
    if(w.warEnd!=null&&(d=inMo(w.warEnd))) ev.push({d,it:w,t:"Warranty ends",amt:"",c:"green"});
  });
  ev.sort((a,b)=>a.d-b.d||a.it.name.localeCompare(b.it.name));
  return ev;
}
function Calendar(){
  const y=calCursor.getFullYear(), m=calCursor.getMonth(), ev=calEvents(y,m);
  const byDay={}; ev.forEach(e=>{(byDay[e.d.getDate()]=byDay[e.d.getDate()]||[]).push(e)});
  const first=new Date(y,m,1).getDay(), dim=new Date(y,m+1,0).getDate();
  const isThis=y===today.getFullYear()&&m===today.getMonth(), title=calCursor.toLocaleDateString("en-CA",{month:"long",year:"numeric"});
  const cells=[];
  for(let i=0;i<first;i++) cells.push(`<div class="dcell empty"></div>`);
  for(let day=1;day<=dim;day++){
    const key=ymd(new Date(y,m,day)), marks=byDay[day]||[], isToday=isThis&&day===today.getDate(), isSel=calDay===key;
    cells.push(`<button class="dcell ${isToday?"today":""} ${isSel?"sel":""} ${marks.length?"has":""}" data-cday="${key}" aria-label="${key}"><span class="dn">${day}</span><span class="ddots">${marks.slice(0,3).map(e=>`<i class="d-${e.c}"></i>`).join("")}</span></button>`);
  }
  const list = calDay? ev.filter(e=>ymd(e.d)===calDay) : ev.filter(e=>!isThis||ymd(e.d)>=ymd(today));
  const head = calDay? new Date(calDay+"T00:00:00").toLocaleDateString("en-CA",{weekday:"long",month:"short",day:"numeric"}) : "Upcoming";
  const listHtml = list.length? `<div class="list">${list.map(e=>`<button class="row" data-open="${e.it.id}">${mono(e.it)}<div class="row-main"><div class="row-title">${e.it.name}</div><div class="row-sub">${e.t} · ${e.d.toLocaleDateString("en-CA",{month:"short",day:"numeric"})}</div></div>${e.amt?`<div class="row-amt num">${e.amt}</div>`:""}</button>`).join("")}</div>`
    : emptyState("cal", calDay?"Nothing on this day":"No renewals this month", calDay?"Nothing you've agreed to renews or expires on this day.":"Flip to another month, or add something you want us to watch.", calDay?`<button class="btn btn-ghost e-cta" data-cday="">Show all</button>`:"");
  return `<section class="screen stagger" data-screen="calendar">
  <div class="top"><button class="back" data-go="${from==="search"?"search":"home"}">${ic("chevL")}${from==="search"?"Search":"Home"}</button><button class="icon-btn" data-go="search" aria-label="Search">${ic("search")}</button></div>
  <h1 class="title">Renewals</h1>
  <div class="cal"><div class="cal-nav"><button data-cmo="-1" aria-label="Previous month">${ic("chevL")}</button><div class="cal-title num">${title}</div><button data-cmo="1" aria-label="Next month">${ic("chev")}</button></div>
  <div class="cdow">${["S","M","T","W","T","F","S"].map(d=>`<span>${d}</span>`).join("")}</div>
  <div class="cgrid">${cells.join("")}</div></div>
  <div class="section"><div class="sec-head"><div class="sec-title">${head}</div><span class="muted small">${list.length}</span></div>${listHtml}</div>
  </section>`;
}

const ROUTES = {home:Home,subs:Subs,contracts:Contracts,stuff:Stuff,alerts:Alerts,add:Add,settings:Settings,search:Search,calendar:Calendar};
const TABS = [["home","home","Home"],["subs","subs","Subs"],["add","plus",""],["contracts","file","Agreements"],["stuff","shieldc","Warranties"]];
function route(){ return (location.hash.replace("#/","")||"home").split("?")[0]; }
function render(){
  const r = ROUTES[route()] ? route() : "home";
  if (!["search","calendar"].includes(r)) from = r;
  openFg = null;
  const view = $("#view");
  view.innerHTML = ROUTES[r]();
  $(".tabbar").innerHTML = TABS.map(([k,i,l])=> k==="add" ? `<button class="fab" data-go="add" aria-label="Add">${ic("plus")}</button>` : `<button class="tab ${r===k?"on":""}" data-go="${k}">${ic(i)}<span>${l}</span><span class="tdot"></span></button>`).join("");
  const cu = $("#countup"); if (cu) countUp(cu);
  if (r==="search"){ const i=$("#q-search"); if(i) setTimeout(()=>i.focus(),200); }
}
window.agreedSearch = () => { location.hash="#/search"; };
window.agreedCal = () => { location.hash="#/calendar"; };

function countUp(el){
  const to = Math.floor(+el.dataset.to); if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const t0 = performance.now(), dur=900;
  const step = t => { const p=Math.min(1,(t-t0)/dur), e=1-Math.pow(1-p,3); el.textContent=Math.round(to*e).toLocaleString("en-CA"); if(p<1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
function applyTheme(){
  const t = S.theme==="system" ? (matchMedia("(prefers-color-scheme: light)").matches?"light":"dark") : S.theme;
  document.documentElement.dataset.theme = t;
  document.querySelector('meta[name="theme-color"]').content = t==="light"?"#F3F4F9":"#06080F";
}
function onboarding(){
  if (S.onboarded) return;
  const o = document.createElement("div"); o.className="onb";
  const fc = (it,txt,pill,c,top,rot,delay) => `<div class="fcard" style="top:${top}px;rotate:${rot}deg;animation-delay:${delay}s">${mono(it,"sm")}<div class="row-main"><div class="row-title" style="font-size:14px">${it.name}</div><div style="font-size:12px;opacity:.7">${txt}</div></div><span class="pill p-${c}">${pill}</span></div>`;
  o.innerHTML = `<div class="onb-art"><div class="orb"></div><div class="stack">${fc(S.subs[0],"Price up to $18.99","+15%","red",0,-4,.1)}${fc(S.contracts[0],"Promo ends · +$20/mo","60 days","amber",84,3,.25)}${fc(S.stuff[0],"Return window closes","3 days","violet",168,-2,.4)}</div></div>
  <div class="onb-body"><h1>Everything you've <em>agreed</em> to. In one place.</h1><p>Subscriptions, contracts, leases and warranties — found automatically, explained in plain English, and watched for price hikes.</p>
  <section class="onb-offer" aria-label="Pro and Savings score">
    <h2>Pay once. Own it. No subscription.</h2>
    <p>Pro is a one-time purchase. You pay once and keep it — no monthly plan, no renewal surprise.</p>
    <div class="onb-feats">
      <div class="onb-feat"><div class="oi" style="background:var(--grad)">${ic("checkc")}</div><div><h3>Pro <span class="pill p-violet">Pay once</span></h3><p>Bank import, alerts, and cancel-or-negotiate help, yours for good. Not a subscription.</p></div></div>
      <div class="onb-feat"><div class="oi" style="background:linear-gradient(145deg,#2ED39A,#0b8a5e)">${ic("dollar")}</div><div><h3>Savings score <span class="pill p-green">Free</span></h3><p>Always free. A plain-English score of what you've already saved and where you can save more. No paywall.</p></div></div>
    </div>
  </section>
  </div>
  <div class="onb-cta"><button class="btn btn-primary" data-start>Get started</button><p class="small" style="text-align:center;margin:12px 0 0">Takes about 30 seconds · no typing</p></div>`;
  app.appendChild(o);
}

/* ---------- events ---------- */
document.addEventListener("click", e => {
  if (swallow){ swallow=false; e.preventDefault(); e.stopPropagation(); return; }
  const t = e.target.closest("button,[data-close],[data-go],[data-sheet]"); if(!t) return;
  const d = t.dataset;
  if (d.toast) toast(d.toast);
  if (d.go){ closeSheet(); location.hash="#/"+d.go; return; }
  if (d.open){ openItem(d.open, t); return; }
  if (d.ftype){ const keep={name:F.name,price:F.price}; resetForm(d.ftype); Object.assign(F,keep); rerenderForm(); return; }
  if (d.fcyc){ F.cycle=d.fcyc; rerenderForm(); return; }
  if (d.fcat){ e.preventDefault(); F.cat=d.fcat; rerenderForm(); return; }
  if (d.fremind!==undefined){ e.preventDefault(); F.remind=!F.remind; t.classList.toggle("on"); return; }
  if (d.preset){ applyCatalog(d.preset==="custom"?CUSTOM_TILE:catalogAll().find(x=>x.id===d.preset)); return; }
  if (d.catclr!==undefined){ formQ=""; rerenderForm(); const i=$("#q-cat"); if(i) i.focus(); return; }
  if (d.fsave!==undefined){ saveForm(); return; }
  if (d.edit){ fillForm(find(d.edit)); openSheet(manualSheet()); return; }
  if (d.delask){ t.style.display="none"; let box=$(".delask"); if(box) box.remove(); box=document.createElement("div"); box.className="delask"; box.innerHTML=`<p>Delete <b>${(find(d.delask)||{}).name||"this"}</b> from Agreed? You can undo this.</p><button class="btn btn-danger" data-delyes="${d.delask}">${ic("trash")}Delete</button><button class="btn btn-ghost" data-delno>Keep it</button>`; t.after(box); box.scrollIntoView({behavior:reduced()?"auto":"smooth",block:"center"}); return; }
  if (d.delno!==undefined){ const box=t.closest(".delask"), b=sheetEl().querySelector("[data-delask]"); if(b) b.style.display=""; if(box) box.remove(); return; }
  if (d.delyes){ deleteItem(d.delyes); return; }
  if (d.undo!==undefined){ undoDelete(); return; }
  if (d.sk){ searchKind=d.sk; render(); return; }
  if (d.qclr!==undefined){ searchQ=""; render(); return; }
  if (d.cmo){ calCursor=new Date(calCursor.getFullYear(), calCursor.getMonth()+(+d.cmo), 1); calDay=null; render(); return; }
  if (d.cday!==undefined){ calDay=calDay===d.cday||d.cday===""?null:d.cday; render(); return; }
  if (d.done){ const a=S.alerts.find(x=>x.id===d.done); if(a) a.unread=false; save(); render(); toast("Marked as done"); return; }
  if (d.del){ S.alerts=S.alerts.filter(x=>x.id!==d.del); save(); render(); toast("Alert deleted"); return; }
  if (d.fresh!==undefined){ Object.assign(S,{subs:[],contracts:[],stuff:[],alerts:[],savings:[],found:[],imported:true,rewards:emptyRewards()}); save(); location.hash="#/home"; render(); toast("Starting fresh"); return; }
  if (d.sheet){ window.agreedSheet(d.sheet); return; }
  if (d.period){ S.period=d.period; save(); render(); return; }
  if (d.subf){ subFilter=d.subf; render(); return; }
  if (d.af){ alertFilter=d.af; render(); return; }
  if (d.readall!==undefined){ S.alerts.forEach(a=>a.unread=false); save(); render(); toast("All caught up"); return; }
  if (d.alert){ const a=S.alerts.find(x=>x.id===d.alert); a.unread=false; save(); render(); openItem(a.item); return; }
  if (d.theme){ S.theme=d.theme; save(); applyTheme(); render(); return; }
  if (d.pref){ S.prefs[d.pref]=!S.prefs[d.pref]; save(); t.classList.toggle("on"); return; }
  if (d.reset!==undefined){ localStorage.removeItem(KEY); location.hash="#/home"; location.reload(); return; }
  if (d.close!==undefined){ closeSheet(); return; }
  if (d.start!==undefined){ S.onboarded=true; save(); const o=$(".onb"); o.style.transition="opacity .4s, transform .4s"; o.style.opacity=0; o.style.transform="scale(1.03)"; setTimeout(()=>o.remove(),400); return; }
  if (d.pick){ picks[d.pick]=!picks[d.pick]; sheetEl().innerHTML=`<div class="grab"></div>`+foundSheet(); return; }
  if (d.import!==undefined){ const add=S.found.filter(f=>picks[f.id]); add.forEach((f,i)=>S.subs.push({id:f.id,name:f.name,plan:f.cycle==="yr"?"Annual":"Monthly",cat:"Shopping",price:f.price,cycle:f.cycle,due:8+i*5,bg:f.bg,mono:f.mono,src:"bank",srcText:"Found in "+f.src,history:[f.price,f.price,f.price,f.price,f.price]})); S.found=[]; S.imported=true; rSetup(); save(); closeSheet(); render(); toast(`Added ${add.length} subscriptions`); return; }
  if (d.bank){ runImport(`Scanning ${d.bank}`); return; }
  if (d.connect){ runImport(`Reading your ${d.connect} receipts`); return; }
  if (d.q){ const c=find(d.q); $("#ans").innerHTML=`<div class="answer"><div class="who">${ic("spark").replace('<svg','<svg style="width:14px;height:14px;color:#A592FF"')}Agreed explains</div>${c.qa[d.qq]}</div>`; return; }
  if (d.script){ const c=find(d.script); $("#ans").innerHTML=`<div class="answer"><div class="who">${ic("spark").replace('<svg','<svg style="width:14px;height:14px;color:#A592FF"')}Your script for ${c.name}</div>“Hi, I've been a customer for ${Math.round(-c.start/30)} months and my ${c.plan.split("·")[0].trim()} is coming up for renewal. I've seen better offers from competitors at about ${money(c.price*.8).replace(/\.\d\d$/,"")}/month. Before I switch, can you match that or put me on a new promotion? If not, I'd like to know the cancellation steps.”</div>`; $("#ans").scrollIntoView({behavior:"smooth",block:"center"});
    if(c && rCan("negotiate:"+c.id) && !$("#nego")){
      const box=document.createElement("div"); box.id="nego"; box.className="nego";
      box.innerHTML=`<p class="muted small">If they agreed to a new monthly rate, log it here. We'll add the first-year savings to You saved.</p><div class="nego-row"><span>$</span><input id="nego-amt" class="num" inputmode="decimal" value="${c.price.toFixed(2)}" aria-label="New monthly rate"><button class="btn btn-primary" data-negoconfirm="${c.id}">Save the new rate</button></div>`;
      $("#ans").after(box);
    }
    return; }
  if (d.howcancel){ const s=find(d.howcancel); $("#howto").innerHTML=`<div class="answer"><div class="who">${ic("spark").replace('<svg','<svg style="width:14px;height:14px;color:#A592FF"')}3 steps · about 2 minutes</div>1. Open ${s.name} → Account → Membership.<br>2. Tap “Cancel ${s.trial?"trial":"membership"}” and confirm.<br>3. You keep access until ${fdate(s.due)} — no refund needed.</div>`; return; }
  if (d.hikereview){
    const it=find(d.hikereview), box=$("#hikebox");
    if(it&&box) box.innerHTML=`<div class="redeemask"><p>You've looked at the ${it.name} price change. Keep the new price, or change your plan. Cancelling still earns cancel points instead.</p><button class="btn btn-primary" data-hikekeep="${it.id}">Keep ${money(it.price)}</button><button class="btn btn-ghost" data-edit="${it.id}">Change my plan</button></div>`;
    return;
  }
  if (d.hikekeep){ const it=find(d.hikekeep); rHike(it,0); closeSheet(); render(); return; }
  if (d.finereview){ rReview(find(d.finereview)); const c=find(d.finereview); if(c) openSheet((()=>{ const it=find(c.id); return contractSheet(it); })()); return; }
  if (d.negoconfirm){
    const it=find(d.negoconfirm), raw=$("#nego-amt")&&$("#nego-amt").value, n=Math.round(parseFloat(raw)*100)/100;
    if(!it||!(n>=0)) return;
    const pts=rNegotiate(it,n); it.price=n; save(); closeSheet(); render();
    toast(pts?`New ${it.name} rate saved · +${pts.toLocaleString("en-CA")} pts`:`Updated ${it.name}`);
    return;
  }
  if (d.usereturn || d.useclaim){ rWarrantyUse(find(d.usereturn||d.useclaim)); return; }
  if (d.redeem!==undefined){ redeemAsk=true; refreshRewards(); return; }
  if (d.redeemno!==undefined){ redeemAsk=false; refreshRewards(); return; }
  if (d.redeemyes!==undefined){ const ok=rRedeem(); if(ok===true){ redeemAsk=false; refreshRewards(); } else toast(ok); return; }
  if (d.remind){ toast("We'll remind you "+fdate(Math.max(0,find(d.remind).due-3))); return; }
  if (d.cancel){ const sv=find(d.cancel); const mo=sv?monthly(sv):0; const pts=sv?rCancelPts(sv):0; S.subs=S.subs.filter(s=>s.id!==d.cancel); save(); closeSheet(); render(); toast(`Cancelled · saving ${money(mo)}/mo`+(pts?` · +${pts.toLocaleString("en-CA")} pts`:"")); return; }
});
document.addEventListener("click", e => { if (e.target.classList.contains("scrim")) closeSheet(); });
/* ---------- gestures ---------- */
let swallow=false, sw=null, openFg=null;
const closeFg = fg => { if(!fg) return; fg.style.transition="transform .35s cubic-bezier(.2,.9,.2,1)"; fg.style.transform="translateX(0)"; fg._x=0; fg.parentElement.classList.remove("is-open"); if(openFg===fg) openFg=null; };
document.addEventListener("pointerdown", e => {
  const fg = e.target.closest(".swipe-fg");
  if (openFg && !openFg.isConnected) openFg=null;
  if (openFg && fg!==openFg && !e.target.closest(".swipe-acts")){ closeFg(openFg); if(!fg){ swallow=true; setTimeout(()=>swallow=false,400);} }
  if (!fg) return;
  sw = {fg, x0:e.clientX, y0:e.clientY, base:fg._x||0, drag:false, W:fg.previousElementSibling.offsetWidth};
});
document.addEventListener("pointermove", e => {
  if (!sw) return; const dx=e.clientX-sw.x0, dy=e.clientY-sw.y0;
  if (!sw.drag){ if (Math.abs(dx)>8 && Math.abs(dx)>Math.abs(dy)*1.2){ sw.drag=true; sw.fg.style.transition="none"; sw.fg.parentElement.classList.add("dragging"); } else if (Math.abs(dy)>10){ sw=null; return; } else return; }
  let x = sw.base+dx; if (x>0) x = x*0.25; if (x < -sw.W) x = -sw.W + (x+sw.W)*0.35;
  sw.fg.style.transform=`translateX(${x}px)`; sw.fg._x=x;
});
const endSwipe = () => {
  if (!sw) return; const {fg,drag,W}=sw; sw=null; fg.parentElement.classList.remove("dragging");
  if (!drag) return;
  swallow=true; setTimeout(()=>swallow=false,400);
  if ((fg._x||0) < -W*0.4){ fg.style.transition="transform .4s cubic-bezier(.32,1.2,.4,1)"; fg.style.transform=`translateX(${-W}px)`; fg._x=-W; fg.parentElement.classList.add("is-open"); if(openFg&&openFg!==fg) closeFg(openFg); openFg=fg; }
  else closeFg(fg);
};
document.addEventListener("pointerup", endSwipe); document.addEventListener("pointercancel", endSwipe);
window.agreedSwipeOpen = i => { const fg=document.querySelectorAll(".swipe-fg")[i||0]; const W=fg.previousElementSibling.offsetWidth; fg.style.transform=`translateX(${-W}px)`; fg._x=-W; fg.parentElement.classList.add("is-open"); openFg=fg; };
// pull down to close sheets
let ps=null;
const sheetNode = sheetEl();
sheetNode.addEventListener("touchstart", e => { ps = sheetNode.scrollTop<=0 ? {y0:e.touches[0].clientY, dy:0, t0:Date.now()} : null; }, {passive:true});
sheetNode.addEventListener("touchmove", e => {
  if (!ps) return; const dy = e.touches[0].clientY - ps.y0;
  if (dy<=0 && !ps.pulling){ ps=null; return; }
  if (e.cancelable) e.preventDefault();
  ps.pulling=true; ps.dy=Math.max(0,dy); sheetNode.style.transition="none"; sheetNode.style.transform=`translateY(${ps.dy}px)`;
  scrim().style.opacity = String(Math.max(0.15, 1 - ps.dy/500));
}, {passive:false});
sheetNode.addEventListener("touchend", () => {
  if (!ps) return; const {dy,t0,pulling}=ps; ps=null; if(!pulling) return;
  sheetNode.style.transition=""; const fast = dy/(Date.now()-t0) > 0.6;
  if (dy>120 || (fast && dy>40)) closeSheet(); else { sheetNode.style.transform=""; scrim().style.opacity=""; }
});
window.agreedPull = dy => { sheetNode.style.transition="none"; sheetNode.style.transform=`translateY(${dy}px)`; scrim().style.opacity=String(Math.max(.15,1-dy/500)); };
// manual form live inputs
document.addEventListener("input", e => {
  if (e.target.id==="q-search"){ searchQ=e.target.value; const pos=e.target.selectionStart, res=$("#q-res"), clr=$(".sclr"); if(res) res.innerHTML=searchResults(); if(clr) clr.classList.toggle("off",!searchQ); e.target.setSelectionRange(pos,pos); return; }
  if (e.target.id==="q-cat"){ formQ=e.target.value; const pos=e.target.selectionStart, res=$("#cat-res"), clr=e.target.parentElement.querySelector(".sclr"); if(res) res.innerHTML=catalogResultsHTML(); if(clr) clr.classList.toggle("off",!formQ); e.target.setSelectionRange(pos,pos); return; }
  if (!F) return;
  if (e.target.id==="f-name"){ F.name=e.target.value; if(F.preset&&F.preset.name!==F.name) F.preset=null; refreshForm(); }
  if (e.target.id==="f-price"){ F.price=e.target.value.replace(/[^0-9.]/g,""); refreshForm(); }
  if (e.target.id==="f-date"){ F.date=e.target.value; refreshForm(); }
});
let sp=null;
document.addEventListener("touchstart", e => {
  const sc=e.target.closest(".screen"); if(!sc||sheetEl().classList.contains("show")) return;
  if(!["home","subs","contracts","stuff"].includes(route())||sc.scrollTop>0) return;
  sp={y0:e.touches[0].clientY};
}, {passive:true});
document.addEventListener("touchend", e => {
  if(!sp) return; const dy=(e.changedTouches[0].clientY-sp.y0); sp=null;
  if(dy>56) location.hash="#/search";
}, {passive:true});
window.addEventListener("hashchange", render);
matchMedia("(prefers-color-scheme: light)").addEventListener?.("change", applyTheme);
applyTheme(); render(); onboarding();
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(()=>{});
})();
