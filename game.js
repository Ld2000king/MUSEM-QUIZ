const drawings = {
house:`<path fill="#bcc4aa" d="M0 230Q90 190 260 224V310H0Z"/><path fill="#ece2c7" d="M56 145H210V260H56Z"/><path fill="#c45531" d="M36 149L132 65L229 149Z"/><path fill="#da774b" d="M48 148L132 77L216 148Z"/><path fill="#66796c" d="M114 194Q133 176 151 194V260H114Z"/><path fill="#3e869c" d="M73 168H101V202H73ZM165 168H193V202H165Z"/><path stroke="#efe9d5" stroke-width="3" d="M87 168V202M73 185H101M179 168V202M165 185H193"/><path fill="#a48d68" d="M113 260H153L178 310H88Z"/><path stroke="#64715b" stroke-width="8" d="M33 253V192"/><ellipse fill="#899775" cx="33" cy="183" rx="25" ry="39"/>`,
sun:`<circle fill="#f3b43a" opacity=".2" cx="130" cy="129" r="94"/><g stroke="#c99743" stroke-width="3">${Array.from({length:12},(_,i)=>`<path transform="rotate(${i*30} 130 129)" d="M130 41V23"/>`).join('')}</g><circle fill="#f3b43a" cx="130" cy="129" r="62"/><circle fill="#ffd778" cx="119" cy="117" r="46"/><path fill="#b9bea1" d="M0 263Q68 211 134 258T260 251V310H0Z"/><path fill="#8b9b83" d="M0 281Q95 246 260 282V310H0Z"/>`,
head:`<path fill="#b5ab91" d="M71 285L85 249H171L193 285Z"/><path fill="#dfd5bc" d="M105 215L103 251H163L158 208Z"/><path fill="#dbcfb1" d="M77 115Q82 64 135 70Q180 73 181 120L193 156L179 163Q183 203 150 222L114 215L94 183Q70 179 80 148Z"/><path fill="#a99f84" d="M79 137Q64 80 111 64Q166 41 189 91L176 114L144 100L126 116L106 106L98 145Z"/><path fill="#b2a17e" d="M157 136H174L168 141Z"/><path stroke="#a08d6e" stroke-width="2" fill="none" d="M179 178L159 178M148 199Q164 199 169 190"/><path fill="#d7c9aa" d="M59 285H201V298H59Z"/>`,
eye:`<path fill="#bba986" d="M17 155Q128 35 244 155Q130 265 17 155Z"/><path fill="#f5eedc" d="M22 155Q130 59 238 155Q130 236 22 155Z"/><circle fill="#268b92" cx="130" cy="153" r="49"/><circle fill="#72b5a4" cx="130" cy="153" r="36"/><circle fill="#374d45" cx="130" cy="153" r="23"/><circle fill="#fffaeb" cx="143" cy="139" r="9"/><path stroke="#7b735c" stroke-width="6" fill="none" d="M18 152Q125 40 243 151"/><path stroke="#a79b7f" stroke-width="8" fill="none" d="M29 90Q131 38 225 91"/>`,
well:`<path fill="#a5b296" d="M0 270Q120 221 260 261V310H0Z"/><path stroke="#876e4d" stroke-width="11" d="M63 224V102M199 224V102"/><path fill="#ba542d" d="M38 111L131 44L224 111Z"/><path stroke="#786349" stroke-width="8" d="M62 138H199"/><path stroke="#967b4e" stroke-width="3" d="M132 138V218"/><path fill="#c7bca0" stroke="#978d71" stroke-width="2" d="M62 210Q129 181 199 210V264Q127 296 62 264Z"/><ellipse fill="#555e53" stroke="#d4c8a9" stroke-width="9" cx="131" cy="211" rx="69" ry="23"/><path stroke="#9f9479" stroke-width="2" d="M65 239Q132 266 197 239M99 228V248M153 233V255M128 254V278M179 250V273M78 245V270"/>`,
seven:`<path fill="#b6b99b" d="M0 263Q115 238 260 267V310H0Z"/>${Array.from({length:7},(_,i)=>{const x=48+(i%4)*55,y=i<4?125:209;return `<path fill="#697f66" d="M${x} ${y+18}v36"/><ellipse fill="#94a081" cx="${x+8}" cy="${y+38}" rx="12" ry="5" transform="rotate(-30 ${x+8} ${y+38})"/><g fill="${i%2?'#d26b43':'#edb43a'}">${Array.from({length:5},(_,j)=>`<ellipse cx="${x}" cy="${y-12}" rx="9" ry="14" transform="rotate(${j*72} ${x} ${y})"/>`).join('')}</g><circle fill="#726647" cx="${x}" cy="${y}" r="7"/>`}).join('')}`,
hill:`<path fill="#aeba9a" d="M0 230Q129 60 260 230V310H0Z"/><path fill="#889979" d="M0 260Q106 130 260 246V310H0Z"/><path fill="#c6bd96" d="M108 310Q186 237 143 173Q225 225 147 310Z"/><path fill="#d5c79e" d="M116 160H162V174H116Z"/><path stroke="#857957" stroke-width="3" d="M139 160V111"/><path fill="#ad7255" d="M140 111L166 123L140 133Z"/>`,
garden:`<path fill="#95a58b" d="M0 211Q130 193 260 214V310H0Z"/><path fill="#cabf9b" d="M107 310L130 200H143L165 310Z"/><g fill="#6f8b73"><ellipse cx="53" cy="132" rx="32" ry="56"/><ellipse cx="213" cy="123" rx="35" ry="63"/></g><g stroke="#847558" stroke-width="6"><path d="M53 161V239M213 156V239"/></g><g fill="#dc6a65">${[25,65,95,181,227].map((x,i)=>`<circle cx="${x}" cy="${255+i%2*21}" r="8"/>`).join('')}</g><path stroke="#697f5f" stroke-width="3" d="M25 263V283M65 284V300M95 263V284M181 284V301M227 263V283"/>`,
girl:`<path fill="#a6b49e" d="M0 280Q150 245 260 271V310H0Z"/><path fill="#6b5b49" d="M130 76c-24 0-39 17-37 41 2 22-2 40-7 52h88c-5-12-9-30-7-52 2-24-13-41-37-41z"/><path stroke="#d9b391" stroke-width="11" stroke-linecap="round" d="M110 168L82 214M150 168l28 46"/><path fill="#7e98a1" d="M110 160h40l30 96H80z"/><path fill="#6d8790" d="M110 160h40l4 14h-48z"/><g stroke="#6d8790" stroke-width="3"><path d="M112 200l-8 56M148 200l8 56M130 204v52"/></g><path stroke="#d9b391" stroke-width="11" stroke-linecap="round" d="M116 258v24M144 258v24"/><g fill="#b3523f"><ellipse cx="116" cy="286" rx="11" ry="6"/><ellipse cx="144" cy="286" rx="11" ry="6"/></g><circle fill="#d9b391" cx="130" cy="118" r="26"/><path fill="#6b5b49" d="M104 112c0-16 11-26 26-26s26 10 26 26c2-20-10-32-26-32s-28 12-26 32z"/><g fill="#fdf8ec"><ellipse cx="121" cy="118" rx="6.5" ry="4.5"/><ellipse cx="139" cy="118" rx="6.5" ry="4.5"/></g><g fill="#3a352b"><circle cx="122" cy="118" r="2.9"/><circle cx="138" cy="118" r="2.9"/></g><path fill="none" stroke="#c09a74" stroke-width="2.5" stroke-linecap="round" d="M130 121q4 6 0 8"/><path fill="none" stroke="#b3805f" stroke-width="2.5" stroke-linecap="round" d="M123 132q7 6 14 0"/><path fill="#d4849a" d="M156 104a9 9 0 1 1 14 8 9 9 0 1 1-14-8z"/>`,
sea:`<circle fill="#e5c187" cx="190" cy="76" r="26"/><path fill="#88c8cd" d="M0 150Q60 133 130 150T260 150V310H0Z"/><path fill="#398fba" d="M0 189Q60 161 130 189T260 189V310H0Z"/><path fill="#2365a1" d="M0 236Q70 210 140 236T260 236V310H0Z"/><g stroke="#dae3d7" stroke-width="3" fill="none"><path d="M15 169Q45 155 78 168M121 210Q166 192 204 207M30 257Q73 242 111 257M174 278Q214 262 251 276"/></g><path fill="#f4ebd1" d="M98 131L98 70L61 131Z"/><path stroke="#8c7f62" stroke-width="2" d="M100 68V143"/><path fill="#83664e" d="M61 139H123L113 151H73Z"/>`,
spring:`<path fill="#a7b193" d="M0 262Q133 221 260 266V310H0Z"/><path stroke="#887655" stroke-width="9" fill="none" d="M115 301Q139 172 98 64M128 202L190 110M117 139L52 97"/>${[[98,67],[54,98],[187,108],[123,143],[158,158],[84,125],[148,211]].map(([x,y])=>`<g fill="#e897a4">${Array.from({length:5},(_,j)=>`<ellipse cx="${x}" cy="${y-10}" rx="9" ry="12" transform="rotate(${j*72} ${x} ${y})"/>`).join('')}<circle fill="#d3b46f" cx="${x}" cy="${y}" r="5"/></g>`).join('')}`
};
let levels = [
{city:'בית שמש',art:['house','sun'],hint:'הרמז הראשון הוא מקום שגרים בו. השני מאיר לנו את היום.',explain:'בית + שמש = בית שמש'},
{city:'ראש העין',art:['head','eye'],hint:'שני חלקי גוף. הוסיפו ה׳ לפני החלק השני.',explain:'ראש + העין = ראש העין'},
{city:'באר שבע',art:['well','seven'],hint:'מאיפה שאבו מים פעם? וכמה פרחים יש באיור השני?',explain:'באר + שבעה פרחים = באר שבע'},
{city:'רמת גן',art:['hill','garden'],hint:'מקום גבוה, ולצדו מקום ירוק. המקום הגבוה הוא רמה.',explain:'רמה + גן = רמת גן'},
{city:'בת ים',art:['girl','sea'],hint:'הילדה היא הבת של מישהו. מה רואים בתמונה השנייה?',explain:'בת + ים = בת ים'},
{city:'תל אביב',art:['hill','spring'],hint:'גבעה קטנה נקראת גם תל. איזו עונה מסמלת הפריחה?',explain:'תל + אביב = תל אביב'}
];

