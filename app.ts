interface Person {
  name: string;
  age: number;
  shifter: boolean;
  role: number
}

enum Titans {
  Armor, 
  Colossal,
  Female,
  Founding,
  Beast,
  Attack,
  Jaw,
  Cart,
  Warhammer
}

const hero: Person = {
  name: "Jon Snow",
  age: 25,
  shifter: true,
  role: Titans.Warhammer,
} 

console.log(hero)