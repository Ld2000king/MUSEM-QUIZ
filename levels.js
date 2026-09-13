// Original vector exhibits for the extended collection.
const artLabels = {};
const extraDrawings = {};
function exhibit(key,label,body){artLabels[key]=label;extraDrawings[key]=body;}
const ground='<path fill="#a5b59c" d="M0 260Q130 230 260 260V310H0Z"/>';
function inscription(key,text,label=text){exhibit(key,label,`<rect x="35" y="65" width="190" height="180" rx="3" fill="#f7f0df" stroke="#bba176" stroke-width="3"/><text x="130" y="170" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="${text.length>4?27:65}" fill="#345579">${text}</text><path stroke="#c78b51" stroke-width="3" d="M80 211H180"/>`);}
function person(key,label,hat,beard,extra=''){exhibit(key,label,ground
+`<path fill="#c9a07f" d="M114 168h32v40h-32z"/>`
+`<path fill="#426783" d="M48 300q7-62 42-80 15 14 40 14t40-14q35 18 42 80z"/>`
+`<path fill="#375873" d="M106 214q24 18 48 0l-12 26h-24z"/>`
+`<path fill="${hat}" d="M130 48c-31 0-50 23-48 54 1 19-2 31-6 42h108c-4-11-7-23-6-42 2-31-17-54-48-54z"/>`
+`<ellipse fill="#dcb694" cx="130" cy="130" rx="38" ry="44"/>`
+`<g fill="#cba382"><ellipse cx="93" cy="138" rx="7" ry="11"/><ellipse cx="167" cy="138" rx="7" ry="11"/></g>`
+`<path fill="${beard}" d="M93 126q0 32 13 46 11 12 24 12t24-12q13-14 13-46q-9 25-37 25t-37-25z"/>`
+`<path fill="none" stroke="#b3805f" stroke-width="3" stroke-linecap="round" d="M120 159q10 7 20 0"/>`
+`<path fill="${beard}" d="M111 143q19 9 38 0-9 12-19 12t-19-12z"/>`
+`<path fill="${hat}" d="M95 114c1-26 16-40 35-40s34 14 35 40c3-32-14-48-35-48s-38 16-35 48z"/>`
+`<g fill="#fdf8ec"><ellipse cx="113" cy="130" rx="8.5" ry="5.5"/><ellipse cx="147" cy="130" rx="8.5" ry="5.5"/></g>`
+`<g fill="#3a352b"><circle cx="114" cy="130" r="3.5"/><circle cx="146" cy="130" r="3.5"/></g>`
+`<g stroke="${hat}" stroke-width="4" stroke-linecap="round" fill="none"><path d="M103 118q10-6 19-2M157 118q-10-6-19-2"/></g>`
+`<path fill="none" stroke="#c09a74" stroke-width="3" stroke-linecap="round" d="M130 135q6 11 1 15"/>`
+extra);}
inscription('suffixOn','ון','האותיות ון');inscription('letterT','ת','האות ת');inscription('letterH','ה','האות ה');inscription('suffixYa','יה','האותיות יה');inscription('suffixEl','אל','האותיות אל');inscription('tarshiha','תרשיחא','שלט תרשיחא');
exhibit('sand','דיונות חול',`<circle cx="193" cy="71" r="30" fill="#e7a243"/><path fill="#e3bc78" d="M0 210Q70 91 167 185T260 171V310H0Z"/><path fill="#c99653" d="M0 251Q160 128 260 249V310H0Z"/><path fill="#f1d19c" d="M0 279Q150 226 260 273V310H0Z"/>`);
exhibit('ram','איל עם קרניים מסולסלות',ground
 +'<path stroke="#6f5a3e" stroke-width="10" stroke-linecap="round" d="M92 206V268M114 210V272M150 210V272M172 204V266"/>'
 +'<g fill="#4a3c2a"><ellipse cx="92" cy="270" rx="7" ry="4"/><ellipse cx="114" cy="274" rx="7" ry="4"/><ellipse cx="150" cy="274" rx="7" ry="4"/><ellipse cx="172" cy="268" rx="7" ry="4"/></g>'
 +'<ellipse fill="#f4e9d0" cx="124" cy="196" rx="62" ry="40"/>'
 +'<g fill="#f4e9d0"><circle cx="74" cy="176" r="19"/><circle cx="102" cy="164" r="21"/><circle cx="134" cy="162" r="21"/><circle cx="164" cy="170" r="19"/><circle cx="182" cy="186" r="16"/><circle cx="72" cy="212" r="16"/><circle cx="106" cy="226" r="15"/><circle cx="146" cy="226" r="15"/><circle cx="178" cy="214" r="14"/></g>'
 +'<circle fill="#e6d8b8" cx="62" cy="180" r="13"/>'
 +'<ellipse fill="#d8bd91" cx="200" cy="188" rx="27" ry="23"/>'
 +'<path fill="#c9a97c" d="M214 178q24 4 22 18-2 14-24 10z"/>'
 +'<ellipse fill="#c9a97c" cx="188" cy="170" rx="11" ry="7" transform="rotate(-35 188 170)"/>'
 +'<circle fill="#3a352b" cx="208" cy="182" r="4"/>'
 +'<circle fill="#6b5a42" cx="232" cy="190" r="2.5"/>'
 +'<path fill="none" stroke="#7d6238" stroke-width="15" stroke-linecap="round" d="M186 164c-4-26-30-34-44-16-12 16 4 34 20 26"/>'
 +'<path fill="none" stroke="#9c7b4a" stroke-width="12" stroke-linecap="round" d="M194 162c-4-26-30-34-44-16-12 16 4 34 20 26"/>'
 +'<g stroke="#7d6238" stroke-width="2.5" opacity=".8"><path d="M186 148l10-3M172 138l6-9M156 140l-2-10M148 154l-10-4"/></g>');
exhibit('room','חדר עם כורסה וחלון','<path fill="#f2e9d4" d="M25 55H235V270H25Z"/><path fill="#bfae95" d="M25 230H235V270H25Z"/><path fill="#8ab4c1" stroke="#fff" stroke-width="8" d="M50 85H116V153H50Z"/><path stroke="#fff" stroke-width="4" d="M83 85V153M50 119H116"/><rect x="125" y="181" width="76" height="48" rx="12" fill="#c66e49"/><rect x="137" y="151" width="53" height="49" rx="13" fill="#d98960"/><path stroke="#624b3d" stroke-width="5" d="M137 226V245M190 226V245"/>');
exhibit('fire','להבות אש',ground+'<path fill="#d8592c" d="M132 52Q151 117 187 145Q232 215 170 253Q90 293 59 224Q30 167 96 124Q84 167 110 177Q134 134 132 52Z"/><path fill="#ffc54c" d="M131 156Q201 244 137 254Q68 250 110 207Q110 232 126 223Z"/>');
person('uncle','דוד: האח של אבא','#684d37','#dcb694','<text x="130" y="258" font-family="Arial" font-size="20" text-anchor="middle" fill="white">האח של אבא</text>');
person('grandfather','סבא עם שיער לבן ומשקפיים','#d9d5c6','#e3dfd1',
 '<g fill="none" stroke="#6b6152" stroke-width="3"><circle cx="113" cy="130" r="14"/><circle cx="147" cy="130" r="14"/><path d="M127 130h6M99 128l-8-3M161 128l8-3"/></g>'
 +'<g stroke="#c09a74" stroke-width="2" stroke-linecap="round" opacity=".7"><path d="M97 148q5 4 10 3M163 148q-5 4-10 3"/></g>');
