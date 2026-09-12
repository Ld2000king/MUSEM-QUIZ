const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const path=require('node:path');
function boot(saved='{}',v2=null) {
 const nodes=new Map();const stored={'cityMuseum.v1':saved};if(v2)stored['cityMuseum.v2']=JSON.stringify(v2);
 function node(id){if(!nodes.has(id))nodes.set(id,{value:'',innerHTML:'',textContent:'',dataset:{},classList:{toggle(){}},addEventListener(type,fn){this[type]=fn;},removeAttribute(){},setAttribute(){},focus(){},scrollIntoView(){},showModal(){},close(){}});return nodes.get(id);}
 const context=vm.createContext({document:{getElementById:node,querySelector:node,querySelectorAll:()=>[]},localStorage:{getItem:key=>stored[key]||null,setItem:(key,v)=>{stored[key]=v;}}, navigator:{},window:{addEventListener(){}},location:{hash:'',pathname:'/',search:''},history:{replaceState(){}},btoa:value=>Buffer.from(value).toString('base64'),atob:value=>Buffer.from(value,'base64').toString('utf8')});
 for(const file of ['levels.js','categories.js','game.js','sharing.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,file),'utf8'),context);
 return {run:code=>vm.runInContext(code,context),node,saved:()=>JSON.parse(stored['cityMuseum.v1']),state:()=>JSON.parse(stored['cityMuseum.v2'])};
}
const app=boot(JSON.stringify({solved:[0,1],current:2}));
assert.equal(app.run('levels.length'),50);
assert.equal(app.run('new Set(levels.map(l=>normalize(l.city))).size'),50);
assert.equal(app.run('solved.size'),2);
assert.equal(app.run('current'),2);
assert.deepEqual(Array.from(app.run('levels.slice(0,6).map(l=>l.city)')),['בית שמש','ראש העין','באר שבע','רמת גן','בת ים','תל אביב']);
for(let index=0;index<50;index++) {
 app.run(`go(${index})`);
 assert.match(app.node('roomNumber').textContent,/מתוך 50/);
 assert.equal((app.node('progress').innerHTML.match(/<button /g)||[]).length,5);
 assert.equal((app.node('museumMap').innerHTML.match(/<button /g)||[]).length,10);
 assert.ok(!app.node('artRow').innerHTML.includes('undefined'),`Missing art/label at ${index+1}`);
 assert.ok(app.run(`levels[${index}].hint.length > 15 && levels[${index}].explain.length > 8`));
 assert.equal(app.run(`levels[${index}].art.length`),2);
 assert.ok(app.run(`isAnswer(levels[${index}].city,levels[${index}])`));
 assert.ok(!app.run(`isAnswer('אין עיר כזאת',levels[${index}])`));
}
assert.ok(app.run("isAnswer('קריית שמונה',levels[13])"));
assert.ok(app.run("isAnswer('פתח תקוה',levels[18])"));
assert.ok(app.run("isAnswer('תל אביב-יפו',levels[5])"));
assert.equal(app.node('next').disabled,true);
app.run('go(100)');assert.equal(app.run('current'),49);
app.run('go(-5)');assert.equal(app.run('current'),0);assert.equal(app.node('prev').disabled,true);
for(let index=0;index<50;index++){
 app.run(`go(${index});$('answer').value=levels[current].city`);
 app.node('answerForm').submit({preventDefault(){}});
}
assert.equal(app.run('solved.size'),50);
assert.match(app.node('feedback').textContent,/50/);
assert.equal(app.saved().solved.length,50);
app.node('answerForm').submit({preventDefault(){}});assert.equal(app.run('solved.size'),50);
const restored=boot(JSON.stringify(app.saved()));assert.equal(restored.run('solved.size'),50);assert.equal(restored.run('current'),49);
const broken=boot('{broken');assert.equal(broken.run('current'),0);assert.equal(broken.run('solved.size'),0);
for(let wing=0;wing<5;wing++){
 app.run(`renderMuseumMap(${wing});collectionPage=${wing};renderCollection()`);
 assert.equal((app.node('museumMap').innerHTML.match(/<button /g)||[]).length,10);
 assert.equal((app.node('collectionGrid').innerHTML.match(/<button /g)||[]).length,10);
 assert.ok(!app.node('collectionGrid').innerHTML.includes('undefined'));
}
console.log('PASS: 50 unique cities, all art and hints, all answers, spelling variants, legacy progress, bounds, 5 wings, paginated collection, full completion and reload.');
const categories=boot(JSON.stringify({solved:[0,1,2],current:3}));
assert.equal(categories.run('exhibitions.reduce((sum,item)=>sum+item.levels.length,0)'),80);
for(const id of ['usa','singers','athletes']) {
 categories.run(`enterCategory('${id}')`);
 assert.equal(categories.run('levels.length'),10);
 assert.equal(categories.run('solved.size'),0);
 assert.equal(categories.run('new Set(levels.map(l=>normalize(l.city))).size'),10);
 for(let i=0;i<10;i++){
  categories.run(`go(${i})`);
  assert.ok(!categories.node('artRow').innerHTML.includes('undefined'));
  assert.ok(categories.run(`isAnswer(levels[${i}].city,levels[${i}])`));
 }
 categories.run("go(0);$('answer').value=levels[0].city");categories.node('answerForm').submit({preventDefault(){}});
 assert.equal(categories.run('solved.size'),1);
}
categories.run("enterCategory('israel')");assert.equal(categories.run('solved.size'),3);assert.equal(categories.run('current'),3);
categories.run("enterCategory('usa')");assert.equal(categories.run('solved.size'),1);assert.ok(categories.run("isAnswer('NEW YORK',levels[0])"));
assert.equal(categories.state().categories.singers.solved.length,1);
assert.equal(categories.state().categories.athletes.solved.length,1);
const share=categories.run('makeShare()');assert.ok(share.url.startsWith('https://ld2000king.github.io/MUSEM-QUIZ/#museum='));
const hash=share.url.slice(share.url.indexOf('#'));
assert.equal(categories.run(`parseSharedMuseum(${JSON.stringify(hash)}).reduce((n,c)=>n+c.solved.length,0)`),6);
const before=JSON.stringify(categories.state());categories.run(`parseSharedMuseum(${JSON.stringify(hash)})`);assert.equal(JSON.stringify(categories.state()),before);
for(const value of ['#museum=oops','#museum='+Buffer.from(JSON.stringify({v:1,c:[{id:'usa',s:[99]}]})).toString('base64'),'#museum='+Buffer.from(JSON.stringify({v:1,c:[{id:'bad',s:[0]}]})).toString('base64')])assert.equal(categories.run(`parseSharedMuseum(${JSON.stringify(value)})`),null);
console.log('PASS: 4 categories, 80 puzzles, independent progress, legacy migration, English aliases, safe share snapshots and malformed links.');

const multiReload=boot('{}',categories.state());assert.equal(multiReload.run('currentExhibition.id'),'usa');assert.equal(multiReload.run('solved.size'),1);multiReload.run("enterCategory('israel')");assert.equal(multiReload.run('solved.size'),3);console.log('PASS: category progress survives a complete app reload.');
