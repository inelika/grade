
const studentsData = [

    {
        firstname: "asem",
        lastname: "isma",
        email: "asem2236@gmail.com",
        phane: +7777777777,
        country:"germany",
        subject: "math",
        score: 97,
        favFood: ["lasagna", "pasta"]
    },
    {
        firstname: "nastya",
        lastname: "kalinina",
        email: "nastya@gmail.com",
        phane: +7029848574,
        country:"france",
        subject: "countrysmth",
        score: 99,
        favFood: ["manty", "plov"]
    },
    {
        firstname: "liza",
        lastname: "stankenvish",
        email: "liza.@gmail.com",
        phane: +7947598327,
        country:"kazakstan",
        subject: "PER",
        score: 100,
        favFood: ["tom yam", "avacado"]
    },
    {
        firstname: "yenlik",
        lastname: "dosan",
        email: "enlik@gmail.com",
        phane: +77084060697,
        country:"italy",
        subject: "art",
        score: 97,
        favFood: ["udon", "kimbap"]
    },
    {
        firstname: "gulim",
        lastname: "almaganbetova",
        email: "guka@gmail.com",
        phane: +777707248073,
        country:"AEO",
        subject: "algebra",
        score: 70,
        favFood: ["ice cream", "coffee"]
    },
    {
        firstname: "aitolqun",
        lastname: "zheksembaeva",
        email: "aitol@gmail.com",
        phane: +77770776873,
        country:"Japan",
        subject: "IT",
        score: 70,
        favFood: ["ratatui", "tea"]
    },
    {
        firstname: "dayana",
        lastname: "lutsay",
        email: "daya@gmail.com",
        phane: +777029374,
        country:"russia",
        subject: "geometry",
        score: 85,
        favFood: ["apple", "pie"]
    },
    {
        firstname: "nika",
        lastname: "lyalina",
        email: "nikaa298@gmail.com",
        phane: +777827649556,
        country:"korea",
        subject: "languges",
        score: 90,
        favFood: ["chiken", "roll",
            {  type:["cold", "hot" ]
            }
        ]
    },
]

for (let i = 0; i < studentsData.length; i++) {
    let score = studentsData[i].score;

    if (score > 90) {
        studentsData[i].score = "A";
    } else if (score > 70) {
        studentsData[i].score = "B";
    } else if (score > 50) {
        studentsData[i].score = "C";
    } else {
        studentsData[i].score = "F";
    }
    console.log(studentsData[i].firstname, studentsData[i].score);
}
