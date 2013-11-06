require("../console++.js");

console.setLevel(console.LEVELS.NONE);

console.log("A (boring) console.log message");

console.debug("An (irrelevant) console.debug message");

console.info("A (somewhat important) console.info message");

console.warn("A (quite important) console.warning message");

console.error("A (critical!) console.error message");

var message = "#red{this} is #cyan{a} #yellow{nice} message";
console.debug(message);

function printLevels() {
    console.log("log");
    console.debug("debug " + console.str2clr("#cyan{verde}"));
    console.info("info", "info2");
    console.warn("warning #blink{blink}");
    console.error("error");
}

printLevels();

console.setLevel(console.LEVELS.DEBUG);
printLevels();

console.disableTimestamp();
console.setLevel(console.LEVELS.INFO);
printLevels();
console.enableTimestamp();
require("../console++.js");

console.setLevel(console.LEVELS.WARN);
console.disableColor();
printLevels();
console.enableColor();

console.enableJSONOutput();
console.setLevel(console.LEVELS.DEBUG);
printLevels();

try {
    undefined.foo;
}
catch (e){
    console.error("exception test", e);
}

try {
    throw {"type": "custom error", "msg":"something"};
}
catch (e){
    console.error("exception test2", e);
}
console.disableJSONOutput();

console.enableMessageColor();
console.setLevel(console.LEVELS.ERROR);
printLevels();

console.logObject({"log": "this", "deep": {"obj": 1}});
console.logObject({"log": "this", "deep": {"obj": 1}}, "this outputs nothing");
console.logObject({"level": "ERROR", "@timestamp": new Date(10000)});

for (i in console) {
    console.log(i + " " + typeof(console[i]));
}
