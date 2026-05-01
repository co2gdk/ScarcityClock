const startDate = new Date("2026-05-01T00:00:00");
const targetDate = new Date(startDate);
targetDate.setDate(startDate.getDate() + 90);

const messages = [
    "Limited availability for the right opportunity.",
    "Operational chaos does not fix itself.",
    "Structure creates speed.",
    "The right company gets execution, ownership and control.",
    "Momentum beats waiting.",
    "Complexity is where I create value.",
    "From scattered resources to scalable operations.",
    "Available now. Not forever."
];

let currentMessageIndex = 0;

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24));
    const minutes = Math.max(0, Math.floor((difference / 1000 / 60) % 60));
    const seconds = Math.max(0, Math.floor((difference / 1000) % 60));

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateMessage() {
    const messageElement = document.getElementById("urgency-message");

    messageElement.style.opacity = 0;

    setTimeout(() => {
        messageElement.innerHTML = messages[currentMessageIndex];
        messageElement.style.opacity = 1;

        currentMessageIndex++;

        if (currentMessageIndex >= messages.length) {
            currentMessageIndex = 0;
        }
    }, 300);
}

setInterval(updateCountdown, 1000);
setInterval(updateMessage, 10000);

updateCountdown();
updateMessage();
