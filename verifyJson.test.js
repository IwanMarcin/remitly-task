const verifyJSON = require("./verifyJson");
const jsonFilePath_testCase1 = "./tests/input_testCase1.json";
const jsonFilePath_testCase2 = "./tests/input_testCase2.json";
const jsonFilePath_testCase3 = "./tests/input_testCase3.json";
const jsonFilePath_testCase4 = "./tests/input_testCase4.json";

test('return false if a Resource property equals "*"', () => {
    expect(verifyJSON(jsonFilePath_testCase1)).toBe(false);
});

test('return true if a Resource property does not equal "*"', () => {
    expect(verifyJSON(jsonFilePath_testCase2)).toBe(true);
});

test("return true if JSON file is empty", () => {
    expect(verifyJSON(jsonFilePath_testCase3)).toBe(true);
});

test("return true if JSON file has invalid syntax", () => {
    expect(verifyJSON(jsonFilePath_testCase4)).toBe(true);
});
