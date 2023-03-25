// OBJECTS-LEV-1_2

let person = {
    name: "Claudio",
    age: 35,

    sagNameAlter: () => {
        // window.alert(person.name + person.age)
    }
}

person.sagNameAlter()
console.log(person.name, person.age)

// OBJECTS-LEV-1_4

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1], unsereHaustiere[1].names[2])
console.log(unsereHaustiere[1].names)

unsereHaustiere[1].names = ["Snoopy", "Bello", "Hayvan"]
console.log(unsereHaustiere[1].names)

// OBJECTS-LEV-1_5

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schreibtisch.schublade)
console.log(unserLager.schrank["Untere Schublade"])
console.log(unserLager.schrank["Obere Schublade"].Ordner2)

// OBJECTS-LEV-1_6


let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

console.log(myMusic)
console.log(myMusic[0].kunstler)
console.log(myMusic[1].formate[3])
console.log(myMusic[1].gold)
console.log(myMusic[2].release_jahr, myMusic[3].release_jahr)
console.log(myMusic[3].formate[2])
console.log(myMusic[3].title.slice(17, 21))
console.log(myMusic[2].title.slice(13))
console.log(myMusic[1].kunstler.slice(5))

// OBJECTS-LEV-1_7

let myMusic2 = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

let result = document.getElementById("result")

myMusic2.forEach((music) => {
    result.innerHTML += `${music.kunstler} <br> ${music.title} <br> ${music.formate} <br><br>`
    if (music.release_jahr > 1975) {
        console.log(music.release_jahr)
    }
})

// OBJECTS-LEV-1_8

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach((resSD) => {
    console.log(resSD.name)
    console.log(resSD.coop)
    console.log(resSD.emails)
    console.log(resSD.address.city)
})

// OBJECTS-LEV-2_1

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

let newNameArray = []

edelMetallPreise.forEach((emName) => {
    console.log(emName.name)
    newNameArray.push(emName.name)
})

console.log(newNameArray)

edelMetallPreise.map((emName2) => {
    console.log(emName2.name)
})

let neuesPreisArray = []

edelMetallPreise.forEach((eachPreise) => {
    console.log(eachPreise.preiseGramEuro)
    neuesPreisArray.push(eachPreise.preiseGramEuro)
})

console.log(neuesPreisArray)

edelMetallPreise.map((mapPreise) => {
    console.log(mapPreise.preiseGramEuro)
})

let neuesChangeArray = []

edelMetallPreise.forEach((forChange) => {
    console.log(forChange.veraenderung)
    neuesChangeArray.push(forChange.veraenderung)
})

console.log(neuesChangeArray)

edelMetallPreise.map((mapChange) => {
    console.log(mapChange.veraenderung)
})

let preiseOver50 = []

edelMetallPreise.filter((filterPreis) => {
    console.log(filterPreis.preiseGramEuro)
    if (filterPreis.preiseGramEuro > 50) {
        preiseOver50.push(filterPreis.preiseGramEuro)
    }
})

console.log(preiseOver50)

const pName = document.getElementById("pName")
const pPreis = document.getElementById("pPreis")
const pChange = document.getElementById("pChange")

pName.innerHTML = `${newNameArray[0]}<br>${newNameArray[1]}<br>${newNameArray[2]}<br>${newNameArray[3]}<br>${newNameArray[4]}<br>${newNameArray[5]}<br>${newNameArray[6]}<br>${newNameArray[7]}<br>${newNameArray[8]}`

pPreis.innerHTML = `${neuesPreisArray[0]}<br>${neuesPreisArray[1]}<br>${neuesPreisArray[2]}<br>${neuesPreisArray[3]}<br>${neuesPreisArray[4]}<br>${neuesPreisArray[5]}<br>${neuesPreisArray[6]}<br>${neuesPreisArray[7]}<br>${neuesPreisArray[8]}`

pChange.innerHTML = `${neuesChangeArray[0]}<br>${neuesChangeArray[1]}<br>${neuesChangeArray[2]}<br>${neuesChangeArray[3]}<br>${neuesChangeArray[4]}<br>${neuesChangeArray[5]}<br>${neuesChangeArray[6]}<br>${neuesChangeArray[7]}<br>${neuesChangeArray[8]}<br>`

// OBJECTS-LEV-2_2

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];


singers.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // Großbuchstaben verwenden, um die Groß-/Kleinschreibung zu ignorieren
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    return 0; // Namen sind gleich
});

console.log(singers);


