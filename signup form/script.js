experience.addEventListener("input", (event) => {
    let yearsOf = experience.value;
    if (yearsOf > 29) { yearsOf = yearsOf + "+" }
    years.innerHTML = yearsOf;
});

document.querySelectorAll("input, select").forEach((field) => {
    field.addEventListener("input", (event) => {
        const inputGroup = field.closest(".input-group");

        if (!field.validity.valid) {
            inputGroup.classList.add("error");
        } else {
            inputGroup.classList.remove("error");
        }
    });
});

function nextPage(pageNum) {
    if (validatePage(pageNum - 1)) {
        document.querySelector(`#page${pageNum - 1}`).style.display = "none";
        document.querySelector(`#page${pageNum}`).style.display = "block";
    }
}

function prevPage(pageNum) {
    document.querySelector(`#page${pageNum + 1}`).style.display = "none";
    document.querySelector(`#page${pageNum}`).style.display = "block";
}

function validatePage(pageNum) {
    const page = document.querySelector(`#page${pageNum}`);
    const fields = page.querySelectorAll("input, select");
    let valid = true;

    fields.forEach(field => {
        const inputGroup = field.closest(".input-group");
        if (!field.validity.valid) {
            inputGroup.classList.add("error");
            valid = false;
        } else {
            inputGroup.classList.remove("error");
        }
    });
    return valid;
}

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const allValid = Array.from({ length: 3 }, (_, i) => validatePage(i + 1)).every(Boolean);

    if (allValid) {
        document.getElementById("success-popup").classList.add("show");
        setTimeout(() => {
            document.getElementById("success-popup").classList.remove("show");
        }, 3000);
    }
});
