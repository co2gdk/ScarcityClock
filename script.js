const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 90);

const messages = [
    "Only 90 days to rebuild the next version of you.",
    "Every day you wait, someone else gets sharper.",
    "Your future does not need permission.",
    "This is where momentum is built.",
    "Opportunities reward the visible.",
    "Small steps. Daily proof. No hiding.",
    "The market notices people who move.",
    "Your comeback clock is ticking."
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
