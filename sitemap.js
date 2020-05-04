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
    {
        filename: "about/index.html",
        template: "src/about.pug",
        inNav: true,
        title: "About",
        topDir: "../",
        imgDir: "static/img/"
    },
    {
        filename: "spineapp/index.html",
        template: "src/spineapp.pug",
        inNav: true,
        title: "SpineApp",
        topDir: "../",
        imgDir: "static/img/husky/"
    }
];

const socials = [
    {
        name: "GitHub",
        link: "https://github.com/renojvarghese"
    },
    {
        name: "Behance",
        link: "https://www.behance.net/renojvarghese"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/renoj-varghese/"
    }
];

const contact = [];
module.exports = {
    projectTemplate: "src/projects/project.pug",
    pages: [home, ...current_projects],
    others: others,
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
