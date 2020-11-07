var personData = [
    ["mav120", 1, "Mathew Varughese", "CS 2020 | CSC VP 2018 - 2020, Mentorship Founder", "https://www.linkedin.com/in/matvarughese/"]
    ["brh114", 1, "Brandon He", "CS 2021", "https://www.linkedin.com/in/brandonhe/"],
    ["zhw78", 2, "Zhengming Wang", "CS 2022 | CSC Pres 2020-Present", "https://www.linkedin.com/in/zhengwing_wang/"],
    ["rog13", 3, "Richie Goulazian", "CS 2023 | CSC Director 2020-Present ", "" ],
    ["kb", 4, "Kabilan Balasubramani", "CS 2024", "" ],
    ["agf", 2, "Aiden Grey Fertich", "CS 2022", "" ],
    ["sr", 3, "Sydni Roller", "CS 2023", ""],
    ["cg", 3, "Caelo Go", "CS 2023", ""],
    ["ag", 3, "Alexandar Grattan", "CS+DNID 2023", ""]
]

var links = [
    ["mav120", "zhw78"],
    ["mav120", "rog13"],
    ["mav120", "kb"],
    ["brh114", "agf"],
    ["brh114", "sr"],
    ["agf", "cg"],
    ["agf", "ag"],

]

var personMap = personData.reduce(function(acc, val) {
    acc[val[0]] = val
    return acc
}, {})

links.map(function(link) {
    var mentorID = link[0]
    var menteeID = link[1]
    var mentor = personMap[mentorID]
    var mentee = personMap[menteeID]
    return {
        parent: mentor[1] - mentee[1],
        text: mentee,
    }
})