person('rabbi','חכם עם ספר','#685c49','#e5dfcb',
 '<path fill="#d6b674" stroke="#735a38" stroke-width="3" d="M78 246q28-13 52 0 22-13 52 0v40q-30-13-52 0-24-13-52 0z"/>'
 +'<path stroke="#735a38" stroke-width="2" d="M130 246v40"/>'
 +'<g stroke="#b3945c" stroke-width="2" stroke-linecap="round"><path d="M92 260h28M92 270h24M140 260h28M140 270h24"/></g>');
exhibit('prophet','נביא זקן עם זקן לבן ארוך, מגילה ומטה',ground
 +'<path stroke="#7a6244" stroke-width="7" stroke-linecap="round" d="M230 296V126q0-14 11-18"/>'
 +'<path fill="#3f6480" d="M58 300q6-58 36-78 14 12 36 12t36-12q30 20 36 78z"/>'
 +'<g stroke="#35566e" stroke-width="3" stroke-linecap="round"><path d="M84 242l-6 58M176 242l6 58"/></g>'
 +'<path fill="#a8623f" d="M72 248q58 16 116 0v15q-58 16-116 0z"/>'
 +'<path fill="#b8ae96" d="M99 92q-17 7-19 32-2 23 4 42 4 13 13 15-11-29-7-58 2-19 9-31z"/>'
 +'<path fill="#b8ae96" d="M161 92q17 7 19 32 2 23-4 42-4 13-13 15 11-29 7-58-2-19-9-31z"/>'
 +'<ellipse fill="#dcb694" cx="130" cy="120" rx="36" ry="42"/>'
 +'<path fill="#cba382" d="M94 120c0-24 16-43 36-43s36 19 36 43c2-33-14-52-36-52s-38 19-36 52z"/>'
 +'<path fill="#c4bba4" d="M130 62c-24 0-39 15-41 37 9-16 22-23 41-23s32 7 41 23c-2-22-17-37-41-37z"/>'
 +'<path fill="#a8623f" d="M96 94q34-15 68 0l-3 14q-31-13-62 0z"/>'
 +'<path fill="#8f4f33" d="M96 94q34-15 68 0l-1 4q-33-13-66 0z"/>'
 +'<g fill="#fdf8ec"><ellipse cx="115" cy="124" rx="8.5" ry="5.5"/><ellipse cx="145" cy="124" rx="8.5" ry="5.5"/></g>'
 +'<g fill="#3a352b"><circle cx="116" cy="124" r="3.6"/><circle cx="144" cy="124" r="3.6"/></g>'
 +'<g stroke="#9c8360" stroke-width="4" stroke-linecap="round" fill="none"><path d="M105 112q10-6 19-2M155 112q-10-6-19-2"/></g>'
 +'<path fill="none" stroke="#c09a74" stroke-width="3" stroke-linecap="round" d="M130 131q7 11 1 15"/>'
 +'<path fill="#c9bfa8" d="M95 132c-5 27-3 52 9 71 8 15 17 24 26 28 9-4 18-13 26-28 12-19 14-44 9-71-9 25-21 37-35 37s-26-12-35-37z"/>'
 +'<path fill="#e4dac5" d="M103 143c-4 22-2 43 6 58 6 13 15 22 21 25 6-3 15-12 21-25 8-15 10-36 6-58-7 20-17 29-27 29s-20-9-27-29z"/>'
 +'<path fill="#d5cab3" d="M111 147q19 9 38 0-9 12-19 12t-19-12z"/>'
 +'<g stroke="#bdb29a" stroke-width="2" stroke-linecap="round"><path d="M119 176v32M141 176v32M130 184v30"/></g>'
 +'<g fill="#9c7a4d"><rect x="52" y="230" width="15" height="56" rx="7.5"/><rect x="193" y="230" width="15" height="56" rx="7.5"/></g>'
 +'<g fill="#b08c58"><rect x="55" y="233" width="9" height="50" rx="4.5"/><rect x="196" y="233" width="9" height="50" rx="4.5"/></g>'
 +'<path fill="#f2e6c4" d="M67 238q63-11 126 0v40q-63 11-126 0z"/>'
 +'<path fill="#e6d8b2" d="M67 238q63-11 126 0v5q-63 11-126 0z"/>'
 +'<g stroke="#a08a5c" stroke-width="3" stroke-linecap="round"><path d="M86 253h88M90 264h60M86 274h80"/></g>'
 +'<g fill="#dcb694"><path d="M48 246q19-7 26 5 3 11-10 14-18 1-21-8z"/><path d="M212 246q-19-7-26 5-3 11 10 14 18 1 21-8z"/></g>'
 +'<g stroke="#c9a07f" stroke-width="2" stroke-linecap="round"><path d="M56 252l14-2M60 259l13-2M204 252l-14-2M200 259l-13-2"/></g>');
person('herzl','דיוקן סמלי של הרצל עם זקן שחור','#343b35','#343b35');
exhibit('village','כפר עם בתים קטנים',ground+[25,99,173].map((x,i)=>`<path fill="#e5d3a6" d="M${x} ${170-i%2*30}h60v72h-60Z"/><path fill="#bd603a" d="M${x-8} ${170-i%2*30}l38-37 38 37Z"/><path fill="#61868c" d="M${x+22} ${204-i%2*30}h17v38h-17Z"/>`).join(''));
exhibit('city','קריה ובה בניינים',ground+[35,98,166].map((x,i)=>`<path fill="${['#6b91a9','#d1ac76','#a8b293'][i]}" d="M${x} ${110+i%2*34}h55v140h-55Z"/>${[0,1,2].map(y=>`<path fill="#f7edcf" d="M${x+10} ${125+i%2*34+y*32}h10v17h-10ZM${x+33} ${125+i%2*34+y*32}h10v17h-10Z"/>`).join('')}`).join(''));
exhibit('eight','שמונה כוכבים',[0,1,2,3,4,5,6,7].map(i=>`<path transform="translate(${49+i%4*54} ${115+Math.floor(i/4)*85})" fill="#dda23e" d="M0-23L6-7 23-7 10 4 15 23 0 12-15 23-10 4-23-7-6-7Z"/>`).join(''));
exhibit('boys','שני בנים עומדים',ground+[80,180].map((x,i)=>`<g>`
 +`<path stroke="#d9ad87" stroke-width="9" stroke-linecap="round" d="M${x-12} 226v36M${x+12} 226v36"/>`
 +`<g fill="#3f4a44"><ellipse cx="${x-12}" cy="266" rx="10" ry="5"/><ellipse cx="${x+12}" cy="266" rx="10" ry="5"/></g>`
 +`<path fill="#46596b" d="M${x-21} 202h42v18l-14 6-7-10-7 10-14-6z"/>`
 +`<path fill="${i?'#c9764a':'#4b7eaa'}" d="M${x-23} 150q23 11 46 0l5 56h-56z"/>`
 +`<path stroke="#d9ad87" stroke-width="8" stroke-linecap="round" d="M${x-20} 164l-9 30M${x+20} 164l9 30"/>`
 +`<path fill="${i?'#b3673e':'#3f6d96'}" d="M${x-23} 150q9 5 18 6l-3 12q-11-2-18-8z"/>`
 +`<path fill="${i?'#b3673e':'#3f6d96'}" d="M${x+23} 150q-9 5-18 6l3 12q11-2 18-8z"/>`
 +`<path fill="${i?'#4a3b2e':'#5b4636'}" d="M${x} 86c-16 0-27 11-26 28 1 10-1 16-3 20h58c-2-4-4-10-3-20 1-17-10-28-26-28z"/>`
 +`<circle fill="#d9ad87" cx="${x}" cy="118" r="26"/>`
 +`<path fill="${i?'#4a3b2e':'#5b4636'}" d="M${x-26} 112c0-16 11-26 26-26s26 10 26 26c2-20-10-32-26-32s-28 12-26 32z"/>`
 +`<g fill="#fdf8ec"><ellipse cx="${x-9}" cy="119" rx="6.5" ry="4.5"/><ellipse cx="${x+9}" cy="119" rx="6.5" ry="4.5"/></g>`
 +`<g fill="#3a352b"><circle cx="${x-8}" cy="119" r="2.8"/><circle cx="${x+8}" cy="119" r="2.8"/></g>`
 +`<path fill="none" stroke="#b3805f" stroke-width="2.5" stroke-linecap="round" d="M${x-7} 131q7 6 14 0"/>`
 +`<path fill="none" stroke="#c09a74" stroke-width="2.5" stroke-linecap="round" d="M${x} 121q4 6 0 8"/>`
 +`</g>`).join(''));
