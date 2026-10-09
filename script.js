const T={
id:{n1:"Tentang",n2:"Layanan",n3:"Portofolio",n4:"Kontak",
h1:"Keluarkan versi terbaikmu di hari spesialmu.",
hp:"Aruya Make Up Artist merias kamu dengan hasil natural, tahan lama, dan tetap terasa seperti dirimu sendiri.",
cta1:"Booking via WhatsApp",cta2:"Lihat layanan",map:"Lihat lokasi di Google Maps",ld:"Menyiapkan tampilan terbaikmu…",
area:"Berbasis di Daya, Makassar · Sulawesi Selatan",
ab:"Kenalan dengan Aruya",
ab1:"Aruya berdiri sejak 2021, berawal dari passion sang pendiri terhadap dunia makeup dan dijalankan secara freelance. Berbasis di Makassar, kami percaya makeup yang bagus bukan dengan menutupi wajah, tapi yang membuatmu merasa paling nyaman dan percaya diri.",
ab2:"Dari pesta anak muda yang kekinian sampai pernikahan yang anggun dan sakral, tiap riasan disesuaikan dengan karakter, busana, dan acaramu.",
st1:"Sejak 2021",st1d:"Berawal dari passion, kini 6 jenis layanan",
st2:"Sesuai karakter",st2d:"Riasan menyesuaikan usia dan gaya",
st3:"Bisa ke lokasi",st3d:"Makassar dan sekitarnya",
sv:"Layanan kami",svp:"Pilih sesuai momenmu. Untuk detail paket dan biaya, silakan diskusi langsung lewat chat.",
s1:"Makeup Party",s1d:"Tampilan segar dan standout untuk ulang tahun, kondangan, atau acara malam.",
s2:"Makeup Graduation",s2d:"Rapi dan awet seharian, dari prosesi wisuda sampai sesi foto bersama.",
s3:"Makeup Foto Ijazah",s3d:"Natural dan bersih, cocok untuk kamera dan hasilnya tidak berlebihan.",
s4:"Makeup Lamaran",s4d:"Lembut dan manis untuk momen keluarga yang penuh arti.",
s5:"Makeup Prewedding",s5d:"Flawless di depan kamera, bisa disesuaikan dengan konsep foto kalian.",
s6:"Makeup Wedding",s6d:"Anggun dan tahan lama untuk hari paling berharga dalam hidupmu.",
gl:"Portofolio",glp:"Sedikit gambaran hasil riasan Aruya. Lihat lebih banyak di Instagram dan TikTok kami.",more:"Lihat lebih banyak karya kami",
hw:"Cara bookingnya gampang",
p1:"Chat kami",p1d:"Hubungi lewat WhatsApp, Instagram, atau TikTok.",
p2:"Ceritakan acaramu",p2d:"Jenis acara, tanggal, lokasi, dan gaya yang kamu mau.",
p3:"Diskusi paket & biaya",p3d:"Kami jelaskan pilihan dan biaya sesuai kebutuhanmu.",
p4:"Konfirmasi & tampil cantik",p4d:"Tanggal dikunci, tinggal datang dan nikmati hasilnya.",
ct:"Yuk, booking sekarang",ctp:"Tanggal bisa cepat penuh, terutama musim wisuda dan nikah. Chat dulu untuk cek jadwal.",wa:"Chat untuk booking & tanya biaya",addr:"Paccerakkang, Biringkanaya, Makassar"},
en:{n1:"About",n2:"Services",n3:"Portfolio",n4:"Contact",
h1:"Bring out your best self on your special day.",
hp:"Aruya Make Up Artist gives you a natural, long-lasting look that still feels like you.",
cta1:"Book via WhatsApp",cta2:"See services",map:"View location on Google Maps",ld:"Getting your best look ready…",
area:"Based in Daya, Makassar · South Sulawesi",
ab:"Meet Aruya",
ab1:"Aruya started in 2021, born from the founder's passion for makeup and run as a freelance service. Based in Makassar, we believe great makeup doesn't hide your face. It makes you feel comfortable and confident in it.",
ab2:"From trendy parties to graceful, sacred weddings, every look is tailored to your personality, outfit, and event.",
st1:"Since 2021",st1d:"Born from passion, now 6 services",
st2:"Made for you",st2d:"Looks adapted to your age and style",
st3:"On location",st3d:"Makassar and surrounding areas",
sv:"Our services",svp:"Pick the one that fits your moment. For packages and pricing, just chat with us directly.",
s1:"Party Makeup",s1d:"A fresh, standout look for birthdays, receptions, or evening events.",
s2:"Graduation Makeup",s2d:"Neat and long-lasting, from the ceremony to group photos.",
s3:"Diploma Photo Makeup",s3d:"Clean and natural, camera-ready without looking overdone.",
s4:"Engagement Makeup",s4d:"Soft and sweet for a meaningful family moment.",
s5:"Prewedding Makeup",s5d:"Flawless on camera, adjusted to your photoshoot concept.",
s6:"Wedding Makeup",s6d:"Elegant and long-lasting for the most precious day of your life.",
gl:"Portfolio",glp:"A glimpse of Aruya's work. See more on our Instagram and TikTok.",more:"See more of our work",
hw:"Easy to book",
p1:"Message us",p1d:"Reach out via WhatsApp, Instagram, or TikTok.",
p2:"Tell us about your event",p2d:"Event type, date, location, and the style you want.",
p3:"Discuss package & price",p3d:"We walk you through the options and pricing for your needs.",
p4:"Confirm & glow",p4d:"Your date is locked. Just show up and enjoy the result.",
ct:"Book your date now",ctp:"Dates fill up fast, especially in graduation and wedding season. Message us to check availability.",wa:"Message to book & ask about pricing",addr:"Paccerakkang, Biringkanaya, Makassar"}};
let L="id";
function set(l){L=l;document.documentElement.lang=l;document.querySelectorAll("[data-t]").forEach(e=>e.textContent=T[l][e.dataset.t]);document.getElementById("lang").textContent=l==="id"?"EN":"ID";try{localStorage.setItem("aruya-lang",l)}catch(e){}}
document.getElementById("lang").onclick=()=>set(L==="id"?"en":"id");
let s="id";try{s=localStorage.getItem("aruya-lang")||"id"}catch(e){}
set(s);

