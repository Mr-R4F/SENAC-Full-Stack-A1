export function checkPasswordStrength(passw) {
    const hasLetters = /[a-zA-Z]/.test(passw);
    const hasNumbers = /[0-9]/.test(passw);
    const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passw);

    const conditions = [
        { check: () => passw === null || passw === undefined || passw === "", result: "invalid" },
        { check: () => passw.length < 6, result: "weak" },

        { check: () => (passw.length >= 6 && passw.length <= 10) && (hasLetters && hasNumbers), result: "medium" },
        { check: () => (passw.length >= 6 && passw.length <= 10) && (hasLetters || hasNumbers), result: "weak" },

        { check: () => (passw.length < 6 && (hasLetters || hasNumbers)) || (passw.length < 6 && (hasLetters && hasNumbers)), result: "weak" },

        { check: () => passw.length > 10 && (hasLetters && hasNumbers && hasSpecialChars), result: "strong" },
        { check: () => passw.length > 10 && (hasLetters && hasNumbers) || passw.length > 10 && (hasLetters && hasSpecialChars) || passw.length > 10 && (hasNumbers && hasSpecialChars), result: "medium" },
        { check: () => passw.length > 10 && (hasLetters || hasNumbers || hasSpecialChars), result: "weak" },
    ];

    for (const condition of conditions) {
        if (condition.check()) {
            return condition.result;
        }
    }

    return "invalid";
}