exhibit('lightning','ברק בשמים','<path fill="#7b91a1" d="M30 110Q10 64 59 62Q74 22 119 60Q171 36 188 70Q244 66 237 117Z"/><path fill="#edb839" d="M127 105L73 202H121L105 280L190 164H139L172 105Z"/>');
exhibit('lamp','מנורה מאירה','<circle fill="#efd598" opacity=".65" cx="130" cy="144" r="97"/><path fill="#eebd57" stroke="#b68839" stroke-width="3" d="M93 69H166L196 178H63Z"/><path stroke="#637068" stroke-width="9" d="M130 179V260"/><ellipse fill="#637068" cx="130" cy="266" rx="53" ry="9"/>');
exhibit('lion','אריה, סמלו של שבט יהודה',ground+'<circle fill="#b86b35" cx="136" cy="151" r="71"/><ellipse fill="#ddb36b" cx="136" cy="161" rx="48" ry="53"/><circle fill="#263e43" cx="119" cy="153" r="4"/><circle fill="#263e43" cx="155" cy="153" r="4"/><path fill="#6c4a30" d="M122 178H150L136 190Z"/><path stroke="#80582d" stroke-width="3" fill="none" d="M136 189V205M116 201Q136 215 157 201"/>');
exhibit('tower','מגדל גבוה',ground+'<path fill="#c7b58e" d="M90 94H170V273H90Z"/><path fill="#b9996a" d="M78 72H182V104H78Z"/><path fill="#a1bdbe" d="M107 126H153V161H107ZM107 182H153V218H107Z"/><path fill="#596d70" d="M117 239H143V273H117Z"/>');
exhibit('valley','עמק ירוק בין שני הרים',
 '<circle fill="#edc582" cx="204" cy="58" r="22"/>'
 +'<path fill="#9fb693" d="M0 132l46-42 46 44 40-52 46 50 36-34 46 44v40H0z"/>'
 +'<g fill="#eef0e4"><path d="M132 82l14 16h-28zM46 90l12 14H34z"/></g>'
 +'<path fill="#c9d6a8" d="M130 176L92 310h76z"/>'
 +'<g stroke="#a8bb88" stroke-width="3"><path d="M104 268h52M99 288h62M111 246h38"/></g>'
 +'<path fill="#6d8b6f" d="M0 120v190h116Q52 214 0 120z"/>'
 +'<path fill="#83a382" d="M260 108v202H146Q212 206 260 108z"/>'
 +'<path fill="none" stroke="#73adb8" stroke-width="8" stroke-linecap="round" d="M130 182q-12 34 2 56 14 22-4 66"/>'
 +'<g fill="#4f6d52"><path d="M86 254q8-40 16 0q-8 7-16 0z"/><path d="M170 262q8-42 16 0q-8 7-16 0z"/></g>'
 +'<g stroke="#6f5a3e" stroke-width="3"><path d="M94 254v20M178 262v18"/></g>'
 +'<g fill="#e8ddbd"><path d="M60 282h20v16H60z"/><path d="M196 292h20v14h-20z"/></g>'
 +'<g fill="#b2523c"><path d="M57 282l13-10 13 10zM193 292l13-9 13 9z"/></g>');
exhibit('doorway','פתח בדלת','<path fill="#c0aa7d" d="M55 55H204V273H55Z"/><path fill="#74a1b1" d="M71 73H188V273H71Z"/><path fill="#e6c888" d="M70 74L145 97V289L70 273Z"/><circle fill="#a87737" cx="132" cy="189" r="5"/>');
exhibit('hope','נבט מתחת לקשת, סמל לתקווה',ground+'<path stroke="#d58b67" stroke-width="12" fill="none" d="M43 159A87 87 0 0 1 217 159"/><path stroke="#e9bd64" stroke-width="11" fill="none" d="M58 159A72 72 0 0 1 202 159"/><path stroke="#83a89b" stroke-width="10" fill="none" d="M72 159A58 58 0 0 1 188 159"/><path stroke="#4c805b" stroke-width="6" d="M130 268V203"/><path fill="#76a367" d="M130 224Q75 226 84 183Q130 181 130 224ZM130 215Q177 215 185 178Q140 173 130 215Z"/>');
exhibit('plain','מישור חקלאי שטוח עד האופק',
 '<circle fill="#edc582" cx="200" cy="62" r="24"/>'
 +'<path fill="#c3cfaa" d="M0 148h260v22H0z"/>'
 +'<path stroke="#94a884" stroke-width="2" d="M0 148h260"/>'
 +'<path fill="#a9bf92" d="M0 170h260v26H0z"/>'
 +'<path fill="#bccb9e" d="M0 196h260v32H0z"/>'
 +'<path fill="#9cb389" d="M0 228h260v40H0z"/>'
 +'<path fill="#b4c79c" d="M0 268h260v42H0z"/>'
 +'<g stroke="#87a074" stroke-width="2" opacity=".85"><path d="M26 310l16-62M74 310l10-62M128 310v-62M182 310l-10-62M230 310l-16-62"/></g>'
 +'<g fill="#6f8b73"><circle cx="36" cy="216" r="20"/><circle cx="212" cy="212" r="17"/><circle cx="120" cy="196" r="13"/></g>'
 +'<g stroke="#7a6244" stroke-width="5"><path d="M36 232v18M212 226v16M120 208v12"/></g>'
 +'<g fill="#e08b3c"><circle cx="28" cy="212" r="4"/><circle cx="44" cy="222" r="4"/><circle cx="40" cy="204" r="3.5"/><circle cx="206" cy="208" r="3.5"/><circle cx="218" cy="218" r="3.5"/></g>'
 +'<g fill="#6f8b73"><circle cx="78" cy="258" r="26"/></g>'
 +'<path stroke="#7a6244" stroke-width="7" d="M78 280v22"/>'
 +'<g fill="#e08b3c"><circle cx="66" cy="252" r="5"/><circle cx="88" cy="264" r="5"/><circle cx="82" cy="242" r="4.5"/></g>');
