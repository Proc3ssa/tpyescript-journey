"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const detail = document.querySelector('#detail');
const amount = document.querySelector('#amount');
;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, detail.value, amount.value);
});
