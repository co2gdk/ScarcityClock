const startDate = new Date("2026-05-01T00:00:00");
const targetDate = new Date(startDate);
targetDate.setDate(startDate.getDate() + 90);

const messages = [
    "Available now. Not forever.",
    "Momentum beats waiting.",
    "Complexity is where I create value.",
    "Structure creates speed.",
    "Operational leverage wins.",
    "The market notices operators."
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
    const element = document.getElementById("urgency-message");

    element.style.opacity = 0;

    setTimeout(() => {
        element.innerHTML = messages[currentMessageIndex];
        element.style.opacity = 1;

        currentMessageIndex++;

        if (currentMessageIndex >= messages.length) {
            currentMessageIndex = 0;
        }
    }, 300);
}

function animateCounters() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = Number(counter.getAttribute("data-target"));
        let current = 0;

        const interval = setInterval(() => {
            current += 3;

            if (current >= target) {
                current = target;
                clearInterval(interval);
            }

            counter.innerHTML = current + "+";
        }, 30);
    });
}

window.addEventListener("load", () => {
    updateCountdown();
    updateMessage();
    animateCounters();

    setInterval(updateCountdown, 1000);
    setInterval(updateMessage, 10000);
});