exhibit('crown','כתר המסמל הוד והדר','<path fill="#e6b955" stroke="#aa803b" stroke-width="3" d="M57 113L96 152L130 91L169 152L205 113L185 223H77Z"/><path fill="#bb594c" d="M116 183L130 168L145 183L130 202Z"/><path stroke="#f6d995" stroke-width="10" d="M77 230H185"/>');
exhibit('angel','מלאך עם כנפיים והילה',
 '<path fill="#f7f0d9" stroke="#c8baa0" stroke-width="2" d="M120 176Q54 56 27 108Q20 188 110 220M140 176Q206 56 233 108Q240 188 150 220"/>'
 +'<g stroke="#ddd2b4" stroke-width="2" fill="none"><path d="M44 112q24 34 58 60M56 104q22 36 54 66M216 112q-24 34-58 60M204 104q-22 36-54 66"/></g>'
 +'<path fill="#a8b9bc" d="M108 172q22 10 44 0l26 116H82z"/>'
 +'<g stroke="#93a6aa" stroke-width="3" stroke-linecap="round"><path d="M112 206l-6 82M148 206l6 82M130 214v74"/></g>'
 +'<path fill="#c9d3d4" d="M108 172q22 10 44 0 4 12 4 22-26 10-52 0 0-10 4-22z"/>'
 +'<path stroke="#d6b294" stroke-width="9" stroke-linecap="round" d="M112 194l-12 30M148 194l12 30"/>'
 +'<path fill="#c9a97c" d="M130 111c-17 0-28 12-27 29 1 9-1 15-3 19h60c-2-4-4-10-3-19 1-17-10-29-27-29z"/>'
 +'<circle fill="#d6b294" cx="130" cy="140" r="25"/>'
 +'<path fill="#c9a97c" d="M105 134c0-15 11-25 25-25s25 10 25 25c2-19-10-30-25-30s-27 11-25 30z"/>'
 +'<g fill="#fdf8ec"><ellipse cx="121" cy="141" rx="7" ry="4.8"/><ellipse cx="139" cy="141" rx="7" ry="4.8"/></g>'
 +'<g fill="#3a352b"><circle cx="122" cy="141" r="3"/><circle cx="138" cy="141" r="3"/></g>'
 +'<path fill="none" stroke="#c09a74" stroke-width="2.5" stroke-linecap="round" d="M130 144q4 7 0 9"/>'
 +'<path fill="none" stroke="#b3805f" stroke-width="2.5" stroke-linecap="round" d="M123 154q7 6 14 0"/>'
 +'<ellipse stroke="#d3a33e" stroke-width="5" fill="none" cx="130" cy="104" rx="27" ry="8"/>');
exhibit('winepress','גת אבן עם ענבים',ground
 +'<path fill="#cabb9a" d="M26 168h178l-12 66H38z"/>'
 +'<path fill="#ddd0b0" d="M26 168h178v12H26z"/>'
 +'<path fill="#6d4a5c" d="M40 182h150l-9 44H49z"/>'
 +'<g fill="#7b5484"><circle cx="70" cy="196" r="10"/><circle cx="88" cy="192" r="10"/><circle cx="79" cy="209" r="10"/><circle cx="152" cy="198" r="9"/><circle cx="168" cy="193" r="9"/><circle cx="160" cy="210" r="9"/><circle cx="118" cy="203" r="9"/></g>'
 +'<path fill="#8a6a4a" d="M192 208h30v14h-30z"/>'
 +'<path fill="none" stroke="#7b3f52" stroke-width="7" stroke-linecap="round" d="M216 224v26"/>'
 +'<ellipse fill="#b3a182" cx="216" cy="266" rx="32" ry="15"/>'
 +'<ellipse fill="#5f3648" cx="216" cy="263" rx="25" ry="10"/>'
 +'<g fill="#7b5484"><circle cx="44" cy="152" r="9"/><circle cx="62" cy="148" r="9"/><circle cx="53" cy="164" r="9"/><circle cx="71" cy="162" r="9"/><circle cx="62" cy="177" r="9"/></g>'
 +'<path fill="#6f8b5f" d="M60 138q-22-14-4-24 16-8 22 8-8 12-18 16z"/>'
 +'<path stroke="#6f5a3e" stroke-width="3" d="M62 140v-6"/>');
exhibit('vineyard','כרם ענבים',ground+'<path stroke="#8b7653" stroke-width="7" d="M61 275V101M201 275V101M43 123H219"/><path stroke="#6f985f" stroke-width="8" fill="none" d="M62 123Q132 39 204 123"/>'+[[109,141],[130,141],[151,141],[120,161],[141,161],[130,181]].map(([x,y])=>`<circle fill="#785d88" cx="${x}" cy="${y}" r="13"/>`).join(''));
exhibit('paths','צומת שבה הדרך מתפצלת לשתיים',
 '<path fill="#a5b59c" d="M0 168h260v142H0z"/>'
 +'<path stroke="#8fa47f" stroke-width="2" d="M0 168h260"/>'
 +'<path fill="#b0a68c" d="M78 310h104l-32-98h-40z"/>'
 +'<path fill="#b0a68c" d="M110 212h40l-4-14h-32z"/>'
 +'<path fill="#b0a68c" d="M112 206l-8-10-54-24 4-8 62 26z"/>'
 +'<path fill="#b0a68c" d="M148 206l8-10 54-24-4-8-62 26z"/>'
 +'<g stroke="#f6efdd" stroke-linecap="round"><path stroke-width="5" stroke-dasharray="15 13" d="M130 302v-92"/><path stroke-width="3" stroke-dasharray="8 7" d="M118 200L60 174M142 200l58-26"/></g>'
 +'<path stroke="#7a6244" stroke-width="5" stroke-linecap="round" d="M196 246v-52"/>'
 +'<path fill="#dfd0a8" stroke="#a8925f" stroke-width="2" d="M196 198h40l10 10-10 10h-40z"/>'
 +'<path fill="#dfd0a8" stroke="#a8925f" stroke-width="2" d="M196 222h-36l-10 10 10 10h36z"/>'
 +'<g fill="#4f6d52"><path d="M30 224q10-54 20 0q-10 8-20 0z"/><path d="M226 232q10-52 20 0q-10 8-20 0z"/><path d="M62 194q7-34 14 0q-7 6-14 0z"/><path d="M198 192q7-32 14 0q-7 6-14 0z"/></g>'
 +'<g stroke="#6f5a3e" stroke-width="3"><path d="M40 224v24M236 232v22M69 194v16M205 192v16"/></g>');
