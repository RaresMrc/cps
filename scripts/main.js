const clickedButton = document.getElementById('clickButton');
const output = document.getElementById('timer');
const clicks = document.getElementById('clicks'); 

let counter = 0;
let timer = 10;
let check = true;

output.textContent = 'Timer: ' + timer + 's';
clicks.textContent = `Clicks per second: ${counter}`;

function reset() {
    counter = 0;
    output.textContent = 'Timer: ' + timer + 's';
    clicks.textContent = `Clicks per second: ` + counter;
    check = true;
}

function startCountdown(time) {
    check = false;

    let interval = setInterval(() => {
        new Promise((res, rej) => {
            time -= 0.1;
            res(time);
        })
        .then((res) => {
            let t = Number.parseFloat(res).toFixed(2);
            output.textContent = 'Timer: ' + t + 's';
            clicks.textContent = 'Clicks per second: ' + Number.parseFloat(counter/(10 - t)).toFixed(2);
        });
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            reset();
        },4000);
    }, 10100);
}

clickedButton.addEventListener('click', () => {
    counter++;
    if (check) startCountdown(timer);
})