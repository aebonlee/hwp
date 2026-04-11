function b(t){if(t.rawMarkdown){let n="";return(t.metadata.title||t.metadata.author)&&(n+=`---
`,t.metadata.title&&(n+=`title: ${t.metadata.title}
`),t.metadata.author&&(n+=`author: ${t.metadata.author}
`),n+=`---

`),n+=t.rawMarkdown,n}let e="";(t.metadata.title||t.metadata.author)&&(e+=`---
`,t.metadata.title&&(e+=`title: ${t.metadata.title}
`),t.metadata.author&&(e+=`author: ${t.metadata.author}
`),e+=`---

`);for(const n of t.content)switch(n.type){case"paragraph":n.paragraph&&(e+=w(n.paragraph));break;case"table":n.table&&(e+=x(n.table));break;case"image":n.image&&(e+=p(n.image));break;case"list":n.list&&(e+=$(n.list));break}return e}function w(t){const e=t.text.trim();return e?t.style.headingLevel&&t.style.headingLevel>0&&t.style.headingLevel<=6?`${"#".repeat(t.style.headingLevel)} ${e}

`:e+`

`:""}function x(t){if(!t.cells||t.cells.length===0)return"";if(d(t))return g(t);const e=t.cols,n=t.cells.length,o=[];for(let l=0;l<n;l++)o.push(Array.from({length:e},()=>({row:-1,col:-1})));for(let l=0;l<n;l++)for(let r=0;r<e;r++)if(o[l][r].row===-1){const i=t.cells[l][r],a=Math.max(i.rowSpan||1,1),f=Math.max(i.colSpan||1,1);for(let c=l;c<l+a&&c<n;c++)for(let u=r;u<r+f&&u<e;u++)o[c][u]={row:l,col:r}}let s="";for(let l=0;l<n;l++){s+="|";for(let r=0;r<e;r++){const i=o[l][r];let a="";i.row>=0&&i.col>=0&&(i.row===l&&i.col===r?a=t.cells[l][r].text.replace(/\n/g," "):i.row<l&&i.col===r&&(a="〃")),s+=` ${a} |`}if(s+=`
`,l===0){s+="|";for(let r=0;r<e;r++)s+=" --- |";s+=`
`}}return s+=`
`,s}function d(t){if(!t.cells)return!1;if(t.cols===1&&t.cells.length>=1)for(const e of t.cells)for(const n of e){const o=n.text.trim();if(o.includes("【")&&o.includes("】"))return!0}if(t.cells.length<2||t.cols<2)return!1;for(const e of t.cells)for(const n of e){const o=n.text.trim();if(o.startsWith("[")&&o.endsWith("]"))return!0}return!1}function g(t){if(!t.cells)return"";let e="";if(t.cols===1)for(const s of t.cells)for(const l of s){const r=l.text.trim();if(r.includes("【")&&r.includes("】")){const i=r.split("【");for(const a of i){const f=a.trim();if(!f)continue;const c=f.indexOf("】");if(c===-1){e+=f+`

`;continue}const u=f.slice(0,c),h=f.slice(c+1).trim();e+=`**【${u}】**

`,h&&(e+=h+`

`)}return e}}let n="";for(const s of t.cells){for(const l of s){const r=l.text.trim();if(r.startsWith("[")&&r.endsWith("]")){n=r;break}}if(n)break}n&&(e+=`**${n}**

`);const o=t.cells[t.cells.length-1];for(const s of o){const l=s.text.trim();if(!l)continue;const r=l.split("○");for(let i=0;i<r.length;i++){const a=r[i].trim();a&&(i===0&&!l.startsWith("○")?e+=a+`

`:e+=`- ${a}
`)}e+=`
`}return e}function p(t){const e=t.alt||t.id,n=t.path||t.id;return`![${e}](${n})

`}function $(t){let e="";return e+=m(t.items,t.ordered,0),e+=`
`,e}function m(t,e,n){let o="";const s="  ".repeat(n);for(let l=0;l<t.length;l++){const r=t[l],i=e?`${l+1}. `:"- ";o+=`${s}${i}${r.text}
`,r.children&&r.children.length>0&&(o+=m(r.children,e,n+1))}return o}export{b as irToMarkdown};
