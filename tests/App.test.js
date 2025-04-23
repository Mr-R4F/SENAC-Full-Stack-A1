import { checkPasswordStrength } from "../main/function.js";

test('Expect a weak strength password', () => { 
    expect(checkPasswordStrength("abcde")).toBe("weak");
    expect(checkPasswordStrength("12345")).toBe("weak");
    expect(checkPasswordStrength("abc12")).toBe("weak");

    expect(checkPasswordStrength("abcdef")).toBe("weak");
    expect(checkPasswordStrength("123456")).toBe("weak");

    expect(checkPasswordStrength("1234568910")).toBe("weak");
    expect(checkPasswordStrength("abcdefghijk")).toBe("weak");
    expect(checkPasswordStrength("@@@#######!")).toBe("weak");
});

test('Expect a medium strength password', () => { 
    expect(checkPasswordStrength("12345abc")).toBe("medium");

    expect(checkPasswordStrength("abc34568910")).toBe("medium");
    expect(checkPasswordStrength("abcdefghij!")).toBe("medium");
    expect(checkPasswordStrength("@@@#######9")).toBe("medium");
});

test('Expect a strong strength password', () => { 
    expect(checkPasswordStrength("12345bcd@#@")).toBe("strong");
});

test('Expect an invalid password', () => { 
    expect(checkPasswordStrength(null)).toBe("invalid");
    expect(checkPasswordStrength(undefined)).toBe("invalid");
    expect(checkPasswordStrength("")).toBe("invalid");
});