(function(){
var ld=document.getElementById("ld"),sw=document.getElementById("sw"),br=document.getElementById("br"),L=sw.getTotalLength(),cur=0,target=.1,loaded=false,t0=Date.now(),closed=false;
sw.style.strokeDasharray=L;
function draw(v){sw.style.strokeDashoffset=L*(1-v);var pt=sw.getPointAtLength(L*v);br.setAttribute("transform","translate("+pt.x+" "+pt.y+") scale(1,-1) translate(-6.1 -6.1)")}
draw(0);
(function loop(){cur+=(target-cur)*.06;draw(cur);if(!closed)requestAnimationFrame(loop)})();
var iv=setInterval(function(){if(!loaded)target=Math.min(target+Math.random()*.12,.85)},300);
function fin(){if(loaded)return;loaded=true;clearInterval(iv);target=1;setTimeout(function(){ld.classList.add("off");setTimeout(function(){ld.classList.add("gone");closed=true},1000)},650)}
function go(){setTimeout(fin,Math.max(0,1900-(Date.now()-t0)))}
if(document.readyState==="complete")go();else addEventListener("load",go);
setTimeout(fin,4500);
})();

(function(){
if(!matchMedia("(hover:hover) and (pointer:fine)").matches||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
var hc=document.getElementById("hc"),b=document.body,x=0,y=0,hv=false;
function pos(){hc.style.transform="translate("+x+"px,"+y+"px)"}
addEventListener("mousemove",function(e){x=e.clientX;y=e.clientY;if(hv)pos()});
document.addEventListener("mouseover",function(e){x=e.clientX;y=e.clientY;var h=!!e.target.closest("a,button");if(h===hv)return;hv=h;b.classList.toggle("hv",h);hc.classList.toggle("on",h);if(h)pos()});
document.addEventListener("mouseleave",function(){hv=false;b.classList.remove("hv");hc.classList.remove("on")});
document.addEventListener("click",function(e){if(!e.target.closest("a,button")||e.target.closest("#sl,#lb"))return;for(var i=0;i<3;i++){var d=document.createElement("i");d.className="hr";d.style.left=e.clientX+"px";d.style.top=e.clientY+"px";d.style.setProperty("--dx",(i-1)*20+"px");d.style.setProperty("--r",(i-1)*18+"deg");d.style.animationDelay=i*70+"ms";d.innerHTML=i==1?'<svg viewBox="0 0 16 16"><path d="M8 14C2 9.500 1 6 3 3.500 5 1.500 7.500 2.500 8 4.500 8.500 2.500 11 1.500 13 3.500 15 6 14 9.500 8 14Z" fill="#f0b7bd"/></svg>':'<svg viewBox="0 0 16 16"><path d="M8 1L9.500 6.500 15 8 9.500 9.500 8 15 6.500 9.500 1 8 6.500 6.500Z" fill="#f6d56a"/></svg>';document.body.appendChild(d);setTimeout(function(){d.remove()},900)}});
})();

(function(){
var lb=document.getElementById("lb"),fr=lb.querySelector(".fr"),im=fr.querySelector("img"),ct=lb.querySelector(".ct"),th=lb.querySelector(".th"),bs=[].slice.call(document.querySelectorAll(".tb")),n=bs.length,i=0,last=null,tx=0,dts=[];
bs.forEach(function(b,k){var t=document.createElement("button");t.type="button";t.setAttribute("aria-label",(k+1)+"/"+n);var g=new Image();g.src=b.querySelector("img").src;g.alt="";t.appendChild(g);t.onclick=function(){show(k,k>i?1:-1)};th.appendChild(t);dts.push(t)});
function unz(){im.classList.remove("z");im.style.transformOrigin="50% 50%"}
function show(k,dir){unz();i=(k+n)%n;var g=bs[i].querySelector("img");im.src=g.src;im.alt=g.alt;im.classList.remove("inl","inr");fr.classList.remove("fl");void im.offsetWidth;if(dir)im.classList.add(dir>0?"inr":"inl");fr.classList.add("fl");ct.innerHTML="Aruya<small>"+(i+1)+" / "+n+"</small>";dts.forEach(function(d,j){d.classList.toggle("on",j===i)})}
function open(k){last=document.activeElement;show(k,0);lb.classList.add("open");document.body.style.overflow="hidden";lb.querySelector(".x").focus()}
function close(){unz();lb.classList.remove("open");if(window.__sl)__sl.go(i);document.body.style.overflow="";if(last)last.focus()}
bs.forEach(function(b,k){b.addEventListener("click",function(){if(window.__sl&&__sl.cur()!==k)__sl.go(k);else open(k)})});
lb.querySelector(".x").onclick=close;lb.querySelector(".pv").onclick=function(){show(i-1,-1)};lb.querySelector(".nx").onclick=function(){show(i+1,1)};
lb.addEventListener("click",function(e){if(!e.target.closest(".fr,button,a,figcaption"))close()});
im.addEventListener("click",function(e){if(im.classList.contains("z")){unz();return}var r=fr.getBoundingClientRect();im.style.transformOrigin=((e.clientX-r.left)/r.width*100)+"% "+((e.clientY-r.top)/r.height*100)+"%";im.classList.add("z")});
fr.addEventListener("pointermove",function(e){if(!im.classList.contains("z"))return;var r=fr.getBoundingClientRect();im.style.transformOrigin=((e.clientX-r.left)/r.width*100)+"% "+((e.clientY-r.top)/r.height*100)+"%"});
addEventListener("keydown",function(e){if(!lb.classList.contains("open"))return;if(e.key==="Escape")close();else if(e.key==="ArrowLeft")show(i-1,-1);else if(e.key==="ArrowRight")show(i+1,1)});
lb.addEventListener("touchstart",function(e){tx=e.changedTouches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){if(im.classList.contains("z"))return;var d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)show(i+(d<0?1:-1),d<0?1:-1)},{passive:true});
})();

