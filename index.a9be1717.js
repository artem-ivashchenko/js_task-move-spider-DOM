// const body = document.body;
const e=document.querySelector(".spider"),t=document.querySelector(".wall");t.addEventListener("click",l=>{let o=t.clientTop+t.offsetTop,c=t.clientLeft+t.offsetLeft,i=e.offsetWidth,n=i/2,s=t.clientWidth-i,d=l.clientX-c-n+window.scrollX,f=l.clientY-o-n+window.scrollY;d>s?d=s:d<0&&(d=0),f>s?f=s:f<0&&(f=0),e.style.top=`${f}px`,e.style.left=`${d}px`});//# sourceMappingURL=index.a9be1717.js.map

//# sourceMappingURL=index.a9be1717.js.map
