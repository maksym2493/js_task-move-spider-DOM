'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

const topMargin = wall.offsetTop + wall.clientTop + spider.clientHeight / 2;
const leftMargin = wall.offsetLeft + wall.clientLeft + spider.clientWidth / 2;

const topMax = wall.clientHeight - spider.clientHeight;
const leftMax = wall.clientWidth - spider.clientWidth;

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    let y = e.clientY - topMargin;
    let x = e.clientX - leftMargin;

    y = Math.max(y, 0);
    y = Math.min(y, topMax);

    x = Math.max(x, 0);
    x = Math.min(x, leftMax);

    spider.style.top = y + `px`;
    spider.style.left = x + `px`;
  }
});
