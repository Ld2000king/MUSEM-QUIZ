const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const path=require('node:path');
function boot(saved='{}') {
 const nodes=new Map();let stored=saved;
 function node(id){if(!nodes.has(id))nodes.set(id,{value:'',innerHTML:'',textContent:'',dataset:{},classList:{toggle(){}},addEventListener(type,fn){this[type]=fn;},removeAttribute(){},setAttribute(){},focus(){},scrollIntoView(){},showModal(){},close(){}});return nodes.get(id);}
 const context=vm.createContext({document:{getElementById:node,querySelector:node,querySelectorAll:()=>[]},localStorage:{getItem:()=>stored,setItem:(_,v)=>{stored=v;}}});
 for(const file of ['levels.js','game.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,file),'utf8'),context);
 return {run:code=>vm.runInContext(code,context),node,saved:()=>JSON.parse(stored)};
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
