var Titans;
(function (Titans) {
    Titans[Titans["Armor"] = 0] = "Armor";
    Titans[Titans["Colossal"] = 1] = "Colossal";
    Titans[Titans["Female"] = 2] = "Female";
    Titans[Titans["Founding"] = 3] = "Founding";
    Titans[Titans["Jaw"] = 4] = "Jaw";
    Titans[Titans["Cart"] = 5] = "Cart";
    Titans[Titans["Warhammer"] = 6] = "Warhammer";
    Titans["Beast"] = "Beast";
    Titans["Attack"] = "Attack";
})(Titans || (Titans = {}));
var hero = {
    name: "Jon Snow",
    age: 25,
    shifter: true,
    role: Titans.Warhammer,
};
var underdog = {
    name: "Jimmy Butler",
    age: 33,
    shifter: true,
    role: Titans.Beast,
};
var villan = {
    name: "Homelander",
    age: 3,
    shifter: true,
    role: Titans.Attack,
};
var finalBattle = function (input1, input2) {
    var finalShowdown;
    if (typeof input1 === "boolean" && typeof input2 === "boolean")
        finalShowdown = "".concat(underdog.role, " vs ").concat(villan.role);
    else {
        finalShowdown = input1.toString() + input2.toString();
    }
    return finalShowdown;
};
var finale = finalBattle(hero.shifter, villan.shifter);
console.log(finale);
var Alterfinale = finalBattle(villan.age, villan.shifter);
console.log(Alterfinale);
