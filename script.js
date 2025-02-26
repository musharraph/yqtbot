document.getElementById("bgVideo").playbackRate = 0.5;

document.getElementById("passwordBtn").addEventListener("click", function () {
    let password = document.getElementById("passwordInput").value;
    if (password === "1234") {
        document.getElementById("passwordScreen").style.display = "none";
    } else {
        alert("Incorrect password!");
    }
});

document.getElementById("getSignal").addEventListener("click", function () {
    let button = document.getElementById("getSignal");
    let timerDisplay = document.getElementById("timer");
    let signalOutput = document.getElementById("signalOutput");

    button.disabled = true;
    button.classList.add("disabled");
    timerDisplay.innerHTML = "Analyzing the Market...";
    
    let delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
    
    setTimeout(() => {
        let signal = Math.random() < 0.5 ? "BUY" : "SELL";
        signalOutput.innerHTML = signal;
        signalOutput.style.opacity = "1";

        let selectedTime = parseInt(document.getElementById("timeSelect").value);
        let remainingTime = selectedTime;

        let interval = setInterval(() => {
            timerDisplay.innerHTML = `Next Signal in: ${remainingTime}s`;
            remainingTime--;

            if (remainingTime < 0) {
                clearInterval(interval);
                button.disabled = false;
                button.classList.remove("disabled");
                timerDisplay.innerHTML = "";
            }
        }, 1000);
    }, delay);
});
