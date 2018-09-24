// a personal script for adding projects to portfolio site.

var fs = require("fs");
var args = process.argv;
var current_projects_path = "./current_projects.json";

var current_projects = require(current_projects_path);
var token = args[2];
var title = args[3];
var description = args[4];

current_projects.unshift({
    filename: "projects/" + token + "/index.html",
    template: "src/projects/" + token + ".pug",
    inNav: true,
    title: title,
    topDir: "../../",
    imgDir: "static/img/" + token + "/",
    icon: "static/img/" + token + "/icon.jpg",
    token: token,
    descripiion: description
});

fs.writeFileSync(
    current_projects_path,
    JSON.stringify(current_projects, null, 4),
    "utf8"
);
