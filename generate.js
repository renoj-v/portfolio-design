var fs = require("fs");
var sitemap = require("./sitemap.js");

var projectString = fs.readFileSync(sitemap.projectTemplate, "utf-8");

sitemap.pages.forEach(function(page, i) {
    if (page.template && !fs.existsSync(page.template)) {
        fs.writeFileSync(page.template, projectString);
    }
    if (page.imgDir && !fs.existsSync(page.imgDir)) {
        fs.mkdirSync(page.imgDir);
    }
});
