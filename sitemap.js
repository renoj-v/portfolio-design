const home = {
    filename: "index.html",
    template: "src/index.pug",
    inNav: false,
    title: "Renoj Varghese",
    topDir: "",
    imgDir: "static/img/"
};

const projects = [
    {
        filename: "projects/musicvisualizer/index.html",
        template: "src/projects/musicvisualizer.pug",
        inNav: true,
        title: "Web Music Visualiser",
        topDir: "../../",
        imgDir: "static/img/musicvisualizer"
    }
];
const others = [];

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
    pages: [home, ...projects, ...others],
    nav: {
        home: home,
        others: others,
        socials: socials.slice(0, 2),
        projects: projects
    },
    footer: {
        socials: socials
    }
};
