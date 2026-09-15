import {exhibit, inscription, person, ground} from './extraExhibits.js';
// Additional museum exhibitions. Symbols are original illustrations, not portraits.
inscription('musicNameDana','דנה','השם דנה');
inscription('year1992','1992','השנה 1992');inscription('year2004','2004','השנה 2004');inscription('year2020','2020','השנה 2020');inscription('draft9','9','המספר 9');
exhibit('apple','תפוח אדום',ground+'<path fill="#c55344" d="M128 102Q74 65 48 119Q21 181 84 245Q110 269 131 249Q158 268 189 237Q242 170 209 117Q183 71 128 102Z"/><path stroke="#776041" stroke-width="8" d="M130 110L141 65"/><ellipse fill="#6f985c" cx="164" cy="70" rx="25" ry="11"/>');
exhibit('liberty','פסל החירות','<path fill="#7ca599" d="M86 282L112 145H151L176 282Z"/><circle fill="#7ca599" cx="132" cy="121" r="22"/><path stroke="#7ca599" stroke-width="14" d="M112 159L66 98L51 62M151 164L175 208"/><path fill="#eabf58" d="M39 59L48 23L62 59Z"/><path fill="#79988e" d="M69 282H194V301H69Z"/><path stroke="#65877f" stroke-width="5" d="M107 105L96 88M119 100L115 80M133 98V76M147 102L154 83M155 111L174 99"/>');
exhibit('film','לוח צילום קולנוע','<rect fill="#3b4b55" x="42" y="128" width="181" height="123" rx="4"/><path fill="#3b4b55" d="M36 93L207 58L215 99L44 134Z"/><path stroke="#f0dfbd" stroke-width="12" d="M61 91L84 117M105 82L128 108M153 72L173 98M200 61L211 79"/><path stroke="#c1c8c2" stroke-width="2" d="M61 172H201M61 204H201M121 151V232"/>');
exhibit('wind','משבי רוח','<g stroke="#769aaa" stroke-width="9" fill="none" stroke-linecap="round"><path d="M29 113H173Q224 111 202 74Q181 45 155 76M29 159H214M29 204H155Q199 207 181 244Q164 268 139 242"/></g>');
exhibit('bridge','גשר תלוי אדום','<path fill="#7aabba" d="M0 208H260V310H0Z"/><g stroke="#be6749" fill="none"><path stroke-width="10" d="M62 77V254M201 77V254M0 221H260"/><path stroke-width="4" d="M0 175Q47 166 62 82Q129 220 201 82Q227 168 260 175M98 138V218M132 158V218M167 139V218"/></g>');
exhibit('tram','קרונית רחוב','<path stroke="#96836a" stroke-width="4" d="M53 300L103 232M202 300L153 232"/><rect fill="#c48648" x="54" y="110" width="154" height="128" rx="8"/><path fill="#566a6c" d="M46 95H216V114H46Z"/><path fill="#bcd4ce" d="M70 126H192V176H70Z"/><path stroke="#c48648" stroke-width="6" d="M110 126V176M150 126V176"/><circle fill="#45524f" cx="82" cy="243" r="14"/><circle fill="#45524f" cx="182" cy="243" r="14"/>');
exhibit('dice','קוביות משחק','<rect fill="#fbf2d9" stroke="#b69f7d" stroke-width="4" x="45" y="87" width="116" height="116" rx="16"/><rect fill="#c86d55" x="123" y="166" width="97" height="97" rx="13"/>'+[[73,115],[131,115],[103,145],[73,175],[131,175]].map(([x,y])=>`<circle fill="#42617a" cx="${x}" cy="${y}" r="8"/>`).join('')+'<circle fill="#fae5bb" cx="149" cy="192" r="8"/><circle fill="#fae5bb" cx="194" cy="237" r="8"/>');
exhibit('palm','דקל על החוף',ground+'<path stroke="#9b7d4e" stroke-width="12" d="M133 278Q151 171 131 116"/><g fill="#63946a"><path d="M130 120Q48 48 20 122Q77 93 130 120ZM130 120Q211 41 242 126Q183 91 130 120ZM130 120Q99 28 71 48Q75 101 130 120ZM130 120Q165 27 194 52Q182 105 130 120Z"/></g>');
exhibit('tea','ספל תה','<path fill="#ead8b0" stroke="#a18e6b" stroke-width="4" d="M55 144H182V220Q117 283 55 220Z"/><path stroke="#a18e6b" stroke-width="10" fill="none" d="M183 155Q235 145 221 191Q214 215 183 207"/><ellipse fill="#916f46" cx="118" cy="144" rx="62" ry="16"/><path stroke="#adb7ab" stroke-width="5" fill="none" d="M94 115Q72 87 94 61M133 115Q111 87 133 61"/>');
exhibit('needle','מגדל תצפית בצורת מחט','<path stroke="#879a9d" stroke-width="7" d="M130 56V280M130 124L94 280M130 124L166 280"/><ellipse fill="#678ba0" cx="130" cy="116" rx="77" ry="16"/><path fill="#bbc6bd" d="M54 111L97 87H166L207 111Z"/>');
exhibit('capitol','בניין עם כיפה לבנה','<path fill="#eee7d4" stroke="#bdb7a5" stroke-width="2" d="M29 177H231V265H29ZM91 124H170V177H91Z"/><path fill="#d9d7c9" d="M89 126A43 43 0 0 1 174 126Z"/><path stroke="#bcbba9" stroke-width="6" d="M49 190V253M76 190V253M102 190V253M130 190V253M156 190V253M184 190V253M209 190V253"/>');
exhibit('monument','אובליסק אבן גבוה','<path fill="#ddd0b2" stroke="#aea58f" stroke-width="2" d="M109 280V78L131 45L153 78V280Z"/><path fill="#b9ad91" d="M131 45V280H153V78Z"/>');
exhibit('trumpet','חצוצרה','<path fill="#d9ab51" d="M61 149H156Q192 145 220 109V215Q192 180 156 174H61Z"/><path fill="none" stroke="#b38b3e" stroke-width="12" d="M70 174V221H147V166M45 145H71"/><path stroke="#927444" stroke-width="6" d="M91 138V177M113 138V177M135 138V177"/>');
exhibit('mask','מסכת קרנבל','<path fill="#956c9d" d="M24 113Q75 80 130 116Q192 80 237 113L215 194Q164 221 130 174Q91 221 43 194Z"/><ellipse fill="#f5d899" cx="82" cy="144" rx="29" ry="15"/><ellipse fill="#f5d899" cx="180" cy="144" rx="29" ry="15"/>');
exhibit('wheat','אלומת שיבולים, עומר','<path stroke="#aa873f" stroke-width="5" d="M130 279L95 77M130 279V62M130 279L167 77"/>'+[95,130,167].map(x=>[0,1,2].map(y=>`<ellipse fill="#d7b15e" transform="rotate(-35 ${x-7} ${86+y*27})" cx="${x-7}" cy="${86+y*27}" rx="9" ry="17"/><ellipse fill="#d7b15e" transform="rotate(35 ${x+8} ${86+y*27})" cx="${x+8}" cy="${86+y*27}" rx="9" ry="17"/>`).join('')).join(''));
person('person','דמות אדם','#625846','#dcb694');
exhibit('dove','יונת שלום','<path fill="#f7f1dc" stroke="#b4b5a2" stroke-width="2" d="M56 192Q110 168 89 88Q155 115 167 169Q195 136 214 155Q244 176 207 191Q167 249 88 212L31 236Z"/><path stroke="#6f955c" stroke-width="4" d="M216 179L243 164"/>');
exhibit('globe','כדור הארץ','<circle fill="#6cabc1" cx="130" cy="154" r="91"/><path fill="#83a97b" d="M78 77L135 70L160 96L133 128L160 164L138 205L103 215L88 162L49 146ZM174 183L207 172L213 216L183 234Z"/>');
exhibit('iron','מוטות מתכת','<path fill="#8c9da5" stroke="#536b79" stroke-width="3" d="M51 103L90 78L124 96L87 122ZM51 103V260L87 281V122ZM87 122L124 96V253L87 281ZM143 112L180 89L215 108L178 136ZM143 112V264L178 284V136ZM178 136L215 108V259L178 284Z"/>');
exhibit('cedar','עץ ארז',ground+'<path stroke="#836944" stroke-width="11" d="M131 270V94"/><path fill="#528068" d="M131 51L76 115H102L46 180H83L21 234H239L179 180H215L159 115H185Z"/>');
exhibit('beam','פנס שמטיל קרן אור',
 '<path fill="#4a4a43" opacity=".14" d="M0 0h260v310H0z"/>'
 +'<path fill="#b7ae95" d="M0 282h260v28H0z"/>'
 +'<path fill="#f3dc9a" opacity=".72" d="M40 94h30l112 188H110z"/>'
 +'<path fill="#fbefc6" opacity=".85" d="M48 96h14l68 186H96z"/>'
 +'<ellipse fill="#f8ecc0" opacity=".9" cx="146" cy="284" rx="58" ry="11"/>'
 +'<path stroke="#4f5a54" stroke-width="6" d="M34 46h26M55 46v18"/>'
 +'<path fill="#4f5a54" d="M30 62h50l-10 34H40z"/>'
 +'<path fill="#5f6b62" d="M30 62h50v8H30z"/>'
 +'<ellipse fill="#faeec2" cx="55" cy="96" rx="16" ry="6"/>'
 +'<g stroke="#f3dc9a" stroke-width="3" opacity=".8" stroke-linecap="round"><path d="M92 84l14-14M84 62l6-16M26 106l-16 8"/></g>');
