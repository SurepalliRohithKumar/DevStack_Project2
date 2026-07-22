const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

function updateLength() {
    lengthValue.textContent = lengthSlider.value;
}

function generatePassword() {
    const length = Number(lengthSlider.value);

    const includeUppercase =
        document.getElementById("uppercase").checked;

    const includeLowercase =
        document.getElementById("lowercase").checked;

    const includeNumbers =
        document.getElementById("numbers").checked;

    const includeSymbols =
        document.getElementById("symbols").checked;

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = "";

    if (includeUppercase) {
        characters += uppercase;
    }

    if (includeLowercase) {
        characters += lowercase;
    }

    if (includeNumbers) {
        characters += numbers;
    }

    if (includeSymbols) {
        characters += symbols;
    }

    if (characters.length === 0) {
        passwordInput.value = "";
        message.textContent = "Select at least one option!";
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];
    }

    passwordInput.value = password;
    message.textContent = "Password generated successfully!";
}

function copyPassword() {
    if (passwordInput.value === "") {
        message.textContent = "Generate a password first!";
        return;
    }

    navigator.clipboard.writeText(passwordInput.value);

    message.textContent = "Password copied!";
}
