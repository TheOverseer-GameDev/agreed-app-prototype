// Sample data (fictional household, Ontario, CAD). Dates are day offsets from today so the demo always looks current.
window.SEED = {
 version: 3,
 subs: [
  {id:"netflix",name:"Netflix",plan:"Standard · 2 screens",cat:"Streaming",price:18.99,cycle:"mo",due:3,color:"#E50914",bg:"linear-gradient(145deg,#1c1c1c,#000)",fg:"#E50914",mono:"N",src:"bank",srcText:"Found in RBC Chequing · charges since 2019",history:[13.99,14.99,16.49,16.49,18.99],priceChange:{from:16.49,to:18.99,when:-9}},
  {id:"disney",name:"Disney+",plan:"Free trial → Standard",cat:"Streaming",price:11.99,cycle:"mo",due:2,trial:true,color:"#113CCF",bg:"linear-gradient(145deg,#0A2FB4,#061a5e)",mono:"D+",src:"email",srcText:"Found in your inbox · trial started 5 days ago",history:[0,0,0,0,11.99]},
  {id:"crave",name:"Crave",plan:"Premium · with ads off",cat:"Streaming",price:22.00,cycle:"mo",due:11,color:"#2D2B8F",bg:"linear-gradient(145deg,#3a36c6,#14125a)",mono:"C",src:"bank",srcText:"Found in TD Visa · charges since 2023",history:[19.99,19.99,22,22,22]},
  {id:"spotify",name:"Spotify",plan:"Premium Individual",cat:"Music",price:11.99,cycle:"mo",due:6,color:"#1DB954",bg:"linear-gradient(145deg,#1ed760,#0f7a37)",mono:"S",src:"bank",srcText:"Found in TD Visa · charges since 2018",history:[9.99,10.99,10.99,11.99,11.99]},
  {id:"youtube",name:"YouTube Premium",plan:"Individual",cat:"Streaming",price:13.99,cycle:"mo",due:17,color:"#FF0033",bg:"linear-gradient(145deg,#ff2a4d,#a3001c)",mono:"@play",src:"email",srcText:"Found in your inbox · Google receipt",history:[11.99,11.99,13.99,13.99,13.99]},
  {id:"prime",name:"Amazon Prime",plan:"Annual",cat:"Shopping",price:99.00,cycle:"yr",due:41,color:"#00A8E1",bg:"linear-gradient(145deg,#1fb6ee,#0a5f8a)",mono:"a",src:"email",srcText:"Found in your inbox · Amazon.ca receipt",history:[79,79,99,99,99]},
  {id:"icloud",name:"iCloud+",plan:"200 GB",cat:"Cloud",price:3.99,cycle:"mo",due:9,color:"#3693F3",bg:"linear-gradient(145deg,#5aa9ff,#1e5fd0)",mono:"@cloud",src:"bank",srcText:"Found in RBC Chequing · Apple charge",history:[3.99,3.99,3.99,3.99,3.99]},
  {id:"xbox",name:"Game Pass Ultimate",plan:"Xbox",cat:"Gaming",price:22.99,cycle:"mo",due:14,color:"#107C10",bg:"linear-gradient(145deg,#1aa31a,#0a4d0a)",mono:"X",src:"bank",srcText:"Found in TD Visa · last used 7 weeks ago",history:[16.99,16.99,16.99,22.99,22.99],unused:true},
  {id:"uber",name:"Uber One",plan:"Monthly",cat:"Food",price:9.99,cycle:"mo",due:22,color:"#111111",bg:"linear-gradient(145deg,#2b2b2b,#000)",mono:"U",src:"bank",srcText:"Found in TD Visa",history:[9.99,9.99,9.99,9.99,9.99]}
 ],
 contracts: [
  {id:"bell",name:"Bell Fibe Internet",plan:"Gigabit 1.5 · 2-year promo",cat:"Home",price:95.00,cycle:"mo",color:"#00549A",bg:"linear-gradient(145deg,#0a6fc4,#003b6e)",mono:"B",start:-640,end:90,cancelBy:60,notice:"30 days",flags:2,
   summary:["You pay $95/month until the promo ends, then it becomes $115/month automatically.","There's no contract penalty after the 2-year term — you can switch or cancel any time.","Bell can change prices with 30 days' notice by email or on your bill.","Renting the Home Hub modem is included; you must return it within 30 days of cancelling or pay $150."],
   red:[{lvl:"hi",t:"<b>+$20/month after the promo.</b> The price jumps to $115 on its own unless you call."},{lvl:"med",t:"<b>Unreturned modem fee of $150.</b> Keep the box and the return label."}],
   qa:{"Can I cancel early?":"Yes. After month 24 there's no early-cancellation fee. Before that, you'd owe the remaining promo credit (about $20 × months left). Give 30 days' notice.","What happens when the promo ends?":"Your plan rolls to the regular price of $115/month. Calling retention 2–3 weeks before usually gets a new 12–24 month promo.","Can they raise the price?":"Yes, with 30 days' written notice. You can cancel without penalty if they do."}},
  {id:"rogers",name:"Rogers Infinite",plan:"Phone · 100 GB · 24-month financing",cat:"Phone",price:85.00,cycle:"mo",color:"#DA291C",bg:"linear-gradient(145deg,#f0392b,#8f1209)",mono:"R",start:-560,end:170,cancelBy:null,notice:"None",flags:1,
   summary:["Your $85 includes $40/month for the phone and $45/month for the plan.","Cancelling early means paying off the rest of the phone balance at once.","Roaming in the US costs $14/day unless you add a travel pass.","Plan price can change with 60 days' notice."],
   red:[{lvl:"med",t:"<b>Device balance due if you leave.</b> About $240 is left on the phone right now."}],
   qa:{"Can I cancel early?":"Yes, but the remaining phone balance (about $240 today) becomes due immediately. There's no other cancellation fee.","Can they raise the price?":"Yes, with 60 days' notice. Under the CRTC Wireless Code you can leave without a penalty on the plan portion if they change key terms."}},
  {id:"goodlife",name:"GoodLife Fitness",plan:"Ultimate · month-to-month",cat:"Fitness",price:64.99,cycle:"mo",color:"#E31837",bg:"linear-gradient(145deg,#ff3355,#8f0c22)",mono:"G",start:-300,end:null,cancelBy:null,notice:"30 days",flags:2,
   summary:["Billed every two weeks — that's about $64.99/month.","To cancel you need to give 30 days' written notice; one more payment will come out.","There's a $49 annual maintenance fee charged every July.","Freezing your membership costs $10/month."],
   red:[{lvl:"hi",t:"<b>Hidden yearly fee.</b> A $49 \u201cmaintenance fee\u201d hits every July on top of dues."},{lvl:"med",t:"<b>Cancelling takes 30 days.</b> Expect one more bi-weekly charge after you cancel."}],
   qa:{"How do I cancel?":"Send written notice in the app or at the front desk. Billing stops after 30 days, so one more payment will come out.","Can I pause it?":"Yes. A freeze costs $10/month, for up to 3 months, with a doctor's note waiving the fee."}},
  {id:"lease",name:"Apartment lease",plan:"1BR · Liberty Village, Toronto",cat:"Home",price:2150.00,cycle:"mo",color:"#8B5CF6",bg:"linear-gradient(145deg,#9d7bff,#4a2db0)",mono:"@home",start:-260,end:105,cancelBy:45,notice:"60 days",flags:1,
   summary:["Your 12-month lease ends in about 3.5 months, then it becomes month-to-month automatically (Ontario).","To move out at the end, give 60 days' written notice (form N9).","Rent can go up once every 12 months, with 90 days' written notice, up to the provincial guideline (2.5%).","Tenant insurance is required — keep proof on file."],
   red:[{lvl:"med",t:"<b>Notice deadline coming.</b> If you plan to move, form N9 is due in 45 days."}],
   qa:{"Do I have to sign a new lease?":"No. In Ontario the lease continues month-to-month at the same terms. You can stay without signing anything.","How much can rent go up?":"For units first occupied before Nov 2018, up to the provincial guideline — 2.5% for 2026 — with 90 days' notice."}},
  {id:"intact",name:"Intact Auto Insurance",plan:"2021 Mazda CX-5 · full coverage",cat:"Insurance",price:168.00,cycle:"mo",color:"#C8102E",bg:"linear-gradient(145deg,#e6324f,#7c0a1c)",mono:"i",start:-330,end:35,cancelBy:20,notice:"None",flags:1,
   summary:["Your policy renews in 35 days. The renewal quote is $181/month (+$13).","You can shop around and switch at renewal with no penalty.","Cancelling mid-term has a short-rate penalty of about 10% of the remaining premium.","Your deductible is $1,000 for collision and $500 for comprehensive."],
   red:[{lvl:"hi",t:"<b>Renewal is $13/month higher.</b> Compare quotes before the policy renews."}],
   qa:{"Can I switch at renewal?":"Yes — switching at renewal has no penalty. Get quotes at least 2–3 weeks before so there's no gap in coverage."}}
 ],
 stuff: [
  {id:"sony",name:"Sony WH-1000XM5",store:"Best Buy",price:449.99,bought:-12,ret:3,warEnd:353,mono:"@headphones",color:"#1f1f1f",bg:"linear-gradient(145deg,#3a3a3a,#0d0d0d)"},
  {id:"dyson",name:"Dyson V15 Detect",store:"Canadian Tire",price:949.99,bought:-200,ret:null,warEnd:530,mono:"D",color:"#7a2fbf",bg:"linear-gradient(145deg,#a85cf0,#4b1580)"},
  {id:"iphone",name:"iPhone 16 Pro",store:"Apple Store",price:1449.00,bought:-420,ret:null,warEnd:310,mono:"@phone",color:"#333",bg:"linear-gradient(145deg,#6b6b70,#1c1c1e)",note:"AppleCare+ until next year"},
  {id:"tv",name:"Samsung 65\" QLED",store:"Costco",price:1199.99,bought:-25,ret:65,warEnd:705,mono:"S",color:"#1428A0",bg:"linear-gradient(145deg,#2c46d6,#0b1a6b)",note:"Costco extends warranty to 2 years"},
  {id:"breville",name:"Breville Barista Express",store:"Hudson's Bay",price:799.99,bought:-640,ret:null,warEnd:90,mono:"B",color:"#6b4a2b",bg:"linear-gradient(145deg,#a0703f,#4a2e15)",recall:false},
  {id:"kettle",name:"Cuisinart Kettle",store:"Amazon.ca",price:89.99,bought:-8,ret:22,warEnd:1087,mono:"C",color:"#555",bg:"linear-gradient(145deg,#8a8f99,#3b3f47)"}
 ],
 alerts: [
  {id:"a1",type:"trial",item:"disney",title:"Disney+ trial ends in 2 days",body:"You'll be charged $11.99 on the day it ends. Cancel now if you're not watching.",when:0,unread:true},
  {id:"a2",type:"price",item:"netflix",title:"Netflix raised your price",body:"Standard went up 15%. That's $30 more per year.",when:-9,unread:true,diff:["$16.49 / month","$18.99 / month"]},
  {id:"a3",type:"terms",item:"bell",title:"Bell updated its Terms of Service",body:"We compared the new version with the one you agreed to. One change affects you:",when:-2,unread:true,diff:["Price changes with 60 days' notice","Price changes with 30 days' notice"]},
  {id:"a4",type:"return",item:"sony",title:"Return window closes in 3 days",body:"Sony WH-1000XM5 from Best Buy. Still happy with them?",when:-1,unread:false},
  {id:"a5",type:"deadline",item:"intact",title:"Insurance renews in 35 days at +$13/mo",body:"Your renewal quote is $181/month. Comparing quotes usually saves 10–20%.",when:-3,unread:false},
  {id:"a6",type:"unused",item:"xbox",title:"You haven't played in 7 weeks",body:"Game Pass Ultimate costs $22.99/month. Pause it and save $68 over 3 months.",when:-4,unread:false},
  {id:"a7",type:"deadline",item:"lease",title:"Lease notice due in 45 days",body:"Moving out at the end of your lease? Form N9 must reach your landlord 60 days before.",when:-5,unread:false},
  {id:"a8",type:"recall",item:"kettle",title:"No recalls on your stuff",body:"We checked Health Canada's recall list against 6 items this week.",when:-6,unread:false}
 ],
 savings: [
  {id:"s1",icon:"pause",title:"Pause Game Pass",body:"Not used in 7 weeks",amt:22.99,item:"xbox"},
  {id:"s2",icon:"phone",title:"Lock in a new Bell promo",body:"Avoid the $20 jump · we wrote the script",amt:20.00,item:"bell"},
  {id:"s3",icon:"rotate",title:"Rotate your streaming",body:"Keep 2 of Netflix, Crave, Disney+, YouTube",amt:22.00,item:"crave"},
  {id:"s4",icon:"shield",title:"Compare car insurance",body:"Renewal is +$13/mo",amt:13.00,item:"intact"}
 ],
 found: [
  {id:"f1",name:"Duolingo Super",price:12.99,cycle:"mo",src:"TD Visa · DUOLINGO*SUPER",mono:"D",bg:"linear-gradient(145deg,#7ee23a,#3c8d0d)"},
  {id:"f2",name:"PC Optimum Insiders",price:99.00,cycle:"yr",src:"Inbox · PC Optimum receipt",mono:"PC",bg:"linear-gradient(145deg,#e8232b,#7d0c10)"},
  {id:"f3",name:"Audible",price:16.95,cycle:"mo",src:"RBC Chequing · AUDIBLE.CA",mono:"A",bg:"linear-gradient(145deg,#ffa31a,#b36200)"}
 ]
};