exhibit('leveltool','פלס בנאים עם בועת אוויר',
 '<path fill="#c88b67" d="M26 214h208v64H26z"/>'
 +'<g stroke="#e8c9a6" stroke-width="3"><path d="M26 246h208M80 214v32M156 214v32M52 246v32M118 246v32M196 246v32"/></g>'
 +'<rect fill="#dfa93d" x="14" y="144" width="232" height="56" rx="9"/>'
 +'<rect fill="#efc464" x="14" y="144" width="232" height="15" rx="7"/>'
 +'<g fill="#5f6b62"><path d="M20 144h20v56H20a6 6 0 0 1-6-6v-44a6 6 0 0 1 6-6z"/><path d="M220 144h20a6 6 0 0 1 6 6v44a6 6 0 0 1-6 6h-20z"/></g>'
 +'<rect fill="#eef5ef" stroke="#8a6a2e" stroke-width="3" x="94" y="158" width="72" height="30" rx="15"/>'
 +'<ellipse fill="#a8d8c2" cx="130" cy="173" rx="13" ry="10"/>'
 +'<ellipse fill="#e6f6ee" cx="126" cy="170" rx="5" ry="3"/>'
 +'<g stroke="#3f4a44" stroke-width="3"><path d="M113 159v28M147 159v28"/></g>'
 +'<rect fill="#eef5ef" stroke="#8a6a2e" stroke-width="2" x="50" y="156" width="26" height="34" rx="13"/>'
 +'<ellipse fill="#a8d8c2" cx="63" cy="171" rx="9" ry="7"/>'
 +'<g stroke="#8a6a2e" stroke-width="2" opacity=".8">'
 +[0,1,2,3,4,5,6,7].map(i=>`<path d="M${186+i*7} 196v-8"/>`).join('')+'</g>');
