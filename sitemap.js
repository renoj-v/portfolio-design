const home = {
    filename: "index.html",
    template: "src/index.pug",
    inNav: false,
    title: "Renoj Varghese",
    topDir: "",
    imgDir: "static/img/"
};

const current_projects = require("./current_projects.json");

const others = [
];

const socials = [
    {
        name: "GitHub",
        link: "https://github.com/renojvarghese"
    },
    {
        name: "Behance",
        link: "https://www.behance.net/renojvargh78ed"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/renoj-varghese/"
    }
];

const contact = [];
module.exports = {
    projectTemplate: "src/projects/project.pug",
    pages: [home, ...current_projects, ...others],
    nav: {
        home: home,
        others: others,
        socials: socials,
        projects: current_projects
    },
    footer: {
        socials: socials
    }
};
