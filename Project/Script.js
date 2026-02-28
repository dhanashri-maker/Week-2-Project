let count = 0;

const countSpan = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const clearBtn = document.getElementById("clearBtn");
const errorMsg = document.getElementById("errorMsg");

incrementBtn.addEventListener("click", function () {
    count++;
    countSpan.innerHTML = count;
    errorMsg.style.display = "none";

    if (count > 0) {
        clearBtn.style.display = "inline-block";
    }
});

decrementBtn.addEventListener("click", function () {
    if (count === 0) {
        errorMsg.style.display = "block";
        return;
    }

    count--;
    countSpan.innerHTML = count;
    errorMsg.style.display = "none";

    if (count === 0) {
        clearBtn.style.display = "none";
    }
});

clearBtn.addEventListener("click", function () {
    count = 0;
    countSpan.innerHTML = count;
    clearBtn.style.display = "none";
    errorMsg.style.display = "none";
});