exhibit('microphone','מיקרופון','<path stroke="#506a7a" stroke-width="9" d="M130 188V269M89 270H171"/><rect fill="#87999b" stroke="#47647a" stroke-width="4" x="96" y="53" width="68" height="133" rx="34"/><path stroke="#47647a" stroke-width="4" d="M106 87H154M106 103H154M106 119H154M80 145Q80 219 130 219Q180 219 180 145"/>');
exhibit('sharp','עיפרון מחודד לחוד חד',
 '<path fill="#d98a7e" d="M102 46h56v22a10 10 0 0 1-10 10h-36a10 10 0 0 1-10-10z"/>'
 +'<path fill="#9aa4a0" d="M102 74h56v20h-56z"/>'
 +'<g stroke="#7d8784" stroke-width="2"><path d="M102 80h56M102 88h56"/></g>'
 +'<path fill="#dfa93d" d="M102 94h56v124h-56z"/>'
 +'<path fill="#c9942f" d="M140 94h18v124h-18z"/>'
 +'<path fill="#efc464" d="M102 94h12v124h-12z"/>'
 +'<path fill="#efdcb4" d="M102 218h56l-28 62z"/>'
 +'<path fill="#dcc596" d="M140 218h18l-28 62z"/>'
 +'<path fill="#3c3a34" d="M119 244h22l-11 36z"/>'
 +'<g fill="#efdcb4" stroke="#c9b58c" stroke-width="2"><path d="M46 254q22-18 34 2-18 14-34-2z"/><path d="M196 238q20-16 32 4-18 12-32-4z"/></g>'
 +'<g stroke="#c9942f" stroke-width="3" stroke-linecap="round"><path d="M98 286l-14 12M162 286l14 12M130 292v14"/></g>');
