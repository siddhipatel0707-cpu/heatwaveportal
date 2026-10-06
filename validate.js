function validateObserverForm(event) {
    let isValid = true;

    // Retrieve input values
    const nameInput = document.getElementById("observer-name");
    const stationInput = document.getElementById("aws-station-id");

    const nameError = document.getElementById("name-error");
    const stationError = document.getElementById("station-error");

    // Reset previous error messages
    nameError.textContent = "";
    stationError.textContent = "";
    nameInput.style.borderColor = "";
    stationInput.style.borderColor = "";

    const nameValue = nameInput.value.trim();
    const stationValue = stationInput.value.trim();

    // 1. Validate Observer Name
    // Rule: Alphabets and spaces only, at least 3 characters, not blank
    const nameRegex = /^[A-Za-z ]{3,}$/;
    if (nameValue === "") {
        nameError.textContent = "Observer Name cannot be blank.";
        nameInput.style.borderColor = "#e53e3e";
        isValid = false;
    } else if (!nameRegex.test(nameValue)) {
        nameError.textContent = "Name must contain only alphabets and spaces (minimum 3 characters).";
        nameInput.style.borderColor = "#e53e3e";
        isValid = false;
    }

    // 2. Validate AWS Station ID
    // Rule: Format like AWS001 (AWS followed by at least 3 digits), not blank
    const stationRegex = /^AWS\d{3,}$/i;
    if (stationValue === "") {
        stationError.textContent = "AWS Station ID cannot be blank.";
        stationInput.style.borderColor = "#e53e3e";
        isValid = false;
    } else if (!stationRegex.test(stationValue)) {
        stationError.textContent = "Invalid Station ID. Format must match 'AWS001' (AWS followed by digits).";
        stationInput.style.borderColor = "#e53e3e";
        isValid = false;
    }

    // Prevent submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }

    return isValid;
}

// Attach listener once the DOM loads
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("heatwave-monitoring-form");
    if (form) {
        form.addEventListener("submit", validateObserverForm);
    }
});