var fs = require("fs-extra");
var _ = require("lodash");
var args = process.argv;
var writeoptions = { spaces: 4 };

function filterToken(arr, token) {
    return arr.filter(function(project) {
        return token === project.token;
    });
}
function existsIn(arr, token) {
    return arr.filter(function(project) {
        return token === project.token;
    }).length;
}

if (args.length < 3) {
    return console.log("format is: move-project [from] [to] [token]");
}
var from = args[2];
var to = args[3];
var token = args[4];
var from_projects = require(from);
var to_projects = require(to);

if (existsIn(to_projects, token)) {
    return console.log(token + " already in " + to);
}

var target = filterToken(from_projects, token);
if (target.length < 1) {
    return console.log(token + " project token not found in " + from);
}
if (target.length > 1) {
    return console.log(
        token + " project token was found more than once in " + from
    );
}

fs.writeJsonSync(from, _.difference(from_projects, target), writeoptions);
fs.writeJsonSync(to, _.union(to_projects, target), writeoptions);