exhibit('judo','חליפת ג׳ודו','<path fill="#f4f0e0" stroke="#bec4b9" stroke-width="3" d="M86 72L35 104L16 174L56 189L76 139L69 257H191L184 139L205 189L246 174L225 104L175 72L130 103Z"/><path stroke="#c2c6ba" stroke-width="5" d="M87 76L158 197M175 76L104 197"/><path stroke="#334f70" stroke-width="16" d="M70 199H191M129 199L109 248M135 199L161 242"/>');
exhibit('gold','זהב ומקום ראשון','<path fill="#5681a5" d="M72 42H111L150 143H108ZM147 42H188L152 143H111Z"/><circle fill="#dfb447" stroke="#f2d894" stroke-width="8" cx="130" cy="191" r="66"/><text x="130" y="214" text-anchor="middle" fill="#fff2c6" font-size="60">1</text>');
exhibit('silver','מדליית כסף','<path fill="#5d82a1" d="M72 42H111L150 143H108ZM147 42H188L152 143H111Z"/><circle fill="#9fb0b8" stroke="#dbe3db" stroke-width="8" cx="130" cy="191" r="66"/><text x="130" y="214" text-anchor="middle" fill="#f5f5e6" font-size="60">2</text>');
exhibit('windsurf','גלשן רוח','<path fill="#6ca3b6" d="M0 249H260V310H0Z"/><ellipse fill="#cf8a4c" cx="133" cy="248" rx="99" ry="9"/><path stroke="#546e7a" stroke-width="5" d="M128 244V40"/><path fill="#cd6f50" d="M131 44L225 216H131Z"/><path fill="#ecd08d" d="M125 71L52 205H125Z"/>');
exhibit('ribbon','מתעמלת עם סרט מתעופף',
 '<path fill="#a5b59c" d="M0 268q130-24 260 4v38H0z"/>'
 +'<path fill="#4a3b2e" d="M80 104c-11 0-18 7-17 19 0 6-1 10-2 12h38c-1-2-2-6-2-12 1-12-6-19-17-19z"/>'
 +'<circle fill="#d9b391" cx="80" cy="128" r="17"/>'
 +'<path fill="#4a3b2e" d="M63 124c0-11 7-18 17-18s17 7 17 18c2-14-7-22-17-22s-19 8-17 22z"/>'
 +'<circle fill="#4a3b2e" cx="64" cy="114" r="8"/>'
 +'<g fill="#fdf8ec"><ellipse cx="75" cy="128" rx="5" ry="3.6"/><ellipse cx="88" cy="128" rx="5" ry="3.6"/></g>'
 +'<g fill="#3a352b"><circle cx="76" cy="128" r="2.2"/><circle cx="87" cy="128" r="2.2"/></g>'
 +'<path fill="none" stroke="#b3805f" stroke-width="2" stroke-linecap="round" d="M77 138q5 4 10 0"/>'
 +'<path fill="#c2547f" d="M68 148h24l6 54H62z"/>'
 +'<g stroke="#d9b391" stroke-width="8" stroke-linecap="round"><path d="M90 156l32-24M70 158L44 178"/></g>'
 +'<g stroke="#d9b391" stroke-width="9" stroke-linecap="round"><path d="M74 202v62M90 204l40 34"/></g>'
 +'<path stroke="#7a6244" stroke-width="4" stroke-linecap="round" d="M120 134l16-12"/>'
 +'<path fill="none" stroke="#d4589a" stroke-width="7" stroke-linecap="round" d="M136 122q44-20 66 12 18 30-12 42-28 10-26-16 2-24 32-20 34 4 34 42 0 38-46 44"/>');
exhibit('gymfloor','מתעמל בתרגיל קרקע על משטח',
 '<path fill="#95b8bf" stroke="#f4e9cf" stroke-width="10" d="M30 168h200l30 118H0z"/>'
 +'<path fill="none" stroke="#7fa7af" stroke-width="3" d="M44 196h172M36 226h188M26 256h208"/>'
 +'<path fill="#3f6d96" d="M118 120h24l6 56h-36z"/>'
 +'<path stroke="#d1ac8d" stroke-width="10" stroke-linecap="round" d="M122 128L86 92M138 128l36-36"/>'
 +'<path stroke="#d1ac8d" stroke-width="11" stroke-linecap="round" d="M124 174l-10 62M136 174l10 62"/>'
 +'<g fill="#c2543f"><ellipse cx="112" cy="240" rx="11" ry="6"/><ellipse cx="148" cy="240" rx="11" ry="6"/></g>'
 +'<path fill="#4a3b2e" d="M130 76c-12 0-20 9-19 21 0 6-1 9-2 12h42c-1-3-2-6-2-12 1-12-7-21-19-21z"/>'
 +'<circle fill="#d1ac8d" cx="130" cy="96" r="18"/>'
 +'<path fill="#4a3b2e" d="M112 92c0-11 8-18 18-18s18 7 18 18c1-14-8-22-18-22s-19 8-18 22z"/>'
 +'<g fill="#fdf8ec"><ellipse cx="123" cy="97" rx="5" ry="3.6"/><ellipse cx="137" cy="97" rx="5" ry="3.6"/></g>'
 +'<g fill="#3a352b"><circle cx="124" cy="97" r="2.2"/><circle cx="136" cy="97" r="2.2"/></g>'
 +'<path fill="none" stroke="#b3805f" stroke-width="2" stroke-linecap="round" d="M125 106q5 4 10 0"/>');
