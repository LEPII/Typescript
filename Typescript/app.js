"use strict";
class FootballTeams {
    constructor(team, year, id) {
        this.team = team;
        this.year = year;
        this.id = id;
        this.rivalTeams = [];
        this.currentRoster = [];
    }
    addPlayer(...player) {
        this.currentRoster.push(...player);
    }
}
const saints = new FootballTeams("New Orleans Saints", 2021, "id1");
const currentRoster = () => {
    console.log(`The ${saints.year} ${saints.team}'s Roster: ${saints.currentRoster}`);
};
const mvps = saints.addPlayer("Drew Brees", "Alvin Kamara", "Cam Jordan");
currentRoster();
class NbaTeams extends  {
}
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
const hero = {
    name: "Jon Snow",
    age: 25,
    shifter: true,
    role: Titans.Warhammer,
};
const underdog = {
    name: "Jimmy Butler",
    age: 33,
    shifter: true,
    role: Titans.Beast,
};
const villan = {
    name: "Homelander",
    age: 3,
    shifter: true,
    role: Titans.Attack,
};
const finalBattle = (input1, input2) => {
    let finalShowdown;
    if (typeof input1 === "boolean" && typeof input2 === "boolean")
        finalShowdown = `${underdog.role} vs ${villan.role}`;
    else {
        finalShowdown = input1.toString() + input2.toString();
    }
    return finalShowdown;
};
