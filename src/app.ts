// const anchor = document.querySelector('a')!;

// console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;



const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const detail = document.querySelector('#detail') as HTMLInputElement; 
const amount = document.querySelector('#amount') as HTMLInputElement;;


form.addEventListener('submit', (e:Event)=>{

    e.preventDefault();

    console.log(
        type.value,
        tofrom.value, 
        detail.value,
        amount.value
    )
})