exhibit('compass','מצפן','<circle fill="#ecd7a5" stroke="#987745" stroke-width="6" cx="130" cy="158" r="86"/><path fill="#c95e45" d="M130 89L151 161L130 148L109 161Z"/><path fill="#5b83a1" d="M130 228L151 155L130 168L109 155Z"/><path stroke="#8d754e" stroke-width="3" d="M51 158H68M194 158H211M130 78V94M130 223V240"/>');
exhibit('horizon','אופק בין שמים לאדמה','<circle cx="130" cy="159" r="48" fill="#e7ae56"/><path fill="#5f97a7" d="M0 168H260V310H0Z"/><path stroke="#f2dab1" stroke-width="4" d="M0 168H260"/><path stroke="#9dbfc0" stroke-width="3" d="M88 205H172M60 240H201"/>');
exhibit('telescope','טלסקופ הצופה למרחק','<path stroke="#776c57" stroke-width="7" d="M133 169L92 278M133 169L186 278"/><path fill="#58809f" d="M50 122L189 75L210 128L73 176Z"/><path stroke="#d4b579" stroke-width="12" d="M189 75L210 128"/>');
exhibit('avenue','שדרה של עצים','<path fill="#a2b68c" d="M0 153H260V310H0Z"/><path fill="#dac7a0" d="M120 152H140L201 310H59Z"/>'+[0,1,2].map(i=>`<g fill="#5d8c70"><ellipse cx="${42+i*23}" cy="${159-i*30}" rx="${28-i*6}" ry="${40-i*7}"/><ellipse cx="${218-i*23}" cy="${159-i*30}" rx="${28-i*6}" ry="${40-i*7}"/></g><path stroke="#836d4e" stroke-width="5" d="M${42+i*23} ${184-i*29}v35M${218-i*23} ${184-i*29}v35"/>`).join(''));
exhibit('banner','נס: דגל על תורן',ground+'<path stroke="#806d51" stroke-width="6" d="M82 275V65"/><path fill="#c96147" d="M86 72Q136 40 188 79L165 143Q124 112 86 145Z"/>');
exhibit('zion','הר עם דגל, רמז לציון',ground+'<path fill="#aaa981" d="M0 267L130 139L260 267Z"/><path stroke="#7e6d50" stroke-width="4" d="M132 148V50"/><path fill="#fff" d="M134 53H206V101H134Z"/><path stroke="#4a7aac" stroke-width="5" d="M136 61H204M136 93H204"/><text x="170" y="84" font-size="20" text-anchor="middle" fill="#4a7aac">✡</text>');
exhibit('streets','רחובות מצטלבים','<path fill="#9eaf93" d="M0 0H260V310H0Z"/><path stroke="#70818a" stroke-width="45" d="M130 0V310M0 173H260"/><path stroke="#eee6c4" stroke-width="3" stroke-dasharray="12 12" d="M130 0V310M0 173H260"/><path fill="#e1be8c" d="M30 43H86V124H30ZM179 227H230V283H179Z"/>');
exhibit('podium','מקום ראשון על דוכן מנצחים',ground+'<path fill="#87a2ad" d="M36 210H98V275H36ZM166 225H226V275H166Z"/><path fill="#d4ad5a" d="M98 165H166V275H98Z"/><text x="132" y="225" text-anchor="middle" fill="white" font-size="46">1</text>');
exhibit('fresh','נטע צעיר ורענן',ground
 +'<ellipse fill="#8a6f4e" cx="130" cy="268" rx="56" ry="17"/>'
 +'<ellipse fill="#7a6244" cx="130" cy="264" rx="40" ry="11"/>'
 +'<path fill="none" stroke="#4f9a45" stroke-width="8" stroke-linecap="round" d="M130 262V132"/>'
 +'<g fill="#5da24f"><ellipse cx="98" cy="228" rx="31" ry="15" transform="rotate(-24 98 228)"/><ellipse cx="162" cy="200" rx="31" ry="15" transform="rotate(24 162 200)"/><ellipse cx="102" cy="176" rx="26" ry="13" transform="rotate(-30 102 176)"/></g>'
 +'<g fill="#7cbf63"><ellipse cx="96" cy="224" rx="24" ry="9" transform="rotate(-24 96 224)"/><ellipse cx="164" cy="196" rx="24" ry="9" transform="rotate(24 164 196)"/><ellipse cx="104" cy="172" rx="19" ry="8" transform="rotate(-30 104 172)"/></g>'
 +'<g stroke="#3f7a38" stroke-width="2" opacity=".7"><path d="M126 232l-52 0M134 202l54-2M126 180l-44-12"/></g>'
 +'<path fill="#6db85a" d="M130 136q-16-26 0-40 16 14 0 40z"/>'
 +'<g fill="#9fd9ea" opacity=".9"><circle cx="84" cy="222" r="5"/><circle cx="172" cy="192" r="4"/><circle cx="112" cy="166" r="4"/></g>'
 +'<g fill="#fff" opacity=".8"><circle cx="82" cy="220" r="1.8"/><circle cx="171" cy="191" r="1.5"/></g>');
exhibit('water','טיפת מים','<path fill="#5599b9" d="M130 65Q79 133 63 183Q40 260 131 272Q221 260 197 181Q178 134 130 65Z"/><path stroke="#b2dbe0" stroke-width="10" fill="none" stroke-linecap="round" d="M82 194Q69 231 111 247"/>');
exhibit('eagle','נשר פורש כנפיים',
 `<g fill="#6b6150">${[0,1,2,3,4].map(i=>`<ellipse cx="${96-i*19}" cy="${176+i*7}" rx="${34-i*3}" ry="11" transform="rotate(${-16-i*7} ${96-i*19} ${176+i*7})"/>`).join('')}</g>`
 +`<g fill="#7d7360">${[0,1,2,3,4].map(i=>`<ellipse cx="${96-i*19}" cy="${160+i*6}" rx="${30-i*3}" ry="9" transform="rotate(${-14-i*6} ${96-i*19} ${160+i*6})"/>`).join('')}</g>`
 +`<g fill="#6b6150">${[0,1,2,3,4].map(i=>`<ellipse cx="${164+i*19}" cy="${176+i*7}" rx="${34-i*3}" ry="11" transform="rotate(${16+i*7} ${164+i*19} ${176+i*7})"/>`).join('')}</g>`
 +`<g fill="#7d7360">${[0,1,2,3,4].map(i=>`<ellipse cx="${164+i*19}" cy="${160+i*6}" rx="${30-i*3}" ry="9" transform="rotate(${14+i*6} ${164+i*19} ${160+i*6})"/>`).join('')}</g>`
 +'<path fill="#5f5645" d="M112 226h36l14 52-32-16-32 16z"/>'
 +'<ellipse fill="#635947" cx="130" cy="190" rx="27" ry="44"/>'
 +'<path fill="#7d7360" d="M112 158q18-10 36 0l6 40q-24-10-48 0z"/>'
 +'<circle fill="#f0e7cf" cx="130" cy="140" r="25"/>'
 +'<path fill="#e3d8bb" d="M108 148q22 12 44 0-4 16-22 16t-22-16z"/>'
 +'<circle fill="#2f2b22" cx="141" cy="134" r="4.5"/>'
 +'<path fill="#e0a63c" d="M152 136l22 8-10 5 6 5-20 6z"/>'
 +'<g stroke="#e0a63c" stroke-width="5" stroke-linecap="round"><path d="M120 258v16M140 258v16"/></g>');
exhibit('sky','שמיים ועננים','<path fill="#a2c2cb" d="M0 0H260V310H0Z"/><g fill="#f9f5e8"><ellipse cx="81" cy="122" rx="60" ry="20"/><circle cx="71" cy="102" r="28"/><circle cx="105" cy="108" r="25"/><ellipse cx="182" cy="214" rx="64" ry="22"/><circle cx="175" cy="194" r="31"/></g>');
exhibit('castle','טירה עם צריחים',ground+'<path fill="#c7b08a" d="M48 112H91V267H48ZM168 112H212V267H168ZM86 170H174V267H86Z"/><path fill="#526d82" d="M38 112L70 64L101 112ZM158 112L190 64L222 112Z"/><path fill="#71694f" d="M112 267V225A18 18 0 0 1 148 225V267Z"/>');
exhibit('builder','פועל עם כף בנאים בונה קיר',ground
 +'<path fill="#c88b67" stroke="#efd3ae" stroke-width="3" d="M142 196h96v80h-96z"/>'
 +'<g stroke="#efd3ae" stroke-width="3"><path d="M142 222h96M142 249h96M190 196v26M166 222v27M214 222v27M190 249v27"/></g>'
 +'<path fill="#d1926d" stroke="#efd3ae" stroke-width="3" d="M186 170h46v26h-46z"/>'
 +'<path stroke="#46596b" stroke-width="10" stroke-linecap="round" d="M80 226v46M104 226v46"/>'
 +'<g fill="#3f4a44"><path d="M68 268h22v10H68zM94 268h22v10H94z"/></g>'
 +'<path fill="#5a87a4" d="M66 148q26 12 52 0l6 80H60z"/>'
 +'<g stroke="#e8d489" stroke-width="5"><path d="M64 180h56M62 196h60"/></g>'
 +'<path stroke="#d7ae8b" stroke-width="9" stroke-linecap="round" d="M68 162l-12 38M118 162l32 12"/>'
 +'<path fill="#9aa4a0" d="M146 166l30-8-6 18z"/>'
 +'<path stroke="#7a6244" stroke-width="5" stroke-linecap="round" d="M142 174l-6 4"/>'
 +'<circle fill="#d7ae8b" cx="92" cy="116" r="25"/>'
 +'<g fill="#fdf8ec"><ellipse cx="83" cy="117" rx="6.5" ry="4.5"/><ellipse cx="101" cy="117" rx="6.5" ry="4.5"/></g>'
 +'<g fill="#3a352b"><circle cx="84" cy="117" r="2.8"/><circle cx="100" cy="117" r="2.8"/></g>'
 +'<path fill="none" stroke="#c09a74" stroke-width="2.5" stroke-linecap="round" d="M92 119q4 7 0 9"/>'
 +'<path fill="none" stroke="#b3805f" stroke-width="2.5" stroke-linecap="round" d="M85 130q7 6 14 0"/>'
 +'<path fill="#e5b64c" d="M92 76c-17 0-27 12-27 28h54c0-16-10-28-27-28z"/>'
 +'<path fill="#d19f33" d="M60 104h64v9H60z"/>'
 +'<path fill="#f0c96a" d="M88 78h8v22h-8z"/>');
