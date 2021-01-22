let intern = "intern";

let salaries = {
    Trudie: 98311,
    Monique: 102525,
    Taunya: 265436,
    Pamela: intern,
    Kenisha: 250967,
    Vergie: 68621,
    Elvina: 88935,
    Brittny: 251569,
    Brett: 55658,
    Gillian: 264467,
    Amie: intern,
    Lacey: 98986,
    Susanne: 74833,
    Leonard: 61230,
    Anastasia: 56256,
    Alona: 113901,
    Pricilla: 106730,
    Julene: 279553,
    Barrett: 70687,
    Annika: intern,
    Maybelle: 200963,
    Virgie: 201997,
    Parker: 119879,
    Bettye: intern,
    Amal: 112783,
    Kina: intern,
    Sparkle: 57785,
    Debbi: 71139,
    Katherine: intern,
    Devona: 51325,
    Jake: 283782,
    Evan: intern,
    Breann: intern,
    Jeffery: 95836,
    Coral: 109686, 
    Madie: intern,
    Rosemary: 76613,
    Dulcie: 225397,
    Celena: 73214,
    Maxine: 53210,
    Tierra: 96672,
    Lynetta: 208919,
    Delta: 256844,
    Marguerita: intern,
    Seema: intern,
    Ben: intern,
    Sherita: 85298,
    Eden: 295511,
    Hilda: 75828,
    Stefanie: 54703
}

for(let salary in salaries){
    let value = salaries[salary];
    if(value != intern){
        salaries[salary] = value*2;
    }
}
console.log(salaries);