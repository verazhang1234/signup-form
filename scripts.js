experience.addEventListener("input", (event) => {
    let yearsOf = experience.value;
    if (yearsOf > 29) { yearsOf = yearsOf + "+" }
    years.innerHTML = yearsOf;
});

document.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", () => {
        const inputGroup = field.closest(".input-group");
        if (inputGroup) {
            if (!field.validity.valid) {
                inputGroup.classList.add("error");
            } else {
                inputGroup.classList.remove("error");
            }
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
    const fields = page.querySelectorAll("input, select, textarea");
    let valid = true;

    fields.forEach(field => {
        const inputGroup = field.closest(".input-group");
        if (inputGroup) {
            if (!field.validity.valid) {
                inputGroup.classList.add("error");
                valid = false;
            } else {
                inputGroup.classList.remove("error");
            }
        }
    });
    return valid;
}

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const pages = document.querySelectorAll(".form-page");
    let isValid = true;

    pages.forEach(page => {
        const fields = page.querySelectorAll("input, select, textarea");
        fields.forEach(field => {
            const inputGroup = field.closest(".input-group");
            if (inputGroup) {
                if (!field.validity.valid) {
                    inputGroup.classList.add("error");
                    isValid = false;
                } else {
                    inputGroup.classList.remove("error");
                }
            }
        });
    });

    if (isValid) {
        const popup = document.getElementById("success-popup");
        if (popup) {
            popup.style.display = "block"; 
        } else {
            console.error("Error: 'success-popup' element not found.");
        }
    }
});

function closePopup() {
    document.getElementById("success-popup").style.display = "none";
}