inscription('future','מחר','המילה מחר, זמן עתיד');
exhibit('giving','אדם נותן מתנה','<path fill="#7191a9" d="M0 210L63 175L104 213L66 251L0 260Z"/><path fill="#d7b394" d="M63 175L101 158L158 186Q190 192 180 209L113 225L99 231Z"/><rect fill="#cb6d53" x="131" y="108" width="73" height="77"/><path stroke="#f2cc76" stroke-width="9" d="M167 108V185M131 127H204"/>');
exhibit('poem','ספר שירה ונוצת סופר',
 '<path fill="#9c8156" d="M24 196q58-24 106 4v86q-48-26-106-4z"/>'
 +'<path fill="#9c8156" d="M236 196q-58-24-106 4v86q48-26 106-4z"/>'
 +'<path fill="#f7ebcb" d="M32 194q52-22 96 4v78q-44-24-96-4z"/>'
 +'<path fill="#f2e4bf" d="M228 194q-52-22-96 4v78q44-24 96-4z"/>'
 +'<path stroke="#9c8156" stroke-width="3" d="M130 198v80"/>'
 +'<g stroke="#a99062" stroke-width="3" stroke-linecap="round"><path d="M52 218h56M60 232h40M48 246h62M64 260h34"/></g>'
 +'<g stroke="#a99062" stroke-width="3" stroke-linecap="round"><path d="M152 218h56M162 232h38M150 246h60M166 260h32"/></g>'
 +'<path fill="#ece0c0" stroke="#9c8156" stroke-width="2" d="M226 96q10 34-10 62-14 20-34 30 6-26 18-46 12-22 26-46z"/>'
 +'<path stroke="#8a7350" stroke-width="4" stroke-linecap="round" d="M188 186l-22 30"/>'
 +'<path fill="#3f3a2f" d="M170 210l-12 16 18-6z"/>');
inscription('leo','ליאו','השם הפרטי ליאו');
exhibit('arrived','אדם שהגיע אל היעד',ground
 +'<path fill="none" stroke="#c9bb97" stroke-width="6" stroke-linecap="round" stroke-dasharray="11 10" d="M6 300q40-20 66-34"/>'
 +'<ellipse fill="#c9bb97" cx="200" cy="272" rx="34" ry="11"/>'
 +'<ellipse fill="#c4774f" cx="200" cy="272" rx="15" ry="5"/>'
 +'<path stroke="#7a6244" stroke-width="5" stroke-linecap="round" d="M200 268V128"/>'
 +'<path fill="#c4774f" d="M200 132h44l-12 17 12 17h-44z"/>'
 +'<path fill="#4a3b2e" d="M98 140c-13 0-22 9-21 23 0 8-1 13-3 16h48c-2-3-3-8-3-16 1-14-8-23-21-23z"/>'
 +'<circle fill="#d9b391" cx="98" cy="168" r="21"/>'
 +'<path fill="#4a3b2e" d="M77 163c0-13 9-21 21-21s21 8 21 21c2-16-9-26-21-26s-23 10-21 26z"/>'
 +'<g fill="#fdf8ec"><ellipse cx="91" cy="168" rx="5.5" ry="4"/><ellipse cx="105" cy="168" rx="5.5" ry="4"/></g>'
 +'<g fill="#3a352b"><circle cx="92" cy="168" r="2.4"/><circle cx="104" cy="168" r="2.4"/></g>'
 +'<path fill="none" stroke="#b3805f" stroke-width="2.2" stroke-linecap="round" d="M92 179q6 5 12 0"/>'
 +'<path fill="#5c8097" d="M80 194h36l9 56H71z"/>'
 +'<path fill="#8a6a4a" d="M64 198h18v34H64z"/>'
 +'<g stroke="#d9b391" stroke-width="9" stroke-linecap="round"><path d="M84 200L62 158M112 200l24-42"/></g>'
 +'<g stroke="#46596b" stroke-width="9" stroke-linecap="round"><path d="M88 250v26M108 250v26"/></g>');
exhibit('river','נהר מתפתל','<path fill="#9ab48b" d="M0 0H260V310H0Z"/><path fill="#589bb4" d="M87 0Q190 60 108 130Q24 183 190 228L156 310H224L237 224Q210 188 129 174Q53 150 147 102Q207 47 119 0Z"/>');
exhibit('port','נמל, מנוף וספינת מכולות',
 '<path fill="#6f9fb0" d="M0 196H260V310H0Z"/>'
 +'<g stroke="#9cc3cd" stroke-width="3" fill="none"><path d="M12 286q16-8 32 0M64 300q18-8 36 0M150 292q18-8 36 0M206 280q16-8 32 0"/></g>'
 +'<path fill="#c8b38b" d="M0 174h86v40H0Z"/><path fill="#a8946f" d="M0 214h86v14H0Z"/>'
 +'<g fill="#4f5a54"><rect x="16" y="92" width="8" height="86" rx="3"/><rect x="66" y="92" width="8" height="86" rx="3"/><rect x="6" y="86" width="146" height="10" rx="4"/></g>'
 +'<path stroke="#3f4a44" stroke-width="2.5" d="M124 96v34"/><rect fill="#c4774f" x="110" y="130" width="28" height="18" rx="2"/>'
 +'<path fill="#3f4a44" d="M46 168h14v10H46Z"/>'
 +'<path fill="#46647d" d="M104 240h150l-18 32H120z"/>'
 +'<path fill="#b2523c" d="M108 260h144l-4 8H112z"/>'
 +'<g><rect fill="#c4774f" x="122" y="218" width="34" height="22"/><rect fill="#4f8b8f" x="158" y="218" width="34" height="22"/><rect fill="#dfc98f" x="122" y="196" width="34" height="22"/><rect fill="#b2523c" x="158" y="196" width="34" height="22"/></g>'
 +'<path fill="#efe4c8" d="M198 204h44v36h-44z"/>'
 +'<g fill="#5f8ba0"><rect x="206" y="212" width="11" height="10"/><rect x="223" y="212" width="11" height="10"/></g>'
 +'<path fill="#b2523c" d="M214 180h14v24h-14z"/><path fill="#3f4a44" d="M212 176h18v6h-18z"/>'
 +'<path stroke="#3f4a44" stroke-width="3" d="M118 196v-26"/>'
 +'<path fill="none" stroke="#8a7a5c" stroke-width="3" d="M53 170q26 16 52 28"/>');
