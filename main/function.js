export function checkPasswordStrength(passw) {
    const hasLetters = /[a-zA-Z]/.test(passw);
    const hasNumbers = /[0-9]/.test(passw);
    const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passw);

    
    if(passw === null || passw === undefined || passw.length < 6) return "weak";

    if ((passw.length < 6 && (hasLetters || hasNumbers)) || passw.length < 6 && (hasLetters && hasNumbers)) {
        return "weak";
    } else if ((passw.length >= 6 && passw.length <= 10) && (hasLetters && hasNumbers)) {
        return "medium";
    } else if (passw.length > 10 && (hasLetters && hasNumbers && hasSpecialChars)) {
        return "strong";
    } else {
        return "invalid";
    }
}