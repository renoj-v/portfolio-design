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
module.exports = {
    projectTemplate: "src/projects/project.pug",
    pages: [home, ...projects, ...others],
    nav: [
        {
            isDrop: false,
            page: home
        },
        {
            isDrop: true,
            name: "Projects",
            page: home,
            subpages: projects
        },
        ...others.map(function(other) {
            return {
                isDrop: false,
                page: other
            };
        })
    ]
};
