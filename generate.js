// a personal script for generating sitemap
var fs = require("fs-extra");
var _ = require("lodash");
var path = require("path");
var sitemap = require("./sitemap.js");
var pages = sitemap.pages;
var silent = require("./silent_projects.json");
var silent_dir = "./silent/";
var projectString = fs.readFileSync(sitemap.projectTemplate, "utf-8");

var contradiction = _.intersection(silent, pages);
if (contradiction.length > 0) {
    return console.log("matches in both silent and current pages. Please fix");
}

silent.forEach(function(page, i) {
    if (page.template && fs.existsSync(page.template)) {
        fs.moveSync(page.template, path.resolve(silent_dir, page.template));
        fs.moveSync(page.imgDir, path.resolve(silent_dir, page.imgDir));
        fs.removeSync(page.imgDir);
    }
});
pages.forEach(function(page, i) {
    if (fs.pathExistsSync(path.resolve(silent_dir, page.template))) {
        fs.moveSync(path.resolve(silent_dir, page.template), page.template);
        fs.moveSync(path.resolve(silent_dir, page.imgDir), page.imgDir);
        fs.removeSync(path.resolve(silent_dir, page.imgDir));
        return;
    }
    if (page.template && !fs.existsSync(page.template)) {
        fs.writeFileSync(page.template, projectString);
    }
    if (page.imgDir && !fs.existsSync(page.imgDir)) {
        fs.mkdirSync(page.imgDir);
    }
});
