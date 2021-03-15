let ctx;
let osc;
const input = document.querySelector('.input');
const inputValue = document.querySelector('.input-value');
const onButton = document.querySelector('.on-button');
const offButton = document.querySelector('.off-button');


console.log(onButton, offButton)

//start
inputValue.innerHTML = `${input.value}`;

onButton.addEventListener('click', () => {
    if (ctx || osc) {
        osc.stop();
    }
    ctx = new AudioContext();
    osc = ctx.createOscillator();
    osc.connect(ctx.destination);
    osc.frequency.value = input.value;
    osc.start();
})

offButton.addEventListener('click', () => {
    osc.stop();
})


input.addEventListener('input', (e) => {
    inputValue.innerHTML = `${input.value}`;
    osc.frequency.value = e.target.value;
});
