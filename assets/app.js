document.querySelectorAll('nav li.has-sub').forEach(li=>{
  const a=li.querySelector('.link');
  a.addEventListener('click',e=>{e.preventDefault();li.classList.toggle('open');document.querySelectorAll('nav li.has-sub').forEach(o=>{if(o!==li)o.classList.remove('open');});});
  li.addEventListener('mouseenter',()=>li.classList.add('open'));
  li.addEventListener('mouseleave',()=>li.classList.remove('open'));
});
document.addEventListener('click',e=>{if(!e.target.closest('nav'))document.querySelectorAll('nav li.has-sub').forEach(li=>li.classList.remove('open'));});
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();