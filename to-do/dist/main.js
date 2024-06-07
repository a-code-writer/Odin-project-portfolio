(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);let t=[],n=[],l=document.getElementById("projectsTab"),d=document.getElementById("add-task"),i=document.createElement("input");i.setAttribute("placeholder","Project Name");let o=document.createElement("button");o.setAttribute("type","submit"),o.textContent="Add";let c=document.createElement("button");c.setAttribute("type","button"),c.textContent="Cancel";let r=document.createElement("form");r.appendChild(i),r.appendChild(o),r.appendChild(c),document.getElementById("add-btn").addEventListener("click",(()=>{document.getElementById("content").appendChild(r),(0,e.createToDo)()})),c.addEventListener("click",(()=>{r.remove()}));let a=document.createElement("input");a.setAttribute("placeholder","Task Name");let m=document.createElement("button");m.setAttribute("type","submit"),m.textContent="Submit Task";let p=document.createElement("button");p.textContent="Cancel",p.addEventListener("click",(()=>{y.remove()}));let u=document.createElement("input");u.setAttribute("type","checkbox"),u.setAttribute("id","priority-check");let s=document.createElement("label");s.setAttribute("for","priority-check"),s.textContent="Is this a priority task?";let E=document.createElement("input");E.setAttribute("type","date");let b=document.createElement("label");b.textContent="When is this due?";let C=document.createElement("select"),h=document.createElement("label");h.textContent="Does this belong in a project?";let y=document.createElement("form");y.appendChild(a),y.appendChild(u),y.appendChild(s),y.appendChild(E),y.appendChild(b),y.appendChild(C),y.appendChild(h),y.appendChild(m),y.appendChild(p),d.addEventListener("click",(()=>{document.getElementById("content").appendChild(y)})),r.addEventListener("submit",(e=>{e.preventDefault(),t.push(i.value),l.innerHTML="";for(let e=0;e<t.length;e++){let d=document.createElement("li");d.innerText=t[e],d.setAttribute("index",e),d.addEventListener("click",(()=>{console.log("step"),document.getElementById("content").innerHTML="";for(let t=0;t<n.length;t++)(d.innerText=n[t].projParent)&&(console.log("step1"),document.getElementById("content").appendChild(document.querySelector(`li[code="${e}"]`)))}));let i=document.createElement("img");i.setAttribute("src","../3-dots.png"),i.setAttribute("index",e),i.addEventListener("click",(()=>{let n=document.querySelector(`li[index="${e}"]`);if(!n.nextElementSibling||"DIV"!==n.nextElementSibling.tagName){let o=document.createElement("div");o.setAttribute("index",e);let c=document.createElement("button");c.innerText="Edit",c.addEventListener("click",(()=>{let c=document.createElement("form"),r=document.createElement("button"),a=document.createElement("button");r.textContent="Update",r.setAttribute("type","submit"),a.textContent="Cancel",a.addEventListener("click",(()=>{c.remove()}));let m=document.createElement("input");m.setAttribute("placeholder","Updated name"),c.appendChild(r),c.appendChild(a),c.appendChild(m),c.addEventListener("submit",(l=>{l.preventDefault(),t[e]=m.value,n.textContent=m.value,d.appendChild(i)})),o.remove(),l.insertBefore(c,n.nextElementSibling)}));let r=document.createElement("button");r.innerText="Delete",r.addEventListener("click",(()=>{t.splice(e),document.querySelector(`li[index="${e}"]`).remove(),document.querySelector(`div[index="${e}"]`).remove()}));let a=document.createElement("button");a.innerText="Cancel",a.addEventListener("click",(()=>{document.querySelector(`div[index="${e}"]`).remove()})),o.appendChild(c),o.appendChild(r),o.appendChild(a),l.insertBefore(o,n.nextSibling)}})),d.appendChild(i),l.appendChild(d)}C.innerHTML="<option></option>",t.forEach((e=>{const t=document.createElement("option");t.text=e,t.value=e,C.appendChild(t)})),r.remove()})),y.addEventListener("submit",(e=>{e.preventDefault();const l={name:a.value,dueDate:E.value,priority:u.checked,projParent:C.value};n.push(l),document.getElementById("content").innerHTML="";for(let e=0;e<n.length;e++){let l=document.createElement("li");l.setAttribute("code",e);let d=document.createElement("div");d.setAttribute("style","display: flex");let i=document.createElement("div");i.setAttribute("style","display: flex; align-items: center");let o=document.createElement("input");o.setAttribute("type","checkbox");let c=document.createElement("p");c.textContent=n[e].name;let r=document.createElement("p");r.textContent=n[e].dueDate;let a="border: 5px solid";1==n[e].priority?a+=" red;":a+=" black;";let m=document.createElement("img");m.setAttribute("src","../3-dots.png"),m.setAttribute("style","max-height: 20px; max-width: 20px"),m.setAttribute("index",e),m.addEventListener("click",(()=>{if(!l.nextElementSibling||"FORM"!==l.nextElementSibling.tagName&&"DIV"!==l.nextElementSibling.tagName){let d=document.createElement("div");d.setAttribute("code",e),d.setAttribute("style","display: flex; justify-content: end;");let i=document.createElement("button");i.textContent="Edit",i.addEventListener("click",(()=>{if(!l.nextElementSibling||"FORM"!==l.nextElementSibling.tagName){let d=document.createElement("form"),i=document.createElement("input");i.setAttribute("placeholder","Set New Task Name Here");let o=document.createElement("select");o.textContent="Is this part of a project?",o.innerHTML="<option></option>",t.forEach((e=>{const t=document.createElement("option");t.text=e,t.value=e,o.appendChild(t)}));let a=document.createElement("select");a.innerHTML="<option>Priority</option> <option>Not a Priority</option>";let m=document.createElement("input");m.setAttribute("type","date");let p=document.createElement("button");p.textContent="Submit",p.setAttribute("type","submit");let u=document.createElement("button");u.textContent="Cancel",u.addEventListener("click",(()=>{d.remove()})),d.appendChild(i),d.appendChild(m),d.appendChild(a),d.appendChild(o),d.appendChild(p),d.appendChild(u),d.addEventListener("submit",(t=>{t.preventDefault(),n[e].name=i.value,n[e].dueDate=m.value,"Not a Priority"==a.value?n[e].priority=!1:n[e].priority=!0,n[e].projParent=o.value,r.textContent=n[e].dueDate,c.textContent=n[e].name;let p="border: 5px solid";1==n[e].priority?p+=" red;":p+=" black;",l.setAttribute("style",`${p}`),d.remove()})),document.getElementById("content").insertBefore(d,l.nextElementSibling)}}));let o=document.createElement("button");o.textContent="Delete",o.addEventListener("click",(()=>{n.splice(e,1),document.querySelector(`li[code="${e}"]`).remove(),document.querySelector(`div[code="${e}"]`).remove()}));let a=document.createElement("button");a.textContent="Cancel",a.addEventListener("click",(()=>{d.remove()})),d.appendChild(i),d.appendChild(o),d.appendChild(a),document.getElementById("content").insertBefore(d,l.nextElementSibling)}})),d.appendChild(o),d.appendChild(c),i.appendChild(r),i.appendChild(m),l.appendChild(d),l.appendChild(i),l.setAttribute("style",` display: flex; justify-content: space-between; ${a} `),document.getElementById("content").appendChild(l)}y.remove()})),document.getElementById("todayTab").addEventListener("click",(()=>{document.getElementById("content").innerHTML="";const e=new Date;for(let t=0;t<=n.length;t++){const l=new Date(n[t].Date);if(Math.abs(e.getTime()-l.getTime())<=864e5){let e=document.createElement("li");e.setAttribute("code",t);let l=document.createElement("div");l.setAttribute("style","display: flex");let d=document.createElement("div");d.setAttribute("style","display: flex; align-items: center");let i=document.createElement("input");i.setAttribute("type","checkbox");let o=document.createElement("p");o.textContent=n[t].name;let c=document.createElement("p");c.textContent=n[t].dueDate;let r="border: 5px solid";1==n[t].priority?r+=" red;":r+=" black;",l.appendChild(i),l.appendChild(o),d.appendChild(c),d.appendChild(toDoMenu),e.appendChild(l),e.appendChild(d),e.setAttribute("style",` display: flex; justify-content: space-between; ${r} `),document.getElementById("content").appendChild(e)}}}))})();