exhibit('tennis','מחבט וכדור טניס','<ellipse fill="#d0dccf" stroke="#557c92" stroke-width="9" transform="rotate(25 149 117)" cx="149" cy="117" rx="53" ry="74"/><path stroke="#566f7d" stroke-width="13" d="M123 179L74 275"/><path stroke="#9faf9e" stroke-width="2" d="M115 65L161 184M139 49L185 167M94 113L188 80M107 147L201 114"/><circle fill="#b7c86c" cx="202" cy="249" r="25"/>');
exhibit('football','כדורגל','<circle fill="#efe8d6" stroke="#86928a" stroke-width="4" cx="130" cy="162" r="87"/><path fill="#4a6070" d="M130 128L159 149L149 184H111L101 149ZM58 125L83 102L93 120L77 147ZM197 125L176 100L166 118L183 147ZM80 216L104 215L111 240L90 238ZM179 216L154 215L148 240L169 238Z"/>');
exhibit('basketball','כדורסל','<circle fill="#ce8b48" stroke="#665d48" stroke-width="4" cx="130" cy="163" r="86"/><g stroke="#665d48" stroke-width="4" fill="none"><path d="M44 163H216M130 77V249M75 100Q173 162 75 226M185 100Q88 162 185 226"/></g>');
function clue(answer,a,b,hint,explain,aliases=[]){return {city:answer,art:[a,b],hint,explain,aliases,kind:'identity'};}
const newExhibitions = [
{id:'usa',title:'ערים בארה״ב',subtitle:'מסע בין קווי רקיע ואייקונים',icon:'liberty',tone:'blue',subject:'עיר',question:'איזו עיר בארה״ב גיליתם?',levels:[
clue('ניו יורק','liberty','apple','פסל החירות והכינוי התפוח הגדול.','פסל החירות והתפוח הגדול → ניו יורק',['ניו-יורק','New York','New York City']),
clue('לוס אנג׳לס','angel','film','עיר המלאכים, ביתה של הוליווד.','מלאכים וקולנוע → לוס אנג׳לס',['לוס אנגלס','Los Angeles']),
clue('שיקגו','wind','city','הכינוי שלה הוא עיר הרוחות. נמצאת באילינוי.','רוח וקו רקיע → שיקגו',['Chicago']),
clue('סן פרנסיסקו','bridge','tram','גשר שער הזהב וקרוניות הכבל.','גשר תלוי וקרונית → סן פרנסיסקו',['San Francisco']),
clue('לאס וגאס','dice','sand','עיר הבילויים והקזינו במדינת נבדה.','קוביות ומדבר → לאס וגאס',['לאס ווגאס','Las Vegas']),
clue('מיאמי','palm','sea','חופים ודקלים בדרום פלורידה.','דקל וים → מיאמי',['Miami']),
clue('בוסטון','tea','port','חשבו על מסיבת התה המפורסמת של שנת 1773.','תה ונמל → בוסטון',['Boston']),
clue('סיאטל','needle','tea','מגדל מחט החלל, בעיר שבה נוסדה סטארבקס. הספל מסמל משקה חם.','מגדל מחט החלל ותרבות בתי הקפה → סיאטל',['Seattle']),
clue('וושינגטון','capitol','monument','בירת ארצות הברית, ובה הקפיטול ואנדרטת וושינגטון.','הקפיטול והאובליסק → וושינגטון',['וושינגטון די סי','Washington','Washington DC']),
clue('ניו אורלינס','trumpet','mask','ג׳אז וחגיגות מרדי גרא בלואיזיאנה.','חצוצרה ומסכת קרנבל → ניו אורלינס',['New Orleans'])]},
{id:'singers',title:'זמרים ישראלים',subtitle:'השמות שמאחורי הקולות',icon:'microphone',tone:'rose',subject:'אמן',question:'איזה זמר או זמרת גיליתם?',levels:[
clue('אביב גפן','spring','vineyard','עונת הפריחה, והצמח שעליו גדלים ענבים.','אביב + גפן → אביב גפן'),
clue('עומר אדם','wheat','person','אלומת שיבולים נקראת עומר. לצדה דמות אדם.','עומר + אדם → עומר אדם'),
clue('אייל גולן','ram','hill','שם פרטי שנשמע כמו החיה, ושם רמה בצפון: הגולן.','איל ורמת הגולן → אייל גולן',['איל גולן']),
clue('שלמה ארצי','crown','globe','המלך החכם שלמה, ולצדו הארץ.','שלמה המלך והארץ → שלמה ארצי'),
clue('שלום חנוך','dove','prophet','היונה מסמלת שלום. השם השני הוא חנוך, דמות מספר בראשית.','שלום + חנוך → שלום חנוך'),
clue('נטע ברזילי','fresh','iron','צמח שניטע ומתכת ברזל. הזמרת זכתה באירוויזיון ב־2018.','נטע וברזל → נטע ברזילי'),
clue('דנה אינטרנשיונל','musicNameDana','globe','דנה, ומילה לועזית שמשמעותה בינלאומי.','דנה + אינטרנשיונל → דנה אינטרנשיונל',['דנה אינטרנשיונאל']),
clue('ירדנה ארזי','river','cedar','נהר הירדן, ועץ ארז. התאימו לשמה של זמרת.','ירדן וארז → ירדנה ארזי'),
clue('קרן פלס','beam','leveltool','קרן אור וכלי שבודק אם משטח ישר.','קרן + פלס → קרן פלס'),
clue('שרית חדד','microphone','sharp','זמרת ששמה הפרטי שרית. הקצוות מרמזים לשורש חדד.','שירה וקצוות חדים → שרית חדד')]},
{id:'athletes',title:'ספורטאים ישראלים',subtitle:'רגעי שיא ואנשים גדולים',icon:'gold',tone:'green',subject:'ספורטאי',question:'איזה ספורטאי או ספורטאית גיליתם?',levels:[
clue('יעל ארד','judo','year1992','הספורטאית שזכתה במדליה האולימפית הראשונה של ישראל, בברצלונה.','ג׳ודו וברצלונה 1992 → יעל ארד'),
clue('גל פרידמן','windsurf','year2004','הזוכה הישראלי הראשון בזהב אולימפי, בגלישת רוח באתונה.','גלישת רוח ואתונה 2004 → גל פרידמן',['גל פרידמן','גל פרידמן']),
clue('אריק זאבי','judo','bronze','ג׳ודוקא ישראלי שזכה בארד באתונה 2004. שמו המוכר מתחיל באריק.','ג׳ודו ומדליית ארד → אריק זאבי',['אריאל זאבי']),
clue('לינוי אשרם','ribbon','gold','אלופת הקרב־רב בהתעמלות אומנותית במשחקי טוקיו.','סרט התעמלות וזהב → לינוי אשרם'),
clue('ארטיום דולגופיאט','gymfloor','gold','אלוף תרגיל הקרקע במשחקי טוקיו.','התעמלות קרקע וזהב → ארטיום דולגופיאט',['ארטם דולגופיאט']),
clue('שחר פאר','horizon','tennis','שמה הפרטי הוא הזמן שבו השמש עולה. טניסאית ישראלית בולטת.','שחר וטניס → שחר פאר'),
clue('יוסי בניון','football','sand','כדורגלן שגדל בדימונה ושיחק בליברפול ובצ׳לסי.','כדורגל ודימונה → יוסי בניון'),
clue('ערן זהבי','football','gold','כדורגלן ששמו הפרטי ערן, ושם משפחתו מזכיר זהב.','כדורגל וזהב → ערן זהבי'),
clue('עומרי כספי','basketball','silver','כדורסלן ישראלי ששמו מזכיר את המתכת כסף.','כדורסל וכסף → עומרי כספי',['עמרי כספי']),
clue('דני אבדיה','basketball','draft9','כדורסלן ישראלי שנבחר תשיעי בדראפט 2020. שמו הפרטי דני.','כדורסל והבחירה התשיעית → דני אבדיה')]}
];

export {newExhibitions};
