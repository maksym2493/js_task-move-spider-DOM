var t=document.querySelector(".wall"),e=t.querySelector(".spider"),i=t.clientHeight-e.clientHeight,l=t.clientWidth-e.clientWidth,c=t.offsetTop+t.clientTop+e.clientHeight/2,n=t.offsetLeft+t.clientLeft+e.clientWidth/2;document.addEventListener("click",function(t){if(t.target.closest(".wall")){var a=t.clientY-c,o=t.clientX-n;a=Math.min(a=Math.max(a,0),i),o=Math.min(o=Math.max(o,0),l),e.style.top=a+"px",e.style.left=o+"px"}});
//# sourceMappingURL=index.3f41d9c6.js.map
