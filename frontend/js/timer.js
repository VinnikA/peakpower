export function timer() {

  const targetDate = new Date("May 23, 2024 23:59:59").getTime();

    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        if (distance < 0) {
            clearInterval(timerInterval);
            document.querySelector('.timer__countdown').innerHTML = "Countdown expired!";
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const d = days < 10 ? `0${days}` : `${days}`
        const h = hours < 10 ? `0${hours}` : `${hours}`
        const m = minutes < 10 ? `0${minutes}` : `${minutes}`
        const s = seconds < 10 ? `0${seconds}` : `${seconds}`

        document.querySelector('.timer__countdown').innerHTML = `
            ${d}<span class="timer__days">days</span> ${h} : ${m} : ${s}
        `;
    }, 1000);
}