exhibit('knight','קסדת אביר ומגן','<path fill="#8098a0" stroke="#516871" stroke-width="3" d="M78 145V99A52 52 0 0 1 182 99V145L130 175Z"/><path stroke="#384e59" stroke-width="10" d="M89 111H171"/><path fill="#a8644a" stroke="#d3b57b" stroke-width="5" d="M74 185H186V240Q170 280 130 294Q90 280 74 240Z"/><path stroke="#e3ca92" stroke-width="8" d="M130 195V271M92 223H168"/>');
exhibit('terraces','גנים מדורגים עם כיפה מוזהבת',
 '<path fill="#7d9a72" d="M0 310V246q58-30 108-116h44q50 86 108 116v64z"/>'
 +[0,1,2,3,4].map(i=>`<g><path fill="#dfd3ae" d="M${102-i*19} ${156+i*29}h${56+i*38}v9h${-56-i*38}z"/><path fill="#6d8b64" d="M${102-i*19} ${165+i*29}h${56+i*38}v20h${-56-i*38}z"/></g>`).join('')
 +'<path fill="#e8ddbd" d="M118 150h24v152h-24z"/>'
 +[0,1,2,3,4,5,6].map(i=>`<path stroke="#c9bb93" stroke-width="2" d="M118 ${166+i*20}h24"/>`).join('')
 +'<path fill="#efe6cb" d="M106 104h48v34h-48z"/>'
 +'<g stroke="#cdbf95" stroke-width="3"><path d="M116 110v26M130 110v26M144 110v26"/></g>'
 +'<path fill="#d6a54e" d="M104 104a26 22 0 0 1 52 0z"/>'
 +'<circle fill="#c08f38" cx="130" cy="76" r="5"/><path stroke="#c08f38" stroke-width="3" d="M130 82v-4"/>'
 +'<g fill="#4f6d52"><path d="M56 226q9-46 18 0q-9 8-18 0z"/><path d="M188 226q9-46 18 0q-9 8-18 0z"/><path d="M26 272q9-44 18 0q-9 8-18 0z"/><path d="M218 272q9-44 18 0q-9 8-18 0z"/></g>'
 +'<g stroke="#6f5a3e" stroke-width="3"><path d="M65 226v18M197 226v18M35 272v16M227 272v16"/></g>');
exhibit('wall','כותל אבנים עתיק','<path fill="#cbb996" d="M18 61H242V285H18Z"/><g stroke="#9f9072" stroke-width="3"><path d="M18 106H242M18 151H242M18 196H242M18 241H242M72 61V106M175 61V106M119 106V151M73 151V196M178 151V196M120 196V241M74 241V285M179 241V285"/></g><path fill="#718559" d="M177 98L190 105L183 130L173 115ZM63 186L75 195L69 220L60 204Z"/>');
exhibit('dome','כיפה מוזהבת מעל מבנה אבן','<path fill="#99a99c" d="M22 202H238V278H22Z"/><path fill="#d5a84b" d="M66 174A64 64 0 0 1 194 174Z"/><path fill="#c1b997" d="M65 175H195V216H65Z"/><path stroke="#ba9345" stroke-width="4" d="M130 111V80"/>');
exhibit('lake','אגם מוקף הרים','<path fill="#829880" d="M0 129L58 76L113 124L184 58L260 114V200H0Z"/><ellipse fill="#6aa9c0" cx="130" cy="211" rx="119" ry="65"/><path stroke="#c9dcd6" stroke-width="3" d="M61 204H143M127 227H205"/>');
exhibit('hotwater','מעיינות מים חמים','<ellipse fill="#b4a787" cx="130" cy="238" rx="107" ry="42"/><ellipse fill="#72adb6" cx="130" cy="230" rx="85" ry="28"/><g stroke="#9aa7a2" stroke-width="7" fill="none" stroke-linecap="round"><path d="M80 202Q55 160 81 121Q104 91 78 67M131 202Q106 160 132 121Q155 91 129 67M182 202Q157 160 183 121Q206 91 180 67"/></g>');
exhibit('alley','סמטת אבן עם דלת כחולה','<path fill="#c9b895" d="M20 29H240V310H20Z"/><path fill="#3879a4" d="M89 278V147A41 41 0 0 1 171 147V278Z"/><path stroke="#a99470" stroke-width="2" d="M20 89H240M20 153H83M177 153H240M20 217H84M177 217H240"/><path fill="#e0d0ae" d="M64 280H195V295H64ZM45 296H216V310H45Z"/>');
exhibit('palette','פלטת צבעים של אמן','<path fill="#bf9a67" d="M45 117Q92 42 180 83Q247 125 216 187Q201 212 155 204Q130 197 134 227Q126 276 78 243Q20 204 45 117Z"/>'+[[77,135,'#527eac'],[109,106,'#d8644c'],[154,107,'#e6b647'],[190,140,'#6c9976']].map(([x,y,c])=>`<circle fill="${c}" cx="${x}" cy="${y}" r="16"/>`).join('')+'<ellipse fill="#e8e6d5" cx="85" cy="207" rx="13" ry="17"/>');
exhibit('landscape','נוף פתוח של הרים, עמק ועצים',
 '<circle fill="#edc582" cx="202" cy="60" r="24"/>'
 +'<path fill="#8fa2a6" d="M0 148l50-54 44 50 42-58 46 56 34-32 44 46v42H0z"/>'
 +'<g fill="#f1ead8"><path d="M136 86l18 24h-36zM50 94l16 20H34z"/></g>'
 +'<path fill="#7d9a72" d="M0 176q64-42 132 0 66 40 128-6v66H0z"/>'
 +'<path fill="#9cb389" d="M0 224q78-34 150 6 56 30 110 2v78H0z"/>'
 +'<path fill="#b4c79c" d="M0 270q120-22 260 4v36H0z"/>'
 +'<g fill="#5d8c70"><circle cx="42" cy="248" r="25"/><circle cx="216" cy="256" r="21"/><circle cx="150" cy="238" r="15"/></g>'
 +'<g stroke="#7a6244" stroke-width="6"><path d="M42 266v28M216 272v22M150 250v18"/></g>'
 +'<g fill="#4f6d52"><path d="M84 240q9-46 18 0q-9 8-18 0z"/><path d="M182 236q8-42 16 0q-8 7-16 0z"/></g>'
 +'<g stroke="#6f5a3e" stroke-width="3"><path d="M93 240v20M190 236v18"/></g>');
