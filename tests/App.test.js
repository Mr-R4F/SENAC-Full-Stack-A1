import { checkPasswordStrength } from "../main/function.js";

test('Expect a weak strength password', () => { 
    expect(checkPasswordStrength(null)).toBe("weak");
    expect(checkPasswordStrength(undefined)).toBe("weak");
    expect(checkPasswordStrength("abcde")).toBe("weak");
    expect(checkPasswordStrength("12345")).toBe("weak");
});

test('Expect a medium strength password', () => { 
    expect(checkPasswordStrength("12345abc")).toBe("medium");
});

test('Expect strong strength password', () => { 
    expect(checkPasswordStrength("12345bcd@#@")).toBe("strong");
});

test('Expect an invalid password', () => { 
    expect(checkPasswordStrength("aaaaaaaaaaaaaa")).toBe("invalid");
});