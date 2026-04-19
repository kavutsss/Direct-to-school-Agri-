function isInputValid(input) {
    const trimmedInput = input.trim();
    if (trimmedInput === "") {
        alert ("City name cannot be empty. Please enter a valid city name.");
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(trimmedInput)) {
        alert ("City name can only contain letters and spaces. Please enter a valid city name.");
        return false;
    }
    return true;
}