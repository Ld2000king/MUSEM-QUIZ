const SHARE_BASE='https://ld2000king.github.io/MUSEM-QUIZ/';
let preparedShare=null;
function sharedSnapshot(){persist();return {v:1,c:exhibitions.map(item=>({id:item.id,s:validProgress(item.id).solved})).filter(item=>item.s.length)};}
function makeShare(){const snapshot=sharedSnapshot();const total=snapshot.c.reduce((sum,item)=>sum+item.s.length,0);const encoded=btoa(JSON.stringify(snapshot));return {title:'המוזיאון שלי — מקום למחשבה',text:`כבר גיליתי ${total} מוצגים במוזיאון שלי! בואו לראות את האוסף ולגלות ערים, זמרים וספורטאים.`,url:SHARE_BASE+'#museum='+encoded};}
function showShareFallback(data){
 preparedShare=data;const message=data.text+' '+data.url;
 $('shareWhatsapp').href='https://wa.me/?text='+encodeURIComponent(message);
 $('shareSms').href='sms:?body='+encodeURIComponent(message);
 $('shareUrl').value=data.url;$('shareStatus').textContent='';$('shareDialog').showModal();
}
async function shareMuseum(){
 const data=makeShare();
 if(navigator.share){try{await navigator.share(data);return;}catch(error){if(error.name==='AbortError')return;}}
 showShareFallback(data);
}
$('shareMuseum').onclick=$('shareLobby').onclick=shareMuseum;
document.querySelector('.close-share').onclick=()=>$('shareDialog').close();
$('copyShare').onclick=async()=>{
 if(!preparedShare)return;
 try{await navigator.clipboard.writeText(preparedShare.url);$('shareStatus').textContent='הקישור הועתק. אפשר להדביק בכל שיחה.';}
 catch{$('shareUrl').focus();$('shareUrl').select();$('shareStatus').textContent='סמנו והעתיקו את הקישור מהשדה.';}
};
function parseSharedMuseum(hash){
 if(!hash.startsWith('#museum=')||hash.length>6000)return null;
 try{const snapshot=JSON.parse(atob(hash.slice(8)));if(snapshot.v!==1||!Array.isArray(snapshot.c)||snapshot.c.length>exhibitions.length)return null;
 const used=new Set();return snapshot.c.map(entry=>{const category=exhibitions.find(item=>item.id===entry.id);if(!category||used.has(entry.id)||!Array.isArray(entry.s)||entry.s.length>category.levels.length)throw Error('Invalid collection');used.add(entry.id);if(entry.s.some(index=>!Number.isInteger(index)||index<0||index>=category.levels.length))throw Error('Invalid exhibit');return {category,solved:[...new Set(entry.s)]};});}catch{return null;}
}
function openSharedMuseum(){
 const collection=parseSharedMuseum(location.hash);if(!collection)return;
 const count=collection.reduce((sum,item)=>sum+item.solved.length,0);
 // Display only trusted local titles corresponding to validated numeric indices.
 $('friendCollection').innerHTML=`<p>${count} מוצגים התגלו באוסף המשותף. זהו צילום מצב, שאינו משנה את ההתקדמות שלכם.</p>`+collection.map(item=>`<section><h3>${item.category.title}</h3><p>${item.solved.map(index=>item.category.levels[index].city).join(' · ')||'התערוכה עוד מחכה להתגלות'}</p></section>`).join('');
 $('friendDialog').showModal();
}
function closeFriendMuseum(){$('friendDialog').close();history.replaceState(null,'',location.pathname+location.search);}
document.querySelector('.close-friend').onclick=closeFriendMuseum;
$('startOwnMuseum').onclick=()=>{closeFriendMuseum();showLobby();};
window.addEventListener('hashchange',openSharedMuseum);
openSharedMuseum();
