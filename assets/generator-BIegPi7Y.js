import{J as $}from"./jszip.min-D_0x6fdx.js";import{c as w,b as d,n as R,d as P}from"./types-dbiTllwl.js";import"./index-OA30jTeR.js";function g(t){const r=[],n=/(\*\*(.+?)\*\*|\*(.+?)\*|([^*]+))/g;let e;for(;(e=n.exec(t))!==null;)e[2]!==void 0?r.push({text:e[2],style:{bold:!0}}):e[3]!==void 0?r.push({text:e[3],style:{italic:!0}}):e[4]!==void 0&&e[4]&&r.push({text:e[4],style:{}});return r.length===0&&t&&r.push({text:t,style:{}}),r}function x(t){const r={version:"1.0",metadata:{},content:[]},n=t.split(`
`);let e=0;if(n[0]==="---"){for(e=1;e<n.length&&n[e]!=="---";){const a=n[e].match(/^(\w+):\s*(.+)$/);if(a){const[,h,i]=a;h==="title"?r.metadata.title=i:h==="author"&&(r.metadata.author=i)}e++}e++}for(;e<n.length;){const a=n[e];if(!a.trim()){e++;continue}const h=a.match(/^(#{1,6})\s+(.+)$/);if(h){const p=h[1].length,o=h[2],c=d(o);c.style.headingLevel=p,c.runs=g(o),r.content.push({type:"paragraph",paragraph:c}),e++;continue}if(a.startsWith("> ")){let p="";for(;e<n.length&&n[e].startsWith("> ");)p&&(p+=`
`),p+=n[e].slice(2),e++;const o=d(p);o.style.isQuote=!0,o.runs=g(p),r.content.push({type:"paragraph",paragraph:o});continue}if(a.startsWith("|")){const p=[];for(;e<n.length&&n[e].startsWith("|");)p.push(n[e]),e++;const o=D(p);o&&r.content.push(o);continue}if(a.match(/^\s*[-*+]\s/)){const p=[];for(;e<n.length&&n[e].match(/^\s*[-*+]\s/);){const c=n[e].match(/^(\s*)[-*+]\s(.+)$/);if(c){const m=Math.floor(c[1].length/2);p.push({text:c[2],level:m})}e++}const o=P(!1);o.items=p,r.content.push({type:"list",list:o});continue}if(a.match(/^\s*\d+\.\s/)){const p=[];for(;e<n.length&&n[e].match(/^\s*\d+\.\s/);){const c=n[e].match(/^(\s*)\d+\.\s(.+)$/);if(c){const m=Math.floor(c[1].length/2);p.push({text:c[2],level:m})}e++}const o=P(!0);o.items=p,r.content.push({type:"list",list:o});continue}const i=a.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);if(i){const p=w(i[2]);p.alt=i[1],p.path=i[2],r.content.push({type:"image",image:p}),e++;continue}let s="";for(;e<n.length&&n[e].trim()&&!n[e].startsWith("#")&&!n[e].startsWith("|")&&!n[e].startsWith("> ")&&!n[e].match(/^\s*[-*+]\s/)&&!n[e].match(/^\s*\d+\.\s/);)s&&(s+=`
`),s+=n[e],e++;if(s.trim()){const p=d(s);p.runs=g(s),r.content.push({type:"paragraph",paragraph:p})}}return r}function D(t){if(t.length<2)return null;const r=t.filter(i=>!i.match(/^\|[\s-:|]+\|$/));if(r.length===0)return null;const n=r.map(i=>i.replace(/^\|/,"").replace(/\|$/,"").split("|").map(s=>s.trim())),e=n.length,a=Math.max(...n.map(i=>i.length)),h=R(e,a);h.hasHeader=!0;for(let i=0;i<e;i++)for(let s=0;s<a;s++)h.cells[i][s].text=n[i][s]||"",i===0&&(h.cells[i][s].style.isHeader=!0);return{type:"table",table:h}}let I=0;function l(){return++I}function y(t,r){I=0;let n="";r?.coverPage&&(n+=T(r.coverPage));for(const a of t.content)n+=v(a);return`<?xml version="1.0" encoding="UTF-8"?>
<hs:sec xmlns:hs="http://www.hancom.co.kr/hwpml/2011/section"
  xmlns:hp="http://www.hancom.co.kr/hwpml/2011/paragraph"
  xmlns:ht="http://www.hancom.co.kr/hwpml/2011/table"
  xmlns:hd="http://www.hancom.co.kr/hwpml/2011/drawing">
${b(r)}
${n}
</hs:sec>`}function b(t){let o="";return t?.pageNumbers!==!1&&(o=`
    <hs:footerPr>
      <hp:p paraId="${l()}" paraPrIDRef="0">
        <hp:run charPrIDRef="0">
          <hp:t>- </hp:t>
        </hp:run>
        <hp:run charPrIDRef="0">
          <hp:t> -</hp:t>
        </hp:run>
      </hp:p>
    </hs:footerPr>`),`  <hs:secPr textDirection="HORIZONTAL" spaceColumns="0">
    <hs:pagePr landscape="false" width="59528" height="84188">
      <hs:margin header="1417" footer="1417"
        left="4252" right="4252" top="5669" bottom="4252"
        gutter="0"/>
    </hs:pagePr>${o}
  </hs:secPr>`}function T(t){let r="";for(let a=0;a<8;a++){const h=l();r+=`  <hp:p paraId="${h}" paraPrIDRef="0"><hp:run charPrIDRef="0"><hp:t> </hp:t></hp:run></hp:p>
`}const n=l();r+=`  <hp:p paraId="${n}" paraPrIDRef="0" outlineLevel="1">
    <hp:run charPrIDRef="1">
      <hp:t>${f(t.title)}</hp:t>
    </hp:run>
  </hp:p>
`;for(let a=0;a<4;a++){const h=l();r+=`  <hp:p paraId="${h}" paraPrIDRef="0"><hp:run charPrIDRef="0"><hp:t> </hp:t></hp:run></hp:p>
`}if(t.organization){const a=l();r+=`  <hp:p paraId="${a}" paraPrIDRef="0">
    <hp:run charPrIDRef="2">
      <hp:t>${f(t.organization)}</hp:t>
    </hp:run>
  </hp:p>
`}for(let a=0;a<2;a++){const h=l();r+=`  <hp:p paraId="${h}" paraPrIDRef="0"><hp:run charPrIDRef="0"><hp:t> </hp:t></hp:run></hp:p>
`}if(t.date){const a=l();r+=`  <hp:p paraId="${a}" paraPrIDRef="0">
    <hp:run charPrIDRef="0">
      <hp:t>${f(t.date)}</hp:t>
    </hp:run>
  </hp:p>
`}if(t.applicant){const a=l();r+=`  <hp:p paraId="${a}" paraPrIDRef="0">
    <hp:run charPrIDRef="0">
      <hp:t>${f(t.applicant)}</hp:t>
    </hp:run>
  </hp:p>
`}const e=l();return r+=`  <hp:p paraId="${e}" paraPrIDRef="0">
    <hp:run charPrIDRef="0">
      <hp:br type="page"/>
    </hp:run>
  </hp:p>
`,r}function v(t){switch(t.type){case"paragraph":return t.paragraph?S(t.paragraph):"";case"table":return t.table?H(t.table):"";case"list":return t.list?X(t.list):"";case"image":return t.image?F(t.image):"";default:return""}}function C(t){switch(t){case 1:return"1";case 2:return"2";case 3:return"3";default:return"3"}}function L(t,r){return t.length>0?t.map(n=>`    <hp:run${n.style.bold?' charPrIDRef="4"':' charPrIDRef="0"'}>
      <hp:t>${f(n.text)}</hp:t>
    </hp:run>
`).join(""):`    <hp:run charPrIDRef="0">
      <hp:t>${f(r)}</hp:t>
    </hp:run>
`}function S(t){const r=l(),n=t.style.headingLevel?` outlineLevel="${t.style.headingLevel}"`:"",e=t.style.headingLevel?C(t.style.headingLevel):null;if(t.style.isQuote)return`  <hp:p paraId="${r}" paraPrIDRef="0">
    <hp:run charPrIDRef="0">
      <hp:t>${f("│ "+t.text)}</hp:t>
    </hp:run>
  </hp:p>
`;if(e)return`  <hp:p paraId="${r}" paraPrIDRef="0"${n}>
    <hp:run charPrIDRef="${e}">
      <hp:t>${f(t.text)}</hp:t>
    </hp:run>
  </hp:p>
`;let a=`  <hp:p paraId="${r}" paraPrIDRef="0"${n}>
`;return a+=L(t.runs,t.text),a+=`  </hp:p>
`,a}function H(t){if(!t.cells||t.cells.length===0)return"";let r=`  <ht:tbl>
`;for(let n=0;n<t.cells.length;n++){r+=`    <ht:tr>
`;for(let e=0;e<t.cells[n].length;e++){const a=t.cells[n][e],h=[];a.colSpan>1&&h.push(`gridSpan="${a.colSpan}"`),a.rowSpan>1&&h.push(`rowSpan="${a.rowSpan}"`);const s=n===0&&t.hasHeader?"4":"0",p=l();r+=`      <ht:tc${h.length>0?" "+h.join(" "):""}>
`,r+=`        <hp:p paraId="${p}" paraPrIDRef="0">
`,r+=`          <hp:run charPrIDRef="${s}">
`,r+=`            <hp:t>${f(a.text)}</hp:t>
`,r+=`          </hp:run>
`,r+=`        </hp:p>
`,r+=`      </ht:tc>
`}r+=`    </ht:tr>
`}return r+=`  </ht:tbl>
`,r}function X(t){let r="";const n=t.ordered?"2":"1";for(let e=0;e<t.items.length;e++){const a=t.items[e],h=a.level||0,i=l();r+=`  <hp:p paraId="${i}" paraPrIDRef="0" numId="${n}" ilvl="${h}">
`,r+=`    <hp:run charPrIDRef="0">
`,r+=`      <hp:t>${f(a.text)}</hp:t>
`,r+=`    </hp:run>
`,r+=`  </hp:p>
`}return r}function F(t){return`  <hp:p paraId="${l()}" paraPrIDRef="0">
    <hp:run charPrIDRef="0">
      <hp:t>[Image: ${f(t.alt||t.id)}]</hp:t>
    </hp:run>
  </hp:p>
`}function f(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function O(t){return`<?xml version="1.0" encoding="UTF-8"?>
<opf:package xmlns:opf="http://www.idpf.org/2007/opf/" version="1.0">
  <opf:metadata>
    <opf:title>${u(t.title||"")}</opf:title>
    <opf:creator>${u(t.author||"")}</opf:creator>
    <opf:subject>${u(t.subject||"")}</opf:subject>
    <opf:description>${u(t.description||"")}</opf:description>
    <opf:date>${new Date().toISOString().split("T")[0]}</opf:date>
  </opf:metadata>
  <opf:manifest>
    <opf:item id="header" href="Contents/header.xml" media-type="application/xml"/>
    <opf:item id="section0" href="Contents/section0.xml" media-type="application/xml"/>
  </opf:manifest>
  <opf:spine>
    <opf:itemref idref="section0"/>
  </opf:spine>
</opf:package>`}function u(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}async function k(t,r,n){const e=x(t);r&&(e.metadata.title=r);const a={pageNumbers:!0,...n},h=new $;return h.file("mimetype","application/hwp+zip",{compression:"STORE"}),h.file("META-INF/container.xml",W()),h.file("Contents/content.hpf",O(e.metadata)),h.file("Contents/header.xml",A()),h.file("Contents/section0.xml",y(e,a)),h.generateAsync({type:"blob",mimeType:"application/hwp+zip",compression:"DEFLATE",compressionOptions:{level:6}})}function W(){return`<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0">
  <rootfiles>
    <rootfile full-path="Contents/content.hpf" media-type="application/hwpml-package+xml"/>
  </rootfiles>
</container>`}function A(){return`<?xml version="1.0" encoding="UTF-8"?>
<hh:head xmlns:hh="http://www.hancom.co.kr/hwpml/2011/head"
  version="1.1" secCnt="1">
  <hh:beginNum page="1" footnote="1" endnote="1" figure="1" table="1" equation="1"/>
  <hh:refList>
    <hh:fontfaces itemCnt="2">
      <hh:fontface lang="HANGUL" fontCnt="1">
        <hh:font id="0" face="함초롬돋움" type="TTF"/>
      </hh:fontface>
      <hh:fontface lang="LATIN" fontCnt="1">
        <hh:font id="0" face="함초롬돋움" type="TTF"/>
      </hh:fontface>
    </hh:fontfaces>
    <hh:charProperties itemCnt="5">
      <hh:charPr id="0" height="1000" bold="false" italic="false">
        <hh:fontRef hangul="0" latin="0"/>
      </hh:charPr>
      <hh:charPr id="1" height="1600" bold="true" italic="false">
        <hh:fontRef hangul="0" latin="0"/>
      </hh:charPr>
      <hh:charPr id="2" height="1300" bold="true" italic="false">
        <hh:fontRef hangul="0" latin="0"/>
      </hh:charPr>
      <hh:charPr id="3" height="1100" bold="true" italic="false">
        <hh:fontRef hangul="0" latin="0"/>
      </hh:charPr>
      <hh:charPr id="4" height="1000" bold="true" italic="false">
        <hh:fontRef hangul="0" latin="0"/>
      </hh:charPr>
    </hh:charProperties>
    <hh:paraProperties itemCnt="1">
      <hh:paraPr id="0" align="JUSTIFY">
        <hh:lineSpacing type="PERCENT" value="160"/>
      </hh:paraPr>
    </hh:paraProperties>
  </hh:refList>
</hh:head>`}export{k as generateHwpx};