exhibit('cylinder','גליל גאומטרי','<path fill="#6793a4" d="M68 95H192V238Q130 291 68 238Z"/><ellipse fill="#a5c4c6" cx="130" cy="96" rx="62" ry="27"/><path stroke="#447487" stroke-width="3" fill="none" d="M68 238Q130 290 192 238"/>');
exhibit('stairs','מעלות: מדרגות עולות','<path fill="#b6a88a" stroke="#8f8168" stroke-width="3" d="M26 274V237H69V199H112V161H155V123H198V84H235V274Z"/>');
exhibit('atom','סמל מחקר אטומי','<g fill="none" stroke="#5e8da4" stroke-width="5"><ellipse cx="130" cy="158" rx="99" ry="34"/><ellipse transform="rotate(60 130 158)" cx="130" cy="158" rx="99" ry="34"/><ellipse transform="rotate(120 130 158)" cx="130" cy="158" rx="99" ry="34"/></g><circle fill="#d78e4f" cx="130" cy="158" r="16"/>');
exhibit('bronze','מדליית ארד','<path fill="#5a7aa2" d="M76 44H117L151 142H110Z"/><path fill="#cf7451" d="M143 44H184L150 142H109Z"/><circle fill="#ad774e" stroke="#dab58b" stroke-width="8" cx="130" cy="190" r="68"/><text x="130" y="211" text-anchor="middle" fill="#f4d5aa" font-size="59">3</text>');
const extraLevels = [
['חולון','sand','suffixOn','חול + האותיות ון. חברו למילה אחת.','חול + ון = חולון'],
['אילת','ram','letterT','החיה היא איל. הוסיפו את האות שבמסגרת השנייה.','איל + ת = אילת'],
['חדרה','room','letterH','חלל בתוך בית, ואחריו האות ה׳.','חדר + ה = חדרה'],
['אשדוד','fire','uncle','להבות, והאח של אבא או אמא.','אש + דוד = אשדוד'],
['כפר סבא','village','grandfather','יישוב קטן, ואבא של אחד ההורים.','כפר + סבא = כפר סבא'],
['גבעתיים','hill','hill','ספרו כמה גבעות יש. חפשו צורת זוגי, כמו ידיים.','שתי גבעות = גבעתיים'],
['קרית ים','city','sea','קבוצת הבניינים מסמלת קריה. לצדה גלים.','קריית + ים = קריית ים'],
['קרית שמונה','city','eight','התחילו בקריית, ואז ספרו את הכוכבים.','קריית + שמונה = קריית שמונה'],
['בני ברק','boys','lightning','ילדים בנים, והבזק בסופת רעמים.','בני + ברק = בני ברק'],
['אור יהודה','lamp','lion','המנורה מפיצה אור. האריה הוא סמל שבט יהודה.','אור + יהודה = אור יהודה'],
['אור עקיבא','lamp','rabbi','אור, ושמו של רבי שהיה רבו של רבי שמעון בר יוחאי.','אור + עקיבא = אור עקיבא'],
['מגדל העמק','tower','valley','מבנה גבוה, והשטח הנמוך בין ההרים.','מגדל + העמק = מגדל העמק'],
['פתח תקווה','doorway','hope','הדלת הפתוחה היא פתח. הנבט מסמל תקווה.','פתח + תקווה = פתח תקווה'],
['רמת השרון','hill','plain','רמה, והמישור שבין חוף הים לשומרון: השרון.','רמת + השרון = רמת השרון'],
['הוד השרון','crown','plain','הכתר מסמל הוד והדר. המישור הוא השרון.','הוד + השרון = הוד השרון'],
['גבעת שמואל','hill','prophet','גבעה, והנביא שמשח את שאול ואת דוד למלכים.','גבעת + שמואל = גבעת שמואל'],
['קרית מלאכי','city','angel','קריה, ויצור עם כנפיים. סיימו את המילה השנייה בי׳.','קריית + מלאכי = קריית מלאכי'],
['קרית גת','city','winepress','קריה, ומתקן עתיק שדרכו בו ענבים.','קריית + גת = קריית גת'],
['כרמיאל','vineyard','suffixEl','מקום שמגדלים בו ענבים, והאותיות אל.','כרם + אל = כרמיאל, עם י׳ מחברת'],
['נתיבות','paths','compass','שתי היצירות מדברות על דרכים. חפשו מילה נרדפת בנקבה וברבים.','דרכים ונתיבים = נתיבות'],
['אופקים','horizon','telescope','הקו הרחוק שבו השמים פוגשים בארץ, בלשון רבים.','קווי האופק הרחוקים = אופקים'],
['שדרות','avenue','avenue','איך נקראות דרכים שמשני צדיהן שורות עצים?','שתי שדרות עצים = שדרות'],
['נס ציונה','banner','zion','נס הוא גם דגל. ציונה פירושו לכיוון ציון.','נס + ציונה = נס ציונה'],
['רחובות','streets','streets','מה מצויר בשתי התמונות, בלשון רבים?','רחובות מצטלבים = רחובות'],
['ראשון לציון','podium','zion','המקום על הדוכן, ולאן פונה הדגל: לציון.','ראשון + לציון = ראשון לציון'],
['רעננה','fresh','water','איך מתארים צמח טרי וחי אחרי השקיה? ענו בנקבה.','צמחייה טרייה ורעננה → רעננה'],
['נשר','eagle','sky','זהו את העוף הגדול. שמו הוא גם שם העיר.','נשר בשמים → נשר'],
['טירת כרמל','castle','vineyard','טירה, והר באזור חיפה ששמו קשור לכרמים.','טירת + כרמל = טירת כרמל'],
['יבנה','builder','future','מה הפועל יעשה מחר? הטו את הפועל לבנות בעתיד, הוא.','הוא יבנה מחר → יבנה'],
['נתניה','giving','suffixYa','הוא נתן מתנה. חברו את הפועל בעבר עם יה.','נתן + יה = נתניה'],
['הרצליה','herzl','suffixYa','זהו דיוקן סמלי של חוזה המדינה. הוסיפו יה לשמו.','הרצל + יה = הרצליה'],
['קרית ביאליק','city','poem','קריה, והמשורר שכתב את השיר קן לציפור.','קריית + ביאליק = קריית ביאליק'],
['קרית מוצקין','city','leo','קריה שנקראת על שם המנהיג הציוני ליאו מוצקין.','קריית + מוצקין = קריית מוצקין'],
['קרית אתא','city','arrived','קריה, והמילה הארמית לבא או הגיע: אתא.','קריית + אתא = קריית אתא'],
['נהריה','river','suffixYa','זרם מים רחב, והאותיות יה.','נהר + יה = נהריה'],
['עכו','port','knight','עיר נמל עתיקה בצפון, ובה אולמות האבירים.','הנמל ואולמות האבירים מרמזים לעכו','place'],
['חיפה','terraces','port','הגנים המדורגים של הבהאים ונמל למרגלות הכרמל.','הגנים הבהאיים והנמל מרמזים לחיפה','place'],
['ירושלים','wall','dome','הכותל וכיפת הסלע נמצאים בעיר הזאת.','הכותל וכיפת הסלע → ירושלים','place'],
['טבריה','lake','hotwater','עיר לחוף הכנרת, המוכרת גם במעיינות החמים שלה.','הכנרת וחמי טבריה → טבריה','place'],
['צפת','alley','palette','עיר גלילית עם סמטאות אבן ורובע אמנים.','סמטאות ורובע אמנים → צפת','place'],
['נוף הגליל','landscape','cylinder','נוף, והגוף הגאומטרי גליל עם ה׳ הידיעה.','נוף + הגליל = נוף הגליל'],
['מעלות תרשיחא','stairs','tarshiha','מילה נוספת למדרגות, ואחריה השם על השלט.','מעלות + תרשיחא = מעלות תרשיחא'],
['דימונה','sand','atom','עיר בנגב ששמה נקשר לקריה למחקר גרעיני הסמוכה.','נוף הנגב והמחקר הגרעיני מרמזים לדימונה','place'],
['ערד','bronze','sand','שם העיר נשמע כמו המתכת של מדליית המקום השלישי, אבל מתחיל בע׳.','ארד נשמע כמו ערד; המדבר מחזק את הרמז']
].map(([city,a,b,hint,explain,kind])=>({city,art:[a,b],hint,explain,kind:kind||'word'}));
