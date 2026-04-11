import{J as x}from"./jszip.min-CF_QwUG1.js";import{c as w,b as u,n as y,d as g}from"./types-dbiTllwl.js";function $(e){const a={version:"1.0",metadata:{},content:[]},n=e.split(`
`);let t=0;if(n[0]==="---"){for(t=1;t<n.length&&n[t]!=="---";){const o=n[t].match(/^(\w+):\s*(.+)$/);if(o){const[,s,i]=o;s==="title"?a.metadata.title=i:s==="author"&&(a.metadata.author=i)}t++}t++}for(;t<n.length;){const o=n[t];if(!o.trim()){t++;continue}const s=o.match(/^(#{1,6})\s+(.+)$/);if(s){const p=s[1].length,r=s[2],c=u(r);c.style.headingLevel=p,a.content.push({type:"paragraph",paragraph:c}),t++;continue}if(o.startsWith("|")){const p=[];for(;t<n.length&&n[t].startsWith("|");)p.push(n[t]),t++;const r=T(p);r&&a.content.push(r);continue}if(o.match(/^\s*[-*+]\s/)){const p=[];for(;t<n.length&&n[t].match(/^\s*[-*+]\s/);){const c=n[t].match(/^(\s*)[-*+]\s(.+)$/);if(c){const m=Math.floor(c[1].length/2);p.push({text:c[2],level:m})}t++}const r=g(!1);r.items=p,a.content.push({type:"list",list:r});continue}if(o.match(/^\s*\d+\.\s/)){const p=[];for(;t<n.length&&n[t].match(/^\s*\d+\.\s/);){const c=n[t].match(/^(\s*)\d+\.\s(.+)$/);if(c){const m=Math.floor(c[1].length/2);p.push({text:c[2],level:m})}t++}const r=g(!0);r.items=p,a.content.push({type:"list",list:r});continue}const i=o.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);if(i){const p=w(i[2]);p.alt=i[1],p.path=i[2],a.content.push({type:"image",image:p}),t++;continue}let l="";for(;t<n.length&&n[t].trim()&&!n[t].startsWith("#")&&!n[t].startsWith("|")&&!n[t].match(/^\s*[-*+]\s/)&&!n[t].match(/^\s*\d+\.\s/);)l&&(l+=`
`),l+=n[t],t++;l.trim()&&a.content.push({type:"paragraph",paragraph:u(l)})}return a}function T(e){if(e.length<2)return null;const a=e.filter(i=>!i.match(/^\|[\s-:|]+\|$/));if(a.length===0)return null;const n=a.map(i=>i.replace(/^\|/,"").replace(/\|$/,"").split("|").map(l=>l.trim())),t=n.length,o=Math.max(...n.map(i=>i.length)),s=y(t,o);s.hasHeader=!0;for(let i=0;i<t;i++)for(let l=0;l<o;l++)s.cells[i][l].text=n[i][l]||"",i===0&&(s.cells[i][l].style.isHeader=!0);return{type:"table",table:s}}function b(e){let a="";for(const n of e.content)a+=v(n);return`<?xml version="1.0" encoding="UTF-8"?>
<hs:sec xmlns:hs="urn:hancom:hwp:section"
  xmlns:hp="urn:hancom:hwp:paragraph">
${a}
</hs:sec>`}function v(e){switch(e.type){case"paragraph":return e.paragraph?d(e.paragraph):"";case"table":return e.table?S(e.table):"";case"list":return e.list?X(e.list):"";case"image":return e.image?H(e.image):"";default:return""}}function d(e){const a=f(e.text);return`  <hp:p${e.style.headingLevel?` styleIDRef="heading${e.style.headingLevel}"`:""}>
    <hp:run>
      <hp:t>${a}</hp:t>
    </hp:run>
  </hp:p>
`}function S(e){if(!e.cells||e.cells.length===0)return"";let a=`  <hp:tbl>
`;for(let n=0;n<e.cells.length;n++){a+=`    <hp:tr>
`;for(let t=0;t<e.cells[n].length;t++){const o=e.cells[n][t],s=[];o.colSpan>1&&s.push(`colSpan="${o.colSpan}"`),o.rowSpan>1&&s.push(`rowSpan="${o.rowSpan}"`);const i=s.length>0?` ${s.join(" ")}`:"";a+=`      <hp:tc>
`,s.length>0&&(a+=`        <hp:cellSpan${i}/>
`),a+=`        <hp:p>
`,a+=`          <hp:run>
`,a+=`            <hp:t>${f(o.text)}</hp:t>
`,a+=`          </hp:run>
`,a+=`        </hp:p>
`,a+=`      </hp:tc>
`}a+=`    </hp:tr>
`}return a+=`  </hp:tbl>
`,a}function X(e){let a="";for(let n=0;n<e.items.length;n++){const t=e.items[n],o=e.ordered?`${n+1}. `:"- ",s="  ".repeat(t.level||0);a+=d({text:`${s}${o}${t.text}`,style:{}})}return a}function H(e){return`  <hp:p>
    <hp:run>
      <hp:t>[Image: ${f(e.alt||e.id)}]</hp:t>
    </hp:run>
  </hp:p>
`}function f(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function M(e){return`<?xml version="1.0" encoding="UTF-8"?>
<opf:package xmlns:opf="http://www.idpf.org/2007/opf" version="1.0">
  <opf:metadata>
    <opf:title>${h(e.title||"")}</opf:title>
    <opf:creator>${h(e.author||"")}</opf:creator>
    <opf:subject>${h(e.subject||"")}</opf:subject>
    <opf:description>${h(e.description||"")}</opf:description>
    <opf:date>${new Date().toISOString().split("T")[0]}</opf:date>
  </opf:metadata>
  <opf:manifest>
    <opf:item id="header" href="header.xml" media-type="application/xml"/>
    <opf:item id="section0" href="section0.xml" media-type="application/xml"/>
  </opf:manifest>
  <opf:spine>
    <opf:itemref idref="section0"/>
  </opf:spine>
</opf:package>`}function h(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}async function F(e,a){const n=$(e);a&&(n.metadata.title=a);const t=new x;return t.file("mimetype","application/hwp+zip",{compression:"STORE"}),t.file("META-INF/container.xml",C()),t.file("Contents/content.hpf",M(n.metadata)),t.file("Contents/header.xml",L()),t.file("Contents/section0.xml",b(n)),t.generateAsync({type:"blob",mimeType:"application/hwp+zip",compression:"DEFLATE",compressionOptions:{level:6}})}function C(){return`<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0">
  <rootfiles>
    <rootfile full-path="Contents/content.hpf" media-type="application/hwpml-package+xml"/>
  </rootfiles>
</container>`}function L(){return`<?xml version="1.0" encoding="UTF-8"?>
<ha:HWPDocumentHeaderType xmlns:ha="urn:hancom:hwp:header"
  version="1.1" secCnt="1">
</ha:HWPDocumentHeaderType>`}export{F as generateHwpx};
