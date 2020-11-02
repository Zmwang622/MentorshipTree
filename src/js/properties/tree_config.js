var config = {
    container: "#mentorship-tree",
    animateOnInit: false,
    rootOrientation: 'NORTH',
    siblingSeparation: 40,
    subtreeSeparation: 30,
    hideRootNode: true,
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
root = {};
