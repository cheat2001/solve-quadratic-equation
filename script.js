const a=document.querySelector('.a');
const b=document.querySelector('.b');
const c=document.querySelector('.c');
const btn=document.querySelector('.btn');
const x1=document.querySelector('.x1');
const x2=document.querySelector('.x2');
const geta=document.querySelector('.geta');
const getb=document.querySelector('.getb');
const getc=document.querySelector('.getc');
btn.addEventListener('click',funclick);

function funclick(){
let aa=parseFloat(a.value);
let bb=parseFloat(b.value);
let cc=parseFloat(c.value);
let data=(bb*bb)-(4*aa*cc);
if(data<0){
alert("ដោយសារDeta តូចជាងសូន្យគឺសមីការគ្មានឫសទេរឺមានឫសជាចំនួនកំផ្លិច....");
}
else{
let y1=(-bb+Math.sqrt(data))/(2*aa);
let y2=(-bb-(Math.sqrt(data)))/(2*aa);
x1.value=y1.toFixed(2);
x2.value=y2.toFixed(2);
geta.innerHTML=aa;
getb.innerHTML=bb;
getc.innerHTML=cc;
if(a.value.length==0){
  window.alert("សូមបញ្ចូលតម្លៃ A...");
}
if(b.value.length==0){
  window.alert("សូមបញ្ចូលតម្លៃ B...");
}
if(c.value.length==0){
  window.alert("សូមបញ្ចូលតម្លៃ C...");
}
}
}
