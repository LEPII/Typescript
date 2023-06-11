// given two strings, write a function to determine if the second string is an anagram of the first. 
function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var counter1 = {};
    var counter2 = {};
    for (var _i = 0, str1_1 = str1; _i < str1_1.length; _i++) {
        var char = str1_1[_i];
        counter1[char] = (counter1[char] || 0) + 1;
    }
    for (var _a = 0, str2_1 = str2; _a < str2_1.length; _a++) {
        var char = str2_1[_a];
        counter2[char] = (counter1[char] || 0) + 1;
    }
    for (var key in counter1) {
        if (!(key in counter2) || counter1[key] !== counter2[key]) {
            return false;
        }
    }
    return true;
    console.log(counter1);
    console.log(counter2);
}
console.log(anagram("epod", "dope"));
