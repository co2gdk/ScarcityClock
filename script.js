// Countdown starts from May 1, 2026
const startDate = new Date("2026-05-01T00:00:00");
const targetDate = new Date(startDate);
targetDate.setDate(startDate.getDate() + 90);

const messages = [
    "Only a limited window to rebuild.",
    "Every day is a visible signal.",
    "Momentum beats waiting.",
    "The market notices people who move.",
    "Small steps. Daily proof. No hiding.",
    "Your comeback clock is ticking.",
    "This is where momentum is built.",
    "Opportunities reward the visible."
];

let currentMessageIndex = 0;

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateMessage() {
    document.getElementById("urgency-message").innerHTML =
        messages[currentMessageIndex];

    currentMessageIndex++;

    if (currentMessageIndex >= messages.length) {
        currentMessageIndex = 0;
    }
}

setInterval(updateCountdown, 1000);
setInterval(updateMessage, 10000);

updateCountdown();
updateMessage();