Object.assign(drawings, extraDrawings);
levels.push(...extraLevels);
const $ = id => document.getElementById(id);
const WING_SIZE = 10;
const wings = ['אגף הגילוי','אגף האור','אגף המילים','אגף השמות','אגף הנופים'];
const exhibitions = [{id:'israel',title:'ערים בישראל',subtitle:'המקומות שלנו, מזווית חדשה',icon:'house',tone:'sand',subject:'עיר',question:'איזו עיר בישראל גיליתם?',levels},...newExhibitions];
let museumState={version:2,active:'israel',categories:{}};
try {const stored=JSON.parse(localStorage.getItem('cityMuseum.v2')||'{}');if(stored&&stored.version===2&&stored.categories&&typeof stored.categories==='object')museumState=stored;}catch{}
if(!museumState.categories.israel){try{museumState.categories.israel=JSON.parse(localStorage.getItem('cityMuseum.v1')||'{}')||{};}catch{museumState.categories.israel={};}}
let currentExhibition=exhibitions.find(item=>item.id===museumState.active)||exhibitions[0];
levels=currentExhibition.levels;
function validProgress(id){const collection=exhibitions.find(item=>item.id===id);const record=museumState.categories[id]||{};return {solved:Array.isArray(record.solved)?[...new Set(record.solved.filter(n=>Number.isInteger(n)&&n>=0&&n<collection.levels.length))]:[],current:Number.isInteger(record.current)&&record.current>=0&&record.current<collection.levels.length?record.current:0};}
let saved=validProgress(currentExhibition.id);
let solved=new Set(saved.solved);
let current=saved.current;
let collectionPage = 0;
let artSerial = 0;
const originalLabels = {house:'בית עם גג אדום',sun:'שמש מעל גבעות',head:'פסל ראש',eye:'עין',well:'באר מים',seven:'שבעה פרחים',hill:'גבעה ירוקה',garden:'גן עם עצים ופרחים',girl:'ילדה',sea:'ים וגלים',spring:'ענף פורח באביב'};
function persist(){
 museumState.active=currentExhibition.id;
 museumState.categories[currentExhibition.id]={solved:[...solved],current};
 try{localStorage.setItem('cityMuseum.v2',JSON.stringify(museumState));if(currentExhibition.id==='israel')localStorage.setItem('cityMuseum.v1',JSON.stringify({solved:[...solved],current}));}catch{$('feedback').textContent+=' ההתקדמות תישמר רק עד סגירת העמוד.';}
}
function normalize(value) {
  return value.toLowerCase().normalize('NFKC').replace(/[\s\-־׳״'"\u0591-\u05C7]/g,'')
    .replace(/^קריית/,'קרית').replace(/תקוה/g,'תקווה')
    .replace(/[ךםןףץ]/g,c=>({'ך':'כ','ם':'מ','ן':'נ','ף':'פ','ץ':'צ'}[c]));
}
function isAnswer(value,level) {
  const aliases = level.city === 'תל אביב' ? ['תל אביב יפו'] : [];
  return [level.city,...aliases,...(level.aliases||[])].some(answer=>normalize(value)===normalize(answer));
}
function artName(key) { return artLabels[key] || originalLabels[key]; }
function art(key) {
  const filterId = `texture-${key}-${artSerial++}`;
  return `<svg viewBox="0 0 260 310" role="img" aria-label="${artName(key)}"><defs><filter id="${filterId}"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".022"/></feComponentTransfer><feBlend in="SourceGraphic" mode="multiply"/></filter></defs><g filter="url(#${filterId})">${key==='head'?'':'<path fill="#e8e6d5" d="M0 0H260V310H0Z"/>'}${drawings[key]}</g></svg>`;
}
function renderProgress() {
  const start = Math.max(0,Math.min(current-2,levels.length-5));
  $('progress').innerHTML = levels.slice(start,start+5).map((_,offset)=>{
    const i=start+offset;
    return `<button class="${i===current?'current ':''}${solved.has(i)?'solved':''}" aria-label="מוצג ${i+1}${solved.has(i)?', נפתר':''}" ${i===current?'aria-current="step"':''} data-index="${i}">${solved.has(i)?'✓':i+1}</button>`;
  }).join('');
}
function renderMuseumMap(wing=Math.floor(current/WING_SIZE)) {
  $('mapWing').value=String(wing);
  const start=wing*WING_SIZE;
  $('museumMap').innerHTML=levels.slice(start,start+WING_SIZE).map((level,offset)=>{
    const index=start+offset;
    return `<button class="map-room ${index===current?'here ':''}${solved.has(index)?'discovered':''}" data-room="${index}" aria-label="חדר ${index+1}${solved.has(index)?', '+level.city:''}" ${index===current?'aria-current="location"':''}><span class="map-number">${String(index+1).padStart(2,'0')}</span><span>${solved.has(index)?level.city:'מוצג לגלות'}</span><small>${solved.has(index)?'✓ התגלתה':index===current?'● אתם כאן':level.kind==='place'?'זיהוי מקום':level.kind==='identity'?'זיהוי לפי רמזים':'חידת מילים'}</small></button>`;
  }).join('');
}
function render() {
  const level=levels[current],done=solved.has(current),wing=Math.floor(current/WING_SIZE);
  document.querySelector('.gallery-room').dataset.wing=wing%3;
  document.querySelector('.wing-mark').textContent=String(current+1).padStart(2,'0');
  $('wingLabel').textContent=levels.length<=10?currentExhibition.title:wings[wing];
  $('categoryTitle').textContent=currentExhibition.title;
  $('answerLabel').textContent=currentExhibition.question;
  $('answer').placeholder=currentExhibition.subject==='עיר'?'הקלידו את שם העיר':'הקלידו את השם המלא';
  $('mapDescription').textContent=currentExhibition.title+' · '+levels.length+' מוצגים';
  renderMuseumMap();
  $('answer').removeAttribute('aria-invalid');
  $('roomNumber').textContent=`מוצג ${String(current+1).padStart(2,'0')} מתוך ${levels.length}`;
  $('plaqueNumber').textContent=`${level.kind==='place'?'זיהוי מקום':level.kind==='identity'?'זיהוי לפי רמזים':'חידת מילים'} / ${String(current+1).padStart(3,'0')}`;
  $('artRow').innerHTML=level.art.map((key,i)=>`${i?`<span class="plus" aria-hidden="true">${level.kind==='place'?'&':'+'}</span>`:''}<button type="button" class="art" data-art="${key}" data-zoom="${i}" aria-label="הגדלת פרט ${i?'ב׳':'א׳'} · ${artName(key)}"><span class="frame"><span class="mat">${art(key)}</span></span><span class="art-label"><span>פרט ${i?'ב׳':'א׳'} · להגדלה</span><span class="zoom-mark" aria-hidden="true"></span></span></button>`).join('');
  $('exhibition').classList.toggle('success',done);
  $('plaqueTitle').textContent=done?level.city:currentExhibition.subject==='עיר'?'עיר שמסתתרת בין התמונות':'מי מסתתר בין הרמזים?';
  $('plaqueCaption').textContent=done?level.explain:level.kind==='place'?'איזו עיר מחברת בין שני המראות?':level.kind==='identity'?'זהו את השם בעזרת שני הרמזים':'חברו את הרמזים מימין לשמאל';
  $('answerForm').hidden=done;
  $('continueTour').hidden=!done;
  $('continueTour').textContent=solved.size===levels.length?'לצפייה באוסף המלא ←':current===levels.length-1?'לחידה שטרם גיליתם ←':'לחדר הבא ←';
  $('feedback').className='';
  $('feedback').textContent=done?(solved.size===levels.length?`האוסף הושלם! כל ${levels.length} המוצגים התגלו.`:'המוצג הזה כבר באוסף שלכם. המשיכו לסייר ←'):'';
  $('answer').value='';
  $('hint').disabled=done;
  $('letterCount').textContent=level.city.split(' ').map(w=>w.length).join(' + ')+' אותיות';
  $('prev').disabled=current===0;
  $('next').disabled=current===levels.length-1;
  $('count').textContent=solved.size;
  renderProgress();
}
function go(index) { current=Math.max(0,Math.min(levels.length-1,index));render();persist(); }
function renderCollection() {
  const pages=Math.ceil(levels.length/WING_SIZE),start=collectionPage*WING_SIZE;
  $('collectionSummary').textContent=`${solved.size} מתוך ${levels.length} מוצגים באוסף`;
  $('collectionGrid').innerHTML=levels.slice(start,start+WING_SIZE).map((level,offset)=>{
    const index=start+offset;
    return `<button class="collection-card ${solved.has(index)?'':'locked'}" data-index="${index}">${solved.has(index)?art(level.art[0]):'<div class="locked-art">?</div>'}<h3>${solved.has(index)?level.city:`מוצג ${String(index+1).padStart(2,'0')}`}</h3><p>${solved.has(index)?'נוסף לאוסף · לצפייה במוצג':'המוצג הבא מחכה להתגלות'}</p></button>`;
  }).join('');
  $('collectionPage').textContent=`אגף ${collectionPage+1} מתוך ${pages}`;
  $('collectionPrev').disabled=collectionPage===0;
  $('collectionNext').disabled=collectionPage===pages-1;
}
function showCollection(show) {
  $('lobby').hidden=true;document.querySelector('.intro').hidden=false;
  $('gallery').hidden=show;$('collection').hidden=!show;
  $('galleryTab').classList.toggle('active',!show);$('collectionTab').classList.toggle('active',show);
  if(show)renderCollection();
}
function openArt(index) {
  const level=levels[current],key=level.art[index],part=index?'ב׳':'א׳';
  $('artZoomKicker').textContent=`פרט ${part} · מוצג ${String(current+1).padStart(2,'0')} · ${key==='head'?'פסל אבן':'איור על נייר'}`;
  $('artZoom').dataset.art=key;
  $('artZoom').innerHTML=`<div class="mat">${art(key)}</div>`;
  $('artZoomCaption').textContent=solved.has(current)?level.explain:`התבוננו בפרטים. ${level.kind==='place'?'איזו עיר שני המראות האלה מאפיינים?':'מה רואים כאן, ואיך זה מתחבר לפרט השני?'}`;
  $('artDialog').showModal();
}
$('artRow').onclick=event=>{const button=event.target.closest('[data-zoom]');if(button)openArt(Number(button.dataset.zoom));};
document.querySelectorAll('.close-art').forEach(button=>button.onclick=()=>$('artDialog').close());
$('answerForm').addEventListener('submit',event=>{
  event.preventDefault();if(solved.has(current))return;
  if(isAnswer($('answer').value,levels[current])) {
    solved.add(current);render();
    $('feedback').textContent=solved.size===levels.length?`איזה אוסף! גיליתם את כל ${levels.length} המוצגים.`:`נכון, ${levels[current].city}! המוצג נוסף לאוסף שלכם (${solved.size}/${levels.length}).`;
    persist();$('next').disabled?$('collectionTab').focus():$('next').focus();
  } else {
    $('feedback').className='error';$('feedback').textContent='עוד לא. נסו שוב או בקשו רמז מהאוצר.';
    $('answer').setAttribute('aria-invalid','true');$('answer').focus();
  }
});
$('answer').addEventListener('input',()=>$('answer').removeAttribute('aria-invalid'));
$('hint').onclick=()=>{$('feedback').className='';$('feedback').textContent=levels[current].hint;};
$('continueTour').onclick=()=>{if(solved.size===levels.length){showCollection(true);}else if(current<levels.length-1){go(current+1);}else{go(levels.findIndex((_,index)=>!solved.has(index)));}};
$('prev').onclick=()=>go(current-1);$('next').onclick=()=>go(current+1);
$('progress').onclick=event=>{const button=event.target.closest('[data-index]');if(button)go(Number(button.dataset.index));};
$('collectionTab').onclick=()=>{collectionPage=Math.floor(current/WING_SIZE);showCollection(true);};
$('galleryTab').onclick=showLobby;
$('returnGallery').onclick=()=>showCollection(false);
$('collectionGrid').onclick=event=>{const button=event.target.closest('[data-index]');if(button){go(Number(button.dataset.index));showCollection(false);}};
$('collectionPrev').onclick=()=>{collectionPage=Math.max(0,collectionPage-1);renderCollection();$('collectionSummary').scrollIntoView({block:'start'});};
$('collectionNext').onclick=()=>{collectionPage=Math.min(Math.ceil(levels.length/WING_SIZE)-1,collectionPage+1);renderCollection();$('collectionSummary').scrollIntoView({block:'start'});};
function updateWingOptions(){ $('mapWing').innerHTML=Array.from({length:Math.ceil(levels.length/WING_SIZE)},(_,index)=>`<option value="${index}">${levels.length<=10?currentExhibition.title:wings[index]} · ${index*10+1}–${Math.min((index+1)*10,levels.length)}</option>`).join('');}
updateWingOptions();
$('mapWing').onchange=()=>renderMuseumMap(Number($('mapWing').value));
$('openMap').onclick=()=>{renderMuseumMap();$('mapDialog').showModal();$('mapDialog').scrollTop=0;};
document.querySelector('.close-map').onclick=()=>$('mapDialog').close();
$('museumMap').onclick=event=>{const button=event.target.closest('[data-room]');if(button){go(Number(button.dataset.room));$('mapDialog').close();}};
$('help').onclick=()=>$('helpDialog').showModal();
document.querySelectorAll('.close-help,#helpDialog .close').forEach(button=>button.onclick=()=>$('helpDialog').close());
let touchStart=null;
$('exhibition').addEventListener('touchstart',event=>{touchStart={x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY};},{passive:true});
$('exhibition').addEventListener('touchend',event=>{
  if(!touchStart)return;
  const dx=event.changedTouches[0].clientX-touchStart.x,dy=event.changedTouches[0].clientY-touchStart.y;
  if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.5)go(current+(dx>0?1:-1));
  touchStart=null;
},{passive:true});
$('exhibition').addEventListener('touchcancel',()=>{touchStart=null;},{passive:true});
function showLobby(){
 persist();$('lobby').hidden=false;$('gallery').hidden=true;$('collection').hidden=true;document.querySelector('.intro').hidden=true;
 $('galleryTab').classList.toggle('active',true);$('collectionTab').classList.toggle('active',false);
 $('exhibitionCards').innerHTML=exhibitions.map(item=>{const completed=validProgress(item.id).solved.length;return `<button class="exhibition-card ${item.tone}" data-category="${item.id}"><div class="exhibition-art">${art(item.icon)}</div><div><span class="exhibit-count">${item.levels.length} מוצגים</span><h2>${item.title}</h2><p>${item.subtitle}</p><span class="category-progress">${completed?completed+' התגלו · ממשיכים בסיור':'כניסה לתערוכה ←'}</span></div></button>`;}).join('');
 document.querySelector('main').scrollTop=0;
}
function enterCategory(id){const selected=exhibitions.find(item=>item.id===id);if(!selected)return;persist();currentExhibition=selected;levels=selected.levels;const progress=validProgress(id);solved=new Set(progress.solved);current=progress.current;collectionPage=0;updateWingOptions();render();showCollection(false);persist();document.querySelector('main').scrollTop=0;}
$('exhibitionCards').onclick=event=>{const button=event.target.closest('[data-category]');if(button)enterCategory(button.dataset.category);};
document.querySelector('.brand').onclick=event=>{event.preventDefault();showLobby();};
render();showLobby();