(function(){
var w=document.getElementById("sl"),ring=w.querySelector(".dring"),hub=w.querySelector(".hub"),hi=hub.querySelector("img"),ts=[].slice.call(w.querySelectorAll(".tb")),n=ts.length,ct=w.querySelector(".ct2"),step=360/n,pos=0,shown=0,run=false,last=-1,tm,paused=false,drag=null,moved=false,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
ts.forEach(function(t,k){t.style.setProperty("--a",k*step+"deg")});
function idx(){return((Math.round(pos)%n)+n)%n}
function apply(){ring.style.setProperty("--rot",shown+"deg")}
function loop(){var d=-pos*step-shown;if(Math.abs(d)<.05||rm){shown=-pos*step;run=false}else{shown+=d*.14;requestAnimationFrame(loop)}apply()}
function kick(){if(!run){run=true;requestAnimationFrame(loop)}}
function sync(){var i=idx();if(i===last)return;ts.forEach(function(t,k){t.classList.toggle("on",k===i);t.setAttribute("aria-current",k===i?"true":"false")});var g=ts[i].querySelector("img");hi.src=g.src;hi.alt=g.alt;ct.textContent=(i+1)+" / "+n;if(last>=0&&!rm){hub.classList.remove("fl");void hub.offsetWidth;hub.classList.add("fl")}last=i}
function go(k){var h=Math.floor(n/2),d=((k-idx()+n+h)%n)-h;pos=Math.round(pos)+d;sync();kick();restart()}
function restart(){clearInterval(tm);if(rm)return;tm=setInterval(function(){if(!paused&&!drag&&!document.hidden&&!document.getElementById("lb").classList.contains("open"))go(idx()+1)},3600)}
function end(){if(!drag)return;drag=null;pos=Math.round(pos);sync();kick();restart();setTimeout(function(){moved=false},0)}
w.addEventListener("pointerdown",function(e){if(e.button>0)return;drag={x:e.clientX,p:pos};moved=false});
addEventListener("pointermove",function(e){if(!drag)return;var dx=e.clientX-drag.x;if(Math.abs(dx)>6)moved=true;if(moved){pos=drag.p-dx/70;sync();kick()}});
addEventListener("pointerup",end);addEventListener("pointercancel",end);
w.addEventListener("click",function(e){if(moved){e.stopPropagation();e.preventDefault()}},true);
w.querySelector(".pv").onclick=function(){go(idx()-1)};w.querySelector(".nx").onclick=function(){go(idx()+1)};
hub.onclick=function(){ts[idx()].click()};
w.addEventListener("mouseenter",function(){paused=true});w.addEventListener("mouseleave",function(){paused=false});
w.addEventListener("focusin",function(){paused=true});w.addEventListener("focusout",function(){paused=false});
w.addEventListener("keydown",function(e){if(e.key==="ArrowLeft")go(idx()-1);else if(e.key==="ArrowRight")go(idx()+1)});
window.__sl={cur:idx,go:go};
apply();sync();restart();
})();
