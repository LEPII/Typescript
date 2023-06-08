var Titans;
(function (Titans) {
    Titans[Titans["Armor"] = 0] = "Armor";
    Titans[Titans["Colossal"] = 1] = "Colossal";
    Titans[Titans["Female"] = 2] = "Female";
    Titans[Titans["Founding"] = 3] = "Founding";
    Titans[Titans["Beast"] = 4] = "Beast";
    Titans[Titans["Attack"] = 5] = "Attack";
    Titans[Titans["Jaw"] = 6] = "Jaw";
    Titans[Titans["Cart"] = 7] = "Cart";
    Titans[Titans["Warhammer"] = 8] = "Warhammer";
})(Titans || (Titans = {}));
var hero = {
    name: "Jon Snow",
    age: 25,
    shifter: true,
    role: Titans.Warhammer,
};
console.log(hero);
