const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 90);

const messages = [
    "Opportunities are closing...",
    "Others are moving faster...",
    "Your competitive window is shrinking...",
    "This is not rehearsal...",
    "Time is your rarest asset...",
    "Last chance to act..."
];

function updateCountdown() {

    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("urgency-message").innerHTML =
        randomMessage;
}

setInterval(updateCountdown, 1000);

updateCountdown();
