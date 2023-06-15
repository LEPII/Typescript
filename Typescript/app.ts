class FootballTeams {
  private rivalTeams: string[] = [];
  public currentRoster: string[] = [];

  constructor(public readonly team: string, public readonly year: number, private readonly id: string) {
  }

  addPlayer(this:FootballTeams, ...player: string[]){
    this.currentRoster.push( ...player)
  }
}

const saints = new FootballTeams( "New Orleans Saints", 2021, "id1") 

const currentRoster = () => {
console.log(`The ${saints.year} ${saints.team}'s Roster: ${saints.currentRoster}`)
}

const mvps = saints.addPlayer("Drew Brees", "Alvin Kamara", "Cam Jordan", )
currentRoster()

class NbaTeams extends FootballTeams {
 constructor (id:string, public cities: string[] ) {
  super();
 }
}






interface Person {
  name: string;
  age: number;
  shifter: boolean;
  role: number | string;
}

enum Titans {
  Armor,
  Colossal,
  Female,
  Founding,
  Jaw,
  Cart,
  Warhammer,
  Beast = "Beast",
  Attack = "Attack",
}

const hero: Person = {
  name: "Jon Snow",
  age: 25,
  shifter: true,
  role: Titans.Warhammer,
};

const underdog: Person = {
  name: "Jimmy Butler",
  age: 33,
  shifter: true,
  role: Titans.Beast,
};

const villan: Person = {
  name: "Homelander",
  age: 3,
  shifter: true,
  role: Titans.Attack,
};

const finalBattle = (
  input1: number | string | boolean,
  input2: number | string | boolean
) => {
  let finalShowdown;
  if (typeof input1 === "boolean" && typeof input2 === "boolean")
    finalShowdown = `${underdog.role} vs ${villan.role}`;
  else {
    finalShowdown = input1.toString() + input2.toString();
  }
  return finalShowdown;
};

