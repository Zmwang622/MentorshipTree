var config = {
    container: "#mentorship-tree",
    animateOnInit: false,
    rootOrientation: 'NORTH',
    siblingSeparation: 40,
    subtreeSeparation: 30,
    connectors: {
        type: 'step'
    },

    // node properties
    node: {
        HTMLclass: 'person',
        collapsable:true
    },
    animation: {
        nodeAnimation: "easeOutBounce",
        nodeSpeed: 700,
        connectorsAnimation: "bounce",
        connectorsSpeed: 700
    }
},

matv = {
    collapsed: true,
    text:{
        name: "Mathew Varughese",
        desc: "CS 2020 | CSC VP 2018-2020, Mentorship Founder",
        contact: {
            val: "LinkedIn: matvarughese",
            href: "https://www.linkedin.com/in/matvarughese/",
            target:"_blank"
        }
    }
},

zhengmingw = {
    parent: matv, 
    image: "img/ming.JPG", 
    collapsed: true,
    text:{
        name:'Zhengming Wang',
        desc: "CS 2022 | CSC President 2020-Present ",
        contact: {
            val: "LinkedIn: zhengmingwang",
            href: "https://www.linkedin.com/in/zhengmingwang",
            target:"_blank"
        }
    }
}, 

richardg = {
    parent: matv, 
    text: {
        name: "Richie Goulazian",
        desc: "CS 2023 | CSC Director 2020-Present ",
        contact: {
            val: "LinkedIn: rgoulazian",
            href: "https://www.linkedin.com/in/rgoulazian/",
            target:"_blank"
        }
    }
}, 

simons = {
    parent: zhengmingw, 
    text:{
        name:"Simon Schueller",
        desc: "CS 2024",
        contact: {
            val: "LinkedIn: simon-schueller",
            href: "https://www.linkedin.com/in/simon-schueller",
            target:"_blank"
        }
    }
} 

var tree_config = [config, matv, zhengmingw, richardg,simons]